import { useState } from 'react';
import { HighlightProvider, useHighlight } from './components/HighlightContext';
import { Reader } from './components/Reader';
import { Inspector } from './components/Inspector';
import { renderMarkup } from './lib/markup';
import { john1 } from './data/john1';
import { john1Sv } from './data/john1.sv';
import { john2 } from './data/john2';
import { john2Sv } from './data/john2.sv';
import { UI, type Lang } from './data/ui';
import type { Chapter } from './data/types';
import './App.css';

// The book, as ordered chapters, each available in both languages.
const BOOK: { en: Chapter; sv: Chapter }[] = [
  { en: john1, sv: john1Sv },
  { en: john2, sv: john2Sv },
];
const LANGS: Lang[] = ['en', 'sv'];

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
            <span className="brand__mark" lang="grc">
              Ἐν ἀρχῇ
            </span>
            <div className="brand__text">
              <h1>{ui.brandTitle}</h1>
              <p>{ui.subtitle}</p>
            </div>
          </div>
          <div className="masthead__right">
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
            <nav className="chapter-nav">
              <span className="chapter-nav__book">{ui.book}</span>
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
              <span className="chapter-nav__title">{chapter.title}</span>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="intro">
          <p>{renderMarkup(ui.intro)}</p>
        </div>
        <Reader
          key={`${chapterIdx}-${lang}`}
          chapter={chapter}
          labels={{
            greekLabel: ui.greekLabel,
            greekSource: ui.greekSource,
            transLabel: ui.transLabel,
            transSource: ui.transSource,
          }}
          kinds={ui.kinds}
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
          <p>{ui.colophon}</p>
        </footer>
      </main>

      <Inspector lang={lang} />
    </div>
  );
}
