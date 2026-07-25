import { useHighlight } from './HighlightContext';

// A small floating card that reveals the parse of the Greek word currently
// under the cursor — lemma, transliteration, morphology, gloss.
export function Inspector() {
  const { focus } = useHighlight();
  if (!focus) return null;
  return (
    <div className="inspector" role="status">
      <div className="inspector__word" lang="grc">
        {focus.text}
      </div>
      <dl className="inspector__grid">
        {focus.translit ? (
          <>
            <dt>translit.</dt>
            <dd className="inspector__translit">{focus.translit}</dd>
          </>
        ) : null}
        {focus.lemma ? (
          <>
            <dt>lemma</dt>
            <dd lang="grc">{focus.lemma}</dd>
          </>
        ) : null}
        {focus.morph ? (
          <>
            <dt>parse</dt>
            <dd>{focus.morph}</dd>
          </>
        ) : null}
        {focus.gloss ? (
          <>
            <dt>gloss</dt>
            <dd>{focus.gloss}</dd>
          </>
        ) : null}
      </dl>
    </div>
  );
}
