// Swedish glosses (by lemma) and a morphology translator, used to localize the
// word-inspector when the Swedish edition is active. The Greek tokens carry
// English gloss/morph (shared spine); this maps them to Swedish at render time.

const GLOSS: Record<string, string> = {
  'ὁ': 'den, det', 'καί': 'och', 'αὐτός': 'han, den, samme', 'εἰμί': 'vara', 'λέγω': 'säga',
  'ἐγώ': 'jag', 'σύ': 'du', 'οὐ': 'inte', 'ὅς': 'som, vilken', 'ὁράω': 'se',
  'ἐν': 'i', 'θεός': 'Gud', 'Ἰησοῦς': 'Jesus', 'ἔρχομαι': 'komma, gå', 'ἐκ': 'ut ur, från',
  'οὗτος': 'denne, detta', 'γίνομαι': 'bli, bli till', 'ὅτι': 'att, eftersom', 'Ἰωάννης': 'Johannes',
  'ἵνα': 'så att, för att', 'φῶς': 'ljus', 'τίς': 'vem? vad?', 'πρός': 'till, mot, hos',
  'εἰς': 'in i, till', 'διά': 'genom, på grund av', 'βαπτίζω': 'döpa',
  'ἀποκρίνομαι': 'svara', 'υἱός': 'son', 'περί': 'om, angående', 'οὐδέ': 'och inte, inte heller',
  'μένω': 'förbli, stanna', 'μαρτυρέω': 'vittna', 'κόσμος': 'värld', 'εὑρίσκω': 'finna',
  'Φίλιππος': 'Filippus', 'Ναθαναήλ': 'Natanael', 'ἐπί': 'på, över', 'ἐκεῖνος': 'den där, han',
  'ἄνθρωπος': 'människa', 'ἀλλά': 'men, utan', 'ἀκολουθέω': 'följa', 'χάρις': 'nåd',
  'πᾶς': 'all, varje', 'προφήτης': 'profet', 'παρά': 'från, hos', 'οὖν': 'därför, alltså',
  'λόγος': 'ord', 'δέ': 'men, och', 'Χριστός': 'Kristus, den smorde', 'ὡς': 'som, liksom',
  'ὕδωρ': 'vatten', 'ὀπίσω': 'efter, bakom', 'ἴδιος': 'egen', 'ἐρωτάω': 'fråga',
  'ἐπαύριον': 'nästa dag', 'ἀποστέλλω': 'sända (ut)', 'πρῶτος': 'först, främst', 'πνεῦμα': 'ande, vind',
  'πιστεύω': 'tro, förtrösta', 'οἶδα': 'veta, känna', 'κἀγώ': 'och jag, jag också', 'καταβαίνω': 'stiga ner',
  'θεάομαι': 'skåda, betrakta', 'δύο': 'två', 'δίδωμι': 'ge', 'Σίμων': 'Simon',
  'Πέτρος': 'Petrus', 'ῥαββί': 'rabbi', 'ὄνομα': 'namn', 'ὁμολογέω': 'bekänna, erkänna',
  'Ἰσραήλ': 'Israel', 'Ἠλίας': 'Elia', 'ἔμπροσθεν': 'framför, före', 'ἐμβλέπω': 'se på, blicka på',
  'Ἀνδρέας': 'Andreas', 'ἀρχή': 'begynnelse', 'ἀπό': 'från', 'ἀνήρ': 'man, make',
  'ἀμήν': 'amen, sannerligen', 'ἀμνός': 'lamm', 'ἀλήθεια': 'sanning', 'ἀκούω': 'höra',
  'ἀδελφός': 'bror', 'σάρξ': 'kött', 'συκῆ': 'fikonträd', 'σκοτία': 'mörker',
  'πέμπω': 'sända', 'πατήρ': 'fader', 'οὐρανός': 'himmel', 'νόμος': 'lag',
  'μονογενής': 'enda, enfödd', 'μεθερμηνεύω': 'översätta', 'μαρτυρία': 'vittnesbörd',
  'μαθητής': 'lärjunge', 'λαμβάνω': 'ta, ta emot', 'θέλημα': 'vilja', 'ζωή': 'liv',
  'εἷς': 'en', 'δόξα': 'härlighet', 'γινώσκω': 'känna, veta', 'Ναζαρά': 'Nasaret', 'Μωϋσῆς': 'Mose',
  'ὥρα': 'timme', 'ὑπόδημα': 'sandal', 'ὑπό': 'under, av', 'ὑπέρ': 'över, för',
  'ὑποκάτω': 'under, nedanför', 'ὅτε': 'när', 'ὅσος': 'så många som', 'ὅπου': 'där, var',
  'ὁδός': 'väg', 'Ἱεροσόλυμα': 'Jerusalem', 'Ἰωσήφ': 'Josef', 'Ἰσραηλίτης': 'israelit',
  'Ἰουδαῖος': 'judé, jude', 'Ἰορδάνης': 'Jordan', 'ἵστημι': 'stå', 'ἱμάς': 'rem',
  'ἱερεύς': 'präst', 'Ἠσαΐας': 'Jesaja', 'ἡμέρα': 'dag', 'ἔρημος': 'öken',
  'ἑρμηνεύω': 'översätta, tolka', 'ἐξέρχομαι': 'gå ut', 'ἐξουσία': 'myndighet, rätt',
  'ἐξηγέομαι': 'förklara, göra känd', 'ἅγιος': 'helig', 'ἄξιος': 'värdig', 'ἄν': '(oöversättlig partikel)',
  'ἄγω': 'leda, föra', 'ἄγγελος': 'ängel, budbärare', 'ἁμαρτία': 'synd', 'ἀρνέομαι': 'förneka',
  'ἀπόκρισις': 'svar', 'ἀντί': 'i stället för, för', 'ἀνοίγω': 'öppna', 'ἀναβαίνω': 'stiga upp',
  'ἀληθῶς': 'sannerligen, verkligen', 'ἀληθινός': 'sann, äkta', 'ἀγαθός': 'god', 'χωρίς': 'utan, skild från',
  'φωτίζω': 'ge ljus åt', 'φωνή': 'röst, ljud', 'φωνέω': 'kalla, ropa', 'φημί': 'säga',
  'φαίνω': 'lysa, visa sig', 'φανερόω': 'uppenbara', 'τὶς': 'någon, en viss', 'τέκνον': 'barn',
  'στήκω': 'stå', 'στρέφω': 'vända', 'σκηνόω': 'slå upp tält, bo', 'σεαυτοῦ': 'dig själv',
  'πώποτε': 'någonsin', 'πόλις': 'stad', 'πόθεν': 'varifrån', 'πέραν': 'på andra sidan',
  'πάλιν': 'åter, igen', 'πρό': 'före', 'ποῦ': 'var?', 'πού': 'någonstans', 'πλήρωμα': 'fullhet',
  'πλήρης': 'full', 'περιστερά': 'duva', 'περιπατέω': 'gå, vandra', 'παραλαμβάνω': 'ta emot, ta',
  'οὐδείς': 'ingen', 'μέσος': 'mitt, mitt ibland', 'μέγας': 'stor', 'λύω': 'lösa, knyta upp',
  'λαλέω': 'tala', 'κύριος': 'herre', 'κόλπος': 'sköte, bröst', 'κράζω': 'ropa',
  'καταλαμβάνω': 'gripa, fatta, hinna upp', 'καλέω': 'kalla', 'καθώς': 'såsom, liksom', 'θέλω': 'vilja, önska',
  'ζητέω': 'söka', 'εὐθύνω': 'göra rak', 'εἰ': 'om', 'δύναμαι': 'kunna',
  'δόλος': 'svek, list', 'δέκατος': 'tionde', 'διδάσκαλος': 'lärare', 'γράφω': 'skriva',
  'γεννάω': 'föda, avla', 'βοάω': 'ropa', 'βλέπω': 'se, titta', 'βασιλεύς': 'kung',
  'αἷμα': 'blod', 'αἴρω': 'ta bort, lyfta upp', 'Φαρισαῖος': 'farisé', 'Μεσσίας': 'Messias',
  'Λευίτης': 'levit', 'Κηφᾶς': 'Kefas', 'Γαλιλαία': 'Galileen', 'Βηθσαϊδά': 'Betsaida',
  'Βηθανία': 'Betania',
  // John 2 vocabulary
  'Κανά': 'Kana', 'Καφαρναούμ': 'Kapernaum', 'βοῦς': 'oxe, nötkreatur', 'γάμος': 'bröllop',
  'γάρ': 'ty, för', 'γεμίζω': 'fylla', 'γεύομαι': 'smaka', 'γραφή': 'Skrift', 'γυνή': 'kvinna',
  'δείκνυμι': 'visa', 'διάκονος': 'tjänare', 'ζῆλος': 'iver, nitälskan', 'θεωρέω': 'betrakta, se',
  'κάθημαι': 'sitta', 'κέρμα': 'mynt', 'καθαρισμός': 'rening', 'καλός': 'god, fin',
  'κατά': 'enligt, mot', 'κατεσθίω': 'förtära', 'κερματιστής': 'växlare', 'κεῖμαι': 'ligga, stå',
  'κολλυβιστής': 'växlare', 'λίθινος': 'av sten', 'μή': 'inte, icke', 'μήτηρ': 'moder',
  'μεθύω': 'vara berusad', 'μετά': 'med, efter', 'μετρητής': 'mått (metret)', 'μιμνῄσκω': 'minnas',
  'ναός': 'tempel, helgedom', 'νεκρός': 'död', 'νυμφίος': 'brudgum', 'νῦν': 'nu',
  'οἰκοδομέω': 'bygga', 'οἶκος': 'hus', 'οἶνος': 'vin', 'οὔπω': 'ännu inte', 'πάσχα': 'påsk',
  'ποιέω': 'göra', 'πολύς': 'mycken, många', 'πρόβατον': 'får', 'πωλέω': 'sälja', 'σημεῖον': 'tecken',
  'σχοινίον': 'rep, snöre', 'σῶμα': 'kropp', 'τέ': 'och', 'τίθημι': 'lägga, sätta',
  'τεσσεράκοντα': 'fyrtio', 'τηρέω': 'hålla, bevara', 'τράπεζα': 'bord', 'τρίτος': 'tredje',
  'τρεῖς': 'tre', 'φέρω': 'bära, föra', 'φραγέλλιον': 'gissel, piska', 'χρεία': 'behov',
  'χωρέω': 'rymma', 'ἀνά': 'vardera', 'ἀνατρέπω': 'välta', 'ἀντλέω': 'ösa (vatten)',
  'ἀρχιτρίκλινος': 'hovmästare', 'ἄνω': 'upp, upptill', 'ἄρτι': 'nu, just nu', 'ἐγγύς': 'nära',
  'ἐγείρω': 'resa upp, uppväcka', 'ἐκβάλλω': 'driva ut', 'ἐκεῖ': 'där', 'ἐκχέω': 'hälla ut',
  'ἐλάσσων': 'sämre, mindre', 'ἐμπόριον': 'handelsplats', 'ἐντεῦθεν': 'härifrån', 'ἑαυτοῦ': 'sig själv',
  'ἑορτή': 'högtid', 'ἔτος': 'år', 'ἔχω': 'ha', 'ἕξ': 'sex', 'ἕως': 'till, ända till',
  'ἤ': 'eller', 'ἥκω': 'ha kommit', 'ἱερός': 'helig; templet', 'ὅταν': 'när, närhelst',
  'ὑδρία': 'vattenkruka', 'ὑστερέω': 'fattas, tryta',
};

