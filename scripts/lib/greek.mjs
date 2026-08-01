import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GLOSS_EN } from './gloss.en.mjs';

// Turns the Nestle 1904 CSV into Greek token objects for a chapter of a book.
// Shared by scripts/build.mjs. Language-neutral: gloss comes from the English
// lexicon (the base language); per-language inspector glosses live in
// src/data/lexicon.<lang>.ts and are looked up at render time by lemma.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// CSV BCV prefix → file. Each file is the same tagged Nestle 1904 edition,
// filtered to one book.
const BOOK_CSVS = {
  John: '../data/Nestle1904-john.csv',
  Matt: '../data/Nestle1904-matt.csv',
};
const rowCache = new Map();
function bookRows(book) {
  if (!rowCache.has(book)) {
    const csv = path.join(__dirname, BOOK_CSVS[book]);
    rowCache.set(book, fs.readFileSync(csv, 'utf8').split('\n').slice(1).map((l) => l.split('\t')));
  }
  return rowCache.get(book);
}

// ── Morphology (Robinson tags → readable) ─────────────────────────────────
const CASE = { N: 'nom.', G: 'gen.', D: 'dat.', A: 'acc.', V: 'voc.' };
const NUM = { S: 'sg.', P: 'pl.' };
const GEN = { M: 'masc.', F: 'fem.', N: 'neut.' };
const TENSE = { P: 'pres.', I: 'impf.', F: 'fut.', A: 'aor.', R: 'perf.', L: 'plupf.', X: 'perf.' };
const VOICE = { A: 'act.', M: 'mid.', P: 'pass.', E: 'mid./pass.', D: 'mid. dep.', O: 'pass. dep.', N: 'mid./pass. dep.' };
const MOOD = { I: 'ind.', S: 'subj.', O: 'opt.', M: 'impv.', N: 'inf.', P: 'ptcp.' };
const cng = (s) => [CASE[s[0]], NUM[s[1]], GEN[s[2]]].filter(Boolean).join(' ');

export function expandMorph(tag) {
  if (!tag) return '';
  const seg = tag.split('-');
  switch (seg[0]) {
    case 'N': return seg[1] === 'PRI' ? 'proper noun (indeclinable)' : seg[1] === 'OI' ? 'noun (indeclinable)' : `noun, ${cng(seg[1])}`;
    case 'A': return seg[1] === 'NUI' ? 'numeral (indeclinable)' : `adj., ${cng(seg[1])}`;
    case 'T': return `article, ${cng(seg[1])}`;
    case 'P':
      if (/^[12]/.test(seg[1])) {
        const person = seg[1][0] === '1' ? '1st person' : '2nd person';
        return `pers. pron., ${person}, ${CASE[seg[1][1]] ?? ''} ${NUM[seg[1][2]] ?? ''}`.trim();
      }
      return `pers. pron., ${cng(seg[1])}`;
    case 'R': return `rel. pron., ${cng(seg[1])}`;
    case 'D': return `dem. pron., ${cng(seg[1])}`;
    case 'I': return `interrog. pron., ${cng(seg[1])}`;
    case 'X': return `indef. pron., ${cng(seg[1])}`;
    case 'F': return `refl. pron., ${cng(seg[1])}`;
    case 'K': case 'Q': return `correlative pron., ${cng(seg[1])}`;
    case 'V': {
      let tvm = seg[1], second = '';
      if (tvm.startsWith('2')) { second = '2nd '; tvm = tvm.slice(1); }
      let out = `${second}${TENSE[tvm[0]] ?? tvm[0]} ${VOICE[tvm[1]] ?? tvm[1]} ${MOOD[tvm[2]] ?? tvm[2]}`;
      const tail = seg[2];
      if (tail && /^[123][SP]$/.test(tail)) out += `, ${tail[0]}${tail[1] === 'S' ? 'sg' : 'pl'}.`;
      else if (tail && tail.length === 3) out += `, ${cng(tail)}`;
      return out;
    }
    case 'CONJ': return 'conj.';
    case 'PREP': return 'prep.';
    case 'ADV': return 'adv.';
    case 'PRT': return 'particle';
    case 'COND': return 'conj. (conditional)';
    case 'INJ': return 'interjection';
    case 'HEB': return 'Hebrew term';
    case 'ARAM': return 'Aramaic term';
    default: return tag;
  }
}

