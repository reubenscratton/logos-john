import { lazy, Suspense, useState } from 'react';
import { HighlightProvider, useHighlight } from './components/HighlightContext';
import { Reader } from './components/Reader';
import { Inspector } from './components/Inspector';
import { renderMarkup } from './lib/markup';
import { john1 } from './data/john1';
import { john1Sv } from './data/john1.sv';
import { john2 } from './data/john2';
import { john2Sv } from './data/john2.sv';
import { john3 } from './data/john3';
import { john3Sv } from './data/john3.sv';
import { john4 } from './data/john4';
import { john4Sv } from './data/john4.sv';
import { john5 } from './data/john5';
import { john5Sv } from './data/john5.sv';
import { john6 } from './data/john6';
import { john6Sv } from './data/john6.sv';
import { john7 } from './data/john7';
import { john7Sv } from './data/john7.sv';
import { john8 } from './data/john8';
import { john8Sv } from './data/john8.sv';
import { john9 } from './data/john9';
import { john9Sv } from './data/john9.sv';
import { john10 } from './data/john10';
import { john10Sv } from './data/john10.sv';
import { john11 } from './data/john11';
import { john11Sv } from './data/john11.sv';
import { john12 } from './data/john12';
import { john12Sv } from './data/john12.sv';
import { john13 } from './data/john13';
import { john13Sv } from './data/john13.sv';
import { john14 } from './data/john14';
import { john14Sv } from './data/john14.sv';
import { john15 } from './data/john15';
import { john15Sv } from './data/john15.sv';
import { john16 } from './data/john16';
import { john16Sv } from './data/john16.sv';
import { john17 } from './data/john17';
import { john17Sv } from './data/john17.sv';
import { john18 } from './data/john18';
import { john18Sv } from './data/john18.sv';
import { john19 } from './data/john19';
import { john19Sv } from './data/john19.sv';
import { john20 } from './data/john20';
import { john20Sv } from './data/john20.sv';
import { john21 } from './data/john21';
import { john21Sv } from './data/john21.sv';
import { matt1 } from './data/matt1';
import { matt1Sv } from './data/matt1.sv';
import { matt2 } from './data/matt2';
import { matt2Sv } from './data/matt2.sv';
import { matt3 } from './data/matt3';
import { matt3Sv } from './data/matt3.sv';
import { matt4 } from './data/matt4';
import { matt4Sv } from './data/matt4.sv';
import { UI, type Lang } from './data/ui';
import type { Chapter } from './data/types';
import './App.css';

// The Gospel of John, as ordered chapters, each available in both languages.
const JOHN: { en: Chapter; sv: Chapter }[] = [
  { en: john1, sv: john1Sv },
  { en: john2, sv: john2Sv },
  { en: john3, sv: john3Sv },
  { en: john4, sv: john4Sv },
  { en: john5, sv: john5Sv },
  { en: john6, sv: john6Sv },
  { en: john7, sv: john7Sv },
  { en: john8, sv: john8Sv },
  { en: john9, sv: john9Sv },
  { en: john10, sv: john10Sv },
  { en: john11, sv: john11Sv },
  { en: john12, sv: john12Sv },
  { en: john13, sv: john13Sv },
  { en: john14, sv: john14Sv },
  { en: john15, sv: john15Sv },
  { en: john16, sv: john16Sv },
  { en: john17, sv: john17Sv },
  { en: john18, sv: john18Sv },
  { en: john19, sv: john19Sv },
  { en: john20, sv: john20Sv },
  { en: john21, sv: john21Sv },
];

// The library: each gospel in reading order. Matthew is in progress.
type BookKey = 'john' | 'matthew';
const BOOKS: Record<BookKey, { en: Chapter; sv: Chapter }[]> = {
  matthew: [
    { en: matt1, sv: matt1Sv },
    { en: matt2, sv: matt2Sv },
    { en: matt3, sv: matt3Sv },
    { en: matt4, sv: matt4Sv },
  ],
  john: JOHN,
};
const BOOK_KEYS: BookKey[] = ['matthew', 'john'];
const BOOK_NAMES: Record<BookKey, { en: string; sv: string }> = {
  matthew: { en: 'Matthew', sv: 'Matteus' },
  john: { en: 'John', sv: 'Johannes' },
};
const LANGS: Lang[] = ['en', 'sv'];
const HolyLandMap = lazy(() => import('./components/HolyLandMap'));

function readStored<T>(key: string, ok: (v: string) => T | null, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    if (v != null) {
      const parsed = ok(v);
      if (parsed != null) return parsed;
    }
  } catch {
    /* localStorage unavailable */
  }
  return fallback;
}

export default function App() {
  return (
    <HighlightProvider>
      <Study />
    </HighlightProvider>
  );
}

