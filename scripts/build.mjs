import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chapterGreek } from './lib/greek.mjs';

// Regenerates src/data/john<N>.ts (base = English full Chapter) and
// src/data/john<N>.<lang>.ts (overlays) from scripts/content/*.mjs + the Greek
// source. Run with:  npm run build:data
//
// ── Adding a chapter ──   author scripts/content/john<N>.<lang>.mjs for each
//                         language, add an entry to CHAPTERS below, run build.
// ── Adding a language ──  for every chapter add scripts/content/john<N>.<L>.mjs,
//                         list L in LANGS, add a src/data/lexicon.<L>.ts (for the
//                         inspector) + a UI block in src/data/ui.ts, then wire it
//                         into src/App.tsx (BOOK/imports). Run build.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.join(__dirname, '../src/data');

// 'en' is the base language (emits the full Chapter). Others emit overlays.
const LANGS = ['en', 'sv'];

const CHAPTERS = [
  {
    num: 1,
    titles: { en: 'The Prologue & the First Witnesses', sv: 'Prologen och de första vittnena' },
    summaries: {
      en: 'The Prologue hymns the eternal **Word** — who was with God, was God, and became flesh. Then John the Baptist bears witness, pointing away from himself to *the Lamb of God*, and Jesus gathers his first disciples — Andrew, Peter, Philip, and Nathanael — closing with the promise that they will see heaven opened upon the Son of Man.',
      sv: 'Prologen besjunger det eviga **Ordet** — som var hos Gud, var Gud och blev kött. Sedan vittnar Johannes Döparen och pekar bort från sig själv mot *Guds Lamm*, och Jesus samlar sina första lärjungar — Andreas, Petrus, Filippus och Natanael — och slutar med löftet att de ska se himlen öppen över Människosonen.',
    },
  },
  {
    num: 2,
    titles: { en: 'Cana and the Temple', sv: 'Kana och templet' },
    summaries: {
      en: 'At a wedding in **Cana**, Jesus turns water into wine — the first of his *signs* — and quietly reveals his glory. Then, at Passover in **Jerusalem**, he clears the traders from the temple and speaks of raising “this temple” in three days, meaning his own body. Many believe when they see his signs, yet he does not entrust himself to them, for he knows what is in the human heart.',
      sv: 'Vid ett bröllop i **Kana** förvandlar Jesus vatten till vin — det första av hans *tecken* — och uppenbarar stilla sin härlighet. Sedan, vid påsken i **Jerusalem**, rensar han templet från handelsmännen och talar om att resa upp ”detta tempel” på tre dagar, med sin egen kropp menat. Många kommer till tro när de ser hans tecken, men han anförtror sig inte åt dem, ty han vet vad som bor i människohjärtat.',
    },
  },
  {
    num: 4,
    titles: { en: 'The Samaritan Woman, and the Official’s Son', sv: 'Den samariska kvinnan och ämbetsmannens son' },
    summaries: {
      en: 'Passing through **Samaria**, tired at Jacob’s well, Jesus asks a lone woman for a drink and offers her **living water** — a spring welling up to eternal life. He knows her five husbands, unveils that true worship will be *in spirit and truth*, and tells her plainly, **“I am he.”** She leaves her jar and brings her whole town, and many Samaritans come to believe he is *the Savior of the world*. Back in **Cana**, Jesus heals a royal official’s dying son from a distance — his second sign — and the man’s whole household believes.',
      sv: 'På väg genom **Samarien**, trött vid Jakobs brunn, ber Jesus en ensam kvinna om vatten och erbjuder henne **levande vatten** — en källa som väller fram till evigt liv. Han känner hennes fem män, uppenbarar att sann tillbedjan ska ske *i ande och sanning*, och säger henne rakt ut: **”Det är jag.”** Hon lämnar sin kruka och hämtar hela sin stad, och många samarier kommer till tro att han är *världens Frälsare*. Tillbaka i **Kana** botar Jesus en kunglig ämbetsmans döende son på avstånd — hans andra tecken — och mannens hela hus kommer till tro.',
    },
  },
  {
    num: 3,
    titles: { en: 'Nicodemus & the Friend of the Bridegroom', sv: 'Nikodemus och brudgummens vän' },
    summaries: {
      en: 'By night a ruler named **Nicodemus** comes to Jesus, who tells him no one can see God’s kingdom without being **born from above** — of water and Spirit, as free and untraceable as the wind. The discourse opens onto the Gospel’s most famous words: God *so loved the world* that he gave his only Son, not to condemn it but to save it — and the judgment is simply that the light has come, and people prefer the dark. Then John the Baptist, questioned about baptizing, gives his last and gladdest testimony: *he must increase, but I must decrease.*',
      sv: 'Om natten kommer en rådsherre vid namn **Nikodemus** till Jesus, som säger honom att ingen kan se Guds rike utan att bli **född ovanifrån** — av vatten och Ande, lika fri och ospårbar som vinden. Samtalet mynnar ut i evangeliets mest kända ord: Gud *älskade världen så* att han gav sin ende Son, inte för att döma den utan för att rädda den — och domen är helt enkelt att ljuset har kommit, och människorna föredrar mörkret. Sedan ger Johannes Döparen, tillfrågad om sitt dop, sitt sista och gladaste vittnesbörd: *han måste växa till, men jag måste avta.*',
    },
  },
];

