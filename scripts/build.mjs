import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chapterGreek } from './lib/greek.mjs';

// Regenerates src/data/john<N>.ts (base = English full Chapter) and
// src/data/john<N>.<lang>.ts (overlays) from scripts/content/*.mjs + the Greek
// source. Run with:  npm run build:data
//
// ── Adding a chapter ──   author scripts/content/john<N>.<lang>.mjs for each
//                         language, add an entry to CHAPTERS below, run build.
// ── Adding a language ──  for every chapter add scripts/content/john<N>.<L>.mjs,
//                         list L in LANGS, add a src/data/lexicon.<L>.ts (for the
//                         inspector) + a UI block in src/data/ui.ts, then wire it
//                         into src/App.tsx (BOOK/imports). Run build.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.join(__dirname, '../src/data');

// 'en' is the base language (emits the full Chapter). Others emit overlays.
const LANGS = ['en', 'sv'];

const CHAPTERS = [
  {
    num: 1,
    titles: { en: 'The Prologue & the First Witnesses', sv: 'Prologen och de första vittnena' },
    summaries: {
      en: 'The Prologue hymns the eternal **Word** — who was with God, was God, and became flesh. Then John the Baptist bears witness, pointing away from himself to *the Lamb of God*, and Jesus gathers his first disciples — Andrew, Peter, Philip, and Nathanael — closing with the promise that they will see heaven opened upon the Son of Man.',
      sv: 'Prologen besjunger det eviga **Ordet** — som var hos Gud, var Gud och blev kött. Sedan vittnar Johannes Döparen och pekar bort från sig själv mot *Guds Lamm*, och Jesus samlar sina första lärjungar — Andreas, Petrus, Filippus och Natanael — och slutar med löftet att de ska se himlen öppen över Människosonen.',
    },
  },
  {
    num: 2,
    titles: { en: 'Cana and the Temple', sv: 'Kana och templet' },
    summaries: {
      en: 'At a wedding in **Cana**, Jesus turns water into wine — the first of his *signs* — and quietly reveals his glory. Then, at Passover in **Jerusalem**, he clears the traders from the temple and speaks of raising “this temple” in three days, meaning his own body. Many believe when they see his signs, yet he does not entrust himself to them, for he knows what is in the human heart.',
      sv: 'Vid ett bröllop i **Kana** förvandlar Jesus vatten till vin — det första av hans *tecken* — och uppenbarar stilla sin härlighet. Sedan, vid påsken i **Jerusalem**, rensar han templet från handelsmännen och talar om att resa upp ”detta tempel” på tre dagar, med sin egen kropp menat. Många kommer till tro när de ser hans tecken, men han anförtror sig inte åt dem, ty han vet vad som bor i människohjärtat.',
    },
  },
  {
    num: 4,
    titles: { en: 'The Samaritan Woman, and the Official’s Son', sv: 'Den samariska kvinnan och ämbetsmannens son' },
    summaries: {
      en: 'Passing through **Samaria**, tired at Jacob’s well, Jesus asks a lone woman for a drink and offers her **living water** — a spring welling up to eternal life. He knows her five husbands, unveils that true worship will be *in spirit and truth*, and tells her plainly, **“I am he.”** She leaves her jar and brings her whole town, and many Samaritans come to believe he is *the Savior of the world*. Back in **Cana**, Jesus heals a royal official’s dying son from a distance — his second sign — and the man’s whole household believes.',
      sv: 'På väg genom **Samarien**, trött vid Jakobs brunn, ber Jesus en ensam kvinna om vatten och erbjuder henne **levande vatten** — en källa som väller fram till evigt liv. Han känner hennes fem män, uppenbarar att sann tillbedjan ska ske *i ande och sanning*, och säger henne rakt ut: **”Det är jag.”** Hon lämnar sin kruka och hämtar hela sin stad, och många samarier kommer till tro att han är *världens Frälsare*. Tillbaka i **Kana** botar Jesus en kunglig ämbetsmans döende son på avstånd — hans andra tecken — och mannens hela hus kommer till tro.',
    },
  },
  {
    num: 13,
    titles: { en: 'The Footwashing and the New Commandment', sv: 'Fottvagningen och det nya budet' },
    summaries: {
      en: 'At the last supper, *having loved his own, he loved them to the end.* Knowing that all things are in his hands, Jesus rises, wraps a towel around himself, and **washes the disciples’ feet** — the work of the lowest slave done by the Lord — over Peter’s protest: *“If I do not wash you, you have no share with me.”* He gives it as a pattern: **“I have given you an example, that you also should do as I have done.”** Then, troubled in spirit, he names his betrayer, hands Judas the morsel — and Judas goes out; *and it was night.* To those who remain he gives his legacy: **“A new commandment I give you, that you love one another; as I have loved you… By this all people will know that you are my disciples.”** Peter vows to die for him; Jesus foretells his threefold denial before the cock crows.',
      sv: 'Vid den sista måltiden, *sedan han älskat sina egna, älskade han dem intill änden.* Medveten om att allt är i hans händer reser sig Jesus, binder en linnehandduk om sig och **tvättar lärjungarnas fötter** — den lägste slavens arbete utfört av Herren — trots Petrus protest: *”Om jag inte tvättar dig har du ingen del i mig.”* Han ger det som ett mönster: **”Jag har gett er ett föredöme, för att ni ska göra som jag har gjort.”** Sedan, upprörd i anden, pekar han ut sin förrädare, räcker Judas brödstycket — och Judas går ut; *och det var natt.* Åt dem som blir kvar ger han sitt arv: **”Ett nytt bud ger jag er: att ni ska älska varandra; så som jag har älskat er… Av detta ska alla förstå att ni är mina lärjungar.”** Petrus svär att dö för honom; Jesus förutsäger hans trefaldiga förnekelse innan tuppen gal.',
    },
  },
  {
    num: 12,
    titles: { en: 'The Anointing, the Entry, and the Grain of Wheat', sv: 'Smörjelsen, intåget och vetekornet' },
    summaries: {
      en: 'At Bethany, **Mary** pours out a pound of costly nard on Jesus’ feet and wipes them with her hair — worship Judas calls waste, but Jesus receives as anointing *for the day of my burial*. The next day the crowds hail him into Jerusalem with palms and **“Hosanna!”**, and he answers their hopes by riding a humble donkey. When **Greeks** ask to see him, Jesus knows the hour has come and gives its meaning: **“unless a grain of wheat falls into the earth and dies… it bears much fruit.”** His soul is troubled — *“Father, save me from this hour”* — yet he chooses it, and a **voice from heaven** answers. **“I, when I am lifted up, will draw all people to myself.”** Despite so many signs, most will not believe, as Isaiah foretold — but the light has come into the world.',
      sv: 'I Betania öser **Maria** ut ett skålpund dyrbar nardus på Jesu fötter och torkar dem med sitt hår — tillbedjan som Judas kallar slöseri, men som Jesus tar emot som smörjelse *till min begravningsdag*. Nästa dag hyllar folkskarorna honom in i Jerusalem med palmblad och **”Hosianna!”**, och han svarar på deras förhoppningar genom att rida på en ödmjuk åsna. När **greker** ber att få se honom vet Jesus att stunden har kommit och ger dess mening: **”om vetekornet inte faller i jorden och dör… bär det rik frukt.”** Hans själ är upprörd — *”Fader, rädda mig undan denna stund”* — men han väljer den, och en **röst från himlen** svarar. **”När jag har blivit upphöjd ska jag dra alla till mig.”** Trots så många tecken vill de flesta inte tro, som Jesaja förutsade — men ljuset har kommit till världen.',
    },
  },
  {
    num: 11,
    titles: { en: 'The Raising of Lazarus', sv: 'Lasarus uppväckelse' },
    summaries: {
      en: 'Word comes that Lazarus of Bethany, whom Jesus loves, is ill — but Jesus stays two days longer, *that the Son of God may be glorified*. By the time he arrives, Lazarus has been four days in the tomb. To grieving Martha he makes the seventh great sign the ground of the greatest word: **“I am the resurrection and the life; whoever believes in me, though he die, yet shall he live.”** At the grave, moved to tears and to anger at death itself, he cries, **“Lazarus, come out!”** — and the dead man walks out bound in grave-clothes. Many believe; but the raising seals Jesus’ own death. The council meets, and **Caiaphas** unwittingly prophesies that one man should die *for the people* — and for the scattered children of God, to gather them into one.',
      sv: 'Bud kommer att Lasarus i Betania, som Jesus älskar, är sjuk — men Jesus dröjer kvar två dagar till, *för att Guds Son ska förhärligas*. När han kommer fram har Lasarus legat fyra dagar i graven. Till den sörjande Marta gör han det sjunde stora tecknet till grunden för det största ordet: **”Jag är uppståndelsen och livet; den som tror på mig ska leva om han än dör.”** Vid graven, rörd till tårar och till vrede mot själva döden, ropar han: **”Lasarus, kom ut!”** — och den döde går ut, lindad i bindlar. Många kommer till tro; men uppväckelsen beseglar Jesu egen död. Rådet samlas, och **Kaifas** profeterar utan att veta det att en man ska dö *för folket* — och för Guds skingrade barn, för att samla dem till ett.',
    },
  },
  {
    num: 10,
    titles: { en: 'The Good Shepherd', sv: 'Den gode herden' },
    summaries: {
      en: 'Jesus draws the great pastoral picture: he is both the **door of the sheepfold** — “whoever enters by me will be saved” — and the **good shepherd**, who does not flee like a hired hand but *lays down his life for the sheep*. He knows his own and they know his voice; he has **other sheep** not of this fold, and there will be *one flock, one shepherd*. To his own he gives eternal life: **“no one will snatch them out of my hand… I and the Father are one.”** At the winter **Feast of Dedication** the claim brings stones and a charge of blasphemy; Jesus answers from their own Scripture and points to *the works of the Father*. He withdraws across the Jordan, where many believe.',
      sv: 'Jesus tecknar den stora herdebilden: han är både **fårfållans dörr** — ”den som går in genom mig ska bli frälst” — och **den gode herden**, som inte flyr som en lejd dräng utan *ger sitt liv för fåren*. Han känner sina egna och de känner hans röst; han har **andra får** som inte hör till denna fålla, och det ska bli *en hjord, en herde*. Åt sina egna ger han evigt liv: **”ingen ska rycka dem ur min hand… jag och Fadern är ett.”** Vid den vintriga **tempelinvigningsfesten** väcker anspråket stenar och en anklagelse om hädelse; Jesus svarar ur deras egen Skrift och pekar på *Faderns gärningar*. Han drar sig undan öster om Jordan, där många kommer till tro.',
    },
  },
  {
    num: 9,
    titles: { en: 'The Man Born Blind', sv: 'Den blindfödde' },
    summaries: {
      en: 'Jesus heals a man **blind from birth** — not because anyone sinned, but *that the works of God might be displayed* — anointing his eyes with mud and sending him to wash at **Siloam** (which means *Sent*). The Sabbath healing sets off an escalating interrogation. The man’s answers grow bolder as the authorities’ grow harder: *“One thing I know — I was blind, now I see.”* Threatened with being **put out of the synagogue**, his parents dodge; the man argues rings around his examiners and is **cast out**. Jesus finds him, and to the outcast alone reveals himself — *“Lord, I believe,”* and he worships. The chapter ends on its great reversal: the sighted are blind, the blind man sees; *“for judgment I came into this world.”*',
      sv: 'Jesus botar en man som varit **blind från födseln** — inte för att någon syndat, utan *för att Guds gärningar skulle uppenbaras* — smörjer hans ögon med lera och sänder honom att tvätta sig vid **Siloa** (som betyder *Sänd*). Botandet på en sabbat utlöser ett allt hårdare förhör. Mannens svar blir djärvare medan myndigheternas blir hårdare: *”Ett vet jag — jag var blind, nu ser jag.”* Hotade med att bli **utstötta ur synagogan** viker hans föräldrar undan; mannen argumenterar sina förhörare i botten och blir **utkastad**. Jesus finner honom, och för den utstötte ensam uppenbarar han sig — *”Herre, jag tror,”* och han tillber. Kapitlet slutar i sin stora omkastning: de seende är blinda, den blinde ser; *”till en dom har jag kommit till denna värld.”*',
    },
  },
  {
    num: 8,
    titles: { en: 'Light of the World, and “Before Abraham Was, I Am”', sv: 'Världens ljus, och ”Innan Abraham blev till, är jag”' },
    summaries: {
      en: 'The chapter opens with the treasured (and textually uncertain) story of the **woman caught in adultery** — *“Let him who is without sin cast the first stone… neither do I condemn you.”* Then, against the lamps of Tabernacles, Jesus declares **“I am the light of the world.”** A long, sharpening dispute follows: his testimony and the Father’s, the warning that *“unless you believe that I am he, you will die in your sins,”* the promise that **“the truth will set you free,”** and a fierce exchange over fatherhood — Abraham’s children, or the devil’s? It climaxes in the most staggering claim of all: **“Before Abraham was, I am.”** They take up stones; he slips away.',
      sv: 'Kapitlet öppnar med den älskade (och textkritiskt osäkra) berättelsen om **kvinnan som greps i äktenskapsbrott** — *”Den av er som är utan synd, kasta första stenen… inte heller jag dömer dig.”* Sedan, mot lövhyddohögtidens lampor, förklarar Jesus **”Jag är världens ljus.”** En lång, allt skarpare tvist följer: hans vittnesbörd och Faderns, varningen att *”om ni inte tror att det är jag, ska ni dö i era synder,”* löftet att **”sanningen ska göra er fria,”** och ett häftigt ordskifte om faderskap — Abrahams barn, eller djävulens? Det kulminerar i det mest häpnadsväckande anspråket av alla: **”Innan Abraham blev till, är jag.”** De tar upp stenar; han undkommer.',
    },
  },
  {
    num: 7,
    titles: { en: 'At the Feast of Tabernacles', sv: 'Vid lövhyddohögtiden' },
    summaries: {
      en: 'Jesus goes up **secretly** to the **Feast of Tabernacles**, where the city buzzes and divides over him — a good man, or a deceiver? Teaching in the temple, he answers the charge that he is untrained (*“My teaching is not mine, but his who sent me”*), presses the crowd that seeks to kill him, and stakes the test of truth on the will: *whoever wants to do God’s will shall know.* On the great last day of the feast he cries out the promise of the Spirit — **“Out of his heart will flow rivers of living water.”** The crowd splits — the Prophet? the Christ? — but “no prophet comes from Galilee.” The temple officers sent to arrest him return empty-handed: **“No one ever spoke like this man.”** And Nicodemus, alone, asks whether the law condemns a man unheard.',
      sv: 'Jesus går upp **i hemlighet** till **lövhyddohögtiden**, där staden sjuder och är splittrad om honom — en god man, eller en villolärare? När han undervisar i templet bemöter han anklagelsen att han är olärd (*”Min lära är inte min, utan hans som har sänt mig”*), pressar skaran som vill döda honom, och gör viljan till sanningens prov: *den som vill göra Guds vilja ska förstå.* På högtidens stora sista dag ropar han ut löftet om Anden — **”Från hans innersta ska strömmar av levande vatten flyta.”** Skaran delar sig — Profeten? Messias? — men ”ingen profet kommer från Galileen.” Tempelvakterna som sänts att gripa honom återvänder tomhänta: **”Aldrig har någon människa talat som denne.”** Och Nikodemus, ensam, frågar om lagen dömer en man ohörd.',
    },
  },
  {
    num: 6,
    titles: { en: 'The Bread of Life', sv: 'Livets bröd' },
    summaries: {
      en: 'Jesus feeds **five thousand** from five barley loaves, and the crowd, missing the sign, tries to make him **king** by force; that night he comes to the disciples **walking on the sea** — *“It is I; do not be afraid.”* Back in Capernaum he meets a crowd chasing more bread with the discourse that names him **“I am the bread of life”**: the true bread from heaven, greater than the manna, who gives himself — *“the bread that I will give is my flesh, for the life of the world.”* The saying is *hard*, and **many disciples turn back**; but when he asks the Twelve whether they too will go, Peter answers, *“Lord, to whom shall we go? You have the words of eternal life.”* And Jesus notes that one of them is a betrayer.',
      sv: 'Jesus mättar **fem tusen** av fem kornbröd, och folkskaran, som missar tecknet, försöker med våld göra honom till **kung**; samma natt kommer han till lärjungarna **gående på sjön** — *”Det är jag; var inte rädda.”* Tillbaka i Kapernaum möter han en skara som jagar mer bröd med talet som namnger honom **”Jag är livets bröd”**: det sanna brödet från himlen, större än mannat, som ger sig själv — *”det bröd jag ska ge är mitt kött, för världens liv.”* Talet är *hårt*, och **många lärjungar vänder tillbaka**; men när han frågar de tolv om också de vill gå, svarar Petrus: *”Herre, till vem skulle vi gå? Du har det eviga livets ord.”* Och Jesus märker att en av dem är en förrädare.',
    },
  },
  {
    num: 5,
    titles: { en: 'The Healing at Bethesda, and the Son’s Authority', sv: 'Botandet vid Betesda och Sonens fullmakt' },
    summaries: {
      en: 'At a Jerusalem feast Jesus heals a man **paralyzed for thirty-eight years** at the pool of Bethesda — and does it on the **Sabbath**, telling him to carry his mat. When the authorities object, and all the more when he calls God *his own Father*, making himself **equal with God**, Jesus answers with the Gospel’s fullest claim about himself: the Son does only what he sees the Father doing, yet the Father has given him to *give life* and to *judge*, so that all should honor the Son as they honor the Father. To *hear his word* is to have crossed already *from death to life*. Four witnesses confirm him — John, his works, the Father, and the Scriptures — yet they will not come to him for life.',
      sv: 'Vid en högtid i Jerusalem botar Jesus en man som varit **förlamad i trettioåtta år** vid Betesdadammen — och gör det på **sabbaten**, och säger honom att bära sin bädd. När myndigheterna protesterar, och än mer när han kallar Gud *sin egen Fader* och gör sig **jämlik med Gud**, svarar Jesus med evangeliets fullaste anspråk om sig själv: Sonen gör bara det han ser Fadern göra, men Fadern har gett honom att *ge liv* och att *döma*, så att alla ska ära Sonen som de ärar Fadern. Att *höra hans ord* är att redan ha gått *från döden till livet*. Fyra vittnen bekräftar honom — Johannes, hans gärningar, Fadern och Skrifterna — men de vill inte komma till honom för att få liv.',
    },
  },
  {
    num: 3,
    titles: { en: 'Nicodemus & the Friend of the Bridegroom', sv: 'Nikodemus och brudgummens vän' },
    summaries: {
      en: 'By night a ruler named **Nicodemus** comes to Jesus, who tells him no one can see God’s kingdom without being **born from above** — of water and Spirit, as free and untraceable as the wind. The discourse opens onto the Gospel’s most famous words: God *so loved the world* that he gave his only Son, not to condemn it but to save it — and the judgment is simply that the light has come, and people prefer the dark. Then John the Baptist, questioned about baptizing, gives his last and gladdest testimony: *he must increase, but I must decrease.*',
      sv: 'Om natten kommer en rådsherre vid namn **Nikodemus** till Jesus, som säger honom att ingen kan se Guds rike utan att bli **född ovanifrån** — av vatten och Ande, lika fri och ospårbar som vinden. Samtalet mynnar ut i evangeliets mest kända ord: Gud *älskade världen så* att han gav sin ende Son, inte för att döma den utan för att rädda den — och domen är helt enkelt att ljuset har kommit, och människorna föredrar mörkret. Sedan ger Johannes Döparen, tillfrågad om sitt dop, sitt sista och gladaste vittnesbörd: *han måste växa till, men jag måste avta.*',
    },
  },
];

