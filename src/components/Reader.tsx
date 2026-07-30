import { useState, type ReactNode } from 'react';
import type { Annotation, Chapter, EnglishToken, GreekToken, Verse } from '../data/types';
import type { Lang } from '../data/ui';
import { useHighlight } from './HighlightContext';
import { renderMarkup } from '../lib/markup';
import { matchPlaces } from '../lib/placematch';

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

function EnglishWord({
  token,
  focusFor,
  trailing = true,
}: {
  token: EnglishToken;
  focusFor: (id: string) => GreekToken | null;
  trailing?: boolean;
}) {
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
      {token.after ? <span className="punct">{token.after}</span> : null}
      {trailing ? ' ' : null}
    </>
  );
}

function PinIcon() {
  return (
    <svg className="place__pinicon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="currentColor"
      />
      <circle cx="12" cy="9" r="2.5" fill="var(--paper)" />
    </svg>
  );
}

function PlaceRun({
  tokens,
  placeId,
  focusFor,
  onOpen,
}: {
  tokens: EnglishToken[];
  placeId: string;
  focusFor: (id: string) => GreekToken | null;
  onOpen: (placeId: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <span className={'place' + (open ? ' is-open' : '')} onClick={() => setOpen((o) => !o)}>
      {tokens.map((t, k) => (
        <EnglishWord key={t.id} token={t} focusFor={focusFor} trailing={k < tokens.length - 1} />
      ))}
      <button
        type="button"
        className="place__pin"
        title="Show on the map"
        aria-label="Show on the map"
        onClick={(e) => {
          e.stopPropagation();
          onOpen(placeId);
        }}
      >
        <PinIcon />
      </button>{' '}
    </span>
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
      <div className="note__title">{renderMarkup(note.title)}</div>
      <p className="note__body">{renderMarkup(note.body)}</p>
    </div>
  );
}

function VerseRow({
  verse,
  lang,
  onOpenPlace,
}: {
  verse: Verse;
  lang: Lang;
  onOpenPlace?: (placeId: string) => void;
}) {
  const byId = new Map(verse.greek.map((g) => [g.id, g]));
  const focusFor = (id: string) => byId.get(id) ?? null;

  const spans = onOpenPlace ? matchPlaces(verse.english.map((t) => t.text), lang) : [];
  const spanAt = new Map(spans.map((s) => [s.start, s]));

  const rendered: ReactNode[] = [];
  for (let i = 0; i < verse.english.length; ) {
    const s = spanAt.get(i);
    if (s && onOpenPlace) {
      rendered.push(
        <PlaceRun
          key={verse.english[i].id}
          tokens={verse.english.slice(s.start, s.end + 1)}
          placeId={s.placeId}
          focusFor={focusFor}
          onOpen={onOpenPlace}
        />,
      );
      i = s.end + 1;
    } else {
      rendered.push(<EnglishWord key={verse.english[i].id} token={verse.english[i]} focusFor={focusFor} />);
      i++;
    }
  }

  return (
    <div className="verse" id={verse.ref.replace(':', '-')}>
      <div className="verse__num">{verse.verse}</div>
      <div className="col col--en">{rendered}</div>
      <div className="col col--gk" lang="grc">
        {verse.greek.map((g) => (
          <GreekWord key={g.id} token={g} />
        ))}
      </div>
      {verse.annotations.length > 0 && (
        <div className="verse__notes">
          {verse.annotations.map((a) => (
            <Note key={a.id} note={a} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Reader({
  chapter,
  lang,
  onOpenPlace,
}: {
  chapter: Chapter;
  lang: Lang;
  onOpenPlace?: (placeId: string) => void;
}) {
  const { clear } = useHighlight();
  return (
    <div
      className="reader"
      onClick={(e) => {
        // Clicking empty space (not a token/note) clears the pinned selection.
        if (e.target === e.currentTarget) clear();
      }}
    >
      {chapter.verses.map((v) => (
        <VerseRow key={v.ref} verse={v} lang={lang} onOpenPlace={onOpenPlace} />
      ))}
    </div>
  );
}
