// Matteus 3 — svensk översättning & annotationer.
// english-fältet håller SVENSKA tokens, alignerade mot samma g-id:n.

export const CONTENT = {
  1: {
    english: [
      ["I", "g3.1.1"], ["de", "g3.1.3"], ["dagarna", "g3.1.4 g3.1.5"],
      ["träder", "g3.1.6"], ["Johannes", "g3.1.7"], ["Döparen", "g3.1.8 g3.1.9"], ["fram", "g3.1.6", true],
      ["och", "", true], ["förkunnar", "g3.1.10"], ["i", "g3.1.11"], ["Judeens", "g3.1.14 g3.1.15"], ["öken:", "g3.1.12 g3.1.13"],
    ],
    annotations: [],
  },
  2: {
    english: [
      ["”Vänd", "g3.2.1 g3.2.2"], ["om:", "g3.2.2", true],
      ["ty", "g3.2.4"], ["himlarnas", "g3.2.7 g3.2.8"], ["rike", "g3.2.5 g3.2.6"],
      ["har", "g3.2.3", true], ["kommit", "g3.2.3"], ["nära.”", "g3.2.3", true],
    ],
    annotations: [
      {
        kind: "translation", refs: "g3.2.2 g3.2.3 g3.2.8", lemma: "μετανοεῖτε … ἤγγικεν",
        title: "”Vänd om” — och varför ”himlarna”",
        body: "Tre översättningsval i en enda kort mening. **Μετανοεῖτε** brukar återges ”gör bättring” eller ”omvänd er”, ord som svenskan dränkt i ånger och botgöring; grekiskan betyder ett *sinnesskifte* — och bakom står hebreiskans **שׁוּב** (*shuv*), att vända om, som en vandrare vänder på vägen. Kallelsen är mindre ”känn ånger” än ”byt riktning”. **Ἤγγικεν** står i perfekt: riket *har kommit nära* och står nu intill — ankomsten påbörjad, inte bara utlyst. Och Matteus ensam skriver riket **himlarnas** där Markus och Lukas skriver ”Guds”: inte ett annat, himlaburet rike, utan den vördnadsfulla judiska vanan att inte uttala Guds namn — samma instinkt som säger ”det vete himlen”. Vi behåller pluralen ”himlarna” så att idiomet förblir hörbart.",
      },
    ],
  },
  3: {
    english: [
      ["Ty", "g3.3.2"], ["denne", "g3.3.1"], ["är", "g3.3.3"], ["den", "g3.3.4"], ["om", "", true], ["vilken", "", true], ["det", "", true], ["talats", "g3.3.5"],
      ["genom", "g3.3.6"], ["profeten", "g3.3.8 g3.3.9"], ["Jesaja:", "g3.3.7 g3.3.10"],
      ["”En", "", true], ["röst", "g3.3.11"], ["av", "", true], ["en", "", true], ["som", "g3.3.12", true], ["ropar", "g3.3.12"], ["i", "g3.3.13"], ["öknen:", "g3.3.14 g3.3.15"],
      ["’Bered", "g3.3.16"], ["Herrens", "g3.3.19"], ["väg,", "g3.3.17 g3.3.18"],
      ["gör", "g3.3.21"], ["hans", "g3.3.24"], ["stigar", "g3.3.22 g3.3.23"], ["raka.’”", "g3.3.20"],
    ],
    annotations: [
      {
        kind: "text", refs: "g3.3.12 g3.3.15", lemma: "φωνὴ βοῶντος ἐν τῇ ἐρήμῳ",
        title: "Var ska kommatecknet stå?",
        body: "Jesaja 40:3 lyder på hebreiska: *”En röst ropar: ’**I öknen** bered HERRENS väg.’”* — öknen är där vägen byggs, inte där rösten är. Septuaginta flyttade frasen: *”En röst som **ropar i öknen**: ’Bered…’”* — och det är Septuaginta alla fyra evangelierna citerar, eftersom den passar en man som verkligen ropade i Judeens öken. Antika texter saknade skiljetecken, så ingendera läsningen är ett ”felcitat”; kommatecknet är tolkning i båda fallen. Qumranförsamlingen läste för övrigt versen på hebreiskans vis och drog *motsatt* slutsats — de flyttade ut i öknen för att bygga vägen. Johannes stod i samma öken med samma vers och vände den utåt. En vers, inget komma, två rörelser: ett litet bevis för att läsning alltid varit en handling, inte en passivitet.",
      },
    ],
  },
  4: {
    english: [
      ["Denne", "g3.4.1"], ["Johannes", "g3.4.3 g3.4.4"], ["hade", "g3.4.5"], ["sin", "g3.4.8"], ["klädnad", "g3.4.6 g3.4.7"],
      ["av", "g3.4.9"], ["kamelhår", "g3.4.10 g3.4.11"],
      ["och", "g3.4.12"], ["ett", "", true], ["läderbälte", "g3.4.13 g3.4.14"], ["kring", "g3.4.15"], ["sina", "g3.4.18"], ["höfter;", "g3.4.16 g3.4.17"],
      ["och", "g3.4.20"], ["hans", "g3.4.23"], ["föda", "g3.4.19 g3.4.21"], ["var", "g3.4.22"], ["gräshoppor", "g3.4.24"], ["och", "g3.4.25"], ["vildhonung.", "g3.4.26 g3.4.27"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["Då", "g3.5.1"], ["gick", "g3.5.2"], ["Jerusalem", "g3.5.5"], ["ut", "g3.5.2", true], ["till", "g3.5.3"], ["honom,", "g3.5.4"],
      ["och", "g3.5.6"], ["hela", "g3.5.7"], ["Judeen,", "g3.5.8 g3.5.9"],
      ["och", "g3.5.10"], ["hela", "g3.5.11"], ["Jordan-trakten,", "g3.5.12 g3.5.13 g3.5.14 g3.5.15"],
    ],
    annotations: [],
  },
  6: {
    english: [
      ["och", "g3.6.1"], ["de", "g3.6.2", true], ["döptes", "g3.6.2"], ["av", "g3.6.7"], ["honom", "g3.6.8"],
      ["i", "g3.6.3"], ["floden", "g3.6.6"], ["Jordan,", "g3.6.4 g3.6.5"],
      ["medan", "", true], ["de", "", true], ["bekände", "g3.6.9"], ["sina", "g3.6.12"], ["synder.", "g3.6.10 g3.6.11"],
    ],
    annotations: [],
  },
  7: {
    english: [
      ["Men", "g3.7.2"], ["när", "", true], ["han", "", true], ["såg", "g3.7.1"], ["många", "g3.7.3"], ["av", "g3.7.4"], ["fariseerna", "g3.7.5"],
      ["och", "g3.7.6"], ["saddukeerna", "g3.7.7"], ["komma", "g3.7.8"], ["till", "g3.7.9"], ["dopet", "g3.7.10 g3.7.11"],
      ["sade", "g3.7.12"], ["han", "", true], ["till", "g3.7.13", true], ["dem:", "g3.7.13"],
      ["”Huggormsyngel!", "g3.7.14 g3.7.15"],
      ["Vem", "g3.7.16"], ["har", "", true], ["visat", "g3.7.17"], ["er", "g3.7.18"], ["att", "g3.7.19", true], ["fly", "g3.7.19"],
      ["från", "g3.7.20"], ["den", "g3.7.21"], ["kommande", "g3.7.22"], ["vreden?", "g3.7.23"],
    ],
    annotations: [],
  },
  8: {
    english: [
      ["Bär", "g3.8.1"], ["då", "g3.8.2"], ["frukt", "g3.8.3"], ["som", "g3.8.4", true], ["är", "", true], ["omvändelsen", "g3.8.5 g3.8.6"], ["värdig;", "g3.8.4"],
    ],
    annotations: [],
  },
  9: {
    english: [
      ["och", "g3.9.1"], ["inbilla", "g3.9.3"], ["er", "", true], ["inte", "g3.9.2"], ["att", "g3.9.4", true], ["ni", "", true], ["kan", "", true], ["säga", "g3.9.4"], ["inom", "g3.9.5"], ["er:", "g3.9.6"],
      ["’Vi", "g3.9.8", true], ["har", "g3.9.8"], ["Abraham", "g3.9.9 g3.9.10"], ["till", "", true], ["far.’", "g3.9.7"],
      ["Ty", "g3.9.12"], ["jag", "g3.9.11", true], ["säger", "g3.9.11"], ["er:", "g3.9.13"],
      ["Gud", "g3.9.16 g3.9.17"], ["förmår", "g3.9.15"],
      ["ur", "g3.9.18"], ["dessa", "g3.9.21"], ["stenar", "g3.9.19 g3.9.20"],
      ["uppväcka", "g3.9.22"], ["barn", "g3.9.23"], ["åt", "g3.9.24", true], ["Abraham.", "g3.9.25"],
    ],
    annotations: [
      {
        kind: "grammar", refs: "g3.9.20 g3.9.23", lemma: "λίθων … τέκνα",
        title: "Stenar och söner — en ordlek under grekiskan",
        body: "På den arameiska Johannes skulle ha talat heter ”stenarna” **אַבְנַיָּא** (*ʾabnayyāʾ*) och ”sönerna” **בְּנַיָּא** (*bənayyāʾ*) — hotet är ett rim: Gud kan uppväcka *banim* ur *abanim*. Grekiskan bevarar meningen och tappar musiken, ett av många ställen där evangeliernas grekiska synligt är översättning av en semitisk röst (värt att notera, eftersom det talar för att dessa ord inte först formulerades på grekiska). Rimmet bär teologin: härkomst garanterar ingenting — ett anspråk riktat här mot Abrahams stamtavla, och ett som detta evangelium redan gestaltat, då det öppnade med en släkttavla vars nåd gång på gång kom genom utomstående. Att stå i rätt kö, säger Johannes, är inte detsamma som att vända om.",
      },
    ],
  },
  10: {
    english: [
      ["Redan", "g3.10.1"], ["ligger", "g3.10.10"], ["yxan", "g3.10.3 g3.10.4"], ["vid", "g3.10.5"], ["trädens", "g3.10.8 g3.10.9"], ["rot;", "g3.10.6 g3.10.7"],
      ["varje", "g3.10.11"], ["träd", "g3.10.13"], ["alltså", "g3.10.12"], ["som", "g3.10.14", true], ["inte", "g3.10.14"], ["bär", "g3.10.15"], ["god", "g3.10.17"], ["frukt", "g3.10.16"],
      ["huggs", "g3.10.18"], ["ner", "g3.10.18", true], ["och", "g3.10.19"], ["kastas", "g3.10.22"], ["i", "g3.10.20"], ["elden.", "g3.10.21"],
    ],
    annotations: [],
  },
  11: {
    english: [
      ["Jag", "g3.11.1"], ["döper", "g3.11.4"], ["er", "g3.11.3"], ["i", "g3.11.5"], ["vatten,", "g3.11.6"], ["till", "g3.11.7"], ["omvändelse;", "g3.11.8"],
      ["men", "g3.11.10"], ["han", "g3.11.9"], ["som", "g3.11.13", true], ["kommer", "g3.11.13"], ["efter", "g3.11.11"], ["mig", "g3.11.12"],
      ["är", "g3.11.16"], ["starkare", "g3.11.14"], ["än", "g3.11.15", true], ["jag,", "g3.11.15"],
      ["och", "", true], ["jag", "g3.11.19", true], ["är", "g3.11.19"], ["inte", "g3.11.18"], ["värdig", "g3.11.20"], ["att", "g3.11.23", true], ["bära", "g3.11.23"], ["hans", "g3.11.17"], ["sandaler;", "g3.11.21 g3.11.22"],
      ["han", "g3.11.24"], ["ska", "", true], ["döpa", "g3.11.26"], ["er", "g3.11.25"],
      ["i", "g3.11.27"], ["helig", "g3.11.29"], ["Ande", "g3.11.28"], ["och", "g3.11.30"], ["eld", "g3.11.31"], ["—", "", true],
    ],
    annotations: [],
  },
  12: {
    english: [
      ["han", "g3.12.1", true], ["som", "g3.12.1"], ["har", "", true], ["kastskoveln", "g3.12.2 g3.12.3"], ["i", "g3.12.4"], ["sin", "g3.12.7"], ["hand,", "g3.12.5 g3.12.6"],
      ["och", "g3.12.8"], ["han", "", true], ["ska", "", true], ["rensa", "g3.12.9"], ["sin", "g3.12.12"], ["tröskplats", "g3.12.10 g3.12.11"],
      ["och", "g3.12.13"], ["samla", "g3.12.14"], ["sitt", "g3.12.17"], ["vete", "g3.12.15 g3.12.16"], ["i", "g3.12.18"], ["ladan,", "g3.12.19 g3.12.20"],
      ["men", "g3.12.22"], ["agnarna", "g3.12.21 g3.12.23"], ["ska", "", true], ["han", "", true], ["bränna", "g3.12.24"],
      ["i", "g3.12.25", true], ["osläcklig", "g3.12.26"], ["eld.”", "g3.12.25"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g3.12.23 g3.12.26", lemma: "ἄχυρον … πυρὶ ἀσβέστῳ",
        title: "Elden i förkunnelsen",
        body: "Det finns inget ärligt sätt att mildra Johannes: yxan, kastskoveln, den osläckliga elden är hot, och Döparen menar dem. Två iakttagelser — inte som bedövning utan som noggrannhet. För det första sorterar bilden en *skörd*, inte en publik av främlingar — vete och agnar kommer från samma fält, ja samma strå; linjen Johannes drar löper genom Israel, och (som senare kapitel ska envisas med) genom människor, inte bara mellan dem. För det andra: lägg märke till vad kap. 11 kommer att berätta. Johannes, fängslad, hör vad den Starkare faktiskt gör — botar, förkunnar för fattiga, ingen yxa i sikte — och sänder bud för att fråga: *”Är du den som ska komma, eller ska vi vänta på någon annan?”* Evangeliets egen härold blir dess förste tvivlare, just därför att Jesus inte motsvarade elden Johannes utlovat. Matteus behåller både predikan och den senare rådvillheten. En bok som bedrev propaganda hade behållit bara den ena.",
      },
    ],
  },
  13: {
    english: [
      ["Då", "g3.13.1"], ["kommer", "g3.13.2"], ["Jesus", "g3.13.3 g3.13.4"], ["från", "g3.13.5"], ["Galileen", "g3.13.6 g3.13.7"],
      ["till", "g3.13.8"], ["Jordan,", "g3.13.9 g3.13.10"],
      ["till", "g3.13.11"], ["Johannes,", "g3.13.12 g3.13.13"],
      ["för", "g3.13.14"], ["att", "g3.13.14", true], ["döpas", "g3.13.15"], ["av", "g3.13.16"], ["honom.", "g3.13.17"],
    ],
    annotations: [],
  },
  14: {
    english: [
      ["Men", "g3.14.2"], ["Johannes", "g3.14.1", true], ["ville", "g3.14.3", true], ["hindra", "g3.14.3"], ["honom", "g3.14.4"],
      ["och", "", true], ["sade:", "g3.14.5"], ["”Jag", "g3.14.6"], ["behöver", "g3.14.7 g3.14.8"],
      ["döpas", "g3.14.11"], ["av", "g3.14.9"], ["dig,", "g3.14.10"],
      ["och", "g3.14.12"], ["du", "g3.14.13"], ["kommer", "g3.14.14"], ["till", "g3.14.15"], ["mig?”", "g3.14.16"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g3.14.3 g3.14.11", lemma: "διεκώλυεν",
        title: "Det pinsamma dopet — ett argument ur förlägenheten",
        body: "Varför köar den syndfrie till ett **omvändelsedop**? Frågan är så självklar att Matteus låter Johannes själv ställa den — och den lilla protesten är historiskt dyrbar. Historiker väger evangeliematerial bland annat med **förlägenhetskriteriet**: en rörelse uppfinner inte berättelser som räcker kritikerna ammunition. Att Jesus döptes av Johannes — till synes underordnad, till synes botfärdig — besvärade den tidiga kyrkan synbart (Markus säger det rakt av; Matteus lägger till denna protest; Lukas nämner dopet i en bisats; Johannesevangeliet skildrar duvan men utelämnar själva dopet). Händelsen är berggrund just därför att den var pinsam. Och Jesu svar — *”så bör vi fullborda all rättfärdighet”* — avböjer undantaget Johannes erbjuder honom: han går ner i vattnet där syndarna står, första handlingen i en tjänst som ska sluta räknad bland förbrytare. Han börjar, med andra ord, med att ställa sig i *vår* kö.",
      },
    ],
  },
  15: {
    english: [
      ["Men", "g3.15.2"], ["Jesus", "g3.15.3 g3.15.4"], ["svarade", "g3.15.1 g3.15.5"], ["honom:", "g3.15.6"],
      ["”Låt", "g3.15.7"], ["det", "", true], ["ske", "", true], ["nu;", "g3.15.8"],
      ["ty", "g3.15.10"], ["så", "g3.15.9"], ["bör", "g3.15.11 g3.15.12"], ["vi", "g3.15.13"],
      ["fullborda", "g3.15.14"], ["all", "g3.15.15"], ["rättfärdighet.”", "g3.15.16"],
      ["Då", "g3.15.17"], ["lät", "g3.15.18"], ["han", "", true], ["honom.", "g3.15.19"],
    ],
    annotations: [],
  },
  16: {
    english: [
      ["Och", "g3.16.2"], ["när", "g3.16.1", true], ["Jesus", "g3.16.3 g3.16.4"], ["hade", "", true], ["döpts", "g3.16.1"],
      ["steg", "g3.16.6"], ["han", "", true], ["genast", "g3.16.5"], ["upp", "g3.16.6", true], ["ur", "g3.16.7"], ["vattnet;", "g3.16.8 g3.16.9"],
      ["och", "g3.16.10"], ["se,", "g3.16.11"], ["himlarna", "g3.16.13 g3.16.14"], ["öppnades,", "g3.16.12"],
      ["och", "g3.16.15"], ["han", "", true], ["såg", "g3.16.16"], ["Guds", "g3.16.18"], ["Ande", "g3.16.17"],
      ["sänka", "g3.16.19"], ["sig", "g3.16.19", true], ["som", "g3.16.20"], ["en", "", true], ["duva", "g3.16.21"], ["och", "", true], ["komma", "g3.16.22"], ["över", "g3.16.23"], ["honom;", "g3.16.24"],
    ],
    annotations: [],
  },
  17: {
    english: [
      ["och", "g3.17.1"], ["se,", "g3.17.2"], ["en", "", true], ["röst", "g3.17.3"], ["ur", "g3.17.4"], ["himlarna,", "g3.17.5 g3.17.6"], ["som", "g3.17.7", true], ["sade:", "g3.17.7"],
      ["”Denne", "g3.17.8"], ["är", "g3.17.9"], ["min", "g3.17.12"], ["Son,", "g3.17.10 g3.17.11"], ["den", "g3.17.13"], ["älskade,", "g3.17.14"],
      ["i", "g3.17.15"], ["vilken", "g3.17.16"], ["jag", "g3.17.17", true], ["har", "", true], ["min", "", true], ["glädje.”", "g3.17.17"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g3.17.10 g3.17.14 g3.17.17", lemma: "ὁ Υἱός μου ὁ ἀγαπητός",
        title: "Rösten — två skriftord flätade, ett tredje innehållet",
        body: "Orden från himlen är en väv: **”min Son”** ur Psalm 2:7 — kröningsformeln för Davids kungar — och **”i vilken jag har min glädje”** ur Jesaja 42:1, öppningen av *Tjänar*-sångerna, vars sångare bär andras sår och slutar föraktad. Kungapsalm plus lidande tjänare: hela detta evangeliums båge är sammanpressad i en enda mening innan tjänsten börjat. Och bakom **”den älskade”** (ἀγαπητός) hör många 1 Mos 22:2 — ”din son, din *älskade* son, Isak” — barnet som leddes uppför ett berg för att offras. Fadern, Sonen, Anden som sänker sig: senare lära ska bygga sin grammatik ur scener som denna, men lägg märke till återhållsamheten — Matteus målar tablån och definierar ingenting. Scenen argumenterar inte; den visar. Argumenterandet, litar detta evangelium på, kan komma efter seendet.",
      },
    ],
  },
};
