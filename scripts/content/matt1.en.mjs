// Matthew 1 — English translation & annotations.
// english entry: [text, alignIds, supplied?]

export const CONTENT = {
  1: {
    english: [
      ["The", "g1.1.1", true], ["book", "g1.1.1"], ["of", "g1.1.2", true], ["the", "g1.1.2", true], ["genesis", "g1.1.2"],
      ["of", "g1.1.3", true], ["Jesus", "g1.1.3"], ["Christ,", "g1.1.4"],
      ["son", "g1.1.5"], ["of", "g1.1.6", true], ["David,", "g1.1.6"],
      ["son", "g1.1.7"], ["of", "g1.1.8", true], ["Abraham.", "g1.1.8"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.1.1 g1.1.2", lemma: "βίβλος γενέσεως",
        title: "“A book of genesis”",
        body: "Matthew's first two words are a deliberate echo. **Βίβλος γενέσεως** — *book of genesis* — is exactly the phrase the Greek Old Testament uses at Genesis 2:4 and 5:1 (“the book of the genesis of heavens and earth… of Adam”). Before a single name is listed, the evangelist has made his claim: what begins here is of the same order as creation itself — a *new* genesis. We translate the word as **“genesis”** rather than the flattening “genealogy”: the same noun returns in v. 18 for the conception of Jesus, and Matthew means the resonance to carry. It is also a signal about method — this Gospel is written with the whole Hebrew Bible humming underneath it, and it expects you to hear the chords.",
      },
      {
        kind: "translation", refs: "g1.1.5 g1.1.6 g1.1.7 g1.1.8", lemma: "υἱοῦ Δαυὶδ υἱοῦ Ἀβραάμ",
        title: "“Son of” — and no, not literally",
        body: "A fair objection: Jesus was not David's son in any biological sense — a thousand years separate them — so why not translate **“descendant of David, descendant of Abraham”**? The honest answer has two parts. First, the Greek word υἱός (*son*) genuinely does carry “descendant” — exactly like Hebrew *ben* and Aramaic *bar*, it reaches down a whole line, not just one generation. So “descendant” is not a mistranslation; it is simply the flatter reading of an idiom that means both. Second — and this is why we keep **“son”** — *υἱὸς Δαυίδ*, “Son of David,” is not a note about ancestry here. It is a **title**, the royal-messianic name Matthew will put in mouth after mouth for twenty more chapters: the blind men calling out (9:27; 20:30), the crowds shouting *“Hosanna to the Son of David”* at the gates of Jerusalem (21:9), the trick question Jesus asks about whose son the Messiah really is (22:42–45). Translate verse 1 as “descendant” and you quietly sever the opening line from the drumbeat that runs through the whole book. Notice, too, that the genealogy proper (vv. 2–16) uses a different verb entirely — *fathered / begot* — for the actual biological links; verse 1 stands *above* that chain as a heading. So the line was never claiming David begot Jesus. It names a title (David, the promised king) and a covenant (Abraham, through whose “seed all nations would be blessed,” Gen 22:18), and lets both hang over everything that follows.",
      },
    ],
  },
  2: {
    english: [
      ["Abraham", "g1.2.1"], ["fathered", "g1.2.2"], ["Isaac,", "g1.2.3 g1.2.4"],
      ["and", "g1.2.6"], ["Isaac", "g1.2.5"], ["fathered", "g1.2.7"], ["Jacob,", "g1.2.8 g1.2.9"],
      ["and", "g1.2.11"], ["Jacob", "g1.2.10"], ["fathered", "g1.2.12"], ["Judah", "g1.2.13 g1.2.14"],
      ["and", "g1.2.15"], ["his", "g1.2.18"], ["brothers,", "g1.2.16 g1.2.17"],
    ],
    annotations: [],
  },
  3: {
    english: [
      ["and", "g1.3.2"], ["Judah", "g1.3.1"], ["fathered", "g1.3.3"], ["Perez", "g1.3.4 g1.3.5"],
      ["and", "g1.3.6"], ["Zerah", "g1.3.7 g1.3.8"], ["by", "g1.3.9"], ["Tamar,", "g1.3.10 g1.3.11"],
      ["and", "g1.3.13"], ["Perez", "g1.3.12"], ["fathered", "g1.3.14"], ["Hezron,", "g1.3.15 g1.3.16"],
      ["and", "g1.3.18"], ["Hezron", "g1.3.17"], ["fathered", "g1.3.19"], ["Aram,", "g1.3.20 g1.3.21"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.3.11 g1.3.9", lemma: "ἐκ τῆς Θαμάρ",
        title: "Four unexpected women",
        body: "Ancient genealogies run through fathers; Matthew interrupts his four times to name a mother — and what a four. **Tamar** (v. 3) conceived Perez by posing as a prostitute to her father-in-law (Gen 38). **Rahab** (v. 5) *was* one, and a Canaanite of Jericho besides (Josh 2). **Ruth** (v. 5) was a Moabite — from a nation banned from the assembly of Israel (Deut 23:3). And Bathsheba (v. 6) is not even named: she is “the wife of *Uriah*,” a phrase that keeps David's adultery and murder standing in the record. Foreign women, irregular unions, remembered scandals — stitched deliberately into the Messiah's own pedigree. The pattern is preparing for a fifth woman (v. 16) whose pregnancy will also invite whispers. Matthew's point is quietly devastating: the line of promise has never run through respectability, and grace has never needed clean hands to work with.",
      },
    ],
  },
  4: {
    english: [
      ["and", "g1.4.2"], ["Aram", "g1.4.1"], ["fathered", "g1.4.3"], ["Amminadab,", "g1.4.4 g1.4.5"],
      ["and", "g1.4.7"], ["Amminadab", "g1.4.6"], ["fathered", "g1.4.8"], ["Nahshon,", "g1.4.9 g1.4.10"],
      ["and", "g1.4.12"], ["Nahshon", "g1.4.11"], ["fathered", "g1.4.13"], ["Salmon,", "g1.4.14 g1.4.15"],
    ],
    annotations: [],
  },
  5: {
    english: [
      ["and", "g1.5.2"], ["Salmon", "g1.5.1"], ["fathered", "g1.5.3"], ["Boaz", "g1.5.4 g1.5.5"],
      ["by", "g1.5.6"], ["Rahab,", "g1.5.7 g1.5.8"],
      ["and", "g1.5.10"], ["Boaz", "g1.5.9"], ["fathered", "g1.5.11"], ["Obed", "g1.5.12 g1.5.13"],
      ["by", "g1.5.14"], ["Ruth,", "g1.5.15 g1.5.16"],
      ["and", "g1.5.18"], ["Obed", "g1.5.17"], ["fathered", "g1.5.19"], ["Jesse,", "g1.5.20 g1.5.21"],
    ],
    annotations: [],
  },
  6: {
    english: [
      ["and", "g1.6.2"], ["Jesse", "g1.6.1"], ["fathered", "g1.6.3"], ["David", "g1.6.4 g1.6.5"],
      ["the", "g1.6.6"], ["king.", "g1.6.7"],
      ["And", "g1.6.9"], ["David", "g1.6.8"], ["fathered", "g1.6.10"], ["Solomon", "g1.6.11 g1.6.12"],
      ["by", "g1.6.13"], ["the", "g1.6.14"], ["wife", "g1.6.14", true], ["of", "g1.6.15"], ["Uriah,", "g1.6.16"],
    ],
    annotations: [],
  },
  7: {
    english: [
      ["and", "g1.7.2"], ["Solomon", "g1.7.1"], ["fathered", "g1.7.3"], ["Rehoboam,", "g1.7.4 g1.7.5"],
      ["and", "g1.7.7"], ["Rehoboam", "g1.7.6"], ["fathered", "g1.7.8"], ["Abijah,", "g1.7.9 g1.7.10"],
      ["and", "g1.7.12"], ["Abijah", "g1.7.11"], ["fathered", "g1.7.13"], ["Asaph,", "g1.7.14 g1.7.15"],
    ],
    annotations: [
      {
        kind: "text", refs: "g1.7.15", lemma: "Ἀσάφ",
        title: "“Asaph” — an error the oldest text lets stand",
        body: "The king who followed Abijah was **Asa** (1 Kgs 15:8) — but the oldest manuscripts of Matthew (ℵ, B, and others behind Nestle 1904) read **Ἀσάφ, “Asaph,”** the name of the psalmist. The same thing happens at v. 10, where **“Amos”** the prophet stands where king **Amon** belongs. Later copyists tidied both names to match Kings, and many translations quietly follow them. We translate what the earliest recoverable text actually says. That choice is a small window into how this edition works: the New Testament text is *reconstructed* from real, imperfect, wonderfully abundant documents, and honesty means showing the seams rather than sanding them. Whether Matthew slipped, or used a spelling tradition now lost, or intended an allusive pun on psalmist and prophet — the evidence is the evidence, and it is sturdy enough not to need retouching.",
      },
    ],
  },
  8: {
    english: [
      ["and", "g1.8.2"], ["Asaph", "g1.8.1"], ["fathered", "g1.8.3"], ["Jehoshaphat,", "g1.8.4 g1.8.5"],
      ["and", "g1.8.7"], ["Jehoshaphat", "g1.8.6"], ["fathered", "g1.8.8"], ["Joram,", "g1.8.9 g1.8.10"],
      ["and", "g1.8.12"], ["Joram", "g1.8.11"], ["fathered", "g1.8.13"], ["Uzziah,", "g1.8.14 g1.8.15"],
    ],
    annotations: [],
  },
  9: {
    english: [
      ["and", "g1.9.2"], ["Uzziah", "g1.9.1"], ["fathered", "g1.9.3"], ["Jotham,", "g1.9.4 g1.9.5"],
      ["and", "g1.9.7"], ["Jotham", "g1.9.6"], ["fathered", "g1.9.8"], ["Ahaz,", "g1.9.9 g1.9.10"],
      ["and", "g1.9.12"], ["Ahaz", "g1.9.11"], ["fathered", "g1.9.13"], ["Hezekiah,", "g1.9.14 g1.9.15"],
    ],
    annotations: [],
  },
  10: {
    english: [
      ["and", "g1.10.2"], ["Hezekiah", "g1.10.1"], ["fathered", "g1.10.3"], ["Manasseh,", "g1.10.4 g1.10.5"],
      ["and", "g1.10.7"], ["Manasseh", "g1.10.6"], ["fathered", "g1.10.8"], ["Amos,", "g1.10.9 g1.10.10"],
      ["and", "g1.10.12"], ["Amos", "g1.10.11"], ["fathered", "g1.10.13"], ["Josiah,", "g1.10.14 g1.10.15"],
    ],
    annotations: [],
  },
  11: {
    english: [
      ["and", "g1.11.2"], ["Josiah", "g1.11.1"], ["fathered", "g1.11.3"], ["Jechoniah", "g1.11.4 g1.11.5"],
      ["and", "g1.11.6"], ["his", "g1.11.9"], ["brothers,", "g1.11.7 g1.11.8"],
      ["at", "g1.11.10"], ["the", "g1.11.11"], ["deportation", "g1.11.12"], ["to", "", true], ["Babylon.", "g1.11.13"],
    ],
    annotations: [],
  },
  12: {
    english: [
      ["And", "g1.12.2"], ["after", "g1.12.1"], ["the", "g1.12.3"], ["deportation", "g1.12.4"], ["to", "", true], ["Babylon,", "g1.12.5"],
      ["Jechoniah", "g1.12.6"], ["fathered", "g1.12.7"], ["Shealtiel,", "g1.12.8 g1.12.9"],
      ["and", "g1.12.11"], ["Shealtiel", "g1.12.10"], ["fathered", "g1.12.12"], ["Zerubbabel,", "g1.12.13 g1.12.14"],
    ],
    annotations: [],
  },
  13: {
    english: [
      ["and", "g1.13.2"], ["Zerubbabel", "g1.13.1"], ["fathered", "g1.13.3"], ["Abiud,", "g1.13.4 g1.13.5"],
      ["and", "g1.13.7"], ["Abiud", "g1.13.6"], ["fathered", "g1.13.8"], ["Eliakim,", "g1.13.9 g1.13.10"],
      ["and", "g1.13.12"], ["Eliakim", "g1.13.11"], ["fathered", "g1.13.13"], ["Azor,", "g1.13.14 g1.13.15"],
    ],
    annotations: [],
  },
  14: {
    english: [
      ["and", "g1.14.2"], ["Azor", "g1.14.1"], ["fathered", "g1.14.3"], ["Zadok,", "g1.14.4 g1.14.5"],
      ["and", "g1.14.7"], ["Zadok", "g1.14.6"], ["fathered", "g1.14.8"], ["Achim,", "g1.14.9 g1.14.10"],
      ["and", "g1.14.12"], ["Achim", "g1.14.11"], ["fathered", "g1.14.13"], ["Eliud,", "g1.14.14 g1.14.15"],
    ],
    annotations: [],
  },
  15: {
    english: [
      ["and", "g1.15.2"], ["Eliud", "g1.15.1"], ["fathered", "g1.15.3"], ["Eleazar,", "g1.15.4 g1.15.5"],
      ["and", "g1.15.7"], ["Eleazar", "g1.15.6"], ["fathered", "g1.15.8"], ["Matthan,", "g1.15.9 g1.15.10"],
      ["and", "g1.15.12"], ["Matthan", "g1.15.11"], ["fathered", "g1.15.13"], ["Jacob,", "g1.15.14 g1.15.15"],
    ],
    annotations: [],
  },
  16: {
    english: [
      ["and", "g1.16.2"], ["Jacob", "g1.16.1"], ["fathered", "g1.16.3"], ["Joseph,", "g1.16.4 g1.16.5"],
      ["the", "g1.16.6"], ["husband", "g1.16.7"], ["of", "", true], ["Mary,", "g1.16.8"],
      ["of", "g1.16.9"], ["whom", "g1.16.10"], ["was", "g1.16.11", true], ["born", "g1.16.11"], ["Jesus,", "g1.16.12"],
      ["who", "g1.16.13"], ["is", "", true], ["called", "g1.16.14"], ["Christ.", "g1.16.15"],
    ],
    annotations: [
      {
        kind: "reading", refs: "g1.16.9 g1.16.10 g1.16.11", lemma: "ἐξ ἧς ἐγεννήθη",
        title: "Where the pattern breaks",
        body: "Thirty-nine times the drumbeat has been the same: *he fathered, he fathered, he fathered.* Then, at the very last link, the grammar swerves. Joseph is not said to father Jesus; he is “the husband of Mary, **of whom** was born Jesus” — and that *of whom* (ἐξ ἧς) is **feminine singular**. In a list built entirely of fathers, the final birth hangs on a mother alone, and the verb goes passive: *was born* — was begotten, by an agency the sentence pointedly declines to name until v. 18. If you have ever felt that faith requires switching off attention to detail, notice that the case for the strangeness of this birth is being made here by a *pronoun's gender*. The genealogy is a long, patient, factual-looking corridor — and it ends at a door that only opens sideways. Whatever you make of what lies behind that door, Matthew has not smuggled it in; he has walked you to it in broad daylight, scandals and Babylonian wreckage and all. A line this crooked, he implies, was always going to need something other than biology to finish it.",
      },
    ],
  },
  17: {
    english: [
      ["So", "g1.17.2"], ["all", "g1.17.1"], ["the", "g1.17.3"], ["generations", "g1.17.4"],
      ["from", "g1.17.5"], ["Abraham", "g1.17.6"], ["to", "g1.17.7"], ["David", "g1.17.8"],
      ["are", "", true], ["fourteen", "g1.17.10"], ["generations;", "g1.17.9"],
      ["and", "g1.17.11"], ["from", "g1.17.12"], ["David", "g1.17.13"], ["to", "g1.17.14"], ["the", "g1.17.15"], ["deportation", "g1.17.16"], ["to", "", true], ["Babylon,", "g1.17.17"],
      ["fourteen", "g1.17.19"], ["generations;", "g1.17.18"],
      ["and", "g1.17.20"], ["from", "g1.17.21"], ["the", "g1.17.22"], ["deportation", "g1.17.23"], ["to", "", true], ["Babylon", "g1.17.24"],
      ["to", "g1.17.25"], ["the", "g1.17.26"], ["Christ,", "g1.17.27"],
      ["fourteen", "g1.17.29"], ["generations.", "g1.17.28"],
    ],
    annotations: [
      {
        kind: "concept", refs: "g1.17.10 g1.17.19 g1.17.29", lemma: "δεκατέσσαρες",
        title: "Why fourteen?",
        body: "In Hebrew, letters double as numerals, and the letters of **David** — *dalet-waw-dalet*, ד־ו־ד — add up to 4 + 6 + 4 = **14**. Matthew has arranged the whole of Israel's history into three sweeps of David's number: promise (Abraham → David), kingship and its ruin (David → exile), and waiting (exile → Christ). The arrangement is *made*, and Matthew scarcely hides it — he silently drops three kings between Joram and Uzziah, and the third panel only reaches fourteen by counting inclusively. This is not bookkeeping and was never meant to be read as bookkeeping: it is a designed overture, a claim in the shape of a list — that history is not drift but composition, and that its cadence resolves on the son of David. Ancient readers knew the difference between a ledger and a fanfare. The honest modern question is not “does the arithmetic audit?” but “is the claim true?” — and that question the rest of the Gospel exists to argue.",
      },
    ],
  },
  18: {
    english: [
      ["Now", "g1.18.2"], ["the", "g1.18.5"], ["genesis", "g1.18.6"], ["of", "g1.18.1"], ["Jesus", "g1.18.3"], ["Christ", "g1.18.4"],
      ["was", "g1.18.8"], ["like", "g1.18.7", true], ["this.", "g1.18.7"],
      ["His", "g1.18.12"], ["mother", "g1.18.10 g1.18.11"], ["Mary", "g1.18.13"],
      ["had", "", true], ["been", "", true], ["betrothed", "g1.18.9"], ["to", "g1.18.14"], ["Joseph;", "g1.18.15"],
      ["but", "", true], ["before", "g1.18.16 g1.18.17"], ["they", "g1.18.19"], ["came", "g1.18.18"], ["together,", "g1.18.18"],
      ["she", "g1.18.20", true], ["was", "g1.18.20", true], ["found", "g1.18.20"], ["to", "", true], ["be", "", true],
      ["with", "g1.18.21"], ["child", "g1.18.22 g1.18.23"],
      ["by", "g1.18.24"], ["the", "", true], ["Holy", "g1.18.26"], ["Spirit.", "g1.18.25"],
    ],
    annotations: [],
  },
  19: {
    english: [
      ["And", "g1.19.2"], ["Joseph", "g1.19.1"], ["her", "g1.19.5"], ["husband,", "g1.19.3 g1.19.4"],
      ["being", "g1.19.7"], ["a", "", true], ["just", "g1.19.6"], ["man", "", true],
      ["and", "g1.19.8"], ["unwilling", "g1.19.9 g1.19.10"],
      ["to", "g1.19.12", true], ["expose", "g1.19.12"], ["her", "g1.19.11"], ["to", "", true], ["disgrace,", "g1.19.12"],
      ["resolved", "g1.19.13"], ["to", "g1.19.15", true], ["divorce", "g1.19.15"], ["her", "g1.19.16"], ["quietly.", "g1.19.14"],
    ],
    annotations: [],
  },
  20: {
    english: [
      ["But", "g1.20.2"], ["as", "", true], ["he", "g1.20.3"], ["pondered", "g1.20.4"], ["these", "g1.20.1"], ["things,", "g1.20.1"],
      ["behold,", "g1.20.5"], ["an", "", true], ["angel", "g1.20.6"], ["of", "", true], ["the", "", true], ["Lord", "g1.20.7"],
      ["appeared", "g1.20.10"], ["to", "g1.20.11", true], ["him", "g1.20.11"], ["in", "g1.20.8"], ["a", "", true], ["dream,", "g1.20.9"],
      ["saying,", "g1.20.12"],
      ["“Joseph,", "g1.20.13"], ["son", "g1.20.14"], ["of", "", true], ["David,", "g1.20.15"],
      ["do", "g1.20.16", true], ["not", "g1.20.16"], ["be", "", true], ["afraid", "g1.20.17"],
      ["to", "", true], ["take", "g1.20.18"], ["Mary", "g1.20.19"], ["as", "", true], ["your", "g1.20.22"], ["wife;", "g1.20.20 g1.20.21"],
      ["for", "g1.20.24"], ["what", "g1.20.23"], ["has", "", true], ["been", "", true], ["begotten", "g1.20.27"],
      ["in", "g1.20.25"], ["her", "g1.20.26"], ["is", "g1.20.30"], ["of", "g1.20.28"], ["the", "", true], ["Holy", "g1.20.31"], ["Spirit;", "g1.20.29"],
    ],
    annotations: [],
  },
  21: {
    english: [
      ["she", "g1.21.2"], ["will", "", true], ["bear", "g1.21.1"], ["a", "", true], ["son,", "g1.21.3"],
      ["and", "g1.21.4"], ["you", "g1.21.5", true], ["shall", "", true], ["call", "g1.21.5"], ["his", "g1.21.8"], ["name", "g1.21.6 g1.21.7"], ["Jesus,", "g1.21.9"],
      ["for", "g1.21.11"], ["he", "g1.21.10"], ["will", "", true], ["save", "g1.21.12"],
      ["his", "g1.21.15"], ["people", "g1.21.13 g1.21.14"], ["from", "g1.21.16"], ["their", "g1.21.19"], ["sins.”", "g1.21.17 g1.21.18"],
    ],
    annotations: [
      {
        kind: "grammar", refs: "g1.21.9 g1.21.12", lemma: "Ἰησοῦς … σώσει",
        title: "The name is the mission",
        body: "**Ἰησοῦς** (Iēsous) is the Greek dress of the Hebrew **Yeshua**, short for *Yehoshua* — “**YHWH saves**.” So the angel's sentence is a pun that only works in Hebrew: *call him “YHWH-saves,” **for he will save** his people.* In Greek — and in English — the wordplay goes silent, which is itself a small lesson in what translation loses; the first readers who caught it heard the child's whole vocation folded into his name. Note also what the salvation is *from*: not from Rome, which is what a son-of-David announcement would lead anyone to expect, but **“from their sins”** — a quiet redefinition of rescue, planted in the Gospel's very first speech from heaven.",
      },
    ],
  },
  22: {
    english: [
      ["All", "g1.22.3"], ["this", "g1.22.1"], ["happened", "g1.22.4"],
      ["so", "g1.22.5", true], ["that", "g1.22.5"], ["what", "g1.22.7"], ["was", "", true], ["spoken", "g1.22.8"],
      ["by", "g1.22.9"], ["the", "", true], ["Lord", "g1.22.10"], ["through", "g1.22.11"], ["the", "g1.22.12"], ["prophet", "g1.22.13"],
      ["might", "", true], ["be", "", true], ["fulfilled:", "g1.22.6 g1.22.14"],
    ],
    annotations: [],
  },
  23: {
    english: [
      ["“Behold,", "g1.23.1"], ["the", "g1.23.2"], ["virgin", "g1.23.3"],
      ["shall", "g1.23.6", true], ["be", "g1.23.6"], ["with", "g1.23.4"], ["child", "g1.23.5"],
      ["and", "g1.23.7"], ["shall", "", true], ["bear", "g1.23.8"], ["a", "", true], ["son,", "g1.23.9"],
      ["and", "g1.23.10"], ["they", "g1.23.11", true], ["shall", "", true], ["call", "g1.23.11"], ["his", "g1.23.14"], ["name", "g1.23.12 g1.23.13"], ["Immanuel”,", "g1.23.15"],
      ["which", "g1.23.16"], ["translated", "g1.23.18"], ["is", "g1.23.17"],
      ["“God", "g1.23.21 g1.23.22"], ["with", "g1.23.19"], ["us.”", "g1.23.20"],
    ],
    annotations: [
      {
        kind: "text", refs: "g1.23.3", lemma: "παρθένος",
        title: "“The virgin” — Isaiah 7:14, and what Matthew is actually doing",
        body: "Matthew quotes Isaiah 7:14 from the **Septuagint**, the Greek translation his readers knew, which renders Hebrew **עַלְמָה** (*ʿalmâ*, “young woman of marriageable age”) with **παρθένος** — a word that ordinarily does mean “virgin.” Critics have pointed at that gap for eighteen centuries, and the honest thing is to say it plainly: the Hebrew word by itself does not assert virginity, and Isaiah's sign had a near horizon in his own century. But notice the direction of Matthew's argument. He does not start from the text and invent a story to fit it; he starts from what he holds to have *happened* — a conception “of the Holy Spirit” (vv. 18, 20) — and then reaches for the scripture whose Greek wording had, as it were, been waiting for the event. Fulfilment, in Matthew's practice, is recognition after the fact, not prediction mechanically discharged. The name seals the claim: **Immanuel, “God with us”** — the thesis of this whole Gospel, whose last sentence will answer it: *“I am with you always.”*",
      },
    ],
  },
  24: {
    english: [
      ["And", "g1.24.2"], ["Joseph,", "g1.24.3 g1.24.4"], ["rising", "g1.24.1"], ["from", "g1.24.5"], ["sleep,", "g1.24.6 g1.24.7"],
      ["did", "g1.24.8"], ["as", "g1.24.9"], ["the", "g1.24.12"], ["angel", "g1.24.13"], ["of", "", true], ["the", "", true], ["Lord", "g1.24.14"],
      ["had", "", true], ["commanded", "g1.24.10"], ["him,", "g1.24.11"],
      ["and", "g1.24.15"], ["took", "g1.24.16"], ["her", "", true], ["as", "", true], ["his", "g1.24.19"], ["wife;", "g1.24.17 g1.24.18"],
    ],
    annotations: [],
  },
  25: {
    english: [
      ["and", "g1.25.1"], ["he", "", true], ["did", "", true], ["not", "g1.25.2"], ["know", "g1.25.3"], ["her", "g1.25.4"],
      ["until", "g1.25.5 g1.25.6"], ["she", "", true], ["had", "", true], ["borne", "g1.25.7"], ["a", "", true], ["son.", "g1.25.8"],
      ["And", "g1.25.9"], ["he", "", true], ["called", "g1.25.10"], ["his", "g1.25.13"], ["name", "g1.25.11 g1.25.12"], ["Jesus.", "g1.25.14"],
    ],
    annotations: [],
  },
};