// ── Transliteration (approximate, scholarly) ──────────────────────────────
const BASE = { α: 'a', β: 'b', γ: 'g', δ: 'd', ε: 'e', ζ: 'z', η: 'ē', θ: 'th', ι: 'i', κ: 'k', λ: 'l', μ: 'm', ν: 'n', ξ: 'x', ο: 'o', π: 'p', ρ: 'r', σ: 's', ς: 's', τ: 't', υ: 'y', φ: 'ph', χ: 'ch', ψ: 'ps', ω: 'ō' };
const VOWELS = new Set(['a', 'e', 'ē', 'i', 'o', 'ō', 'y']);
export function translit(word) {
  const nfd = word.normalize('NFD');
  let rough = false, stripped = '';
  for (const ch of nfd) {
    const cp = ch.codePointAt(0);
    if (cp === 0x0314) { rough = true; continue; }
    if (cp >= 0x0300 && cp <= 0x036f) continue;
    stripped += ch;
  }
  const lower = stripped.toLowerCase();
  const wasUpper = stripped[0] !== lower[0];
  let out = '', prevVowel = false;
  for (let i = 0; i < lower.length; i++) {
    const c = lower[i];
    if (c === 'γ' && 'γκξχ'.includes(lower[i + 1])) { out += 'n'; prevVowel = false; continue; }
    if (c === 'υ') { out += prevVowel ? 'u' : 'y'; prevVowel = true; continue; }
    const m = BASE[c];
    if (m === undefined) { out += c; prevVowel = false; continue; }
    out += m; prevVowel = VOWELS.has(m);
  }
  if (word.normalize('NFC')[0] === 'ῥ' || lower[0] === 'ρ') out = 'rh' + out.slice(1);
  else if (rough && VOWELS.has(out[0])) out = 'h' + out;
  if (wasUpper) out = out[0].toUpperCase() + out.slice(1);
  return out;
}

export function splitPunct(text) {
  const m = text.match(/[.,;:!?··]+$/);
  if (m && m.index > 0) return { core: text.slice(0, m.index), after: m[0] };
  return { core: text, after: '' };
}

// Personal pronouns gloss by lemma (ἐγώ → “I”), which misleads for the
// plural and oblique forms — override those per surface form.
const FORM_GLOSS = {
  'ἡμεῖς': 'we', 'ἡμᾶς': 'we, us', 'ἡμῶν': 'our, of us', 'ἡμῖν': 'to us',
  'ὑμεῖς': 'you (pl.)', 'ὑμᾶς': 'you (pl.)', 'ὑμῶν': 'your (pl.)', 'ὑμῖν': 'to you (pl.)',
  'με': 'me', 'ἐμέ': 'me', 'μου': 'my, of me', 'ἐμοῦ': 'my, of me', 'μοι': 'to me', 'ἐμοί': 'to me',
  'σε': 'you', 'σέ': 'you', 'σου': 'your, of you', 'σοῦ': 'your, of you', 'σοι': 'to you', 'σοί': 'to you',
};

// ── Public API ────────────────────────────────────────────────────────────
/** Returns { [verse]: GreekToken[] } for `book` chapter `ch` (book is the CSV
 *  BCV prefix: 'John', 'Matt'). If `only` (an array of verse numbers) is
 *  given, limits output to those verses. */
export function chapterGreek(ch, only, book = 'John') {
  const keep = only ? new Set(only) : null;
  const byVerse = {};
  for (const r of bookRows(book)) {
    if (!r[0] || !r[0].startsWith(`${book} ${ch}:`)) continue;
    const v = Number(r[0].split(':')[1]);
    if (keep && !keep.has(v)) continue;
    (byVerse[v] ??= []).push(r);
  }
  const missing = new Set();
  const out = {};
  for (const [v, ws] of Object.entries(byVerse)) {
    out[v] = ws.map((w, i) => {
      const { core, after } = splitPunct(w[1].normalize('NFC'));
      const lemma = w[5].normalize('NFC');
      const tok = { id: `g${ch}.${v}.${i + 1}`, text: core };
      if (after) tok.after = after;
      tok.lemma = lemma;
      tok.translit = translit(core);
      tok.morph = expandMorph(w[2]);
      const g = FORM_GLOSS[core.toLowerCase()] ?? GLOSS_EN[lemma];
      if (g) tok.gloss = g;
      else missing.add(lemma);
      return tok;
    });
  }
  if (missing.size) console.warn(`  ⚠ chapter ${ch}: no English gloss for ${[...missing].join(' ')}`);
  return out;
}
