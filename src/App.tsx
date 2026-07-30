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
import { UI, type Lang } from './data/ui';
import type { Chapter } from './data/types';
import './App.css';

// The book, as ordered chapters, each available in both languages.
const BOOK: { en: Chapter; sv: Chapter }[] = [
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
  const [chapterIdx, setChapterIdx] = useState<number>(() =>
    readStored('chapter', (v) => (Number(v) >= 0 && Number(v) < BOOK.length ? Number(v) : null), 0),
  );
  const [showMap, setShowMap] = useState(false);
  const [mapFocus, setMapFocus] = useState<string | null>(null);
  const { clear } = useHighlight();

  const ui = UI[lang];
  const chapter = BOOK[chapterIdx][lang];

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
  const goChapter = (i: number) => {
    if (i < 0 || i >= BOOK.length) return;
    setChapterIdx(i);
    persist('chapter', String(i));
    clear();
    window.scrollTo({ top: 0 });
  };

  const hasPrev = chapterIdx > 0;
  const hasNext = chapterIdx < BOOK.length - 1;

  return (
    <div className="page" lang={lang}>
      <header className="masthead">
        <div className="masthead__inner">
          <div className="brand">
            <div className="brand__headline">
              <h1>{ui.brandTitle}</h1>
              <div className="chapter-stepper">
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
          key={`${chapterIdx}-${lang}`}
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
              <span className="chapter-foot__dir">‹ {ui.chapterWord} {BOOK[chapterIdx - 1][lang].chapter}</span>
              <span className="chapter-foot__title">{BOOK[chapterIdx - 1][lang].title}</span>
            </button>
          ) : (
            <span />
          )}
          {hasNext ? (
            <button type="button" className="chapter-foot__btn chapter-foot__btn--next" onClick={() => goChapter(chapterIdx + 1)}>
              <span className="chapter-foot__dir">{ui.chapterWord} {BOOK[chapterIdx + 1][lang].chapter} ›</span>
              <span className="chapter-foot__title">{BOOK[chapterIdx + 1][lang].title}</span>
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
                goChapter(ch - 1);
              }}
            />
          </Suspense>
        </div>
      ) : null}
    </div>
  );
}
