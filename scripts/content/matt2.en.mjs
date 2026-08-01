// Matthew 2 — English translation & annotations.
// english entry: [text, alignIds, supplied?]

export const CONTENT = {
  1: {
    english: [
      ["Now", "g2.1.2"], ["when", "", true], ["Jesus", "g2.1.3"], ["had", "", true], ["been", "", true], ["born", "g2.1.4"],
      ["in", "g2.1.5"], ["Bethlehem", "g2.1.6"], ["of", "g2.1.7", true], ["Judea,", "g2.1.8"],
      ["in", "g2.1.9"], ["the", "", true], ["days", "g2.1.10"], ["of", "g2.1.12", true], ["Herod", "g2.1.11"], ["the", "g2.1.12"], ["king,", "g2.1.13"],
      ["behold,", "g2.1.14"], ["magi", "g2.1.15"], ["from", "g2.1.16"], ["the", "", true], ["east", "g2.1.17"],
      ["arrived", "g2.1.18"], ["in", "g2.1.19"], ["Jerusalem,", "g2.1.20"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g2.1.15 g2.1.17", lemma: "μάγοι ἀπὸ ἀνατολῶν",
        title: "Magi — pagan astrologers, of all people",
        body: "**Μάγοι** were not kings, and Matthew does not count them; they were a professional class of Persian-Babylonian scholars of the stars — dream-interpreters, omen-readers, astrologers. Israel's scriptures took a dim view of the whole trade (Deut 18:10-14; Isa 47:13-14 mocks Babylon's “dividers of the heavens” who cannot even save themselves). That is the sting of the story: the first worshippers of the Messiah are *exactly the wrong people*, arriving by *exactly the wrong method* — while in v. 4-6 the credentialed experts, who can cite the correct prophecy from memory, do not trouble to walk the ten kilometres to Bethlehem. Matthew, writing (most scholars think) for a Jewish-Christian community, opens his Gospel by giving outsiders the head start. Knowledge of the texts, he implies, is not the same thing as setting out.",
      },
    ],
  },
  2: {
    english: [
      ["saying,", "g2.2.1"], ["“Where", "g2.2.2"], ["is", "g2.2.3"],
      ["the", "g2.2.4"], ["newborn", "g2.2.5"], ["king", "g2.2.6"], ["of", "g2.2.7", true], ["the", "g2.2.7"], ["Jews?", "g2.2.8"],
      ["For", "g2.2.10"], ["we", "g2.2.9", true], ["saw", "g2.2.9"], ["his", "g2.2.11"], ["star", "g2.2.12 g2.2.13"],
      ["at", "g2.2.14"], ["its", "g2.2.15", true], ["rising", "g2.2.16"],
      ["and", "g2.2.17"], ["have", "", true], ["come", "g2.2.18"], ["to", "g2.2.19", true], ["worship", "g2.2.19"], ["him.”", "g2.2.20"],
    ],
    annotations: [
      {
        kind: "translation", refs: "g2.2.16", lemma: "ἐν τῇ ἀνατολῇ",
        title: "“At its rising” — not “in the East”",
        body: "The same noun, **ἀνατολή**, appears twice with two senses. In v. 1 the plural (*ἀπὸ ἀνατολῶν*) means the compass direction — the magi came *from the east*. Here the singular with the article is the astronomer's technical term: a star's **heliacal rising**, its first visible appearance above the dawn horizon — the event that, in their craft, marked a birth or an accession. The old rendering “we have seen his star in the East” muddles the geography (had the star been east of them, it would have led them *away* from Judea). What they claim is: *we observed the rising that announces him.* Whatever one makes of the star itself — conjunction, nova, or literary sign — Matthew reports it in the vocabulary of people who watched the sky for a living.",
      },
    ],
  },
  3: {
    english: [
      ["When", "g2.3.1", true], ["King", "g2.3.4"], ["Herod", "g2.3.5"], ["heard", "g2.3.1"], ["this", "", true],
      ["he", "", true], ["was", "g2.3.6", true], ["shaken,", "g2.3.6"],
      ["and", "g2.3.7"], ["all", "g2.3.8"], ["Jerusalem", "g2.3.9"], ["with", "g2.3.10"], ["him,", "g2.3.11"],
    ],
    annotations: [],
  },
  4: {
    english: [
      ["and", "g2.4.1"], ["gathering", "g2.4.2"], ["all", "g2.4.3"], ["the", "g2.4.4"], ["chief", "g2.4.5", true], ["priests", "g2.4.5"],
      ["and", "g2.4.6"], ["scribes", "g2.4.7"], ["of", "g2.4.8", true], ["the", "g2.4.8"], ["people,", "g2.4.9"],
      ["he", "", true], ["asked", "g2.4.10"], ["of", "g2.4.11"], ["them", "g2.4.12"],
      ["where", "g2.4.13"], ["the", "g2.4.14"], ["Christ", "g2.4.15"], ["was", "g2.4.16", true], ["to", "", true], ["be", "", true], ["born.", "g2.4.16"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["And", "g2.5.2"], ["they", "g2.5.1"], ["told", "g2.5.3"], ["him,", "g2.5.4"],
      ["“In", "g2.5.5"], ["Bethlehem", "g2.5.6"], ["of", "g2.5.7", true], ["Judea;", "g2.5.8"],
      ["for", "g2.5.10"], ["so", "g2.5.9"], ["it", "", true], ["is", "", true], ["written", "g2.5.11"],
      ["through", "g2.5.12"], ["the", "g2.5.13"], ["prophet:", "g2.5.14"],
    ],
    annotations: [],
  },
  6: {
    english: [
      ["‘And", "g2.6.1"], ["you,", "g2.6.2"], ["Bethlehem,", "g2.6.3"], ["land", "g2.6.4"], ["of", "g2.6.5", true], ["Judah,", "g2.6.5"],
      ["are", "g2.6.8"], ["by", "g2.6.6", true], ["no", "g2.6.6"], ["means", "g2.6.6"], ["least", "g2.6.7"],
      ["among", "g2.6.9"], ["the", "g2.6.10"], ["rulers", "g2.6.11"], ["of", "g2.6.12", true], ["Judah;", "g2.6.12"],
      ["for", "g2.6.15"], ["out", "g2.6.13"], ["of", "g2.6.13", true], ["you", "g2.6.14"], ["shall", "", true], ["come", "g2.6.16"],
      ["a", "", true], ["ruler", "g2.6.17"],
      ["who", "g2.6.18"], ["will", "", true], ["shepherd", "g2.6.19"], ["my", "g2.6.22"], ["people", "g2.6.20 g2.6.21"], ["Israel.’", "g2.6.23 g2.6.24"],
    ],
    annotations: [
      {
        kind: "text", refs: "g2.6.6 g2.6.7", lemma: "οὐδαμῶς ἐλαχίστη",
        title: "A quotation that argues back",
        body: "Set Matthew's citation beside Micah 5:2 and the differences leap out. Micah says Bethlehem is “**little** among the clans of Judah”; Matthew's version says “**by no means least** among the rulers of Judah” — the near-opposite, now that the prophecy has come true. “Clans” (Hebrew *ʾalpê*) has become “rulers,” and the final line — “who will shepherd my people Israel” — is not Micah at all but 2 Samuel 5:2, God's words about *David*, spliced in. No manuscript accident: this is how first-century exegesis worked, quotation as *interpretation*, texts braided to say what the interpreter holds them to mean together. It is worth knowing that the New Testament quotes its Bible this way — freely, argumentatively, from memory and by design — because it recalibrates what “fulfilment of scripture” claims to be: not verbatim prediction ticked off, but a pattern recognized and proclaimed.",
      },
    ],
  },
  7: {
    english: [
      ["Then", "g2.7.1"], ["Herod", "g2.7.2"], ["called", "g2.7.4"], ["the", "g2.7.5"], ["magi", "g2.7.6"], ["secretly", "g2.7.3"],
      ["and", "", true], ["learned", "g2.7.7"], ["from", "g2.7.8"], ["them", "g2.7.9"], ["exactly", "g2.7.7", true],
      ["the", "g2.7.10"], ["time", "g2.7.11"], ["of", "g2.7.12", true], ["the", "g2.7.12"], ["star's", "g2.7.14"], ["appearing,", "g2.7.13"],
    ],
    annotations: [],
  },
  8: {
    english: [
      ["and", "g2.8.1"], ["sending", "g2.8.2"], ["them", "g2.8.3"], ["to", "g2.8.4"], ["Bethlehem", "g2.8.5"], ["he", "", true], ["said,", "g2.8.6"],
      ["“Go", "g2.8.7"], ["and", "", true], ["search", "g2.8.8"], ["carefully", "g2.8.9"], ["for", "g2.8.10"], ["the", "g2.8.11"], ["child;", "g2.8.12"],
      ["and", "g2.8.14"], ["when", "g2.8.13"], ["you", "g2.8.15", true], ["find", "g2.8.15"], ["him,", "", true],
      ["report", "g2.8.16"], ["to", "g2.8.17", true], ["me,", "g2.8.17"],
      ["so", "g2.8.18"], ["that", "g2.8.18", true], ["I", "g2.8.19"], ["too", "g2.8.19", true], ["may", "", true], ["come", "g2.8.20"], ["and", "", true], ["worship", "g2.8.21"], ["him.”", "g2.8.22"],
    ],
    annotations: [],
  },
  9: {
    english: [
      ["And", "g2.9.2"], ["they,", "g2.9.1"], ["having", "g2.9.3", true], ["heard", "g2.9.3"], ["the", "g2.9.4"], ["king,", "g2.9.5"], ["went", "g2.9.6"], ["their", "", true], ["way;", "", true],
      ["and", "g2.9.7"], ["behold,", "g2.9.8"], ["the", "g2.9.9"], ["star", "g2.9.10"], ["they", "g2.9.11"], ["had", "", true], ["seen", "g2.9.12"], ["at", "g2.9.13"], ["its", "g2.9.14", true], ["rising", "g2.9.15"],
      ["went", "g2.9.16"], ["before", "g2.9.16", true], ["them,", "g2.9.17"],
      ["until", "g2.9.18"], ["it", "", true], ["came", "g2.9.19"], ["and", "", true], ["stood", "g2.9.20"], ["over", "g2.9.21"],
      ["the", "g2.9.24", true], ["place", "g2.9.22", true], ["where", "g2.9.22"], ["the", "g2.9.24"], ["child", "g2.9.25"], ["was.", "g2.9.23"],
    ],
    annotations: [],
  },
  10: {
    english: [
      ["And", "g2.10.2"], ["seeing", "g2.10.1"], ["the", "g2.10.3"], ["star", "g2.10.4"],
      ["they", "", true], ["rejoiced", "g2.10.5"], ["with", "", true], ["exceedingly", "g2.10.8"], ["great", "g2.10.7"], ["joy.", "g2.10.6"],
    ],
    annotations: [],
  },
  11: {
    english: [
      ["And", "g2.11.1"], ["coming", "g2.11.2"], ["into", "g2.11.3"], ["the", "g2.11.4"], ["house", "g2.11.5"],
      ["they", "", true], ["saw", "g2.11.6"], ["the", "g2.11.7"], ["child", "g2.11.8"],
      ["with", "g2.11.9"], ["Mary", "g2.11.10"], ["his", "g2.11.13"], ["mother,", "g2.11.11 g2.11.12"],
      ["and", "g2.11.14"], ["falling", "g2.11.15"], ["down", "g2.11.15", true], ["they", "", true], ["worshipped", "g2.11.16"], ["him;", "g2.11.17"],
      ["and", "g2.11.18"], ["opening", "g2.11.19"], ["their", "g2.11.22"], ["treasures", "g2.11.20 g2.11.21"],
      ["they", "", true], ["offered", "g2.11.23"], ["him", "g2.11.24"], ["gifts:", "g2.11.25"],
      ["gold", "g2.11.26"], ["and", "g2.11.27"], ["frankincense", "g2.11.28"], ["and", "g2.11.29"], ["myrrh.", "g2.11.30"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g2.11.26 g2.11.28 g2.11.30", lemma: "χρυσὸν καὶ λίβανον καὶ σμύρναν",
        title: "The gifts — and the house",
        body: "Three details resist the Christmas-card version. The magi enter a **house**, not a stable; on Matthew's timeline (cf. v. 16, “two years old and under, according to the time he had learned”) the visit may fall long after the birth — Luke's manger and Matthew's magi are separate scenes that tradition has quietly merged. The gifts were the diplomatic currency of the East — **gold** for a king, **frankincense** the temple's incense, **myrrh** an embalming resin — and readers from Irenaeus onward have heard the triple omen: royalty, divinity, death. Perhaps that is more pattern than the magi intended; it is not more than Matthew intended, who will mention myrrh-mixed wine again only at the cross. Isaiah 60:6, where nations stream to Israel's light “bringing gold and frankincense,” supplies the missing third gift by its absence: no myrrh in the vision of glory — that one belongs to this story alone.",
      },
    ],
  },
  12: {
    english: [
      ["And", "g2.12.1"], ["being", "g2.12.2", true], ["warned", "g2.12.2"], ["in", "g2.12.3"], ["a", "", true], ["dream", "g2.12.4"],
      ["not", "g2.12.5"], ["to", "g2.12.6", true], ["return", "g2.12.6"], ["to", "g2.12.7"], ["Herod,", "g2.12.8"],
      ["they", "", true], ["withdrew", "g2.12.12"], ["to", "g2.12.13"], ["their", "g2.12.16"], ["own", "", true], ["country", "g2.12.14 g2.12.15"],
      ["by", "g2.12.9"], ["another", "g2.12.10"], ["road.", "g2.12.11"],
    ],
    annotations: [],
  },
  13: {
    english: [
      ["Now", "g2.13.2"], ["when", "g2.13.1", true], ["they", "g2.13.3"], ["had", "", true], ["withdrawn,", "g2.13.1"],
      ["behold,", "g2.13.4"], ["an", "", true], ["angel", "g2.13.5"], ["of", "", true], ["the", "", true], ["Lord", "g2.13.6"],
      ["appeared", "g2.13.7"], ["in", "g2.13.8"], ["a", "", true], ["dream", "g2.13.9"], ["to", "g2.13.10"], ["Joseph,", "g2.13.11"],
      ["saying,", "g2.13.12"], ["“Rise,", "g2.13.13"], ["take", "g2.13.14"], ["the", "g2.13.15"], ["child", "g2.13.16"],
      ["and", "g2.13.17"], ["his", "g2.13.20"], ["mother", "g2.13.18 g2.13.19"],
      ["and", "g2.13.21"], ["flee", "g2.13.22"], ["to", "g2.13.23"], ["Egypt,", "g2.13.24"],
      ["and", "g2.13.25"], ["stay", "g2.13.26"], ["there", "g2.13.27"], ["until", "g2.13.28 g2.13.29"], ["I", "g2.13.30", true], ["tell", "g2.13.30"], ["you;", "g2.13.31"],
      ["for", "g2.13.33"], ["Herod", "g2.13.34"], ["is", "g2.13.32"], ["about", "g2.13.32"], ["to", "", true], ["seek", "g2.13.35"], ["the", "g2.13.36"], ["child", "g2.13.37"],
      ["to", "g2.13.38"], ["destroy", "g2.13.39"], ["him.”", "g2.13.40"],
    ],
    annotations: [],
  },
  14: {
    english: [
      ["And", "g2.14.2"], ["he", "g2.14.1"], ["rose", "g2.14.3"], ["and", "", true], ["took", "g2.14.4"], ["the", "g2.14.5"], ["child", "g2.14.6"],
      ["and", "g2.14.7"], ["his", "g2.14.10"], ["mother", "g2.14.8 g2.14.9"], ["by", "g2.14.11", true], ["night", "g2.14.11"],
      ["and", "g2.14.12"], ["withdrew", "g2.14.13"], ["to", "g2.14.14"], ["Egypt,", "g2.14.15"],
    ],
    annotations: [],
  },
  15: {
    english: [
      ["and", "g2.15.1"], ["was", "g2.15.2"], ["there", "g2.15.3"], ["until", "g2.15.4"], ["the", "g2.15.5"], ["death", "g2.15.6"], ["of", "g2.15.7", true], ["Herod", "g2.15.7"],
      ["—", "", true], ["so", "g2.15.8", true], ["that", "g2.15.8"], ["what", "g2.15.10"], ["was", "", true], ["spoken", "g2.15.11"],
      ["by", "g2.15.12"], ["the", "", true], ["Lord", "g2.15.13"], ["through", "g2.15.14"], ["the", "g2.15.15"], ["prophet", "g2.15.16"],
      ["might", "", true], ["be", "", true], ["fulfilled:", "g2.15.9 g2.15.17"],
      ["“Out", "g2.15.18"], ["of", "g2.15.18", true], ["Egypt", "g2.15.19"], ["I", "g2.15.20", true], ["called", "g2.15.20"], ["my", "g2.15.23"], ["son.”", "g2.15.21 g2.15.22"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g2.15.18 g2.15.19 g2.15.20", lemma: "ἐξ Αἰγύπτου ἐκάλεσα",
        title: "“Out of Egypt” — what fulfilment is not",
        body: "Look up Hosea 11:1 and you will find no prediction at all: *“When Israel was a child, I loved him, and out of Egypt I called **my son**”* — God remembering the exodus, and in the very next verse the son runs off to the Baals. Matthew knows this; his readers knew it. He is not claiming Hosea foresaw a toddler's flight to Egypt. He is doing **typology**: reading Jesus as Israel-in-one-person — called out of Egypt like Israel, tested in the wilderness forty days like Israel's forty years (ch. 4), ascending a mountain to deliver torah (ch. 5) — except that where the first son failed, this one will not. Judged as *prediction*, the citation fails, and the skeptic who says so has read Hosea correctly. Judged as what it is — a claim that history rhymes, and that its refrains converge on this child — it is the boldest sentence in the chapter. The honest question it leaves is not “did Hosea predict this?” (he did not) but “is the rhyme real?”",
      },
    ],
  },
  16: {
    english: [
      ["Then", "g2.16.1"], ["Herod,", "g2.16.2"], ["seeing", "g2.16.3"], ["that", "g2.16.4"], ["he", "", true], ["had", "", true], ["been", "", true], ["outwitted", "g2.16.5"],
      ["by", "g2.16.6"], ["the", "g2.16.7"], ["magi,", "g2.16.8"], ["raged", "g2.16.9"], ["exceedingly,", "g2.16.10"],
      ["and", "g2.16.11"], ["sending", "g2.16.12"], ["he", "", true], ["killed", "g2.16.13"], ["all", "g2.16.14"], ["the", "g2.16.15"], ["boys", "g2.16.16"],
      ["in", "g2.16.18"], ["Bethlehem", "g2.16.19"], ["and", "g2.16.20"], ["in", "g2.16.21"], ["all", "g2.16.22"], ["its", "g2.16.25"], ["surrounding", "g2.16.24", true], ["district,", "g2.16.24"],
      ["from", "g2.16.26"], ["two", "g2.16.27"], ["years", "g2.16.27", true], ["old", "g2.16.27", true], ["and", "g2.16.28"], ["under,", "g2.16.29"],
      ["according", "g2.16.30"], ["to", "g2.16.30", true], ["the", "g2.16.31"], ["time", "g2.16.32"], ["that", "g2.16.33"], ["he", "", true], ["had", "", true], ["learned", "g2.16.34"], ["from", "g2.16.35"], ["the", "g2.16.36"], ["magi.", "g2.16.37"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g2.16.13 g2.16.16", lemma: "ἀνεῖλεν πάντας τοὺς παῖδας",
        title: "The massacre — history's silence, and Herod's record",
        body: "No source outside Matthew mentions the killing of Bethlehem's boys — not Josephus, who catalogues Herod's crimes with relish. That silence is worth stating plainly, and worth weighing fairly. Bethlehem was a hamlet; the victims of a “two years and under” order there may have numbered a dozen or two — a small entry in the ledger of a king who murdered his own wife Mariamne, three of his sons, a mother-in-law, and ordered (says Josephus) that at his death the notables of Jericho be slaughtered so that *someone* would weep. Augustus reportedly quipped it was safer to be Herod's pig than his son. An unrecorded village atrocity in that reign is neither established by the sources nor strained by them. What the story is *in Matthew* is exodus again: a paranoid king, male infants killed, one child delivered — Moses retold. As so often in this Gospel, the question “did it happen?” and the question “what is it saying?” both deserve answers, and the second does not wait on the first.",
      },
    ],
  },
  17: {
    english: [
      ["Then", "g2.17.1"], ["was", "g2.17.2", true], ["fulfilled", "g2.17.2"], ["what", "g2.17.4"], ["was", "", true], ["spoken", "g2.17.4"],
      ["through", "g2.17.5"], ["Jeremiah", "g2.17.6"], ["the", "g2.17.7"], ["prophet:", "g2.17.8"],
    ],
    annotations: [],
  },
  18: {
    english: [
      ["“A", "", true], ["voice", "g2.18.1"], ["was", "g2.18.4", true], ["heard", "g2.18.4"], ["in", "g2.18.2"], ["Ramah,", "g2.18.3"],
      ["weeping", "g2.18.5"], ["and", "g2.18.6"], ["great", "g2.18.8"], ["lamentation:", "g2.18.7"],
      ["Rachel", "g2.18.9"], ["weeping", "g2.18.10"], ["for", "", true], ["her", "g2.18.13"], ["children,", "g2.18.11 g2.18.12"],
      ["and", "g2.18.14"], ["she", "", true], ["would", "g2.18.16"], ["not", "g2.18.15"], ["be", "g2.18.17", true], ["comforted,", "g2.18.17"],
      ["because", "g2.18.18"], ["they", "", true], ["are", "g2.18.20"], ["no", "g2.18.19"], ["more.”", "", true],
    ],
    annotations: [
      {
        kind: "concept", refs: "g2.18.9 g2.18.10", lemma: "Ῥαχὴλ κλαίουσα",
        title: "Rachel's voice — a grief left uncomforted",
        body: "Jeremiah 31:15 pictures **Rachel**, matriarch of Israel, weeping from her tomb as her descendants are marched past to Babylon. In Jeremiah, the very next verse turns: *“Keep your voice from weeping… they shall come back from the land of the enemy.”* Matthew quotes the tears and **stops before the consolation** — the only fulfilment-citation in these chapters that ends unresolved. This Gospel does not pretend the child's escape undoes the deaths he escaped; the mothers of Bethlehem are given scripture's own unconsoled voice, and no angel appears to them. It is an early mark of a pattern worth trusting: the evangelists do not look away from the wreckage their story passes through. Any reader who has stood where comfort felt like an insult has a verse here that stands with them — and a quotation whose withheld next line waits, like the Gospel itself, on resurrection.",
      },
    ],
  },
  19: {
    english: [
      ["But", "g2.19.2"], ["when", "g2.19.1", true], ["Herod", "g2.19.4"], ["had", "", true], ["died,", "g2.19.1"],
      ["behold,", "g2.19.5"], ["an", "", true], ["angel", "g2.19.6"], ["of", "", true], ["the", "", true], ["Lord", "g2.19.7"],
      ["appeared", "g2.19.8"], ["in", "g2.19.9"], ["a", "", true], ["dream", "g2.19.10"], ["to", "g2.19.11"], ["Joseph", "g2.19.12"], ["in", "g2.19.13"], ["Egypt,", "g2.19.14"],
    ],
    annotations: [],
  },
  20: {
    english: [
      ["saying,", "g2.20.1"], ["“Rise,", "g2.20.2"], ["take", "g2.20.3"], ["the", "g2.20.4"], ["child", "g2.20.5"],
      ["and", "g2.20.6"], ["his", "g2.20.9"], ["mother", "g2.20.7 g2.20.8"],
      ["and", "g2.20.10"], ["go", "g2.20.11"], ["to", "g2.20.12"], ["the", "", true], ["land", "g2.20.13"], ["of", "g2.20.14", true], ["Israel;", "g2.20.14"],
      ["for", "g2.20.16"], ["those", "g2.20.17"], ["who", "", true], ["sought", "g2.20.18"], ["the", "g2.20.19"], ["child's", "g2.20.21 g2.20.22"], ["life", "g2.20.20"], ["are", "", true], ["dead.”", "g2.20.15"],
    ],
    annotations: [],
  },
  21: {
    english: [
      ["And", "g2.21.2"], ["he", "g2.21.1"], ["rose", "g2.21.3"], ["and", "", true], ["took", "g2.21.4"], ["the", "g2.21.5"], ["child", "g2.21.6"],
      ["and", "g2.21.7"], ["his", "g2.21.10"], ["mother", "g2.21.8 g2.21.9"],
      ["and", "g2.21.11"], ["entered", "g2.21.12"], ["the", "", true], ["land", "g2.21.14"], ["of", "g2.21.13", true], ["Israel.", "g2.21.15"],
    ],
    annotations: [],
  },
  22: {
    english: [
      ["But", "g2.22.2"], ["hearing", "g2.22.1"], ["that", "g2.22.3"], ["Archelaus", "g2.22.4"], ["was", "", true], ["reigning", "g2.22.5"], ["over", "g2.22.6", true], ["Judea", "g2.22.7"],
      ["in", "g2.22.8", true], ["place", "g2.22.8"], ["of", "g2.22.8", true], ["his", "g2.22.11"], ["father", "g2.22.9 g2.22.10"], ["Herod,", "g2.22.12"],
      ["he", "", true], ["was", "g2.22.13", true], ["afraid", "g2.22.13"], ["to", "g2.22.15", true], ["go", "g2.22.15"], ["there;", "g2.22.14"],
      ["and", "g2.22.17"], ["being", "g2.22.16", true], ["warned", "g2.22.16"], ["in", "g2.22.18"], ["a", "", true], ["dream", "g2.22.19"],
      ["he", "", true], ["withdrew", "g2.22.20"], ["into", "g2.22.21"], ["the", "g2.22.22"], ["region", "g2.22.23"], ["of", "g2.22.24", true], ["Galilee,", "g2.22.25"],
    ],
    annotations: [],
  },
  23: {
    english: [
      ["and", "g2.23.1"], ["went", "g2.23.2"], ["and", "", true], ["settled", "g2.23.3"], ["in", "g2.23.4"], ["a", "", true], ["town", "g2.23.5"], ["called", "g2.23.6"], ["Nazareth", "g2.23.7"],
      ["—", "", true], ["so", "g2.23.8", true], ["that", "g2.23.8"], ["what", "g2.23.10"], ["was", "", true], ["spoken", "g2.23.11"],
      ["through", "g2.23.12"], ["the", "g2.23.13"], ["prophets", "g2.23.14"],
      ["might", "", true], ["be", "", true], ["fulfilled:", "g2.23.9"],
      ["“He", "g2.23.15", true], ["shall", "", true], ["be", "", true], ["called", "g2.23.17"], ["a", "", true], ["Nazarene.”", "g2.23.16"],
    ],
    annotations: [
      {
        kind: "text", refs: "g2.23.14 g2.23.16", lemma: "διὰ τῶν προφητῶν … Ναζωραῖος",
        title: "A prophecy that isn't in the Bible",
        body: "Search the Old Testament for *“He shall be called a Nazarene”* and you will not find it — no such verse exists, and Matthew, alone among all his fulfilment-citations, seems to know it: only here does he write “through the **prophets**,” plural, with no name, and only here does the formula end with ὅτι (“that”), marking a gist rather than a quotation. The best guess is a deliberate pun on Isaiah 11:1 — the **נֵצֶר** (*nētser*), the “branch” from Jesse's stump — heard in the name *Natsrat*, Nazareth; others hear “he shall be called holy” (Judg 13:5-7) or simply the sum of the prophets' scorned, unlikely Messiah, since “can anything good come out of Nazareth?” (John 1:46) was a real sneer about a real nowhere. We translate it as the text stands and leave the seam showing. It is a fitting end to a chapter of displacements: the king of the Jews, at home nowhere, finally settled under a name people would use against him.",
      },
    ],
  },
};
