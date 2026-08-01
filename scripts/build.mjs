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
    num: 21,
    titles: { en: 'Epilogue: “Do You Love Me?”', sv: 'Efterord: ”Älskar du mig?”' },
    summaries: {
      en: 'By the Sea of Tiberias the disciples fish all night and catch nothing — until, at the word of a stranger on the shore, they cast on the right side and the net fills. *“It is the Lord!”* Peter throws himself into the sea; they haul in **153 fish**, and the net is not torn. Jesus has bread and fish waiting over a **charcoal fire** — and there, at a fire like the one where Peter denied him, he restores him: three times, **“Simon, do you love me?”**, three times a commission — *“Feed my lambs… tend my sheep.”* He foretells the death by which Peter will glorify God, and calls him again: **“Follow me.”** Of the beloved disciple he says only, *“If it is my will that he remain… what is that to you?”* That disciple is the one who wrote these things, and his testimony is true. And there is far more Jesus did — more than all the books in the world could contain.',
      sv: 'Vid Tiberias sjö fiskar lärjungarna hela natten utan att fånga något — tills de, på en främlings ord från stranden, kastar ut på högra sidan och nätet fylls. *”Det är Herren!”* Petrus kastar sig i sjön; de drar in **153 fiskar**, och nätet brister inte. Jesus har bröd och fisk redo över en **koleld** — och där, vid en eld lik den där Petrus förnekade honom, upprättar han honom: tre gånger, **”Simon, älskar du mig?”**, tre gånger ett uppdrag — *”För mina lamm… var herde för mina får.”* Han förutsäger den död genom vilken Petrus ska förhärliga Gud, och kallar honom åter: **”Följ mig.”** Om den älskade lärjungen säger han bara: *”Om jag vill att han ska bli kvar… vad rör det dig?”* Den lärjungen är den som skrev detta, och hans vittnesbörd är sant. Och Jesus gjorde långt mer — mer än alla böcker i världen kunde rymma.',
    },
  },
  {
    num: 20,
    titles: { en: 'The Resurrection', sv: 'Uppståndelsen' },
    summaries: {
      en: 'On the first day of the week, while it is still dark, **Mary Magdalene** finds the stone rolled away. Peter and the beloved disciple run to the tomb; the latter sees the grave-clothes lying, and *saw and believed.* Mary, weeping, mistakes the risen Jesus for the gardener — until he speaks her name, **“Mary,”** and she cries, **“Rabboni!”** That evening, behind locked doors, Jesus stands among the disciples: **“Peace be with you,”** shows them his hands and side, sends them as the Father sent him, and breathes on them: *“Receive the Holy Spirit.”* Thomas, absent, will not believe without touching the wounds — but a week later he meets the risen Lord and confesses, **“My Lord and my God!”** *Blessed are those who have not seen and yet have believed.* And John states his purpose: **these are written that you may believe… and that believing you may have life in his name.**',
      sv: 'På första veckodagen, medan det ännu är mörkt, finner **Maria från Magdala** stenen bortrullad. Petrus och den älskade lärjungen springer till graven; den senare ser linnebindlarna ligga, och *såg och trodde.* Maria, gråtande, tar den uppståndne Jesus för trädgårdsmästaren — tills han säger hennes namn, **”Maria,”** och hon ropar: **”Rabbuni!”** Den kvällen, bakom låsta dörrar, står Jesus mitt bland lärjungarna: **”Frid vare med er,”** visar dem sina händer och sin sida, sänder dem som Fadern sänt honom, och andas på dem: *”Ta emot helig Ande.”* Tomas, frånvarande, vill inte tro utan att röra vid såren — men en vecka senare möter han den uppståndne Herren och bekänner: **”Min Herre och min Gud!”** *Saliga är de som inte har sett men ändå tror.* Och Johannes anger sitt syfte: **detta är skrivet för att ni ska tro… och för att ni genom tron ska ha liv i hans namn.**',
    },
  },
  {
    num: 19,
    titles: { en: 'The Crucifixion: “It Is Finished”', sv: 'Korsfästelsen: ”Det är fullbordat”' },
    summaries: {
      en: 'Pilate has Jesus flogged; the soldiers crown him with thorns and hail him in mockery. **“Behold the man!”** — and again, **“Behold your King!”** — but the crowd cries *“Crucify!”* and *“We have no king but Caesar.”* At **Golgotha** he is crucified between two others, and Pilate’s placard names him, in three languages, *King of the Jews*. From the cross Jesus gives his mother to the beloved disciple: **“Behold your son… behold your mother.”** Then, knowing all was accomplished, he says **“I thirst,”** and having received the sour wine, **“It is finished,”** and gives up his spirit. A spear opens his side, and out come **blood and water**. Not a bone is broken; they look on him whom they pierced. **Joseph of Arimathea** and **Nicodemus** wrap him in linen and spices and lay him in a new tomb in a garden.',
      sv: 'Pilatus låter gissla Jesus; soldaterna kröner honom med törnen och hyllar honom hånfullt. **”Se, mannen!”** — och åter, **”Se, er konung!”** — men folket ropar *”Korsfäst!”* och *”Vi har ingen konung utom kejsaren.”* På **Golgata** korsfästs han mellan två andra, och Pilatus skylt namnger honom, på tre språk, som *judarnas konung*. Från korset ger Jesus sin mor åt den älskade lärjungen: **”Se, din son… se, din mor.”** Sedan, medveten om att allt var fullbordat, säger han **”Jag törstar,”** och när han tagit emot den sura vinen: **”Det är fullbordat,”** och ger upp andan. Ett spjut öppnar hans sida, och ut kommer **blod och vatten**. Inget ben krossas; de ska se upp till honom som de har genomborrat. **Josef från Arimatea** och **Nikodemus** lindar honom i linne och kryddor och lägger honom i en ny grav i en trädgård.',
    },
  },
  {
    num: 18,
    titles: { en: 'The Arrest, and Jesus Before Pilate', sv: 'Fängslandet, och Jesus inför Pilatus' },
    summaries: {
      en: 'In the garden across the Kidron, Judas comes with soldiers and torches. Jesus, *knowing all that would happen*, steps forward — and at his **“I am he”** the arresting party falls to the ground. He shields his disciples (*“let these men go”*) and stops Peter’s sword: *“shall I not drink the cup the Father has given me?”* Led first to **Annas**, then Caiaphas, he answers the high priest openly. Meanwhile, at a **charcoal fire**, Peter denies him three times, and the rooster crows. Brought at dawn to **Pilate**, Jesus is questioned about kingship: **“My kingdom is not of this world.”** He came *to bear witness to the truth* — and Pilate asks, **“What is truth?”** then declares, *“I find no guilt in him.”* Yet the crowd cries for Barabbas.',
      sv: 'I trädgården på andra sidan Kidron kommer Judas med soldater och facklor. Jesus, som *visste allt som skulle hända*, träder fram — och vid hans **”Det är jag”** faller de som griper honom till marken. Han skyddar sina lärjungar (*”låt dessa gå”*) och hejdar Petrus svärd: *”ska jag inte dricka den kalk som Fadern har gett mig?”* Förd först till **Hannas**, sedan Kaifas, svarar han översteprästen öppet. Under tiden, vid en **koleld**, förnekar Petrus honom tre gånger, och tuppen gal. Förd i gryningen till **Pilatus** förhörs Jesus om kungadöme: **”Mitt rike är inte av denna värld.”** Han kom *för att vittna om sanningen* — och Pilatus frågar: **”Vad är sanning?”** och förklarar sedan: *”Jag finner honom inte skyldig.”* Ändå ropar folket på Barabbas.',
    },
  },
  {
    num: 17,
    titles: { en: 'The High Priestly Prayer', sv: 'Den översteprästerliga bönen' },
    summaries: {
      en: 'Jesus lifts his eyes to heaven and prays. First **for himself**: *“Father, the hour has come; glorify your Son”* — and he names eternal life itself: **“that they know you, the only true God, and Jesus Christ whom you have sent.”** Then **for his disciples**, whom the Father gave him out of the world: *keep them* from the evil one — not taken out of the world but guarded in it — and *sanctify them in the truth; your word is truth*, for as the Father sent him, so he sends them. Finally **for all who will believe** through their word: **“that they may all be one, as you, Father, are in me and I in you… so that the world may believe that you have sent me.”** He longs for them to be with him and to see his glory — and that the Father’s own love may be in them.',
      sv: 'Jesus lyfter blicken mot himlen och ber. Först **för sig själv**: *”Fader, stunden har kommit; förhärliga din Son”* — och han namnger själva det eviga livet: **”att de känner dig, den ende sanne Guden, och Jesus Kristus som du har sänt.”** Sedan **för sina lärjungar**, som Fadern gett honom ur världen: *bevara dem* från den onde — inte tagna ur världen utan bevarade i den — och *helga dem i sanningen; ditt ord är sanning*, för så som Fadern sänt honom sänder han dem. Till sist **för alla som ska komma till tro** genom deras ord: **”att de alla ska vara ett, så som du, Fader, är i mig och jag i dig… för att världen ska tro att du har sänt mig.”** Han längtar efter att de ska vara med honom och se hans härlighet — och att Faderns egen kärlek ska vara i dem.',
    },
  },
  {
    num: 16,
    titles: { en: 'The Spirit, and Sorrow Turned to Joy', sv: 'Anden, och sorg vänd till glädje' },
    summaries: {
      en: 'Jesus warns of coming persecution — even death at the hands of those who think they serve God — then turns to comfort: **“It is to your advantage that I go away,”** for only then will the Helper come. When the **Spirit of truth** comes he will *convict the world* concerning sin, righteousness, and judgment, and *guide you into all the truth*, glorifying Christ. A riddle — *“a little while, and you will see me no more; and again a little while, and you will see me”* — puzzles the disciples, until he unfolds it: like a **woman in labor**, their sorrow will be turned into a joy no one can take away. Ask the Father in his name, and receive. He came from the Father and returns to him. His last word before the prayer: **“In the world you will have tribulation. But take heart; I have overcome the world.”**',
      sv: 'Jesus varnar för kommande förföljelse — till och med död för deras hand som tror sig tjäna Gud — och vänder sedan till tröst: **”Det är bäst för er att jag går bort,”** för först då kommer Hjälparen. När **sanningens Ande** kommer ska han *överbevisa världen* om synd, rättfärdighet och dom, och *leda er in i hela sanningen*, och förhärliga Kristus. En gåta — *”en liten stund, och ni ser mig inte längre; och åter en liten stund, och ni ska se mig”* — förbryllar lärjungarna, tills han förklarar den: som en **kvinna i födslovånda** ska deras sorg vändas till en glädje ingen kan ta ifrån dem. Be Fadern i hans namn, och ta emot. Han kom från Fadern och återvänder till honom. Hans sista ord före bönen: **”I världen får ni lida. Men var vid gott mod; jag har övervunnit världen.”**',
    },
  },
  {
    num: 15,
    titles: { en: 'The True Vine', sv: 'Den sanna vinstocken' },
    summaries: {
      en: 'The last of the “I am” sayings opens the discourse’s heart: **“I am the true vine, and my Father is the vinedresser… I am the vine, you are the branches.”** The one word that beats through it is **abide** — remain in me, and I in you, for *apart from me you can do nothing*, and the branch that does not abide withers and is burned. Abiding bears **much fruit**, to the Father’s glory, and its fruit is love: **“love one another as I have loved you.”** He raises them from servants to **friends** — *“greater love has no one than this, that someone lay down his life for his friends”* — chosen and appointed to lasting fruit. Then a sober warning: the world that hated him will hate them too. But the **Spirit of truth** will come and bear witness — and so will they.',
      sv: 'Det sista av ”Jag är”-orden öppnar avskedstalets hjärta: **”Jag är den sanna vinstocken, och min Fader är vingårdsmannen… Jag är vinstocken, ni är grenarna.”** Det enda ord som pulserar genom det är **förbli** — förbli i mig, och jag i er, för *utan mig kan ni ingenting göra*, och grenen som inte förblir vissnar och bränns upp. Att förbli bär **rik frukt**, till Faderns ära, och dess frukt är kärlek: **”älska varandra som jag har älskat er.”** Han lyfter dem från tjänare till **vänner** — *”ingen har större kärlek än att han ger sitt liv för sina vänner”* — utvalda och satta att bära bestående frukt. Sedan en allvarlig varning: världen som hatade honom ska hata också dem. Men **sanningens Ande** ska komma och vittna — och det ska de också.',
    },
  },
  {
    num: 14,
    titles: { en: 'The Way, and the Promise of the Spirit', sv: 'Vägen och löftet om Anden' },
    summaries: {
      en: 'Into the disciples’ fear Jesus speaks comfort: **“Let not your hearts be troubled… In my Father’s house are many rooms,”** and *I go to prepare a place for you.* To Thomas’ “how can we know the way?” comes the great answer: **“I am the way, and the truth, and the life; no one comes to the Father except through me.”** To Philip’s “show us the Father,” another: **“Whoever has seen me has seen the Father.”** He promises **another Helper, the Spirit of truth**, to be with them forever — *“I will not leave you as orphans.”* Love him and keep his word, and Father and Son will come and make their home with you. His parting gift: **“Peace I leave with you; my peace I give to you. Not as the world gives.”**',
      sv: 'In i lärjungarnas rädsla talar Jesus tröst: **”Låt inte era hjärtan oroas… I min Faders hus finns många rum,”** och *jag går för att bereda plats åt er.* På Tomas ”hur kan vi veta vägen?” kommer det stora svaret: **”Jag är vägen, sanningen och livet; ingen kommer till Fadern utom genom mig.”** På Filippus ”visa oss Fadern” ett annat: **”Den som har sett mig har sett Fadern.”** Han lovar **en annan Hjälpare, sanningens Ande**, att vara med dem för alltid — *”jag ska inte lämna er faderlösa.”* Älska honom och håll hans ord, så ska Fadern och Sonen komma och ta sin boning hos er. Hans avskedsgåva: **”Frid lämnar jag åt er; min frid ger jag er. Inte som världen ger.”**',
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

async function loadContent(prefix, chNum, lang) {
  const file = path.join(__dirname, 'content', `${prefix}${chNum}.${lang}.mjs`);
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

const MATT_CHAPTERS = [
  {
    num: 10,
    titles: { en: 'The Twelve Sent: Sheep Among Wolves', sv: 'De tolv utsända: får bland vargar' },
    summaries: {
      en: 'The Twelve get names — a founder-list kept unairbrushed: **Matthew the tax collector** (only this gospel keeps the epithet), Simon the *zealot* beside him, and Judas last, epitaph and all. The mission travels light: **freely you received, freely give** — no gold, no bag, and the moment the gospel becomes a revenue stream it has stopped being the gospel. Then the weather report: *sheep among wolves* — be **serpent-shrewd and dove-innocent**; floggings, governors, divided households. The hard verse about the towns of Israel is left standing, teeth and all. Fear is dismantled from the bottom up: the sparrow still falls, but never **without your Father**; your hairs are numbered. *Not peace but a sword* — a blade his coming provokes, never one his followers wield. And after demanding everything, the chapter ends at the smallest scale that still counts: **a cup of cold water**, guaranteed never to lose its reward.',
      sv: 'De tolv får namn — en grundarlista utan retusch: **Matteus tullindrivaren** (bara detta evangelium behåller tillnamnet), Simon *seloten* bredvid honom, och Judas sist, med gravskrift och allt. Missionen reser lätt: **för intet har ni fått, för intet ska ni ge** — inget guld, ingen väska, och i det ögonblick evangeliet blir en intäktskälla har det upphört att vara evangelium. Sedan väderrapporten: *får bland vargar* — var **ormkloka och duvorena**; gisslingar, ståthållare, splittrade hushåll. Den svåra versen om Israels städer får stå kvar, med tänder och allt. Fruktan monteras ner nedifrån: sparven faller ändå, men aldrig **utan er Fader**; era hårstrån är räknade. *Inte frid utan svärd* — en klinga hans ankomst framkallar, aldrig en hans efterföljare svingar. Och efter att ha begärt allt slutar kapitlet i minsta skala som ändå räknas: **en bägare kallt vatten**, garanterad att aldrig mista sin lön.',
    },
  },
  {
    num: 9,
    titles: { en: 'Forgiveness Proved, a Tax Collector Called, a Girl Raised', sv: 'Förlåtelse bevisad, en tullindrivare kallad, en flicka uppväckt' },
    summaries: {
      en: 'Four friends lower a stretcher and Jesus answers a question nobody asked: *your sins are forgiven*. The scribes are right that only God can say that — so he stakes the invisible claim on a visible one: **“Which is easier?”** — and the man walks. Then a tax collector\'s nine-word call (*only this gospel names him Matthew*), a dinner with sinners defended by **Hosea\'s line — mercy, not sacrifice**, and new wine that old skins cannot hold. A ruler\'s dead daughter and a bleeding woman interleave: she touches the **tzitzit fringe** and becomes the only person he ever calls *daughter*; the funeral professionals **laugh at him**, and are wrong. Two blind men, a mute man freed — and then the chapter\'s hinge: seeing the harassed crowds he is moved **in the gut**, and sets a trap disguised as a prayer: *beg the Lord of the harvest to thrust out workers.* Chapter 10 springs it.',
      sv: 'Fyra vänner firar ner en bår och Jesus besvarar en fråga ingen ställt: *dina synder är förlåtna*. De skriftlärda har rätt i att bara Gud kan säga så — därför sätter han det osynliga anspråket i pant på ett synligt: **”Vilket är lättare?”** — och mannen går. Sedan en tullindrivares kallelse på nio ord (*bara detta evangelium kallar honom Matteus*), en middag med syndare försvarad med **Hoseas rad — barmhärtighet, inte offer**, och nytt vin som gamla säckar inte rymmer. En föreståndares döda dotter och en blödande kvinna flätas samman: hon rör vid **tzitzit-tofsen** och blir den enda han någonsin kallar *dotter*; begravningsproffsen **skrattar åt honom**, och har fel. Två blinda, en stum man befriad — och sedan kapitlets gångjärn: vid åsynen av de illa medfarna skarorna grips han **i det innersta**, och gillrar en fälla förklädd till bön: *be skördens Herre att driva ut arbetare.* Kapitel 10 slår igen den.',
    },
  },
  {
    num: 8,
    titles: { en: 'Down the Mountain: The Leper, the Centurion, and the Storm', sv: 'Nedför berget: den spetälske, officeren och stormen' },
    summaries: {
      en: 'The Sermon ends and the sentences start acting. A leper says *“if you will”* — and Jesus **touches him first**, then speaks the one-word answer, *I will*. A Roman centurion reasons from chain-of-command to faith-at-a-distance, and becomes the only person in the gospels who ever **amazes** Jesus; Isaiah 53 is quoted not at the cross but over an evening clinic — *he took our weaknesses, carried our diseases*. Two would-be followers meet the cost: **the Son of Man** — his strange name, first used here — has nowhere to lay his head. Then a *seismos* on the sea, a Lord asleep in the stern, wind and wave **rebuked** like demons, and the question left ringing in the boat: *what sort of man is this?* Across the water, Gadara counts its drowned pigs — and asks him, politely, to leave.',
      sv: 'Bergspredikan slutar och meningarna börjar handla. En spetälsk säger *”om du vill”* — och Jesus **rör vid honom först**, sedan kommer svaret på ett enda ord: *jag vill*. En romersk officer resonerar sig från befälsordning till tro-på-avstånd och blir den ende i evangelierna som någonsin får Jesus att **häpna**; Jesaja 53 citeras inte vid korset utan över en kvällsmottagning — *han tog våra svagheter, bar våra sjukdomar*. Två blivande efterföljare möter priset: **Människosonen** — hans egendomliga namn, här för första gången — har ingenstans att luta sitt huvud. Sedan en *seismos* på sjön, en Herre som sover i aktern, vind och våg **tillrättavisade** som demoner, och frågan som blir hängande i båten: *vad är detta för en man?* På andra stranden räknar Gadara sina drunknade svin — och ber honom, artigt, att gå.',
    },
  },
  {
    num: 7,
    titles: { en: 'The Sermon on the Mount III: Two Roads, Two Houses', sv: 'Bergspredikan III: Två vägar, två hus' },
    summaries: {
      en: 'The Sermon closes with a volley of endings. **Judge not** — the log in your own eye first; keep **asking, seeking, knocking**, for the Father does not hand his children stones; and *everything you want done for you, do* — for **this is the law and the prophets**. Then the partings: the narrow gate against the broad road; wolves in wool, tested **by their fruits**; and the chilling *“Lord, Lord… I never knew you”* — religion itself as the last disguise. Finally two builders, one storm: whoever **hears these words and does them** builds on rock. The crowds are astonished: he teaches *as one having authority*.',
      sv: 'Bergspredikan sluter med en salva av slut. **Döm inte** — bjälken i ditt eget öga först; fortsätt **be, sök, bulta**, ty Fadern räcker inte sina barn stenar; och *allt ni vill att människorna ska göra er, gör dem* — ty **detta är lagen och profeterna**. Sedan vägskälen: den trånga porten mot den breda vägen; vargar i ull, prövade **av deras frukt**; och det isande *”Herre, Herre… jag har aldrig känt er”* — religionen själv som sista förklädnad. Till sist två byggare, en storm: den som **hör dessa ord och gör dem** bygger på klippan. Skarorna häpnar: han undervisar *som en som har makt*.',
    },
  },
  {
    num: 6,
    titles: { en: 'The Sermon on the Mount II: In Secret, and Without Anxiety', sv: 'Bergspredikan II: I det fördolda, och utan bekymmer' },
    summaries: {
      en: 'Three practices, one warning: alms, prayer, and fasting done **for spectators** are theatre, and the applause is the whole wage — *your Father who sees in secret will repay you*. At the centre stands the **Our Father**: fifty-seven words, plural from the first, with an untranslatable word at its heart and no doxology in the oldest text. Then the ledger widens: treasures where **moth and rust consume**, the impossibility of serving **God and Mammon**, and the great passage on anxiety — *look at the birds… study the lilies*. Seek first the kingdom; **tomorrow can be anxious for itself.**',
      sv: 'Tre bruk, en varning: allmosor, bön och fasta inför **åskådare** är teater, och applåderna är hela gaget — *din Fader som ser i det fördolda ska vedergälla dig*. I mitten står **Vår Fader**: femtiosju ord, plural från det första, med ett oöversättbart ord i sitt hjärta och utan doxologi i den äldsta texten. Sedan vidgas bokföringen: skatter där **mal och rost förtär**, omöjligheten att tjäna **Gud och Mammon**, och det stora stycket om bekymmer — *se på fåglarna… betrakta liljorna*. Sök först riket; **morgondagen får bekymra sig om sitt.**',
    },
  },
  {
    num: 5,
    titles: { en: 'The Sermon on the Mount I: Blessed, Salt, and “But I Say”', sv: 'Bergspredikan I: Saliga, salt och ”men jag säger”' },
    summaries: {
      en: 'Jesus goes up the mountain, sits, and congratulates all the wrong people: **blessed** are the poor in spirit, the mourning, the meek, the persecuted — theirs, *now*, is the kingdom. His hearers are **salt** and **light**, and the law is not being demolished but *filled full* — not one iota. Then six times the same audacious swing: *“You have heard it was said… but I say to you”* — from murder down to contempt, adultery down to the acquisitive gaze, oaths down to a plain yes; the slapped cheek turned, the second mile walked, and the crescendo: **love your enemies**, for your Father\'s sun rises on evil and good alike. *Be whole, as your heavenly Father is whole.*',
      sv: 'Jesus går upp på berget, sätter sig, och gratulerar alla fel människor: **saliga** är de i anden fattiga, de sörjande, de ödmjuka, de förföljda — deras, *nu*, är riket. Hans åhörare är **salt** och **ljus**, och lagen rivs inte utan *fylls full* — inte en jota. Sedan sex gånger samma djärva sving: *”Ni har hört att det sades… men jag säger er”* — från mordet ner till föraktet, äktenskapsbrottet ner till den ägande blicken, ederna ner till ett enkelt ja; den slagna kinden vänd, den andra milen gången, och crescendot: **älska era fiender**, ty er Faders sol går upp över onda och goda. *Var hela, som er himmelske Fader är hel.*',
    },
  },
  {
    num: 4,
    titles: { en: 'The Test in the Wilderness, and the First Followers', sv: 'Provet i öknen, och de första efterföljarna' },
    summaries: {
      en: 'Led by the Spirit into the wilderness, Jesus fasts **forty days** — Israel\'s forty years compressed — and meets the tester three times: bread, the temple pinnacle, the kingdoms of the world. Each answer is Deuteronomy; where the first son failed the exam, this one **retakes it and passes**. The devil leaves; *angels come and serve him* — unforced, the sign he refused to extort. Hearing of John\'s arrest he settles in **Capernaum**, and light dawns first in *“Galilee of the nations,”* exactly where Assyria\'s darkness fell first. Walking by the sea he calls four fishermen — **“Come, follow me”** — and at once they leave their nets. Teaching, proclaiming, healing, he is followed by crowds from every direction.',
      sv: 'Förd av Anden ut i öknen fastar Jesus **fyrtio dagar** — Israels fyrtio år sammanpressade — och möter frestaren tre gånger: brödet, tempeltinnarna, världens riken. Varje svar är Femte Mosebok; där den förste sonen föll på provet **gör denne om det och består**. Djävulen går; *änglar kommer och betjänar honom* — otvingat, tecknet han vägrade pressa fram. När han hör om Johannes fängslande bosätter han sig i **Kafarnaum**, och ljuset gryr först i *”hedningarnas Galileen”*, precis där Assyriens mörker föll först. Vandrande vid sjön kallar han fyra fiskare — **”Kom, följ mig”** — och genast lämnar de sina nät. Undervisande, förkunnande, botande följs han av skaror från alla håll.',
    },
  },
  {
    num: 3,
    titles: { en: 'The Baptist, and the Baptism', sv: 'Döparen, och dopet' },
    summaries: {
      en: 'John the Baptist appears in the wilderness — camel hair, locusts, and the cry **“Turn around: the kingdom of the heavens has drawn near.”** Crowds stream to the Jordan; to the Pharisees and Sadducees he is all fire: *brood of vipers*, the axe at the root, wheat and **chaff**. One mightier is coming, whose sandals John is unworthy to carry. Then Jesus arrives from Galilee — to be baptized. John protests (**“I need to be baptized by you”**), and Jesus answers: *“so it is fitting for us to fulfil all righteousness.”* He goes down into the water where the sinners stand; the heavens open, the **Spirit descends like a dove**, and a voice: **“This is my Son, the beloved, in whom I delight.”**',
      sv: 'Johannes Döparen träder fram i öknen — kamelhår, gräshoppor, och ropet **”Vänd om: himlarnas rike har kommit nära.”** Skarorna strömmar till Jordan; mot fariseerna och saddukeerna är han idel eld: *huggormsyngel*, yxan vid roten, vete och **agnar**. En starkare kommer, vars sandaler Johannes inte är värdig att bära. Då kommer Jesus från Galileen — för att döpas. Johannes protesterar (**”Jag behöver döpas av dig”**), och Jesus svarar: *”så bör vi fullborda all rättfärdighet.”* Han går ner i vattnet där syndarna står; himlarna öppnas, **Anden sänker sig som en duva**, och en röst: **”Denne är min Son, den älskade, i vilken jag har min glädje.”**',
    },
  },
  {
    num: 2,
    titles: { en: 'The Magi, the Flight, and the Massacre', sv: 'Magierna, flykten och barnamorden' },
    summaries: {
      en: 'Pagan star-readers from the east arrive asking where the **newborn king of the Jews** is — and Jerusalem\'s experts, who can cite the prophecy, do not move. The magi follow the star to a *house* in Bethlehem, worship the child, and offer **gold, frankincense, and myrrh**; warned in a dream, they go home by another road. Joseph flees with the child and his mother to **Egypt** — *"out of Egypt I called my son"* — while Herod, outwitted, kills the boys of Bethlehem, and **Rachel weeps** with a grief the quotation leaves unconsoled. When Herod dies the family returns, avoiding Archelaus, and settles in **Nazareth**: *he shall be called a Nazarene.*',
      sv: 'Hedniska stjärntydare från östern kommer och frågar var **judarnas nyfödde kung** är — och Jerusalems experter, som kan citera profetian, rör sig inte. Magierna följer stjärnan till ett *hus* i Betlehem, tillber barnet och bär fram **guld, rökelse och myrra**; varnade i en dröm far de hem en annan väg. Josef flyr med barnet och dess mor till **Egypten** — *"ut ur Egypten kallade jag min son"* — medan Herodes, gäckad, dödar Betlehems gossar, och **Rakel gråter** en sorg som citatet lämnar otröstad. När Herodes dör vänder familjen åter, undviker Arkelaus och bosätter sig i **Nasaret**: *han ska kallas nasaré.*',
    },
  },
  {
    num: 1,
    titles: { en: 'The Genealogy, and the Birth of Jesus', sv: 'Släkttavlan och Jesu födelse' },
    summaries: {
      en: 'Matthew opens with a **“book of genesis”** — a genealogy binding Jesus to *Abraham* and *David* through forty-two generations, arranged in three sweeps of fourteen: promise, kingship, exile, and now fulfilment. Four unexpected women — Tamar, Rahab, Ruth, and the wife of Uriah — break the pattern and prepare a fifth: **Mary**, of whom Jesus was born. Joseph, a just man unwilling to shame her, resolves to divorce her quietly — until an angel names the child in her: conceived *of the Holy Spirit*, to be called **Jesus**, “for he will save his people from their sins,” fulfilling the word: *the virgin shall conceive, and they shall call his name* **Immanuel** — *God with us.*',
      sv: 'Matteus öppnar med en **”släktens bok”** — en släkttavla som binder Jesus till *Abraham* och *David* genom fyrtiotvå släktled, ordnade i tre svep om fjorton: löfte, kungadöme, exil, och nu fullbordan. Fyra oväntade kvinnor — Tamar, Rahab, Rut och Urias hustru — bryter mönstret och förbereder en femte: **Maria**, av vilken Jesus föddes. Josef, en rättfärdig man som inte vill dra skam över henne, beslutar att skilja sig i tysthet — tills en ängel namnger barnet i henne: avlat *av helig Ande*, och han ska kallas **Jesus**, ”ty han ska frälsa sitt folk från deras synder,” så att ordet fullbordas: *jungfrun ska bli havande, och man ska ge honom namnet* **Immanuel** — *Gud med oss.*',
    },
  },
];

const BOOKS = [
  { csv: 'John', name: 'John', prefix: 'john', chapters: CHAPTERS },
  { csv: 'Matt', name: 'Matthew', prefix: 'matt', chapters: MATT_CHAPTERS },
];

for (const book of BOOKS) for (const chap of book.chapters) {
  const ch = chap.num;
  const pre = book.prefix;
  const en = await loadContent(pre, ch, 'en');
  if (!en) throw new Error(`missing base content: ${pre}${ch}.en.mjs`);
  const verseNums = Object.keys(en).map(Number).sort((a, b) => a - b);
  const greek = chapterGreek(ch, verseNums, book.csv);
  validate(ch, greek, en);

  // Base chapter (English).
  let verses = '';
  for (const v of verseNums) {
    if (!en[v]) throw new Error(`${pre}${ch}.en.mjs missing verse ${v}`);
    verses += `    {\n      ref: '${ch}:${v}',\n      chapter: ${ch},\n      verse: ${v},\n`;
    verses += `      greek: [\n${emitGreek(greek[v])}\n      ],\n`;
    verses += `      english: [\n${emitEnglish(ch, v, en[v].english)}\n      ],\n`;
    verses += `      annotations: [\n${emitAnnotations(ch, v, en[v].annotations)}\n      ],\n`;
    verses += `    },\n`;
  }
  let base = "import type { Chapter } from './types';\n\n";
  base += `// The Gospel of ${book.name}, chapter ${ch}. Greek: Nestle 1904 (public domain).\n`;
  base += '// Translation & annotations: this edition. GENERATED by scripts/build.mjs\n';
  base += `// from scripts/content/${pre}${ch}.en.mjs — edit there, not here.\n\n`;
  base += `export const ${pre}${ch}: Chapter = {\n  book: '${book.name}',\n  chapter: ${ch},\n  title: ${JSON.stringify(chap.titles.en)},\n  summary: ${JSON.stringify(chap.summaries.en)},\n  verses: [\n${verses}  ],\n};\n`;
  fs.writeFileSync(path.join(DATA, `${pre}${ch}.ts`), base);

  // Overlays (other languages).
  for (const lang of LANGS) {
    if (lang === 'en') continue;
    const content = await loadContent(pre, ch, lang);
    if (!content) continue;
    validate(ch, greek, content);
    let overlay = '';
    for (const v of verseNums) {
      if (!content[v]) continue;
      overlay += `  ${v}: {\n    english: [\n${emitEnglish(ch, v, content[v].english)}\n    ],\n    annotations: [\n${emitAnnotations(ch, v, content[v].annotations)}\n    ],\n  },\n`;
    }
    const name = `${pre}${ch}`;
    const exportName = `${name}${cap(lang)}`;
    let sv = `import { ${name} } from './${name}';\n`;
    sv += "import type { Annotation, Chapter, EnglishToken } from './types';\n\n";
    sv += `// ${lang} edition of ${book.name} ${ch}. Shares ${name}’s Greek spine; only the\n`;
    sv += `// translation and annotations differ. GENERATED by scripts/build.mjs\n`;
    sv += `// from scripts/content/${pre}${ch}.${lang}.mjs — edit there, not here.\n\n`;
    sv += `const OVERLAY: Record<number, { english: EnglishToken[]; annotations: Annotation[] }> = {\n${overlay}};\n\n`;
    sv += `export const ${exportName}: Chapter = {\n  ...${name},\n  title: ${JSON.stringify(chap.titles[lang])},\n  summary: ${JSON.stringify(chap.summaries[lang])},\n`;
    sv += `  verses: ${name}.verses.map((v) => ({\n    ...v,\n    english: OVERLAY[v.verse]?.english ?? v.english,\n    annotations: OVERLAY[v.verse]?.annotations ?? v.annotations,\n  })),\n};\n`;
    fs.writeFileSync(path.join(DATA, `${pre}${ch}.${lang}.ts`), sv);
  }
  console.log(`✓ ${book.name} ${ch}: ${verseNums.length} verses, langs [${LANGS.join(', ')}]`);
}

if (brokenTotal) { console.error(`\n${brokenTotal} broken alignment reference(s).`); process.exit(1); }
console.log('\nAll alignment references valid. Wrote src/data/john*.ts');