const cap = (s) => s[0].toUpperCase() + s.slice(1);
const TRAIL = /['’”".,;:!?—]+$/u;

function emitEnglish(ch, v, entries) {
  return entries.map(([text, align, supplied], i) => {
    let core = text, after = '';
    const mm = core.match(TRAIL);
    if (mm && mm.index > 0) { after = mm[0]; core = core.slice(0, mm.index); }
    const ids = (align || '').trim() ? align.trim().split(/\s+/) : [];
    const parts = [`id: 'e${ch}.${v}.${i + 1}'`, `text: ${JSON.stringify(core)}`];
    if (after) parts.push(`after: ${JSON.stringify(after)}`);
    parts.push(`align: [${ids.map((x) => `'${x}'`).join(', ')}]`);
    if (supplied) parts.push('supplied: true');
    return `        { ${parts.join(', ')} },`;
  }).join('\n');
}
function emitAnnotations(ch, v, notes) {
  return notes.map((n, i) => {
    const refs = n.refs.trim().split(/\s+/).map((x) => `'${x}'`).join(', ');
    return [
      `        {`, `          id: 'a${ch}.${v}.${i + 1}',`,
      `          kind: ${JSON.stringify(n.kind)},`, `          refs: [${refs}],`,
      `          lemma: ${JSON.stringify(n.lemma)},`, `          title: ${JSON.stringify(n.title)},`,
      `          body: ${JSON.stringify(n.body)},`, `        },`,
    ].join('\n');
  }).join('\n');
}
function emitGreek(tokens) {
  return tokens.map((t) => {
    const parts = [`id: '${t.id}'`, `text: ${JSON.stringify(t.text)}`];
    if (t.after) parts.push(`after: ${JSON.stringify(t.after)}`);
    parts.push(`lemma: ${JSON.stringify(t.lemma)}`, `translit: ${JSON.stringify(t.translit)}`, `morph: ${JSON.stringify(t.morph)}`);
    if (t.gloss) parts.push(`gloss: ${JSON.stringify(t.gloss)}`);
    return `        { ${parts.join(', ')} },`;
  }).join('\n');
}

async function loadContent(chNum, lang) {
  const file = path.join(__dirname, 'content', `john${chNum}.${lang}.mjs`);
  if (!fs.existsSync(file)) return null;
  const mod = await import(`${file}?t=${Date.now()}`);
  return mod.CONTENT;
}

let brokenTotal = 0;
function validate(chNum, greek, content) {
  const ids = new Set(Object.values(greek).flat().map((t) => t.id));
  let broken = 0;
  for (const [v, c] of Object.entries(content)) {
    for (const [, align] of c.english) for (const id of (align || '').trim().split(/\s+/).filter(Boolean)) if (!ids.has(id)) { broken++; console.error(`  ✗ ${chNum}:${v} english → ${id}`); }
    for (const n of c.annotations) for (const id of n.refs.trim().split(/\s+/).filter(Boolean)) if (!ids.has(id)) { broken++; console.error(`  ✗ ${chNum}:${v} note → ${id}`); }
  }
  brokenTotal += broken;
  return broken;
}

for (const chap of CHAPTERS) {
  const ch = chap.num;
  const en = await loadContent(ch, 'en');
  if (!en) throw new Error(`missing base content: john${ch}.en.mjs`);
  const verseNums = Object.keys(en).map(Number).sort((a, b) => a - b);
  const greek = chapterGreek(ch, verseNums);
  validate(ch, greek, en);

  // Base chapter (English).
  let verses = '';
  for (const v of verseNums) {
    if (!en[v]) throw new Error(`john${ch}.en.mjs missing verse ${v}`);
    verses += `    {\n      ref: '${ch}:${v}',\n      chapter: ${ch},\n      verse: ${v},\n`;
    verses += `      greek: [\n${emitGreek(greek[v])}\n      ],\n`;
    verses += `      english: [\n${emitEnglish(ch, v, en[v].english)}\n      ],\n`;
    verses += `      annotations: [\n${emitAnnotations(ch, v, en[v].annotations)}\n      ],\n`;
    verses += `    },\n`;
  }
  let base = "import type { Chapter } from './types';\n\n";
  base += `// The Gospel of John, chapter ${ch}. Greek: Nestle 1904 (public domain).\n`;
  base += '// Translation & annotations: this edition. GENERATED by scripts/build.mjs\n';
  base += `// from scripts/content/john${ch}.en.mjs — edit there, not here.\n\n`;
  base += `export const john${ch}: Chapter = {\n  book: 'John',\n  chapter: ${ch},\n  title: ${JSON.stringify(chap.titles.en)},\n  summary: ${JSON.stringify(chap.summaries.en)},\n  verses: [\n${verses}  ],\n};\n`;
  fs.writeFileSync(path.join(DATA, `john${ch}.ts`), base);

  // Overlays (other languages).
  for (const lang of LANGS) {
    if (lang === 'en') continue;
    const content = await loadContent(ch, lang);
    if (!content) continue;
    validate(ch, greek, content);
    let overlay = '';
    for (const v of verseNums) {
      if (!content[v]) continue;
      overlay += `  ${v}: {\n    english: [\n${emitEnglish(ch, v, content[v].english)}\n    ],\n    annotations: [\n${emitAnnotations(ch, v, content[v].annotations)}\n    ],\n  },\n`;
    }
    const name = `john${ch}`;
    const exportName = `${name}${cap(lang)}`;
    let sv = `import { ${name} } from './${name}';\n`;
    sv += "import type { Annotation, Chapter, EnglishToken } from './types';\n\n";
    sv += `// ${lang} edition of John ${ch}. Shares ${name}’s Greek spine; only the\n`;
    sv += `// translation and annotations differ. GENERATED by scripts/build.mjs\n`;
    sv += `// from scripts/content/john${ch}.${lang}.mjs — edit there, not here.\n\n`;
    sv += `const OVERLAY: Record<number, { english: EnglishToken[]; annotations: Annotation[] }> = {\n${overlay}};\n\n`;
    sv += `export const ${exportName}: Chapter = {\n  ...${name},\n  title: ${JSON.stringify(chap.titles[lang])},\n  summary: ${JSON.stringify(chap.summaries[lang])},\n`;
    sv += `  verses: ${name}.verses.map((v) => ({\n    ...v,\n    english: OVERLAY[v.verse]?.english ?? v.english,\n    annotations: OVERLAY[v.verse]?.annotations ?? v.annotations,\n  })),\n};\n`;
    fs.writeFileSync(path.join(DATA, `john${ch}.${lang}.ts`), sv);
  }
  console.log(`✓ John ${ch}: ${verseNums.length} verses, langs [${LANGS.join(', ')}]`);
}

if (brokenTotal) { console.error(`\n${brokenTotal} broken alignment reference(s).`); process.exit(1); }
console.log('\nAll alignment references valid. Wrote src/data/john*.ts');
