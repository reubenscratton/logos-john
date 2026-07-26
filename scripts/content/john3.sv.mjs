// John 3 — Swedish translation & annotations.
// The `english` field carries the Swedish tokens (shares John 3's Greek spine).

export const CONTENT = {
  1: {
    english: [
      ["Nu", "g3.1.2"], ["fanns", "g3.1.1"], ["det", "g3.1.1", true], ["en", "g3.1.3", true], ["man", "g3.1.3"],
      ["bland", "g3.1.4"], ["fariséerna", "g3.1.5 g3.1.6"], ["som", "g3.1.8", true], ["hette", "g3.1.8 g3.1.9"], ["Nikodemus,", "g3.1.7"],
      ["en", "g3.1.10", true], ["rådsherre", "g3.1.10"], ["bland", "g3.1.11", true], ["judarna.", "g3.1.11 g3.1.12"],
    ],
    annotations: [],
  },
  2: {
    english: [
      ["Han", "g3.2.1"], ["kom", "g3.2.2"], ["till", "g3.2.3"], ["Jesus", "g3.2.4"], ["om", "g3.2.5", true], ["natten", "g3.2.5"],
      ["och", "g3.2.6"], ["sade", "g3.2.7"], ["till", "g3.2.8", true], ["honom:", "g3.2.8"], ["”Rabbi,", "g3.2.9"],
      ["vi", "g3.2.10", true], ["vet", "g3.2.10"], ["att", "g3.2.11"], ["du", "g3.2.14", true], ["har", "g3.2.14", true], ["kommit", "g3.2.14"],
      ["från", "g3.2.12"], ["Gud", "g3.2.13"], ["som", "g3.2.15", true], ["lärare;", "g3.2.15"], ["för", "g3.2.17"], ["ingen", "g3.2.16"],
      ["kan", "g3.2.18"], ["göra", "g3.2.22"], ["dessa", "g3.2.19"], ["tecken", "g3.2.20 g3.2.21"], ["som", "g3.2.23"], ["du", "g3.2.24"], ["gör,", "g3.2.25"],
      ["om", "g3.2.26", true], ["inte", "g3.2.26 g3.2.27"], ["Gud", "g3.2.29 g3.2.30"], ["är", "g3.2.28"], ["med", "g3.2.31"], ["honom.”", "g3.2.32"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g3.2.5 g3.2.9", lemma: "νυκτός",
        title: "En rådsherre — som kommer om natten",
        body: "Nikodemus är **farisé** och medlem av det styrande rådet (v. 1); han tilltalar Jesus respektfullt som **”Rabbi”** och medger att han kommer ”från Gud”. Ändå kommer han **om natten** — en detalj Johannes aldrig spiller. I detta evangelium är mörker och ljus moraliska, inte bara tidsangivelser (jfr v. 19; 13:30): Nikodemus är en man ännu i mörkret, på väg mot ett ljus han inte vågar stå i öppet. Han återkommer två gånger till (7:50; 19:39), varje gång lite modigare.",
      },
    ],
  },
  3: {
    english: [
      ["Jesus", "g3.3.2"], ["svarade", "g3.3.1"], ["och", "g3.3.3"], ["sade", "g3.3.4"], ["till", "g3.3.5", true], ["honom:", "g3.3.5"],
      ["”Sannerligen,", "g3.3.6"], ["sannerligen", "g3.3.7"], ["säger", "g3.3.8"], ["jag", "g3.3.8", true], ["dig:", "g3.3.9"],
      ["om", "g3.3.10", true], ["inte", "g3.3.10 g3.3.11"], ["någon", "g3.3.12"], ["blir", "g3.3.13", true], ["född", "g3.3.13"], ["ovanifrån,", "g3.3.14"],
      ["kan", "g3.3.16"], ["han", "g3.3.16", true], ["inte", "g3.3.15"], ["se", "g3.3.17"], ["Guds", "g3.3.20 g3.3.21"], ["rike.”", "g3.3.18 g3.3.19"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g3.3.14", lemma: "ἄνωθεν",
        title: "”Född på nytt” eller ”född ovanifrån”?",
        body: "Det enda ordet **ἄνωθεν** betyder både **”på nytt / igen”** och **”ovanifrån”**. Jesus menar det senare (samma ord är ”ovanifrån” i v. 31; 19:11), men Nikodemus hör bara det första och föreställer sig en andra resa genom moderlivet (v. 4). Missförståndet är själva poängen: Johannes älskar ord med två våningar, där en person fastnar på bottenvåningens betydelse och snubblar över den himmelska. Svenskan kan bara välja en sida — vi väljer **”ovanifrån”** och låter noten bära ekot av ”på nytt”.",
      },
      {
        kind: "reading", refs: "g3.3.13 g3.3.14 g3.3.19",
        title: "Född ovanifrån: vad Jesus (inte) begär",
        body: "Detta är inget krav på att anstränga sig mer eller vända blad. Födelse är det enda du inte kan göra själv — du är helt passiv inför den, och den kommer helt utifrån och *ovanifrån*. Jesus säger till en from, lärd och mäktig man att ingen fromhet, lärdom eller makt kan frambringa det liv han saknar; det måste *ges*, av Gud, som en andra födelse. Därför blir Nikodemus så vilsen: han kom för att lägga Jesus till ett liv han skötte väl, och får höra att hela jaget måste födas på nytt. **”Vatten och Ande”** (v. 5) säger hur — en rening och ett nytt besjälande liv, ett eko av Hesekiel: *”Jag skall stänka rent vatten på er … och ge er en ny ande”* (Hes 36:25–27). Riket ses inte genom förbättring utan genom ny födelse.",
      },
    ],
  },
  4: {
    english: [
      ["Nikodemus", "g3.4.4 g3.4.5"], ["säger", "g3.4.1"], ["till", "g3.4.2"], ["honom:", "g3.4.3"],
      ["”Hur", "g3.4.6"], ["kan", "g3.4.7"], ["en", "g3.4.8", true], ["människa", "g3.4.8"], ["födas", "g3.4.9"],
      ["när", "g3.4.11", true], ["hon", "g3.4.11", true], ["är", "g3.4.11"], ["gammal?", "g3.4.10"],
      ["Kan", "g3.4.13"], ["hon", "g3.4.13", true], ["gå", "g3.4.14 g3.4.21"], ["in", "g3.4.21", true], ["i", "g3.4.14", true],
      ["sin", "g3.4.19"], ["mors", "g3.4.17 g3.4.18"], ["liv", "g3.4.15 g3.4.16"], ["en", "g3.4.20", true], ["andra", "g3.4.20"], ["gång", "g3.4.20", true],
      ["och", "g3.4.22"], ["födas?”", "g3.4.23"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["Jesus", "g3.5.2"], ["svarade:", "g3.5.1"], ["”Sannerligen,", "g3.5.3"], ["sannerligen", "g3.5.4"], ["säger", "g3.5.5"], ["jag", "g3.5.5", true], ["dig:", "g3.5.6"],
      ["om", "g3.5.7", true], ["inte", "g3.5.7 g3.5.8"], ["någon", "g3.5.9"], ["blir", "g3.5.10", true], ["född", "g3.5.10"], ["av", "g3.5.11"], ["vatten", "g3.5.12"], ["och", "g3.5.13"], ["Ande,", "g3.5.14"],
      ["kan", "g3.5.16"], ["han", "g3.5.16", true], ["inte", "g3.5.15"], ["komma", "g3.5.17"], ["in", "g3.5.17", true], ["i", "g3.5.18"], ["Guds", "g3.5.21 g3.5.22"], ["rike.", "g3.5.19 g3.5.20"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g3.5.12 g3.5.14", lemma: "ἐξ ὕδατος καὶ Πνεύματος",
        title: "”Vatten och Ande”",
        body: "Paret pekar med stor sannolikhet på **Hesekiel 36:25–27**, där Gud lovar att *stänka rent vatten* till rening och att *ge en ny ande* i sitt folk — tvagning och nytt liv i ett andetag. På grekiska är **πνεῦμα** ett och samma ord för **Ande**, **vind** och **andedräkt**, något Jesus strax utnyttjar i v. 8. Så läst är ”vatten och Ande” inte två födelser utan en: den nya födelse Gud för länge sedan lovade, som nu bryter in.",
      },
    ],
  },
  6: {
    english: [
      ["Det", "g3.6.1", true], ["som", "g3.6.1", true], ["är", "g3.6.7"], ["fött", "g3.6.2"], ["av", "g3.6.3"], ["köttet", "g3.6.4 g3.6.5"], ["är", "g3.6.7", true], ["kött,", "g3.6.6"],
      ["och", "g3.6.8"], ["det", "g3.6.9", true], ["som", "g3.6.9", true], ["är", "g3.6.15"], ["fött", "g3.6.10"], ["av", "g3.6.11"], ["Anden", "g3.6.12 g3.6.13"], ["är", "g3.6.15", true], ["ande.", "g3.6.14"],
    ],
    annotations: [],
  },
  7: {
    english: [
      ["Var", "g3.7.2", true], ["inte", "g3.7.1"], ["förvånad", "g3.7.2"], ["över", "g3.7.3", true], ["att", "g3.7.3"], ["jag", "g3.7.4", true], ["sade", "g3.7.4"], ["till", "g3.7.5", true], ["dig:", "g3.7.5"],
      ["’Ni", "g3.7.7"], ["måste", "g3.7.6"], ["bli", "g3.7.8", true], ["födda", "g3.7.8"], ["ovanifrån.’", "g3.7.9"],
    ],
    annotations: [],
  },
  8: {
    english: [
      ["Vinden", "g3.8.1 g3.8.2"], ["blåser", "g3.8.5"], ["vart", "g3.8.3"], ["den", "g3.8.4", true], ["vill,", "g3.8.4"],
      ["och", "g3.8.6"], ["du", "g3.8.10", true], ["hör", "g3.8.10"], ["dess", "g3.8.9"], ["sus,", "g3.8.7 g3.8.8"],
      ["men", "g3.8.11"], ["du", "g3.8.13", true], ["vet", "g3.8.13"], ["inte", "g3.8.12"], ["varifrån", "g3.8.14"], ["den", "g3.8.15", true], ["kommer", "g3.8.15"], ["eller", "g3.8.16"], ["vart", "g3.8.17"], ["den", "g3.8.18", true], ["går;", "g3.8.18"],
      ["så", "g3.8.19"], ["är", "g3.8.20"], ["det", "g3.8.20", true], ["med", "g3.8.24", true], ["var", "g3.8.21", true], ["och", "g3.8.21", true], ["en", "g3.8.21 g3.8.22"], ["som", "g3.8.23", true], ["är", "g3.8.23", true], ["född", "g3.8.23"], ["av", "g3.8.24"], ["Anden.", "g3.8.25 g3.8.26"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g3.8.2 g3.8.8 g3.8.26", lemma: "πνεῦμα · φωνή",
        title: "Vind, Ande — ett ord, och en ordlek",
        body: "**πνεῦμα** är på en gång **vind**, **andedräkt** och **Ande**; **φωνή** är både **ljud** och **röst**. Så skimrar meningen: *vinden/Anden blåser vart den vill, och du hör dess sus/röst.* Poängen är suveränitet och mysterium — du kan inte se vindens ursprung eller styra dess lopp, bara se vad den gör. Den nya födelsen är sådan: verklig, märkbar i sina verkningar, och helt och hållet Guds att ge. Jesus är inte vag; han låter grammatiken svara mot sanningen.",
      },
    ],
  },
  9: {
    english: [
      ["Nikodemus", "g3.9.2"], ["svarade", "g3.9.1"], ["och", "g3.9.3"], ["sade", "g3.9.4"], ["till", "g3.9.5", true], ["honom:", "g3.9.5"],
      ["”Hur", "g3.9.6"], ["kan", "g3.9.7"], ["detta", "g3.9.8"], ["ske?”", "g3.9.9"],
    ],
    annotations: [],
  },
  10: {
    english: [
      ["Jesus", "g3.10.2"], ["svarade", "g3.10.1"], ["och", "g3.10.3"], ["sade", "g3.10.4"], ["till", "g3.10.5", true], ["honom:", "g3.10.5"],
      ["”Du", "g3.10.6"], ["är", "g3.10.7"], ["Israels", "g3.10.10 g3.10.11"], ["lärare,", "g3.10.8 g3.10.9"], ["och", "g3.10.12"], ["detta", "g3.10.13"], ["vet", "g3.10.15"], ["du", "g3.10.15", true], ["inte?", "g3.10.14"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g3.10.8 g3.10.9", lemma: "ὁ διδάσκαλος τοῦ Ἰσραήλ",
        title: "*Israels* lärare",
        body: "Grekiskan har bestämd artikel: inte ”en lärare” utan **Israels lärare** — en erkänd mästare i folkets skrifter. Där ligger udden. Just det Jesus säger (ny födelse, vatten och Ande, Guds vind) löper genom de profeter Nikodemus undervisat i åratal. Han borde ha känt igen det; bristen är inte kunskap utan ett sinne som aldrig fötts ovanifrån.",
      },
    ],
  },
  11: {
    english: [
      ["Sannerligen,", "g3.11.1"], ["sannerligen", "g3.11.2"], ["säger", "g3.11.3"], ["jag", "g3.11.3", true], ["dig:", "g3.11.4"],
      ["vi", "g3.11.8", true], ["talar", "g3.11.8"], ["om", "g3.11.6", true], ["det", "g3.11.6"], ["vi", "g3.11.7", true], ["vet", "g3.11.7"],
      ["och", "g3.11.9"], ["vittnar", "g3.11.12"], ["om", "g3.11.10", true], ["det", "g3.11.10"], ["vi", "g3.11.11", true], ["har", "g3.11.11", true], ["sett,", "g3.11.11"],
      ["och", "g3.11.13"], ["ni", "g3.11.18", true], ["tar", "g3.11.18"], ["inte", "g3.11.17"], ["emot", "g3.11.18", true], ["vårt", "g3.11.16"], ["vittnesbörd.", "g3.11.14 g3.11.15"],
    ],
    annotations: [],
  },
  12: {
    english: [
      ["Om", "g3.12.1"], ["jag", "g3.12.4", true], ["har", "g3.12.4", true], ["talat", "g3.12.4"], ["till", "g3.12.5", true], ["er", "g3.12.5"], ["om", "g3.12.3", true], ["jordiska", "g3.12.2 g3.12.3"], ["ting", "g3.12.3", true],
      ["och", "g3.12.6"], ["ni", "g3.12.8", true], ["inte", "g3.12.7"], ["tror,", "g3.12.8"], ["hur", "g3.12.9"], ["ska", "g3.12.15", true], ["ni", "g3.12.15", true], ["då", "g3.12.15", true], ["tro", "g3.12.15"],
      ["om", "g3.12.10"], ["jag", "g3.12.11", true], ["talar", "g3.12.11"], ["till", "g3.12.12", true], ["er", "g3.12.12"], ["om", "g3.12.13", true], ["himmelska", "g3.12.13 g3.12.14"], ["ting?", "g3.12.14", true],
    ],
    annotations: [],
  },
  13: {
    english: [
      ["Ingen", "g3.13.2"], ["har", "g3.13.3", true], ["stigit", "g3.13.3"], ["upp", "g3.13.3", true], ["till", "g3.13.4"], ["himlen", "g3.13.5 g3.13.6"],
      ["utom", "g3.13.7 g3.13.8"], ["den", "g3.13.9"], ["som", "g3.13.13", true], ["steg", "g3.13.13"], ["ner", "g3.13.13", true], ["från", "g3.13.10"], ["himlen,", "g3.13.11 g3.13.12"],
      ["Människosonen.", "g3.13.14 g3.13.15 g3.13.16 g3.13.17"],
    ],
    annotations: [],
  },
  14: {
    english: [
      ["Och", "g3.14.1"], ["liksom", "g3.14.2"], ["Mose", "g3.14.3"], ["upphöjde", "g3.14.4"], ["ormen", "g3.14.5 g3.14.6"], ["i", "g3.14.7"], ["öknen,", "g3.14.8 g3.14.9"],
      ["så", "g3.14.10"], ["måste", "g3.14.12"], ["Människosonen", "g3.14.13 g3.14.14 g3.14.15 g3.14.16"], ["upphöjas,", "g3.14.11"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g3.14.4 g3.14.6 g3.14.11", lemma: "ὑψωθῆναι … τὸν ὄφιν",
        title: "Ormen som upphöjdes",
        body: "Bilden är från **4 Mos 21:8–9**: bitna av ormar botas Israel genom att *se* på en kopparorm som Mose reser på en stång — liv åt var och en som bara ser. Verbet **ὑψόω**, **”upphöja”**, är ännu en johanneisk dubbelhet: det betyder både *att hissa upp på korset* och *att upphöja i härlighet* (8:28; 12:32–34). I ett enda ord anger Jesus hur han ska bota världen — genom att lyftas upp — och dubbeltydigheten insisterar på att själva korset är hans upphöjelse till härlighet.",
      },
    ],
  },
  15: {
    english: [
      ["för", "g3.15.1", true], ["att", "g3.15.1"], ["var", "g3.15.2", true], ["och", "g3.15.2", true], ["en", "g3.15.2 g3.15.3"], ["som", "g3.15.4", true], ["tror", "g3.15.4"], ["på", "g3.15.5"], ["honom", "g3.15.6"], ["ska", "g3.15.7", true], ["ha", "g3.15.7"], ["evigt", "g3.15.9"], ["liv.", "g3.15.8"],
    ],
    annotations: [],
  },
  16: {
    english: [
      ["Ty", "g3.16.2"], ["så", "g3.16.1"], ["älskade", "g3.16.3"], ["Gud", "g3.16.4 g3.16.5"], ["världen", "g3.16.6 g3.16.7"], ["att", "g3.16.8"],
      ["han", "g3.16.13", true], ["gav", "g3.16.13"], ["sin", "g3.16.9", true], ["ende", "g3.16.11 g3.16.12"], ["Son,", "g3.16.10"],
      ["för", "g3.16.14", true], ["att", "g3.16.14"], ["var", "g3.16.15", true], ["och", "g3.16.15", true], ["en", "g3.16.15 g3.16.16"], ["som", "g3.16.17", true], ["tror", "g3.16.17"], ["på", "g3.16.18"], ["honom", "g3.16.19"],
      ["inte", "g3.16.20"], ["ska", "g3.16.21", true], ["gå", "g3.16.21"], ["förlorad", "g3.16.21", true], ["utan", "g3.16.22"], ["ha", "g3.16.23"], ["evigt", "g3.16.25"], ["liv.", "g3.16.24"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g3.16.1 g3.16.12", lemma: "Οὕτως … μονογενῆ",
        title: "”Älskade så” — och den ”ende” Sonen",
        body: "**οὕτως** betyder **”på detta sätt / så här”**, inte ”så mycket”. Versen handlar mindre om *hur mycket* Gud älskar än om *hur*: Gud älskade världen *så här* — genom att ge. Och **μονογενής** är inte ”enfödd” i biologisk mening utan **”enastående, den ende i sitt slag”** — den unike, oersättlige Sonen (används om ett enda barn i Luk 7:12; 8:42). Det Gud ger är inte en sak utan sin egen, oupprepbara Son.",
      },
      {
        kind: "reading", refs: "g3.16.3 g3.16.7 g3.16.10",
        title: "Ty så älskade Gud världen",
        body: "Bibelns mest kända mening är lätt att höra som känslosamhet; hos Johannes är den ett gångjärn för hela berättelsen. Märk *vem* som älskas: **världen** — **κόσμος**, som hos Johannes nästan alltid är den ordnade mänskligheten *i sitt fiendskap mot Gud*, just den värld som ”kände honom inte” (1:10) och föredrar mörkret (v. 19). Gud älskar inte en älsklig värld; han älskar *denna*. Märk *hur* han älskar: inte med känsla utan genom att **ge**, och ge inte något utan *sin ende Son* — ordet sträcker sig redan mot korset i v. 14–15, där Sonen ”upphöjs”. Och märk *syftet*: **”för att var och en som tror … inte ska gå förlorad utan ha evigt liv.”** Evigt liv är här inte bara oändlig längd utan en *kvalitet* av liv — att känna Gud (17:3), börjad redan nu. Versen rymmer hela evangeliet i miniatyr: en givande kärlek, en dyrbar gåva, en värld som bara behöver se och lita, och liv på andra sidan. Nästa vers värjer den mot missförstånd: han sände Sonen *inte för att döma världen utan för att rädda den.*",
      },
    ],
  },
  17: {
    english: [
      ["Ty", "g3.17.2"], ["Gud", "g3.17.4 g3.17.5"], ["sände", "g3.17.3"], ["inte", "g3.17.1"], ["Sonen", "g3.17.6 g3.17.7"], ["till", "g3.17.8"], ["världen", "g3.17.9 g3.17.10"],
      ["för", "g3.17.11", true], ["att", "g3.17.11", true], ["döma", "g3.17.12"], ["världen,", "g3.17.13 g3.17.14"],
      ["utan", "g3.17.15"], ["för", "g3.17.16", true], ["att", "g3.17.16"], ["världen", "g3.17.18 g3.17.19"], ["skulle", "g3.17.17", true], ["räddas", "g3.17.17"], ["genom", "g3.17.20"], ["honom.", "g3.17.21"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g3.17.12 g3.17.17", lemma: "κρίνῃ … σωθῇ",
        title: "Inte för att döma, utan för att rädda",
        body: "Verbet **κρίνω** betyder att *döma*, och därmed att *fördöma*. Jesu första ankomst är ingen rättssal utan en räddning: Sonen sänds för att världen ska **räddas** (**σῴζω**) *genom honom*. Ändå är domen inte upphävd: den sker, tyst, när människor möter ljuset och vänder sig bort (v. 18–19). Domen är verklig, men självvald: han kom för att rädda, och att avvisa Räddaren är att döma sig själv.",
      },
    ],
  },
  18: {
    english: [
      ["Den", "g3.18.1", true], ["som", "g3.18.1", true], ["tror", "g3.18.2"], ["på", "g3.18.3"], ["honom", "g3.18.4"], ["blir", "g3.18.6", true], ["inte", "g3.18.5"], ["dömd;", "g3.18.6"],
      ["men", "g3.18.7", true], ["den", "g3.18.7", true], ["som", "g3.18.7"], ["inte", "g3.18.8"], ["tror", "g3.18.9"], ["är", "g3.18.11", true], ["redan", "g3.18.10"], ["dömd,", "g3.18.11"],
      ["eftersom", "g3.18.12"], ["han", "g3.18.14", true], ["inte", "g3.18.13"], ["har", "g3.18.14", true], ["trott", "g3.18.14"], ["på", "g3.18.15"], ["Guds", "g3.18.21 g3.18.22"], ["ende", "g3.18.18 g3.18.19"], ["Sons", "g3.18.20"], ["namn.", "g3.18.16 g3.18.17"],
    ],
    annotations: [],
  },
  19: {
    english: [
      ["Och", "g3.19.2"], ["detta", "g3.19.1"], ["är", "g3.19.3"], ["domen:", "g3.19.4 g3.19.5"], ["att", "g3.19.6"], ["ljuset", "g3.19.7 g3.19.8"], ["har", "g3.19.9", true], ["kommit", "g3.19.9"], ["in", "g3.19.9", true], ["i", "g3.19.10"], ["världen,", "g3.19.11 g3.19.12"],
      ["och", "g3.19.13"], ["människorna", "g3.19.15 g3.19.16"], ["älskade", "g3.19.14"], ["mörkret", "g3.19.18 g3.19.19"], ["mer", "g3.19.17"], ["än", "g3.19.20"], ["ljuset,", "g3.19.21 g3.19.22"],
      ["eftersom", "g3.19.24"], ["deras", "g3.19.25"], ["gärningar", "g3.19.27 g3.19.28"], ["var", "g3.19.23"], ["onda.", "g3.19.26"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g3.19.5 g3.19.8 g3.19.19", lemma: "ἡ κρίσις … τὸ φῶς",
        title: "Domen är en sållning genom ljus",
        body: "Johannes omdefinierar **domen**: den är inte så mycket en framtida scen som det som sker i det ögonblick **ljuset** anländer. Ljuset dömer inte; det bara *visar vad som finns där*, och var och en blottas i sitt svar — dras mot det eller ryggar undan. Tragiken sägs med fruktansvärd enkelhet: **”människorna älskade mörkret mer än ljuset.”** Skälet är moraliskt, inte intellektuellt — ”deras gärningar var onda.” Vi tvivlar inte först och syndar sedan; ofta gömmer vi oss för att vi hellre behåller gärningarna än mister mörkret.",
      },
    ],
  },
  20: {
    english: [
      ["Ty", "g3.20.2"], ["var", "g3.20.1", true], ["och", "g3.20.1", true], ["en", "g3.20.1"], ["som", "g3.20.3", true], ["gör", "g3.20.5"], ["det", "g3.20.4", true], ["onda", "g3.20.4"], ["hatar", "g3.20.6"], ["ljuset", "g3.20.7 g3.20.8"],
      ["och", "g3.20.9"], ["kommer", "g3.20.11"], ["inte", "g3.20.10"], ["till", "g3.20.12"], ["ljuset,", "g3.20.13 g3.20.14"],
      ["för", "g3.20.15", true], ["att", "g3.20.15"], ["hans", "g3.20.20"], ["gärningar", "g3.20.18 g3.20.19"], ["inte", "g3.20.16"], ["ska", "g3.20.17", true], ["avslöjas;", "g3.20.17"],
    ],
    annotations: [],
  },
  21: {
    english: [
      ["Men", "g3.21.2"], ["den", "g3.21.1", true], ["som", "g3.21.1", true], ["gör", "g3.21.3"], ["sanningen", "g3.21.4 g3.21.5"], ["kommer", "g3.21.6"], ["till", "g3.21.7"], ["ljuset,", "g3.21.8 g3.21.9"],
      ["för", "g3.21.10", true], ["att", "g3.21.10"], ["det", "g3.21.11", true], ["ska", "g3.21.11", true], ["bli", "g3.21.11", true], ["uppenbart", "g3.21.11"], ["att", "g3.21.15"], ["hans", "g3.21.12"], ["gärningar", "g3.21.13 g3.21.14"], ["är", "g3.21.18", true], ["gjorda", "g3.21.19"], ["i", "g3.21.16"], ["Gud.", "g3.21.17"],
    ],
    annotations: [],
  },
  22: {
    english: [
      ["Efter", "g3.22.1"], ["detta", "g3.22.2"], ["gick", "g3.22.3"], ["Jesus", "g3.22.4 g3.22.5"], ["och", "g3.22.6"], ["hans", "g3.22.9"], ["lärjungar", "g3.22.7 g3.22.8"], ["ut", "g3.22.3", true], ["på", "g3.22.10"], ["den", "g3.22.11"], ["judeiska", "g3.22.12"], ["landsbygden,", "g3.22.13"],
      ["och", "g3.22.14"], ["där", "g3.22.15"], ["stannade", "g3.22.16"], ["han", "g3.22.16", true], ["med", "g3.22.17"], ["dem", "g3.22.18"], ["och", "g3.22.19"], ["döpte.", "g3.22.20"],
    ],
    annotations: [],
  },
  23: {
    english: [
      ["Också", "g3.23.3"], ["Johannes", "g3.23.4"], ["döpte,", "g3.23.1 g3.23.5"], ["i", "g3.23.6"], ["Ainon", "g3.23.7"], ["nära", "g3.23.8"], ["Salim,", "g3.23.9 g3.23.10"],
      ["eftersom", "g3.23.11"], ["det", "g3.23.15", true], ["fanns", "g3.23.14"], ["mycket", "g3.23.13"], ["vatten", "g3.23.12"], ["där,", "g3.23.15"],
      ["och", "g3.23.16"], ["folk", "g3.23.17", true], ["kom", "g3.23.17"], ["dit", "g3.23.17", true], ["och", "g3.23.18"], ["blev", "g3.23.19", true], ["döpta.", "g3.23.19"],
    ],
    annotations: [],
  },
  24: {
    english: [
      ["Ty", "g3.24.2"], ["Johannes", "g3.24.8"], ["hade", "g3.24.3", true], ["ännu", "g3.24.1"], ["inte", "g3.24.1", true], ["blivit", "g3.24.3"], ["kastad", "g3.24.4"], ["i", "g3.24.5"], ["fängelse.", "g3.24.6 g3.24.7"],
    ],
    annotations: [],
  },
  25: {
    english: [
      ["Nu", "g3.25.2"], ["uppstod", "g3.25.1"], ["en", "g3.25.3", true], ["tvist", "g3.25.3"], ["mellan", "g3.25.4", true], ["Johannes", "g3.25.7"], ["lärjungar", "g3.25.5 g3.25.6"], ["och", "g3.25.8", true], ["en", "g3.25.9", true], ["jude", "g3.25.9"], ["om", "g3.25.10"], ["rening.", "g3.25.11"],
    ],
    annotations: [],
  },
  26: {
    english: [
      ["Och", "g3.26.1"], ["de", "g3.26.2", true], ["kom", "g3.26.2"], ["till", "g3.26.3"], ["Johannes", "g3.26.4 g3.26.5"], ["och", "g3.26.6"], ["sade", "g3.26.7"], ["till", "g3.26.8", true], ["honom:", "g3.26.8"], ["”Rabbi,", "g3.26.9"],
      ["han", "g3.26.10", true], ["som", "g3.26.10"], ["var", "g3.26.11"], ["med", "g3.26.12"], ["dig", "g3.26.13"], ["på", "g3.26.14", true], ["andra", "g3.26.14", true], ["sidan", "g3.26.14"], ["Jordan,", "g3.26.15 g3.26.16"], ["som", "g3.26.17"], ["du", "g3.26.18"], ["vittnade", "g3.26.19"], ["om", "g3.26.19", true],
      ["—", "", true], ["se,", "g3.26.20"], ["han", "g3.26.21"], ["döper,", "g3.26.22"], ["och", "g3.26.23"], ["alla", "g3.26.24"], ["går", "g3.26.25"], ["till", "g3.26.26"], ["honom.”", "g3.26.27"],
    ],
    annotations: [],
  },
  27: {
    english: [
      ["Johannes", "g3.27.2"], ["svarade:", "g3.27.1 g3.27.3 g3.27.4"], ["”En", "g3.27.7", true], ["människa", "g3.27.7"], ["kan", "g3.27.6"], ["inte", "g3.27.5"], ["ta", "g3.27.8", true], ["emot", "g3.27.8"], ["något", "g3.27.9"],
      ["om", "g3.27.10", true], ["det", "g3.27.12", true], ["inte", "g3.27.10 g3.27.11"], ["har", "g3.27.12", true], ["getts", "g3.27.12 g3.27.13"], ["henne", "g3.27.14"], ["från", "g3.27.15"], ["himlen.", "g3.27.16 g3.27.17"],
    ],
    annotations: [],
  },
  28: {
    english: [
      ["Ni", "g3.28.2"], ["själva", "g3.28.1"], ["vittnar", "g3.28.4"], ["om", "g3.28.3", true], ["mig", "g3.28.3"], ["att", "g3.28.5"], ["jag", "g3.28.6", true], ["sade:", "g3.28.6"],
      ["’Jag", "g3.28.9"], ["är", "g3.28.8"], ["inte", "g3.28.7"], ["Messias,", "g3.28.10 g3.28.11"], ["utan", "g3.28.12"], ["jag", "g3.28.15", true], ["är", "g3.28.15"], ["sänd", "g3.28.14"], ["framför", "g3.28.16"], ["honom.’", "g3.28.17"],
    ],
    annotations: [],
  },
  29: {
    english: [
      ["Den", "g3.29.1", true], ["som", "g3.29.2", true], ["har", "g3.29.2"], ["bruden", "g3.29.3 g3.29.4"], ["är", "g3.29.6"], ["brudgummen;", "g3.29.5"],
      ["men", "g3.29.8"], ["brudgummens", "g3.29.10 g3.29.11"], ["vän,", "g3.29.7 g3.29.9"], ["som", "g3.29.12", true], ["står", "g3.29.13"], ["och", "g3.29.14"], ["lyssnar", "g3.29.15"], ["efter", "g3.29.16", true], ["honom,", "g3.29.16"],
      ["gläder", "g3.29.18"], ["sig", "g3.29.18", true], ["innerligt", "g3.29.17"], ["vid", "g3.29.19"], ["brudgummens", "g3.29.22 g3.29.23"], ["röst.", "g3.29.20 g3.29.21"],
      ["Så", "g3.29.25"], ["är", "g3.29.30", true], ["nu", "g3.29.30", true], ["min", "g3.29.28 g3.29.29"], ["glädje", "g3.29.24 g3.29.26 g3.29.27"], ["fullkomlig.", "g3.29.30"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g3.29.5 g3.29.9 g3.29.27", lemma: "ὁ φίλος τοῦ νυμφίου",
        title: "Brudgummens vän",
        body: "**Brudgummens vän** — ungefär bestman — ordnar bröllopet och träder åt sidan för det; hans glädje är att höra brudgummens röst och se äktenskapet ingås, inte att själv stå i centrum. Johannes gestaltar hela sin tjänst i den rollen. Bakom ligger en stor gammaltestamentlig bild: **Gud som sitt folks brudgum** (Hos 2:19; Jes 62:5). Att kalla Jesus brudgum är att stilla ge honom Guds egen roll — och Johannes kunde inte vara gladare att avta.",
      },
    ],
  },
  30: {
    english: [
      ["Han", "g3.30.1"], ["måste", "g3.30.2"], ["växa", "g3.30.3"], ["till;", "g3.30.3", true], ["jag", "g3.30.4 g3.30.5"], ["måste", "g3.30.2", true], ["avta.", "g3.30.6"],
    ],
    annotations: [
      {
        kind: "reading", refs: "g3.30.1 g3.30.3 g3.30.6",
        title: "”Han måste växa till; jag måste avta”",
        body: "Sex ord på grekiska, och den sannaste beskrivningen av ett rätt inriktat liv. Johannes Döparen har alla skäl att vakta sin skara — folkmassor, lärjungar, medvind — och i stället *lämnar han över dem* med glädje. Märk **”måste”** (**δεῖ**): detta är ingen motvillig resignation utan tingens rätta ordning, samma gudomliga *måste* under vilket Sonen upphöjs (v. 14). Storhet i detta evangelium är aldrig självförstoring; den är att känna sin plats i någon annans berättelse och glatt inta den. Brudgummens vän skymmer inte bröllopet genom att stiga tillbaka — han fullkomnar sin glädje.",
      },
    ],
  },
  31: {
    english: [
      ["Den", "g3.31.1", true], ["som", "g3.31.3", true], ["kommer", "g3.31.3"], ["ovanifrån", "g3.31.2"], ["är", "g3.31.6"], ["över", "g3.31.4"], ["alla;", "g3.31.5"],
      ["den", "g3.31.7", true], ["som", "g3.31.8", true], ["är", "g3.31.8"], ["av", "g3.31.9", true], ["jorden", "g3.31.10 g3.31.11"], ["hör", "g3.31.15", true], ["jorden", "g3.31.13 g3.31.14"], ["till", "g3.31.12", true], ["och", "g3.31.16"], ["talar", "g3.31.20"], ["på", "g3.31.17", true], ["jordiskt", "g3.31.18 g3.31.19"], ["vis.", "g3.31.19", true],
      ["Den", "g3.31.21", true], ["som", "g3.31.25", true], ["kommer", "g3.31.25"], ["från", "g3.31.22", true], ["himlen", "g3.31.23 g3.31.24"], ["är", "g3.31.28"], ["över", "g3.31.26"], ["alla.", "g3.31.27"],
    ],
    annotations: [],
  },
  32: {
    english: [
      ["Han", "g3.32.6", true], ["vittnar", "g3.32.5 g3.32.6"], ["om", "g3.32.1", true], ["vad", "g3.32.1"], ["han", "g3.32.2", true], ["har", "g3.32.2", true], ["sett", "g3.32.2"], ["och", "g3.32.3"], ["hört,", "g3.32.4"],
      ["men", "g3.32.7"], ["ingen", "g3.32.11"], ["tar", "g3.32.12"], ["emot", "g3.32.12", true], ["hans", "g3.32.10"], ["vittnesbörd.", "g3.32.8 g3.32.9"],
    ],
    annotations: [],
  },
  33: {
    english: [
      ["Den", "g3.33.1", true], ["som", "g3.33.1", true], ["tar", "g3.33.2"], ["emot", "g3.33.2", true], ["hans", "g3.33.3"], ["vittnesbörd", "g3.33.4 g3.33.5"], ["har", "g3.33.6", true], ["bekräftat", "g3.33.6"], ["att", "g3.33.7"], ["Gud", "g3.33.8 g3.33.9"], ["är", "g3.33.11"], ["sann.", "g3.33.10"],
    ],
    annotations: [],
  },
  34: {
    english: [
      ["Ty", "g3.34.2"], ["den", "g3.34.1", true], ["som", "g3.34.1"], ["Gud", "g3.34.4 g3.34.5"], ["har", "g3.34.3", true], ["sänt", "g3.34.3"], ["talar", "g3.34.10"], ["Guds", "g3.34.8 g3.34.9"], ["ord,", "g3.34.6 g3.34.7"],
      ["för", "g3.34.12"], ["han", "g3.34.15", true], ["ger", "g3.34.15"], ["Anden", "g3.34.16 g3.34.17"], ["utan", "g3.34.11 g3.34.13"], ["mått.", "g3.34.14"],
    ],
    annotations: [],
  },
  35: {
    english: [
      ["Fadern", "g3.35.1 g3.35.2"], ["älskar", "g3.35.3"], ["Sonen", "g3.35.4 g3.35.5"], ["och", "g3.35.6"], ["har", "g3.35.8", true], ["lagt", "g3.35.8"], ["allt", "g3.35.7"], ["i", "g3.35.9"], ["hans", "g3.35.12"], ["hand.", "g3.35.10 g3.35.11"],
    ],
    annotations: [],
  },
  36: {
    english: [
      ["Den", "g3.36.1", true], ["som", "g3.36.1", true], ["tror", "g3.36.2"], ["på", "g3.36.3"], ["Sonen", "g3.36.4 g3.36.5"], ["har", "g3.36.6"], ["evigt", "g3.36.8"], ["liv;", "g3.36.7"],
      ["men", "g3.36.10"], ["den", "g3.36.9", true], ["som", "g3.36.9", true], ["är", "g3.36.11", true], ["olydig", "g3.36.11"], ["mot", "g3.36.12", true], ["Sonen", "g3.36.12 g3.36.13"], ["ska", "g3.36.15", true], ["inte", "g3.36.14"], ["se", "g3.36.15"], ["livet,", "g3.36.16"],
      ["utan", "g3.36.17"], ["Guds", "g3.36.20 g3.36.21"], ["vrede", "g3.36.18 g3.36.19"], ["förblir", "g3.36.22"], ["över", "g3.36.23"], ["honom.", "g3.36.24"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g3.36.2 g3.36.11", lemma: "πιστεύων … ἀπειθῶν",
        title: "Motsatsen till ”tro” är ”olydnad”",
        body: "Kapitlets sista vers ställer **πιστεύων**, *”den som tror”*, mot **ἀπειθῶν** — inte ”den som inte tror” utan **”den som är olydig, vägrar låta sig övertygas”**. För Johannes är tron ingen tom åsikt utan ett *överlämnande* av hela jaget åt Sonen; otron är en *vägran*. Därför är insatsen så hög och så närvarande: den som litar på Sonen **har** (redan) evigt liv, medan över den som inte vill **Guds vrede** — hans fasta motstånd mot det onda — *förblir*, som den gjorde innan ljuset kom. Domen från v. 18 upprepas helt enkelt: den avgörs av vad du gör med Sonen.",
      },
    ],
  },
};