function Study() {
  const [lang, setLang] = useState<Lang>(() =>
    readStored('lang', (v) => (v === 'en' || v === 'sv' ? v : null), 'en'),
  );
  const [bookKey, setBookKey] = useState<BookKey>(() =>
    readStored('book', (v) => (v === 'john' || v === 'matthew' ? v : null), 'john'),
  );
  const [chapterIdx, setChapterIdx] = useState<number>(() => {
    const bk = readStored<BookKey>('book', (v) => (v === 'john' || v === 'matthew' ? v : null), 'john');
    return readStored('chapter', (v) => (Number(v) >= 0 && Number(v) < BOOKS[bk].length ? Number(v) : null), 0);
  });
  const [showMap, setShowMap] = useState(false);
  const [mapFocus, setMapFocus] = useState<string | null>(null);
  const { clear } = useHighlight();

  const ui = UI[lang];
  const book = BOOKS[bookKey];
  const chapter = book[chapterIdx][lang];

  const persist = (k: string, v: string) => {
    try {
      localStorage.setItem(k, v);
    } catch {
      /* ignore */
    }
  };
  const chooseLang = (l: Lang) => {
    setLang(l);
    persist('lang', l);
  };
  const goChapter = (i: number, bk: BookKey = bookKey) => {
    if (i < 0 || i >= BOOKS[bk].length) return;
    if (bk !== bookKey) {
      setBookKey(bk);
      persist('book', bk);
    }
    setChapterIdx(i);
    persist('chapter', String(i));
    clear();
    window.scrollTo({ top: 0 });
  };
  const chooseBook = (bk: BookKey) => {
    if (bk === bookKey) return;
    setBookKey(bk);
    persist('book', bk);
    setChapterIdx(0);
    persist('chapter', '0');
    clear();
    window.scrollTo({ top: 0 });
  };

  const hasPrev = chapterIdx > 0;
  const hasNext = chapterIdx < book.length - 1;

  return (
    <div className="page" lang={lang}>
      <header className="masthead">
        <div className="masthead__inner">
          <div className="brand">
            <div className="brand__headline">
              <h1>{ui.brandTitle}</h1>
              <div className="chapter-stepper">
                <select
                  className="bookselect"
                  value={bookKey}
                  aria-label={lang === 'sv' ? 'Bok' : 'Book'}
                  onChange={(e) => chooseBook(e.target.value as BookKey)}
                >
                  {BOOK_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {BOOK_NAMES[k][lang]}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="chapter-stepper__btn"
                  disabled={!hasPrev}
                  aria-label="Previous chapter"
                  onClick={() => goChapter(chapterIdx - 1)}
                >
                  ‹
                </button>
                <span className="chapter-nav__ch">
                  {ui.chapterWord} {chapter.chapter}
                </span>
                <button
                  type="button"
                  className="chapter-stepper__btn"
                  disabled={!hasNext}
                  aria-label="Next chapter"
                  onClick={() => goChapter(chapterIdx + 1)}
                >
                  ›
                </button>
              </div>
              <div className="brand__chapter">{chapter.title}</div>
            </div>
          </div>
          <div className="masthead__right">
            <button
              type="button"
              className="mapbtn"
              onClick={() => {
                setMapFocus(null);
                setShowMap(true);
              }}
              title="Explore the Holy Land in 3D"
            >
              {ui.mapLabel}
            </button>
            <div className="langtoggle" role="group" aria-label="Language / Språk">
              {LANGS.map((l) => (
                <button
                  key={l}
                  type="button"
                  className={'langtoggle__btn' + (l === lang ? ' is-active' : '')}
                  aria-pressed={l === lang}
                  onClick={() => chooseLang(l)}
                >
                  {UI[l].langName}
                </button>
              ))}
            </div>
          </div>
        </div>
        {chapter.summary ? (
          <p className="masthead__summary">{renderMarkup(chapter.summary)}</p>
        ) : null}
      </header>

      <main>
        <Reader
          key={`${bookKey}-${chapterIdx}-${lang}`}
          chapter={chapter}
          lang={lang}
          onOpenPlace={(id) => {
            setMapFocus(id);
            setShowMap(true);
          }}
        />

        <nav className="chapter-foot">
          {hasPrev ? (
            <button type="button" className="chapter-foot__btn" onClick={() => goChapter(chapterIdx - 1)}>
              <span className="chapter-foot__dir">‹ {ui.chapterWord} {book[chapterIdx - 1][lang].chapter}</span>
              <span className="chapter-foot__title">{book[chapterIdx - 1][lang].title}</span>
            </button>
          ) : (
            <span />
          )}
          {hasNext ? (
            <button type="button" className="chapter-foot__btn chapter-foot__btn--next" onClick={() => goChapter(chapterIdx + 1)}>
              <span className="chapter-foot__dir">{ui.chapterWord} {book[chapterIdx + 1][lang].chapter} ›</span>
              <span className="chapter-foot__title">{book[chapterIdx + 1][lang].title}</span>
            </button>
          ) : (
            <span />
          )}
        </nav>

        <footer className="colophon">
          <p className="colophon__credit">{ui.subtitle}</p>
          <p>{ui.colophon}</p>
        </footer>
      </main>

      <Inspector lang={lang} />

      {showMap ? (
        <div
          className="hlmap__overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Map of the Holy Land"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowMap(false);
          }}
        >
          <Suspense fallback={<div className="hlmap__loading">Loading map…</div>}>
            <HolyLandMap
              key={mapFocus ?? '_all'}
              focus={mapFocus}
              lang={lang}
              onClose={() => setShowMap(false)}
              onGoChapter={(ch) => {
                setShowMap(false);
                goChapter(ch - 1, 'john'); // the map's chapter links are John's
              }}
            />
          </Suspense>
        </div>
      ) : null}
    </div>
  );
}
