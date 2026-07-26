import { useHighlight } from './HighlightContext';
import { UI, type Lang } from '../data/ui';
import { svGloss, svMorph } from '../data/lexicon.sv';

// A small floating card that reveals the parse of the Greek word currently
// under the cursor — lemma, transliteration, morphology, gloss. The gloss and
// morphology are localized to Swedish when the Swedish edition is active.
export function Inspector({ lang }: { lang: Lang }) {
  const { focus } = useHighlight();
  if (!focus) return null;

  const labels = UI[lang].inspector;
  const gloss = lang === 'sv' ? svGloss(focus.lemma) ?? focus.gloss : focus.gloss;
  const morph = lang === 'sv' ? svMorph(focus.morph) : focus.morph;

  return (
    <div className="inspector" role="status">
      <div className="inspector__word" lang="grc">
        {focus.text}
      </div>
      <dl className="inspector__grid">
        {focus.translit ? (
          <>
            <dt>{labels.translit}</dt>
            <dd className="inspector__translit">{focus.translit}</dd>
          </>
        ) : null}
        {focus.lemma ? (
          <>
            <dt>{labels.lemma}</dt>
            <dd lang="grc">{focus.lemma}</dd>
          </>
        ) : null}
        {morph ? (
          <>
            <dt>{labels.parse}</dt>
            <dd>{morph}</dd>
          </>
        ) : null}
        {gloss ? (
          <>
            <dt>{labels.gloss}</dt>
            <dd>{gloss}</dd>
          </>
        ) : null}
      </dl>
    </div>
  );
}
