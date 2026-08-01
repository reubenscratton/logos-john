// Matteus 11 — svensk översättning & annotationer.
// english-fältet håller SVENSKA tokens, alignerade mot samma g-id:n.

export const CONTENT = {
  1: {
    english: [
      ["Och", "g11.1.1"], ["det", "g11.1.2", true], ["hände,", "g11.1.2"], ["när", "g11.1.3"],
      ["Jesus", "g11.1.5 g11.1.6"], ["avslutat", "g11.1.4"],
      ["undervisningen", "g11.1.7"], ["av", "", true], ["sina", "g11.1.11"], ["tolv", "g11.1.9"], ["lärjungar,", "g11.1.8 g11.1.10"],
      ["att", "", true], ["han", "g11.1.12", true], ["drog", "g11.1.12"], ["vidare", "g11.1.12", true], ["därifrån", "g11.1.13"],
      ["för", "g11.1.14", true], ["att", "g11.1.14"], ["undervisa", "g11.1.15"], ["och", "g11.1.16"], ["förkunna", "g11.1.17"],
      ["i", "g11.1.18"], ["deras", "g11.1.21"], ["städer.", "g11.1.19 g11.1.20"],
    ],
    annotations: [],
  },
  2: {
    english: [
      ["Men", "g11.2.2"], ["Johannes,", "g11.2.1 g11.2.3"], ["som", "", true], ["i", "g11.2.5"], ["fängelset", "g11.2.6 g11.2.7"],
      ["hörde", "g11.2.4"], ["om", "g11.2.8", true], ["Kristi", "g11.2.10 g11.2.11"], ["gärningar,", "g11.2.8 g11.2.9"],
      ["sände", "g11.2.12"], ["bud", "g11.2.12", true], ["genom", "g11.2.13"], ["sina", "g11.2.16"], ["lärjungar", "g11.2.14 g11.2.15"],
    ],
    annotations: [],
  },
  3: {
    english: [
      ["och", "g11.3.1", true], ["sade", "g11.3.1"], ["till", "g11.3.2", true], ["honom:", "g11.3.2"],
      ["”Är", "g11.3.4"], ["du", "g11.3.3"], ["den", "g11.3.5"], ["som", "g11.3.6", true], ["ska", "", true], ["komma,", "g11.3.6"],
      ["eller", "g11.3.7"], ["ska", "g11.3.9", true], ["vi", "", true], ["vänta", "g11.3.9"], ["på", "", true], ["en", "g11.3.8", true], ["annan?”", "g11.3.8"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g11.3.4 g11.3.9", lemma: "Σὺ εἶ ὁ ἐρχόμενος;",
        title: "Den som intygade tvivlar",
        body: "Kom ihåg vem som frågar. Johannes är mannen som pekade ut Jesus vid Jordan, som protesterade *jag behöver döpas av dig*, som satsade hela sin profetgärning på identifikationen. Nu sitter han i Herodes fästning Machaerus, gripen för att ha talat sanning, och rapporterna som når hans cell stämmer inte med den arbetsbeskrivning han själv utropat: han hade utlovat en yxa vid roten, en kastskovel, eld — och nyheterna handlar om botade spetälska och middagsbjudningar. Så den störste av kvinna född (v. 11 — Jesu egna ord) sänder frågan varje ärlig troende förr eller senare ställer i någon form: **har jag fattat fel?** Lägg märke till vad evangeliet *inte* gör med frågan. Det tystar den inte (scenen finns bevarad i två evangelier); det läxar inte upp den; och Jesu omdöme om frågaren, avgivet i samma stund som budbärarna vänder sig om, är inte besvikelse utan det högsta beröm han någonsin ger någon. Tvivlet är i denna text inte trons motsats; det är något tron passerar igenom när bevisen anländer i en annan form än löftet tycktes ha. Om detta projekt har ett skyddshelgon sitter han i den cellen.",
      },
    ],
  },
  4: {
    english: [
      ["Och", "g11.4.1"], ["Jesus", "g11.4.3 g11.4.4"], ["svarade", "g11.4.2"], ["dem:", "g11.4.5 g11.4.6"],
      ["”Gå", "g11.4.7"], ["och", "", true], ["berätta", "g11.4.8"], ["för", "g11.4.9", true], ["Johannes", "g11.4.9"],
      ["vad", "g11.4.10"], ["ni", "g11.4.11", true], ["hör", "g11.4.11"], ["och", "g11.4.12"], ["ser:", "g11.4.13"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["blinda", "g11.5.1"], ["ser", "g11.5.2"], ["igen", "g11.5.2", true],
      ["och", "g11.5.3"], ["lama", "g11.5.4"], ["går,", "g11.5.5"],
      ["spetälska", "g11.5.6"], ["görs", "g11.5.7", true], ["rena", "g11.5.7"],
      ["och", "g11.5.8"], ["döva", "g11.5.9"], ["hör,", "g11.5.10"],
      ["och", "g11.5.11"], ["döda", "g11.5.12"], ["väcks", "g11.5.13", true], ["upp", "g11.5.13"],
      ["och", "g11.5.14"], ["fattiga", "g11.5.15"], ["får", "g11.5.16", true], ["höra", "", true], ["goda", "g11.5.16"], ["nyheter;", "g11.5.16", true],
    ],
    annotations: [],
  },
  6: {
    english: [
      ["och", "g11.6.1"], ["salig", "g11.6.2"], ["är", "g11.6.3"], ["den", "g11.6.4 g11.6.5"], ["som", "", true],
      ["inte", "g11.6.6"], ["kommer", "g11.6.7", true], ["på", "g11.6.7", true], ["fall", "g11.6.7"],
      ["för", "g11.6.8", true], ["min", "g11.6.9"], ["skull.”", "", true],
    ],
    annotations: [
      {
        kind: "concept", refs: "g11.5.16 g11.6.7", lemma: "πτωχοὶ εὐαγγελίζονται … μὴ σκανδαλισθῇ",
        title: "Svaret som lämnar fängelsedörren stängd",
        body: "Jesus svarar inte *ja*. Han svarar med en lista — och listan är Skrift: blinda som ser, lama som går, döva som hör, döda som väcks, fattiga som får höra goda nyheter är Jesajas porträtt av åldern då Gud äntligen kommer (Jes 35:5-6; 26:19; 61:1). Johannes skulle ha uppfattat varje anspelning. Men han skulle också ha uppfattat **utelämningen**, ty Jesaja 61 fortsätter: *…att förkunna frihet för de fångna, och fängelsets öppnande för de bundna* — den enda sats Jesus hoppar över, talande till budbärare som ska gå tillbaka till ett fängelse. Det är vad slutsaligprisningen är till för, och den är riktad till Johannes personligen: **salig är den som inte kommer på fall för min skull** — σκανδαλισθῇ, snubblar på stötestenen av en Gud som gör under *och inte gör det enda du behöver*. Svaret, avkodat: *åldern har verkligen börjat; bevisen är verkliga; och din dörr förblir stängd, och jag tänker inte låtsas något annat; salig är du om du kan bära det*. Johannes avrättades i det fängelset. Var och en som bett vid en sjukhussäng vet exakt vilken sats i Jesaja som förblev ouppfylld för dem, och detta stycke är evangeliets ärligaste erkännande av att rikets *redan* och dess *ännu inte* kan löpa rakt genom en enda människas cell.",
      },
    ],
  },
  7: {
    english: [
      ["Och", "g11.7.2"], ["medan", "g11.7.3", true], ["de", "g11.7.1"], ["gick", "g11.7.3"], ["sin", "", true], ["väg", "", true],
      ["började", "g11.7.4"], ["Jesus", "g11.7.5 g11.7.6"], ["tala", "g11.7.7"],
      ["till", "g11.7.8", true], ["skarorna", "g11.7.8 g11.7.9"], ["om", "g11.7.10"], ["Johannes:", "g11.7.11"],
      ["”Vad", "g11.7.12"], ["gick", "g11.7.13"], ["ni", "g11.7.13", true], ["ut", "g11.7.13", true],
      ["i", "g11.7.14"], ["öknen", "g11.7.15 g11.7.16"], ["för", "g11.7.17", true], ["att", "", true], ["skåda?", "g11.7.17"],
      ["Ett", "", true], ["strå", "g11.7.18"], ["som", "", true], ["vajar", "g11.7.21"], ["för", "g11.7.19"], ["vinden?", "g11.7.20"],
    ],
    annotations: [],
  },
  8: {
    english: [
      ["Eller", "g11.8.1"], ["vad", "g11.8.2"], ["gick", "g11.8.3"], ["ni", "g11.8.3", true], ["ut", "g11.8.3", true], ["för", "g11.8.4", true], ["att", "", true], ["se?", "g11.8.4"],
      ["En", "", true], ["man", "g11.8.5"], ["klädd", "g11.8.8"], ["i", "g11.8.6"], ["mjuka", "g11.8.7"], ["kläder?", "g11.8.7", true],
      ["Se,", "g11.8.9"], ["de", "g11.8.10"], ["som", "g11.8.13", true], ["bär", "g11.8.13"], ["mjuka", "g11.8.11 g11.8.12"], ["kläder", "g11.8.12", true],
      ["finns", "", true], ["i", "g11.8.14"], ["kungarnas", "g11.8.17 g11.8.18"], ["hus.", "g11.8.15 g11.8.16"],
    ],
    annotations: [],
  },
  9: {
    english: [
      ["Men", "g11.9.1"], ["varför", "g11.9.2"], ["gick", "g11.9.3"], ["ni", "g11.9.3", true], ["ut?", "g11.9.3", true],
      ["För", "g11.9.5", true], ["att", "", true], ["se", "g11.9.5"], ["en", "", true], ["profet?", "g11.9.4"],
      ["Ja,", "g11.9.6"], ["jag", "g11.9.7", true], ["säger", "g11.9.7"], ["er", "g11.9.8"], ["—", "", true],
      ["och", "g11.9.9"], ["mer", "g11.9.10"], ["än", "g11.9.10", true], ["en", "", true], ["profet.", "g11.9.11"],
    ],
    annotations: [],
  },
  10: {
    english: [
      ["Det", "g11.10.1", true], ["är", "g11.10.2"], ["om", "g11.10.3"], ["honom", "g11.10.1"], ["det", "g11.10.4", true],
      ["står", "g11.10.5", true], ["skrivet:", "g11.10.5"],
      ["’Se,", "g11.10.6"], ["jag", "g11.10.7"], ["sänder", "g11.10.8"], ["min", "g11.10.11"], ["budbärare", "g11.10.9 g11.10.10"],
      ["framför", "g11.10.12"], ["ditt", "g11.10.14"], ["ansikte,", "g11.10.13"],
      ["han", "g11.10.15", true], ["som", "g11.10.15"], ["ska", "g11.10.16", true], ["bereda", "g11.10.16"], ["din", "g11.10.19"], ["väg", "g11.10.17 g11.10.18"],
      ["framför", "g11.10.20"], ["dig.’", "g11.10.21"],
    ],
    annotations: [],
  },
  11: {
    english: [
      ["Amen,", "g11.11.1"], ["jag", "g11.11.2", true], ["säger", "g11.11.2"], ["er:", "g11.11.3"],
      ["bland", "g11.11.6"], ["dem", "g11.11.7", true], ["som", "", true], ["fötts", "g11.11.7"], ["av", "g11.11.8", true], ["kvinnor", "g11.11.8"],
      ["har", "g11.11.5", true], ["ingen", "g11.11.4"], ["uppstått", "g11.11.5"],
      ["större", "g11.11.9"], ["än", "g11.11.10", true], ["Johannes", "g11.11.10"], ["Döparen;", "g11.11.11 g11.11.12"],
      ["men", "g11.11.14"], ["den", "g11.11.13"], ["minste", "g11.11.15"],
      ["i", "g11.11.16"], ["himlarnas", "g11.11.19 g11.11.20"], ["rike", "g11.11.17 g11.11.18"],
      ["är", "g11.11.23"], ["större", "g11.11.21"], ["än", "g11.11.22", true], ["han.", "g11.11.22"],
    ],
    annotations: [],
  },
  12: {
    english: [
      ["Och", "g11.12.2"], ["från", "g11.12.1"], ["Johannes", "g11.12.5"], ["Döparens", "g11.12.6 g11.12.7"], ["dagar", "g11.12.3 g11.12.4"],
      ["till", "g11.12.8"], ["nu", "g11.12.9"],
      ["lider", "g11.12.14", true], ["himlarnas", "g11.12.12 g11.12.13"], ["rike", "g11.12.10 g11.12.11"], ["våld,", "g11.12.14"],
      ["och", "g11.12.15"], ["våldsmän", "g11.12.16"], ["rycker", "g11.12.17"], ["det", "g11.12.18"], ["till", "g11.12.17", true], ["sig.", "g11.12.17", true],
    ],
    annotations: [
      {
        kind: "translation", refs: "g11.12.14 g11.12.16", lemma: "βιάζεται … βιασταὶ ἁρπάζουσιν",
        title: "Våldsversen — oöversättlig med flit?",
        body: "Vers 12 vilar på ett enda verb, **βιάζεται**, som grekiskan tillåter att läsas på två motsatta sätt. Som *passivum*: riket **lider våld** — angrips — och våldsmän plundrar det; beviset sitter i en fängelsecell, och Herodes svärd ska strax göra poängen slutgiltig. Som *medium*: riket **bryter fram med kraft** — rycker explosivt framåt — och bara de kraftfulla, de som griper med båda händerna, tar det till sig (Lukas parallell, *var och en tränger sig in*, läser så). Grammatikerna kan inte avgöra det; formen är identisk, och översättare har delat sig i tvåtusen år. Det är möjligt att Matteus hörde båda på en gång, ty båda är sanna i just detta kapitel: riket bryter fram (blinda ser, döda uppstår) *och* det misshandlas (dess härold i bojor, dess städer obotfärdiga, dess Messias kallad drinkare). Ett rike som anländer utan arméer, vars Kung kan fängslas och avrättas, är precis den sortens sak som avancerar oemotståndligt och lider våld *samtidigt* — och kanske är en mening som inte kan välja mellan triumf och övergrepp den mest exakta enradshistorik över det som någonsin skrivits.",
      },
    ],
  },
  13: {
    english: [
      ["Ty", "g11.13.2"], ["alla", "g11.13.1"], ["profeterna", "g11.13.3 g11.13.4"],
      ["och", "g11.13.5"], ["lagen", "g11.13.6 g11.13.7"],
      ["profeterade", "g11.13.10"], ["fram", "g11.13.8", true], ["till", "g11.13.8"], ["Johannes;", "g11.13.9"],
    ],
    annotations: [],
  },
  14: {
    english: [
      ["och", "g11.14.1"], ["om", "g11.14.2"], ["ni", "g11.14.3", true], ["vill", "g11.14.3"],
      ["ta", "g11.14.4"], ["emot", "g11.14.4", true], ["det:", "", true],
      ["han", "g11.14.5"], ["är", "g11.14.6"], ["Elia,", "g11.14.7"],
      ["han", "g11.14.8", true], ["som", "g11.14.8"], ["skulle", "g11.14.9"], ["komma.", "g11.14.10"],
    ],
    annotations: [],
  },
  15: {
    english: [
      ["Den", "g11.15.1"], ["som", "g11.15.2", true], ["har", "g11.15.2"], ["öron,", "g11.15.3"], ["han", "", true], ["höre.", "g11.15.4"],
    ],
    annotations: [],
  },
  16: {
    english: [
      ["Men", "g11.16.2"], ["vid", "g11.16.1", true], ["vad", "g11.16.1"], ["ska", "g11.16.3", true], ["jag", "", true], ["likna", "g11.16.3"],
      ["detta", "g11.16.6"], ["släkte?", "g11.16.4 g11.16.5"],
      ["Det", "g11.16.8", true], ["är", "g11.16.8"], ["likt", "g11.16.7"], ["barn", "g11.16.9"],
      ["som", "g11.16.10", true], ["sitter", "g11.16.10"], ["på", "g11.16.11"], ["torgen", "g11.16.12 g11.16.13"],
      ["och", "g11.16.14"], ["ropar", "g11.16.15"], ["till", "g11.16.16", true], ["de", "g11.16.16"], ["andra", "g11.16.17"],
    ],
    annotations: [],
  },
  17: {
    english: [
      ["och", "g11.17.1", true], ["säger:", "g11.17.1"],
      ["’Vi", "g11.17.2", true], ["spelade", "g11.17.2"], ["flöjt", "g11.17.2", true], ["för", "g11.17.3", true], ["er,", "g11.17.3"],
      ["och", "g11.17.4"], ["ni", "g11.17.6", true], ["dansade", "g11.17.6"], ["inte;", "g11.17.5"],
      ["vi", "g11.17.7", true], ["sjöng", "g11.17.7"], ["sorgesång,", "g11.17.7", true],
      ["och", "g11.17.8"], ["ni", "g11.17.10", true], ["klagade", "g11.17.10"], ["inte.’", "g11.17.9"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g11.17.2 g11.19.13 g11.19.23", lemma: "Ηὐλήσαμεν … φάγος καὶ οἰνοπότης … σοφία",
        title: "Barnens lek, och publiken som inget behagar",
        body: "Bilden är två grupper barn på torget, där den ena föreslår lekar den andra vägrar delta i: *vi lekte bröllop — ni ville inte dansa; vi lekte begravning — ni ville inte klaga*. Tillämpat: Johannes kom som en begravning — öken, gräshoppor, fasta — och domen löd *han har en demon*; Människosonen kom som ett bröllop — middagar, vin, vanhedrande gäster — och domen löd **φάγος καὶ οἰνοπότης**, *en frossare och vindrinkare, vän med tullindrivare och syndare* (ett hån så föga smickrande att dess bevarande är en av traditionens små ärlighetsgarantier — ingen kyrka diktade den meningen om sin Herre; i förbigående intygar det också att den historiske Jesus påfallande åt, drack och höll skandalöst sällskap). Diagnosen är tidlös: ett hjärta som bestämt sig för att inte svara kommer alltid att finna fel på budbärarens *stil* — för sträng, för slapp, för märklig, för vanlig. Anklagelserna tar ut varandra och avslöjar därmed sig själva; problemet var aldrig melodin. Därav slutordspråkets axelryckning: **visheten får rätt av sina gärningar** — inte av recensionerna. Vad Johannes gjorde och vad Jesus gjorde ska dömas efter vad det ledde till, en revision som ännu pågår.",
      },
    ],
  },
  18: {
    english: [
      ["Ty", "g11.18.2"], ["Johannes", "g11.18.3"], ["kom,", "g11.18.1"],
      ["och", "", true], ["varken", "g11.18.4"], ["åt", "g11.18.5"], ["eller", "g11.18.6"], ["drack,", "g11.18.7"],
      ["och", "g11.18.8"], ["de", "g11.18.9", true], ["säger:", "g11.18.9"],
      ["’Han", "g11.18.11", true], ["har", "g11.18.11"], ["en", "", true], ["demon.’", "g11.18.10"],
    ],
    annotations: [],
  },
  19: {
    english: [
      ["Människosonen", "g11.19.2 g11.19.3 g11.19.4 g11.19.5"], ["kom,", "g11.19.1"],
      ["och", "", true], ["äter", "g11.19.6"], ["och", "g11.19.7"], ["dricker,", "g11.19.8"],
      ["och", "g11.19.9"], ["de", "g11.19.10", true], ["säger:", "g11.19.10"],
      ["’Se,", "g11.19.11"], ["en", "g11.19.12", true], ["frossare", "g11.19.12 g11.19.13"], ["och", "g11.19.14"], ["vindrinkare,", "g11.19.15"],
      ["vän", "g11.19.17"], ["med", "g11.19.16", true], ["tullindrivare", "g11.19.16"],
      ["och", "g11.19.18"], ["syndare.’", "g11.19.19"],
      ["Och", "g11.19.20"], ["visheten", "g11.19.22 g11.19.23"], ["får", "g11.19.21", true], ["rätt", "g11.19.21"],
      ["av", "g11.19.24"], ["sina", "g11.19.27"], ["gärningar.", "g11.19.25 g11.19.26"],
    ],
    annotations: [],
  },
  20: {
    english: [
      ["Då", "g11.20.1"], ["började", "g11.20.2"], ["han", "", true], ["förebrå", "g11.20.3"],
      ["de", "g11.20.4"], ["städer", "g11.20.5"],
      ["där", "g11.20.6 g11.20.7"], ["de", "g11.20.9"], ["flesta", "g11.20.10"], ["av", "", true], ["hans", "g11.20.12"],
      ["kraftgärningar", "g11.20.11"], ["skett,", "g11.20.8"],
      ["därför", "g11.20.13", true], ["att", "g11.20.13"], ["de", "g11.20.15", true], ["inte", "g11.20.14"], ["omvänt", "g11.20.15"], ["sig:", "g11.20.15", true],
    ],
    annotations: [],
  },
  21: {
    english: [
      ["”Ve", "g11.21.1"], ["dig,", "g11.21.2"], ["Korasin!", "g11.21.3"],
      ["Ve", "g11.21.4"], ["dig,", "g11.21.5"], ["Betsaida!", "g11.21.6"],
      ["Ty", "g11.21.7"], ["om", "g11.21.8"], ["de", "g11.21.14"], ["kraftgärningar", "g11.21.15"],
      ["som", "g11.21.16"], ["skett", "g11.21.17"], ["hos", "g11.21.18"], ["er", "g11.21.19"],
      ["hade", "g11.21.13", true], ["skett", "g11.21.13"],
      ["i", "g11.21.9"], ["Tyros", "g11.21.10"], ["och", "g11.21.11"], ["Sidon,", "g11.21.12"],
      ["skulle", "g11.21.21"], ["de", "g11.21.26", true], ["för", "g11.21.20", true], ["länge", "g11.21.20"], ["sedan", "g11.21.20", true],
      ["ha", "", true], ["omvänt", "g11.21.26"], ["sig", "g11.21.26", true],
      ["i", "g11.21.22"], ["säck", "g11.21.23"], ["och", "g11.21.24"], ["aska.", "g11.21.25"],
    ],
    annotations: [
      {
        kind: "text", refs: "g11.21.3 g11.23.14", lemma: "Χοραζείν … Σοδόμοις",
        title: "Korasin — verop över städer vi aldrig fick se",
        body: "**Korasin** förekommer ingen annanstans i evangelietraditionen: inget under i Korasin berättas i något evangelium, ändå förutsätter denna mening att staden såg *de flesta av hans kraftgärningar*. Den nonchalanta luckan är värd att stanna vid — evangelierna vittnar själva om att de är antologier, inte arkiv (Johannes säger det rent ut: *mycket annat gjorde Jesus… som inte skrivits*). En fabrikör diktar historier som matchar sina poänger; Matteus bevarar en poäng vars historier han inte har. Själva veropet arbetar genom en skandalös jämförelse: **Tyros och Sidon** var profeternas stående hedningastäder, och **Sodom** Bibelns sinnebild för oåterkallelig ondska — och Jesus rangordnar dem alla *över* de fromma sjöstäder som hörde honom predika och förblev orörda. Principen därunder formuleras som rättssalslogik: domen indexeras mot mottaget ljus, inte mot begångna synder. Kapernaums gliring — *upphöjd till himlen? ner till Hades!* — är återbrukad ur Jesajas hån mot Babylon (Jes 14:13-15), imperiets gravskrift fäst på en fiskeby som blott *hyste riket artigt och gjorde ingenting*. Notera vart kapitlet går härnäst: rakt från dessa verop in i *jag prisar dig, Fader* — som om strategins misslyckande på något vis låg inuti planen.",
      },
    ],
  },
  22: {
    english: [
      ["Men", "g11.22.1"], ["jag", "g11.22.2", true], ["säger", "g11.22.2"], ["er:", "g11.22.3"],
      ["det", "g11.22.8", true], ["ska", "", true], ["bli", "g11.22.8"], ["drägligare", "g11.22.7"],
      ["för", "g11.22.4", true], ["Tyros", "g11.22.4"], ["och", "g11.22.5"], ["Sidon", "g11.22.6"],
      ["på", "g11.22.9"], ["domens", "g11.22.11"], ["dag", "g11.22.10"],
      ["än", "g11.22.12"], ["för", "g11.22.13", true], ["er.", "g11.22.13"],
    ],
    annotations: [],
  },
  23: {
    english: [
      ["Och", "g11.23.1"], ["du,", "g11.23.2"], ["Kafarnaum", "g11.23.3"], ["—", "", true],
      ["ska", "g11.23.7", true], ["du", "", true], ["upphöjas", "g11.23.7"],
      ["till", "g11.23.5"], ["himlen?", "g11.23.6"], ["Nej:", "g11.23.4", true],
      ["du", "g11.23.10", true], ["ska", "", true], ["fara", "g11.23.10"], ["ner", "g11.23.10", true],
      ["till", "g11.23.8"], ["Hades.", "g11.23.9"],
      ["Ty", "g11.23.11"], ["om", "g11.23.12"], ["de", "g11.23.16"], ["kraftgärningar", "g11.23.17"],
      ["som", "g11.23.18"], ["skett", "g11.23.19"], ["hos", "g11.23.20"], ["dig", "g11.23.21"],
      ["hade", "g11.23.15", true], ["skett", "g11.23.15"],
      ["i", "g11.23.13"], ["Sodom,", "g11.23.14"],
      ["skulle", "g11.23.23"], ["det", "g11.23.22", true], ["ha", "", true], ["stått", "g11.23.22"], ["kvar", "g11.23.22", true],
      ["till", "g11.23.24"], ["denna", "g11.23.25", true], ["dag.", "g11.23.25 g11.23.26"],
    ],
    annotations: [],
  },
  24: {
    english: [
      ["Men", "g11.24.1"], ["jag", "g11.24.2", true], ["säger", "g11.24.2"], ["er:", "g11.24.3"],
      ["det", "g11.24.8", true], ["ska", "", true], ["bli", "g11.24.8"], ["drägligare", "g11.24.7"],
      ["för", "g11.24.4", true], ["Sodoms", "g11.24.6"], ["land", "g11.24.5"],
      ["på", "g11.24.9"], ["domens", "g11.24.11"], ["dag", "g11.24.10"],
      ["än", "g11.24.12"], ["för", "g11.24.13", true], ["dig.”", "g11.24.13"],
    ],
    annotations: [],
  },
  25: {
    english: [
      ["Vid", "g11.25.1"], ["den", "g11.25.2"], ["tiden", "g11.25.3 g11.25.4"],
      ["tog", "g11.25.5", true], ["Jesus", "g11.25.6 g11.25.7"], ["till", "g11.25.5", true], ["orda", "g11.25.5"], ["och", "", true], ["sade:", "g11.25.8"],
      ["”Jag", "g11.25.9", true], ["prisar", "g11.25.9"], ["dig,", "g11.25.10"], ["Fader,", "g11.25.11"],
      ["himlens", "g11.25.13 g11.25.14"], ["och", "g11.25.15"], ["jordens", "g11.25.16 g11.25.17"], ["Herre,", "g11.25.12"],
      ["att", "g11.25.18"], ["du", "g11.25.19", true], ["dolt", "g11.25.19"], ["detta", "g11.25.20"],
      ["för", "g11.25.21"], ["visa", "g11.25.22"], ["och", "g11.25.23"], ["förståndiga,", "g11.25.24"],
      ["och", "g11.25.25"], ["uppenbarat", "g11.25.26"], ["det", "g11.25.27"], ["för", "g11.25.28", true], ["spädbarn;", "g11.25.28"],
    ],
    annotations: [],
  },
  26: {
    english: [
      ["ja,", "g11.26.1"], ["Fader,", "g11.26.2 g11.26.3"], ["ty", "g11.26.4"], ["så", "g11.26.5"],
      ["var", "g11.26.7"], ["ditt", "g11.26.9", true], ["välbehag", "g11.26.6"],
      ["inför", "g11.26.8"], ["dig.", "g11.26.9"],
    ],
    annotations: [],
  },
  27: {
    english: [
      ["Allt", "g11.27.1"], ["har", "", true], ["överlämnats", "g11.27.3"],
      ["åt", "g11.27.2", true], ["mig", "g11.27.2"], ["av", "g11.27.4"], ["min", "g11.27.7"], ["Fader,", "g11.27.5 g11.27.6"],
      ["och", "g11.27.8"], ["ingen", "g11.27.9"], ["känner", "g11.27.10"],
      ["Sonen", "g11.27.11 g11.27.12"],
      ["utom", "g11.27.13 g11.27.14"], ["Fadern,", "g11.27.15 g11.27.16"],
      ["och", "g11.27.17", true], ["ingen", "g11.27.20", true], ["känner", "g11.27.21"], ["heller", "g11.27.17"],
      ["Fadern", "g11.27.18 g11.27.19"]
      , ["utom", "g11.27.22 g11.27.23"], ["Sonen", "g11.27.24 g11.27.25"], ["—", "", true],
      ["och", "g11.27.26"], ["den", "g11.27.27", true], ["som", "g11.27.27"],
      ["Sonen", "g11.27.30 g11.27.31"], ["vill", "g11.27.28 g11.27.29"], ["uppenbara", "g11.27.32"], ["honom", "", true], ["för.", "", true],
    ],
    annotations: [
      {
        kind: "text", refs: "g11.27.12 g11.27.19", lemma: "οὐδεὶς ἐπιγινώσκει τὸν Υἱὸν εἰ μὴ ὁ Πατήρ",
        title: "Den johanneiska blixten",
        body: "Forskare har länge kallat denna vers **den johanneiska blixten**, ty den låter som en mening som vandrat in från Johannesevangeliet — *ingen känner Sonen utom Fadern, och ingen känner Fadern utom Sonen* är, nästan ord för ord, det ömsesidiga kännandets språk som Johannes bygger hela kapitel av (Joh 10:15, 17:25). Ändå står den här hos Matteus, hämtad ur det ordstoff han delar med Lukas (Luk 10:22) — vilket spelar roll av ett bestämt skäl: Jesu exklusiva, kosmiska självförståelse sägs ofta vara en *sen* utveckling, Johannes teologiska broderi på ett anspråkslösare original. Denna vers är det starkaste enskilda belägget för motsatsen: anspråket ligger också i ordtraditionens äldsta skikt. Notera även placeringen, som ingen som diktade en triumf skulle välja: blixten slår ner omedelbart efter missionens *misslyckande* — obotfärdiga städer, en fängslad härold — och inuti en bön som kallar själva misslyckandet Faderns εὐδοκία, hans välbehag, dolt för de meriterade och uppenbarat för spädbarn. De synoptiska evangeliernas högsta anspråk uttalas vid berättelsens hittills lägsta punkt. Vad man än sluter sig till om det kan det inte arkiveras som sen legend utan att hela detta kapitel arkiveras med.",
      },
    ],
  },
  28: {
    english: [
      ["Kom", "g11.28.1"], ["till", "g11.28.2"], ["mig,", "g11.28.3"],
      ["alla", "g11.28.4"], ["ni", "g11.28.5"], ["som", "g11.28.6", true], ["arbetar", "g11.28.6"],
      ["och", "g11.28.7"], ["är", "g11.28.8", true], ["tungt", "g11.28.8", true], ["lastade,", "g11.28.8"],
      ["så", "g11.28.9", true], ["ska", "g11.28.10", true], ["jag", "g11.28.9"], ["ge", "g11.28.10", true], ["er", "g11.28.11"], ["vila.", "g11.28.10"],
    ],
    annotations: [],
  },
  29: {
    english: [
      ["Ta", "g11.29.1"], ["mitt", "g11.29.4"], ["ok", "g11.29.2 g11.29.3"],
      ["på", "g11.29.5"], ["er", "g11.29.6"],
      ["och", "g11.29.7"], ["lär", "g11.29.8"], ["av", "g11.29.9"], ["mig,", "g11.29.10"],
      ["ty", "g11.29.11"], ["jag", "g11.29.13", true], ["är", "g11.29.13"], ["mild", "g11.29.12"],
      ["och", "g11.29.14"], ["ödmjuk", "g11.29.15"], ["i", "g11.29.16", true], ["hjärtat,", "g11.29.16 g11.29.17"],
      ["och", "g11.29.18"], ["ni", "g11.29.19", true], ["ska", "", true], ["finna", "g11.29.19"], ["vila", "g11.29.20"],
      ["för", "g11.29.21", true], ["era", "g11.29.23"], ["själar;", "g11.29.21 g11.29.22"],
    ],
    annotations: [],
  },
  30: {
    english: [
      ["ty", "g11.30.2"], ["mitt", "g11.30.4"], ["ok", "g11.30.1 g11.30.3"],
      ["är", "g11.30.11"], ["milt,", "g11.30.5"],
      ["och", "g11.30.6"], ["min", "g11.30.9"], ["börda", "g11.30.7 g11.30.8"],
      ["är", "", true], ["lätt.", "g11.30.10"],
    ],
    annotations: [
      {
        kind: "reading", refs: "g11.28.1 g11.29.2 g11.30.5", lemma: "Δεῦτε πρός με … ὁ ζυγός μου χρηστὸς",
        title: "Inbjudan på kapitlets botten",
        body: "Följ kapitlets nedstigning för att se var detta landar. Johannes tvivlar; städerna rycker på axlarna; släktet hånar båda budbärarna; veropen faller — och sedan, ur det vraket, evangeliernas mildaste mening: **kom till mig, alla ni som arbetar och är tungt lastade**. De tilltalade är inte de framgångsrika; κοπιῶντες är de utslitna, πεφορτισμένοι de *nedlastade* — i sammanhanget framför allt de som dignar under religionen själv sådan de skriftlärda byggt den (23:4 använder samma ord om de *tunga bördor* experterna binder på axlar). Erbjudandet arbetar genom en okparadox. Rabbinerna talade vackert om att ta på sig *Torans ok*, *himmelrikets ok*; Jesus erbjuder inte oklöshet — ett ok är alltjämt en arbetssele, och hans skola har alltjämt en läroplan (*lär av mig*) — han erbjuder **ett annat ok**, och beskriver läraren i stället för kursplanen: πραΰς, mild, och ταπεινὸς τῇ καρδίᾳ, *ödmjuk i hjärtat* — det enda ställe i alla evangelierna där Jesus beskriver sitt eget hjärta. Den utlovade **vilan för era själar** är hämtad ur Jeremia 6:16, där Gud erbjuder den vid vägskälet *och folket svarar: vi vill inte vandra på den*. Detta kapitel har just spelat upp Jeremias scen på nytt — erbjudandet, vägran — och utfärdar erbjudandet ändå. Och χρηστός betyder inte ”lätt”: det betyder *milt* — ordet för välsittande seldon som inte skaver. Inte: inget ska begäras. Utan: det som begärs ska formas efter den som bär, av en snickare som enligt traditionen gjorde ok.",
      },
    ],
  },
};
