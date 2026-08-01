// Matteus 5 — svensk översättning & annotationer.
// english-fältet håller SVENSKA tokens, alignerade mot samma g-id:n.

export const CONTENT = {
  1: {
    english: [
      ["När", "g5.1.1", true], ["han", "", true], ["såg", "g5.1.1"], ["skarorna", "g5.1.3 g5.1.4"],
      ["gick", "g5.1.5"], ["han", "", true], ["upp", "g5.1.5", true], ["på", "g5.1.6"], ["berget;", "g5.1.7 g5.1.8"],
      ["och", "g5.1.9"], ["när", "g5.1.10", true], ["han", "g5.1.11"], ["satt", "g5.1.10"], ["sig", "g5.1.10", true],
      ["kom", "g5.1.12"], ["hans", "g5.1.16"], ["lärjungar", "g5.1.14 g5.1.15"], ["fram", "g5.1.12", true], ["till", "g5.1.13", true], ["honom;", "g5.1.13"],
    ],
    annotations: [],
  },
  2: {
    english: [
      ["och", "g5.2.1"], ["han", "", true], ["öppnade", "g5.2.2"], ["sin", "g5.2.5"], ["mun", "g5.2.3 g5.2.4"],
      ["och", "", true], ["undervisade", "g5.2.6"], ["dem", "g5.2.7"], ["och", "", true], ["sade:", "g5.2.8"],
    ],
    annotations: [],
  },
  3: {
    english: [
      ["”Saliga", "g5.3.1"], ["är", "", true], ["de", "g5.3.2"], ["i", "g5.3.4", true], ["anden", "g5.3.5"], ["fattiga,", "g5.3.3"],
      ["ty", "g5.3.6"], ["deras", "g5.3.7"], ["är", "g5.3.8"], ["himlarnas", "g5.3.11 g5.3.12"], ["rike.", "g5.3.9 g5.3.10"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g5.3.1 g5.3.3 g5.3.5", lemma: "μακάριοι οἱ πτωχοὶ",
        title: "Makarios — gratulationer till alla fel människor",
        body: "**Μακάριος** är inget kyrkord. Det är grekiskans vardagliga lyckönskning — *lycklig, avundsvärd, att gratulera* — ordet för människor vars liv synbart lyckats. Just det är chocken: Jesus ställer sig upp och gratulerar de **i anden fattiga** (πτωχός är tiggarens ord — utblottad, inte bara anspråkslös), de sörjande, de ödmjuka, de förföljda — varje kategori som antiken (och vår tid) sorterar under *icke avundsvärd*. Lägg märke till två strukturella fakta. Listan är **beskrivning, inte föreskrift**: inga inträdeskrav att prestera, utan en kungörelse om vilka det annalkande riket finner först — läs dem som befallningar och du kommer att försöka sörja med flit. Och tempusen ramar in allt: första och åttonde saligprisningen säger att riket **är** deras, presens, medan allt däremellan står i futurum — gratulationerna utfärdas *nu*, mitt i sorgen, i kraft av det som kommer. Det är antingen det vackraste nonsens som yttrats på en bergssluttning, eller världens faktiska bokföring, uppläst i förväg.",
      },
    ],
  },
  4: {
    english: [
      ["Saliga", "g5.4.1"], ["är", "", true], ["de", "g5.4.2"], ["som", "", true], ["sörjer,", "g5.4.3"],
      ["ty", "g5.4.4"], ["de", "g5.4.5"], ["ska", "", true], ["bli", "g5.4.6", true], ["tröstade.", "g5.4.6"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["Saliga", "g5.5.1"], ["är", "", true], ["de", "g5.5.2"], ["ödmjuka,", "g5.5.3"],
      ["ty", "g5.5.4"], ["de", "g5.5.5"], ["ska", "", true], ["ärva", "g5.5.6"], ["jorden.", "g5.5.7 g5.5.8"],
    ],
    annotations: [],
  },
  6: {
    english: [
      ["Saliga", "g5.6.1"], ["är", "", true], ["de", "g5.6.2"], ["som", "", true], ["hungrar", "g5.6.3"], ["och", "g5.6.4"], ["törstar", "g5.6.5"], ["efter", "g5.6.6", true], ["rättfärdighet,", "g5.6.7"],
      ["ty", "g5.6.8"], ["de", "g5.6.9"], ["ska", "", true], ["bli", "", true], ["mättade.", "g5.6.10"],
    ],
    annotations: [],
  },
  7: {
    english: [
      ["Saliga", "g5.7.1"], ["är", "", true], ["de", "g5.7.2"], ["barmhärtiga,", "g5.7.3"],
      ["ty", "g5.7.4"], ["de", "g5.7.5"], ["ska", "", true], ["möta", "g5.7.6", true], ["barmhärtighet.", "g5.7.6"],
    ],
    annotations: [],
  },
  8: {
    english: [
      ["Saliga", "g5.8.1"], ["är", "", true], ["de", "g5.8.2"], ["renhjärtade,", "g5.8.3 g5.8.4 g5.8.5"],
      ["ty", "g5.8.6"], ["de", "g5.8.7"], ["ska", "", true], ["se", "g5.8.10"], ["Gud.", "g5.8.8 g5.8.9"],
    ],
    annotations: [],
  },
  9: {
    english: [
      ["Saliga", "g5.9.1"], ["är", "", true], ["de", "g5.9.2"], ["som", "", true], ["stiftar", "g5.9.3", true], ["frid,", "g5.9.3"],
      ["ty", "g5.9.4"], ["de", "g5.9.5"], ["ska", "", true], ["kallas", "g5.9.8"], ["Guds", "g5.9.7"], ["söner.", "g5.9.6"],
    ],
    annotations: [],
  },
  10: {
    english: [
      ["Saliga", "g5.10.1"], ["är", "", true], ["de", "g5.10.2"], ["som", "", true], ["förföljts", "g5.10.3"],
      ["för", "g5.10.4"], ["rättfärdighetens", "g5.10.5"], ["skull,", "g5.10.4", true],
      ["ty", "g5.10.6"], ["deras", "g5.10.7"], ["är", "g5.10.8"], ["himlarnas", "g5.10.11 g5.10.12"], ["rike.", "g5.10.9 g5.10.10"],
    ],
    annotations: [],
  },
  11: {
    english: [
      ["Saliga", "g5.11.1"], ["är", "g5.11.2"], ["ni", "g5.11.2", true], ["när", "g5.11.3"], ["man", "", true], ["smädar", "g5.11.4"], ["er", "g5.11.5"],
      ["och", "g5.11.6"], ["förföljer", "g5.11.7"], ["er", "", true], ["och", "g5.11.8"], ["ljugande", "g5.11.14"], ["säger", "g5.11.9"], ["allt", "g5.11.10"], ["ont", "g5.11.11"], ["om", "g5.11.12"], ["er", "g5.11.13"],
      ["för", "g5.11.15"], ["min", "g5.11.16"], ["skull.", "g5.11.15", true],
    ],
    annotations: [],
  },
  12: {
    english: [
      ["Gläd", "g5.12.1"], ["er", "g5.12.1", true], ["och", "g5.12.2"], ["jubla,", "g5.12.3"],
      ["ty", "g5.12.4"], ["er", "g5.12.7"], ["lön", "g5.12.5 g5.12.6"], ["är", "", true], ["stor", "g5.12.8"], ["i", "g5.12.9"], ["himlarna;", "g5.12.10 g5.12.11"],
      ["ty", "g5.12.13"], ["så", "g5.12.12"], ["förföljde", "g5.12.14"], ["man", "", true], ["profeterna", "g5.12.15 g5.12.16"], ["före", "g5.12.17 g5.12.18"], ["er.", "g5.12.19"],
    ],
    annotations: [],
  },
  13: {
    english: [
      ["Ni", "g5.13.1"], ["är", "g5.13.2"], ["jordens", "g5.13.5 g5.13.6"], ["salt;", "g5.13.3 g5.13.4"],
      ["men", "g5.13.8"], ["om", "g5.13.7"], ["saltet", "g5.13.9 g5.13.10"], ["mister", "g5.13.11", true], ["sin", "", true], ["sälta,", "g5.13.11"],
      ["med", "g5.13.12"], ["vad", "g5.13.13"], ["ska", "", true], ["det", "", true], ["saltas?", "g5.13.14"],
      ["Det", "", true], ["duger", "g5.13.17"], ["till", "g5.13.15"], ["intet", "g5.13.16"], ["mer", "g5.13.18"],
      ["än", "g5.13.19 g5.13.20"], ["att", "", true], ["kastas", "g5.13.21"], ["ut", "g5.13.22"],
      ["och", "", true], ["trampas", "g5.13.23"], ["av", "g5.13.24"], ["människorna.", "g5.13.25 g5.13.26"],
    ],
    annotations: [],
  },
  14: {
    english: [
      ["Ni", "g5.14.1"], ["är", "g5.14.2"], ["världens", "g5.14.5 g5.14.6"], ["ljus.", "g5.14.3 g5.14.4"],
      ["En", "", true], ["stad", "g5.14.9"], ["som", "g5.14.13", true], ["ligger", "g5.14.13"], ["på", "g5.14.11"], ["ett", "", true], ["berg", "g5.14.12"], ["kan", "g5.14.8"], ["inte", "g5.14.7"], ["döljas;", "g5.14.10"],
    ],
    annotations: [],
  },
  15: {
    english: [
      ["inte", "g5.15.1"], ["heller", "g5.15.1", true], ["tänder", "g5.15.2"], ["man", "", true], ["en", "", true], ["lampa", "g5.15.3"],
      ["och", "g5.15.4"], ["ställer", "g5.15.5"], ["den", "g5.15.6"], ["under", "g5.15.7"], ["sädesmåttet,", "g5.15.8 g5.15.9"],
      ["utan", "g5.15.10"], ["på", "g5.15.11"], ["ljushållaren,", "g5.15.12 g5.15.13"],
      ["och", "g5.15.14"], ["den", "", true], ["lyser", "g5.15.15"], ["för", "g5.15.16", true], ["alla", "g5.15.16"], ["i", "g5.15.18"], ["huset.", "g5.15.19 g5.15.20"],
    ],
    annotations: [],
  },
  16: {
    english: [
      ["Så", "g5.16.1"], ["ska", "g5.16.2", true], ["ert", "g5.16.5"], ["ljus", "g5.16.3 g5.16.4"], ["lysa", "g5.16.2"],
      ["inför", "g5.16.6"], ["människorna,", "g5.16.7 g5.16.8"],
      ["så", "g5.16.9", true], ["att", "g5.16.9"], ["de", "", true], ["ser", "g5.16.10"], ["era", "g5.16.11"], ["goda", "g5.16.13"], ["gärningar", "g5.16.12 g5.16.14"],
      ["och", "g5.16.15"], ["prisar", "g5.16.16"], ["er", "g5.16.19"], ["Fader", "g5.16.17 g5.16.18"],
      ["i", "g5.16.21"], ["himlarna.", "g5.16.20 g5.16.22 g5.16.23"],
    ],
    annotations: [],
  },
  17: {
    english: [
      ["Tro", "g5.17.2"], ["inte", "g5.17.1"], ["att", "g5.17.3"], ["jag", "g5.17.4", true], ["kommit", "g5.17.4"],
      ["för", "g5.17.5", true], ["att", "", true], ["riva", "g5.17.5"], ["ner", "g5.17.5", true], ["lagen", "g5.17.6 g5.17.7"], ["eller", "g5.17.8"], ["profeterna;", "g5.17.9 g5.17.10"],
      ["jag", "g5.17.12", true], ["har", "", true], ["inte", "g5.17.11"], ["kommit", "g5.17.12"], ["för", "g5.17.13", true], ["att", "", true], ["riva", "g5.17.13"], ["ner", "g5.17.13", true], ["utan", "g5.17.14"], ["för", "g5.17.15", true], ["att", "", true], ["fullborda.", "g5.17.15"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g5.17.5 g5.17.15 g5.18.13 g5.18.17", lemma: "καταλῦσαι … πληρῶσαι",
        title: "”Inte riva ner utan fullborda” — jotan och hornet",
        body: "Verben är arkitektoniska: καταλύω är vad man gör med en *byggnad* — river den — och anklagelsen att Jesus ville riva Toran var levande nog för att han besvarar den innan någon i berättelsen hunnit resa den. Hans motverb är πληρόω, fullbordansordet i alla Matteus citat: inte *ersätta*, utan *fylla fullt* — föra till den gestalt saken hela tiden växte mot. Vers 18 utkonserverar sedan de konservativa: inte en **ἰῶτα** (jod, hebreiskans minsta bokstav, stor som en apostrof) och inte en enda **κεραία** — ”horn”, det lilla streck som skiljer en bokstav från dess dubbelgångare (ד från ר) — ska förgås. Läs det följande i den ramen: de sex ”men jag säger er”-styckena är inte korrigeringar av en bristfällig lag utan utgrävningar av den — vart och ett gräver under ett bud ner till den avsikt budet vaktade (mord → förakt; äktenskapsbrott → den ägande blicken; edhållande → enkel sannfärdighet). Radikalismen löper *nedåt*, mot roten. Vad Bergspredikan än är, är den inte verket av en man som ansåg de gamla texterna umbärliga.",
      },
    ],
  },
  18: {
    english: [
      ["Ty", "g5.18.2"], ["amen,", "g5.18.1"], ["jag", "g5.18.3", true], ["säger", "g5.18.3"], ["er:", "g5.18.4"],
      ["tills", "g5.18.5 g5.18.6"], ["himmel", "g5.18.8 g5.18.9"], ["och", "g5.18.10"], ["jord", "g5.18.11 g5.18.12"], ["förgås", "g5.18.7"],
      ["ska", "", true], ["inte", "g5.18.18 g5.18.19"], ["en", "g5.18.14"], ["jota", "g5.18.13"], ["eller", "g5.18.15"], ["ett", "g5.18.16"], ["enda", "g5.18.16", true], ["streck", "g5.18.17"]
      , ["förgås", "g5.18.20"], ["ur", "g5.18.21"], ["lagen,", "g5.18.22 g5.18.23"],
      ["förrän", "g5.18.24 g5.18.25"], ["allt", "g5.18.26"], ["har", "", true], ["skett.", "g5.18.27"],
    ],
    annotations: [],
  },
  19: {
    english: [
      ["Den", "g5.19.1"], ["som", "g5.19.2", true], ["alltså", "g5.19.3"], ["upplöser", "g5.19.4"], ["ett", "g5.19.5"], ["av", "g5.19.6", true], ["dessa", "g5.19.8"], ["minsta", "g5.19.9 g5.19.10"], ["bud", "g5.19.7"],
      ["och", "g5.19.11"], ["lär", "g5.19.12"], ["människorna", "g5.19.14 g5.19.15"], ["så,", "g5.19.13"],
      ["ska", "", true], ["kallas", "g5.19.17"], ["minst", "g5.19.16"], ["i", "g5.19.18"], ["himlarnas", "g5.19.21 g5.19.22"], ["rike;", "g5.19.19 g5.19.20"],
      ["men", "g5.19.24"], ["den", "g5.19.23"], ["som", "g5.19.25", true], ["gör", "g5.19.26"], ["och", "g5.19.27"], ["lär", "g5.19.28"], ["dem,", "", true],
      ["han", "g5.19.29"], ["ska", "", true], ["kallas", "g5.19.31"], ["stor", "g5.19.30"], ["i", "g5.19.32"], ["himlarnas", "g5.19.35 g5.19.36"], ["rike.", "g5.19.33 g5.19.34"],
    ],
    annotations: [],
  },
  20: {
    english: [
      ["Ty", "g5.20.2"], ["jag", "g5.20.1", true], ["säger", "g5.20.1"], ["er:", "g5.20.3"],
      ["om", "g5.20.5"], ["inte", "g5.20.6"], ["er", "g5.20.8"], ["rättfärdighet", "g5.20.9 g5.20.10"], ["vida", "g5.20.11", true], ["övergår", "g5.20.7 g5.20.11"],
      ["de", "g5.20.12"], ["skriftlärdas", "g5.20.13"], ["och", "g5.20.14"], ["fariseernas,", "g5.20.15"],
      ["kommer", "g5.20.18", true], ["ni", "", true], ["aldrig", "g5.20.16 g5.20.17"], ["in", "g5.20.18"],
      ["i", "g5.20.19"], ["himlarnas", "g5.20.22 g5.20.23"], ["rike.", "g5.20.20 g5.20.21"],
    ],
    annotations: [],
  },
  21: {
    english: [
      ["Ni", "g5.21.1", true], ["har", "", true], ["hört", "g5.21.1"], ["att", "g5.21.2"], ["det", "g5.21.3", true], ["sades", "g5.21.3"], ["till", "g5.21.4", true], ["de", "g5.21.4"], ["gamla:", "g5.21.5"],
      ["’Du", "g5.21.7", true], ["ska", "", true], ["inte", "g5.21.6"], ["dräpa;", "g5.21.7"],
      ["och", "", true], ["den", "g5.21.8"], ["som", "g5.21.10", true], ["dräper", "g5.21.11"], ["ska", "g5.21.13", true], ["vara", "g5.21.13"], ["hemfallen", "g5.21.12"], ["åt", "g5.21.14", true], ["domen.’", "g5.21.14 g5.21.15"],
    ],
    annotations: [],
  },
  22: {
    english: [
      ["Men", "g5.22.2"], ["jag", "g5.22.1"], ["säger", "g5.22.3"], ["er", "g5.22.4"], ["att", "g5.22.5"],
      ["var", "g5.22.6"], ["och", "g5.22.6", true], ["en", "g5.22.6", true], ["som", "g5.22.7", true], ["vredgas", "g5.22.8"], ["på", "g5.22.9", true], ["sin", "g5.22.11"], ["broder", "g5.22.10"],
      ["ska", "g5.22.13", true], ["vara", "g5.22.13"], ["hemfallen", "g5.22.12"], ["åt", "g5.22.14", true], ["domen;", "g5.22.14 g5.22.15"],
      ["och", "", true], ["den", "g5.22.16"], ["som", "g5.22.18", true], ["säger", "g5.22.19"], ["till", "g5.22.20", true], ["sin", "g5.22.22"], ["broder", "g5.22.21"], ["’Raka’", "g5.22.23"],
      ["ska", "g5.22.25", true], ["vara", "g5.22.25"], ["hemfallen", "g5.22.24"], ["åt", "g5.22.26", true], ["rådet;", "g5.22.26 g5.22.27"],
      ["och", "", true], ["den", "g5.22.28"], ["som", "g5.22.30", true], ["säger", "g5.22.31"], ["’Dåre’", "g5.22.32"],
      ["ska", "g5.22.34", true], ["vara", "g5.22.34"], ["hemfallen", "g5.22.33"], ["åt", "g5.22.35"], ["eldens", "g5.22.38 g5.22.39"], ["Gehenna.", "g5.22.36 g5.22.37"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g5.22.23 g5.22.37", lemma: "Ῥακά … γέεννα",
        title: "Raka, och Gehenna — två ord vi vägrar översätta",
        body: "**Ῥακά** är arameiskt gatuokvädande (*reqa*, ”tomskalle”) som Matteus själv lät stå oöversatt för sina grekiska läsare, så vi låter det stå för dig — den graderade absurditeten i utsagan (skolgårdsglåpord → högsta domstolen; ”dåre” → elden) fungerar bäst när registret hörs. Och **γέεννα** är inte ”helvetet” utan en plats du kan stå i idag: **Ge-Hinnom**, Hinnoms dal, som ringlar kring Jerusalems sydväst — på denna webbplats 3D-karta är det sänkan strax nedanför Herodes palats. Där brände kungarna Ahas och Manasse barn åt Molok (2 Kung 23:10; Jer 7:31), och Jeremia döpte om den till Slaktdalen; på Jesu tid var den stadens bild av slutgiltig undergång — senare tradition talar om ständigt brinnande sopor, fast arkeologin för det är tunn. Att översätta ”helvetet” importerar ett årtusende av senare lära i ett förstaårhundradets ortnamn. Utsagans faktiska anspråk är strängt nog utan importerna: föraktet är mordets frö, och att kalla en broder värdelös planterar dig i dalen där barn en gång kallades värdelösa.",
      },
    ],
  },
  23: {
    english: [
      ["Om", "g5.23.1"], ["du", "g5.23.3", true], ["alltså", "g5.23.2"], ["bär", "g5.23.3"], ["fram", "g5.23.3", true], ["din", "g5.23.6"], ["gåva", "g5.23.4 g5.23.5"],
      ["till", "g5.23.7"], ["altaret", "g5.23.8 g5.23.9"],
      ["och", "g5.23.10"], ["där", "g5.23.10", true], ["kommer", "g5.23.11"], ["ihåg", "g5.23.11", true], ["att", "g5.23.12"],
      ["din", "g5.23.15"], ["broder", "g5.23.13 g5.23.14"], ["har", "g5.23.16"], ["något", "g5.23.17"], ["emot", "g5.23.18"], ["dig,", "g5.23.19"],
    ],
    annotations: [],
  },
  24: {
    english: [
      ["lämna", "g5.24.1"], ["då", "", true], ["din", "g5.24.5"], ["gåva", "g5.24.3 g5.24.4"], ["där", "g5.24.2"], ["framför", "g5.24.6"], ["altaret", "g5.24.7 g5.24.8"],
      ["och", "g5.24.9"], ["gå:", "g5.24.10"],
      ["försona", "g5.24.12"], ["dig", "g5.24.12", true], ["först", "g5.24.11"], ["med", "g5.24.13", true], ["din", "g5.24.15"], ["broder,", "g5.24.14"],
      ["och", "g5.24.16"], ["kom", "g5.24.18"], ["sedan", "g5.24.17"], ["och", "", true], ["bär", "g5.24.19"], ["fram", "g5.24.19", true], ["din", "g5.24.22"], ["gåva.", "g5.24.20 g5.24.21"],
    ],
    annotations: [],
  },
  25: {
    english: [
      ["Var", "g5.25.1"], ["snar", "g5.25.6"], ["att", "", true], ["göra", "g5.25.2", true], ["upp", "g5.25.2"], ["med", "g5.25.3", true], ["din", "g5.25.5"], ["motpart", "g5.25.4"],
      ["medan", "g5.25.7 g5.25.8"], ["du", "g5.25.9"], ["är", "g5.25.9", true], ["med", "g5.25.10"], ["honom", "g5.25.11"], ["på", "g5.25.12"], ["vägen,", "g5.25.13 g5.25.14"],
      ["så", "g5.25.15", true], ["att", "", true], ["inte", "g5.25.15 g5.25.16"], ["motparten", "g5.25.19 g5.25.20"], ["överlämnar", "g5.25.18"], ["dig", "g5.25.17"], ["åt", "g5.25.21", true], ["domaren,", "g5.25.21 g5.25.22"],
      ["och", "g5.25.23"], ["domaren", "g5.25.24 g5.25.25"], ["åt", "g5.25.26", true], ["rättstjänaren,", "g5.25.26 g5.25.27"],
      ["och", "g5.25.28"], ["du", "g5.25.31", true], ["kastas", "g5.25.31"], ["i", "g5.25.29"], ["fängelse.", "g5.25.30"],
    ],
    annotations: [],
  },
  26: {
    english: [
      ["Amen,", "g5.26.1"], ["jag", "g5.26.2", true], ["säger", "g5.26.2"], ["dig:", "g5.26.3"],
      ["du", "g5.26.6", true], ["kommer", "g5.26.6"], ["inte", "g5.26.4 g5.26.5"], ["ut", "g5.26.6", true], ["därifrån", "g5.26.7"],
      ["förrän", "g5.26.8 g5.26.9"], ["du", "g5.26.10", true], ["betalat", "g5.26.10"], ["den", "g5.26.11"], ["sista", "g5.26.12"], ["kvadranten.", "g5.26.13"],
    ],
    annotations: [],
  },
  27: {
    english: [
      ["Ni", "g5.27.1", true], ["har", "", true], ["hört", "g5.27.1"], ["att", "g5.27.2"], ["det", "g5.27.3", true], ["sades:", "g5.27.3"],
      ["’Du", "g5.27.5", true], ["ska", "", true], ["inte", "g5.27.4"], ["begå", "g5.27.5", true], ["äktenskapsbrott.’", "g5.27.5"],
    ],
    annotations: [],
  },
  28: {
    english: [
      ["Men", "g5.28.2"], ["jag", "g5.28.1"], ["säger", "g5.28.3"], ["er", "g5.28.4"], ["att", "g5.28.5"],
      ["var", "g5.28.6"], ["och", "g5.28.6", true], ["en", "g5.28.6", true], ["som", "g5.28.7", true], ["ser", "g5.28.8"], ["på", "", true], ["en", "", true], ["kvinna", "g5.28.9"],
      ["för", "g5.28.10", true], ["att", "g5.28.11"], ["begära", "g5.28.12"], ["henne", "g5.28.13"],
      ["har", "g5.28.14", true], ["redan", "g5.28.14"], ["begått", "g5.28.15", true], ["äktenskapsbrott", "g5.28.15"], ["med", "", true], ["henne", "g5.28.16"],
      ["i", "g5.28.17"], ["sitt", "g5.28.20"], ["hjärta.", "g5.28.18 g5.28.19"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g5.28.12", lemma: "πρὸς τὸ ἐπιθυμῆσαι",
        title: "”Begära henne” — tionde budet, inte blicken",
        body: "Verbet är **ἐπιθυμέω** — exakt det ord Gamla testamentets grekiska använder i tionde budet, *du ska inte **hava begärelse*** — och konstruktionen (πρὸς τό + infinitiv) markerar avsikt: att se *för att* begära. Detta är inte det ofrivilliga läggamärket som århundraden av ängsliga läsare gisslat sig för; det är den odlade, ägande blicken — uppmärksamhet insatt för att besitta. Jesus gör här precis vad han gjorde med mordet: spårar ett bud (det sjunde) tillbaka till budet som vaktar dess rot (det tionde) och förlägger äktenskapsbrottets ursprung dit Andra Mosebok redan förlagt det — i viljandet, före tagandet. Utsagan fäller nästan var och en som prövar sig ärligt; den fäller inte att man har ögon. Skillnaden är själavårdande viktig, och grammatiken är, för en gångs skull, själavården.",
      },
    ],
  },
  29: {
    english: [
      ["Om", "g5.29.1"], ["ditt", "g5.29.5"], ["högra", "g5.29.7"], ["öga", "g5.29.3 g5.29.4 g5.29.6"], ["fäller", "g5.29.8"], ["dig,", "g5.29.9"],
      ["riv", "g5.29.10"], ["ut", "g5.29.10", true], ["det", "g5.29.11"], ["och", "g5.29.12"], ["kasta", "g5.29.13"], ["det", "", true], ["ifrån", "g5.29.14"], ["dig;", "g5.29.15"],
      ["ty", "g5.29.17"], ["det", "g5.29.16", true], ["är", "", true], ["bättre", "g5.29.16"], ["för", "g5.29.18", true], ["dig", "g5.29.18"],
      ["att", "g5.29.19"], ["en", "g5.29.21"], ["av", "g5.29.22", true], ["dina", "g5.29.24"], ["lemmar", "g5.29.23"], ["går", "g5.29.20"], ["förlorad", "g5.29.20", true],
      ["än", "g5.29.25 g5.29.26"], ["att", "", true], ["hela", "g5.29.27"], ["din", "g5.29.30"], ["kropp", "g5.29.28 g5.29.29"], ["kastas", "g5.29.31"], ["i", "g5.29.32"], ["Gehenna.", "g5.29.33"],
    ],
    annotations: [],
  },
  30: {
    english: [
      ["Och", "g5.30.1"], ["om", "g5.30.2"], ["din", "g5.30.5"], ["högra", "g5.30.4"], ["hand", "g5.30.3 g5.30.6"], ["fäller", "g5.30.7"], ["dig,", "g5.30.8"],
      ["hugg", "g5.30.9"], ["av", "g5.30.9", true], ["den", "g5.30.10"], ["och", "g5.30.11"], ["kasta", "g5.30.12"], ["den", "", true], ["ifrån", "g5.30.13"], ["dig;", "g5.30.14"],
      ["ty", "g5.30.16"], ["det", "g5.30.15", true], ["är", "", true], ["bättre", "g5.30.15"], ["för", "g5.30.17", true], ["dig", "g5.30.17"],
      ["att", "g5.30.18"], ["en", "g5.30.20"], ["av", "g5.30.21", true], ["dina", "g5.30.23"], ["lemmar", "g5.30.22"], ["går", "g5.30.19"], ["förlorad", "g5.30.19", true],
      ["än", "g5.30.24 g5.30.25"], ["att", "", true], ["hela", "g5.30.26"], ["din", "g5.30.29"], ["kropp", "g5.30.27 g5.30.28"], ["far", "g5.30.32"], ["till", "g5.30.30"], ["Gehenna.", "g5.30.31"],
    ],
    annotations: [],
  },
  31: {
    english: [
      ["Och", "g5.31.2"], ["det", "g5.31.1", true], ["sades:", "g5.31.1"],
      ["’Den", "g5.31.3"], ["som", "g5.31.4", true], ["skiljer", "g5.31.5"], ["sig", "g5.31.5", true], ["från", "", true], ["sin", "g5.31.8"], ["hustru", "g5.31.6 g5.31.7"],
      ["ska", "g5.31.9", true], ["ge", "g5.31.9"], ["henne", "g5.31.10"], ["ett", "", true], ["skilsmässobrev.’", "g5.31.11"],
    ],
    annotations: [],
  },
  32: {
    english: [
      ["Men", "g5.32.2"], ["jag", "g5.32.1"], ["säger", "g5.32.3"], ["er", "g5.32.4"], ["att", "g5.32.5"],
      ["var", "g5.32.6"], ["och", "g5.32.6", true], ["en", "g5.32.6", true], ["som", "g5.32.7", true], ["skiljer", "g5.32.8"], ["sig", "g5.32.8", true], ["från", "", true], ["sin", "g5.32.11"], ["hustru", "g5.32.9 g5.32.10"],
      ["utom", "g5.32.12"], ["på", "g5.32.13", true], ["grund", "g5.32.13"], ["av", "", true], ["otukt", "g5.32.14"],
      ["gör", "g5.32.15"], ["henne", "g5.32.16"], ["till", "", true], ["äktenskapsbryterska;", "g5.32.17"],
      ["och", "g5.32.18"], ["den", "g5.32.19"], ["som", "g5.32.20", true], ["gifter", "g5.32.22"], ["sig", "g5.32.22", true], ["med", "", true], ["en", "", true], ["frånskild", "g5.32.21"], ["begår", "g5.32.23", true], ["äktenskapsbrott.", "g5.32.23"],
    ],
    annotations: [],
  },
  33: {
    english: [
      ["Åter", "g5.33.1"], ["har", "", true], ["ni", "g5.33.2", true], ["hört", "g5.33.2"], ["att", "g5.33.3"], ["det", "g5.33.4", true], ["sades", "g5.33.4"], ["till", "g5.33.5", true], ["de", "g5.33.5"], ["gamla:", "g5.33.6"],
      ["’Du", "g5.33.8", true], ["ska", "", true], ["inte", "g5.33.7"], ["svärja", "g5.33.8"], ["falskt,", "g5.33.8", true],
      ["utan", "g5.33.10"], ["infria", "g5.33.9"], ["dina", "g5.33.15"], ["eder", "g5.33.13 g5.33.14"], ["åt", "g5.33.11", true], ["Herren.’", "g5.33.11 g5.33.12"],
    ],
    annotations: [],
  },
  34: {
    english: [
      ["Men", "g5.34.2"], ["jag", "g5.34.1"], ["säger", "g5.34.3"], ["er:", "g5.34.4"],
      ["svär", "g5.34.6"], ["inte", "g5.34.5"], ["alls", "g5.34.7"], ["—", "", true],
      ["varken", "g5.34.8"], ["vid", "g5.34.9"], ["himlen,", "g5.34.10 g5.34.11"],
      ["ty", "g5.34.12"], ["den", "g5.34.14", true], ["är", "g5.34.14"], ["Guds", "g5.34.15 g5.34.16"], ["tron;", "g5.34.13"],
    ],
    annotations: [],
  },
  35: {
    english: [
      ["eller", "g5.35.1"], ["vid", "g5.35.2"], ["jorden,", "g5.35.3 g5.35.4"],
      ["ty", "g5.35.5"], ["den", "g5.35.7", true], ["är", "g5.35.7"], ["hans", "g5.35.10"], ["fötters", "g5.35.8 g5.35.9"], ["pall;", "g5.35.6"],
      ["eller", "g5.35.11"], ["vid", "g5.35.12", true], ["Jerusalem,", "g5.35.13"],
      ["ty", "g5.35.14"], ["det", "g5.35.16", true], ["är", "g5.35.16"], ["den", "g5.35.17"], ["store", "g5.35.18"], ["Konungens", "g5.35.19"], ["stad;", "g5.35.15"],
    ],
    annotations: [],
  },
  36: {
    english: [
      ["inte", "g5.36.1"], ["heller", "g5.36.1", true], ["ska", "g5.36.6", true], ["du", "", true], ["svärja", "g5.36.6"], ["vid", "g5.36.2"], ["ditt", "g5.36.5"], ["huvud,", "g5.36.3 g5.36.4"],
      ["ty", "g5.36.7"], ["du", "g5.36.9", true], ["förmår", "g5.36.9"], ["inte", "g5.36.8"],
      ["göra", "g5.36.13"], ["ett", "g5.36.10"], ["enda", "g5.36.10", true], ["hårstrå", "g5.36.11"], ["vitt", "g5.36.12"], ["eller", "g5.36.14"], ["svart.", "g5.36.15"],
    ],
    annotations: [],
  },
  37: {
    english: [
      ["Ert", "g5.37.5"], ["tal", "g5.37.3 g5.37.4"], ["ska", "g5.37.1", true], ["vara", "g5.37.1"],
      ["’ja,", "g5.37.6"], ["ja;", "g5.37.7"], ["nej,", "g5.37.8"], ["nej’;", "g5.37.9"],
      ["vad", "g5.37.10 g5.37.12"], ["som", "", true], ["är", "", true], ["därutöver", "g5.37.13"],
      ["är", "g5.37.17"], ["av", "g5.37.14"], ["den", "g5.37.15"], ["onde.", "g5.37.16"],
    ],
    annotations: [],
  },
  38: {
    english: [
      ["Ni", "g5.38.1", true], ["har", "", true], ["hört", "g5.38.1"], ["att", "g5.38.2"], ["det", "g5.38.3", true], ["sades:", "g5.38.3"],
      ["’Öga", "g5.38.4"], ["för", "g5.38.5"], ["öga", "g5.38.6"], ["och", "g5.38.7"], ["tand", "g5.38.8"], ["för", "g5.38.9"], ["tand.’", "g5.38.10"],
    ],
    annotations: [],
  },
  39: {
    english: [
      ["Men", "g5.39.2"], ["jag", "g5.39.1"], ["säger", "g5.39.3"], ["er:", "g5.39.4"],
      ["stå", "g5.39.6"], ["inte", "g5.39.5"], ["emot", "g5.39.6", true], ["den", "g5.39.7"], ["onde", "g5.39.8"], ["med", "", true], ["hans", "", true], ["medel;", "", true],
      ["utan", "g5.39.9"], ["den", "g5.39.10"], ["som", "g5.39.10", true], ["slår", "g5.39.12"], ["dig", "g5.39.11"], ["på", "g5.39.13"], ["högra", "g5.39.15"], ["kinden,", "g5.39.14 g5.39.16 g5.39.17"],
      ["vänd", "g5.39.18"], ["mot", "g5.39.19", true], ["honom", "g5.39.19"], ["också", "g5.39.20"], ["den", "g5.39.21"], ["andra;", "g5.39.22"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g5.39.15 g5.39.16 g5.41.4", lemma: "δεξιὰν σιαγόνα … ἀγγαρεύσει",
        title: "Högra kinden, andra milen — trots utan våld",
        body: "Detaljerna arbetar. För att träffa någons **högra** kind måste en högerhänt använda handens *baksida* — i den kulturen inget slag mellan jämlikar utan snärten man ger en underordnad: slav, hustru, barn. Att vända *vänstra* kinden ställer slagaren inför ett dilemma — upprepa förolämpningen kan han inte (ditt ansikte är vänt), och slår han med handflata eller knytnäve behandlar han dig därmed som jämlike. Likaså är **ἀγγαρεύω** (v. 41) en fackterm: den romerske soldatens lagliga rätt att *utskriva* en provinsbo att bära hans packning — en mil, enligt reglementet. Att gå den andra milen tar tvånget ur hans händer och räcker *honom* problemet. Och manteln (v. 40): stämd på din livklädnad, ge manteln också — och stå där i rättssalen naken, med skammen fallande (enligt 1 Mos 9:s logik) på den som ser. Detta är inga dörrmatteinstruktioner; det är manus för att hålla sin värdighet och sin fiendes mänsklighet i spel samtidigt — en tredje väg förbi de enda två alternativ världen brukar lista: slå tillbaka eller krypa. Vers 39:s *”stå inte emot”* betyder: inte med *hans* metoder.",
      },
    ],
  },
  40: {
    english: [
      ["och", "g5.40.1"], ["den", "g5.40.2"], ["som", "g5.40.3", true], ["vill", "g5.40.3"],
      ["dra", "g5.40.5"], ["dig", "g5.40.4"], ["inför", "g5.40.5", true], ["rätta", "g5.40.5", true], ["och", "g5.40.6"], ["ta", "g5.40.10"], ["din", "g5.40.9"], ["livklädnad,", "g5.40.7 g5.40.8"],
      ["lämna", "g5.40.11"], ["honom", "g5.40.12"], ["manteln", "g5.40.14 g5.40.15"], ["också;", "g5.40.13"],
    ],
    annotations: [],
  },
  41: {
    english: [
      ["och", "g5.41.1"], ["den", "g5.41.2"], ["som", "g5.41.2", true], ["tvingar", "g5.41.4"], ["dig", "g5.41.3"], ["att", "", true], ["gå", "", true], ["en", "g5.41.6"], ["mil,", "g5.41.5"],
      ["gå", "g5.41.7"], ["med", "g5.41.8"], ["honom", "g5.41.9"], ["två.", "g5.41.10"],
    ],
    annotations: [],
  },
  42: {
    english: [
      ["Ge", "g5.42.4"], ["åt", "g5.42.1", true], ["den", "g5.42.1"], ["som", "g5.42.2", true], ["ber", "g5.42.2"], ["dig,", "g5.42.3"],
      ["och", "g5.42.5"], ["vänd", "g5.42.12"], ["dig", "", true], ["inte", "g5.42.11"], ["bort", "g5.42.12", true],
      ["från", "g5.42.8"], ["den", "g5.42.7"], ["som", "g5.42.7", true], ["vill", "g5.42.7", true], ["låna", "g5.42.10"], ["av", "", true], ["dig.", "g5.42.9"],
    ],
    annotations: [],
  },
  43: {
    english: [
      ["Ni", "g5.43.1", true], ["har", "", true], ["hört", "g5.43.1"], ["att", "g5.43.2"], ["det", "g5.43.3", true], ["sades:", "g5.43.3"],
      ["’Du", "g5.43.4", true], ["ska", "", true], ["älska", "g5.43.4"], ["din", "g5.43.7"], ["nästa", "g5.43.5 g5.43.6"],
      ["och", "g5.43.8"], ["hata", "g5.43.9"], ["din", "g5.43.12"], ["fiende.’", "g5.43.10 g5.43.11"],
    ],
    annotations: [
      {
        kind: "text", refs: "g5.43.9", lemma: "καὶ μισήσεις τὸν ἐχθρόν σου",
        title: "”Och hata din fiende” — ett citat ur ingen skrift",
        body: "Första halvan är 3 Mos 19:18. Andra halvan — *”och hata din fiende”* — står i **ingen gammaltestamentlig text**. Jesus citerar inte skriften utan dess folkliga utläggning: slutsatsen folk drog av ”älska din *nästa*” (alltså: bara nästan), en slutsats med verklig spridning — Qumrans församlingsregel öppnar med att ålägga medlemmarna att ”älska alla ljusets söner… och hata alla mörkrets söner”. Lägg därför märke till vad antitesen angriper: inte Toran (v. 17 förbjöd den läsningen), utan en *förträngning* av Toran — den tillfogade satsen, inte den befallda kärleken. Det är predikans tydligaste exempel på vad alla sex antiteser gör: river en häck planterad runt ett bud och blottar budets fulla, obekväma räckvidd. Tredje Mosebok pekade redan åt det hållet — samma kapitel befaller kärlek till *invandraren* (19:34). Jesus för rörelsen till dess slutpunkt: kategorin ’nästa’ har ingen bortre gräns.",
      },
    ],
  },
  44: {
    english: [
      ["Men", "g5.44.2"], ["jag", "g5.44.1"], ["säger", "g5.44.3"], ["er:", "g5.44.4"],
      ["älska", "g5.44.5"], ["era", "g5.44.8"], ["fiender", "g5.44.6 g5.44.7"],
      ["och", "g5.44.9"], ["be", "g5.44.10"], ["för", "g5.44.11"], ["dem", "g5.44.12"], ["som", "g5.44.13", true], ["förföljer", "g5.44.13"], ["er,", "g5.44.14"],
    ],
    annotations: [],
  },
  45: {
    english: [
      ["så", "g5.45.1"], ["att", "g5.45.1", true], ["ni", "g5.45.2", true], ["blir", "g5.45.2"], ["söner", "g5.45.3"], ["till", "g5.45.4", true], ["er", "g5.45.6"], ["Fader", "g5.45.5"],
      ["i", "g5.45.7 g5.45.8"], ["himlarna;", "g5.45.9"],
      ["ty", "g5.45.10"], ["han", "", true], ["låter", "g5.45.14", true], ["sin", "g5.45.13"], ["sol", "g5.45.11 g5.45.12"], ["gå", "g5.45.14"], ["upp", "g5.45.14", true],
      ["över", "g5.45.15"], ["onda", "g5.45.16"], ["och", "g5.45.17"], ["goda,", "g5.45.18"],
      ["och", "g5.45.19"], ["låter", "g5.45.20", true], ["det", "", true], ["regna", "g5.45.20"], ["över", "g5.45.21"], ["rättfärdiga", "g5.45.22"], ["och", "g5.45.23"], ["orättfärdiga.", "g5.45.24"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g5.45.11 g5.45.20", lemma: "τὸν ἥλιον … βρέχει",
        title: "Vädrets teologi",
        body: "Argumentet för att älska fiender är inte att det fungerar, inte heller att de förtjänar det, utan ett anspråk om **vad Gud redan gör**: soluppgång och regn, levererade dagligen och utan åtskillnad till de människor som just nu förföljer dig. Det skär mot en mycket naturlig teologi — den Jobs vänner höll sig med, där väder och välgång följer förtjänst — och Jesus formulerar alternativet som iakttagbart faktum: försynen är *urskillningslös*. Att älska en fiende är därför inget heroiskt överskott; det är att gå in i familjeföretaget (”så att ni blir er Faders **söner**” — söner i idiomets mening: *de som visar förälderns drag*). För den läsare som kämpar med böner och bevis är detta kanske predikans mest tillgängliga anspråk: vad som än är ovisst går solen faktiskt upp över de orättfärdiga — generositeten är kontrollerbar. Frågan versen ställer är om det är en fysikens tillfällighet, eller en karaktärsreferens.",
      },
    ],
  },
  46: {
    english: [
      ["Ty", "g5.46.2"], ["om", "g5.46.1"], ["ni", "g5.46.3", true], ["älskar", "g5.46.3"], ["dem", "g5.46.4"], ["som", "g5.46.5", true], ["älskar", "g5.46.5"], ["er,", "g5.46.6"],
      ["vilken", "g5.46.7"], ["lön", "g5.46.8"], ["har", "g5.46.9"], ["ni?", "", true],
      ["Gör", "g5.46.16"], ["inte", "g5.46.10"], ["också", "g5.46.11"], ["tullindrivarna", "g5.46.12 g5.46.13"], ["detsamma?", "g5.46.14 g5.46.15"],
    ],
    annotations: [],
  },
  47: {
    english: [
      ["Och", "g5.47.1"], ["om", "g5.47.2"], ["ni", "g5.47.3", true], ["hälsar", "g5.47.3"], ["endast", "g5.47.7"], ["på", "", true], ["era", "g5.47.6"], ["bröder,", "g5.47.4 g5.47.5"],
      ["vad", "g5.47.8"], ["märkvärdigt", "g5.47.9"], ["gör", "g5.47.10"], ["ni?", "", true],
      ["Gör", "g5.47.17"], ["inte", "g5.47.11"], ["också", "g5.47.12"], ["hedningarna", "g5.47.13 g5.47.14"], ["detsamma?", "g5.47.15 g5.47.16"],
    ],
    annotations: [],
  },
  48: {
    english: [
      ["Ni", "g5.48.3"], ["ska", "g5.48.1", true], ["alltså", "g5.48.2"], ["vara", "g5.48.1"], ["hela,", "g5.48.4"],
      ["som", "g5.48.5"], ["er", "g5.48.8"], ["himmelske", "g5.48.9 g5.48.10"], ["Fader", "g5.48.6 g5.48.7"], ["är", "g5.48.12"], ["hel.”", "g5.48.11"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g5.48.4 g5.48.11", lemma: "τέλειοι",
        title: "”Hela” — inte felfria",
        body: "**Τέλειος** kommer av τέλος, *mål, ände*: att nå det syfte en sak finns till för — mogen, fullständig, odelad. ”Var **fullkomliga**” har krossat generationer av läsare med ett krav på felfrihet som grekiskan inte reser; bakom står 5 Mos 18:13:s *tamim* — helhjärtad, i ett stycke — och Lukas parallell återger samma utsaga **”var barmhärtiga, så som er Fader är barmhärtig”** (6:36), vilket visar vad helheten består i här: verserna 43-47 har handlat om kärlek som inte stannar vid de förtjäntas gräns. *Var hela som er Fader är hel* — kärlek utan undantagsklausul, som solen skiner utan en. Fortfarande omöjligt högt; men det är en omfamnings höjd, inte en revisions. Predikan slutar sitt första kapitel med att kräva kärlekens fullständighet — inte den felfrihet som håller de ängsliga vakna, och inte heller en jota mindre än allt.",
      },
    ],
  },
};
