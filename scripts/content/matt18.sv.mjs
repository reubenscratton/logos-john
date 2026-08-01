// Matteus 18 — svensk översättning & annotationer.
// OBS: v11 saknas i Nestle 1904-texten (se annotation vid v10).

export const CONTENT = {
  1: {
    english: [
      ["I", "g18.1.1"], ["den", "g18.1.2"], ["stunden", "g18.1.3 g18.1.4"],
      ["kom", "g18.1.5"], ["lärjungarna", "g18.1.6 g18.1.7"]
      , ["till", "g18.1.8", true], ["Jesus", "g18.1.8 g18.1.9"], ["och", "g18.1.10", true], ["sade:", "g18.1.10"],
      ["”Vem", "g18.1.11"], ["är", "g18.1.14"], ["då", "g18.1.12"], ["störst", "g18.1.13"],
      ["i", "g18.1.15"], ["himlarnas", "g18.1.18 g18.1.19"], ["rike?”", "g18.1.16 g18.1.17"],
    ],
    annotations: [],
  },
  2: {
    english: [
      ["Och", "g18.2.1"], ["han", "g18.2.2", true], ["kallade", "g18.2.2"], ["till", "g18.2.2", true], ["sig", "g18.2.2", true],
      ["ett", "", true], ["barn", "g18.2.3"]
      , ["och", "g18.2.4", true], ["ställde", "g18.2.4"], ["det", "g18.2.5"],
      ["mitt", "g18.2.6 g18.2.7"], ["ibland", "", true], ["dem", "g18.2.8"],
    ],
    annotations: [],
  },
  3: {
    english: [
      ["och", "g18.3.1"], ["sade:", "g18.3.2"],
      ["”Amen,", "g18.3.3"], ["jag", "g18.3.4", true], ["säger", "g18.3.4"], ["er:", "g18.3.5"],
      ["om", "g18.3.6"], ["ni", "g18.3.8", true], ["inte", "g18.3.7"], ["vänder", "g18.3.8"], ["om", "g18.3.8", true],
      ["och", "g18.3.9"], ["blir", "g18.3.10"],
      ["som", "g18.3.11"], ["barnen", "g18.3.12 g18.3.13"]
      , ["kommer", "g18.3.16"], ["ni", "", true], ["alls", "g18.3.14 g18.3.15"], ["inte", "", true], ["in", "g18.3.17"]
      , ["i", "g18.3.17", true], ["himlarnas", "g18.3.20 g18.3.21"], ["rike.", "g18.3.18 g18.3.19"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g18.2.3 g18.4.3", lemma: "παιδίον … ταπεινώσει ἑαυτὸν",
        title: "Barnet i mitten — status, inte sötma",
        body: "Lärjungarna ställer organisationsschemats fråga — *vem är störst?* — och Jesus svarar med en person: ett **παιδίον**, ett litet barn, ställt mitt i seminariet. För att höra svaret rätt måste nitton sekler av sentimentalitet kring barndomens oskuld skalas bort, ty den antika världen ägde ingen: ett barn i den kulturen var ingen symbol för renhet eller förundran utan för **nollstatus** — inga rättigheter, inga meriter, ingen hävstång, ingen röst, helt beroende av någon annans välvilja, och (avgörande för parallellen) *ogenerad över beroendet*. Det är kvaliteten som namnges i v. 4: ταπεινώσει ἑαυτόν, den som *sänker sig* som detta barn. Budet är inte ”var naiv” eller ”var tillitsfull till temperamentet” — det är ett krav riktat exakt mot frågan som ställdes: sluta beräkna rang. Man går inte in i detta rike bärande sin senioritet; ingången är dimensionerad för människor som anländer utan något att förtulla, så som ett barn anländer överallt. Notera också omkastningen av det religiösa maskineriet i v. 5: storheten består inte ens i att *vara* barnet — den består i att **ta emot** ett, i hans namn; rikets befordringsväg går genom att välkomna just de människor som inte kan tillföra din ställning något. Lärjungarna frågade vem som skulle bli störst. Jesu fulla svar, utrullat över hela detta kapitel, är: frågan själv är vad ni måste omvändas från.",
      },
    ],
  },
  4: {
    english: [
      ["Den", "g18.4.1"], ["alltså", "g18.4.2"], ["som", "", true],
      ["sänker", "g18.4.3"], ["sig", "g18.4.4", true], ["själv", "g18.4.4"],
      ["som", "g18.4.5"], ["detta", "g18.4.8"], ["barn", "g18.4.6 g18.4.7"], ["—", "", true],
      ["han", "g18.4.9"], ["är", "g18.4.10"], ["den", "g18.4.11"], ["störste", "g18.4.12"],
      ["i", "g18.4.13"], ["himlarnas", "g18.4.16 g18.4.17"], ["rike.", "g18.4.14 g18.4.15"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["Och", "g18.5.1"], ["den", "g18.5.2 g18.5.3"], ["som", "", true], ["tar", "g18.5.4"], ["emot", "g18.5.4", true],
      ["ett", "g18.5.5"], ["sådant", "g18.5.7"], ["barn", "g18.5.6"],
      ["i", "g18.5.8"], ["mitt", "g18.5.11"], ["namn", "g18.5.9 g18.5.10"]
      , ["tar", "g18.5.13"], ["emot", "g18.5.13", true], ["mig;", "g18.5.12"],
    ],
    annotations: [],
  },
  6: {
    english: [
      ["men", "g18.6.2"], ["den", "g18.6.1 g18.6.3"], ["som", "", true], ["för", "g18.6.4", true], ["på", "g18.6.4", true], ["fall", "g18.6.4"],
      ["en", "g18.6.5"], ["av", "g18.6.6", true], ["dessa", "g18.6.8"], ["små", "g18.6.7"],
      ["som", "g18.6.9"], ["tror", "g18.6.10"], ["på", "g18.6.11"], ["mig,", "g18.6.12"],
      ["för", "g18.6.13", true], ["honom", "g18.6.14"], ["vore", "g18.6.13", true], ["det", "g18.6.13"], ["bättre", "g18.6.13", true],
      ["att", "g18.6.15"], ["en", "", true], ["kvarnsten", "g18.6.17 g18.6.18"]
      , ["hängdes", "g18.6.16"],
      ["om", "g18.6.19"], ["hans", "g18.6.22"], ["hals", "g18.6.20 g18.6.21"]
      , ["och", "g18.6.23"], ["han", "g18.6.24", true], ["sänktes", "g18.6.24"]
      , ["i", "g18.6.25"], ["havets", "g18.6.28 g18.6.29"], ["djup.", "g18.6.26 g18.6.27"],
    ],
    annotations: [],
  },
  7: {
    english: [
      ["Ve", "g18.7.1"], ["världen", "g18.7.2 g18.7.3"],
      ["för", "g18.7.4"], ["förförelsernas", "g18.7.5 g18.7.6"], ["skull!", "g18.7.4", true],
      ["Ty", "g18.7.8"], ["förförelserna", "g18.7.10 g18.7.11"], ["måste", "g18.7.7"], ["komma,", "g18.7.9"],
      ["men", "g18.7.12"], ["ve", "g18.7.13"], ["den", "g18.7.14"], ["människa", "g18.7.15"],
      ["genom", "g18.7.16"], ["vilken", "g18.7.17"],
      ["förförelsen", "g18.7.18 g18.7.19"], ["kommer.", "g18.7.20"],
    ],
    annotations: [],
  },
  8: {
    english: [
      ["Och", "g18.8.2"], ["om", "g18.8.1"], ["din", "g18.8.5"], ["hand", "g18.8.3 g18.8.4"],
      ["eller", "g18.8.6"], ["din", "g18.8.9"], ["fot", "g18.8.7 g18.8.8"],
      ["för", "g18.8.10", true], ["dig", "g18.8.11"], ["på", "g18.8.10", true], ["fall,", "g18.8.10"],
      ["hugg", "g18.8.12"], ["av", "g18.8.12", true], ["den", "g18.8.13"]
      , ["och", "g18.8.14"], ["kasta", "g18.8.15"], ["den", "", true], ["ifrån", "g18.8.16"], ["dig;", "g18.8.17"],
      ["det", "g18.8.20", true], ["är", "g18.8.20"], ["bättre", "g18.8.18"], ["för", "g18.8.19", true], ["dig", "g18.8.19"],
      ["att", "g18.8.21", true], ["gå", "g18.8.21"], ["in", "g18.8.22", true], ["i", "g18.8.22"], ["livet", "g18.8.23 g18.8.24"],
      ["lytt", "g18.8.25"], ["eller", "g18.8.26"], ["halt", "g18.8.27"],
      ["än", "g18.8.28"], ["att", "g18.8.35", true], ["med", "g18.8.34", true], ["två", "g18.8.29"], ["händer", "g18.8.30"],
      ["eller", "g18.8.31"], ["två", "g18.8.32"], ["fötter", "g18.8.33"],
      ["kastas", "g18.8.35"],
      ["i", "g18.8.36"], ["den", "g18.8.37"], ["eviga", "g18.8.39 g18.8.40"], ["elden.", "g18.8.38"],
    ],
    annotations: [],
  },
  9: {
    english: [
      ["Och", "g18.9.1"], ["om", "g18.9.2"], ["ditt", "g18.9.5"], ["öga", "g18.9.3 g18.9.4"],
      ["för", "g18.9.6", true], ["dig", "g18.9.7"], ["på", "g18.9.6", true], ["fall,", "g18.9.6"],
      ["riv", "g18.9.8"], ["ut", "g18.9.8", true], ["det", "g18.9.9"]
      , ["och", "g18.9.10"], ["kasta", "g18.9.11"], ["det", "", true], ["ifrån", "g18.9.12"], ["dig;", "g18.9.13"],
      ["det", "g18.9.16", true], ["är", "g18.9.16"], ["bättre", "g18.9.14"], ["för", "g18.9.15", true], ["dig", "g18.9.15"],
      ["att", "g18.9.21", true], ["enögd", "g18.9.17"], ["gå", "g18.9.21"], ["in", "g18.9.18", true], ["i", "g18.9.18"], ["livet", "g18.9.19 g18.9.20"],
      ["än", "g18.9.22"], ["att", "g18.9.26", true], ["med", "g18.9.25", true], ["två", "g18.9.23"], ["ögon", "g18.9.24"],
      ["kastas", "g18.9.26"],
      ["i", "g18.9.27"], ["eldens", "g18.9.30 g18.9.31"], ["Gehenna.", "g18.9.28 g18.9.29"],
    ],
    annotations: [],
  },
  10: {
    english: [
      ["Se", "g18.10.1"], ["till", "g18.10.1", true], ["att", "g18.10.2", true], ["ni", "g18.10.3", true], ["inte", "g18.10.2"], ["föraktar", "g18.10.3"],
      ["en", "g18.10.4"], ["av", "g18.10.5", true], ["dessa", "g18.10.7"], ["små;", "g18.10.6"],
      ["ty", "g18.10.9"], ["jag", "g18.10.8", true], ["säger", "g18.10.8"], ["er", "g18.10.10"], ["att", "g18.10.11"],
      ["deras", "g18.10.14"], ["änglar", "g18.10.12 g18.10.13"],
      ["i", "g18.10.15"], ["himlarna", "g18.10.16"]
      , ["ständigt", "g18.10.17 g18.10.18"], ["ser", "g18.10.19"],
      ["min", "g18.10.24"], ["himmelske", "g18.10.25 g18.10.26 g18.10.27"], ["Faders", "g18.10.22 g18.10.23"], ["ansikte.", "g18.10.20 g18.10.21"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g18.6.17 g18.10.13", lemma: "μύλος ὀνικὸς … οἱ ἄγγελοι αὐτῶν",
        title: "Kvarnstenen — den hårdaste mening han någonsin uttalade",
        body: "Ingenting annat i Jesu bevarade tal matchar våldsamheten i denna bild, och dess måltavla bör läggas på minnet: inte otroende, inte syndare — **de som skadar de små**. Μύλος ὀνικός är *åsnekvarnstenen*, överstenen i en kommersiell kvarn så tung att ett djur vred den, skild från handkvarnen en kvinna använde hemma; och ödet som föreslås — hängd om halsen, sänkt ἐν τῷ πελάγει, i öppna djupet — är inte straffet utan det *föredragna alternativet* till det: hellre det, än vad som faktiskt väntar. Den som σκανδαλίσῃ — får på fall, snärjer, orsakar kollapsen hos — en liten tillitsfull människa kommer att önska sig drunkningen. Kyrkohistorien har gett denna vers en outhärdlig resonans, och den bör få sin fulla vikt: institutionen som burit detta ord i sin bok har gång på gång varit skådeplatsen för exakt det brott det förbannar, och ingen vers åtalar religiösa övergrepp — mot barn först, men mot varje ”liten som tror” — med en bråkdel av denna vildhet. Motvikten är v. 10: **deras änglar ser ständigt min Faders ansikte** — vad det än exakt betyder (det är skyddsängelstraditionens frö) är dess funktion klar: den minsta personen i rummet har stående representation vid högsta domstolen; förakta ingen vars förespråkare ser Gud i ansiktet. (Äldre biblar har en v. 11 här — *Människosonen kom för att rädda det förlorade* — en rad som drivit in från Luk 19:10; Matteus äldsta handskrifter saknar den, och vår text hoppar, ärligt, från 10 till 12.)",
      },
    ],
  },
  12: {
    english: [
      ["Vad", "g18.12.1"], ["tror", "g18.12.3"], ["ni?", "g18.12.2"],
      ["Om", "g18.12.4"], ["en", "g18.12.6", true], ["man", "g18.12.7"], ["har", "g18.12.5"],
      ["hundra", "g18.12.8"], ["får", "g18.12.9"],
      ["och", "g18.12.10"], ["ett", "g18.12.12"], ["av", "g18.12.13"], ["dem", "g18.12.14"], ["går", "g18.12.11"], ["vilse,", "g18.12.11", true],
      ["lämnar", "g18.12.16"], ["han", "", true], ["då", "", true], ["inte", "g18.12.15"],
      ["de", "g18.12.17"], ["nittionio", "g18.12.18 g18.12.19"]
      , ["på", "g18.12.20"], ["bergen", "g18.12.21 g18.12.22"]
      , ["och", "g18.12.23"], ["går", "g18.12.24"], ["och", "", true], ["söker", "g18.12.25"],
      ["det", "g18.12.26"], ["vilsegångna?", "g18.12.27"],
    ],
    annotations: [],
  },
  13: {
    english: [
      ["Och", "g18.13.1"], ["om", "g18.13.2"], ["han", "g18.13.3", true], ["lyckas", "g18.13.3"],
      ["finna", "g18.13.4"], ["det,", "g18.13.5"],
      ["amen,", "g18.13.6"], ["jag", "g18.13.7", true], ["säger", "g18.13.7"], ["er:", "g18.13.8"],
      ["han", "g18.13.10", true], ["gläds", "g18.13.10"], ["över", "g18.13.11"], ["det", "g18.13.12"], ["att", "g18.13.9", true],
      ["mer", "g18.13.13"], ["än", "g18.13.14"],
      ["över", "g18.13.15"], ["de", "g18.13.16"], ["nittionio", "g18.13.17 g18.13.18"],
      ["som", "g18.13.19"], ["inte", "g18.13.20"], ["gått", "g18.13.21", true], ["vilse.", "g18.13.21"],
    ],
    annotations: [],
  },
  14: {
    english: [
      ["Så", "g18.14.1"], ["är", "g18.14.3"], ["det", "", true], ["inte", "g18.14.2"],
      ["er", "g18.14.8"], ["himmelske", "g18.14.9 g18.14.10 g18.14.11"], ["Faders", "g18.14.6 g18.14.7"], ["vilja", "g18.14.4"], ["inför", "g18.14.5", true],
      ["att", "g18.14.12"], ["en", "g18.14.14"],
      ["av", "g18.14.15", true], ["dessa", "g18.14.17"], ["små", "g18.14.16"],
      ["ska", "g18.14.13", true], ["gå", "g18.14.13"], ["förlorad.", "g18.14.13", true],
    ],
    annotations: [],
  },
  15: {
    english: [
      ["Och", "g18.15.2"], ["om", "g18.15.1"], ["din", "g18.15.6"], ["bror", "g18.15.4 g18.15.5"], ["syndar,", "g18.15.3"],
      ["gå", "g18.15.7"], ["och", "", true], ["ställ", "g18.15.8"], ["honom", "g18.15.9"], ["till", "g18.15.8", true], ["svars", "g18.15.8", true],
      ["mellan", "g18.15.10"], ["dig", "g18.15.11"], ["och", "g18.15.12"], ["honom", "g18.15.13"], ["ensam.", "g18.15.14"],
      ["Om", "g18.15.15"], ["han", "g18.15.17", true], ["lyssnar", "g18.15.17"], ["på", "g18.15.16", true], ["dig", "g18.15.16"]
      , ["har", "g18.15.18", true], ["du", "", true], ["vunnit", "g18.15.18"],
      ["din", "g18.15.21"], ["bror;", "g18.15.19 g18.15.20"],
    ],
    annotations: [],
  },
  16: {
    english: [
      ["men", "g18.16.2"], ["om", "g18.16.1"], ["han", "g18.16.4", true], ["inte", "g18.16.3"], ["lyssnar,", "g18.16.4"],
      ["ta", "g18.16.5"], ["med", "g18.16.6"], ["dig", "g18.16.7"],
      ["ännu", "g18.16.8"], ["en", "g18.16.9"], ["eller", "g18.16.10"], ["två,", "g18.16.11"],
      ["för", "g18.16.12", true], ["att", "g18.16.12"],
      ["genom", "g18.16.13", true], ["två", "g18.16.15"], ["eller", "g18.16.17"], ["tre", "g18.16.18"], ["vittnens", "g18.16.16"], ["mun", "g18.16.14"]
      , ["varje", "g18.16.20"], ["ord", "g18.16.21"], ["ska", "g18.16.19", true], ["stå", "g18.16.19"], ["fast;", "g18.16.19", true],
    ],
    annotations: [],
  },
  17: {
    english: [
      ["och", "g18.17.2"], ["om", "g18.17.1"], ["han", "g18.17.3", true], ["vägrar", "g18.17.3"], ["höra", "g18.17.3", true], ["dem,", "g18.17.4"],
      ["säg", "g18.17.5"], ["det", "", true], ["till", "g18.17.6", true], ["församlingen;", "g18.17.6 g18.17.7"],
      ["och", "g18.17.9"], ["om", "g18.17.8"], ["han", "g18.17.13", true], ["vägrar", "g18.17.13"], ["höra", "g18.17.13", true]
      , ["också", "g18.17.10"], ["församlingen,", "g18.17.11 g18.17.12"],
      ["då", "g18.17.14", true], ["ska", "", true], ["han", "", true], ["vara", "g18.17.14"], ["för", "g18.17.15", true], ["dig", "g18.17.15"],
      ["som", "g18.17.16"], ["hedningen", "g18.17.17 g18.17.18"],
      ["och", "g18.17.19"], ["tullindrivaren.", "g18.17.20 g18.17.21"],
    ],
    annotations: [],
  },
  18: {
    english: [
      ["Amen,", "g18.18.1"], ["jag", "g18.18.2", true], ["säger", "g18.18.2"], ["er:", "g18.18.3"],
      ["allt", "g18.18.4 g18.18.5"], ["ni", "g18.18.6", true], ["binder", "g18.18.6"],
      ["på", "g18.18.7"], ["jorden", "g18.18.8 g18.18.9"],
      ["ska", "g18.18.10", true], ["vara", "g18.18.10"], ["bundet", "g18.18.11"],
      ["i", "g18.18.12"], ["himlen,", "g18.18.13"],
      ["och", "g18.18.14"], ["allt", "g18.18.15 g18.18.16"], ["ni", "g18.18.17", true], ["löser", "g18.18.17"],
      ["på", "g18.18.18"], ["jorden", "g18.18.19 g18.18.20"],
      ["ska", "g18.18.21", true], ["vara", "g18.18.21"], ["löst", "g18.18.22"],
      ["i", "g18.18.23"], ["himlen.", "g18.18.24"],
    ],
    annotations: [],
  },
  19: {
    english: [
      ["Åter", "g18.19.1"], ["säger", "g18.19.3"], ["jag", "g18.19.3", true], ["er,", "g18.19.4"], ["amen:", "g18.19.2"],
      ["om", "g18.19.6"], ["två", "g18.19.7"], ["av", "g18.19.9"], ["er", "g18.19.10"], ["kommer", "g18.19.8"], ["överens", "g18.19.8", true], ["att", "g18.19.5", true],
      ["på", "g18.19.11"], ["jorden", "g18.19.12 g18.19.13"],
      ["om", "g18.19.14"], ["vilken", "g18.19.15", true], ["sak", "g18.19.16"], ["som", "g18.19.17", true], ["helst", "g18.19.15"]
      , ["de", "g18.19.19", true], ["ber", "g18.19.19"], ["om,", "g18.19.18", true],
      ["ska", "g18.19.20", true], ["det", "", true], ["ske", "g18.19.20"], ["dem", "g18.19.21"],
      ["genom", "g18.19.22"], ["min", "g18.19.25"], ["Fader", "g18.19.23 g18.19.24"],
      ["i", "g18.19.26 g18.19.27"], ["himlarna.", "g18.19.28"],
    ],
    annotations: [],
  },
  20: {
    english: [
      ["Ty", "g18.20.2"], ["där", "g18.20.1"], ["två", "g18.20.4"], ["eller", "g18.20.5"], ["tre", "g18.20.6"]
      , ["är", "g18.20.3"], ["samlade", "g18.20.7"],
      ["i", "g18.20.8"], ["mitt", "g18.20.10"], ["namn,", "g18.20.9 g18.20.11"],
      ["där", "g18.20.12"], ["är", "g18.20.13", true], ["jag", "g18.20.13"],
      ["mitt", "g18.20.14 g18.20.15"], ["ibland", "", true], ["dem.", "g18.20.16"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g18.15.10 g18.17.21 g18.20.13", lemma: "μεταξὺ σοῦ καὶ αὐτοῦ μόνου … ἐκεῖ εἰμι",
        title: "Fyrstegsprotokollet, och vem som står mitt i det",
        body: "Detta är Nya testamentets mest praktiska sida — en faktisk procedur för det varje gemenskap hanterar sämst: en medlem som kränker en annan. Stegen är graderade för att skydda allas värdighet. **Först, ensam**: μεταξὺ σοῦ καὶ αὐτοῦ μόνου, *mellan dig och honom ensam* — ingen publik, ingen gruppchatt, inga ”bekymrade vänner”; den överväldigande majoriteten av oförrätter är avsedd att dö vid detta steg, och det uttalade målet är inte seger utan **ἐκέρδησας τὸν ἀδελφόν σου** — *du har vunnit din bror*, som en skatt. **För det andra**, en eller två till — Femte Mosebokens bevisregel, men här fungerande som vittnen till *samtalet*, som håller det ärligt åt båda håll. **För det tredje**, ἐκκλησία — ordets andra och sista förekomst i evangelierna, nu tydligt en lokal gemenskap som kan sammanträda. **För det fjärde**, gränsen: *som hedningen och tullindrivaren* — och varje läsare av detta evangelium ska fånga hullingen i det, ty hur vet dess författare, **en tullindrivare**, hur Jesus behandlar sådana? Han äter med dem (9:10-13). Också uteslutningen definierar, i denna bok, nästa missions måltavla. Sedan löftet som omramar allt: *där två eller tre är samlade i mitt namn, där är jag mitt ibland dem.* Dess ursprungliga miljö är inte det lilla bönemötet det numera tröstar (fast det gärna får) — det är *denna klagomålsprocedur*: den konfronterande trossyskonet, den motvillige felande, de besvärade vittnena — det oglamorösa rummet är det Kristus lovar att stå mitt i. Försoningsarbete, utfört till detta pris, är där hans närvaro är kontraktsenligt garanterad.",
      },
    ],
  },
  21: {
    english: [
      ["Då", "g18.21.1"], ["kom", "g18.21.2"], ["Petrus", "g18.21.3 g18.21.4"], ["fram", "g18.21.2", true]
      , ["och", "g18.21.5", true], ["sade", "g18.21.5"], ["till", "g18.21.6", true], ["honom:", "g18.21.6"],
      ["”Herre,", "g18.21.7"], ["hur", "g18.21.8", true], ["ofta", "g18.21.8"],
      ["får", "", true], ["min", "g18.21.14"], ["bror", "g18.21.12 g18.21.13"], ["synda", "g18.21.9"],
      ["mot", "g18.21.10"], ["mig", "g18.21.11"]
      , ["och", "g18.21.15"], ["jag", "g18.21.16", true], ["förlåta", "g18.21.16"], ["honom?", "g18.21.17"],
      ["Upp", "g18.21.18", true], ["till", "g18.21.18"], ["sju", "g18.21.19"], ["gånger?”", "g18.21.19", true],
    ],
    annotations: [],
  },
  22: {
    english: [
      ["Jesus", "g18.22.3 g18.22.4"], ["säger", "g18.22.1"], ["till", "g18.22.2", true], ["honom:", "g18.22.2"],
      ["”Jag", "g18.22.6", true], ["säger", "g18.22.6"], ["dig", "g18.22.7"], ["inte", "g18.22.5"]
      , ["upp", "g18.22.8", true], ["till", "g18.22.8"], ["sju", "g18.22.9"], ["gånger,", "g18.22.9", true],
      ["utan", "g18.22.10"], ["upp", "g18.22.11", true], ["till", "g18.22.11"],
      ["sjuttio", "g18.22.12"], ["gånger", "g18.22.12", true], ["sju.", "g18.22.13"],
    ],
    annotations: [
      {
        kind: "text", refs: "g18.21.19 g18.22.12", lemma: "ἑπτάκις … ἑβδομηκοντάκις ἑπτά",
        title: "Sjuttiosju — Lemeks sång, omvänd",
        body: "Petrus erbjudande är genuint generöst — rabbinernas norm, dragen ur Amos ”för tre överträdelser, ja för fyra”, satte den formella förlåtelsens tak vid **tre**; han har mer än fördubblat det och rundat upp till fullkomlighetstalet. Jesu svar — ἑβδομηκοντάκις ἑπτά, *sjuttiosjufalt* eller ”sjuttio gånger sju” (grekiskan tillåter båda; 77 eller 490, och tvetydigheten kan inte spela roll, vilket är poängen) — är inget högre tak utan takens avskaffande: den som faktiskt räknar till sjuttiosju har redan tappat tråden. Men talet är inte valt på måfå. Det är ett exakt citat med omvänt förtecken: i 1 Mos 4:24 skryter **Lemek** — Kains ättling, Bibelns första kapprustningspoet — inför sina hustrur: *om Kain hämnas sjufalt, då Lemek sjuttiosjufalt* — obegränsad vedergällning, hämnd som förräntas genom generationerna, logiken som ännu driver varje fejd på jorden. Jesus lyfter Lemeks egen siffra och omdisponerar den: så gränslös som hämnden ville vara, så gränslös måste nu förlåtelsen vara — nåd som eskalerar längs samma kurva våldet en gång gjorde anspråk på. Första Mosebok 4 upphävs genom direkt citering. Och ifall aritmetiken ännu kändes abstrakt följer omedelbart en berättelse om hur bokföringen faktiskt ser ut från ovan.",
      },
    ],
  },
  23: {
    english: [
      ["Därför", "g18.23.1 g18.23.2"],
      ["har", "g18.23.3", true], ["himlarnas", "g18.23.6 g18.23.7"], ["rike", "g18.23.4 g18.23.5"],
      ["liknats", "g18.23.3"],
      ["vid", "g18.23.8", true], ["en", "", true], ["kung", "g18.23.9"], ["man,", "g18.23.8", true],
      ["som", "g18.23.10"], ["ville", "g18.23.11"],
      ["hålla", "g18.23.12", true], ["räkenskap", "g18.23.12 g18.23.13"],
      ["med", "g18.23.14"], ["sina", "g18.23.17"], ["tjänare.", "g18.23.15 g18.23.16"],
    ],
    annotations: [],
  },
  24: {
    english: [
      ["Och", "g18.24.2"], ["när", "g18.24.1", true], ["han", "g18.24.3"], ["börjat", "g18.24.1"],
      ["räkenskapen", "g18.24.4"]
      , ["fördes", "g18.24.5"], ["till", "g18.24.7", true], ["honom", "g18.24.7"], ["en", "g18.24.6"],
      ["som", "", true], ["var", "", true], ["skyldig", "g18.24.8"],
      ["tio", "g18.24.9", true], ["tusen", "g18.24.9"], ["talenter.", "g18.24.10"],
    ],
    annotations: [],
  },
  25: {
    english: [
      ["Och", "g18.25.3"], ["då", "g18.25.1", true], ["han", "g18.25.4"], ["inte", "g18.25.1"], ["kunde", "g18.25.2"],
      ["betala", "g18.25.5"]
      , ["befallde", "g18.25.6"], ["hans", "g18.25.8", true], ["herre", "g18.25.8 g18.25.9"]
      , ["att", "g18.25.10", true], ["han", "g18.25.7"], ["skulle", "", true], ["säljas,", "g18.25.10"],
      ["med", "g18.25.11", true], ["hustru", "g18.25.12 g18.25.13"]
      , ["och", "g18.25.14"], ["barn", "g18.25.15 g18.25.16"]
      , ["och", "g18.25.17"], ["allt", "g18.25.18"], ["han", "g18.25.20", true], ["ägde,", "g18.25.19 g18.25.20"],
      ["och", "g18.25.21"], ["skulden", "", true], ["betalas.", "g18.25.22"],
    ],
    annotations: [],
  },
  26: {
    english: [
      ["Då", "g18.26.2"], ["föll", "g18.26.1"], ["tjänaren", "g18.26.3 g18.26.4"], ["ner", "g18.26.1", true]
      , ["och", "", true], ["bönföll", "g18.26.5"], ["honom:", "g18.26.6 g18.26.7"],
      ["’Ha", "g18.26.8", true], ["tålamod", "g18.26.8"], ["med", "g18.26.9"], ["mig,", "g18.26.10"],
      ["så", "g18.26.11"], ["ska", "g18.26.13", true], ["jag", "", true], ["betala", "g18.26.13"], ["dig", "g18.26.14"], ["allt.’", "g18.26.12"],
    ],
    annotations: [],
  },
  27: {
    english: [
      ["Och", "g18.27.2"], ["gripen", "g18.27.1"], ["av", "", true], ["medlidande", "g18.27.1", true]
      , ["släppte", "g18.27.8"], ["den", "g18.27.7"], ["tjänarens", "g18.27.5 g18.27.6"], ["herre", "g18.27.3 g18.27.4"], ["honom", "g18.27.9"], ["fri,", "g18.27.8", true],
      ["och", "g18.27.10"], ["efterskänkte", "g18.27.13"], ["honom", "g18.27.14"],
      ["lånet.", "g18.27.11 g18.27.12"],
    ],
    annotations: [],
  },
  28: {
    english: [
      ["Men", "g18.28.2"], ["när", "g18.28.1", true], ["den", "g18.28.5"], ["tjänaren", "g18.28.3 g18.28.4"], ["gick", "g18.28.1"], ["ut", "g18.28.1", true]
      , ["fann", "g18.28.6"], ["han", "", true], ["en", "g18.28.7"],
      ["av", "g18.28.8", true], ["sina", "g18.28.10"], ["medtjänare,", "g18.28.9"],
      ["som", "g18.28.11"], ["var", "g18.28.12", true], ["skyldig", "g18.28.12"], ["honom", "g18.28.13"],
      ["hundra", "g18.28.14"], ["denarer,", "g18.28.15"],
      ["och", "g18.28.16"], ["han", "g18.28.17", true], ["grep", "g18.28.17"], ["honom", "g18.28.18"]
      , ["och", "", true], ["började", "g18.28.19", true], ["strypa", "g18.28.19"], ["honom", "", true], ["och", "g18.28.20", true], ["sade:", "g18.28.20"],
      ["’Betala", "g18.28.21"], ["vad", "g18.28.22 g18.28.23"], ["du", "g18.28.24", true], ["är", "", true], ["skyldig.’", "g18.28.24"],
    ],
    annotations: [],
  },
  29: {
    english: [
      ["Då", "g18.29.2"], ["föll", "g18.29.1"], ["hans", "g18.29.5"], ["medtjänare", "g18.29.3 g18.29.4"], ["ner", "g18.29.1", true]
      , ["och", "", true], ["bad", "g18.29.6"], ["honom:", "g18.29.7 g18.29.8"],
      ["’Ha", "g18.29.9", true], ["tålamod", "g18.29.9"], ["med", "g18.29.10"], ["mig,", "g18.29.11"],
      ["så", "g18.29.12"], ["ska", "g18.29.13", true], ["jag", "", true], ["betala", "g18.29.13"], ["dig.’", "g18.29.14"],
    ],
    annotations: [],
  },
  30: {
    english: [
      ["Men", "g18.30.2"], ["han", "g18.30.1"], ["ville", "g18.30.4"], ["inte;", "g18.30.3"],
      ["utan", "g18.30.5"], ["gick", "g18.30.6"], ["bort", "g18.30.6", true]
      , ["och", "", true], ["kastade", "g18.30.7"], ["honom", "g18.30.8"],
      ["i", "g18.30.9"], ["fängelse", "g18.30.10"]
      , ["tills", "g18.30.11"], ["han", "g18.30.12", true], ["betalat", "g18.30.12"],
      ["det", "g18.30.13", true], ["han", "", true], ["var", "", true], ["skyldig.", "g18.30.13 g18.30.14"],
    ],
    annotations: [],
  },
  31: {
    english: [
      ["När", "g18.31.1", true], ["då", "g18.31.2"], ["hans", "g18.31.5"], ["medtjänare", "g18.31.3 g18.31.4"],
      ["såg", "g18.31.1"], ["vad", "g18.31.6"], ["som", "", true], ["hänt", "g18.31.7"]
      , ["blev", "g18.31.8", true], ["de", "", true], ["djupt", "g18.31.9"], ["bedrövade,", "g18.31.8"],
      ["och", "g18.31.10"], ["de", "g18.31.11", true], ["gick", "g18.31.11"]
      , ["och", "", true], ["berättade", "g18.31.12"],
      ["för", "g18.31.13", true], ["sin", "g18.31.15"], ["herre", "g18.31.13 g18.31.14"],
      ["allt", "g18.31.16"], ["som", "g18.31.17"], ["hänt.", "g18.31.18"],
    ],
    annotations: [],
  },
  32: {
    english: [
      ["Då", "g18.32.1"], ["kallade", "g18.32.2"], ["hans", "g18.32.6"], ["herre", "g18.32.4 g18.32.5"],
      ["honom", "g18.32.3"], ["till", "g18.32.2", true], ["sig", "", true]
      , ["och", "g18.32.7", true], ["säger", "g18.32.7"], ["till", "g18.32.8", true], ["honom:", "g18.32.8"],
      ["’Onde", "g18.32.10"], ["tjänare!", "g18.32.9"],
      ["Hela", "g18.32.11"], ["den", "g18.32.14"], ["skulden", "g18.32.12 g18.32.13"]
      , ["efterskänkte", "g18.32.15"], ["jag", "", true], ["dig,", "g18.32.16"],
      ["därför", "g18.32.17", true], ["att", "g18.32.17"], ["du", "g18.32.18", true], ["bad", "g18.32.18"], ["mig;", "g18.32.19"],
    ],
    annotations: [],
  },
  33: {
    english: [
      ["borde", "g18.33.2"], ["inte", "g18.33.1"], ["också", "g18.33.3"], ["du", "g18.33.4"],
      ["ha", "", true], ["förbarmat", "g18.33.5"], ["dig", "g18.33.5", true], ["över", "", true],
      ["din", "g18.33.8"], ["medtjänare,", "g18.33.6 g18.33.7"],
      ["som", "g18.33.9"], ["jag", "g18.33.10"]
      , ["förbarmade", "g18.33.12"], ["mig", "g18.33.12", true], ["över", "", true], ["dig?’", "g18.33.11"],
    ],
    annotations: [],
  },
  34: {
    english: [
      ["Och", "g18.34.1"], ["i", "g18.34.2", true], ["vrede", "g18.34.2"],
      ["överlämnade", "g18.34.6"], ["hans", "g18.34.5"], ["herre", "g18.34.3 g18.34.4"], ["honom", "g18.34.7"],
      ["åt", "g18.34.8", true], ["plågoandarna", "g18.34.8 g18.34.9"]
      , ["tills", "g18.34.10 g18.34.11"], ["han", "g18.34.12", true], ["betalat", "g18.34.12"],
      ["allt", "g18.34.13"], ["han", "g18.34.14", true], ["var", "", true], ["skyldig", "g18.34.15"], ["honom.", "g18.34.16"],
    ],
    annotations: [],
  },
  35: {
    english: [
      ["Så", "g18.35.1"], ["ska", "g18.35.8", true], ["också", "g18.35.2"],
      ["min", "g18.35.5"], ["himmelske", "g18.35.6 g18.35.7"], ["Fader", "g18.35.3 g18.35.4"],
      ["göra", "g18.35.8"], ["med", "g18.35.9", true], ["er,", "g18.35.9"],
      ["om", "g18.35.10"], ["ni", "g18.35.12", true], ["inte", "g18.35.11"], ["förlåter,", "g18.35.12"], ["var", "g18.35.13"], ["och", "", true], ["en,", "g18.35.13", true],
      ["sin", "g18.35.16"], ["bror", "g18.35.14 g18.35.15"],
      ["av", "g18.35.17"], ["era", "g18.35.20"], ["hjärtan.", "g18.35.18 g18.35.19"],
    ],
    annotations: [
      {
        kind: "reading", refs: "g18.24.10 g18.28.15 g18.35.19", lemma: "μυρίων ταλάντων … ἑκατὸν δηνάρια … ἀπὸ τῶν καρδιῶν",
        title: "Tio tusen talenter — de två skuldernas aritmetik",
        body: "Talen är predikan; räkna dem. En **denar** är en dagslön. En **talent** är sex tusen denarer — ungefär tjugo års arbete. **Tio tusen talenter** är alltså runt *sextio miljoner arbetsdagar*: två hundra tusen års löner, mer än hela romerska Syriens årstribut, en siffra vald för att vara skrattretande — μύριοι är också grekiskans ord för ”oräkneliga”, det största tal språket namnger i ett ord. Ingen tjänare kunde vara skyldig det; ingen kunde betala det; mannens ”ha tålamod så betalar jag allt” är den totala insolvensens komedi som ännu räknar avbetalningar. Mot detta: **hundra denarer** — riktiga pengar, tre månadslöner, den sortens skuld som faktiskt svider, vilket gör liknelsen ärlig; oförrätterna vi ombeds förlåta är inte ingenting. Men förhållandet är sexhundratusen mot ett, och den förlåtne går *rakt ut* (ἐξελθών — samma timme, nåden ännu våt på honom) och tar sin kollega **om strupen**. Medtjänarnas publik blir ”djupt bedrövad” — liknelsens modell för hur förlåtna gemenskaper bör känna när en förlåten människa vägrar förlåta. Slutet är Nya testamentet som strängast: benådningen *återkallas*, plågoandarna kommer, och Jesus undertecknar personligen — *så ska också min himmelske Fader göra med er*. Detta är femte bönen i hans egen bön (6:12) berättad som skräckhistoria: det oförlåtande hjärtat nekas inte nåd så mycket som det görs oförmöget att hålla den — ett kärl som inte häller kan, visar det sig, inte förbli fullt. Och slutfrasen stänger varje teknikalitets kryphål: **ἀπὸ τῶν καρδιῶν ὑμῶν** — av era hjärtan. Inte förlåtelsens ord; saken själv.",
      },
    ],
  },
};
