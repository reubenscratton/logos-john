# The Annotated John

A modern, source-critical study edition of the Gospel of John. Each passage is
presented in three linked columns:

1. **Greek** — the public-domain _Nestle 1904_ base text.
2. **English** — an original, annotated translation.
3. **Annotations** — notes on translation choices, concepts in play, grammar,
   text-critical questions, and what **Papyrus 66** (𝔓⁶⁶, Bodmer II, _c._ 200 CE)
   specifically witnesses.

## The defining feature: word-level alignment

Every English word records which Greek token(s) it renders. **Hover or tap any
word** in either column to highlight its counterpart in the other, and to
surface the annotations that discuss it. Because the mapping is explicit, it
tracks word-order differences — e.g. selecting the fronted predicate _Θεὸς_ in
1:1 lights up "God" at the _end_ of the English line.

Hovering a Greek word also opens an **inspector** with its lemma,
transliteration, morphology, and gloss.

## Scholarship notes

- Base Greek text: **Nestle 1904** (public domain).
- 𝔓⁶⁶ apparatus is drawn from the IGNTP transcription. An important honesty
  point reflected in the notes: the θεός _nomina sacra_ in John 1:1–2 fall in a
  lacuna and are editorially _supplied_ (reconstructed), not legible ink.
- English translation and annotations are original to this edition.

## Data model

Content lives as typed data (`src/data/`). See `src/data/types.ts` for the
shape: `GreekToken`, `EnglishToken` (with an `align` array of Greek token ids),
and `Annotation` (with a `refs` array). Adding a passage means adding a `Verse`
object — no component changes required.

## Develop

```bash
npm install
npm run dev
```

Current status: a working prototype covering **the whole of John 1** (verses
1–51) — the Prologue, John the Baptist's testimony, and the calling of the
first disciples. Greek from the CC0 Nestle 1904 morphology dataset; English
translation, word alignment, and annotations original to this edition.

## Tech

Vite + React + TypeScript. Fonts: Cardo (polytonic Greek), Newsreader
(English), Inter (UI). Light/dark theme via `prefers-color-scheme`.
