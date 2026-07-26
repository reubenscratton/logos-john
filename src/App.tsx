import { useState } from 'react';
import { HighlightProvider } from './components/HighlightContext';
import { Reader } from './components/Reader';
import { Inspector } from './components/Inspector';
import { renderMarkup } from './lib/markup';
import { john1 } from './data/john1';
import { john1Sv } from './data/john1.sv';
import { UI, type Lang } from './data/ui';
import './App.css';

const CHAPTERS = { en: john1, sv: john1Sv } as const;
const LANGS: Lang[] = ['en', 'sv'];

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'sv') return saved;
  } catch {
    /* localStorage unavailable — fall through */
  }
  return 'en';
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const ui = UI[lang];
  const chapter = CHAPTERS[lang];

  const choose = (l: Lang) => {
    setLang(l);
    try {
      localStorage.setItem('lang', l);
    } catch {
      /* ignore */
    }
  };

  return (
    <HighlightProvider>
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
                    onClick={() => choose(l)}
                  >
                    {UI[l].langName}
                  </button>
                ))}
              </div>
              <nav className="chapter-nav">
                <span className="chapter-nav__book">{ui.book}</span>
                <span className="chapter-nav__ch">
                  {ui.chapterWord} {chapter.chapter}
                </span>
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
            chapter={chapter}
            labels={{
              greekLabel: ui.greekLabel,
              greekSource: ui.greekSource,
              transLabel: ui.transLabel,
              transSource: ui.transSource,
            }}
            kinds={ui.kinds}
          />
          <footer className="colophon">
            <p>{ui.colophon}</p>
          </footer>
        </main>

        <Inspector lang={lang} />
      </div>
    </HighlightProvider>
  );
}
