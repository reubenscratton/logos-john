// Matteus 1 — svensk översättning & annotationer.
// english-fältet håller SVENSKA tokens, alignerade mot samma g-id:n.

export const CONTENT = {
  1: {
    english: [
      ["Boken", "g1.1.1"], ["om", "g1.1.2", true], ["Jesu", "g1.1.3"], ["Kristi", "g1.1.4"], ["tillblivelse,", "g1.1.2"],
      ["Davids", "g1.1.6"], ["son,", "g1.1.5"],
      ["Abrahams", "g1.1.8"], ["son.", "g1.1.7"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.1.1 g1.1.2", lemma: "βίβλος γενέσεως",
        title: "”En bok om tillblivelse”",
        body: "Matteus två första ord är ett medvetet eko. **Βίβλος γενέσεως** — *bok om tillblivelse* — är exakt den fras Gamla testamentets grekiska översättning använder i 1 Mos 2:4 och 5:1 (”boken om himlarnas och jordens… om Adams tillblivelse”). Innan ett enda namn har räknats upp har evangelisten alltså gjort sitt anspråk: det som börjar här är av samma ordning som skapelsen själv — en *ny* genesis. Vi översätter ordet med **”tillblivelse”** snarare än det plattare ”släkttavla”: samma substantiv återkommer i v. 18 om Jesu avlelse, och Matteus menar att klangen ska bära. Det är också en signal om metod — detta evangelium är skrivet med hela den hebreiska Bibeln surrande under ytan, och det räknar med att du hör ackorden.",
      },
    ],
  },
  2: {
    english: [
      ["Abraham", "g1.2.1"], ["födde", "g1.2.2"], ["Isak,", "g1.2.3 g1.2.4"],
      ["och", "g1.2.6"], ["Isak", "g1.2.5"], ["födde", "g1.2.7"], ["Jakob,", "g1.2.8 g1.2.9"],
      ["och", "g1.2.11"], ["Jakob", "g1.2.10"], ["födde", "g1.2.12"], ["Juda", "g1.2.13 g1.2.14"],
      ["och", "g1.2.15"], ["hans", "g1.2.18"], ["bröder,", "g1.2.16 g1.2.17"],
    ],
    annotations: [],
  },
  3: {
    english: [
      ["och", "g1.3.2"], ["Juda", "g1.3.1"], ["födde", "g1.3.3"], ["Peres", "g1.3.4 g1.3.5"],
      ["och", "g1.3.6"], ["Sera", "g1.3.7 g1.3.8"], ["med", "g1.3.9"], ["Tamar,", "g1.3.10 g1.3.11"],
      ["och", "g1.3.13"], ["Peres", "g1.3.12"], ["födde", "g1.3.14"], ["Hesron,", "g1.3.15 g1.3.16"],
      ["och", "g1.3.18"], ["Hesron", "g1.3.17"], ["födde", "g1.3.19"], ["Aram,", "g1.3.20 g1.3.21"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.3.11 g1.3.9", lemma: "ἐκ τῆς Θαμάρ",
        title: "Fyra oväntade kvinnor",
        body: "Antika släkttavlor löper genom fäder; Matteus avbryter sin fyra gånger för att namnge en mor — och vilka fyra. **Tamar** (v. 3) blev havande med Peres genom att utge sig för att vara prostituerad inför sin svärfar (1 Mos 38). **Rahab** (v. 5) *var* det, och därtill kanaaneiska från Jeriko (Jos 2). **Rut** (v. 5) var moabitiska — från ett folk portat från Herrens församling (5 Mos 23:3). Och Batseba (v. 6) namnges inte ens: hon är ”**Urias** hustru”, en formulering som låter Davids äktenskapsbrott och mord stå kvar i protokollet. Utländska kvinnor, oregelbundna förbindelser, ihågkomna skandaler — medvetet invävda i Messias egen stamtavla. Mönstret förbereder en femte kvinna (v. 16) vars graviditet också kommer att väcka viskningar. Matteus poäng är stillsamt omvälvande: löfteslinjen har aldrig gått genom respektabiliteten, och nåden har aldrig behövt rena händer att arbeta med.",
      },
    ],
  },
  4: {
    english: [
      ["och", "g1.4.2"], ["Aram", "g1.4.1"], ["födde", "g1.4.3"], ["Amminadab,", "g1.4.4 g1.4.5"],
      ["och", "g1.4.7"], ["Amminadab", "g1.4.6"], ["födde", "g1.4.8"], ["Nahshon,", "g1.4.9 g1.4.10"],
      ["och", "g1.4.12"], ["Nahshon", "g1.4.11"], ["födde", "g1.4.13"], ["Salmon,", "g1.4.14 g1.4.15"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["och", "g1.5.2"], ["Salmon", "g1.5.1"], ["födde", "g1.5.3"], ["Boas", "g1.5.4 g1.5.5"],
      ["med", "g1.5.6"], ["Rahab,", "g1.5.7 g1.5.8"],
      ["och", "g1.5.10"], ["Boas", "g1.5.9"], ["födde", "g1.5.11"], ["Obed", "g1.5.12 g1.5.13"],
      ["med", "g1.5.14"], ["Rut,", "g1.5.15 g1.5.16"],
      ["och", "g1.5.18"], ["Obed", "g1.5.17"], ["födde", "g1.5.19"], ["Jishaj,", "g1.5.20 g1.5.21"],
    ],
    annotations: [],
  },
  6: {
    english: [
      ["och", "g1.6.2"], ["Jishaj", "g1.6.1"], ["födde", "g1.6.3"], ["David,", "g1.6.4 g1.6.5"],
      ["kungen.", "g1.6.6 g1.6.7"],
      ["Och", "g1.6.9"], ["David", "g1.6.8"], ["födde", "g1.6.10"], ["Salomo", "g1.6.11 g1.6.12"],
      ["med", "g1.6.13"], ["Urias", "g1.6.15 g1.6.16"], ["hustru,", "g1.6.14"],
    ],
    annotations: [],
  },
  7: {
    english: [
      ["och", "g1.7.2"], ["Salomo", "g1.7.1"], ["födde", "g1.7.3"], ["Rehabeam,", "g1.7.4 g1.7.5"],
      ["och", "g1.7.7"], ["Rehabeam", "g1.7.6"], ["födde", "g1.7.8"], ["Avia,", "g1.7.9 g1.7.10"],
      ["och", "g1.7.12"], ["Avia", "g1.7.11"], ["födde", "g1.7.13"], ["Asaf,", "g1.7.14 g1.7.15"],
    ],
    annotations: [
      {
        kind: "text", refs: "g1.7.15", lemma: "Ἀσάφ",
        title: "”Asaf” — ett fel som den äldsta texten låter stå",
        body: "Kungen som följde Avia hette **Asa** (1 Kung 15:8) — men de äldsta handskrifterna av Matteus (ℵ, B, med flera bakom Nestle 1904) läser **Ἀσάφ, ”Asaf”**, psalmistens namn. Samma sak händer i v. 10, där profeten **”Amos”** står där kung **Amon** hör hemma. Senare avskrivare städade båda namnen så att de stämde med Kungaböckerna, och många översättningar följer dem i tysthet. Vi översätter vad den äldsta återvinnbara texten faktiskt säger. Det valet är ett litet fönster in i hur denna utgåva arbetar: Nya testamentets text är *rekonstruerad* ur verkliga, ofullkomliga, underbart talrika dokument, och ärlighet betyder att visa skarvarna i stället för att slipa bort dem. Om Matteus skrev fel, eller följde en stavningstradition som nu är förlorad, eller avsåg en anspelning på psalmist och profet — evidensen är evidensen, och den är stadig nog att inte behöva retuscheras.",
      },
    ],
  },
  8: {
    english: [
      ["och", "g1.8.2"], ["Asaf", "g1.8.1"], ["födde", "g1.8.3"], ["Joshafat,", "g1.8.4 g1.8.5"],
      ["och", "g1.8.7"], ["Joshafat", "g1.8.6"], ["födde", "g1.8.8"], ["Joram,", "g1.8.9 g1.8.10"],
      ["och", "g1.8.12"], ["Joram", "g1.8.11"], ["födde", "g1.8.13"], ["Ussia,", "g1.8.14 g1.8.15"],
    ],
    annotations: [],
  },
  9: {
    english: [
      ["och", "g1.9.2"], ["Ussia", "g1.9.1"], ["födde", "g1.9.3"], ["Jotam,", "g1.9.4 g1.9.5"],
      ["och", "g1.9.7"], ["Jotam", "g1.9.6"], ["födde", "g1.9.8"], ["Ahas,", "g1.9.9 g1.9.10"],
      ["och", "g1.9.12"], ["Ahas", "g1.9.11"], ["födde", "g1.9.13"], ["Hiskia,", "g1.9.14 g1.9.15"],
    ],
    annotations: [],
  },
  10: {
    english: [
      ["och", "g1.10.2"], ["Hiskia", "g1.10.1"], ["födde", "g1.10.3"], ["Manasse,", "g1.10.4 g1.10.5"],
      ["och", "g1.10.7"], ["Manasse", "g1.10.6"], ["födde", "g1.10.8"], ["Amos,", "g1.10.9 g1.10.10"],
      ["och", "g1.10.12"], ["Amos", "g1.10.11"], ["födde", "g1.10.13"], ["Josia,", "g1.10.14 g1.10.15"],
    ],
    annotations: [],
  },
  11: {
    english: [
      ["och", "g1.11.2"], ["Josia", "g1.11.1"], ["födde", "g1.11.3"], ["Jekonja", "g1.11.4 g1.11.5"],
      ["och", "g1.11.6"], ["hans", "g1.11.9"], ["bröder,", "g1.11.7 g1.11.8"],
      ["vid", "g1.11.10"], ["deportationen", "g1.11.11 g1.11.12"], ["till", "", true], ["Babylon.", "g1.11.13"],
    ],
    annotations: [],
  },
  12: {
    english: [
      ["Och", "g1.12.2"], ["efter", "g1.12.1"], ["deportationen", "g1.12.3 g1.12.4"], ["till", "", true], ["Babylon", "g1.12.5"],
      ["födde", "g1.12.7"], ["Jekonja", "g1.12.6"], ["Shealtiel,", "g1.12.8 g1.12.9"],
      ["och", "g1.12.11"], ["Shealtiel", "g1.12.10"], ["födde", "g1.12.12"], ["Serubbabel,", "g1.12.13 g1.12.14"],
    ],
    annotations: [],
  },
  13: {
    english: [
      ["och", "g1.13.2"], ["Serubbabel", "g1.13.1"], ["födde", "g1.13.3"], ["Aviud,", "g1.13.4 g1.13.5"],
      ["och", "g1.13.7"], ["Aviud", "g1.13.6"], ["födde", "g1.13.8"], ["Eljakim,", "g1.13.9 g1.13.10"],
      ["och", "g1.13.12"], ["Eljakim", "g1.13.11"], ["födde", "g1.13.13"], ["Asor,", "g1.13.14 g1.13.15"],
    ],
    annotations: [],
  },
  14: {
    english: [
      ["och", "g1.14.2"], ["Asor", "g1.14.1"], ["födde", "g1.14.3"], ["Sadok,", "g1.14.4 g1.14.5"],
      ["och", "g1.14.7"], ["Sadok", "g1.14.6"], ["födde", "g1.14.8"], ["Akim,", "g1.14.9 g1.14.10"],
      ["och", "g1.14.12"], ["Akim", "g1.14.11"], ["födde", "g1.14.13"], ["Eliud,", "g1.14.14 g1.14.15"],
    ],
    annotations: [],
  },
  15: {
    english: [
      ["och", "g1.15.2"], ["Eliud", "g1.15.1"], ["födde", "g1.15.3"], ["Eleasar,", "g1.15.4 g1.15.5"],
      ["och", "g1.15.7"], ["Eleasar", "g1.15.6"], ["födde", "g1.15.8"], ["Mattan,", "g1.15.9 g1.15.10"],
      ["och", "g1.15.12"], ["Mattan", "g1.15.11"], ["födde", "g1.15.13"], ["Jakob,", "g1.15.14 g1.15.15"],
    ],
    annotations: [],
  },
  16: {
    english: [
      ["och", "g1.16.2"], ["Jakob", "g1.16.1"], ["födde", "g1.16.3"], ["Josef,", "g1.16.4 g1.16.5"],
      ["Marias", "g1.16.8"], ["man;", "g1.16.6 g1.16.7"],
      ["av", "g1.16.9"], ["henne", "g1.16.10"], ["föddes", "g1.16.11"], ["Jesus,", "g1.16.12"],
      ["som", "g1.16.13"], ["kallas", "g1.16.14"], ["Kristus.", "g1.16.15"],
    ],
    annotations: [
      {
        kind: "reading", refs: "g1.16.9 g1.16.10 g1.16.11", lemma: "ἐξ ἧς ἐγεννήθη",
        title: "Där mönstret bryts",
        body: "Trettionio gånger har trumslaget varit detsamma: *födde, födde, födde.* Så, vid allra sista länken, viker grammatiken av. Om Josef sägs inte att han födde Jesus; han är ”Marias man”, och Jesus föddes ”**av henne**” — och detta *av henne* (ἐξ ἧς) står i **femininum singular**. I en lista byggd helt av fäder hänger den sista födelsen på en mor ensam, och verbet blir passivt: *föddes* — avlades, genom en verkan som meningen medvetet låter bli att namnge före v. 18. Om du någon gång känt att tro kräver att man stänger av sin uppmärksamhet på detaljer: lägg märke till att argumentet för denna födelses egendomlighet här vilar på ett *pronomens genus*. Släkttavlan är en lång, tålmodig, sakligt utseende korridor — och den slutar vid en dörr som bara öppnas i sidled. Vad du än gör av det som finns bakom dörren har Matteus inte smugglat in det; han har lett dig dit i fullt dagsljus, med skandaler och babyloniskt vrakgods och allt. En så krokig linje, antyder han, skulle alltid behöva något annat än biologi för att fullbordas.",
      },
    ],
  },
  17: {
    english: [
      ["Alltså", "g1.17.2"], ["är", "", true], ["alla", "g1.17.1"], ["släktleden", "g1.17.3 g1.17.4"],
      ["från", "g1.17.5"], ["Abraham", "g1.17.6"], ["till", "g1.17.7"], ["David", "g1.17.8"],
      ["fjorton", "g1.17.10"], ["led;", "g1.17.9"],
      ["och", "g1.17.11"], ["från", "g1.17.12"], ["David", "g1.17.13"], ["till", "g1.17.14"], ["deportationen", "g1.17.15 g1.17.16"], ["till", "", true], ["Babylon", "g1.17.17"],
      ["fjorton", "g1.17.19"], ["led;", "g1.17.18"],
      ["och", "g1.17.20"], ["från", "g1.17.21"], ["deportationen", "g1.17.22 g1.17.23"], ["till", "", true], ["Babylon", "g1.17.24"],
      ["till", "g1.17.25"], ["Kristus", "g1.17.26 g1.17.27"],
      ["fjorton", "g1.17.29"], ["led.", "g1.17.28"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.17.10 g1.17.19 g1.17.29", lemma: "δεκατέσσαρες",
        title: "Varför fjorton?",
        body: "På hebreiska tjänar bokstäverna också som siffror, och bokstäverna i **David** — *dalet-waw-dalet*, ד־ו־ד — summerar till 4 + 6 + 4 = **14**. Matteus har ordnat hela Israels historia i tre svep om Davids tal: löftet (Abraham → David), kungadömet och dess fall (David → exilen), och väntan (exilen → Kristus). Ordningen är *gjord*, och Matteus döljer det knappt — han hoppar tyst över tre kungar mellan Joram och Ussia, och den tredje panelen når fjorton bara genom inklusiv räkning. Detta är inte bokföring och var aldrig menat att läsas som bokföring: det är en komponerad uvertyr, ett anspråk i listform — att historien inte är drift utan komposition, och att dess kadens löses upp på Davids son. Antika läsare kände skillnaden mellan en huvudbok och en fanfar. Den ärliga moderna frågan är inte ”går aritmetiken ihop?” utan ”är anspråket sant?” — och den frågan finns resten av evangeliet till för att pröva.",
      },
    ],
  },
  18: {
    english: [
      ["Med", "g1.18.2", true], ["Jesu", "g1.18.3"], ["Kristi", "g1.18.4"], ["tillblivelse", "g1.18.5 g1.18.6"],
      ["gick", "g1.18.8", true], ["det", "", true], ["till", "g1.18.7", true], ["så:", "g1.18.7"],
      ["hans", "g1.18.12"], ["mor", "g1.18.10 g1.18.11"], ["Maria", "g1.18.13"],
      ["var", "", true], ["trolovad", "g1.18.9"], ["med", "g1.18.14"], ["Josef,", "g1.18.15"],
      ["men", "", true], ["innan", "g1.18.16 g1.18.17"], ["de", "g1.18.19"], ["kommit", "g1.18.18"], ["samman", "g1.18.18"],
      ["befanns", "g1.18.20"], ["hon", "", true], ["vara", "", true], ["havande", "g1.18.21 g1.18.22 g1.18.23"],
      ["av", "g1.18.24"], ["helig", "g1.18.26"], ["Ande.", "g1.18.25"],
    ],
    annotations: [],
  },
  19: {
    english: [
      ["Och", "g1.19.2"], ["Josef,", "g1.19.1"], ["hennes", "g1.19.5"], ["man,", "g1.19.3 g1.19.4"],
      ["som", "", true], ["var", "g1.19.7"], ["rättfärdig", "g1.19.6"],
      ["och", "g1.19.8"], ["inte", "g1.19.9"], ["ville", "g1.19.10"],
      ["dra", "g1.19.12", true], ["skam", "g1.19.12"], ["över", "g1.19.12", true], ["henne,", "g1.19.11"],
      ["beslöt", "g1.19.13"], ["att", "", true], ["skilja", "g1.19.15"], ["sig", "", true], ["från", "", true], ["henne", "g1.19.16"],
      ["i", "", true], ["tysthet.", "g1.19.14"],
    ],
    annotations: [],
  },
  20: {
    english: [
      ["Men", "g1.20.2"], ["när", "", true], ["han", "g1.20.3"], ["tänkte", "g1.20.4"], ["på", "", true], ["detta,", "g1.20.1"],
      ["se,", "g1.20.5"], ["då", "", true], ["visade", "g1.20.10"], ["sig", "g1.20.10"],
      ["en", "", true], ["Herrens", "g1.20.7"], ["ängel", "g1.20.6"],
      ["för", "g1.20.11", true], ["honom", "g1.20.11"], ["i", "g1.20.8"], ["en", "", true], ["dröm", "g1.20.9"],
      ["och", "", true], ["sade:", "g1.20.12"],
      ["”Josef,", "g1.20.13"], ["Davids", "g1.20.15"], ["son,", "g1.20.14"],
      ["var", "g1.20.16", true], ["inte", "g1.20.16"], ["rädd", "g1.20.17"],
      ["att", "", true], ["ta", "g1.20.18"], ["till", "", true], ["dig", "", true], ["Maria,", "g1.20.19"],
      ["din", "g1.20.22"], ["hustru,", "g1.20.20 g1.20.21"],
      ["ty", "g1.20.24"], ["det", "g1.20.23"], ["som", "", true], ["har", "", true], ["avlats", "g1.20.27"],
      ["i", "g1.20.25"], ["henne", "g1.20.26"], ["är", "g1.20.30"], ["av", "g1.20.28"], ["helig", "g1.20.31"], ["Ande;", "g1.20.29"],
    ],
    annotations: [],
  },
  21: {
    english: [
      ["hon", "g1.21.2"], ["ska", "", true], ["föda", "g1.21.1"], ["en", "", true], ["son,", "g1.21.3"],
      ["och", "g1.21.4"], ["du", "g1.21.5", true], ["ska", "", true], ["ge", "g1.21.5"], ["honom", "g1.21.8"], ["namnet", "g1.21.6 g1.21.7"], ["Jesus,", "g1.21.9"],
      ["ty", "g1.21.11"], ["han", "g1.21.10"], ["ska", "", true], ["frälsa", "g1.21.12"],
      ["sitt", "g1.21.15"], ["folk", "g1.21.13 g1.21.14"], ["från", "g1.21.16"], ["deras", "g1.21.19"], ["synder.”", "g1.21.17 g1.21.18"],
    ],
    annotations: [
      {
        kind: "grammar", refs: "g1.21.9 g1.21.12", lemma: "Ἰησοῦς … σώσει",
        title: "Namnet är uppdraget",
        body: "**Ἰησοῦς** (Iēsous) är den grekiska dräkten för hebreiskans **Jeshua**, kortform av *Jehoshua* — ”**HERREN frälser**”. Ängelns mening är alltså en ordlek som bara fungerar på hebreiska: *ge honom namnet ”HERREN-frälser”, **ty han ska frälsa** sitt folk.* På grekiska — och på svenska — tystnar ordleken, vilket i sig är en liten lektion i vad översättning förlorar; de första läsare som fångade den hörde barnets hela kallelse vikt in i hans namn. Lägg också märke till vad frälsningen är *från*: inte från Rom, vilket en Davidsson-proklamation skulle få vem som helst att vänta, utan **”från deras synder”** — en stillsam omdefiniering av räddning, planterad i evangeliets allra första ord från himlen.",
      },
    ],
  },
  22: {
    english: [
      ["Allt", "g1.22.3"], ["detta", "g1.22.1"], ["skedde", "g1.22.4"],
      ["för", "g1.22.5", true], ["att", "g1.22.5"], ["det", "g1.22.7"], ["som", "", true],
      ["Herren", "g1.22.9 g1.22.10"], ["talat", "g1.22.8"], ["genom", "g1.22.11"], ["profeten", "g1.22.12 g1.22.13"],
      ["skulle", "", true], ["fullbordas:", "g1.22.6 g1.22.14"],
    ],
    annotations: [],
  },
  23: {
    english: [
      ["”Se,", "g1.23.1"], ["jungfrun", "g1.23.2 g1.23.3"],
      ["ska", "g1.23.6", true], ["bli", "g1.23.6"], ["havande", "g1.23.4 g1.23.5"],
      ["och", "g1.23.7"], ["föda", "g1.23.8"], ["en", "", true], ["son,", "g1.23.9"],
      ["och", "g1.23.10"], ["man", "g1.23.11", true], ["ska", "", true], ["ge", "g1.23.11"], ["honom", "g1.23.14"], ["namnet", "g1.23.12 g1.23.13"], ["Immanuel”,", "g1.23.15"],
      ["vilket", "g1.23.16"], ["översatt", "g1.23.18"], ["är", "g1.23.17"],
      ["”Gud", "g1.23.21 g1.23.22"], ["med", "g1.23.19"], ["oss.”", "g1.23.20"],
    ],
    annotations: [
      {
        kind: "text", refs: "g1.23.3", lemma: "παρθένος",
        title: "”Jungfrun” — Jesaja 7:14, och vad Matteus faktiskt gör",
        body: "Matteus citerar Jesaja 7:14 ur **Septuaginta**, den grekiska översättning hans läsare kände, som återger hebreiskans **עַלְמָה** (*ʿalmâ*, ”ung kvinna i giftasålder”) med **παρθένος** — ett ord som vanligen faktiskt betyder ”jungfru”. Kritiker har pekat på det gapet i arton århundraden, och det ärliga är att säga det rent ut: det hebreiska ordet i sig hävdar inte jungfrulighet, och Jesajas tecken hade en nära horisont i hans eget århundrade. Men lägg märke till riktningen i Matteus argument. Han utgår inte från texten och uppfinner en berättelse som passar; han utgår från vad han håller för att ha *hänt* — en avlelse ”av helig Ande” (v. 18, 20) — och sträcker sig sedan efter det skriftord vars grekiska lydelse så att säga hade väntat på händelsen. Fullbordan är hos Matteus igenkännande i efterhand, inte förutsägelse mekaniskt inlöst. Namnet förseglar anspråket: **Immanuel, ”Gud med oss”** — hela detta evangeliums tes, som dess sista mening ska besvara: *”Jag är med er alla dagar.”*",
      },
    ],
  },
  24: {
    english: [
      ["När", "", true], ["Josef", "g1.24.3 g1.24.4"], ["vaknade", "g1.24.1"], ["ur", "g1.24.5"], ["sömnen", "g1.24.6 g1.24.7"],
      ["gjorde", "g1.24.8"], ["han", "", true], ["som", "g1.24.9"],
      ["Herrens", "g1.24.14"], ["ängel", "g1.24.12 g1.24.13"],
      ["hade", "", true], ["befallt", "g1.24.10"], ["honom,", "g1.24.11"],
      ["och", "g1.24.15"], ["tog", "g1.24.16"], ["sin", "g1.24.19"], ["hustru", "g1.24.17 g1.24.18"], ["till", "", true], ["sig;", "", true],
    ],
    annotations: [],
  },
  25: {
    english: [
      ["och", "g1.25.1"], ["han", "", true], ["kände", "g1.25.3"], ["henne", "g1.25.4"], ["inte", "g1.25.2"],
      ["förrän", "g1.25.5 g1.25.6"], ["hon", "", true], ["fött", "g1.25.7"], ["en", "", true], ["son.", "g1.25.8"],
      ["Och", "g1.25.9"], ["han", "", true], ["gav", "g1.25.10"], ["honom", "g1.25.13"], ["namnet", "g1.25.11 g1.25.12"], ["Jesus.", "g1.25.14"],
    ],
    annotations: [],
  },
};
