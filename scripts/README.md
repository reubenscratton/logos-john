# Data pipeline

The reader's content in `src/data/john*.ts` is **generated** from the sources in
this folder. Don't edit the generated `.ts` files by hand — edit the sources
here and regenerate:

```bash
npm run build:data
```

That command validates every alignment reference and rewrites
`src/data/john<N>.ts` (the English base) and `src/data/john<N>.<lang>.ts`
(other-language overlays).

## Layout

```
scripts/
  data/Nestle1904-john.csv   Greek source: Nestle 1904 morphology, John only (CC0)
  lib/greek.mjs              CSV → Greek tokens (morphology, transliteration, gloss)
  lib/gloss.en.mjs           English gloss per lemma (feeds the Greek tokens)
  content/john<N>.<lang>.mjs Authored translation + annotations, per chapter & language
  build.mjs                  Regenerates all src/data/john*.ts
```

Each **chapter** shares one Greek spine. The **English** edition is the base
(a full `Chapter`); every other language is an **overlay** that reuses that
spine and swaps in its own translation column and annotations, so the two can
never drift apart.

### A content file

`content/john<N>.<lang>.mjs` exports `CONTENT`, keyed by verse:

```js
export const CONTENT = {
  1: {
    // [text, space-separated Greek token ids, supplied?]
    english: [ ["In", "g1.1.1"], ["the", "g1.1.2", true], ["beginning", "g1.1.2"], /* … */ ],
    annotations: [
      { kind: "concept", refs: "g1.1.5 g1.1.8", lemma: "λόγος", title: "…", body: "…" },
    ],
  },
};
```

Alignment is expressed in Greek token ids (`g<chapter>.<verse>.<index>`), which
are stable across languages. `build:data` fails if any id doesn't exist.
Annotation `body` supports `**bold**`, `*italic*`, and `` `code` `` markup.

## Adding a chapter

1. Author `content/john<N>.en.mjs` (and one file per other language).
2. If the chapter introduces new vocabulary, add the lemmas to
   `lib/gloss.en.mjs` (English) and `src/data/lexicon.<lang>.ts` (each other
   language's inspector glosses).
3. Add a `{ num: N, titles: { … } }` entry to `CHAPTERS` in `build.mjs`.
4. `npm run build:data`, then add the chapter to `BOOK` in `src/App.tsx`.

## Adding a language `L`

1. Author `content/john<N>.L.mjs` for every chapter.
2. Add `L` to `LANGS` in `build.mjs` and a title per chapter.
3. Create `src/data/lexicon.L.ts` (gloss-by-lemma + morphology translator) and
   add a UI block to `src/data/ui.ts`.
4. `npm run build:data`, then wire the new `john<N>L` exports into `BOOK` in
   `src/App.tsx` and extend `LANGS`, and teach `src/components/Inspector.tsx`
   the new lexicon.

## Source & licence

Greek text and morphology: **Nestle 1904**, from the
[biblicalhumanities.org Nestle 1904 Morphology](https://github.com/biblicalhumanities/Nestle1904)
(public domain / CC0), trimmed to the Gospel of John. Translation, alignment,
and annotations are original to this edition.
