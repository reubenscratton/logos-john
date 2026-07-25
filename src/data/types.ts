// Core data model for the annotated edition.
//
// The whole design turns on stable *token ids*. Every Greek word has one, and
// every English word and annotation records which Greek token id(s) it relates
// to. Cross-column highlighting is then just set-intersection over those ids.

/** A single Greek word (the base text: Nestle 1904, public domain). */
export interface GreekToken {
  /** Stable id, `g{chapter}.{verse}.{index}` e.g. "g1.1.5". */
  id: string;
  /** Surface form, without trailing punctuation. */
  text: string;
  /** Trailing punctuation attached after the word, e.g. "," or "·". */
  after?: string;
  /** Dictionary/lemma form. */
  lemma?: string;
  /** Transliteration (for readers without Greek). */
  translit?: string;
  /** Morphological parse, informal (e.g. "impf. act. ind. 3sg"). */
  morph?: string;
  /** Short gloss. */
  gloss?: string;
}

/** A single English word in the translation. */
export interface EnglishToken {
  id: string;
  text: string;
  after?: string;
  /** Greek token ids this word renders. Empty ⇒ supplied for English idiom. */
  align: string[];
  /** True for words with no direct Greek counterpart (rendered in a lighter ink). */
  supplied?: boolean;
}

export type AnnotationKind =
  | 'translation' // why we rendered it this way
  | 'concept' // the idea in play, background, interpretations
  | 'grammar' // morphology / syntax
  | 'text' // text-critical: manuscripts & variants
  | 'p66'; // what Papyrus 66 specifically witnesses

/** A note tied to one or more Greek tokens. Selecting those tokens surfaces it. */
export interface Annotation {
  id: string;
  kind: AnnotationKind;
  /** Greek token ids this note concerns (drives highlight linkage). */
  refs: string[];
  /** Optional headword shown in the note, usually the Greek lemma. */
  lemma?: string;
  /** Short title. */
  title: string;
  /** Body. Supports a tiny markup subset: **bold**, *italic*, `code`. */
  body: string;
}

export interface Verse {
  ref: string; // "1:1"
  chapter: number;
  verse: number;
  greek: GreekToken[];
  english: EnglishToken[];
  annotations: Annotation[];
}

export interface Chapter {
  book: string; // "John"
  chapter: number;
  title: string; // e.g. "The Prologue"
  verses: Verse[];
}
