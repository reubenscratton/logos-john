import type { CSSProperties } from 'react';
import type { Annotation, Chapter, EnglishToken, GreekToken, Verse } from '../data/types';
import { useHighlight } from './HighlightContext';
import { renderMarkup } from '../lib/markup';

const KIND_LABEL: Record<Annotation['kind'], string> = {
  translation: 'Translation',
  concept: 'Concept',
  grammar: 'Grammar',
  text: 'Text-critical',
  p66: '𝔓⁶⁶ Papyrus 66',
};

function GreekWord({ token }: { token: GreekToken }) {
  const { isActive, isPinned, hover, endHover, toggle } = useHighlight();
  const ids = [token.id];
  const cls = [
    'tok',
    'tok--gk',
    isActive(ids) ? 'is-active' : '',
    isPinned(ids) ? 'is-pinned' : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <>
      <span
        className={cls}
        onMouseEnter={() => hover(ids, token)}
        onMouseLeave={endHover}
        onClick={() => toggle(ids)}
      >
        {token.text}
      </span>
      {token.after ? <span className="punct">{token.after}</span> : null}{' '}
    </>
  );
}

function EnglishWord({ token, focusFor }: { token: EnglishToken; focusFor: (id: string) => GreekToken | null }) {
  const { isActive, isPinned, hover, endHover, toggle } = useHighlight();
  const ids = token.align;
  const clickable = ids.length > 0;
  const cls = [
    'tok',
    'tok--en',
    token.supplied ? 'tok--supplied' : '',
    clickable && isActive(ids) ? 'is-active' : '',
    clickable && isPinned(ids) ? 'is-pinned' : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <>
      <span
        className={cls}
        onMouseEnter={() => clickable && hover(ids, focusFor(ids[0]))}
        onMouseLeave={endHover}
        onClick={() => clickable && toggle(ids)}
      >
        {token.text}
      </span>
      {token.after ? <span className="punct">{token.after}</span> : null}{' '}
    </>
  );
}

function Note({ note }: { note: Annotation }) {
  const { isActive, hover, endHover, toggle } = useHighlight();
  const cls = ['note', `note--${note.kind}`, isActive(note.refs) ? 'is-active' : ''].filter(Boolean).join(' ');
  return (
    <div
      className={cls}
      onMouseEnter={() => hover(note.refs)}
      onMouseLeave={endHover}
      onClick={() => toggle(note.refs)}
    >
      <div className="note__head">
        <span className={`note__kind note__kind--${note.kind}`}>{KIND_LABEL[note.kind]}</span>
        {note.lemma ? <span className="note__lemma">{note.lemma}</span> : null}
      </div>
      <div className="note__title">{note.title}</div>
      <p className="note__body">{renderMarkup(note.body)}</p>
    </div>
  );
}

function VerseRow({ verse }: { verse: Verse }) {
  const byId = new Map(verse.greek.map((g) => [g.id, g]));
  const focusFor = (id: string) => byId.get(id) ?? null;
  return (
    <div className="verse" id={verse.ref.replace(':', '-')}>
      <div className="verse__num">{verse.verse}</div>
      <div className="col col--gk" lang="grc">
        {verse.greek.map((g) => (
          <GreekWord key={g.id} token={g} />
        ))}
      </div>
      <div className="col col--en">
        {verse.english.map((e) => (
          <EnglishWord key={e.id} token={e} focusFor={focusFor} />
        ))}
      </div>
      {verse.annotations.length > 0 && (
        <div
          className="verse__notes"
          style={{ '--note-cols': Math.min(verse.annotations.length, 3) } as CSSProperties}
        >
          {verse.annotations.map((a) => (
            <Note key={a.id} note={a} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Reader({ chapter }: { chapter: Chapter }) {
  const { clear } = useHighlight();
  return (
    <div
      className="reader"
      onClick={(e) => {
        // Clicking empty space (not a token/note) clears the pinned selection.
        if (e.target === e.currentTarget) clear();
      }}
    >
      <div className="columns-head" aria-hidden>
        <div className="verse__num" />
        <div className="col-label">Greek <span>· Nestle 1904</span></div>
        <div className="col-label">English <span>· this edition</span></div>
      </div>
      {chapter.verses.map((v) => (
        <VerseRow key={v.ref} verse={v} />
      ))}
    </div>
  );
}