const cap = (s) => s[0].toUpperCase() + s.slice(1);
const TRAIL = /['’”".,;:!?—]+$/u;

function emitEnglish(ch, v, entries) {
  return entries.map(([text, align, supplied], i) => {
    let core = text, after = '';
    const mm = core.match(TRAIL);
    if (mm && mm.index > 0) { after = mm[0]; core = core.slice(0, mm.index); }
    const ids = (align || '').trim() ? align.trim().split(/\s+/) : [];
    const parts = [`id: 'e${ch}.${v}.${i + 1}'`, `text: ${JSON.stringify(core)}`];
    if (after) parts.push(`after: ${JSON.stringify(after)}`);
    parts.push(`align: [${ids.map((x) => `'${x}'`).join(', ')}]`);
    if (supplied) parts.push('supplied: true');
    return `        { ${parts.join(', ')} },`;
  }).join('\n');
}
function emitAnnotations(ch, v, notes) {
  return notes.map((n, i) => {
    const refs = n.refs.trim().split(/\s+/).map((x) => `'${x}'`).join(', ');
    return [
      `        {`, `          id: 'a${ch}.${v}.${i + 1}',`,
      `          kind: ${JSON.stringify(n.kind)},`, `          refs: [${refs}],`,
      `          lemma: ${JSON.stringify(n.lemma)},`, `          title: ${JSON.stringify(n.title)},`,
      `          body: ${JSON.stringify(n.body)},`, `        },`,
    ].join('\n');
  }).join('\n');
}
function emitGreek(tokens) {
  return tokens.map((t) => {
    const parts = [`id: '${t.id}'`, `text: ${JSON.stringify(t.text)}`];
    if (t.after) parts.push(`after: ${JSON.stringify(t.after)}`);
    parts.push(`lemma: ${JSON.stringify(t.lemma)}`, `translit: ${JSON.stringify(t.translit)}`, `morph: ${JSON.stringify(t.morph)}`);
    if (t.gloss) parts.push(`gloss: ${JSON.stringify(t.gloss)}`);
    return `        { ${parts.join(', ')} },`;
  }).join('\n');
}

async function loadContent(chNum, lang) {
  const file = path.join(__dirname, 'content', `john${chNum}.${lang}.mjs`);
  if (!fs.existsSync(file)) return null;
  const mod = await import(`${file}?t=${Date.now()}`);
  return mod.CONTENT;
}

let brokenTotal = 0;
function validate(chNum, greek, content) {
  const ids = new Set(Object.values(greek).flat().map((t) => t.id));
  let broken = 0;
  for (const [v, c] of Object.entries(content)) {
    for (const [, align] of c.english) for (const id of (align || '').trim().split(/\s+/).filter(Boolean)) if (!ids.has(id)) { broken++; console.error(`  ✗ ${chNum}:${v} english → ${id}`); }
    for (const n of c.annotations) for (const id of n.refs.trim().split(/\s+/).filter(Boolean)) if (!ids.has(id)) { broken++; console.error(`  ✗ ${chNum}:${v} note → ${id}`); }
  }
  brokenTotal += broken;
  return broken;
}

for (const chap of CHAPTERS) {
  const ch = chap.num;
  const en = await loadContent(ch, 'en');
  if (!en) throw new Error(`missing base content: john${ch}.en.mjs`);
  const verseNums = Object.keys(en).map(Number).sort((a, b) => a - b);
  const greek = chapterGreek(ch, verseNums);
  validate(ch, greek, en);

  // Base chapter (English).
  let verses = '';
  for (const v of verseNums) {
    if (!en[v]) throw new Error(`john${ch}.en.mjs missing verse ${v}`);
    verses += `    {\n      ref: '${ch}:${v}',\n      chapter: ${ch},\n      verse: ${v},\n`;
    verses += `      greek: [\n${emitGreek(greek[v])}\n      ],\n`;
    verses += `      english: [\n${emitEnglish(ch, v, en[v].english)}\n      ],\n`;
    verses += `      annotations: [\n${emitAnnotations(ch, v, en[v].annotations)}\n      ],\n`;
    verses += `    },\n`;
  }
  let base = "import type { Chapter } from './types';\n\n";
  base += `// The Gospel of John, chapter ${ch}. Greek: Nestle 1904 (public domain).\n`;
  base += '// Translation & annotations: this edition. GENERATED by scripts/build.mjs\n';
  base += `// from scripts/content/john${ch}.en.mjs — edit there, not here.\n\n`;
  base += `export const john${ch}: Chapter = {\n  book: 'John',\n  chapter: ${ch},\n  title: ${JSON.stringify(chap.titles.en)},\n  summary: ${JSON.stringify(chap.summaries.en)},\n  verses: [\n${verses}  ],\n};\n`;
  fs.writeFileSync(path.join(DATA, `john${ch}.ts`), base);

  // Overlays (other languages).
  for (const lang of LANGS) {
    if (lang === 'en') continue;
    const content = await loadContent(ch, lang);
    if (!content) continue;
    validate(ch, greek, content);
    let overlay = '';
    for (const v of verseNums) {
      if (!content[v]) continue;
      overlay += `  ${v}: {\n    english: [\n${emitEnglish(ch, v, content[v].english)}\n    ],\n    annotations: [\n${emitAnnotations(ch, v, content[v].annotations)}\n    ],\n  },\n`;
    }
    const name = `john${ch}`;
    const exportName = `${name}${cap(lang)}`;
    let sv = `import { ${name} } from './${name}';\n`;
    sv += "import type { Annotation, Chapter, EnglishToken } from './types';\n\n";
    sv += `// ${lang} edition of John ${ch}. Shares ${name}’s Greek spine; only the\n`;
    sv += `// translation and annotations differ. GENERATED by scripts/build.mjs\n`;
    sv += `// from scripts/content/john${ch}.${lang}.mjs — edit there, not here.\n\n`;
    sv += `const OVERLAY: Record<number, { english: EnglishToken[]; annotations: Annotation[] }> = {\n${overlay}};\n\n`;
    sv += `export const ${exportName}: Chapter = {\n  ...${name},\n  title: ${JSON.stringify(chap.titles[lang])},\n  summary: ${JSON.stringify(chap.summaries[lang])},\n`;
    sv += `  verses: ${name}.verses.map((v) => ({\n    ...v,\n    english: OVERLAY[v.verse]?.english ?? v.english,\n    annotations: OVERLAY[v.verse]?.annotations ?? v.annotations,\n  })),\n};\n`;
    fs.writeFileSync(path.join(DATA, `john${ch}.${lang}.ts`), sv);
  }
  console.log(`✓ John ${ch}: ${verseNums.length} verses, langs [${LANGS.join(', ')}]`);
}

if (brokenTotal) { console.error(`\n${brokenTotal} broken alignment reference(s).`); process.exit(1); }
console.log('\nAll alignment references valid. Wrote src/data/john*.ts');
