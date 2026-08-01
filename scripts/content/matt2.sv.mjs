// Matteus 2 — svensk översättning & annotationer.
// english-fältet håller SVENSKA tokens, alignerade mot samma g-id:n.

export const CONTENT = {
  1: {
    english: [
      ["När", "", true], ["Jesus", "g2.1.3"], ["nu", "g2.1.2"], ["hade", "", true], ["fötts", "g2.1.4"],
      ["i", "g2.1.5"], ["Betlehem", "g2.1.6"], ["i", "g2.1.7", true], ["Judeen,", "g2.1.8"],
      ["i", "g2.1.9"], ["kung", "g2.1.12 g2.1.13"], ["Herodes", "g2.1.11"], ["dagar,", "g2.1.10"],
      ["se,", "g2.1.14"], ["då", "", true], ["kom", "g2.1.18"], ["magier", "g2.1.15"], ["från", "g2.1.16"], ["östern", "g2.1.17"],
      ["till", "g2.1.19"], ["Jerusalem", "g2.1.20"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g2.1.15 g2.1.17", lemma: "μάγοι ἀπὸ ἀνατολῶν",
        title: "Magier — hedniska astrologer, av alla människor",
        body: "**Μάγοι** var inte kungar, och Matteus räknar dem inte; de var en yrkesklass av persisk-babyloniska stjärntydare — drömuttolkare, teckenläsare, astrologer. Israels skrifter såg strängt på hela skrået (5 Mos 18:10-14; Jes 47:13-14 hånar Babylons ”himlarnas utdelare” som inte ens kan rädda sig själva). Det är berättelsens udd: Messias första tillbedjare är *precis fel människor*, framkomna på *precis fel väg* — medan de meriterade experterna i v. 4-6, som kan citera rätt profetia ur minnet, inte bemödar sig att gå de tio kilometrarna till Betlehem. Matteus, som (menar de flesta forskare) skrev för en judekristen församling, öppnar sitt evangelium med att ge utomstående försprånget. Kunskap om texterna, antyder han, är inte detsamma som att bryta upp.",
      },
    ],
  },
  2: {
    english: [
      ["och", "", true], ["sade:", "g2.2.1"], ["”Var", "g2.2.2"], ["är", "g2.2.3"],
      ["judarnas", "g2.2.7 g2.2.8"], ["nyfödde", "g2.2.5"], ["kung?", "g2.2.4 g2.2.6"],
      ["Ty", "g2.2.10"], ["vi", "g2.2.9", true], ["såg", "g2.2.9"], ["hans", "g2.2.11"], ["stjärna", "g2.2.12 g2.2.13"],
      ["vid", "g2.2.14"], ["dess", "g2.2.15", true], ["uppgång", "g2.2.16"],
      ["och", "g2.2.17"], ["har", "", true], ["kommit", "g2.2.18"], ["för", "g2.2.19", true], ["att", "", true], ["tillbe", "g2.2.19"], ["honom.”", "g2.2.20"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g2.2.16", lemma: "ἐν τῇ ἀνατολῇ",
        title: "”Vid dess uppgång” — inte ”i östern”",
        body: "Samma substantiv, **ἀνατολή**, står två gånger i två betydelser. I v. 1 betyder pluralen (*ἀπὸ ἀνατολῶν*) väderstrecket — magierna kom *från östern*. Här är singularen med artikel astronomens fackterm: en stjärnas **heliakiska uppgång**, dess första synliga framträdande över gryningshorisonten — händelsen som i deras hantverk markerade en födelse eller ett trontillträde. Den gamla återgivningen ”vi har sett hans stjärna i östern” förvirrar geografin (hade stjärnan stått öster om dem hade den lett dem *bort* från Judeen). Vad de hävdar är: *vi iakttog uppgången som förkunnar honom.* Vad man än gör av stjärnan själv — konjunktion, nova eller litterärt tecken — rapporterar Matteus den med deras vokabulär som såg på himlen för sitt levebröd.",
      },
    ],
  },
  3: {
    english: [
      ["När", "g2.3.1", true], ["kung", "g2.3.4"], ["Herodes", "g2.3.5"], ["hörde", "g2.3.1"], ["detta", "", true],
      ["blev", "g2.3.6", true], ["han", "", true], ["skakad,", "g2.3.6"],
      ["och", "g2.3.7"], ["hela", "g2.3.8"], ["Jerusalem", "g2.3.9"], ["med", "g2.3.10"], ["honom,", "g2.3.11"],
    ],
    annotations: [],
  },
  4: {
    english: [
      ["och", "g2.4.1"], ["han", "", true], ["samlade", "g2.4.2"], ["alla", "g2.4.3"], ["folkets", "g2.4.8 g2.4.9"],
      ["överstepräster", "g2.4.4 g2.4.5"], ["och", "g2.4.6"], ["skriftlärda", "g2.4.7"],
      ["och", "", true], ["frågade", "g2.4.10"], ["ut", "", true], ["dem", "g2.4.11 g2.4.12"],
      ["var", "g2.4.13"], ["Messias", "g2.4.14 g2.4.15"], ["skulle", "", true], ["födas.", "g2.4.16"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["Och", "g2.5.2"], ["de", "g2.5.1"], ["sade", "g2.5.3"], ["till", "g2.5.4", true], ["honom:", "g2.5.4"],
      ["”I", "g2.5.5"], ["Betlehem", "g2.5.6"], ["i", "g2.5.7", true], ["Judeen;", "g2.5.8"],
      ["ty", "g2.5.10"], ["så", "g2.5.9"], ["är", "", true], ["det", "", true], ["skrivet", "g2.5.11"],
      ["genom", "g2.5.12"], ["profeten:", "g2.5.13 g2.5.14"],
    ],
    annotations: [],
  },
  6: {
    english: [
      ["’Och", "g2.6.1"], ["du,", "g2.6.2"], ["Betlehem,", "g2.6.3"], ["Juda", "g2.6.5"], ["land,", "g2.6.4"],
      ["ingalunda", "g2.6.6"], ["är", "g2.6.8"], ["du", "", true], ["minst", "g2.6.7"],
      ["bland", "g2.6.9"], ["Juda", "g2.6.12"], ["furstar;", "g2.6.10 g2.6.11"],
      ["ty", "g2.6.15"], ["ur", "g2.6.13"], ["dig", "g2.6.14"], ["ska", "", true], ["det", "", true], ["utgå", "g2.6.16"],
      ["en", "", true], ["härskare", "g2.6.17"],
      ["som", "g2.6.18"], ["ska", "", true], ["valla", "g2.6.19"], ["mitt", "g2.6.22"], ["folk", "g2.6.20 g2.6.21"], ["Israel.’", "g2.6.23 g2.6.24"],
    ],
    annotations: [
      {
        kind: "text", refs: "g2.6.6 g2.6.7", lemma: "οὐδαμῶς ἐλαχίστη",
        title: "Ett citat som säger emot",
        body: "Ställ Matteus citat bredvid Mika 5:2 och skillnaderna springer i ögonen. Mika säger att Betlehem är ”**ringa** bland Juda släkter”; Matteus version säger ”**ingalunda minst** bland Juda furstar” — nära nog motsatsen, nu när profetian gått i uppfyllelse. ”Släkter” (hebreiska *ʾalpê*) har blivit ”furstar”, och slutraden — ”som ska valla mitt folk Israel” — är inte alls Mika utan 2 Sam 5:2, Guds ord om *David*, inflätade. Inget avskrivningsfel: så arbetade det första århundradets utläggning, citatet som *tolkning*, texter flätade för att tillsammans säga vad uttolkaren håller dem för att betyda. Det är värt att veta att Nya testamentet citerar sin Bibel så — fritt, argumenterande, ur minnet och med avsikt — för det kalibrerar om vad ”skriftens fullbordan” gör anspråk på: inte ordagrann förutsägelse avprickad, utan ett mönster igenkänt och förkunnat.",
      },
    ],
  },
  7: {
    english: [
      ["Då", "g2.7.1"], ["kallade", "g2.7.4"], ["Herodes", "g2.7.2"], ["i", "g2.7.3", true], ["hemlighet", "g2.7.3"],
      ["till", "", true], ["sig", "", true], ["magierna", "g2.7.5 g2.7.6"],
      ["och", "", true], ["utfrågade", "g2.7.7"], ["dem", "g2.7.8 g2.7.9"], ["noga", "g2.7.7", true],
      ["om", "", true], ["tiden", "g2.7.10 g2.7.11"], ["då", "g2.7.12", true], ["stjärnan", "g2.7.14"], ["visat", "g2.7.13"], ["sig,", "g2.7.13", true],
    ],
    annotations: [],
  },
  8: {
    english: [
      ["och", "g2.8.1"], ["han", "", true], ["sände", "g2.8.2"], ["dem", "g2.8.3"], ["till", "g2.8.4"], ["Betlehem", "g2.8.5"], ["och", "", true], ["sade:", "g2.8.6"],
      ["”Gå", "g2.8.7"], ["och", "", true], ["forska", "g2.8.8"], ["noga", "g2.8.9"], ["efter", "g2.8.10"], ["barnet;", "g2.8.11 g2.8.12"],
      ["och", "g2.8.14"], ["när", "g2.8.13"], ["ni", "g2.8.15", true], ["funnit", "g2.8.15"], ["det,", "", true],
      ["så", "", true], ["underrätta", "g2.8.16"], ["mig,", "g2.8.17"],
      ["för", "g2.8.18", true], ["att", "g2.8.18"], ["också", "g2.8.19", true], ["jag", "g2.8.19"], ["må", "", true], ["komma", "g2.8.20"], ["och", "", true], ["tillbe", "g2.8.21"], ["det.”", "g2.8.22"],
    ],
    annotations: [],
  },
  9: {
    english: [
      ["Och", "g2.9.2"], ["när", "", true], ["de", "g2.9.1"], ["hört", "g2.9.3"], ["kungen", "g2.9.4 g2.9.5"], ["gav", "g2.9.6", true], ["de", "", true], ["sig", "", true], ["av;", "g2.9.6"],
      ["och", "g2.9.7"], ["se,", "g2.9.8"], ["stjärnan", "g2.9.9 g2.9.10"], ["som", "g2.9.11"], ["de", "", true], ["sett", "g2.9.12"], ["vid", "g2.9.13"], ["dess", "g2.9.14", true], ["uppgång", "g2.9.15"],
      ["gick", "g2.9.16"], ["före", "g2.9.16", true], ["dem,", "g2.9.17"],
      ["tills", "g2.9.18"], ["den", "", true], ["kom", "g2.9.19"], ["och", "", true], ["stannade", "g2.9.20"], ["över", "g2.9.21"],
      ["platsen", "g2.9.22", true], ["där", "g2.9.22"], ["barnet", "g2.9.24 g2.9.25"], ["var.", "g2.9.23"],
    ],
    annotations: [],
  },
  10: {
    english: [
      ["Och", "g2.10.2"], ["när", "", true], ["de", "", true], ["såg", "g2.10.1"], ["stjärnan", "g2.10.3 g2.10.4"],
      ["fylldes", "g2.10.5", true], ["de", "", true], ["av", "", true], ["mycket", "g2.10.8"], ["stor", "g2.10.7"], ["glädje.", "g2.10.5 g2.10.6"],
    ],
    annotations: [],
  },
  11: {
    english: [
      ["Och", "g2.11.1"], ["de", "", true], ["gick", "g2.11.2"], ["in", "g2.11.3"], ["i", "", true], ["huset", "g2.11.4 g2.11.5"],
      ["och", "", true], ["såg", "g2.11.6"], ["barnet", "g2.11.7 g2.11.8"],
      ["med", "g2.11.9"], ["Maria,", "g2.11.10"], ["dess", "g2.11.13"], ["mor,", "g2.11.11 g2.11.12"],
      ["och", "g2.11.14"], ["de", "", true], ["föll", "g2.11.15"], ["ner", "g2.11.15", true], ["och", "", true], ["tillbad", "g2.11.16"], ["det;", "g2.11.17"],
      ["och", "g2.11.18"], ["de", "", true], ["öppnade", "g2.11.19"], ["sina", "g2.11.22"], ["skatter", "g2.11.20 g2.11.21"],
      ["och", "", true], ["bar", "g2.11.23"], ["fram", "g2.11.23", true], ["gåvor", "g2.11.25"], ["åt", "g2.11.24", true], ["det:", "g2.11.24"],
      ["guld", "g2.11.26"], ["och", "g2.11.27"], ["rökelse", "g2.11.28"], ["och", "g2.11.29"], ["myrra.", "g2.11.30"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g2.11.26 g2.11.28 g2.11.30", lemma: "χρυσὸν καὶ λίβανον καὶ σμύρναν",
        title: "Gåvorna — och huset",
        body: "Tre detaljer gör motstånd mot julkortsversionen. Magierna stiger in i ett **hus**, inte ett stall; på Matteus tidslinje (jfr v. 16, ”två år och därunder, efter den tid han utrönt”) kan besöket ligga långt efter födelsen — Lukas krubba och Matteus magier är skilda scener som traditionen i tysthet smält samman. Gåvorna var Österns diplomatiska valuta — **guld** för en kung, **rökelse** templets offerdoft, **myrra** ett balsameringsharts — och läsare från Irenaeus och framåt har hört det tredubbla omenet: kunglighet, gudomlighet, död. Kanske är det mer mönster än magierna avsåg; det är inte mer än Matteus avsåg, som nämner myrrablandat vin igen först vid korset. Jes 60:6, där folken strömmar till Israels ljus ”bärande guld och rökelse”, levererar den tredje gåvan genom sin frånvaro: ingen myrra i härlighetens vision — den hör denna berättelse ensam till.",
      },
    ],
  },
  12: {
    english: [
      ["Och", "g2.12.1"], ["sedan", "", true], ["de", "", true], ["i", "g2.12.3"], ["en", "", true], ["dröm", "g2.12.4"], ["blivit", "g2.12.2", true], ["varnade", "g2.12.2"],
      ["att", "g2.12.5", true], ["inte", "g2.12.5"], ["vända", "g2.12.6"], ["tillbaka", "g2.12.6", true], ["till", "g2.12.7"], ["Herodes,", "g2.12.8"],
      ["drog", "g2.12.12"], ["de", "", true], ["en", "g2.12.10", true], ["annan", "g2.12.10"], ["väg", "g2.12.9 g2.12.11"], ["hem", "", true], ["till", "g2.12.13"], ["sitt", "g2.12.16"], ["land.", "g2.12.14 g2.12.15"],
    ],
    annotations: [],
  },
  13: {
    english: [
      ["När", "g2.13.1", true], ["de", "g2.13.3"], ["hade", "", true], ["dragit", "g2.13.1"], ["bort,", "g2.13.1", true],
      ["se,", "g2.13.4"], ["då", "g2.13.2", true], ["visar", "g2.13.7"], ["sig", "g2.13.7", true], ["en", "", true], ["Herrens", "g2.13.6"], ["ängel", "g2.13.5"],
      ["i", "g2.13.8"], ["en", "", true], ["dröm", "g2.13.9"], ["för", "g2.13.10"], ["Josef", "g2.13.11"],
      ["och", "", true], ["säger:", "g2.13.12"], ["”Stig", "g2.13.13"], ["upp,", "g2.13.13", true], ["ta", "g2.13.14"], ["barnet", "g2.13.15 g2.13.16"],
      ["och", "g2.13.17"], ["dess", "g2.13.20"], ["mor", "g2.13.18 g2.13.19"],
      ["och", "g2.13.21"], ["fly", "g2.13.22"], ["till", "g2.13.23"], ["Egypten,", "g2.13.24"],
      ["och", "g2.13.25"], ["stanna", "g2.13.26"], ["där", "g2.13.27"], ["tills", "g2.13.28 g2.13.29"], ["jag", "g2.13.30", true], ["säger", "g2.13.30"], ["till", "", true], ["dig;", "g2.13.31"],
      ["ty", "g2.13.33"], ["Herodes", "g2.13.34"], ["kommer", "g2.13.32"], ["att", "", true], ["söka", "g2.13.35"], ["efter", "", true], ["barnet", "g2.13.36 g2.13.37"],
      ["för", "g2.13.38"], ["att", "g2.13.38", true], ["förgöra", "g2.13.39"], ["det.”", "g2.13.40"],
    ],
    annotations: [],
  },
  14: {
    english: [
      ["Och", "g2.14.2"], ["han", "g2.14.1"], ["steg", "g2.14.3"], ["upp", "g2.14.3", true], ["och", "", true], ["tog", "g2.14.4"], ["barnet", "g2.14.5 g2.14.6"],
      ["och", "g2.14.7"], ["dess", "g2.14.10"], ["mor", "g2.14.8 g2.14.9"], ["om", "g2.14.11", true], ["natten", "g2.14.11"],
      ["och", "g2.14.12"], ["drog", "g2.14.13"], ["bort", "g2.14.13", true], ["till", "g2.14.14"], ["Egypten,", "g2.14.15"],
    ],
    annotations: [],
  },
  15: {
    english: [
      ["och", "g2.15.1"], ["han", "", true], ["blev", "g2.15.2"], ["kvar", "g2.15.3", true], ["där", "g2.15.3"], ["till", "g2.15.4"], ["Herodes", "g2.15.7"], ["död", "g2.15.5 g2.15.6"],
      ["—", "", true], ["för", "g2.15.8", true], ["att", "g2.15.8"], ["det", "g2.15.10"], ["som", "", true], ["Herren", "g2.15.12 g2.15.13"], ["talat", "g2.15.11"],
      ["genom", "g2.15.14"], ["profeten", "g2.15.15 g2.15.16"],
      ["skulle", "", true], ["fullbordas:", "g2.15.9 g2.15.17"],
      ["”Ut", "g2.15.18"], ["ur", "g2.15.18", true], ["Egypten", "g2.15.19"], ["kallade", "g2.15.20"], ["jag", "g2.15.20", true], ["min", "g2.15.23"], ["son.”", "g2.15.21 g2.15.22"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g2.15.18 g2.15.19 g2.15.20", lemma: "ἐξ Αἰγύπτου ἐκάλεσα",
        title: "”Ut ur Egypten” — vad fullbordan inte är",
        body: "Slå upp Hosea 11:1 och du finner ingen förutsägelse alls: *”När Israel var ung fick jag honom kär, och ut ur Egypten kallade jag **min son**”* — Gud som minns uttåget, och redan i nästa vers springer sonen bort till baalerna. Matteus vet detta; hans läsare visste det. Han hävdar inte att Hosea förutsåg ett litet barns flykt till Egypten. Han bedriver **typologi**: läser Jesus som Israel-i-en-person — kallad ut ur Egypten som Israel, prövad i öknen fyrtio dagar som Israels fyrtio år (kap. 4), uppstigen på ett berg för att ge tora (kap. 5) — utom att där den förste sonen svek, ska denne inte svika. Bedömt som *förutsägelse* faller citatet, och skeptikern som säger det har läst Hosea rätt. Bedömt som vad det är — ett anspråk att historien rimmar, och att dess omkväden löper samman i detta barn — är det kapitlets djärvaste mening. Den ärliga fråga det lämnar är inte ”förutsade Hosea detta?” (det gjorde han inte) utan ”är rimmet verkligt?”",
      },
    ],
  },
  16: {
    english: [
      ["Då", "g2.16.1"], ["Herodes", "g2.16.2"], ["såg", "g2.16.3"], ["att", "g2.16.4"], ["han", "", true], ["blivit", "", true], ["gäckad", "g2.16.5"],
      ["av", "g2.16.6"], ["magierna", "g2.16.7 g2.16.8"], ["blev", "g2.16.9", true], ["han", "", true], ["ursinnig,", "g2.16.9 g2.16.10"],
      ["och", "g2.16.11"], ["han", "", true], ["sände", "g2.16.12"], ["ut", "g2.16.12", true], ["och", "", true], ["dödade", "g2.16.13"], ["alla", "g2.16.14"], ["gossebarn", "g2.16.15 g2.16.16"],
      ["i", "g2.16.18"], ["Betlehem", "g2.16.19"], ["och", "g2.16.20"], ["i", "g2.16.21"], ["hela", "g2.16.22"], ["dess", "g2.16.25"], ["omnejd,", "g2.16.23 g2.16.24"],
      ["från", "g2.16.26"], ["två", "g2.16.27"], ["år", "g2.16.27", true], ["och", "g2.16.28"], ["därunder,", "g2.16.29"],
      ["efter", "g2.16.30"], ["den", "g2.16.31"], ["tid", "g2.16.32"], ["som", "g2.16.33"], ["han", "", true], ["utrönt", "g2.16.34"], ["av", "g2.16.35"], ["magierna.", "g2.16.36 g2.16.37"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g2.16.13 g2.16.16", lemma: "ἀνεῖλεν πάντας τοὺς παῖδας",
        title: "Barnamorden — historiens tystnad, och Herodes meritlista",
        body: "Ingen källa utanför Matteus nämner dödandet av Betlehems gossar — inte Josefus, som katalogiserar Herodes brott med välbehag. Den tystnaden är värd att säga rent ut, och värd att väga rättvist. Betlehem var en småby; offren för en ”två år och därunder”-order där kan ha räknats i ett eller två dussin — en liten post i liggaren hos en kung som mördade sin egen hustru Mariamne, tre av sina söner, en svärmor, och som (enligt Josefus) befallde att Jerikos förnämsta vid hans död skulle slaktas så att *någon* skulle gråta. Augustus lär ha skämtat att det var tryggare att vara Herodes svin än hans son. En oprotokollförd by-grymhet under det styret varken bekräftas av källorna eller ansträngs av dem. Vad berättelsen är *hos Matteus* är åter exodus: en paranoid kung, gossebarn dödade, ett barn räddat — Mose återberättad. Som så ofta i detta evangelium förtjänar både frågan ”hände det?” och frågan ”vad säger det?” svar, och den andra väntar inte på den första.",
      },
    ],
  },
  17: {
    english: [
      ["Då", "g2.17.1"], ["fullbordades", "g2.17.2"], ["det", "g2.17.3 g2.17.4"], ["som", "", true], ["talats", "g2.17.4", true],
      ["genom", "g2.17.5"], ["profeten", "g2.17.7 g2.17.8"], ["Jeremia:", "g2.17.6"],
    ],
    annotations: [],
  },
  18: {
    english: [
      ["”En", "", true], ["röst", "g2.18.1"], ["hördes", "g2.18.4"], ["i", "g2.18.2"], ["Rama,", "g2.18.3"],
      ["gråt", "g2.18.5"], ["och", "g2.18.6"], ["mycken", "g2.18.8"], ["klagan:", "g2.18.7"],
      ["Rakel", "g2.18.9"], ["begråter", "g2.18.10"], ["sina", "g2.18.13"], ["barn,", "g2.18.11 g2.18.12"],
      ["och", "g2.18.14"], ["hon", "", true], ["vill", "g2.18.16"], ["inte", "g2.18.15"], ["låta", "", true], ["trösta", "g2.18.17"], ["sig,", "", true],
      ["ty", "g2.18.18"], ["de", "", true], ["finns", "g2.18.20"], ["inte", "g2.18.19"], ["mer.”", "", true],
    ],
    annotations: [
      {
        kind: "concept", refs: "g2.18.9 g2.18.10", lemma: "Ῥαχὴλ κλαίουσα",
        title: "Rakels röst — en sorg som lämnas otröstad",
        body: "Jeremia 31:15 målar **Rakel**, Israels stammoder, gråtande ur sin grav när hennes ättlingar förs förbi mot Babylon. Hos Jeremia vänder det redan i nästa vers: *”Håll din röst från gråt… de ska vända åter från fiendens land.”* Matteus citerar tårarna och **stannar före trösten** — det enda fullbordanscitatet i dessa kapitel som slutar oupplöst. Detta evangelium låtsas inte att barnets räddning gör de dödar han undkom ogjorda; Betlehems mödrar får skriftens egen otröstade röst, och ingen ängel visar sig för dem. Det är ett tidigt märke på ett mönster värt att lita på: evangelisterna ser inte bort från vraken deras berättelse passerar. Var och en som stått där tröst kändes som en förolämpning har här en vers som står hos dem — och ett citat vars innehållna nästa rad väntar, likt evangeliet självt, på uppståndelse.",
      },
    ],
  },
  19: {
    english: [
      ["Men", "g2.19.2"], ["när", "g2.19.1", true], ["Herodes", "g2.19.3 g2.19.4"], ["hade", "", true], ["dött,", "g2.19.1"],
      ["se,", "g2.19.5"], ["då", "", true], ["visar", "g2.19.8"], ["sig", "g2.19.8", true], ["en", "", true], ["Herrens", "g2.19.7"], ["ängel", "g2.19.6"],
      ["i", "g2.19.9"], ["en", "", true], ["dröm", "g2.19.10"], ["för", "g2.19.11"], ["Josef", "g2.19.12"], ["i", "g2.19.13"], ["Egypten", "g2.19.14"],
    ],
    annotations: [],
  },
  20: {
    english: [
      ["och", "", true], ["säger:", "g2.20.1"], ["”Stig", "g2.20.2"], ["upp,", "g2.20.2", true], ["ta", "g2.20.3"], ["barnet", "g2.20.4 g2.20.5"],
      ["och", "g2.20.6"], ["dess", "g2.20.9"], ["mor", "g2.20.7 g2.20.8"],
      ["och", "g2.20.10"], ["bege", "g2.20.11"], ["dig", "g2.20.11", true], ["till", "g2.20.12"], ["Israels", "g2.20.14"], ["land;", "g2.20.13"],
      ["ty", "g2.20.16"], ["de", "g2.20.17"], ["som", "", true], ["sökte", "g2.20.18"], ["barnets", "g2.20.21 g2.20.22"], ["liv", "g2.20.19 g2.20.20"], ["är", "", true], ["döda.”", "g2.20.15"],
    ],
    annotations: [],
  },
  21: {
    english: [
      ["Och", "g2.21.2"], ["han", "g2.21.1"], ["steg", "g2.21.3"], ["upp", "g2.21.3", true], ["och", "", true], ["tog", "g2.21.4"], ["barnet", "g2.21.5 g2.21.6"],
      ["och", "g2.21.7"], ["dess", "g2.21.10"], ["mor", "g2.21.8 g2.21.9"],
      ["och", "g2.21.11"], ["kom", "g2.21.12"], ["in", "g2.21.12", true], ["i", "g2.21.13"], ["Israels", "g2.21.15"], ["land.", "g2.21.14"],
    ],
    annotations: [],
  },
  22: {
    english: [
      ["Men", "g2.22.2"], ["när", "", true], ["han", "", true], ["hörde", "g2.22.1"], ["att", "g2.22.3"], ["Arkelaus", "g2.22.4"], ["regerade", "g2.22.5"], ["över", "g2.22.6", true], ["Judeen", "g2.22.7"],
      ["efter", "g2.22.8"], ["sin", "g2.22.11"], ["far", "g2.22.9 g2.22.10"], ["Herodes,", "g2.22.12"],
      ["vågade", "g2.22.13", true], ["han", "", true], ["inte", "", true], ["fara", "g2.22.15"], ["dit;", "g2.22.14"],
      ["och", "g2.22.17"], ["varnad", "g2.22.16"], ["i", "g2.22.18"], ["en", "", true], ["dröm", "g2.22.19"],
      ["drog", "g2.22.20"], ["han", "", true], ["bort", "g2.22.20", true], ["till", "g2.22.21"], ["Galileens", "g2.22.24 g2.22.25"], ["trakter,", "g2.22.22 g2.22.23"],
    ],
    annotations: [],
  },
  23: {
    english: [
      ["och", "g2.23.1"], ["han", "", true], ["kom", "g2.23.2"], ["och", "", true], ["bosatte", "g2.23.3"], ["sig", "g2.23.3", true], ["i", "g2.23.4"], ["en", "", true], ["stad", "g2.23.5"], ["som", "g2.23.6", true], ["kallas", "g2.23.6"], ["Nasaret", "g2.23.7"],
      ["—", "", true], ["för", "g2.23.8", true], ["att", "g2.23.8"], ["det", "g2.23.10"], ["som", "", true], ["talats", "g2.23.11"],
      ["genom", "g2.23.12"], ["profeterna", "g2.23.13 g2.23.14"],
      ["skulle", "", true], ["fullbordas:", "g2.23.9"],
      ["”Han", "g2.23.15", true], ["ska", "", true], ["kallas", "g2.23.17"], ["nasaré.”", "g2.23.16"],
    ],
    annotations: [
      {
        kind: "text", refs: "g2.23.14 g2.23.16", lemma: "διὰ τῶν προφητῶν … Ναζωραῖος",
        title: "En profetia som inte finns i Bibeln",
        body: "Sök i Gamla testamentet efter *”Han ska kallas nasaré”* och du finner det inte — ingen sådan vers existerar, och Matteus, ensam bland alla sina fullbordanscitat, verkar veta det: bara här skriver han ”genom **profeterna**”, i plural, utan namn, och bara här slutar formeln med ὅτι (”att”), som markerar en innebörd snarare än ett citat. Bästa gissningen är en avsiktlig ordlek på Jes 11:1 — **נֵצֶר** (*nētser*), ”skottet” ur Jishajs stubbe — hörd i namnet *Natsrat*, Nasaret; andra hör ”han ska kallas helig” (Dom 13:5-7) eller helt enkelt summan av profeternas föraktade, osannolike Messias, ty ”kan något gott komma från Nasaret?” (Joh 1:46) var ett verkligt hån om en verklig håla. Vi översätter som texten står och låter skarven synas. Det är ett passande slut på ett kapitel av uppbrott: judarnas konung, hemma ingenstans, till sist bosatt under ett namn folk skulle använda emot honom.",
      },
    ],
  },
};
