// Swedish content for John 1 — translation (with word alignment to the shared
// Greek token ids) and annotations. Original to this edition.
//
// english entry: [text, alignIds(space-separated), supplied?]

export const CONTENT = {
  1: {
    english: [
      ["I", "g1.1.1"], ["begynnelsen", "g1.1.2"], ["var", "g1.1.3"], ["Ordet,", "g1.1.4 g1.1.5"],
      ["och", "g1.1.6"], ["Ordet", "g1.1.7 g1.1.8"], ["var", "g1.1.9"], ["hos", "g1.1.10"], ["Gud,", "g1.1.11 g1.1.12"],
      ["och", "g1.1.13"], ["Ordet", "g1.1.16 g1.1.17"], ["var", "g1.1.15"], ["Gud.", "g1.1.14"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.1.5 g1.1.8 g1.1.17", lemma: "λόγος (Logos)",
        title: "Varför ”Ordet” — och varför stor bokstav",
        body: "*Logos* bar på en oerhörd mängd betydelse som inget enskilt svenskt ord fångar. I den grekiska filosofin (Herakleitos, och senare stoikerna) betecknade det den förnuftsprincip som ordnar kosmos. I den hellenistiska judendomen — särskilt hos Filon i Alexandria — förband det den transcendente Guden med den skapade världen. Och det når tillbaka till de hebreiska Skrifterna: HERRENS *dabar* (ord), genom vilket himlarna blev till (Ps 33:6), och den personifierade *Visheten*, närvarande vid skapelsen (Ords 8). Johannes skriver medvetet in sig i allt detta på en gång. Vi behåller **”Ordet”** (med stor bokstav) snarare än ”Förnuftet” eller ett translittererat ”Logos”: det bevarar länken till tal och självuttryck, och till det skapande *dabar*, medan versalen markerar att en titel avses, inte ett vanligt substantiv.",
      },
      {
        kind: "grammar", refs: "g1.1.3 g1.1.9 g1.1.15", lemma: "ἦν (imperfekt av εἰμί)",
        title: "Tre gånger ”var” — och det betyder något",
        body: "Varje **ἦν** är ett *imperfekt* som uttrycker fortgående existens i det förflutna: Ordet *var* redan, utan någon antydd början. Detta ställs medvetet mot aoristen **ἐγένετο** (”blev till”) som styr den skapade ordningen i v. 3 och inkarnationen i v. 14. Grammatiken själv bär teologin: Ordet är *inte gjort*.",
      },
      {
        kind: "translation", refs: "g1.1.10 g1.1.11 g1.1.12", lemma: "πρὸς τὸν θεόν",
        title: "”hos Gud” — men ett dynamiskt, ansikte-mot-ansikte ”hos”",
        body: "**πρός** med ackusativ är rörligare än det platta svenska ”hos”. Det antyder en riktning *mot* — närvaro i relation, nästan ”ansikte mot ansikte med” Gud. Vi behåller det enkla **”hos”**, men noten är där den relationella laddningen bor: Ordet är tillräckligt åtskilt för att vara *vänt mot* Gud, och ändå (nästa sats) inte något annat än Gud.",
      },
      {
        kind: "concept", refs: "g1.1.14 g1.1.16 g1.1.17", lemma: "θεὸς ἦν ὁ λόγος",
        title: "Den berömda satsen: ”Ordet var Gud”",
        body: "Ordföljden i grekiskan är fri, och Johannes skriver **θεὸς ἦν ὁ λόγος** — ordagrant ”Gud var Ordet”. Vilket substantiv är subjektet? Det som har artikeln: **ὁ λόγος**. Alltså är subjektet *Ordet*, och **θεός** är predikatsfyllnaden, framflyttad för betoning (välj **Θεὸς** och se hur ”Gud” tänds i *slutet* av den svenska raden). Eftersom predikatet **θεός** är *artikellöst* och står före verbet är det kvalitativt — det säger *vad* Ordet är, delaktigt i den gudomliga naturen, utan att smälta samman Ordet med den person som just kallades ”Gud”. Därför är ”Ordet var Gud” rätt, och därför missar både ”en gud” (obestämt) och ”Ordet var gudomligt” (rent adjektiviskt) poängen: det första förnekar full gudom, det andra urvattnar den. (Grammatiker hänvisar till *Colwells regel* och, mer exakt, till kvalitativa artikellösa predikatsubstantiv.)",
      },
      {
        kind: "p66", refs: "g1.1.12 g1.1.14 g1.1.5 g1.1.8 g1.1.17", lemma: "θεόν / θεός · λόγος",
        title: "Vad 𝔓⁶⁶ faktiskt visar här — med en ärlig reservation",
        body: "I 𝔓⁶⁶ skrivs de två förekomsterna av *Gud* i v. 1 som *nomina sacra* — de heliga förkortningarna **θ̅ν̅** (θεόν) och **θ̅ς̅** (θεός), var och en under ett vågrätt streck — medan **λόγος**, ”Ordet”, skrivs *fullt ut* varje gång och **inte** behandlas som ett heligt namn. Men läsaren förtjänar uppriktighet: papyrusens första sidas övre del är skadad, och enligt IGNTP:s transkription faller **alla** θεός-formerna i vv. 1–2 i en *lakun* och är redaktionellt **utfyllda** — rekonstruerade, inte läsbara. 𝔓⁶⁶ vittnar alltså om radernas *utformning och ordalydelse*, men dess berömda θ̅ς̅ vid ”Ordet var Gud” är en rekonstruktion av text som saknas, inte bläck vi ännu kan läsa. (Handskriftens datering är själv omtvistad: Martins ~200 e.Kr. mot senare uppskattningar in på 300-talet.)",
      },
    ],
  },

  2: {
    english: [
      ["Han", "g1.2.1"], ["var", "g1.2.2"], ["i", "g1.2.3"], ["begynnelsen", "g1.2.4"], ["hos", "g1.2.5"], ["Gud.", "g1.2.6 g1.2.7"],
    ],
    annotations: [
      {
        kind: "grammar", refs: "g1.2.1", lemma: "οὗτος",
        title: "Varför upprepa det? Kraften i ”denne”",
        body: "Vers 2 ser ut som ren upprepning, men **οὗτος** (”just denne”) är eftertryckligt och *sammanfattande*: det samlar ihop allt som sagts i v. 1 och fäster det vid ett enda subjekt innan meningen går vidare till skapelsen. Det stänger dörren för en feltolkning — att ”Ordet var Gud” skulle beskriva något senare, ringare skede. Den som *var Gud* och *var hos Gud* är densamme, och var det **ἐν ἀρχῇ**, i begynnelsen. Vi återger det med **”Han”** för flytets skull; den demonstrativa tyngden noteras här.",
      },
    ],
  },

  3: {
    english: [
      ["Allt", "g1.3.1"], ["blev", "g1.3.4"], ["till", "g1.3.4"], ["genom", "g1.3.2"], ["honom,", "g1.3.3"],
      ["och", "g1.3.5"], ["utan", "g1.3.6"], ["honom", "g1.3.7"], ["blev", "g1.3.8"], ["ingenting", "g1.3.9 g1.3.10"], ["till", "g1.3.8"],
      ["av", "", true], ["det", "g1.3.11"], ["som", "g1.3.11"], ["har", "g1.3.12"], ["blivit", "g1.3.12"], ["till.", "g1.3.12"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.3.4 g1.3.8 g1.3.12", lemma: "ἐγένετο / γέγονεν (γίνομαι)",
        title: "”Blev till” — Prologens gångjärn",
        body: "Verbet växlar från **ἦν** (”var”, om Ordet) till **γίνομαι**, ”bli till”. Allt i den skapade ordningen *blir*; Ordet bara *är*. Aoristen **ἐγένετο** ser skapelsen som en fullbordad händelse; perfekten **γέγονεν** (”har blivit till”) ser den som ett bestående resultat. Att återge båda med ”blev till” / ”har blivit till” håller det enda grekiska verbet synligt på svenska, där ”gjordes” skulle sudda ihop det med v. 14:s annorlunda ordval.",
      },
      {
        kind: "concept", refs: "g1.3.2 g1.3.3", lemma: "δι’ αὐτοῦ",
        title: "Redskap: skapelsen ”genom” honom",
        body: "**διά** + genitiv markerar Ordet som den *agent genom vilken* allt blev till — samma roll som Visheten ges (Ords 8:30) och som ekar på andra håll (1 Kor 8:6; Kol 1:16; Heb 1:2). Ordet är varken en andra Skapare vid sidan av Gud eller en ren skapelse: skapelsen sker *genom* honom. Prepositionen gör verkligt teologiskt arbete, vilket är varför vi inte jämnar ut den till ”av”.",
      },
      {
        kind: "text", refs: "g1.3.11 g1.3.12", lemma: "ὃ γέγονεν",
        title: "En berömd interpunktionsfråga",
        body: "De äldsta handskrifterna hade *ingen interpunktion*, så frasen **ὃ γέγονεν** (”det som har blivit till”) kan läsas på två sätt. **(a)** Med v. 3: ”…blev ingenting till av det som har blivit till.” **(b)** Med v. 4: ”…blev ingenting till. Det som har blivit till — i honom var liv.” Läsning (b) är gammal och omhuldades av många kyrkofäder. Moderna utgåvor är delade (NA28 för den till v. 3); interpunktionen debatterades häftigt under den ariska striden, eftersom (b) kunde pressas till att göra Anden eller Ordet till en skapad ”sak”. Vi trycker (a) men markerar (b) som fullt levande — se noten till v. 4.",
      },
      {
        kind: "p66", refs: "g1.3.4 g1.3.11 g1.3.12", lemma: "ἐγένετο · ὃ γέγονεν",
        title: "𝔓⁶⁶ och interpunktionen — nära ögat",
        body: "Retsamt nog *interpunkterar* 𝔓⁶⁶ faktiskt detta stycke — men inte där det skulle avgöra frågan. Skrivaren sätter en mittpunkt **efter** den första satsen (”πάντα δι’ αὐτοῦ ἐγένετο **·**”), men lämnar **inget tecken alls** vid den omtvistade fogen kring **ὃ γέγονεν**. Vårt äldsta betydande vittne till Johannes visar alltså samma tystnad som 𝔓⁷⁵*, א*, A, B och D: det säger oss inte om ”det som har blivit till” avslutar v. 3 eller inleder v. 4. Papyrusen läser också imperfekten **ἦν** (”var”) på nästa rad och ställer sig med standardtexten mot varianten med presens **ἐστίν** som finns i några tidiga handskrifter.",
      },
    ],
  },

  4: {
    english: [
      ["I", "g1.4.1"], ["honom", "g1.4.2"], ["var", "g1.4.4"], ["liv,", "g1.4.3"],
      ["och", "g1.4.5"], ["livet", "g1.4.6 g1.4.7"], ["var", "g1.4.8"], ["människornas", "g1.4.11 g1.4.12"], ["ljus.", "g1.4.9 g1.4.10"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.4.3 g1.4.7", lemma: "ζωή (zōē)",
        title: "”Liv” — Johannes nyckelord",
        body: "**ζωή** är inte biologisk tillvaro (*bios*) utan *liv* i fullaste, gudsutgivna mening — det som Johannes ska kalla **ζωὴ αἰώνιος**, ”evigt liv”, den gåva hela evangeliet finns till för att ge (20:31). Här är det redan närvarande ”i honom” vid skapelsen, innan det blir evangeliets stora tema.",
      },
      {
        kind: "concept", refs: "g1.4.10", lemma: "φῶς (phōs)",
        title: "Ljus — och den dualism det öppnar",
        body: "Med **φῶς** inför Johannes den ljus/mörker-polaritet som löper genom evangeliet (3:19–21; 8:12; 12:35–36). Den är moralisk och uppenbarande, inte bara fysisk: ljuset är livgivande avslöjande, den närvaro som gör seende — och att bli sedd — möjligt. Bildspråket hämtar från Första Moseboken (”varde ljus”) och Jesajas tjänare som ”ett ljus för folken”.",
      },
      {
        kind: "translation", refs: "g1.4.11 g1.4.12", lemma: "τῶν ἀνθρώπων",
        title: "”människornas”, inte ”männens”",
        body: "**ἄνθρωπος** betecknar en *människa* (till skillnad från **ἀνήρ**, en vuxen man). Svenskan har turen att ”människa” redan är könsneutralt, så **”människornas ljus”** fångar den grekiska räckvidden exakt: ljuset är till för *alla människor*. Äldre engelska översättningar (”the light of men”) tvingades förklara sig; här behövs ingen sådan reservation.",
      },
      {
        kind: "text", refs: "g1.4.1 g1.4.2 g1.4.3", lemma: "ὃ γέγονεν ἐν αὐτῷ",
        title: "Den alternativa läsningen, utskriven",
        body: "Om **ὃ γέγονεν** förs till denna vers (se noten till v. 3) lyder raderna: *”…blev ingenting till. Det som har blivit till, i honom var liv, och livet var människornas ljus.”* Meningen blir: allt skapat har sitt sanna liv *i honom*. Det är grammatiskt rent och väl belagt hos fäderna; vi hänvisar det till apparaten endast för att flertalet moderna utgivare förenar **ὃ γέγονεν** med v. 3.",
      },
    ],
  },

  5: {
    english: [
      ["Och", "g1.5.1"], ["ljuset", "g1.5.2 g1.5.3"], ["lyser", "g1.5.7"], ["i", "g1.5.4"], ["mörkret,", "g1.5.5 g1.5.6"],
      ["och", "g1.5.8"], ["mörkret", "g1.5.9 g1.5.10"], ["har", "g1.5.13"], ["inte", "g1.5.12"], ["övervunnit", "g1.5.13"], ["det.", "g1.5.11"],
    ],
    annotations: [
      {
        kind: "grammar", refs: "g1.5.7", lemma: "φαίνει (presens)",
        title: "Det enda verbet i presens: ”lyser”",
        body: "Mitt i en rad förfluten-tempus-verb står **φαίνει** i *presens*: ljuset **lyser** — nu, oavbrutet. Prologens berättelse om urskapelsen bryter, för ett enda ord, in i läsarens eget nu. Ljuset lyste inte bara; det fortsätter att lysa. Vi behåller presens på svenska i stället för att jämka det till ”lyste”.",
      },
      {
        kind: "translation", refs: "g1.5.13", lemma: "κατέλαβεν (καταλαμβάνω)",
        title: "Den avsiktliga dubbeltydigheten i ”övervinna / fatta”",
        body: "**καταλαμβάνω** betyder att *gripa* — och att gripa går åt två håll. Fientligt är det att *övermanna, övervinna* (så de flesta moderna översättningar: mörkret **övervann** det inte). Kognitivt är det att *fatta, förstå* (så äldre bruk: mörkret ”**begrep**” det inte). Johannes, en mästare på dubbel mening, avser nästan säkert bådadera: mörkret varken *släckte* ljuset eller *förstod* det. Svenskan kan inte rymma båda på en gång; vi trycker **”övervunnit”** och noterar den andra innebörden här — kanske den rikare halvan.",
      },
      {
        kind: "concept", refs: "g1.5.6 g1.5.10", lemma: "σκοτία (mörker)",
        title: "Mörkret som aktör",
        body: "Lägg märke till att **σκοτία** inte är ren frånvaro utan en agent: det är det grammatiska subjekt som misslyckas med att ”gripa” ljuset. Genom hela Johannes är mörkret den sfär och makt som är otro och fientlighet (jfr 3:19). Versen säger evangeliet i miniatyr: ljuset möter verkligt motstånd och besegras inte.",
      },
    ],
  },

  6: {
    english: [
      ["Det", "", true], ["kom", "g1.6.1"], ["en", "g1.6.2", true], ["man,", "g1.6.2"], ["sänd", "g1.6.3"], ["från", "g1.6.4"], ["Gud,", "g1.6.5"],
      ["vars", "g1.6.7"], ["namn", "g1.6.6"], ["var", "", true], ["Johannes.", "g1.6.8"],
    ],
    annotations: [
      {
        kind: "grammar", refs: "g1.6.1", lemma: "ἐγένετο (γίνομαι)",
        title: "Ett medvetet verbbyte",
        body: "Prologen har fyra gånger sagt att Ordet **ἦν** — ”var”, tidlöst. Nu, om Johannes, säger den **ἐγένετο**: han ”blev till”. Samma verb som styr allt skapat (v. 3) styr Döparen. Med ett enda ord placerar texten Johannes på skapelsens sida av den gräns den drog i vv. 1–3: vittnet *börjar*; Ordet bara *är*.",
      },
    ],
  },

  7: {
    english: [
      ["Han", "g1.7.1"], ["kom", "g1.7.2"], ["som", "g1.7.3"], ["ett", "g1.7.4", true], ["vittne,", "g1.7.4"], ["för", "g1.7.5"], ["att", "g1.7.5"], ["vittna", "g1.7.6"],
      ["om", "g1.7.7"], ["ljuset,", "g1.7.8 g1.7.9"], ["så", "g1.7.10"], ["att", "g1.7.10"], ["alla", "g1.7.11"], ["genom", "g1.7.13"], ["honom", "g1.7.14"], ["skulle", "g1.7.12"], ["tro.", "g1.7.12"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.7.4 g1.7.6", lemma: "μαρτυρία / μαρτυρέω",
        title: "Vittnesbörd — evangeliets rättssal",
        body: "Ord-gruppen för **vittnesbörd** (*martyria*, *martyreō*) är en av Johannes huvudbilder: hela evangeliet iscensätts som en slags rättegång där vittnesmål avläggs för och mot Jesus. Johannes Döparen är det första vittne som kallas. Notera hur snävt hans roll dras — han kommer *för* att vittna, *till* vittnesbörd, så att *andra* ska tro. Han är en röst som pekar bort från sig själv.",
      },
    ],
  },

  8: {
    english: [
      ["Han", "g1.8.3"], ["var", "g1.8.2"], ["inte", "g1.8.1"], ["ljuset,", "g1.8.4 g1.8.5"],
      ["utan", "g1.8.6"], ["kom", "", true], ["för", "g1.8.7"], ["att", "g1.8.7"], ["vittna", "g1.8.8"], ["om", "g1.8.9"], ["ljuset.", "g1.8.10 g1.8.11"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.8.3 g1.8.1", lemma: "οὐκ ἦν ἐκεῖνος",
        title: "Ett eftertryckligt förnekande: ”*han* var inte ljuset”",
        body: "Pronomenet **ἐκεῖνος** (”denne, han”) är eftertryckligt och negationen **οὐκ** står först: *inte ljuset var han*. Många forskare hör en polemisk udd — det fanns de (en Döpar-rörelse är belagd ännu på 100-talet) som rankade Johannes för högt. Prologen är noggrann: Johannes är lampan, inte ljuset; reflektorn, inte källan.",
      },
    ],
  },

  9: {
    english: [
      ["Det", "g1.9.2"], ["sanna", "g1.9.5"], ["ljuset,", "g1.9.3"], ["som", "g1.9.6"], ["ger", "g1.9.7"], ["ljus", "g1.9.7"], ["åt", "", true], ["varje", "g1.9.8"], ["människa,", "g1.9.9"],
      ["höll", "g1.9.1"], ["på", "g1.9.1"], ["att", "g1.9.1"], ["komma", "g1.9.10"], ["in", "", true], ["i", "g1.9.11"], ["världen.", "g1.9.12 g1.9.13"],
    ],
    annotations: [
      {
        kind: "grammar", refs: "g1.9.1 g1.9.10", lemma: "Ἦν … ἐρχόμενον",
        title: "Vad är det som ”kommer in i världen”?",
        body: "Particip­et **ἐρχόμενον** (”kommande”) är grammatiskt tvetydigt. Det kan höra till **ἄνθρωπον**: ”varje människa *som kommer in i världen*” — ett känt hebreiskt idiom som helt enkelt betyder ”var och en som föds”. Eller det kan fullborda den omskrivna imperfekten **ἦν … ἐρχόμενον**: ”det sanna ljuset … *höll på att komma* in i världen”. Vi tar det senare (med de flesta moderna översättningar): versen bebådar ljusets ankomst och förbereder v. 14. Noten bevarar den första läsningen, som är gammal och grammatiskt ren.",
      },
      {
        kind: "concept", refs: "g1.9.5 g1.9.7", lemma: "ἀληθινόν · φωτίζει",
        title: "”Sant” ljus som upplyser var och en",
        body: "**ἀληθινός** är ”sant” i betydelsen *verkligt, urbildligt* — den äkta varan som andra ljus är skuggor av. Att detta ljus **φωτίζει πάντα ἄνθρωπον** (”ger ljus åt varje människa”) har lästs på två sätt: som en universell inre upplysning (ett ljus i varje samvete), eller som ljuset som nu *lyser över* alla utan undantag i det inkarnerade Ordet. Johannes lämnar räckvidden medvetet vid.",
      },
    ],
  },

  10: {
    english: [
      ["Han", "", true], ["var", "g1.10.4"], ["i", "g1.10.1"], ["världen,", "g1.10.2 g1.10.3"],
      ["och", "g1.10.5"], ["världen", "g1.10.6 g1.10.7"], ["blev", "g1.10.10"], ["till", "g1.10.10"], ["genom", "g1.10.8"], ["honom,", "g1.10.9"],
      ["och", "g1.10.11"], ["världen", "g1.10.12 g1.10.13"], ["kände", "g1.10.16"], ["honom", "g1.10.14"], ["inte.", "g1.10.15"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.10.3 g1.10.7 g1.10.13", lemma: "κόσμος (kosmos)",
        title: "Tre betydelser av ”världen” i ett andetag",
        body: "Johannes spelar på **κόσμος** i en enda vers. ”Han var *i världen*” — den skapade arenan. ”Världen *blev till genom honom*” — summan av allt skapat. ”Världen *kände honom inte*” — mänskligheten ordnad i främlingskap inför Gud. Denna sista, moraliska betydelse blir dominerande senare (den ”värld” som hatar ljuset). Tragedin komprimeras grammatiskt: världen har honom att tacka för sin blotta tillvaro, och känner inte igen honom.",
      },
      {
        kind: "concept", refs: "g1.10.16", lemma: "ἔγνω (γινώσκω)",
        title: "”Kände inte” — ett misslyckat igenkännande",
        body: "**γινώσκω** är *relationellt* vetande — igenkänning, erkännande — inte blott information. Världens misslyckande är inte okunskap om ett faktum utan avvisandet av en person. Samma verb kommer att beskriva den förtrolighet Jesus erbjuder sina egna (10:14).",
      },
    ],
  },

  11: {
    english: [
      ["Han", "", true], ["kom", "g1.11.4"], ["till", "g1.11.1"], ["sitt", "g1.11.3"], ["eget,", "g1.11.2 g1.11.3"],
      ["och", "g1.11.5"], ["hans", "g1.11.7"], ["egna", "g1.11.6 g1.11.7"], ["tog", "g1.11.10"], ["inte", "g1.11.9"], ["emot", "g1.11.10"], ["honom.", "g1.11.8"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g1.11.3 g1.11.7", lemma: "τὰ ἴδια · οἱ ἴδιοι",
        title: "En ordlek som svenskan nästan fångar: sitt *eget*, sina *egna*",
        body: "Samma rot **ἴδιος** (”ens eget”) återkommer två gånger, i två genus. Först neutrum plural **τὰ ἴδια** — hans egna *ting / hem / område*. Sedan maskulinum plural **οἱ ἴδιοι** — hans egna *människor*. Han kom till sitt eget *hem*, och hans egen *familj* ville inte ta emot honom. Vi återger det ”sitt eget … hans egna”; den främsta syftningen är nästan säkert Israel, och bakom det hela skapelsen.",
      },
    ],
  },

  12: {
    english: [
      ["Men", "g1.12.2"], ["åt", "g1.12.1"], ["alla", "g1.12.1"], ["som", "g1.12.1"], ["tog", "g1.12.3"], ["emot", "g1.12.3"], ["honom,", "g1.12.4"],
      ["gav", "g1.12.5"], ["han", "g1.12.5"], ["dem", "g1.12.6"], ["rätten", "g1.12.7"], ["att", "g1.12.10"], ["bli", "g1.12.10"], ["Guds", "g1.12.9"], ["barn", "g1.12.8"], ["—", "", true],
      ["åt", "g1.12.11"], ["dem", "g1.12.11"], ["som", "g1.12.12"], ["tror", "g1.12.12"], ["på", "g1.12.13"], ["hans", "g1.12.16"], ["namn.", "g1.12.15"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g1.12.7", lemma: "ἐξουσία",
        title: "”Rätt”, inte ”makt”",
        body: "**ἐξουσία** är *bemyndigande* — den beviljade rätten eller friheten att göra något — inte rå **δύναμις** (”kraft”). Att bli Guds barn är ingen mänsklig bragd som gripits med våld; det är en *förlänad rätt*. Äldre bruk (”makten att…”) vilseleder ett modernt öra; ”rätten” eller ”fullmakten” ligger närmare.",
      },
      {
        kind: "concept", refs: "g1.12.8 g1.12.12", lemma: "τέκνα θεοῦ · πιστεύω εἰς",
        title: "Guds barn — och att ”tro in i” ett namn",
        body: "Johannes reserverar **υἱός** (”Son”) för Kristus och kallar de troende **τέκνα** (”barn”) — en avsiktlig artskillnad: han är Son av naturen, de av gåva. Och uttrycket är **πιστεύω εἰς** — ordagrant att ”tro *in i*” hans namn, Johannes signaturkonstruktion. Det är inte instämmande i en sats utan självutlämnande tillit *riktad mot* en person, som för den troende *in i* honom.",
      },
    ],
  },

  13: {
    english: [
      ["som", "g1.13.1"], ["föddes,", "g1.13.16"], ["inte", "g1.13.2"], ["av", "g1.13.3"], ["blod,", "g1.13.4"], ["inte", "g1.13.5"], ["av", "g1.13.6"], ["köttets", "g1.13.8"], ["vilja,", "g1.13.7"],
      ["inte", "g1.13.9"], ["av", "g1.13.10"], ["en", "g1.13.12", true], ["mans", "g1.13.12"], ["vilja,", "g1.13.11"], ["utan", "g1.13.13"], ["av", "g1.13.14"], ["Gud.", "g1.13.15"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.13.4 g1.13.16", lemma: "ἐξ αἱμάτων … ἐγεννήθησαν",
        title: "En födelse ”inte av blod”",
        body: "Grekiskans **αἱμάτων** står i *plural* — ”blod” i flertal — och speglar en gammal föreställning om avlelse som en blandning av blod. Tre naturliga livskällor förnekas i tur och ordning: blod, köttets vilja, en mans vilja. Mot varje mänsklig alstring står det enda sanna ursprunget: **ἐκ Θεοῦ ἐγεννήθησαν**, ”de föddes av Gud”. Barnen i v. 12 blir *gjorda*, inte födda på vanligt sätt.",
      },
      {
        kind: "text", refs: "g1.13.1 g1.13.16", lemma: "οἳ … ἐγεννήθησαν",
        title: "En singular läsning med lång historia",
        body: "En handfull vittnen (främst fornlatinet, och några patristiska citat) läser hela versen i *singular* — ”**han som** föddes, inte av blod … utan av Gud” — vilket gör den till ett uttalande om Kristi jungfrufödsel snarare än om de troendes nya födelse. Den grekiska handskriftstraditionen stöder överväldigande *pluralen* (”de som **föddes**”), som vi trycker; men singularen var känd tidigt och skattades av somliga fäder, och den visar hur en enda ändelse kan förskjuta en vers från frälsningslära till kristologi.",
      },
    ],
  },

  14: {
    english: [
      ["Och", "g1.14.1"], ["Ordet", "g1.14.2 g1.14.3"], ["blev", "g1.14.5"], ["kött", "g1.14.4"], ["och", "g1.14.6"], ["slog", "g1.14.7"], ["upp", "g1.14.7"], ["sitt", "g1.14.7", true], ["tält", "g1.14.7"],
      ["bland", "g1.14.8"], ["oss,", "g1.14.9"], ["och", "g1.14.10"], ["vi", "g1.14.11"], ["skådade", "g1.14.11"], ["hans", "g1.14.14"], ["härlighet,", "g1.14.12 g1.14.13"], ["en", "", true], ["härlighet", "g1.14.15"], ["som", "g1.14.16"],
      ["av", "g1.14.17", true], ["den", "g1.14.17", true], ["ende", "g1.14.17"], ["Sonen", "g1.14.17", true], ["från", "g1.14.18"], ["Fadern,", "g1.14.19"],
      ["full", "g1.14.20"], ["av", "", true], ["nåd", "g1.14.21"], ["och", "g1.14.22"], ["sanning.", "g1.14.23"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.14.3 g1.14.5 g1.14.4", lemma: "ὁ Λόγος σὰρξ ἐγένετο",
        title: "Hela evangeliets vändpunkt: ”Ordet blev kött”",
        body: "Verbet är **ἐγένετο** än en gång — Ordet som *var* (ἦν) *blev* nu. Och det han blev är **σάρξ**, ”kött” — inte bara ”en kropp” eller ”en människa” utan bräcklig, dödlig mänsklighet i sin svaghet. Johannes säger inte att Ordet *trädde in i* kött eller *tycktes* vara kött; han *blev* det. Mot varje doketism är chocken avsedd.",
      },
      {
        kind: "concept", refs: "g1.14.7 g1.14.13", lemma: "ἐσκήνωσεν · δόξα",
        title: "”Slog upp sitt tält” — tabernaklet och härligheten",
        body: "**σκηνόω** betyder att *slå upp tält, slå läger*; vi återger det ordagrant för att bevara bilden. Det frammanar **σκηνή**, ökentabernaklet där Guds härlighet (*Shekina*) bodde bland Israel — konsonanterna i hebreiskans *shakan* ekar rentav i grekiskan. Så när nästa sats säger ”vi **skådade hans härlighet** (**δόξα**)” är anspråket svindlande: den Sinai-härlighet som fyllde tältet tältar nu i ett människoliv, och blev *sedd*.",
      },
      {
        kind: "translation", refs: "g1.14.17", lemma: "μονογενής",
        title: "”Enfödd” eller ”ende / enastående”?",
        body: "**μονογενής** är *monos* (”enda”) + *genos* (”slag, art”), dvs. *unik, enastående* — inte *monos* + *gennaō* (”föda”). Det traditionella ”enfödd” kommer via latinets *unigenitus* och läser in en senare lära i ordet. Den enkla innebörden är ”den *ende* Sonen”, den *ende och enastående*. Vi lägger till ”Sonen” (grekiskan har bara adjektivet) eftersom familjebilden av *Fadern* kräver det.",
      },
      {
        kind: "concept", refs: "g1.14.21 g1.14.23", lemma: "χάριτος καὶ ἀληθείας",
        title: "”Nåd och sanning” — ett hebreiskt par",
        body: "**χάρις καὶ ἀλήθεια** återger nästan säkert det stora förbundsparet **חֶסֶד וֶאֱמֶת** (*ḥesed we-ʾemet*), ”nåd och trofasthet” — just de ord Gud talar om sig själv för Mose vid Sinai (2 Mos 34:6). Det inkarnerade Ordet är ”fullt” av precis det som HERREN förklarade sig vara. Detta förbereder tyst v. 17.",
      },
    ],
  },

  15: {
    english: [
      ["Johannes", "g1.15.1"], ["vittnar", "g1.15.2"], ["om", "g1.15.3"], ["honom", "g1.15.4"], ["och", "g1.15.5"], ["har", "g1.15.6"], ["ropat", "g1.15.6"], ["ut,", "g1.15.6"], ["och", "", true], ["sagt:", "g1.15.7"],
      ["Denne", "g1.15.8"], ["var", "g1.15.9"], ["han", "", true], ["som", "g1.15.10"], ["jag", "g1.15.11"], ["talade", "g1.15.11"], ["om,", "g1.15.11"], ["han", "g1.15.12"], ["som", "g1.15.15"], ["kommer", "g1.15.15"], ["efter", "g1.15.13"], ["mig", "g1.15.14"],
      ["har", "g1.15.18"], ["kommit", "g1.15.18"], ["före", "g1.15.16"], ["mig,", "g1.15.17"], ["eftersom", "g1.15.19"], ["han", "", true], ["var", "g1.15.22"], ["till", "g1.15.20"], ["före", "g1.15.20"], ["mig.", "g1.15.21"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.15.13 g1.15.16 g1.15.20 g1.15.22", lemma: "ὀπίσω … ἔμπροσθεν … πρῶτος",
        title: "En gåta om före och efter",
        body: "Döparens ord vilar på tre lägesord. Den som kommer **ὀπίσω** (”efter”) Johannes i tid har kommit **ἔμπροσθεν** (”före”) honom i rang — ”eftersom han **var** (**ἦν**) **πρῶτός** (först / tidigare än) mig”. Det avslutande **ἦν** är Prologens tidlösa ”var” igen: Jesus överträffar sin föregångare därför att han *fanns till före* honom. Kronologin störtas av evigheten.",
      },
    ],
  },

  16: {
    english: [
      ["För", "g1.16.1"], ["av", "g1.16.2"], ["hans", "g1.16.5"], ["fullhet", "g1.16.4"], ["har", "g1.16.8"], ["vi", "g1.16.6"], ["alla", "g1.16.7"], ["fått,", "g1.16.8"],
      ["och", "g1.16.9"], ["nåd", "g1.16.10"], ["utöver", "g1.16.11"], ["nåd.", "g1.16.12"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g1.16.10 g1.16.11 g1.16.12", lemma: "χάριν ἀντὶ χάριτος",
        title: "”Nåd utöver nåd” — eller nåd som *ersätter* nåd?",
        body: "Prepositionen **ἀντί** betyder normalt ”i stället för, i utbyte mot”. Frasen kan alltså betyda nåd *hopad på* nåd (våg efter våg), eller nåd *i utbyte mot* nåd — det nya förbundets nåd som ersätter lagens tidigare nåd. Läst med v. 17 som följer är ”ersättnings”-innebörden lockande: gåva som avlöser gåva. Vi behåller det välbekanta ”nåd utöver nåd” och noterar alternativet.",
      },
    ],
  },

  17: {
    english: [
      ["För", "g1.17.1"], ["lagen", "g1.17.2 g1.17.3"], ["gavs", "g1.17.6"], ["genom", "g1.17.4"], ["Mose;", "g1.17.5"],
      ["nåden", "g1.17.7 g1.17.8"], ["och", "g1.17.9"], ["sanningen", "g1.17.10 g1.17.11"], ["kom", "g1.17.15"], ["genom", "g1.17.12"], ["Jesus", "g1.17.13"], ["Kristus.", "g1.17.14"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.17.3 g1.17.13 g1.17.15", lemma: "νόμος … Ἰησοῦ Χριστοῦ",
        title: "Mose och Messias — kontrast, inte förkastelse",
        body: "Parallellen är skarp men inte helt fientlig: lagen ”**gavs**” (en fullbordad gåva) genom Mose; ”nåd och sanning” **ἐγένετο** — *blev till* — genom Jesus Kristus. Notera att verbet är **γίνομαι** än en gång, vilket binder detta till Ordet genom vilket allt blev till. Detta är också första gången evangeliet uttalar hela namnet **Ἰησοῦς Χριστός**: först nu, vid Prologens slut, ges Ordet sitt mänskliga namn.",
      },
    ],
  },

  18: {
    english: [
      ["Ingen", "g1.18.2"], ["har", "g1.18.3"], ["någonsin", "g1.18.4"], ["sett", "g1.18.3"], ["Gud;", "g1.18.1"],
      ["den", "g1.18.5", true], ["ende", "g1.18.5"], ["Guden,", "g1.18.6"], ["som", "g1.18.7"], ["är", "g1.18.8"], ["vid", "g1.18.9"], ["Faderns", "g1.18.12 g1.18.13"], ["sida,", "g1.18.11"],
      ["han", "g1.18.14"], ["har", "g1.18.15"], ["gjort", "g1.18.15"], ["honom", "g1.18.15", true], ["känd.", "g1.18.15"],
    ],
    annotations: [
      {
        kind: "text", refs: "g1.18.5 g1.18.6", lemma: "μονογενὴς θεός / υἱός",
        title: "Prologens svåraste variant",
        body: "Skrev Johannes **μονογενὴς θεός** (”den ende *Guden*”, eller ”Gud den ende Sonen”) eller **μονογενὴς υἱός** (”den ende *Sonen*”)? Läsningen ”**Gud**” är den svårare och tidigare, och vi trycker den (med Nestle 1904). Den gör att versen ramar in hela Prologen: den öppnade med ”Ordet var Gud” (v. 1) och sluter nu med ”den ende Guden … har gjort honom känd”. Se 𝔓⁶⁶-noten.",
      },
      {
        kind: "p66", refs: "g1.18.5 g1.18.6", lemma: "μονογενὴς θεός",
        title: "𝔓⁶⁶ stöder den svårare läsningen",
        body: "Här talar 𝔓⁶⁶ klart och tidigt. Tillsammans med 𝔓⁷⁵ och de stora kodexarna א och B läser den **μονογενὴς θεός** — ”ende Gud” — inte det jämnare **υἱός** (”Son”) hos den senare majoriteten. Två av våra äldsta vittnen till Johannes, från omkring sekelskiftet 200, stöder alltså den läsning som mest överraskar: den *enfödde Guden*. (Här, till skillnad från v. 1, står θεός på sidan, inte rekonstruerat.)",
      },
      {
        kind: "translation", refs: "g1.18.15 g1.18.11", lemma: "ἐξηγήσατο · κόλπος",
        title: "Han ”uttolkade” Fadern",
        body: "Det sista verbet är **ἐξηγέομαι** — att *leda ut, berätta, utlägga*; vårt ord **exeges** kommer rakt av det. Den osedde Guden blir inte bara rapporterad utan *uttolkad, gjord känd* av den som är **εἰς τὸν κόλπον** — ”vid *bröstet* / sidan” av Fadern, den innersta förtrolighetens plats (jfr 13:23). Prologen slutar där den började: Ordet är Guds egen självförklaring.",
      },
    ],
  },

  19: {
    english: [
      ["Och", "g1.19.1"], ["detta", "g1.19.2"], ["är", "g1.19.3"], ["Johannes", "g1.19.6 g1.19.7"], ["vittnesbörd,", "g1.19.4 g1.19.5"],
      ["när", "g1.19.8"], ["judarna", "g1.19.12 g1.19.13"], ["sände", "g1.19.9"], ["präster", "g1.19.16"], ["och", "g1.19.17"], ["leviter", "g1.19.18"],
      ["till", "g1.19.10"], ["honom", "g1.19.11"], ["från", "g1.19.14"], ["Jerusalem", "g1.19.15"],
      ["för", "g1.19.19"], ["att", "g1.19.19"], ["fråga", "g1.19.20"], ["honom:", "g1.19.21"], ["”Vem", "g1.19.23"], ["är", "g1.19.24"], ["du?”", "g1.19.22"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.19.13 g1.19.16 g1.19.18", lemma: "οἱ Ἰουδαῖοι",
        title: "”Judarna” — oftast myndigheterna",
        body: "Hos Johannes betyder **οἱ Ἰουδαῖοι** (”judarna”) sällan folket i allmänhet; oftast avser det det *judeiska religiösa etablissemanget* med centrum i Jerusalem — här preciserat som **präster och leviter**. Det är en intern strid: Jesus, hans första efterföljare och Johannes Döparen är alla judar. Att platt återge det ”judarna” har vållat verklig historisk skada; innebörden ligger närmare ”de judeiska myndigheterna”.",
      },
    ],
  },

  20: {
    english: [
      ["Och", "g1.20.1"], ["han", "", true], ["bekände", "g1.20.2"], ["och", "g1.20.3"], ["förnekade", "g1.20.5"], ["inte,", "g1.20.4"],
      ["utan", "g1.20.6"], ["bekände:", "g1.20.7"], ["”Jag", "g1.20.9"], ["är", "g1.20.11"], ["inte", "g1.20.10"], ["Kristus.”", "g1.20.12 g1.20.13"],
    ],
    annotations: [
      {
        kind: "grammar", refs: "g1.20.2 g1.20.5 g1.20.7", lemma: "ὡμολόγησεν … οὐκ ἠρνήσατο",
        title: "En högtidlig, trefaldig dementi",
        body: "Raden är nästan liturgisk i sin emfas: han ”**bekände** och **förnekade inte**, utan **bekände**”. Fördubblingen av det positiva kring en negation hamrar in poängen. Vilken folklig hänförelse som än omgav Döparen avvisar Johannes den blankt: **ἐγὼ οὐκ εἰμὶ ὁ Χριστός**, ”jag är inte Kristus”. Det eftertryckliga **ἐγώ** (”*jag*”) lämnar tyst rum för den som kan säga ”jag är”.",
      },
    ],
  },

  21: {
    english: [
      ["Och", "g1.21.1"], ["de", "", true], ["frågade", "g1.21.2"], ["honom:", "g1.21.3"], ["”Vad", "g1.21.4"], ["då?”", "g1.21.5"],
      ["”Är", "g1.21.8"], ["du", "g1.21.6"], ["Elia?”", "g1.21.7"], ["Och", "g1.21.9"], ["han", "", true], ["säger:", "g1.21.10"],
      ["”Det", "", true], ["är", "g1.21.12"], ["jag", "", true], ["inte.”", "g1.21.11"], ["”Är", "g1.21.15"], ["du", "g1.21.16"], ["Profeten?”", "g1.21.13 g1.21.14"],
      ["Och", "g1.21.17"], ["han", "", true], ["svarade:", "g1.21.18"], ["”Nej.”", "g1.21.19"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.21.7 g1.21.14", lemma: "Ἡλείας · ὁ προφήτης",
        title: "Elia och ”Profeten”",
        body: "Två levande förväntningar. **Elia** skulle återvända före HERRENS dag (Mal 4:5) — och slående nog förnekar Johannes att vara honom, fastän Jesus på annat håll säger att Johannes *är* Elia ”i ande” (Matt 11:14). **Profeten** är den ”lik Mose” som utlovas i 5 Mos 18:15. Johannes viftar bort alla tre titlarna — Kristus, Elia, Profeten — och vägrar varje kategori som skulle rikta uppmärksamheten mot honom själv.",
      },
    ],
  },

  22: {
    english: [
      ["Så", "g1.22.2"], ["sade", "g1.22.1"], ["de", "g1.22.1"], ["till", "g1.22.3"], ["honom:", "g1.22.3"],
      ["”Vem", "g1.22.4"], ["är", "g1.22.5"], ["du?", "g1.22.5"], ["så", "g1.22.6"], ["att", "g1.22.6"],
      ["vi", "g1.22.8"], ["kan", "g1.22.8"], ["ge", "g1.22.8"], ["ett", "g1.22.7"], ["svar", "g1.22.7"],
      ["åt", "g1.22.9"], ["dem", "g1.22.9"], ["som", "g1.22.10"], ["har", "g1.22.10"], ["sänt", "g1.22.10"], ["oss.", "g1.22.11"],
      ["Vad", "g1.22.12"], ["säger", "g1.22.13"], ["du", "g1.22.13"], ["om", "g1.22.14"], ["dig", "g1.22.15"], ["själv?”", "g1.22.15"],
    ],
    annotations: [],
  },

  23: {
    english: [
      ["Han", "", true], ["sade:", "g1.23.1"], ["”Jag", "g1.23.2"], ["är", "", true], ["en", "g1.23.3", true], ["röst", "g1.23.3"],
      ["som", "g1.23.4"], ["ropar", "g1.23.4"], ["i", "g1.23.5"], ["öknen:", "g1.23.6 g1.23.7"],
      ["Gör", "g1.23.8"], ["Herrens", "g1.23.11"], ["väg", "g1.23.9 g1.23.10"], ["rak,”", "g1.23.8"],
      ["så", "g1.23.12"], ["som", "g1.23.12"], ["profeten", "g1.23.15 g1.23.16"], ["Jesaja", "g1.23.14"], ["sade.", "g1.23.13"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.23.3 g1.23.7", lemma: "φωνὴ βοῶντος",
        title: "Bara en röst",
        body: "Tillfrågad *vem* han är svarar Johannes med ett *vad*: han är en **röst** (Jes 40:3). Synoptikerna tillämpar den versen *på* Johannes; här tillämpar Johannes den *på sig själv*, och det är den enda identitet han gör anspråk på. En röst finns bara till för det ord den bär, och tonar sedan bort — den fulländade självbeskrivningen för föregångaren.",
      },
    ],
  },

  24: {
    english: [
      ["Nu", "g1.24.1"], ["hade", "g1.24.3"], ["de", "", true], ["blivit", "g1.24.3"], ["sända", "g1.24.2"],
      ["från", "g1.24.4"], ["fariseerna.", "g1.24.5 g1.24.6"],
    ],
    annotations: [],
  },

  25: {
    english: [
      ["Och", "g1.25.1"], ["de", "", true], ["frågade", "g1.25.2"], ["honom", "g1.25.3"], ["och", "g1.25.4"], ["sade", "g1.25.5"],
      ["till", "g1.25.6"], ["honom:", "g1.25.6"], ["”Varför", "g1.25.7"], ["döper", "g1.25.9"], ["du", "g1.25.9"], ["då,", "g1.25.8"],
      ["om", "g1.25.10"], ["du", "g1.25.11"], ["inte", "g1.25.12"], ["är", "g1.25.13"], ["Kristus,", "g1.25.14 g1.25.15"],
      ["inte", "g1.25.16"], ["heller", "g1.25.16"], ["Elia,", "g1.25.17"], ["inte", "g1.25.18"], ["heller", "g1.25.18"], ["Profeten?”", "g1.25.19 g1.25.20"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.25.9", lemma: "τί βαπτίζεις;",
        title: "Varför döpa alls?",
        body: "Frågan förutsätter att en rituell tvagning av *hela Israel* hörde till de yttersta dagarna — den eskatologiska rening som utlovas i Hesekiel 36:25 och Sakarja 13:1, eller det dop man väntade av Messias, Elia eller Profeten. Om Johannes inte gör anspråk på någon av dessa roller, med vems fullmakt döper han då? Scenen är dukad för hans svar: hans vatten pekar bortom sig självt.",
      },
    ],
  },

  26: {
    english: [
      ["Johannes", "g1.26.3 g1.26.4"], ["svarade", "g1.26.1"], ["dem", "g1.26.2"], ["och", "", true], ["sade:", "g1.26.5"], ["”Jag", "g1.26.6"], ["döper", "g1.26.7"],
      ["med", "g1.26.8"], ["vatten.", "g1.26.9"], ["Mitt", "g1.26.10"], ["ibland", "g1.26.10"], ["er", "g1.26.11"], ["står", "g1.26.12"],
      ["en", "", true], ["som", "g1.26.13"], ["ni", "g1.26.14"], ["inte", "g1.26.15"], ["känner,", "g1.26.16"],
    ],
    annotations: [],
  },

  27: {
    english: [
      ["han", "g1.27.1"], ["som", "g1.27.4"], ["kommer", "g1.27.4"], ["efter", "g1.27.2"], ["mig,", "g1.27.3"],
      ["vars", "g1.27.5"], ["sandalrem", "g1.27.13 g1.27.14 g1.27.15 g1.27.16"], ["jag", "g1.27.8"], ["inte", "g1.27.6"], ["är", "g1.27.7"], ["värdig", "g1.27.9"], ["att", "g1.27.10"], ["lossa.", "g1.27.11"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.27.14 g1.27.11", lemma: "λύσω … τὸν ἱμάντα",
        title: "Lägre än en slav",
        body: "Att lossa en herres sandalrem var slavgöra — så simpelt att en rabbinsk sats höll att en lärjunge fick göra allt en slav gör för sin lärare *utom* att lossa hans sandaler. Johannes säger att han inte ens är värdig det. Föregångaren mäter det omätliga avståndet mellan sig själv och den som kommer efter.",
      },
    ],
  },

  28: {
    english: [
      ["Detta", "g1.28.1"], ["hände", "g1.28.4"], ["i", "g1.28.2"], ["Betania", "g1.28.3"], ["på", "g1.28.5"], ["andra", "g1.28.5"], ["sidan", "g1.28.5"], ["Jordan,", "g1.28.6 g1.28.7"],
      ["där", "g1.28.8"], ["Johannes", "g1.28.10 g1.28.11"], ["döpte.", "g1.28.9 g1.28.12"],
    ],
    annotations: [
      {
        kind: "text", refs: "g1.28.3", lemma: "Βηθανίᾳ",
        title: "Betania — eller Betabara?",
        body: "Detta är **inte** det Betania nära Jerusalem (Marias, Martas och Lasaros) utan en plats *på andra sidan Jordan*. Handskrifterna läser **Βηθανίᾳ**, men en märklig tidig tradition — följd av Origenes, som sökte i trakten och inte kunde finna något Betania där — läser **Βηθαβαρᾷ** (Betabara). De flesta utgivare behåller ”Betania” som den svårare, bättre belagda läsningen och betraktar platsen som i övrigt okänd.",
      },
    ],
  },

  29: {
    english: [
      ["Nästa", "g1.29.1"], ["dag", "g1.29.2"], ["ser", "g1.29.3"], ["han", "", true], ["Jesus", "g1.29.4 g1.29.5"], ["komma", "g1.29.6"], ["mot", "g1.29.7"], ["sig,", "g1.29.8"],
      ["och", "g1.29.9"], ["säger:", "g1.29.10"], ["”Se,", "g1.29.11"], ["Guds", "g1.29.14 g1.29.15"], ["Lamm", "g1.29.12 g1.29.13"],
      ["som", "g1.29.16"], ["tar", "g1.29.17"], ["bort", "g1.29.17"], ["världens", "g1.29.20 g1.29.21"], ["synd!”", "g1.29.18 g1.29.19"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.29.13 g1.29.15", lemma: "ὁ Ἀμνὸς τοῦ Θεοῦ",
        title: "”Guds Lamm” — vilket lamm?",
        body: "Johannes smälter samman flera lamm i en titel. **Påskalammet**, vars blod skyddade Israel (2 Mos 12) — i detta evangelium ska Jesus dö medan lammen slaktas, utan att ett ben krossas (19:36). Lammet i **Jesaja 53:7**, ”likt ett lamm som förs bort till att slaktas”, som bär mångas synd. Det dagliga **tamid**-lammet i templet. Kanske väduren vid **Moria** (1 Mos 22), Guds egen försyn. Den ena gestalten samlar upp hela Israels offerhopp.",
      },
      {
        kind: "translation", refs: "g1.29.17 g1.29.19", lemma: "ὁ αἴρων τὴν ἁμαρτίαν",
        title: "”Tar bort” — och tar på sig",
        body: "**αἴρω** betyder både att *lyfta upp, ta på sig* och att *bära bort, avlägsna*. Lammet gör bådadera: det *bär* synden och *bär bort* den (offret och syndabocken i ett). Och **ἁμαρτίαν** står i *singular* — inte en uppräkning av felsteg utan ”**världens synd**”, mänsklighetens främlingskap samlat till en enda massa och lyft av.",
      },
    ],
  },

  30: {
    english: [
      ["Denne", "g1.30.1"], ["är", "g1.30.2"], ["han", "", true], ["om", "g1.30.3"], ["vilken", "g1.30.4"], ["jag", "g1.30.5"], ["sade:", "g1.30.6"],
      ["”Efter", "g1.30.7"], ["mig", "g1.30.8"], ["kommer", "g1.30.9"], ["en", "g1.30.10", true], ["man", "g1.30.10"], ["som", "g1.30.11"],
      ["har", "g1.30.14"], ["kommit", "g1.30.14"], ["före", "g1.30.12"], ["mig,", "g1.30.13"], ["eftersom", "g1.30.15"], ["han", "", true], ["var", "g1.30.18"], ["till", "g1.30.16"], ["före", "g1.30.16"], ["mig.”", "g1.30.17"],
    ],
    annotations: [
      {
        kind: "grammar", refs: "g1.30.10 g1.30.18", lemma: "ἀνήρ · ἦν",
        title: "Gåtan återkommer",
        body: "Johannes upprepar sitt ord från v. 15 nästan ordagrant, nu med namnet på den som kommer som **ἀνήρ**, ”en man”. Paradoxen står kvar: den senare komne rankar *före* därför att han fanns *före* — och skälet är än en gång Prologens tidlösa **ἦν**, ”han *var*”. Vittnet har mött, i köttet, det föruttillvarande Ord han bebådade.",
      },
    ],
  },

  31: {
    english: [
      ["Och", "g1.31.1"], ["jag", "g1.31.1"], ["själv", "", true], ["kände", "g1.31.3"], ["honom", "g1.31.4"], ["inte,", "g1.31.2"],
      ["men", "g1.31.5"], ["för", "g1.31.6"], ["att", "g1.31.6"], ["han", "g1.31.7"], ["skulle", "g1.31.7"], ["uppenbaras", "g1.31.7"],
      ["för", "g1.31.8"], ["Israel,", "g1.31.9"], ["därför", "g1.31.10 g1.31.11"], ["kom", "g1.31.12"], ["jag", "g1.31.13"], ["och", "", true], ["döper", "g1.31.16"], ["med", "g1.31.14"], ["vatten.", "g1.31.15"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.31.3 g1.31.7", lemma: "οὐκ ᾔδειν … φανερωθῇ",
        title: "Vattnets poäng",
        body: "Två gånger säger Johannes ”jag kände honom inte” (vv. 31, 33) — ingen förhandsvink, ingen släktuppgörelse (fast Lukas gör dem befryndade). Hela hans döparverksamhet fanns till för ett enda syfte: **ἵνα φανερωθῇ τῷ Ἰσραήλ**, ”att han skulle *uppenbaras* för Israel”. Vattnet var aldrig poängen; avslöjandet var det.",
      },
    ],
  },

  32: {
    english: [
      ["Och", "g1.32.1"], ["Johannes", "g1.32.3"], ["vittnade", "g1.32.2"], ["och", "", true], ["sade:", "g1.32.4"],
      ["”Jag", "g1.32.6"], ["har", "g1.32.6"], ["skådat", "g1.32.6"], ["Anden", "g1.32.7 g1.32.8"], ["komma", "g1.32.9"], ["ner", "g1.32.9"],
      ["som", "g1.32.10"], ["en", "g1.32.11", true], ["duva", "g1.32.11"], ["från", "g1.32.12"], ["himlen,", "g1.32.13"],
      ["och", "g1.32.14"], ["den", "", true], ["blev", "g1.32.15"], ["kvar", "g1.32.15"], ["över", "g1.32.16"], ["honom.", "g1.32.17"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.32.15 g1.32.11", lemma: "ἔμεινεν · περιστερά",
        title: "Anden som *blir kvar*",
        body: "Det avgörande ordet är **μένω**, ”förbli, stanna”. Anden slår inte bara ner och lämnar, som den kom över de gamla profeterna för en tid; den **kommer ner och blir kvar**. Den varaktigheten är tecknet som utmärker Jesus. **Duvan** bär sina egna ekon — Anden som svävade över vattnen vid skapelsen (1 Mos 1:2), Noas duva som bebådade en ny värld, och Israel avbildat som en duva.",
      },
    ],
  },

  33: {
    english: [
      ["Och", "g1.33.1"], ["jag", "g1.33.1"], ["själv", "", true], ["kände", "g1.33.3"], ["honom", "g1.33.4"], ["inte,", "g1.33.2"],
      ["men", "g1.33.5"], ["han", "g1.33.6"], ["som", "g1.33.7"], ["sände", "g1.33.7"], ["mig", "g1.33.8"], ["att", "g1.33.9"], ["döpa", "g1.33.9"], ["med", "g1.33.10"], ["vatten,", "g1.33.11"],
      ["han", "g1.33.12"], ["sade", "g1.33.14"], ["till", "g1.33.13"], ["mig:", "g1.33.13"], ["”Den", "g1.33.15"], ["som", "g1.33.16 g1.33.17"], ["du", "g1.33.18"], ["ser", "g1.33.18"],
      ["Anden", "g1.33.19 g1.33.20"], ["komma", "g1.33.21"], ["ner", "g1.33.21"], ["och", "g1.33.22"], ["bli", "g1.33.23"], ["kvar", "g1.33.23"], ["över,", "g1.33.24 g1.33.25"],
      ["han", "g1.33.26"], ["är", "g1.33.27"], ["den", "g1.33.28"], ["som", "g1.33.29"], ["döper", "g1.33.29"], ["med", "g1.33.30"], ["den", "g1.33.32", true], ["helige", "g1.33.32"], ["Ande.”", "g1.33.31"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.33.29 g1.33.31", lemma: "βαπτίζων ἐν Πνεύματι Ἁγίῳ",
        title: "Vattendop, Andedop",
        body: "Johannes vatten är skuggan; kärnan är att denne **döper med den helige Ande** — den utlovade utgjutelsen av Guds eget liv (Hes 36:27; Joel 2:28), som detta evangelium ska föra till den uppståndne Jesus (20:22). Den kvarblivande Anden är på en gång *tecknet* varpå Johannes känner igen honom och *gåvan* han ska utgjuta.",
      },
    ],
  },

  34: {
    english: [
      ["Och", "g1.34.1"], ["jag", "g1.34.1"], ["har", "g1.34.2"], ["sett", "g1.34.2"], ["det", "", true], ["och", "g1.34.3"], ["har", "g1.34.4"], ["vittnat", "g1.34.4"],
      ["att", "g1.34.5"], ["denne", "g1.34.6"], ["är", "g1.34.7"], ["Guds", "g1.34.10 g1.34.11"], ["Son.", "g1.34.8 g1.34.9"],
    ],
    annotations: [
      {
        kind: "text", refs: "g1.34.9", lemma: "ὁ Υἱὸς / ὁ ἐκλεκτὸς τοῦ Θεοῦ",
        title: "”Guds Son” — eller ”Guds Utvalde”?",
        body: "Några tidiga vittnen (𝔓⁵ⱽᶦᵈ, א*, delar av fornlatinet och syriskan) läser **ὁ ἐκλεκτὸς τοῦ Θεοῦ**, ”Guds *Utvalde*”, i stället för **ὁ Υἱός**, ”*Sonen*”. ”Den Utvalde” (som ekar tjänaren i Jes 42:1) är rimligen den svårare läsningen, lättare att ”rätta” mot det välbekanta ”Sonen”. Majoriteten — och Nestle 1904 — läser ”Son”, vilket låter Döparen sluta sitt vittnesbörd med just den titel Natanael sträcker sig efter i v. 49.",
      },
    ],
  },

  35: {
    english: [
      ["Nästa", "g1.35.1"], ["dag", "g1.35.2"], ["stod", "g1.35.4"], ["Johannes", "g1.35.5 g1.35.6"], ["där", "", true], ["igen,", "g1.35.3"],
      ["med", "g1.35.7"], ["två", "g1.35.12"], ["av", "g1.35.8"], ["sina", "g1.35.11"], ["lärjungar,", "g1.35.9 g1.35.10"],
    ],
    annotations: [],
  },

  36: {
    english: [
      ["och", "g1.36.1"], ["när", "g1.36.5"], ["han", "g1.36.5"], ["såg", "g1.36.2"], ["Jesus", "g1.36.3 g1.36.4"], ["gå", "g1.36.5"], ["förbi,", "g1.36.5"],
      ["säger", "g1.36.6"], ["han:", "", true], ["”Se,", "g1.36.7"], ["Guds", "g1.36.10 g1.36.11"], ["Lamm!”", "g1.36.8 g1.36.9"],
    ],
    annotations: [],
  },

  37: {
    english: [
      ["Och", "g1.37.1"], ["de", "g1.37.3"], ["två", "g1.37.4"], ["lärjungarna", "g1.37.5"], ["hörde", "g1.37.2"], ["honom", "g1.37.6"], ["säga", "g1.37.7"], ["detta,", "", true],
      ["och", "g1.37.8"], ["de", "g1.37.9"], ["följde", "g1.37.9"], ["Jesus.", "g1.37.10 g1.37.11"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.37.9", lemma: "ἠκολούθησαν",
        title: "Det första efterföljandet",
        body: "**ἀκολουθέω**, ”följa”, är lärjungaskapets första rörelse i detta evangelium, och det bär båda betydelserna på en gång: att bokstavligt gå bakom Jesus på vägen, och att bildligt bli hans efterföljare. Johannes Döparens vittnesbörd har gjort sitt verk — det överlämnar hans egna lärjungar åt Lammet.",
      },
    ],
  },

  38: {
    english: [
      ["Jesus", "g1.38.3 g1.38.4"], ["vände", "g1.38.1"], ["sig", "g1.38.1"], ["om,", "g1.38.5"], ["och", "", true], ["när", "g1.38.6"], ["han", "g1.38.6"], ["såg", "g1.38.6"], ["dem", "g1.38.7"], ["följa,", "g1.38.8"],
      ["säger", "g1.38.9"], ["han", "", true], ["till", "g1.38.10"], ["dem:", "g1.38.10"], ["”Vad", "g1.38.11"], ["söker", "g1.38.12"], ["ni?”", "g1.38.12"],
      ["Och", "g1.38.14"], ["de", "g1.38.13"], ["sade", "g1.38.15"], ["till", "g1.38.16"], ["honom:", "g1.38.16"], ["”Rabbi”", "g1.38.17"],
      ["(vilket", "g1.38.18"], ["översatt", "g1.38.20"], ["betyder", "g1.38.19"], ["Lärare),", "g1.38.21"], ["”var", "g1.38.22"], ["bor", "g1.38.23"], ["du?”", "g1.38.23"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.38.11", lemma: "Τί ζητεῖτε;",
        title: "Jesu första ord: ”Vad söker ni?”",
        body: "Den allra första mening Jesus talar i detta evangelium är en fråga — och en riktad lika mycket till läsaren som till de två lärjungarna: **τί ζητεῖτε;** ”Vad söker ni?” Det är frågan varje blivande efterföljare måste besvara. (Vid evangeliets andra ände frågar den uppståndne Jesus Maria nästan detsamma: ”Vem söker du?” 20:15.)",
      },
      {
        kind: "translation", refs: "g1.38.17 g1.38.21", lemma: "Ῥαββεί → Διδάσκαλε",
        title: "Evangelisten som översättare",
        body: "Berättaren stannar upp för att översätta det arameiska **Rabbi** (”min store”) med grekiskans **Διδάσκαλε**, ”Lärare”. Dessa tvåspråkiga förklaringar — här, sedan ”Messias/Kristus” (v. 41) och ”Kefas/Petrus” (v. 42) — röjer en författare som förklarar en semitisk värld för grekisktalande läsare, och bekräftar tyst den tradition han för vidare.",
      },
    ],
  },

  39: {
    english: [
      ["Han", "", true], ["säger", "g1.39.1"], ["till", "g1.39.2"], ["dem:", "g1.39.2"], ["”Kom,", "g1.39.3"], ["så", "g1.39.4"], ["får", "g1.39.5"], ["ni", "g1.39.5"], ["se.”", "g1.39.5"],
      ["Så", "g1.39.7"], ["de", "g1.39.6"], ["kom", "g1.39.6"], ["och", "g1.39.8"], ["såg", "g1.39.9"], ["var", "g1.39.10"], ["han", "g1.39.11"], ["bodde,", "g1.39.11"],
      ["och", "g1.39.12"], ["de", "g1.39.15"], ["stannade", "g1.39.15"], ["hos", "g1.39.13"], ["honom", "g1.39.14"], ["den", "g1.39.16 g1.39.18"], ["dagen;", "g1.39.17"],
      ["det", "", true], ["var", "g1.39.20"], ["omkring", "g1.39.21"], ["tionde", "g1.39.22"], ["timmen.", "g1.39.19"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.39.3 g1.39.15 g1.39.22", lemma: "Ἔρχεσθε καὶ ὄψεσθε",
        title: "”Kom, så får ni se” — och stanna",
        body: "Jesus svarar på en fråga om *var han bor* med en inbjudan att *komma och se* — lärjungaskapet börjar inte med lärosatser utan med att gå och skåda. Verbet **μένω** (”stanna, förbli”) ringer genom scenen: de *stannade* hos honom den dagen. Och den märkligt exakta **tionde timmen** (omkring kl. 16) läses som ihågkommet minne — spåret av ett ögonvittne som aldrig glömde eftermiddagen då det började.",
      },
    ],
  },

  40: {
    english: [
      ["Andreas,", "g1.40.2"], ["Simon", "g1.40.5"], ["Petrus", "g1.40.6"], ["bror,", "g1.40.3 g1.40.4"], ["var", "g1.40.1"], ["en", "g1.40.7"], ["av", "g1.40.8"], ["de", "g1.40.9"], ["två", "g1.40.10"], ["som", "g1.40.11"], ["hade", "g1.40.12"], ["hört", "g1.40.12"],
      ["Johannes", "g1.40.14"], ["och", "g1.40.15"], ["följt", "g1.40.16"], ["honom.", "g1.40.17"],
    ],
    annotations: [],
  },

  41: {
    english: [
      ["Han", "g1.41.2"], ["finner", "g1.41.1"], ["först", "g1.41.3"], ["sin", "g1.41.7"], ["egen", "g1.41.6 g1.41.7"], ["bror", "g1.41.4 g1.41.5"], ["Simon", "g1.41.8"],
      ["och", "g1.41.9"], ["säger", "g1.41.10"], ["till", "g1.41.11"], ["honom:", "g1.41.11"], ["”Vi", "g1.41.12"], ["har", "g1.41.12"], ["funnit", "g1.41.12"],
      ["Messias”", "g1.41.13 g1.41.14"], ["(det", "g1.41.15"], ["betyder,", "g1.41.16"], ["översatt,", "g1.41.17"], ["Kristus).", "g1.41.18"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g1.41.14 g1.41.18", lemma: "Μεσσίας → Χριστός",
        title: "”Messias”, behållet i original",
        body: "Andreas rapporterar upptäckten med det semitiska ordet självt — **Messias** (hebr./aram. *māshîaḥ*, ”den smorde”) — som evangelisten sedan återger på grekiska som **Christós**. Johannes är den ende NT-författare som behåller det translittererade ”Messias” (här och 4:25), och bevarar den judiska väven i den första bekännelsen innan han översätter den för den vidare världen.",
      },
    ],
  },

  42: {
    english: [
      ["Han", "", true], ["förde", "g1.42.1"], ["honom", "g1.42.2"], ["till", "g1.42.3"], ["Jesus.", "g1.42.4 g1.42.5"],
      ["Jesus", "g1.42.8 g1.42.9"], ["såg", "g1.42.6"], ["på", "g1.42.6"], ["honom", "g1.42.7"], ["och", "", true], ["sade:", "g1.42.10"],
      ["”Du", "g1.42.11"], ["är", "g1.42.12"], ["Simon,", "g1.42.13"], ["Johannes", "g1.42.16"], ["son;", "g1.42.14 g1.42.15"],
      ["du", "g1.42.17"], ["ska", "g1.42.18"], ["kallas", "g1.42.18"], ["Kefas”", "g1.42.19"], ["(vilket", "g1.42.20"], ["översatt", "g1.42.21"], ["är", "g1.42.21"], ["Petrus).", "g1.42.22"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g1.42.19 g1.42.22", lemma: "Κηφᾶς → Πέτρος",
        title: "Ett nytt namn: Kefas / Petrus",
        body: "Jesus ger Simon det arameiska **Kēphā** (”klippa”), återgivet med dess grekiska tvilling **Petros**. Som Gud gav Abram och Jakob nya namn tilldelar namnbytet ett öde. Johannes placerar det vid det *första* mötet; Matteus knyter namnet till Petrus senare bekännelse (Matt 16:18). Båda behåller ordleken på *klippa* som svenskans ”Petrus” nästan döljer.",
      },
    ],
  },

  43: {
    english: [
      ["Nästa", "g1.43.1"], ["dag", "g1.43.2"], ["beslöt", "g1.43.3"], ["han", "", true], ["att", "g1.43.4"], ["gå", "g1.43.4"], ["ut", "g1.43.4"], ["till", "g1.43.5"], ["Galileen.", "g1.43.6 g1.43.7"],
      ["Och", "g1.43.8"], ["han", "", true], ["finner", "g1.43.9"], ["Filippus.", "g1.43.10"], ["Och", "g1.43.11"], ["Jesus", "g1.43.14 g1.43.15"], ["säger", "g1.43.12"], ["till", "g1.43.13"], ["honom:", "g1.43.13"], ["”Följ", "g1.43.16"], ["mig.”", "g1.43.17"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.43.16", lemma: "Ἀκολούθει μοι",
        title: "”Följ mig”",
        body: "Med Filippus utfärdar Jesus för första gången kallelsen *själv* — de andra fördes av ett vittne. **Ἀκολούθει μοι** står i presens imperativ: inte ett enda steg utan ett fortsatt ”fortsätt följa mig”. Det är den maning som ekar ända till sista kapitlet, där den talas igen till Petrus (21:19, 22).",
      },
    ],
  },

  44: {
    english: [
      ["Nu", "g1.44.2"], ["var", "g1.44.1"], ["Filippus", "g1.44.3 g1.44.4"], ["från", "g1.44.5"], ["Betsaida,", "g1.44.6"],
      ["Andreas", "g1.44.10"], ["och", "g1.44.11"], ["Petrus", "g1.44.12"], ["stad.", "g1.44.7 g1.44.8 g1.44.9"],
    ],
    annotations: [],
  },

  45: {
    english: [
      ["Filippus", "g1.45.2"], ["finner", "g1.45.1"], ["Natanael", "g1.45.3 g1.45.4"], ["och", "g1.45.5"], ["säger", "g1.45.6"], ["till", "g1.45.7"], ["honom:", "g1.45.7"],
      ["”Vi", "g1.45.17"], ["har", "g1.45.17"], ["funnit", "g1.45.17"], ["honom", "", true], ["som", "g1.45.8"], ["Mose", "g1.45.10"], ["skrev", "g1.45.9"], ["om", "", true], ["i", "g1.45.11"], ["lagen,", "g1.45.12 g1.45.13"],
      ["och", "g1.45.14"], ["profeterna", "g1.45.15 g1.45.16"], ["—", "", true], ["Jesus,", "g1.45.18"], ["Josefs", "g1.45.20 g1.45.21"], ["son,", "g1.45.19"], ["från", "g1.45.22 g1.45.23"], ["Nasaret.”", "g1.45.24"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.45.9 g1.45.18 g1.45.24", lemma: "Ἰησοῦν … τὸν ἀπὸ Ναζαρέτ",
        title: "En sann bekännelse, till hälften rätt",
        body: "Filippus har helt rätt — hela Skriften, ”Mose i lagen och profeterna”, pekar på Jesus (jfr 5:46) — och ändå till hälften fel: Jesus är egentligen inte **Josefs son**, och hans ursprung går djupare än **Nasaret**. Läsaren, som läst Prologen, hör ironin. Upptäckten går här före förståelsen; i det glappet gör resten av evangeliet sitt verk.",
      },
    ],
  },

  46: {
    english: [
      ["Och", "g1.46.1"], ["Natanael", "g1.46.4"], ["sade", "g1.46.2"], ["till", "g1.46.3"], ["honom:", "g1.46.3"], ["”Kan", "g1.46.7"], ["något", "g1.46.8"], ["gott", "g1.46.9"], ["komma", "g1.46.10"], ["från", "g1.46.5"], ["Nasaret?”", "g1.46.6"],
      ["Filippus", "g1.46.13 g1.46.14"], ["säger", "g1.46.11"], ["till", "g1.46.12"], ["honom:", "g1.46.12"], ["”Kom", "g1.46.15"], ["och", "g1.46.16"], ["se.”", "g1.46.17"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.46.6 g1.46.15", lemma: "Ἐκ Ναζαρὲτ … Ἔρχου καὶ ἴδε",
        title: "”Kan något gott komma från Nasaret?”",
        body: "Nasaret var en obetydlig by, onämnd i GT och i Talmud — därav Natanaels förakt. Filippus argumenterar inte; han upprepar bara Jesu egen inbjudan, **”Kom och se.”** I detta evangelium bemöts tvivel inte med bevis utan med möte: gå, se, och låt personen avgöra frågan.",
      },
    ],
  },

  47: {
    english: [
      ["Jesus", "g1.47.2"], ["såg", "g1.47.1"], ["Natanael", "g1.47.3 g1.47.4"], ["komma", "g1.47.5"], ["mot", "g1.47.6"], ["sig", "g1.47.7"], ["och", "g1.47.8"], ["säger", "g1.47.9"], ["om", "g1.47.10"], ["honom:", "g1.47.11"],
      ["”Se,", "g1.47.12"], ["en", "", true], ["sann", "g1.47.13"], ["israelit", "g1.47.14"], ["i", "g1.47.15"], ["vilken", "g1.47.16"], ["det", "", true], ["inte", "g1.47.18"], ["finns", "g1.47.19"], ["något", "", true], ["svek!”", "g1.47.17"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.47.14 g1.47.17", lemma: "Ἰσραηλείτης … δόλος οὐκ",
        title: "En israelit utan Jakobs svek",
        body: "Berömmet är en skriftordlek. **Israel** *var* Jakob — och Jakob var mannen med **δόλος**, ”svek” (1 Mos 27:35, ”din bror kom med list och tog din välsignelse”). Natanael är den sanne **israeliten** i vilken det *inte* finns något Jakobs-svek: Israel så som det var menat att vara. Namnleken förbereder tyst Jakobsstege-orden fyra verser senare (v. 51).",
      },
    ],
  },

  48: {
    english: [
      ["Natanael", "g1.48.3"], ["säger", "g1.48.1"], ["till", "g1.48.2"], ["honom:", "g1.48.2"], ["”Hur", "g1.48.4"], ["känner", "g1.48.6"], ["du", "g1.48.6"], ["mig?”", "g1.48.5"],
      ["Jesus", "g1.48.8"], ["svarade", "g1.48.7"], ["och", "g1.48.9"], ["sade", "g1.48.10"], ["till", "g1.48.11"], ["honom:", "g1.48.11"],
      ["”Innan", "g1.48.12 g1.48.13"], ["Filippus", "g1.48.15"], ["kallade", "g1.48.16"], ["dig,", "g1.48.14"], ["medan", "g1.48.17"], ["du", "g1.48.17"], ["var", "g1.48.17"], ["under", "g1.48.18"], ["fikonträdet,", "g1.48.19 g1.48.20"], ["såg", "g1.48.21"], ["jag", "g1.48.21"], ["dig.”", "g1.48.22"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.48.20 g1.48.21", lemma: "ὑπὸ τὴν συκῆν",
        title: "”Under fikonträdet”",
        body: "Att sitta **under sitt fikonträd** var en rabbinsk bild för ostört studium av Torah, och en profetisk bild av messiansk frid (Mik 4:4; Sak 3:10). Vad Natanael än gjorde där, *såg* Jesus honom — med en syn som inte behöver någon presentation. Den allvetande blicken, inte ett argument, upplöser hans skepsis.",
      },
    ],
  },

  49: {
    english: [
      ["Natanael", "g1.49.3"], ["svarade", "g1.49.1"], ["honom:", "g1.49.2"], ["”Rabbi,", "g1.49.4"], ["du", "g1.49.5"], ["är", "g1.49.6"], ["Guds", "g1.49.9 g1.49.10"], ["Son!", "g1.49.7 g1.49.8"],
      ["Du", "g1.49.11"], ["är", "g1.49.13"], ["Israels", "g1.49.14 g1.49.15"], ["kung!”", "g1.49.12"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.49.8 g1.49.12", lemma: "ὁ Υἱὸς τοῦ Θεοῦ · Βασιλεὺς τοῦ Ἰσραήλ",
        title: "”Guds Son” och ”Israels kung”",
        body: "Natanael parar två kungliga messiastitlar: **Guds Son** (en titel för den davidiske kungen, Ps 2:7; 2 Sam 7:14) och **Israels kung**. Det är en sann bekännelse — den äkte israeliten hyllar Israels kung — men ännu bunden av nationellt hopp. Jesu svar (vv. 50–51) lovar att han ska se något långt större än en Israels kung.",
      },
    ],
  },

  50: {
    english: [
      ["Jesus", "g1.50.2"], ["svarade", "g1.50.1"], ["och", "g1.50.3"], ["sade", "g1.50.4"], ["till", "g1.50.5"], ["honom:", "g1.50.5"],
      ["”Tror", "g1.50.15"], ["du", "g1.50.15"], ["därför", "g1.50.6"], ["att", "g1.50.9"], ["jag", "g1.50.7"], ["sade", "g1.50.7"], ["till", "g1.50.8"], ["dig", "g1.50.8"], ["att", "", true], ["jag", "g1.50.10"], ["såg", "g1.50.10"], ["dig", "g1.50.11"], ["under", "g1.50.12"], ["fikonträdet?", "g1.50.13 g1.50.14"],
      ["Du", "g1.50.18"], ["ska", "g1.50.18"], ["få", "g1.50.18"], ["se", "g1.50.18"], ["större", "g1.50.16"], ["ting", "g1.50.16"], ["än", "g1.50.17"], ["dessa.”", "g1.50.17"],
    ],
    annotations: [],
  },

  51: {
    english: [
      ["Och", "g1.51.1"], ["han", "", true], ["säger", "g1.51.2"], ["till", "g1.51.3"], ["honom:", "g1.51.3"], ["”Amen,", "g1.51.4"], ["amen", "g1.51.5"], ["säger", "g1.51.6"], ["jag", "g1.51.6"], ["er:", "g1.51.7"],
      ["ni", "g1.51.8"], ["ska", "g1.51.8"], ["få", "g1.51.8"], ["se", "g1.51.8"], ["himlen", "g1.51.9 g1.51.10"], ["öppnad", "g1.51.11"], ["och", "g1.51.12"], ["Guds", "g1.51.15 g1.51.16"], ["änglar", "g1.51.13 g1.51.14"],
      ["stiga", "g1.51.17"], ["upp", "g1.51.17"], ["och", "g1.51.18"], ["stiga", "g1.51.19"], ["ner", "g1.51.19"], ["över", "g1.51.20"], ["Människosonen.”", "g1.51.21 g1.51.22 g1.51.23 g1.51.24"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.51.4 g1.51.5", lemma: "Ἀμὴν ἀμήν",
        title: "”Amen, amen” — ett anspråk på auktoritet",
        body: "Det fördubblade **Amen, amen** (”Sannerligen, sannerligen”) är unikt för Johannes, där det förekommer 25 gånger, alltid på Jesu läppar, som inledning till ett vägande uttalande. I vanligt bruk *svarar* *āmēn* på någon annans ord (”så må ske”); Jesus använder det för att *inleda sina egna* — ett underförstått anspråk på att tala med oförmedlad auktoritet.",
      },
      {
        kind: "concept", refs: "g1.51.17 g1.51.19 g1.51.22", lemma: "ἀγγέλους … ἐπὶ τὸν Υἱὸν τοῦ ἀνθρώπου",
        title: "Jakobs stege — och Människosonen",
        body: "Bilden av **änglar som stiger upp och stiger ner** är hämtad rakt från Jakobs dröm i Betel (1 Mos 28:12), där de rör sig på stegen som förenar himmel och jord. Jesus sätter sig själv där stegen stod: **Människosonen** *är* mötespunkten mellan de två världarna. Detta är det första av Johannes många ”Människosonen”-ord (bakom det den himmelska gestalten i Dan 7:13) — och **”ni” står i plural**: löftet gäller alla som följer.",
      },
    ],
  },
};
