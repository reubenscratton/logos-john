// Detect place-names in the translation tokens by matching gazetteer aliases.
//
// Runs at render time over a verse's word list (longest alias wins), so no
// place data has to be baked into the corpus.

import { PLACES } from '../data/places';
import type { Lang } from '../data/ui';

export interface PlaceSpan {
  start: number; // first token index (inclusive)
  end: number; // last token index (inclusive)
  placeId: string;
}

/** Normalize a surface word: lowercase, straighten apostrophes, drop stray punctuation. */
function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[.,;:!?"“”()]/g, '')
    .trim();
}

type IndexEntry = { words: string[]; placeId: string };

function buildIndex(lang: Lang): IndexEntry[] {
  const entries: IndexEntry[] = [];
  for (const p of PLACES) {
    const aliases = p.aliases?.[lang];
    if (!aliases) continue;
    for (const a of aliases) {
      const words = a.split(/\s+/).map(norm).filter(Boolean);
      if (words.length) entries.push({ words, placeId: p.id });
    }
  }
  // longest first so multi-word names win over their single-word parts
  entries.sort((a, b) => b.words.length - a.words.length);
  return entries;
}

const INDEX: Record<Lang, IndexEntry[]> = {
  en: buildIndex('en'),
  sv: buildIndex('sv'),
};

/** Find non-overlapping place spans across the token texts. */
export function matchPlaces(tokenTexts: string[], lang: Lang): PlaceSpan[] {
  const index = INDEX[lang];
  const words = tokenTexts.map(norm);
  const spans: PlaceSpan[] = [];
  let i = 0;
  while (i < words.length) {
    if (!words[i]) {
      i++;
      continue;
    }
    let matched: IndexEntry | null = null;
    for (const e of index) {
      if (i + e.words.length > words.length) continue;
      let ok = true;
      for (let k = 0; k < e.words.length; k++) {
        if (words[i + k] !== e.words[k]) {
          ok = false;
          break;
        }
      }
      if (ok) {
        matched = e;
        break;
      }
    }
    if (matched) {
      spans.push({ start: i, end: i + matched.words.length - 1, placeId: matched.placeId });
      i += matched.words.length;
    } else {
      i++;
    }
  }
  return spans;
}
