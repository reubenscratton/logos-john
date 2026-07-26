import type { AnnotationKind } from './types';

export type Lang = 'en' | 'sv';

export interface UIStrings {
  /** Label for this language on the toggle. */
  langName: string;
  brandTitle: string;
  subtitle: string;
  book: string;
  chapterWord: string;
  /** Intro paragraph — supports **bold** / *italic* via renderMarkup. */
  intro: string;
  greekLabel: string;
  greekSource: string;
  transLabel: string;
  transSource: string;
  colophon: string;
  kinds: Record<AnnotationKind, string>;
  inspector: { translit: string; lemma: string; parse: string; gloss: string };
}

export const UI: Record<Lang, UIStrings> = {
  en: {
    langName: 'English',
    brandTitle: 'John',
    subtitle: "An annotated translation from the earliest known sources, by Anthropic's Opus 4.8",
    book: 'John',
    chapterWord: 'Chapter',
    intro:
      'Every word of the Greek is linked to its translation. **Hover or tap any word** to light up its ' +
      'counterpart in the other column and the notes that discuss it. The base text is the public-domain ' +
      '*Nestle 1904*; where Papyrus 66 (𝔓⁶⁶, c. 200 CE) bears witness, it is discussed in the margin.',
    greekLabel: 'Greek',
    greekSource: '· Nestle 1904',
    transLabel: 'English',
    transSource: '· this edition',
    colophon:
      'Greek: Nestle 1904 (public domain). Translation & annotations: this edition. ' +
      'A working prototype — the Gospel of John, chapter by chapter.',
    kinds: {
      translation: 'Translation',
      concept: 'Concept',
      grammar: 'Grammar',
      text: 'Text-critical',
      p66: '𝔓⁶⁶ Papyrus 66',
    },
    inspector: { translit: 'translit.', lemma: 'lemma', parse: 'parse', gloss: 'gloss' },
  },
  sv: {
    langName: 'Svenska',
    brandTitle: 'Johannes',
    subtitle: 'En kommenterad översättning från de äldsta kända källorna, av Anthropics Opus 4.8',
    book: 'Johannes',
    chapterWord: 'Kapitel',
    intro:
      'Varje grekiskt ord är länkat till sin översättning. **För muspekaren över eller tryck på ett ord** ' +
      'för att tända dess motsvarighet i den andra spalten och de noter som behandlar det. Grundtexten är den ' +
      'fria *Nestle 1904*; där Papyrus 66 (𝔓⁶⁶, ca 200 e.Kr.) vittnar diskuteras det i marginalen.',
    greekLabel: 'Grekiska',
    greekSource: '· Nestle 1904',
    transLabel: 'Svenska',
    transSource: '· denna utgåva',
    colophon:
      'Grekiska: Nestle 1904 (fri text). Översättning och noter: denna utgåva. ' +
      'En prototyp under arbete — Johannesevangeliet, kapitel för kapitel.',
    kinds: {
      translation: 'Översättning',
      concept: 'Begrepp',
      grammar: 'Grammatik',
      text: 'Textkritik',
      p66: '𝔓⁶⁶ Papyrus 66',
    },
    inspector: { translit: 'translit.', lemma: 'uppslagsord', parse: 'form', gloss: 'betydelse' },
  },
};
