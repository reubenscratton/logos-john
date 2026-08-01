// Matteus 9 — svensk översättning & annotationer.
// english-fältet håller SVENSKA tokens, alignerade mot samma g-id:n.

export const CONTENT = {
  1: {
    english: [
      ["Och", "g9.1.1"], ["han", "", true], ["steg", "g9.1.2"], ["i", "g9.1.3"], ["en", "", true], ["båt", "g9.1.4"],
      ["och", "", true], ["for", "g9.1.5"], ["över,", "g9.1.5", true],
      ["och", "g9.1.6"], ["kom", "g9.1.7"], ["till", "g9.1.8"], ["sin", "g9.1.10"], ["egen", "g9.1.10", true], ["stad.", "g9.1.9 g9.1.11"],
    ],
    annotations: [],
  },
  2: {
    english: [
      ["Och", "g9.2.1"], ["se,", "g9.2.2"], ["man", "g9.2.3", true], ["bar", "g9.2.3"], ["till", "g9.2.4", true], ["honom", "g9.2.4"],
      ["en", "", true], ["förlamad", "g9.2.5"], ["som", "", true], ["låg", "g9.2.8"], ["på", "g9.2.6"], ["en", "", true], ["bädd.", "g9.2.7"],
      ["Och", "g9.2.9"], ["när", "", true], ["Jesus", "g9.2.11 g9.2.12"], ["såg", "g9.2.10"], ["deras", "g9.2.15"], ["tro", "g9.2.13 g9.2.14"],
      ["sade", "g9.2.16"], ["han", "", true], ["till", "g9.2.17", true], ["den", "g9.2.17"], ["förlamade:", "g9.2.18"],
      ["”Var", "g9.2.19"], ["vid", "g9.2.19", true], ["gott", "g9.2.19", true], ["mod,", "g9.2.19", true], ["mitt", "", true], ["barn;", "g9.2.20"],
      ["dina", "g9.2.22"], ["synder", "g9.2.23 g9.2.24"], ["är", "g9.2.21", true], ["förlåtna.”", "g9.2.21"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g9.2.21 g9.5.4 g9.6.5", lemma: "Ἀφίενταί σου αἱ ἁμαρτίαι",
        title: "”Vilket är lättare?” — det osynliga anspråket säkrat av det synliga",
        body: "Fyra personer bär en femte till Jesus, och han svarar på något ingen nämnt: synder. De skriftlärdas tysta invändning är *korrekt teologi* — att förlåta synder är Guds sak, och att kungöra det å Guds vägnar utan altare och offer är exakt vad hädelse betydde. Jesus svarar med ett stycke logik värt att sakta ner inför. *Vem som helst* kan säga ”dina synder är förlåtna” — anspråket är ofalsifierbart, och därför billigt. ”Stig upp och gå” går att kontrollera inom sekunder. Så han sätter det overifierbara anspråket i pant på det verifierbara: *för att ni ska veta* att Människosonen har makt **på jorden** att förlåta — och då reser sig mannen. Det är det närmaste evangelierna kommer ett erbjudet bevis, och lägg märke till vad det är ett bevis *för*: inte hans kraft (v. 8 säger att skaran prisade Gud som gett sådan makt *åt människor*) utan hans rätt att säga den mening varje skuldtyngt samvete mest tvivlar på att det får höra. En detalj till: han såg **deras** tro — vännernas. Den förlamade säger aldrig ett ord och sägs aldrig tro något. Ibland, medger denna vers stillsamt, är tron fyra människor som bär en femte.",
      },
    ],
  },
  3: {
    english: [
      ["Och", "g9.3.1"], ["se,", "g9.3.2"], ["några", "g9.3.3"], ["av", "g9.3.4", true], ["de", "g9.3.4"], ["skriftlärda", "g9.3.5"],
      ["sade", "g9.3.6"], ["inom", "g9.3.7"], ["sig:", "g9.3.8"],
      ["”Han", "g9.3.9"], ["hädar.”", "g9.3.10"],
    ],
    annotations: [],
  },
  4: {
    english: [
      ["Och", "g9.4.1"], ["Jesus,", "g9.4.3 g9.4.4"], ["som", "", true], ["visste", "g9.4.2"], ["deras", "g9.4.7"], ["tankar,", "g9.4.5 g9.4.6"], ["sade:", "g9.4.8"],
      ["”Varför", "g9.4.9 g9.4.10"], ["tänker", "g9.4.11"], ["ni", "g9.4.11", true], ["ont", "g9.4.12"],
      ["i", "g9.4.13"], ["era", "g9.4.16"], ["hjärtan?", "g9.4.14 g9.4.15"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["Ty", "g9.5.2"], ["vilket", "g9.5.1"], ["är", "g9.5.3"], ["lättare:", "g9.5.4"],
      ["att", "g9.5.5", true], ["säga", "g9.5.5"], ["’Dina", "g9.5.7"], ["synder", "g9.5.8 g9.5.9"], ["är", "g9.5.6", true], ["förlåtna’,", "g9.5.6"],
      ["eller", "g9.5.10"], ["att", "g9.5.11", true], ["säga", "g9.5.11"], ["’Stig", "g9.5.12"], ["upp", "g9.5.12", true], ["och", "g9.5.13"], ["gå’?", "g9.5.14"],
    ],
    annotations: [],
  },
  6: {
    english: [
      ["Men", "g9.6.2"], ["för", "g9.6.1", true], ["att", "g9.6.1"], ["ni", "g9.6.3", true], ["ska", "", true], ["veta", "g9.6.3"], ["att", "g9.6.4"],
      ["Människosonen", "g9.6.7 g9.6.8 g9.6.9 g9.6.10"],
      ["har", "g9.6.6"], ["makt", "g9.6.5"], ["på", "g9.6.11"], ["jorden", "g9.6.12 g9.6.13"],
      ["att", "g9.6.14", true], ["förlåta", "g9.6.14"], ["synder”", "g9.6.15"], ["—", "", true],
      ["då", "g9.6.16"], ["säger", "g9.6.17"], ["han", "", true], ["till", "g9.6.18", true], ["den", "g9.6.18"], ["förlamade", "g9.6.19"], ["—", "", true],
      ["”Stig", "g9.6.20"], ["upp,", "g9.6.20", true], ["ta", "g9.6.21"], ["din", "g9.6.22"], ["bädd", "g9.6.23 g9.6.24"],
      ["och", "g9.6.25"], ["gå", "g9.6.26"], ["hem", "g9.6.27", true], ["till", "g9.6.27"], ["ditt", "g9.6.30"], ["hus.”", "g9.6.28 g9.6.29"],
    ],
    annotations: [],
  },
  7: {
    english: [
      ["Och", "g9.7.1"], ["han", "g9.7.2", true], ["steg", "g9.7.2"], ["upp", "g9.7.2", true], ["och", "", true], ["gick", "g9.7.3"],
      ["hem", "g9.7.4", true], ["till", "g9.7.4"], ["sitt", "g9.7.7"], ["hus.", "g9.7.5 g9.7.6"],
    ],
    annotations: [],
  },
  8: {
    english: [
      ["När", "g9.8.1", true], ["skarorna", "g9.8.3 g9.8.4"], ["såg", "g9.8.1"], ["det", "", true],
      ["greps", "g9.8.5"], ["de", "", true], ["av", "", true], ["fruktan,", "g9.8.5", true],
      ["och", "g9.8.6"], ["prisade", "g9.8.7"], ["Gud,", "g9.8.8 g9.8.9"],
      ["som", "g9.8.10"], ["gett", "g9.8.11"], ["människor", "g9.8.14 g9.8.15"], ["sådan", "g9.8.13"], ["makt.", "g9.8.12"],
    ],
    annotations: [],
  },
  9: {
    english: [
      ["Och", "g9.9.1"], ["när", "g9.9.2", true], ["Jesus", "g9.9.3 g9.9.4"], ["gick", "g9.9.2"], ["vidare", "g9.9.2", true], ["därifrån", "g9.9.5"],
      ["såg", "g9.9.6"], ["han", "", true], ["en", "", true], ["man", "g9.9.7"], ["sitta", "g9.9.8"],
      ["vid", "g9.9.9"], ["tullbordet,", "g9.9.10 g9.9.11"],
      ["som", "", true], ["kallades", "g9.9.13"], ["Matteus;", "g9.9.12"],
      ["och", "g9.9.14"], ["han", "g9.9.15", true], ["säger", "g9.9.15"], ["till", "g9.9.16", true], ["honom:", "g9.9.16"],
      ["”Följ", "g9.9.17"], ["mig.”", "g9.9.18"],
      ["Och", "g9.9.19"], ["han", "g9.9.20", true], ["steg", "g9.9.20"], ["upp", "g9.9.20", true], ["och", "", true], ["följde", "g9.9.21"], ["honom.", "g9.9.22"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g9.9.11 g9.9.12", lemma: "τελώνιον … Μαθθαῖον λεγόμενον",
        title: "En vers självbiografi",
        body: "Τελώνιον var en tullstation vid handelsvägen genom Kafarnaum, och mannen som satt där tillhörde den mest föraktade yrkesklassen i judiska Palestina: tullarrendatorer köpte indrivningsrätten och levde på marginalen, vilket per definition gjorde dem till utsugare, och deras dagliga arbete åt ockupanten gjorde dem till kollaboratörer — därav den fasta fras detta kapitel använder två gånger, *tullindrivare och syndare*, en enda social kategori. Markus och Lukas berättar samma historia om en man vid namn **Levi**; bara detta evangelium kallar honom **Matteus** — namnet på den apostel evangeliet tillskrivits sedan andra århundradet. Boken själv är anonym, och ärligheten kräver att det sägs att forskningen är delad om traditionen. Men om den stämmer är denna vers författarens hela självbiografi: nio grekiska ord som placerar honom vid tullbordet, den värsta raden i något första århundradets CV, utan förklaring och utan det självrättfärdigande detaljverk en fabrikör skulle ha lagt till. Två ord från Jesus — *följ mig* — och ett particip till svar: ἀναστάς, **uppstigande**, samma verb detta evangelium ska använda om uppståndelse. Vem som än skrev det: historien berättas som en man berättar om dagen då hans liv gick itu.",
      },
    ],
  },
  10: {
    english: [
      ["Och", "g9.10.1"], ["det", "g9.10.2", true], ["hände,", "g9.10.2"],
      ["när", "", true], ["han", "g9.10.3"], ["låg", "g9.10.4"], ["till", "", true], ["bords", "", true],
      ["i", "g9.10.5"], ["huset,", "g9.10.6 g9.10.7"],
      ["se,", "g9.10.8 g9.10.9"], ["många", "g9.10.10"], ["tullindrivare", "g9.10.11"],
      ["och", "g9.10.12"], ["syndare", "g9.10.13"], ["kom", "g9.10.14"], ["och", "", true], ["lade", "g9.10.15"], ["sig", "g9.10.15", true], ["till", "g9.10.15", true], ["bords", "g9.10.15", true], ["med", "", true],
      ["Jesus", "g9.10.16 g9.10.17"], ["och", "g9.10.18"], ["hans", "g9.10.21"], ["lärjungar.", "g9.10.19 g9.10.20"],
    ],
    annotations: [],
  },
  11: {
    english: [
      ["Och", "g9.11.1"], ["när", "g9.11.2", true], ["fariseerna", "g9.11.3 g9.11.4"], ["såg", "g9.11.2"], ["det", "", true],
      ["sade", "g9.11.5"], ["de", "", true], ["till", "g9.11.6", true], ["hans", "g9.11.8"], ["lärjungar:", "g9.11.6 g9.11.7"],
      ["”Varför", "g9.11.9 g9.11.10"], ["äter", "g9.11.16"], ["er", "g9.11.19"], ["mästare", "g9.11.17 g9.11.18"],
      ["med", "g9.11.11"], ["tullindrivare", "g9.11.12 g9.11.13"],
      ["och", "g9.11.14"], ["syndare?”", "g9.11.15"],
    ],
    annotations: [],
  },
  12: {
    english: [
      ["Men", "g9.12.2"], ["han", "g9.12.1"], ["hörde", "g9.12.3"], ["det", "", true], ["och", "", true], ["sade:", "g9.12.4"],
      ["”Det", "", true], ["är", "", true], ["inte", "g9.12.5"], ["de", "g9.12.8"], ["starka", "g9.12.9"], ["som", "", true], ["behöver", "g9.12.6 g9.12.7"],
      ["läkare,", "g9.12.10"], ["utan", "g9.12.11"], ["de", "g9.12.12"], ["som", "", true], ["är", "g9.12.14"], ["sjuka.", "g9.12.13"],
    ],
    annotations: [],
  },
  13: {
    english: [
      ["Men", "g9.13.2"], ["gå", "g9.13.1"], ["och", "", true], ["lär", "g9.13.3"], ["er", "g9.13.3", true], ["vad", "g9.13.4"], ["detta", "", true], ["betyder:", "g9.13.5"],
      ["’Barmhärtighet", "g9.13.6"], ["vill", "g9.13.7"], ["jag", "g9.13.7", true], ["ha,", "g9.13.7", true], ["och", "g9.13.8"], ["inte", "g9.13.9"], ["offer.’", "g9.13.10"],
      ["Ty", "g9.13.12"], ["jag", "g9.13.13", true], ["har", "", true], ["inte", "g9.13.11"], ["kommit", "g9.13.13"],
      ["för", "g9.13.14", true], ["att", "", true], ["kalla", "g9.13.14"], ["rättfärdiga,", "g9.13.15"], ["utan", "g9.13.16"], ["syndare.”", "g9.13.17"],
    ],
    annotations: [
      {
        kind: "text", refs: "g9.13.6 g9.13.10", lemma: "Ἔλεος θέλω καὶ οὐ θυσίαν",
        title: "”Gå och lär er” — en rabbins tillrättavisning, Hoseas rad",
        body: "*Gå och lär* (hebreiska *ṣē ûlemad*) är en teknisk rabbinsk formel — frasen en lärare använde för att skicka en elev tillbaka till texter han redan borde behärska. Jesus riktar den mot fariseerna, yrkesstudenterna, och det ger meningen dess egg: han betygsätter betygsättarna. Texten han förelägger dem är **Hosea 6:6** — *barmhärtighet vill jag ha, och inte offer* — där ”barmhärtighet” översätter hebreiskans *ḥesed*, förbundsordet för envis, praktisk trohetskärlek. Av de fyra evangelierna är det bara Matteus Jesus som citerar raden, och han citerar den **två gånger** (igen i 12:7), båda gångerna mot religiösa experter, båda gångerna till försvar för människor experterna ville utestänga — syndare vid ett middagsbord här, hungriga lärjungar där. Det semitiska idiomet *inte A utan B* betyder ofta *B går före A* snarare än *A avskaffas* — Hoseas egen parallellrad säger ”kunskap om Gud *mer än* brännoffer”. Så raden avskaffar inte gudstjänsten; den rangordnar den, och rangordningen är skandalen: när liturgi och barmhärtighet kolliderar viker altaret. Ett evangelium som traditionen tillskriver en tullindrivare bevarar, två gånger, det enda skriftord som satte honom vid bordet.",
      },
    ],
  },
  14: {
    english: [
      ["Då", "g9.14.1"], ["kommer", "g9.14.2"], ["Johannes", "g9.14.6"], ["lärjungar", "g9.14.4 g9.14.5"],
      ["till", "g9.14.3", true], ["honom", "g9.14.3"], ["och", "", true], ["säger:", "g9.14.7"],
      ["”Varför", "g9.14.8 g9.14.9"], ["fastar", "g9.14.14"], ["vi", "g9.14.10"], ["och", "g9.14.11"], ["fariseerna,", "g9.14.12 g9.14.13"],
      ["men", "g9.14.16"], ["dina", "g9.14.18"], ["lärjungar", "g9.14.15 g9.14.17"], ["fastar", "g9.14.20"], ["inte?”", "g9.14.19"],
    ],
    annotations: [],
  },
  15: {
    english: [
      ["Och", "g9.15.1"], ["Jesus", "g9.15.4 g9.15.5"], ["sade", "g9.15.2"], ["till", "g9.15.3", true], ["dem:", "g9.15.3"],
      ["”Kan", "g9.15.6 g9.15.7"], ["bröllopsgästerna", "g9.15.8 g9.15.9 g9.15.10 g9.15.11"], ["sörja", "g9.15.12"],
      ["så", "g9.15.13", true], ["länge", "g9.15.14"], ["brudgummen", "g9.15.18 g9.15.19"], ["är", "g9.15.17"], ["hos", "g9.15.15"], ["dem?", "g9.15.16"],
      ["Men", "g9.15.21"], ["dagar", "g9.15.22"], ["ska", "g9.15.20", true], ["komma", "g9.15.20"], ["när", "g9.15.23"],
      ["brudgummen", "g9.15.27 g9.15.28"], ["tas", "g9.15.24"], ["ifrån", "g9.15.25"], ["dem,", "g9.15.26"],
      ["och", "g9.15.29"], ["då", "g9.15.30"], ["ska", "", true], ["de", "g9.15.31", true], ["fasta.", "g9.15.31"],
    ],
    annotations: [],
  },
  16: {
    english: [
      ["Och", "g9.16.2"], ["ingen", "g9.16.1"], ["sätter", "g9.16.3"], ["en", "", true], ["lapp", "g9.16.4"],
      ["av", "g9.16.5", true], ["okrympt", "g9.16.6"], ["tyg", "g9.16.5"], ["på", "g9.16.7"], ["en", "", true], ["gammal", "g9.16.9"], ["mantel;", "g9.16.8"],
      ["ty", "g9.16.11"], ["lappen", "g9.16.12 g9.16.13 g9.16.14"], ["river", "g9.16.10"], ["med", "g9.16.10", true], ["sig", "g9.16.10", true],
      ["av", "g9.16.15"], ["manteln,", "g9.16.16 g9.16.17"],
      ["och", "g9.16.18"], ["revan", "g9.16.20"], ["blir", "g9.16.21"], ["värre.", "g9.16.19"],
    ],
    annotations: [],
  },
  17: {
    english: [
      ["Inte", "g9.17.1"], ["heller", "g9.17.1", true], ["häller", "g9.17.2"], ["man", "", true], ["nytt", "g9.17.4"], ["vin", "g9.17.3"],
      ["i", "g9.17.5"], ["gamla", "g9.17.7"], ["skinnsäckar;", "g9.17.6"],
      ["då", "g9.17.8 g9.17.9 g9.17.10"], ["spricker", "g9.17.11"], ["säckarna,", "g9.17.12 g9.17.13"],
      ["och", "g9.17.14"], ["vinet", "g9.17.15 g9.17.16"], ["rinner", "g9.17.17"], ["ut", "g9.17.17", true],
      ["och", "g9.17.18"], ["säckarna", "g9.17.19 g9.17.20"], ["förstörs.", "g9.17.21"],
      ["Nej,", "g9.17.22"], ["nytt", "g9.17.25"], ["vin", "g9.17.24"], ["häller", "g9.17.23"], ["man", "", true],
      ["i", "g9.17.26"], ["nya", "g9.17.28"], ["säckar,", "g9.17.27"],
      ["och", "g9.17.29"], ["så", "", true], ["bevaras", "g9.17.31"], ["båda.”", "g9.17.30"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g9.17.4 g9.17.6 g9.15.19", lemma: "οἶνον νέον εἰς ἀσκοὺς παλαιούς",
        title: "Nytt vin, gamla säckar — och varför hans lärjungar inte fastade",
        body: "Frågan bakom liknelserna är fastan — och lägg märke till vem som ställer den: **Johannes** lärjungar, allierade, inte motståndare, uppriktigt förbryllade över att fromhetens synligaste disciplin saknas i Jesu krets. Hans första svar är en bild, inte ett argument: *kan bröllopsgäster sörja medan brudgummen är hos dem?* Fastan är sorgens kroppsspråk, och bröllopet har börjat — sorg vore en lögn. (Satsen *när brudgummen tas ifrån dem* — ἀπαρθῇ, ett våldsamt passivum — är detta evangeliums första skugga av korset, tappad mitt i ett samtal om matvanor.) Sedan två miniatyrliknelser i fysik. Nytt vin jäser ännu; en gammal säck, redan spänd och skör, kan inte ge efter, och trycket förstör både kärl och innehåll. Okrympt tyg på en gammal mantel river sönder manteln vid första tvätten. Poängen är inte att det gamla är dåligt — detta är evangeliet som säger att *inte en jota* av lagen ska falla (5:18), och versen slutar med att **båda** bevaras. Poängen är en varning för eftermontering: det som kommit låter sig inte pressas in i förväntningarnas befintliga kärl, och den som tvingar det förstör kärlet också. En mening värd att sitta med för var och en vars ärliga problem med tron är att de utbjudna versionerna känns som gamla vinsäckar.",
      },
    ],
  },
  18: {
    english: [
      ["Medan", "", true], ["han", "g9.18.2"], ["talade", "g9.18.3"], ["detta", "g9.18.1"],
      ["till", "g9.18.4", true], ["dem,", "g9.18.4"],
      ["se,", "g9.18.5"], ["en", "g9.18.7"], ["föreståndare", "g9.18.6"], ["kom", "g9.18.8"], ["och", "", true], ["föll", "g9.18.9"], ["ner", "g9.18.9", true],
      ["för", "g9.18.10", true], ["honom", "g9.18.10"], ["och", "", true], ["sade:", "g9.18.11 g9.18.12"],
      ["”Min", "g9.18.15"], ["dotter", "g9.18.13 g9.18.14"], ["har", "", true], ["just", "g9.18.16"], ["dött;", "g9.18.17"],
      ["men", "g9.18.18"], ["kom", "g9.18.19"], ["och", "", true], ["lägg", "g9.18.20"], ["din", "g9.18.23"], ["hand", "g9.18.21 g9.18.22"],
      ["på", "g9.18.24"], ["henne,", "g9.18.25"], ["så", "g9.18.26"], ["får", "g9.18.27", true], ["hon", "", true], ["liv.”", "g9.18.27"],
    ],
    annotations: [],
  },
  19: {
    english: [
      ["Och", "g9.19.1"], ["Jesus", "g9.19.3 g9.19.4"], ["steg", "g9.19.2"], ["upp", "g9.19.2", true], ["och", "", true], ["följde", "g9.19.5"], ["honom,", "g9.19.6"],
      ["med", "g9.19.7", true], ["sina", "g9.19.10"], ["lärjungar.", "g9.19.8 g9.19.9"],
    ],
    annotations: [],
  },
  20: {
    english: [
      ["Och", "g9.20.1"], ["se,", "g9.20.2"], ["en", "", true], ["kvinna", "g9.20.3"],
      ["som", "", true], ["lidit", "g9.20.4", true], ["av", "", true], ["blödningar", "g9.20.4"], ["i", "", true], ["tolv", "g9.20.5"], ["år", "g9.20.6"],
      ["kom", "g9.20.7"], ["bakifrån", "g9.20.8"],
      ["och", "", true], ["rörde", "g9.20.9"], ["vid", "g9.20.9", true], ["hörntofsen", "g9.20.10 g9.20.11"],
      ["på", "g9.20.12", true], ["hans", "g9.20.14"], ["mantel;", "g9.20.13"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g9.20.11 g9.22.10", lemma: "κράσπεδον … θύγατερ",
        title: "Hörntofsen, den oberörbara kvinnan och det enda ”dotter”",
        body: "**Κράσπεδον** som hon rör vid är ingen dekoration: det är *tzitzit*, tofsen varje israelitisk man var befalld att bära i mantelns hörn som en påminnelse om buden (4 Mos 15:38-39). Så denna vers är i förbigående en av våra tydligaste glimtar av Jesus som lagtrogen jude — med tofsar och allt. Hennes tillstånd är scenens andra spänning. Tolv års blödningar betydde tolv års rituell orenhet (3 Mos 15:25-27): allt hon satt på blev orent, alla hon rörde blev orena — därför närmar hon sig *bakifrån* och siktar på mantelns yttersta kant: minsta möjliga kontakt, konstruerad så att ingen någonsin skulle behöva veta. Hennes logik är officerens logik från förra kapitlet baklänges: han slöt sig till att makten verkar på avstånd; hon, att minsta beröring räcker. Och som med den spetälske löper smittan baklänges — i stället för att hennes orenhet går över på honom går helandet över på henne. Men han låter det inte förbli anonymt. Han vänder sig om, ser henne och ger henne det tilltal han inte ger någon annan i något evangelium: **θύγατερ, dotter.** Tolv år av oberörbarhet, upplösta inte bara i hälsa utan i familj — och, karakteristiskt, ger han henne äran: *din tro har räddat dig*, som om kraften varit hennes.",
      },
    ],
  },
  21: {
    english: [
      ["ty", "g9.21.2"], ["hon", "g9.21.1", true], ["sade", "g9.21.1"], ["inom", "g9.21.3"], ["sig:", "g9.21.4"],
      ["”Om", "g9.21.5"], ["jag", "g9.21.7", true], ["så", "", true], ["bara", "g9.21.6"], ["rör", "g9.21.7"], ["vid", "g9.21.7", true],
      ["hans", "g9.21.10"], ["mantel", "g9.21.8 g9.21.9"],
      ["blir", "g9.21.11", true], ["jag", "", true], ["räddad.”", "g9.21.11"],
    ],
    annotations: [],
  },
  22: {
    english: [
      ["Men", "g9.22.2"], ["Jesus", "g9.22.1 g9.22.3"], ["vände", "g9.22.4"], ["sig", "g9.22.4", true], ["om,", "g9.22.4", true],
      ["och", "g9.22.5"], ["när", "", true], ["han", "", true], ["såg", "g9.22.6"], ["henne", "g9.22.7"],
      ["sade", "g9.22.8"], ["han:", "", true],
      ["”Var", "g9.22.9"], ["vid", "g9.22.9", true], ["gott", "g9.22.9", true], ["mod,", "g9.22.9", true], ["min", "", true], ["dotter;", "g9.22.10"],
      ["din", "g9.22.13"], ["tro", "g9.22.11 g9.22.12"], ["har", "", true], ["räddat", "g9.22.14"], ["dig.”", "g9.22.15"],
      ["Och", "g9.22.16"], ["kvinnan", "g9.22.18 g9.22.19"], ["var", "g9.22.17", true], ["räddad", "g9.22.17"],
      ["från", "g9.22.20"], ["den", "g9.22.23"], ["stunden.", "g9.22.21 g9.22.22"],
    ],
    annotations: [],
  },
  23: {
    english: [
      ["Och", "g9.23.1"], ["när", "g9.23.2", true], ["Jesus", "g9.23.3 g9.23.4"], ["kom", "g9.23.2"], ["in", "g9.23.5", true], ["i", "g9.23.5"],
      ["föreståndarens", "g9.23.8 g9.23.9"], ["hus", "g9.23.6 g9.23.7"],
      ["och", "g9.23.10"], ["såg", "g9.23.11"], ["flöjtblåsarna", "g9.23.12 g9.23.13"],
      ["och", "g9.23.14"], ["den", "g9.23.15"], ["larmande", "g9.23.17"], ["skaran", "g9.23.16"],
    ],
    annotations: [],
  },
  24: {
    english: [
      ["sade", "g9.24.1"], ["han:", "", true], ["”Gå", "g9.24.2"], ["härifrån;", "g9.24.2", true],
      ["ty", "g9.24.4"], ["flickan", "g9.24.6 g9.24.7"], ["är", "", true], ["inte", "g9.24.3"], ["död,", "g9.24.5"],
      ["hon", "g9.24.9", true], ["sover.”", "g9.24.9"], ["Men", "g9.24.8"],
      ["de", "g9.24.11", true], ["skrattade", "g9.24.11"], ["åt", "g9.24.12", true], ["honom.", "g9.24.12"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g9.24.9 g9.24.11", lemma: "καθεύδει … κατεγέλων",
        title: "Och de skrattade åt honom",
        body: "Flöjtblåsarna och larmet är proffs: också den fattigaste familj, säger Mishna, måste hyra *minst två flöjter och en gråterska* till en begravning, och en synagogföreståndares hus skulle vara fullt av dem inom timmen. Så när Jesus säger *hon är inte död, hon sover* **skrattar** sörjarna — κατεγέλων, skrattade ut honom, det enda skratt som riktas mot Jesus någonstans i Nya testamentet. Och det är *expertisens* skratt: dessa människor hanterar döden till vardags; de vet skillnaden mellan ett lik och en tupplur; inget i deras erfarenhet lämnar rum för det han just antytt. Det är värt att notera vilka skeptikerna är i denna scen — inte religionens tvivlare utan dess certifierade utövare, och deras säkerhet är fullkomligt rimlig ända tills den inte är det. Han argumenterar inte; han visar ut dem, går in och tar flickans hand — återigen beröring där beröring orenar, ty ett lik var lagens strängaste orenhetskälla (4 Mos 19:11). Flickan står upp; proffsen hade fel; och ”sover” blir stillsamt kyrkans hela ordförråd för sina döda, i väntan på samma hand.",
      },
    ],
  },
  25: {
    english: [
      ["Men", "g9.25.2"], ["när", "g9.25.1"], ["skaran", "g9.25.4 g9.25.5"],
      ["drivits", "g9.25.3"], ["ut", "g9.25.3", true],
      ["gick", "g9.25.6"], ["han", "", true], ["in", "g9.25.6", true], ["och", "", true], ["tog", "g9.25.7"],
      ["hennes", "g9.25.10"], ["hand,", "g9.25.8 g9.25.9"],
      ["och", "g9.25.11"], ["flickan", "g9.25.13 g9.25.14"], ["steg", "g9.25.12"], ["upp.", "g9.25.12", true],
    ],
    annotations: [],
  },
  26: {
    english: [
      ["Och", "g9.26.1"], ["ryktet", "g9.26.3 g9.26.4"], ["om", "", true], ["detta", "g9.26.5"],
      ["gick", "g9.26.2"], ["ut", "g9.26.2", true], ["i", "g9.26.6"], ["hela", "g9.26.7"], ["den", "g9.26.10"], ["trakten.", "g9.26.8 g9.26.9"],
    ],
    annotations: [],
  },
  27: {
    english: [
      ["Och", "g9.27.1"], ["när", "g9.27.2", true], ["Jesus", "g9.27.4 g9.27.5"], ["gick", "g9.27.2"], ["vidare", "g9.27.2", true], ["därifrån", "g9.27.3"],
      ["följde", "g9.27.6"], ["honom", "", true], ["två", "g9.27.7"], ["blinda,", "g9.27.8"],
      ["som", "", true], ["ropade", "g9.27.9"], ["och", "g9.27.10"], ["sade:", "g9.27.11"],
      ["”Förbarma", "g9.27.12"], ["dig", "g9.27.12", true], ["över", "", true], ["oss,", "g9.27.13"],
      ["Davids", "g9.27.15"], ["son!”", "g9.27.14"],
    ],
    annotations: [],
  },
  28: {
    english: [
      ["Och", "g9.28.2"], ["när", "g9.28.1", true], ["han", "", true], ["kommit", "g9.28.1"],
      ["in", "g9.28.3", true], ["i", "g9.28.3"], ["huset", "g9.28.4 g9.28.5"]
      , ["kom", "g9.28.6"], ["de", "g9.28.8"], ["blinda", "g9.28.9"], ["fram", "g9.28.6", true], ["till", "g9.28.7", true], ["honom,", "g9.28.7"],
      ["och", "g9.28.10"], ["Jesus", "g9.28.13 g9.28.14"], ["säger", "g9.28.11"], ["till", "g9.28.12", true], ["dem:", "g9.28.12"],
      ["”Tror", "g9.28.15"], ["ni", "g9.28.15", true], ["att", "g9.28.16"],
      ["jag", "g9.28.17", true], ["kan", "g9.28.17"], ["göra", "g9.28.19"], ["detta?”", "g9.28.18"],
      ["De", "g9.28.20", true], ["säger", "g9.28.20"], ["till", "g9.28.21", true], ["honom:", "g9.28.21"],
      ["”Ja,", "g9.28.22"], ["Herre.”", "g9.28.23"],
    ],
    annotations: [],
  },
  29: {
    english: [
      ["Då", "g9.29.1"], ["rörde", "g9.29.2"], ["han", "", true], ["vid", "g9.29.2", true], ["deras", "g9.29.5"], ["ögon", "g9.29.3 g9.29.4"],
      ["och", "", true], ["sade:", "g9.29.6"],
      ["”Som", "g9.29.7"], ["ni", "g9.29.10"], ["tror,", "g9.29.8 g9.29.9"],
      ["så", "", true], ["ska", "g9.29.11", true], ["det", "", true], ["ske", "g9.29.11"], ["er.”", "g9.29.12"],
    ],
    annotations: [],
  },
  30: {
    english: [
      ["Och", "g9.30.1"], ["deras", "g9.30.3"], ["ögon", "g9.30.4 g9.30.5"], ["öppnades.", "g9.30.2"],
      ["Och", "g9.30.6"], ["Jesus", "g9.30.9 g9.30.10"], ["varnade", "g9.30.7"], ["dem", "g9.30.8"], ["strängt,", "g9.30.7", true], ["och", "g9.30.11", true], ["sade:", "g9.30.11"],
      ["”Se", "g9.30.12"], ["till", "g9.30.12", true], ["att", "", true], ["ingen", "g9.30.13"], ["får", "g9.30.14", true], ["veta", "g9.30.14"], ["det.”", "", true],
    ],
    annotations: [],
  },
  31: {
    english: [
      ["Men", "g9.31.2"], ["de", "g9.31.1"], ["gick", "g9.31.3"], ["ut", "g9.31.3", true],
      ["och", "", true], ["spred", "g9.31.4"], ["ryktet", "g9.31.4", true], ["om", "", true], ["honom", "g9.31.5"],
      ["i", "g9.31.6"], ["hela", "g9.31.7"], ["den", "g9.31.10"], ["trakten.", "g9.31.8 g9.31.9"],
    ],
    annotations: [],
  },
  32: {
    english: [
      ["Och", "g9.32.2"], ["när", "", true], ["de", "g9.32.1"], ["var", "", true], ["på", "g9.32.3", true], ["väg", "g9.32.3"], ["ut,", "g9.32.3", true],
      ["se,", "g9.32.4"], ["då", "", true], ["förde", "g9.32.5"], ["man", "", true], ["till", "g9.32.6", true], ["honom", "g9.32.6"],
      ["en", "", true], ["stum", "g9.32.7"], ["man,", "g9.32.7", true], ["besatt", "g9.32.8"], ["av", "g9.32.8", true], ["en", "", true], ["demon.", "g9.32.8", true],
    ],
    annotations: [],
  },
  33: {
    english: [
      ["Och", "g9.33.1"], ["när", "g9.33.2", true], ["demonen", "g9.33.3 g9.33.4"],
      ["drivits", "g9.33.2"], ["ut", "g9.33.2", true],
      ["talade", "g9.33.5"], ["den", "g9.33.6"], ["stumme.", "g9.33.7"],
      ["Och", "g9.33.8"], ["skarorna", "g9.33.10 g9.33.11"], ["förundrades", "g9.33.9"],
      ["och", "g9.33.12", true], ["sade:", "g9.33.12"],
      ["”Aldrig", "g9.33.13"], ["har", "", true], ["något", "", true], ["sådant", "g9.33.15"],
      ["setts", "g9.33.14"], ["i", "g9.33.16"], ["Israel.”", "g9.33.17 g9.33.18"],
    ],
    annotations: [],
  },
  34: {
    english: [
      ["Men", "g9.34.2"], ["fariseerna", "g9.34.1 g9.34.3"], ["sade:", "g9.34.4"],
      ["”Med", "g9.34.5"], ["demonernas", "g9.34.8 g9.34.9"], ["furste", "g9.34.6 g9.34.7"],
      ["driver", "g9.34.10"], ["han", "", true], ["ut", "g9.34.10", true], ["demonerna.”", "g9.34.11 g9.34.12"],
    ],
    annotations: [],
  },
  35: {
    english: [
      ["Och", "g9.35.1"], ["Jesus", "g9.35.3 g9.35.4"], ["gick", "g9.35.2"], ["omkring", "g9.35.2", true],
      ["i", "", true], ["alla", "g9.35.7"], ["städerna", "g9.35.5 g9.35.6"], ["och", "g9.35.8"], ["byarna,", "g9.35.9 g9.35.10"],
      ["undervisade", "g9.35.11"], ["i", "g9.35.12"], ["deras", "g9.35.15"], ["synagogor", "g9.35.13 g9.35.14"],
      ["och", "g9.35.16"], ["förkunnade", "g9.35.17"], ["evangeliet", "g9.35.18 g9.35.19"],
      ["om", "g9.35.20", true], ["riket,", "g9.35.20 g9.35.21"],
      ["och", "g9.35.22"], ["botade", "g9.35.23"], ["varje", "g9.35.24"], ["sjukdom", "g9.35.25"],
      ["och", "g9.35.26"], ["varje", "g9.35.27"], ["krämpa.", "g9.35.28"],
    ],
    annotations: [],
  },
  36: {
    english: [
      ["Och", "g9.36.2"], ["när", "g9.36.1", true], ["han", "", true], ["såg", "g9.36.1"], ["skarorna", "g9.36.3 g9.36.4"]
      , ["grep", "g9.36.5", true], ["medlidandet", "g9.36.5"], ["honom", "", true], ["i", "", true], ["det", "", true], ["innersta,", "g9.36.5", true],
      ["ty", "g9.36.8"], ["de", "g9.36.9", true], ["var", "g9.36.9"], ["illa", "g9.36.10", true], ["medfarna", "g9.36.10"],
      ["och", "g9.36.11"], ["nedkastade,", "g9.36.12"],
      ["som", "g9.36.13"], ["får", "g9.36.14"], ["utan", "g9.36.15 g9.36.16"], ["herde.", "g9.36.17"],
    ],
    annotations: [],
  },
  37: {
    english: [
      ["Då", "g9.37.1"], ["säger", "g9.37.2"], ["han", "", true], ["till", "g9.37.3", true], ["sina", "g9.37.5"], ["lärjungar:", "g9.37.3 g9.37.4"],
      ["”Skörden", "g9.37.6 g9.37.7 g9.37.8"], ["är", "", true], ["stor,", "g9.37.9"],
      ["men", "g9.37.11"], ["arbetarna", "g9.37.10 g9.37.12"], ["få;", "g9.37.13"],
    ],
    annotations: [],
  },
  38: {
    english: [
      ["be", "g9.38.1"], ["därför", "g9.38.2"], ["skördens", "g9.38.5 g9.38.6"], ["Herre", "g9.38.3 g9.38.4"],
      ["att", "g9.38.7"], ["han", "", true], ["driver", "g9.38.8"], ["ut", "g9.38.8", true], ["arbetare", "g9.38.9"],
      ["till", "g9.38.10"], ["sin", "g9.38.13"], ["skörd.”", "g9.38.11 g9.38.12"],
    ],
    annotations: [
      {
        kind: "reading", refs: "g9.36.5 g9.38.1 g9.38.8", lemma: "ἐσπλαγχνίσθη … δεήθητε … ἐκβάλῃ",
        title: "Inälvsverbet, och en farlig bön",
        body: "Kapitlet som började med en bår slutar med en summering och en känsla. Känslan först: **ἐσπλαγχνίσθη**, av σπλάγχνα, de inre organen — tarmarna, magen, platsen där första århundradets människor förlade stark känsla. Svenskans ”medlidande” har blivit abstrakt; grekiskan säger att åsynen av skarorna träffade honom *någonstans kroppsligt*. Och det han såg var inte deras sjukdom denna gång utan deras tillstånd: ἐσκυλμένοι καὶ ἐρριμμένοι — *illa medfarna och nedkastade*, det andra ordet används annars om ting som slängts och lämnats liggande. ”Får utan herde” är ingen vykortsbild; i 4 Mos 27:17 och Hesekiel 34 är det ett *åtal* — Israel har herdar, kungar och präster och experter, och fåren är i detta skick ändå. Sedan den märkliga instruktionen. Inför ett värkande överskott av nöd säger Jesus inte *organisera* eller ens *gå*; han säger **be** — δεήθητε, det starka bönfallandets verb — be skördens Herre att *driva ut* arbetare, och verbet är ἐκβάλλω, samma grova ord detta kapitel just använt om att driva ut demoner, som måste arbetarna knuffas genom dörren. Den som någonsin sett på världens smärta och frågat *varför gör Gud ingenting* står mitt i denna vers — och bör veta hur den slutar: kapitel 10 öppnar med att de som bad bönen blir sända. Det är fällan, och den verkar helt avsiktlig. Be denna bön och du har anmält dig som dess svar.",
      },
    ],
  },
};
