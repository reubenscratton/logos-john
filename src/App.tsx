import { HighlightProvider } from './components/HighlightContext';
import { Reader } from './components/Reader';
import { Inspector } from './components/Inspector';
import { john1 } from './data/john1';
import './App.css';

export default function App() {
  return (
    <HighlightProvider>
      <div className="page">
        <header className="masthead">
          <div className="masthead__inner">
            <div className="brand">
              <span className="brand__mark" lang="grc">
                Ἐν ἀρχῇ
              </span>
              <div className="brand__text">
                <h1>The Annotated John</h1>
                <p>A source-critical translation of the earliest Greek, read line by line.</p>
              </div>
            </div>
            <nav className="chapter-nav">
              <span className="chapter-nav__book">{john1.book}</span>
              <span className="chapter-nav__ch">Chapter {john1.chapter}</span>
              <span className="chapter-nav__title">{john1.title}</span>
            </nav>
          </div>
        </header>

        <main>
          <div className="intro">
            <p>
              Every word of the Greek is linked to its English rendering. <strong>Hover or tap any word</strong> to
              light up its counterpart in the other column and the notes that discuss it. The base text is the
              public-domain <em>Nestle 1904</em>; where Papyrus 66 (𝔓⁶⁶, c.&nbsp;200&nbsp;CE) bears witness, it is
              discussed in the margin.
            </p>
          </div>
          <Reader chapter={john1} />
          <footer className="colophon">
            <p>
              Greek: Nestle 1904 (public domain). English translation &amp; annotations: this edition. A working
              prototype — the complete Gospel of John, chapter&nbsp;1 (verses&nbsp;1–51).
            </p>
          </footer>
        </main>

        <Inspector />
      </div>
    </HighlightProvider>
  );
}