// Normalize keys to NFC so lookups match the (NFC-normalized) token lemmas.
const GLOSS_N: Record<string, string> = {};
for (const k of Object.keys(GLOSS)) GLOSS_N[k.normalize('NFC')] = GLOSS[k];

export function svGloss(lemma: string | undefined): string | undefined {
  if (!lemma) return undefined;
  return GLOSS_N[lemma.normalize('NFC')];
}

// Translate an English morphology string (as produced by the generator) into
// Swedish grammatical abbreviations. Ordered so compound terms resolve first.
const MORPH_MAP: [string, string][] = [
  ['proper noun (indeclinable)', 'egennamn (oböjl.)'],
  ['noun (indeclinable)', 'subst. (oböjl.)'],
  ['numeral (indeclinable)', 'räkneord (oböjl.)'],
  ['conj. (conditional)', 'konj. (villkor)'],
  ['mid./pass. dep.', 'med./pass. dep.'],
  ['mid./pass.', 'med./pass.'],
  ['mid. dep.', 'med. dep.'],
  ['1st person', '1:a pers.'],
  ['2nd person', '2:a pers.'],
  ['3rd person', '3:e pers.'],
  ['2nd ', '2:a '],
  ['interrog. pron.', 'frågepron.'],
  ['indef. pron.', 'obest. pron.'],
  ['correlative pron.', 'korrelativpron.'],
  ['noun', 'subst.'],
  ['article', 'artikel'],
  ['particle', 'partikel'],
  ['interjection', 'interjektion'],
  ['Hebrew term', 'hebreiskt ord'],
  ['Aramaic term', 'arameiskt ord'],
  ['numeral', 'räkneord'],
  ['ptcp.', 'part.'],
  ['impv.', 'imp.'],
  ['subj.', 'konj.'],
  ['conj.', 'konj.'],
  ['acc.', 'ack.'],
  ['voc.', 'vok.'],
  ['masc.', 'mask.'],
  ['act.', 'akt.'],
  ['mid.', 'med.'],
  ['plupf.', 'plusk.'],
];

export function svMorph(morph: string | undefined): string | undefined {
  if (!morph) return undefined;
  let out = morph;
  for (const [en, sv] of MORPH_MAP) out = out.split(en).join(sv);
  return out;
}
