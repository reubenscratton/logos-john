// Matteus 13 — svensk översättning & annotationer.
// english-fältet håller SVENSKA tokens, alignerade mot samma g-id:n.

export const CONTENT = {
  1: {
    english: [
      ["Den", "g13.1.4", true], ["dagen", "g13.1.2 g13.1.3"], ["gick", "g13.1.5"], ["Jesus", "g13.1.6 g13.1.7"],
      ["ut", "g13.1.5", true], ["ur", "g13.1.8", true], ["huset", "g13.1.8 g13.1.9"],
      ["och", "", true], ["satte", "g13.1.10"], ["sig", "g13.1.10", true], ["vid", "g13.1.11"], ["sjön;", "g13.1.12 g13.1.13"],
    ],
    annotations: [],
  },
  2: {
    english: [
      ["och", "g13.2.1"], ["stora", "g13.2.6"], ["skaror", "g13.2.5"], ["samlades", "g13.2.2"],
      ["kring", "g13.2.3"], ["honom,", "g13.2.4"],
      ["så", "g13.2.7"], ["att", "g13.2.7", true], ["han", "g13.2.8"], ["steg", "g13.2.11"], ["i", "g13.2.9"], ["en", "", true], ["båt", "g13.2.10"],
      ["och", "", true], ["satte", "g13.2.12"], ["sig,", "g13.2.12", true],
      ["och", "g13.2.13"], ["hela", "g13.2.14"], ["skaran", "g13.2.15 g13.2.16"],
      ["stod", "g13.2.20"], ["på", "g13.2.17"], ["stranden.", "g13.2.18 g13.2.19"],
    ],
    annotations: [],
  },
  3: {
    english: [
      ["Och", "g13.3.1"], ["han", "g13.3.2", true], ["talade", "g13.3.2"], ["mycket", "g13.3.4"], ["till", "g13.3.3", true], ["dem", "g13.3.3"],
      ["i", "g13.3.5"], ["liknelser", "g13.3.6"], ["och", "g13.3.7", true], ["sade:", "g13.3.7"],
      ["”Se,", "g13.3.8"], ["såningsmannen", "g13.3.10 g13.3.11"], ["gick", "g13.3.9"], ["ut", "g13.3.9", true],
      ["för", "g13.3.12", true], ["att", "", true], ["så.", "g13.3.13"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g13.3.6 g13.3.11", lemma: "ἐν παραβολαῖς … ὁ σπείρων",
        title: "Varför liknelser — och en såningsman som slösar med utsädet",
        body: "En **παραβολή** är bokstavligen ett *bredvidkastande*: ett ting lagt intill ett annat så att meningen slår gnista över gapet. Den är ingen predikoillustration (dekor kring en poäng som redan sagts) utan poängen själv, levererad i en form som inte kan tas emot passivt — en liknelse gör ingenting förrän hörarens eget arbete börjar, vilket betyder att den inte gör något *med* den som vägrar arbeta. Den selektiviteten är dess genialitet och dess anstöt, och kapitlet tar frågan rakt på (v. 11-15). Den första liknelsen handlar om liknelser. Se på såningsmannens teknik: han kastar säd på stigen, på berget, bland törnena — en bonde i första århundradet sådde *före* plöjningen, så bredsådden på föga lovande mark är verklig praxis, men liknelsen gör den till ett porträtt av skandalös urskillningslöshet. Såningsmannen gör ingen markkartering först. Samma handfull går till varje kvadratmeter, även dem varje konsult skulle ha avskrivit — vilket förstås är just den verksamhet Matteus skildrat i tolv kapitel: ord och helande strödda över fariseer, tullindrivare, fiskare, skaror som ska ropa på korsfästelse. Liknelsen flyttar stillsamt frågan från såningsmannens effektivitet till hörarens jordmån: utsädet är enhetligt; skördarna är det inte; och den enda variabel som återstår i berättelsen är du.",
      },
    ],
  },
  4: {
    english: [
      ["Och", "g13.4.1"], ["när", "g13.4.2", true], ["han", "g13.4.5"], ["sådde", "g13.4.4"]
      , ["föll", "g13.4.8"], ["något", "g13.4.6 g13.4.7"], ["vid", "g13.4.9"], ["stigen,", "g13.4.10 g13.4.11"],
      ["och", "g13.4.12"], ["fåglarna", "g13.4.14 g13.4.15"], ["kom", "g13.4.13"],
      ["och", "", true], ["åt", "g13.4.16"], ["upp", "g13.4.16", true], ["det.", "g13.4.17"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["Annat", "g13.5.1"], ["föll", "g13.5.3"], ["på", "g13.5.4"], ["stengrunden,", "g13.5.5 g13.5.6"],
      ["där", "g13.5.7"], ["det", "g13.5.9", true], ["inte", "g13.5.8"], ["hade", "g13.5.9"], ["mycket", "g13.5.11"], ["jord,", "g13.5.10"],
      ["och", "g13.5.12"], ["det", "g13.5.14", true], ["sköt", "g13.5.14"], ["strax", "g13.5.13"], ["upp,", "g13.5.14", true],
      ["eftersom", "g13.5.15 g13.5.16"], ["det", "g13.5.18", true], ["inte", "g13.5.17"], ["hade", "g13.5.18"], ["djup", "g13.5.19"], ["jord,", "g13.5.20"],
    ],
    annotations: [],
  },
  6: {
    english: [
      ["men", "g13.6.2"], ["när", "g13.6.3", true], ["solen", "g13.6.1"], ["gick", "g13.6.3"], ["upp", "g13.6.3", true]
      , ["förbrändes", "g13.6.4"], ["det,", "", true],
      ["och", "g13.6.5"], ["eftersom", "g13.6.6 g13.6.7"], ["det", "g13.6.9", true], ["inte", "g13.6.8"], ["hade", "g13.6.9"], ["rot", "g13.6.10"]
      , ["vissnade", "g13.6.11"], ["det.", "", true],
    ],
    annotations: [],
  },
  7: {
    english: [
      ["Annat", "g13.7.1"], ["föll", "g13.7.3"], ["bland", "g13.7.4"], ["törnena,", "g13.7.5 g13.7.6"],
      ["och", "g13.7.7"], ["törnena", "g13.7.9 g13.7.10"], ["växte", "g13.7.8"], ["upp", "g13.7.8", true],
      ["och", "g13.7.11"], ["kvävde", "g13.7.12"], ["det.", "g13.7.13"],
    ],
    annotations: [],
  },
  8: {
    english: [
      ["Annat", "g13.8.1"], ["föll", "g13.8.3"], ["på", "g13.8.4"], ["den", "g13.8.5"], ["goda", "g13.8.7 g13.8.8"], ["jorden", "g13.8.6"],
      ["och", "g13.8.9"], ["gav", "g13.8.10"], ["frukt,", "g13.8.11"],
      ["ett", "g13.8.12 g13.8.13"], ["hundrafalt,", "g13.8.14"],
      ["ett", "g13.8.15 g13.8.16"], ["sextiofalt,", "g13.8.17"],
      ["ett", "g13.8.18 g13.8.19"], ["trettiofalt.", "g13.8.20"],
    ],
    annotations: [],
  },
  9: {
    english: [
      ["Den", "g13.9.1"], ["som", "g13.9.2", true], ["har", "g13.9.2"], ["öron,", "g13.9.3"], ["han", "", true], ["höre.”", "g13.9.4"],
    ],
    annotations: [],
  },
  10: {
    english: [
      ["Och", "g13.10.1"], ["lärjungarna", "g13.10.3 g13.10.4"], ["kom", "g13.10.2"], ["fram", "g13.10.2", true]
      , ["och", "g13.10.5", true], ["sade", "g13.10.5"], ["till", "g13.10.6", true], ["honom:", "g13.10.6"],
      ["”Varför", "g13.10.7 g13.10.8"], ["talar", "g13.10.11"], ["du", "g13.10.11", true],
      ["till", "g13.10.12", true], ["dem", "g13.10.12"], ["i", "g13.10.9"], ["liknelser?”", "g13.10.10"],
    ],
    annotations: [],
  },
  11: {
    english: [
      ["Och", "g13.11.2"], ["han", "g13.11.1"], ["svarade:", "g13.11.3 g13.11.4 g13.11.5"],
      ["”Åt", "g13.11.6", true], ["er", "g13.11.6"], ["har", "", true], ["det", "g13.11.7", true], ["getts", "g13.11.7"]
      , ["att", "g13.11.8", true], ["känna", "g13.11.8"],
      ["himlarnas", "g13.11.13 g13.11.14"], ["rikes", "g13.11.11 g13.11.12"], ["mysterier,", "g13.11.9 g13.11.10"],
      ["men", "g13.11.16"], ["åt", "g13.11.15", true], ["dem", "g13.11.15"],
      ["har", "", true], ["det", "g13.11.18", true], ["inte", "g13.11.17"], ["getts.", "g13.11.18"],
    ],
    annotations: [],
  },
  12: {
    english: [
      ["Ty", "g13.12.2"], ["den", "g13.12.1"], ["som", "", true], ["har,", "g13.12.3"],
      ["åt", "g13.12.5", true], ["honom", "g13.12.5"], ["ska", "g13.12.4", true], ["ges,", "g13.12.4"],
      ["och", "g13.12.6"], ["han", "g13.12.7", true], ["ska", "", true], ["ha", "", true], ["överflöd;", "g13.12.7"],
      ["men", "g13.12.9"], ["den", "g13.12.8"], ["som", "", true], ["inte", "g13.12.10"], ["har,", "g13.12.11"],
      ["från", "g13.12.16"], ["honom", "g13.12.17"], ["ska", "g13.12.15", true], ["också", "g13.12.12"], ["det", "g13.12.13"], ["han", "g13.12.14", true], ["har", "g13.12.14"],
      ["tas.", "g13.12.15"],
    ],
    annotations: [],
  },
  13: {
    english: [
      ["Därför", "g13.13.1 g13.13.2"], ["talar", "g13.13.6"], ["jag", "g13.13.6", true], ["till", "g13.13.5", true], ["dem", "g13.13.5"],
      ["i", "g13.13.3"], ["liknelser,", "g13.13.4"],
      ["eftersom", "g13.13.7"], ["de", "g13.13.10", true], ["seende", "g13.13.8"], ["inte", "g13.13.9"], ["ser,", "g13.13.10"],
      ["och", "g13.13.11"], ["hörande", "g13.13.12"], ["inte", "g13.13.13"], ["hör,", "g13.13.14"],
      ["och", "g13.13.15", true], ["inte", "", true], ["heller", "g13.13.15"], ["förstår.", "g13.13.16"],
    ],
    annotations: [],
  },
  14: {
    english: [
      ["Och", "g13.14.1"], ["på", "g13.14.3", true], ["dem", "g13.14.3"], ["fullbordas", "g13.14.2"],
      ["Jesajas", "g13.14.6"], ["profetia,", "g13.14.4 g13.14.5"], ["som", "g13.14.7"], ["säger:", "g13.14.8"],
      ["’Hörande", "g13.14.9"], ["ska", "g13.14.10", true], ["ni", "", true], ["höra", "g13.14.10"],
      ["och", "g13.14.11"], ["alls", "g13.14.12", true], ["inte", "g13.14.13"], ["förstå,", "g13.14.14"],
      ["och", "g13.14.15"], ["seende", "g13.14.16"], ["ska", "g13.14.17", true], ["ni", "", true], ["se", "g13.14.17"],
      ["och", "g13.14.18"], ["alls", "g13.14.19", true], ["inte", "g13.14.20"], ["varsebli.’", "g13.14.21"],
    ],
    annotations: [],
  },
  15: {
    english: [
      ["Ty", "g13.15.2"], ["detta", "g13.15.7"], ["folks", "g13.15.5 g13.15.6"], ["hjärta", "g13.15.3 g13.15.4"]
      , ["har", "g13.15.1", true], ["blivit", "", true], ["förstockat,", "g13.15.1"],
      ["och", "g13.15.8"], ["med", "g13.15.9", true], ["öronen", "g13.15.10"],
      ["har", "g13.15.12", true], ["de", "", true], ["hört", "g13.15.12"], ["trögt,", "g13.15.11"],
      ["och", "g13.15.13"], ["sina", "g13.15.16"], ["ögon", "g13.15.14 g13.15.15"],
      ["har", "g13.15.17", true], ["de", "", true], ["slutit;", "g13.15.17"],
      ["för", "g13.15.18", true], ["att", "", true], ["de", "g13.15.20", true], ["inte", "g13.15.19", true], ["ska", "", true], ["se", "g13.15.20"],
      ["med", "g13.15.21", true], ["ögonen", "g13.15.21 g13.15.22"],
      ["och", "g13.15.23"], ["höra", "g13.15.26"], ["med", "g13.15.24", true], ["öronen", "g13.15.24 g13.15.25"],
      ["och", "g13.15.27"], ["förstå", "g13.15.30"], ["med", "g13.15.28", true], ["hjärtat", "g13.15.28 g13.15.29"],
      ["och", "g13.15.31"], ["vända", "g13.15.32"], ["om", "g13.15.32", true], ["—", "", true],
      ["och", "g13.15.33"], ["jag", "g13.15.34", true], ["skulle", "", true], ["hela", "g13.15.34"], ["dem.", "g13.15.35"],
    ],
    annotations: [
      {
        kind: "text", refs: "g13.13.7 g13.15.17", lemma: "ὅτι βλέποντες οὐ βλέπουσιν",
        title: "”För att de inte ska se”? — det hårdaste ordet om liknelser",
        body: "Detta stycke låter vid första påhörandet som om Jesus undervisar i gåtor *för att* hålla folk ute — och Markus version säger faktiskt ἵνα, ”**för att** de seende inte ska se” (Mark 4:12), en av Nya testamentets mest plågsamma konjunktioner. Lägg märke till vad Matteus gjort: han skriver **ὅτι** — ”**eftersom** de seende inte ser.” Hos Matteus är liknelserna ett svar på en blindhet som redan valts, inte dess orsak; och hans fullständiga Jesaja-citat stöder läsningen, ty i det tillhör varje misslyckandets verb *folket*: deras hjärta **har blivit** förstockat, *de* slöt själva sina ögon — ”för att de inte ska se… och vända om, och jag skulle hela dem.” Slutsatsen visar ett helande som ännu erbjuds, avböjt från patientens sida. Vad gör då liknelser med en självtillsluten publik? De är dom och nåd i samma redskap. Dom: för den beslutne icke-höraren är en liknelse bara en historia om jordbruk — den låter dig gå därifrån oomvänd *och oprovocerad*, utan att förhärda något ytterligare. Nåd: den lägger sig som ett frö och väntar; man kan inte gräla med en berättelse, men man kan inte heller riktigt glömma den, och den dag hjärtat mjuknar ligger meningen redan på plats och gror. En liknelse överlever, till skillnad från en tes, sitt eget förkastande — vilket kan vara skälet till att en lärare inför ett auditorium av kapitel 12-examinatorer valde att säga allt i dem.",
      },
    ],
  },
  16: {
    english: [
      ["Men", "g13.16.2"], ["saliga", "g13.16.3"], ["är", "", true], ["era", "g13.16.1"], ["ögon,", "g13.16.4 g13.16.5"],
      ["ty", "g13.16.6"], ["de", "g13.16.7", true], ["ser,", "g13.16.7"],
      ["och", "g13.16.8"], ["era", "g13.16.11"], ["öron,", "g13.16.9 g13.16.10"],
      ["ty", "g13.16.12"], ["de", "g13.16.13", true], ["hör.", "g13.16.13"],
    ],
    annotations: [],
  },
  17: {
    english: [
      ["Ty", "g13.17.2"], ["amen,", "g13.17.1"], ["jag", "g13.17.3", true], ["säger", "g13.17.3"], ["er:", "g13.17.4"],
      ["många", "g13.17.6"], ["profeter", "g13.17.7"], ["och", "g13.17.8"], ["rättfärdiga", "g13.17.9"]
      , ["längtade", "g13.17.10"], ["att", "g13.17.11", true], ["se", "g13.17.11"], ["vad", "g13.17.12"], ["ni", "g13.17.13", true], ["ser,", "g13.17.13"],
      ["och", "g13.17.14"], ["fick", "g13.17.16", true], ["inte", "g13.17.15"], ["se", "g13.17.16"], ["det,", "", true],
      ["och", "g13.17.17"], ["att", "g13.17.18", true], ["höra", "g13.17.18"], ["vad", "g13.17.19"], ["ni", "g13.17.20", true], ["hör,", "g13.17.20"],
      ["och", "g13.17.21"], ["fick", "g13.17.23", true], ["inte", "g13.17.22"], ["höra", "g13.17.23"], ["det.", "", true],
    ],
    annotations: [],
  },
  18: {
    english: [
      ["Hör", "g13.18.3"], ["alltså,", "g13.18.2"], ["ni,", "g13.18.1"],
      ["liknelsen", "g13.18.4 g13.18.5"], ["om", "g13.18.6", true], ["såningsmannen.", "g13.18.6 g13.18.7"],
    ],
    annotations: [],
  },
  19: {
    english: [
      ["När", "g13.19.1", true], ["någon", "g13.19.1"], ["hör", "g13.19.2"],
      ["rikets", "g13.19.5 g13.19.6"], ["ord", "g13.19.3 g13.19.4"],
      ["och", "g13.19.7"], ["inte", "g13.19.8"], ["förstår", "g13.19.9"], ["det,", "", true],
      ["kommer", "g13.19.10"], ["den", "g13.19.11"], ["onde", "g13.19.12"],
      ["och", "g13.19.13"], ["rycker", "g13.19.14"], ["bort", "g13.19.14", true], ["det", "g13.19.15"], ["som", "", true], ["såtts", "g13.19.16"],
      ["i", "g13.19.17"], ["hans", "g13.19.20"], ["hjärta;", "g13.19.18 g13.19.19"],
      ["detta", "g13.19.21"], ["är", "g13.19.22"], ["den", "g13.19.23"], ["som", "g13.19.27", true], ["såtts", "g13.19.27"],
      ["vid", "g13.19.24"], ["stigen.", "g13.19.25 g13.19.26"],
    ],
    annotations: [],
  },
  20: {
    english: [
      ["Och", "g13.20.2"], ["den", "g13.20.1"], ["som", "g13.20.6", true], ["såtts", "g13.20.6"],
      ["på", "g13.20.3"], ["stengrunden,", "g13.20.4 g13.20.5"],
      ["detta", "g13.20.7"], ["är", "g13.20.8"], ["den", "g13.20.9"], ["som", "g13.20.12", true], ["hör", "g13.20.12"],
      ["ordet", "g13.20.10 g13.20.11"],
      ["och", "g13.20.13"], ["strax", "g13.20.14"], ["tar", "g13.20.17"], ["emot", "g13.20.17", true], ["det", "g13.20.18"],
      ["med", "g13.20.15"], ["glädje;", "g13.20.16"],
    ],
    annotations: [],
  },
  21: {
    english: [
      ["men", "g13.21.3"], ["han", "g13.21.2", true], ["har", "g13.21.2"], ["ingen", "g13.21.1"], ["rot", "g13.21.4"],
      ["i", "g13.21.5"], ["sig", "g13.21.6", true], ["själv", "g13.21.6"],
      ["utan", "g13.21.7"], ["håller", "g13.21.9", true], ["en", "", true], ["tid;", "g13.21.8"],
      ["och", "g13.21.10", true], ["när", "g13.21.11", true], ["nöd", "g13.21.12"], ["eller", "g13.21.13"], ["förföljelse", "g13.21.14"], ["kommer", "g13.21.10"],
      ["för", "g13.21.15"], ["ordets", "g13.21.16 g13.21.17"], ["skull", "g13.21.15", true]
      , ["kommer", "g13.21.19", true], ["han", "", true], ["strax", "g13.21.18"], ["på", "g13.21.19", true], ["fall.", "g13.21.19"],
    ],
    annotations: [],
  },
  22: {
    english: [
      ["Och", "g13.22.2"], ["den", "g13.22.1"], ["som", "g13.22.6", true], ["såtts", "g13.22.6"],
      ["bland", "g13.22.3"], ["törnena,", "g13.22.4 g13.22.5"],
      ["detta", "g13.22.7"], ["är", "g13.22.8"], ["den", "g13.22.9"], ["som", "g13.22.12", true], ["hör", "g13.22.12"],
      ["ordet,", "g13.22.10 g13.22.11"],
      ["och", "g13.22.13"], ["tidens", "g13.22.16 g13.22.17"], ["bekymmer", "g13.22.14 g13.22.15"],
      ["och", "g13.22.18"], ["rikedomens", "g13.22.21 g13.22.22"], ["svek", "g13.22.19 g13.22.20"],
      ["kväver", "g13.22.23"], ["ordet,", "g13.22.24 g13.22.25"],
      ["och", "g13.22.26"], ["det", "g13.22.28", true], ["blir", "g13.22.28"], ["utan", "g13.22.27", true], ["frukt.", "g13.22.27"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g13.22.15 g13.22.20", lemma: "ἡ μέριμνα τοῦ αἰῶνος καὶ ἡ ἀπάτη τοῦ πλούτου",
        title: "Döden bland törnen — det tysta haveriet",
        body: "Av de tre misslyckade jordmånerna dör bara en av fientlighet. Stigen förlorar utsädet till obegriplighet, stengrunden till *förföljelse* — de dramatiska fienderna. Törnsnåret är annorlunda, och det är det som siktar på läsare som oss. Ingenting angriper denna planta. Den hör; den växer; den blir helt enkelt **utträngd** — συμπνίγει, kvävd, den långsamma strypningen av ett rotsystem som måste dela sin jord med två namngivna konkurrenter: **ἡ μέριμνα τοῦ αἰῶνος**, tidens bekymmer (samma μέριμνα Jesus monterade ner i Bergspredikan — *bekymra er inte*), och **ἡ ἀπάτη τοῦ πλούτου**, rikedomens *svek* — inte rikedomen själv, märk väl, utan dess förmåga att ge löften den inte kan hålla: att trygghet går att köpa, att mening följer med nästa förvärv. Ingen av törnarna är en last någon bekänner. De är respektabla, rentav lovordade — klokskap, omsorg om familjen, att hänga med. Och sluttillståndet är exakt kalibrerat: **ἄκαρπος**, *utan frukt* — inte död, inte avfällig, ännu grön, ännu kvar på fältet. En tro som ingen förföljare kunde döda kan neutraliseras av ett bolån och en full kalender. Bland liknelsens fyra jordmåner är detta det enda haveri som kan gå plantan själv förbi obemärkt — vilket förmodligen är skälet till att det är det berättaren lät klinga kvar.",
      },
    ],
  },
  23: {
    english: [
      ["Men", "g13.23.2"], ["den", "g13.23.1"], ["som", "g13.23.7", true], ["såtts", "g13.23.7"],
      ["på", "g13.23.3"], ["den", "g13.23.4"], ["goda", "g13.23.5"], ["jorden,", "g13.23.6"],
      ["detta", "g13.23.8"], ["är", "g13.23.9"], ["den", "g13.23.10"], ["som", "g13.23.13", true], ["hör", "g13.23.13"],
      ["ordet", "g13.23.11 g13.23.12"],
      ["och", "g13.23.14"], ["förstår", "g13.23.15"], ["det,", "", true],
      ["den", "g13.23.16", true], ["som", "g13.23.16"], ["verkligen", "g13.23.17"], ["bär", "g13.23.18"], ["frukt", "g13.23.18", true]
      , ["och", "g13.23.19"], ["ger,", "g13.23.20"],
      ["en", "g13.23.21 g13.23.22"], ["hundrafalt,", "g13.23.23"],
      ["en", "g13.23.24 g13.23.25"], ["sextiofalt,", "g13.23.26"],
      ["en", "g13.23.27 g13.23.28"], ["trettiofalt.”", "g13.23.29"],
    ],
    annotations: [],
  },
  24: {
    english: [
      ["En", "g13.24.1", true], ["annan", "g13.24.1"], ["liknelse", "g13.24.2"], ["lade", "g13.24.3"], ["han", "", true], ["fram", "g13.24.3", true], ["för", "g13.24.4", true], ["dem:", "g13.24.4 g13.24.5"],
      ["”Himlarnas", "g13.24.9 g13.24.10"], ["rike", "g13.24.7 g13.24.8"],
      ["har", "g13.24.6", true], ["blivit", "g13.24.6"], ["likt", "g13.24.6", true],
      ["en", "", true], ["man", "g13.24.11"], ["som", "g13.24.12", true], ["sådde", "g13.24.12"],
      ["god", "g13.24.13"], ["säd", "g13.24.14"],
      ["i", "g13.24.15"], ["sin", "g13.24.18"], ["åker.", "g13.24.16 g13.24.17"],
    ],
    annotations: [],
  },
  25: {
    english: [
      ["Men", "g13.25.2"], ["medan", "g13.25.1", true], ["människorna", "g13.25.5 g13.25.6"], ["sov,", "g13.25.4"],
      ["kom", "g13.25.7"], ["hans", "g13.25.8"], ["fiende", "g13.25.9 g13.25.10"]
      , ["och", "g13.25.11"], ["sådde", "g13.25.12"], ["ogräs", "g13.25.13"]
      , ["mitt", "g13.25.14 g13.25.15"], ["ibland", "", true], ["vetet,", "g13.25.16 g13.25.17"],
      ["och", "g13.25.18"], ["gick", "g13.25.19"], ["sin", "", true], ["väg.", "g13.25.19", true],
    ],
    annotations: [],
  },
  26: {
    english: [
      ["Och", "g13.26.2"], ["när", "g13.26.1"], ["brodden", "g13.26.4 g13.26.5"], ["sköt", "g13.26.3"], ["upp", "g13.26.3", true]
      , ["och", "g13.26.6"], ["satte", "g13.26.8"], ["frukt,", "g13.26.7"],
      ["då", "g13.26.9"], ["visade", "g13.26.10"], ["sig", "g13.26.10", true], ["också", "g13.26.11"], ["ogräset.", "g13.26.12 g13.26.13"],
    ],
    annotations: [],
  },
  27: {
    english: [
      ["Och", "g13.27.2"], ["husbondens", "g13.27.5 g13.27.6"], ["tjänare", "g13.27.3 g13.27.4"],
      ["kom", "g13.27.1"], ["och", "g13.27.7", true], ["sade", "g13.27.7"], ["till", "g13.27.8", true], ["honom:", "g13.27.8"],
      ["’Herre,", "g13.27.9"], ["sådde", "g13.27.13"], ["du", "", true], ["inte", "g13.27.10"]
      , ["god", "g13.27.11"], ["säd", "g13.27.12"],
      ["i", "g13.27.14"], ["din", "g13.27.16"], ["åker?", "g13.27.15 g13.27.17"],
      ["Varifrån", "g13.27.18"], ["har", "g13.27.20"], ["den", "", true], ["då", "g13.27.19"], ["ogräs?’", "g13.27.21"],
    ],
    annotations: [],
  },
  28: {
    english: [
      ["Och", "g13.28.2"], ["han", "g13.28.1"], ["sade", "g13.28.3"], ["till", "g13.28.4", true], ["dem:", "g13.28.4"],
      ["’En", "", true], ["fiende", "g13.28.5 g13.28.6"], ["har", "g13.28.8", true], ["gjort", "g13.28.8"], ["detta.’", "g13.28.7"],
      ["Och", "g13.28.10"], ["tjänarna", "g13.28.9 g13.28.11"], ["säger", "g13.28.13"], ["till", "g13.28.12", true], ["honom:", "g13.28.12"],
      ["’Vill", "g13.28.14"], ["du", "", true], ["då", "g13.28.15"],
      ["att", "", true], ["vi", "g13.28.17", true], ["går", "g13.28.16"], ["och", "", true], ["samlar", "g13.28.17"], ["ihop", "g13.28.17", true], ["det?’", "g13.28.18"],
    ],
    annotations: [],
  },
  29: {
    english: [
      ["Men", "g13.29.2"], ["han", "g13.29.1"], ["säger:", "g13.29.3"],
      ["’Nej,", "g13.29.4"], ["för", "g13.29.5", true], ["att", "", true], ["ni", "g13.29.10", true], ["inte,", "g13.29.6", true],
      ["när", "g13.29.7", true], ["ni", "", true], ["samlar", "g13.29.7"], ["ogräset,", "g13.29.8 g13.29.9"],
      ["ska", "", true], ["rycka", "g13.29.10"], ["upp", "g13.29.10", true],
      ["vetet", "g13.29.13 g13.29.14"], ["tillsammans", "g13.29.11"], ["med", "g13.29.11", true], ["det;", "g13.29.12"],
    ],
    annotations: [],
  },
  30: {
    english: [
      ["låt", "g13.30.1"], ["båda", "g13.30.3"], ["växa", "g13.30.2"], ["tillsammans", "g13.30.2", true],
      ["till", "g13.30.4"], ["skörden;", "g13.30.5 g13.30.6"],
      ["och", "g13.30.7"], ["i", "g13.30.8"], ["skördetiden", "g13.30.9 g13.30.10 g13.30.11"],
      ["ska", "g13.30.12", true], ["jag", "", true], ["säga", "g13.30.12"], ["till", "g13.30.13", true], ["skördemännen:", "g13.30.13 g13.30.14"],
      ["Samla", "g13.30.15"], ["först", "g13.30.16"], ["ogräset", "g13.30.17 g13.30.18"]
      , ["och", "g13.30.19"], ["bind", "g13.30.20"], ["det", "g13.30.21"], ["i", "g13.30.22"], ["knippen", "g13.30.23"]
      , ["för", "g13.30.24 g13.30.25"], ["att", "", true], ["brännas,", "g13.30.26 g13.30.27"],
      ["men", "g13.30.29"], ["vetet", "g13.30.28 g13.30.30"], ["samla", "g13.30.31"],
      ["i", "g13.30.32"], ["min", "g13.30.35"], ["lada.’”", "g13.30.33 g13.30.34"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g13.25.13 g13.30.1", lemma: "ζιζάνια … ἄφετε συναυξάνεσθαι",
        title: "Låt båda växa — liknelsen mot utrensningar",
        body: "**Ζιζάνια** är dårrepe, *Lolium temulentum* — ett giftigt rajgräs vars grymhet är botanisk: genom varje grönt stadium är det nästan omöjligt att skilja från vete, och när axen bildas och röjer det har dess rötter redan flätats genom vetets rötter under jorden. Båda fakta driver berättelsen. Tjänarnas erbjudande — *ska vi gå och rensa?* — är det evigt lockande förslaget: identifiera de onda elementen och avlägsna dem nu. Husbondens **nej** vilar på två ödmjukheter de nitiska aldrig äger: ni kan ännu inte tillförlitligt *skilja* dem åt, och ni kan inte dra upp det ena utan att slita upp det andra. Kyrkohistorien är en enda lång kommentar till vad som händer när denna liknelse ignoreras — inkvisitioner, renhetsutrensningar, kättarjakter — var och en säker på att den kunde skilja dårrepe från vete mitt i säsongen, var och en uppryckande fält av vete. Men liknelsen besvarar också en större och mer personlig fråga: *varför rensar Gud inte världen?* Den som bett om att något ont ska tas bort känner tystnaden som följer, och denna berättelse är ett av Skriftens få direkta svar: inte likgiltighet, utan ett uppskov satt av tålamod — dom uppskjuten, inte inställd (v. 40-43 är så oblinkande som något i evangelierna), ty förhastad dom dödar vete. Och linjen löper genom hjärtan, inte bara mellan personer: rensa fältet i dag, och vem av oss står kvar?",
      },
    ],
  },
  31: {
    english: [
      ["En", "g13.31.1", true], ["annan", "g13.31.1"], ["liknelse", "g13.31.2"], ["lade", "g13.31.3"], ["han", "", true], ["fram", "g13.31.3", true], ["för", "g13.31.4", true], ["dem:", "g13.31.4 g13.31.5"],
      ["”Himlarnas", "g13.31.10 g13.31.11"], ["rike", "g13.31.8 g13.31.9"],
      ["är", "g13.31.7"], ["likt", "g13.31.6"],
      ["ett", "", true], ["senapskorn,", "g13.31.12 g13.31.13"],
      ["som", "g13.31.14"], ["en", "", true], ["man", "g13.31.16"], ["tog", "g13.31.15"],
      ["och", "", true], ["sådde", "g13.31.17"], ["i", "g13.31.18"], ["sin", "g13.31.21"], ["åker;", "g13.31.19 g13.31.20"],
    ],
    annotations: [],
  },
  32: {
    english: [
      ["det", "g13.32.1"], ["är", "g13.32.4"], ["det", "", true], ["minsta", "g13.32.2 g13.32.3"],
      ["av", "g13.32.5", true], ["alla", "g13.32.5"], ["frön,", "g13.32.6 g13.32.7"],
      ["men", "g13.32.9"], ["när", "g13.32.8"], ["det", "g13.32.10", true], ["växt", "g13.32.10"], ["upp", "g13.32.10", true]
      , ["är", "g13.32.14"], ["det", "", true], ["större", "g13.32.11"], ["än", "g13.32.12", true], ["köksväxterna", "g13.32.12 g13.32.13"],
      ["och", "g13.32.15"], ["blir", "g13.32.16"], ["ett", "", true], ["träd,", "g13.32.17"],
      ["så", "g13.32.18"], ["att", "g13.32.18", true], ["himlens", "g13.32.22 g13.32.23"], ["fåglar", "g13.32.20 g13.32.21"]
      , ["kommer", "g13.32.19"], ["och", "g13.32.24"], ["bygger", "g13.32.25", true], ["bo", "g13.32.25"], ["i", "g13.32.26"], ["dess", "g13.32.29"], ["grenar.”", "g13.32.27 g13.32.28"],
    ],
    annotations: [],
  },
  33: {
    english: [
      ["En", "g13.33.1", true], ["annan", "g13.33.1"], ["liknelse", "g13.33.2"], ["talade", "g13.33.3"], ["han", "", true], ["till", "g13.33.4", true], ["dem:", "g13.33.4"],
      ["”Himlarnas", "g13.33.9 g13.33.10"], ["rike", "g13.33.7 g13.33.8"],
      ["är", "g13.33.6"], ["likt", "g13.33.5"], ["en", "", true], ["surdeg,", "g13.33.11"],
      ["som", "g13.33.12"], ["en", "", true], ["kvinna", "g13.33.14"], ["tog", "g13.33.13"],
      ["och", "", true], ["gömde", "g13.33.15"], ["i", "g13.33.16"],
      ["tre", "g13.33.19"], ["mått", "g13.33.18"], ["mjöl,", "g13.33.17"],
      ["till", "g13.33.20", true], ["dess", "g13.33.21"], ["alltsammans", "g13.33.23"], ["var", "g13.33.22", true], ["syrat.”", "g13.33.22"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g13.31.12 g13.33.11", lemma: "κόκκῳ σινάπεως … ζύμῃ",
        title: "Senapskornet och surdegen — rikets pinsamma storlek",
        body: "Två miniatyrliknelser som besvarar invändningen hela detta evangelium ständigt möter: *om riket verkligen kommit (12:28), varför är det så litet?* Rom har legioner; riket har tolv män och en båt. Senapskornet svarar med en bana: ordspråksmässigt det minsta fröet i den galileiska trädgården (en millimeter eller två), ger det en buske på två-tre meter — en tillväxtfaktor ingen annan ettårig växt matchar — och Jesus tippar bilden i medveten komik genom att kalla resultatet ett **träd** med fåglar boende i grenarna, språk lånat från Daniel 4 och Hesekiel 17, där det stora trädet som hyser himlens fåglar är standardbilden av ett *världsimperium*. En senapsbuske med Nebukadnessars krona: det är skämtet, och anspråket. Surdegen tillför mekanismen: **gömd** (ἐνέκρυψεν — verbet är bokstavligen *gömde*) i tre σάτα mjöl — runt fyrtio liter, bröd åt hundra personer, och exakt den mängd Sara knådade åt de gudomliga besökarna i 1 Mos 18 — verkar den osynligt, oåterkalleligt, inifrån, tills *alltsammans* är förvandlat. Notera djärvheten i att alls använda surdeg: överallt annars i Skriften symboliserar den korruption som sprider sig (16:6, *akta er för fariseernas surdeg*). Jesus griper standardbilden för smittsam påverkan och vänder dess förtecken — som för att säga: ni vet redan hur tyst och totalt ett inflytande kan genomsyra en deg. Föreställ er nu den kraften åt andra hållet.",
      },
    ],
  },
  34: {
    english: [
      ["Allt", "g13.34.2"], ["detta", "g13.34.1"],
      ["talade", "g13.34.3"], ["Jesus", "g13.34.4 g13.34.5"],
      ["i", "g13.34.6"], ["liknelser", "g13.34.7"],
      ["till", "g13.34.8", true], ["skarorna,", "g13.34.8 g13.34.9"],
      ["och", "g13.34.10"], ["utan", "g13.34.11"], ["liknelse", "g13.34.12"],
      ["talade", "g13.34.14"], ["han", "", true], ["ingenting", "g13.34.13"], ["till", "g13.34.15", true], ["dem;", "g13.34.15"],
    ],
    annotations: [],
  },
  35: {
    english: [
      ["för", "g13.35.1", true], ["att", "g13.35.1"], ["det", "g13.35.3 g13.35.4"], ["som", "", true], ["talats", "g13.35.4", true],
      ["genom", "g13.35.5"], ["profeten", "g13.35.6 g13.35.7"],
      ["skulle", "g13.35.2", true], ["fullbordas:", "g13.35.2 g13.35.8"],
      ["”Jag", "g13.35.9", true], ["ska", "", true], ["öppna", "g13.35.9"], ["min", "g13.35.14"], ["mun", "g13.35.12 g13.35.13"],
      ["i", "g13.35.10"], ["liknelser;", "g13.35.11"],
      ["jag", "g13.35.15", true], ["ska", "", true], ["uttala", "g13.35.15"],
      ["det", "g13.35.16", true], ["dolda", "g13.35.16"],
      ["från", "g13.35.17"], ["grundläggningen.”", "g13.35.18"],
    ],
    annotations: [],
  },
  36: {
    english: [
      ["Sedan", "g13.36.1"], ["lämnade", "g13.36.2"], ["han", "", true], ["skarorna", "g13.36.3 g13.36.4"]
      , ["och", "g13.36.5", true], ["gick", "g13.36.5"], ["in", "g13.36.6", true], ["i", "g13.36.6"], ["huset.", "g13.36.7 g13.36.8"],
      ["Och", "g13.36.9"], ["hans", "g13.36.14"], ["lärjungar", "g13.36.12 g13.36.13"], ["kom", "g13.36.10"], ["till", "g13.36.11", true], ["honom", "g13.36.11"], ["och", "g13.36.15", true], ["sade:", "g13.36.15"],
      ["”Förklara", "g13.36.16"], ["för", "g13.36.17", true], ["oss", "g13.36.17"],
      ["liknelsen", "g13.36.18 g13.36.19"],
      ["om", "g13.36.20", true], ["ogräset", "g13.36.20 g13.36.21"],
      ["i", "g13.36.22", true], ["åkern.”", "g13.36.22 g13.36.23"],
    ],
    annotations: [],
  },
  37: {
    english: [
      ["Och", "g13.37.2"], ["han", "g13.37.1"], ["svarade:", "g13.37.3 g13.37.4"],
      ["”Den", "g13.37.5"], ["som", "g13.37.6", true], ["sår", "g13.37.6"],
      ["den", "g13.37.7"], ["goda", "g13.37.8"], ["säden", "g13.37.9"],
      ["är", "g13.37.10"], ["Människosonen;", "g13.37.11 g13.37.12 g13.37.13 g13.37.14"],
    ],
    annotations: [],
  },
  38: {
    english: [
      ["åkern", "g13.38.1 g13.38.3"], ["är", "g13.38.4"], ["världen;", "g13.38.5 g13.38.6"],
      ["den", "g13.38.7"], ["goda", "g13.38.9"], ["säden", "g13.38.10"], ["—", "", true],
      ["det", "g13.38.11"], ["är", "g13.38.12"], ["rikets", "g13.38.15 g13.38.16"], ["söner;", "g13.38.13 g13.38.14"],
      ["och", "g13.38.18"], ["ogräset", "g13.38.17 g13.38.19"],
      ["är", "g13.38.20"], ["den", "g13.38.23"], ["ondes", "g13.38.24"], ["söner,", "g13.38.21 g13.38.22"],
    ],
    annotations: [],
  },
  39: {
    english: [
      ["och", "g13.39.2"], ["fienden", "g13.39.1 g13.39.3"], ["som", "g13.39.4", true], ["sådde", "g13.39.5"], ["det", "g13.39.6"],
      ["är", "g13.39.7"], ["djävulen;", "g13.39.8 g13.39.9"],
      ["och", "g13.39.11"], ["skörden", "g13.39.10 g13.39.12"],
      ["är", "g13.39.15"], ["tidsålderns", "g13.39.14"], ["fullbordan,", "g13.39.13"],
      ["och", "g13.39.17"], ["skördemännen", "g13.39.16 g13.39.18"], ["är", "g13.39.20"], ["änglar.", "g13.39.19"],
    ],
    annotations: [],
  },
  40: {
    english: [
      ["Liksom", "g13.40.1"], ["nu", "g13.40.2"],
      ["ogräset", "g13.40.4 g13.40.5"], ["samlas", "g13.40.3"], ["ihop", "g13.40.3", true]
      , ["och", "g13.40.6"], ["bränns", "g13.40.8"], ["i", "g13.40.7", true], ["eld,", "g13.40.7"],
      ["så", "g13.40.9"], ["ska", "g13.40.10", true], ["det", "", true], ["bli", "g13.40.10"],
      ["vid", "g13.40.11"], ["tidsålderns", "g13.40.14 g13.40.15"], ["fullbordan.", "g13.40.12 g13.40.13"],
    ],
    annotations: [],
  },
  41: {
    english: [
      ["Människosonen", "g13.41.2 g13.41.3 g13.41.4 g13.41.5"],
      ["ska", "g13.41.1", true], ["sända", "g13.41.1"], ["sina", "g13.41.8"], ["änglar,", "g13.41.6 g13.41.7"],
      ["och", "g13.41.9"], ["de", "g13.41.10", true], ["ska", "", true], ["samla", "g13.41.10"],
      ["ut", "g13.41.11", true], ["ur", "g13.41.11"], ["hans", "g13.41.14"], ["rike", "g13.41.12 g13.41.13"],
      ["allt", "g13.41.15"], ["som", "", true], ["kommer", "g13.41.17", true], ["på", "g13.41.17", true], ["fall", "g13.41.16 g13.41.17"],
      ["och", "g13.41.18"], ["dem", "g13.41.19"], ["som", "g13.41.20", true], ["gör", "g13.41.20"],
      ["laglöshet,", "g13.41.21 g13.41.22"],
    ],
    annotations: [],
  },
  42: {
    english: [
      ["och", "g13.42.1"], ["de", "g13.42.2", true], ["ska", "", true], ["kasta", "g13.42.2"], ["dem", "g13.42.3"],
      ["i", "g13.42.4"], ["eldsugnen;", "g13.42.5 g13.42.6 g13.42.7 g13.42.8"],
      ["där", "g13.42.9"], ["ska", "g13.42.10", true], ["gråten", "g13.42.11 g13.42.12"], ["vara,", "g13.42.10"],
      ["och", "g13.42.13"], ["tändernas", "g13.42.16 g13.42.17"], ["gnisslan.", "g13.42.14 g13.42.15"],
    ],
    annotations: [],
  },
  43: {
    english: [
      ["Då", "g13.43.1"], ["ska", "g13.43.4", true], ["de", "g13.43.2"], ["rättfärdiga", "g13.43.3"],
      ["stråla", "g13.43.4"],
      ["som", "g13.43.5"], ["solen", "g13.43.6 g13.43.7"],
      ["i", "g13.43.8"], ["sin", "g13.43.13"], ["Faders", "g13.43.11 g13.43.12"], ["rike.", "g13.43.9 g13.43.10"],
      ["Den", "g13.43.14"], ["som", "g13.43.15", true], ["har", "g13.43.15"], ["öron,", "g13.43.16"], ["han", "", true], ["höre.", "g13.43.17"],
    ],
    annotations: [],
  },
  44: {
    english: [
      ["Himlarnas", "g13.44.5 g13.44.6"], ["rike", "g13.44.3 g13.44.4"],
      ["är", "g13.44.2"], ["likt", "g13.44.1"],
      ["en", "", true], ["skatt", "g13.44.7"], ["gömd", "g13.44.8"],
      ["i", "g13.44.9"], ["åkern,", "g13.44.10 g13.44.11"],
      ["som", "g13.44.12"], ["en", "", true], ["man", "g13.44.14"], ["fann", "g13.44.13"], ["och", "g13.44.15", true], ["gömde;", "g13.44.15"],
      ["och", "g13.44.16"], ["i", "g13.44.17", true], ["sin", "g13.44.20"], ["glädje", "g13.44.18 g13.44.19"],
      ["går", "g13.44.21"], ["han", "", true]
      , ["och", "g13.44.22"], ["säljer", "g13.44.23"], ["allt", "g13.44.24"], ["han", "g13.44.25", true], ["äger", "g13.44.25"],
      ["och", "g13.44.26"], ["köper", "g13.44.27"], ["den", "g13.44.30"], ["åkern.", "g13.44.28 g13.44.29"],
    ],
    annotations: [],
  },
  45: {
    english: [
      ["Åter:", "g13.45.1"], ["himlarnas", "g13.45.6 g13.45.7"], ["rike", "g13.45.4 g13.45.5"],
      ["är", "g13.45.3"], ["likt", "g13.45.2"],
      ["en", "", true], ["köpman", "g13.45.8"], ["som", "g13.45.9", true], ["söker", "g13.45.9"],
      ["fina", "g13.45.10"], ["pärlor;", "g13.45.11"],
    ],
    annotations: [],
  },
  46: {
    english: [
      ["och", "g13.46.2"], ["när", "g13.46.1", true], ["han", "", true], ["funnit", "g13.46.1"],
      ["en", "g13.46.3"], ["mycket", "g13.46.4", true], ["dyrbar", "g13.46.4"], ["pärla", "g13.46.5"]
      , ["gick", "g13.46.6"], ["han", "", true], ["bort", "g13.46.6", true]
      , ["och", "", true], ["sålde", "g13.46.7"], ["allt", "g13.46.8 g13.46.9"], ["han", "g13.46.10", true], ["hade", "g13.46.10"],
      ["och", "g13.46.11"], ["köpte", "g13.46.12"], ["den.", "g13.46.13"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g13.44.18 g13.46.12", lemma: "ἀπὸ τῆς χαρᾶς αὐτοῦ … ἠγόρασεν",
        title: "Skatten och pärlan — glädjen sköter försäljningen",
        body: "Tvillingliknelser, en nedifrån och en uppifrån. Åkerarbetaren snubblar över skatten av en slump — en plog träffar en kruka, ett liv svänger mellan en fåra och nästa (att gräva ner värdesaker var antikens bank, och övergivna gömmor dess lotteri); köpmannen är en *professionell sökare* som värderat pärlor hela sitt liv och nu möter den som avslutar sökandet. Tillsammans täcker de alla: de som överrumplas av riket och de som jagat det. Men gångjärnet i båda berättelserna är en enda prepositionsfras Matteus planterar i den första: **ἀπὸ τῆς χαρᾶς αὐτοῦ** — *i sin glädje* går han och säljer allt. Grammatiskt är glädjen försakelsens *källa*. Ingen av männen skildras offrande; ingen berömmer deras disciplin; utförsäljningen är vad förtjusningen gör när den funnit något kategoriskt mer värt — samma rörelse som en man som likviderar sitt liv för en vigselring, vilket ingen kallar askes. Detta är evangeliets stillsamma korrigering av varje bild av tron som bister kostnadsbärning: kravet (*sälj allt* — det är totalt i båda berättelserna) är verkligt, men psykologin är inte subtraktion utan byte, och bokföringen görs skrattande. Om religionens försakelser bara känns som förlust, antyder dessa liknelser, har skatten ännu inte faktiskt setts — säljandet blir begripligt exakt i det ögonblick fyndet görs.",
      },
    ],
  },
  47: {
    english: [
      ["Åter:", "g13.47.1"], ["himlarnas", "g13.47.6 g13.47.7"], ["rike", "g13.47.4 g13.47.5"],
      ["är", "g13.47.3"], ["likt", "g13.47.2"],
      ["en", "", true], ["not", "g13.47.8"], ["som", "g13.47.9", true], ["kastats", "g13.47.9"],
      ["i", "g13.47.10"], ["sjön", "g13.47.11 g13.47.12"],
      ["och", "g13.47.13"], ["samlat", "g13.47.17"],
      ["av", "g13.47.14"], ["alla", "g13.47.15"], ["slag;", "g13.47.16"],
    ],
    annotations: [],
  },
  48: {
    english: [
      ["och", "g13.48.2", true], ["när", "g13.48.2"], ["den", "g13.48.1"], ["blivit", "g13.48.3", true], ["full", "g13.48.3"]
      , ["drog", "g13.48.4"], ["man", "", true], ["upp", "g13.48.4", true], ["den", "", true],
      ["på", "g13.48.5"], ["stranden,", "g13.48.6 g13.48.7"],
      ["och", "g13.48.8"], ["man", "", true], ["satte", "g13.48.9"], ["sig", "g13.48.9", true]
      , ["och", "", true], ["samlade", "g13.48.10"],
      ["det", "g13.48.11", true], ["goda", "g13.48.12"], ["i", "g13.48.13"], ["kärl,", "g13.48.14"],
      ["men", "g13.48.16"], ["det", "g13.48.15"], ["dåliga", "g13.48.17"],
      ["kastade", "g13.48.19"], ["man", "", true], ["ut.", "g13.48.18"],
    ],
    annotations: [],
  },
  49: {
    english: [
      ["Så", "g13.49.1"], ["ska", "g13.49.2", true], ["det", "", true], ["bli", "g13.49.2"],
      ["vid", "g13.49.3"], ["tidsålderns", "g13.49.6 g13.49.7"], ["fullbordan:", "g13.49.4 g13.49.5"],
      ["änglarna", "g13.49.9 g13.49.10"], ["ska", "g13.49.8", true], ["gå", "g13.49.8"], ["ut", "g13.49.8", true],
      ["och", "g13.49.11"], ["skilja", "g13.49.12"],
      ["de", "g13.49.13"], ["onda", "g13.49.14"],
      ["från", "g13.49.15"], ["de", "g13.49.17"], ["rättfärdigas", "g13.49.18"], ["mitt,", "g13.49.16"],
    ],
    annotations: [],
  },
  50: {
    english: [
      ["och", "g13.50.1"], ["de", "g13.50.2", true], ["ska", "", true], ["kasta", "g13.50.2"], ["dem", "g13.50.3"],
      ["i", "g13.50.4"], ["eldsugnen;", "g13.50.5 g13.50.6 g13.50.7 g13.50.8"],
      ["där", "g13.50.9"], ["ska", "g13.50.10", true], ["gråten", "g13.50.11 g13.50.12"], ["vara,", "g13.50.10"],
      ["och", "g13.50.13"], ["tändernas", "g13.50.16 g13.50.17"], ["gnisslan.", "g13.50.14 g13.50.15"],
    ],
    annotations: [],
  },
  51: {
    english: [
      ["”Har", "g13.51.1", true], ["ni", "", true], ["förstått", "g13.51.1"],
      ["allt", "g13.51.3"], ["detta?”", "g13.51.2"],
      ["De", "g13.51.4", true], ["säger", "g13.51.4"], ["till", "g13.51.5", true], ["honom:", "g13.51.5"],
      ["”Ja.”", "g13.51.6"],
    ],
    annotations: [],
  },
  52: {
    english: [
      ["Och", "g13.52.2"], ["han", "g13.52.1"], ["sade", "g13.52.3"], ["till", "g13.52.4", true], ["dem:", "g13.52.4"],
      ["”Därför", "g13.52.5 g13.52.6"],
      ["är", "g13.52.15"], ["varje", "g13.52.7"], ["skriftlärd", "g13.52.8"],
      ["som", "g13.52.9", true], ["blivit", "", true], ["himmelrikets", "g13.52.10 g13.52.11 g13.52.12 g13.52.13"], ["lärjunge", "g13.52.9"]
      , ["lik", "g13.52.14"],
      ["en", "", true], ["husbonde", "g13.52.16 g13.52.17"],
      ["som", "g13.52.18"], ["ur", "g13.52.20"], ["sitt", "g13.52.23"], ["förråd", "g13.52.21 g13.52.22"],
      ["bär", "g13.52.19"], ["fram", "g13.52.19", true],
      ["nytt", "g13.52.24"], ["och", "g13.52.25"], ["gammalt.”", "g13.52.26"],
    ],
    annotations: [],
  },
  53: {
    english: [
      ["Och", "g13.53.1"], ["det", "g13.53.2", true], ["hände,", "g13.53.2"], ["när", "g13.53.3"],
      ["Jesus", "g13.53.5 g13.53.6"], ["avslutat", "g13.53.4"],
      ["dessa", "g13.53.9"], ["liknelser,", "g13.53.7 g13.53.8"],
      ["att", "", true], ["han", "g13.53.10", true], ["drog", "g13.53.10"], ["vidare", "g13.53.10", true], ["därifrån.", "g13.53.11"],
    ],
    annotations: [],
  },
  54: {
    english: [
      ["Och", "g13.54.1"], ["han", "g13.54.2", true], ["kom", "g13.54.2"], ["till", "g13.54.3"], ["sin", "g13.54.6"], ["hemstad", "g13.54.4 g13.54.5"]
      , ["och", "", true], ["undervisade", "g13.54.7"], ["dem", "g13.54.8"]
      , ["i", "g13.54.9"], ["deras", "g13.54.12"], ["synagoga,", "g13.54.10 g13.54.11"],
      ["så", "g13.54.13"], ["att", "g13.54.13", true], ["de", "g13.54.15"], ["häpnade", "g13.54.14"]
      , ["och", "g13.54.16"], ["sade:", "g13.54.17"],
      ["”Varifrån", "g13.54.18"], ["har", "", true], ["denne", "g13.54.19"]
      , ["denna", "g13.54.22"], ["visdom", "g13.54.20 g13.54.21"],
      ["och", "g13.54.23"], ["kraftgärningarna?", "g13.54.24 g13.54.25"],
    ],
    annotations: [],
  },
  55: {
    english: [
      ["Är", "g13.55.3"], ["detta", "g13.55.2"], ["inte", "g13.55.1"],
      ["snickarens", "g13.55.4 g13.55.5 g13.55.6"], ["son?", "g13.55.7"],
      ["Heter", "g13.55.12"], ["inte", "g13.55.8"], ["hans", "g13.55.11"], ["mor", "g13.55.9 g13.55.10"],
      ["Maria,", "g13.55.13"],
      ["och", "g13.55.14"], ["hans", "g13.55.17"], ["bröder", "g13.55.15 g13.55.16"],
      ["Jakob", "g13.55.18"], ["och", "g13.55.19"], ["Josef", "g13.55.20"],
      ["och", "g13.55.21"], ["Simon", "g13.55.22"], ["och", "g13.55.23"], ["Judas?", "g13.55.24"],
    ],
    annotations: [],
  },
  56: {
    english: [
      ["Och", "g13.56.1"], ["hans", "g13.56.4"], ["systrar", "g13.56.2 g13.56.3"], ["—", "", true],
      ["är", "g13.56.9"], ["de", "", true], ["inte", "g13.56.5"], ["alla", "g13.56.6"],
      ["hos", "g13.56.7"], ["oss?", "g13.56.8"],
      ["Varifrån", "g13.56.10"], ["har", "", true], ["denne", "g13.56.12"], ["då", "g13.56.11"]
      , ["allt", "g13.56.14"], ["detta?”", "g13.56.13"],
    ],
    annotations: [],
  },
  57: {
    english: [
      ["Och", "g13.57.1"], ["de", "g13.57.2", true], ["tog", "g13.57.2"], ["anstöt", "g13.57.2", true],
      ["av", "g13.57.3"], ["honom.", "g13.57.4"],
      ["Men", "g13.57.6"], ["Jesus", "g13.57.5 g13.57.7"], ["sade", "g13.57.8"], ["till", "g13.57.9", true], ["dem:", "g13.57.9"],
      ["”En", "", true], ["profet", "g13.57.12"], ["är", "g13.57.11"], ["inte", "g13.57.10"], ["föraktad", "g13.57.13"]
      , ["utom", "g13.57.14 g13.57.15"],
      ["i", "g13.57.16"], ["sin", "g13.57.23"], ["hemstad", "g13.57.17 g13.57.18"],
      ["och", "g13.57.19"], ["i", "g13.57.20"], ["sitt", "", true], ["eget", "", true], ["hus.”", "g13.57.21 g13.57.22"],
    ],
    annotations: [],
  },
  58: {
    english: [
      ["Och", "g13.58.1"], ["han", "g13.58.3", true], ["gjorde", "g13.58.3"], ["inte", "g13.58.2"],
      ["många", "g13.58.6"], ["kraftgärningar", "g13.58.5"], ["där,", "g13.58.4"],
      ["för", "g13.58.7"], ["deras", "g13.58.10"], ["otros", "g13.58.8 g13.58.9"], ["skull.", "g13.58.7", true],
    ],
    annotations: [
      {
        kind: "reading", refs: "g13.55.5 g13.58.9", lemma: "ὁ τοῦ τέκτονος υἱός … ἀπιστίαν",
        title: "Snickarens son — förtrogenheten, den sista otron",
        body: "Liknelsernas kapitel slutar med en liknelse som hände. Nasaret hör sin egen pojke undervisa — med visdom och gärningar ingen bestrider (*varifrån har denne detta?* medger fakta men vägrar slutsatsen) — och tar **anstöt**: ἐσκανδαλίζοντο, de snubblade på honom, exakt ordet ur saligprisningen till Johannes i 11:6. Deras argument är helt biografiskt: **τέκτων-sonen** (en τέκτων är en byggnadshantverkare i trä och sten — detta och Mark 6:3 är våra enda källor till Jesu yrke); Marias pojke; vi känner Jakob, Josef, Simon, Judas; systrarna är alla *här*. Varje faktum korrekt. Och fakta fungerar som isolering: inget som anlänt genom en känd familjs vanliga kanaler kan vara ett ingrepp från Gud. Det är hemstadens kunskapsteori, och den har inte åldrats en dag — de sista som förmår se någon är de som är säkra på att de redan gjort det; och den moderna övertygelsen att inget med förklarlig historia kan vara uppenbarelse är Nasarets syllogism i skala. Sedan den stillsamt förkrossande slutversen: *han gjorde inte många kraftgärningar där för deras otros skull* — Markus säger, ännu kargare, att han **kunde inte**. Matteus mildrar verbet men behåller mekanismen: evangelierna erkänner öppet att undret har en mottagarsida, att tilliten ingår i kretsen, och att den slutna handen, till och med i Guds egen hemstad, mest förblir tom. Korasin såg för mycket och ryckte på axlarna; Nasaret visste för mycket och snubblade. Mellan dem står detta kapitels refräng: *den som har öron, han höre*.",
      },
    ],
  },
};
