// Gazetteer of places in John's geography.
//
// Two jobs:
//   1. Drive the 3D map (labels, markers, region shading) — every entry has a
//      lon/lat; regions also carry an approximate polygon `ring`.
//   2. Let the reader detect place-names in the running text — entries with
//      `aliases` are matched (longest-first) against the translation tokens,
//      and a map-marker appears that opens the map focused on that place.
//
// Coordinates are modern; at this scale the terrain is unchanged since antiquity.
// Region rings are deliberately approximate — enough to glow "this whole area".

export type PlaceType = 'region' | 'site' | 'water';

export interface Place {
  id: string;
  type: PlaceType;
  name: { en: string; sv: string };
  /** Representative point (a site's location, or a region/water label anchor). */
  lon: number;
  lat: number;
  /** Region outline as [lon, lat] pairs (only for type 'region'). */
  ring?: [number, number][];
  /** Surface forms in the text (case/punctuation-insensitive). Omit ⇒ map-only. */
  aliases?: { en: string[]; sv: string[] };
  /** Camera framing distance (km) when focused; smaller = closer. */
  focusKm?: number;
  /** Parent locality — the label is only shown when that area is in focus (declutters). */
  within?: string;
  /** A representative chapter to jump to from a map label. */
  ch?: number;
  /** One-line orientation shown when the place is focused on the map. */
  blurb?: { en: string; sv: string };
}

export const PLACES: Place[] = [
  // ---------------- regions ----------------
  {
    id: 'galilee', type: 'region', name: { en: 'Galilee', sv: 'Galileen' },
    lon: 35.33, lat: 32.80, focusKm: 130, ch: 1,
    ring: [
      [35.08, 32.60], [35.55, 32.60], [35.60, 32.70], [35.58, 32.90],
      [35.40, 33.02], [35.15, 33.00], [35.02, 32.80], [35.03, 32.66],
    ],
    aliases: { en: ['galilee'], sv: ['galileen', 'galileens'] },
    blurb: {
      en: "The northern region — Jesus' home country, of Cana, Nazareth and Capernaum by the lake.",
      sv: 'Den norra landsdelen — Jesu hemtrakt, med Kana, Nasaret och Kapernaum vid sjön.',
    },
  },
  {
    id: 'samaria', type: 'region', name: { en: 'Samaria', sv: 'Samarien' },
    lon: 35.24, lat: 32.28, focusKm: 120, ch: 4,
    ring: [
      [35.00, 32.02], [35.44, 32.02], [35.50, 32.20], [35.44, 32.42],
      [35.30, 32.56], [35.05, 32.54], [34.97, 32.30], [34.98, 32.12],
    ],
    aliases: { en: ['samaria'], sv: ['samarien', 'samariens'] },
    blurb: {
      en: 'The central hill country between Judea and Galilee, shunned by Judeans — where Jesus met the woman at the well.',
      sv: 'Det centrala bergslandet mellan Judeen och Galileen, undvikt av judéer — där Jesus mötte kvinnan vid brunnen.',
    },
  },
  {
    id: 'judea', type: 'region', name: { en: 'Judea', sv: 'Judeen' },
    lon: 35.20, lat: 31.68, focusKm: 130, ch: 3,
    ring: [
      [34.97, 31.33], [35.42, 31.33], [35.55, 31.55], [35.52, 31.85],
      [35.38, 32.00], [35.02, 32.00], [34.90, 31.70], [34.92, 31.45],
    ],
    aliases: { en: ['judea', 'judaea'], sv: ['judeen', 'judeens'] },
    blurb: {
      en: 'The southern region around Jerusalem — the heart of the temple, and of the opposition to Jesus.',
      sv: 'Den södra landsdelen kring Jerusalem — templets hjärta, och motståndets mot Jesus.',
    },
  },

  // ---------------- sites (Galilee) ----------------
  {
    id: 'cana', type: 'site', name: { en: 'Cana', sv: 'Kana' },
    lon: 35.339, lat: 32.749, focusKm: 55, ch: 2,
    aliases: { en: ['cana'], sv: ['kana'] },
    blurb: { en: 'The village of the first sign — water into wine (John 2).', sv: 'Byn för det första tecknet — vatten till vin (Joh 2).' },
  },
  {
    id: 'nazareth', type: 'site', name: { en: 'Nazareth', sv: 'Nasaret' },
    lon: 35.297, lat: 32.702, focusKm: 55, ch: 1,
    aliases: { en: ['nazareth'], sv: ['nasaret'] },
  },
  {
    id: 'capernaum', type: 'site', name: { en: 'Capernaum', sv: 'Kapernaum' },
    lon: 35.575, lat: 32.881, focusKm: 45, ch: 6,
    aliases: { en: ['capernaum'], sv: ['kapernaum'] },
    blurb: { en: 'The lakeside town of the Bread-of-Life discourse (John 6).', sv: 'Staden vid sjön där brödtalet hölls (Joh 6).' },
  },
  {
    id: 'bethsaida', type: 'site', name: { en: 'Bethsaida', sv: 'Betsaida' },
    lon: 35.630, lat: 32.910, focusKm: 45, ch: 1,
    aliases: { en: ['bethsaida'], sv: ['betsaida'] },
  },
  {
    id: 'tiberias', type: 'site', name: { en: 'Tiberias', sv: 'Tiberias' },
    lon: 35.531, lat: 32.792, focusKm: 45, ch: 6,
    aliases: { en: ['tiberias'], sv: ['tiberias'] },
  },
  {
    id: 'sea-of-galilee', type: 'water', name: { en: 'Sea of Galilee', sv: 'Galileiska sjön' },
    lon: 35.588, lat: 32.80, focusKm: 55, ch: 6,
    aliases: {
      en: ['sea of galilee', 'sea of tiberias'],
      sv: ['galileiska sjön', 'tiberias sjö', 'tiberiassjön', 'galileiska havet'],
    },
  },

  // ---------------- sites (Samaria) ----------------
  {
    id: 'sychar', type: 'site', name: { en: 'Sychar', sv: 'Sykar' },
    lon: 35.281, lat: 32.209, focusKm: 45, ch: 4,
    aliases: { en: ['sychar'], sv: ['sykar'] },
    blurb: { en: "The Samaritan town by Jacob's well (John 4).", sv: 'Den samariska staden vid Jakobs brunn (Joh 4).' },
  },
  {
    id: 'jacobs-well', type: 'site', name: { en: "Jacob's Well", sv: 'Jakobs brunn' },
    lon: 35.284, lat: 32.210, focusKm: 40, ch: 4,
    aliases: { en: ["jacob's well", 'jacobs well'], sv: ['jakobs brunn', 'jakobs källa'] },
  },
  {
    id: 'gerizim', type: 'site', name: { en: 'Mount Gerizim', sv: 'Gerissim' },
    lon: 35.273, lat: 32.200, focusKm: 40, ch: 4,
    aliases: { en: ['gerizim', 'mount gerizim'], sv: ['gerissim', 'gerizim'] },
    blurb: { en: 'The Samaritan holy mountain — "this mountain" of John 4:20.', sv: 'Samariernas heliga berg — "detta berg" i Joh 4:20.' },
  },
  {
    id: 'aenon', type: 'site', name: { en: 'Aenon near Salim', sv: 'Ainon nära Salim' },
    lon: 35.53, lat: 32.35, focusKm: 55, ch: 3,
    aliases: { en: ['aenon', 'aenon near salim'], sv: ['ainon', 'ainon nära salim'] },
    blurb: { en: 'Where John baptized "because water was plentiful there" (John 3:23); location uncertain.', sv: 'Där Johannes döpte "eftersom det fanns gott om vatten" (Joh 3:23); platsen osäker.' },
  },

  // ---------------- sites (Judea / Jerusalem) ----------------
  {
    id: 'jerusalem', type: 'site', name: { en: 'Jerusalem', sv: 'Jerusalem' },
    lon: 35.231, lat: 31.778, focusKm: 32, ch: 2,
    aliases: { en: ['jerusalem'], sv: ['jerusalem'] },
    blurb: { en: 'The holy city — of temple, feasts, trial and cross.', sv: 'Den heliga staden — med tempel, högtider, rättegång och kors.' },
  },
  {
    id: 'temple', type: 'site', name: { en: 'The Temple', sv: 'Templet' },
    lon: 35.2354, lat: 31.7780, focusKm: 24, within: 'jerusalem', ch: 2,
    aliases: { en: ['temple'], sv: ['templet', 'tempel', 'templets'] },
    blurb: { en: 'Herod’s temple on Mount Moriah — cleansed in John 2, taught in through the feasts.', sv: 'Herodes tempel på Moria berg — renat i Joh 2, plats för undervisning vid högtiderna.' },
  },
  {
    id: 'bethesda', type: 'site', name: { en: 'Pool of Bethesda', sv: 'Betesdadammen' },
    lon: 35.2361, lat: 31.7815, focusKm: 20, within: 'jerusalem', ch: 5,
    aliases: { en: ['bethesda', 'bethzatha'], sv: ['betesda', 'betsata'] },
    blurb: { en: 'The five-portico pool by the Sheep Gate, where Jesus healed on the Sabbath (John 5).', sv: 'Dammen med fem pelargångar vid Fårporten, där Jesus botade på sabbaten (Joh 5).' },
  },
  {
    id: 'siloam', type: 'site', name: { en: 'Pool of Siloam', sv: 'Siloadammen' },
    lon: 35.2354, lat: 31.7700, focusKm: 20, within: 'jerusalem', ch: 9,
    aliases: { en: ['siloam'], sv: ['siloam', 'siloa'] },
    blurb: { en: 'The pool named "Sent," where the man born blind washed and saw (John 9).', sv: 'Dammen som betyder "Sänd," där den blindfödde tvättade sig och fick se (Joh 9).' },
  },
  {
    id: 'solomons-colonnade', type: 'site', name: { en: "Solomon's Colonnade", sv: 'Salomos pelargång' },
    lon: 35.2372, lat: 31.7778, focusKm: 22, within: 'jerusalem', ch: 10,
    aliases: { en: ["solomon's colonnade", 'solomons colonnade', 'colonnade of solomon'], sv: ['salomos pelargång', 'salomos pelarhall'] },
  },
  {
    id: 'kidron', type: 'site', name: { en: 'Kidron Valley', sv: 'Kidrondalen' },
    lon: 35.2395, lat: 31.7770, focusKm: 26, within: 'jerusalem', ch: 18,
    aliases: { en: ['kidron'], sv: ['kidron'] },
  },
  {
    id: 'golgotha', type: 'site', name: { en: 'Golgotha', sv: 'Golgata' },
    lon: 35.2298, lat: 31.7784, focusKm: 22, within: 'jerusalem', ch: 19,
    aliases: { en: ['golgotha', 'place of a skull', 'the place of the skull'], sv: ['golgata', 'huvudskalleplatsen'] },
    blurb: { en: 'The Place of a Skull, outside the city wall — where Jesus was crucified (John 19).', sv: 'Huvudskalleplatsen, utanför stadsmuren — där Jesus korsfästes (Joh 19).' },
  },
  {
    id: 'gethsemane', type: 'site', name: { en: 'Gethsemane', sv: 'Getsemane' },
    lon: 35.2410, lat: 31.7792, focusKm: 20, within: 'jerusalem', ch: 18,
    aliases: { en: ['gethsemane'], sv: ['getsemane'] },
    blurb: { en: 'The olive garden across the Kidron, where Jesus was arrested (John 18).', sv: 'Olivträdgården på andra sidan Kidron, där Jesus greps (Joh 18).' },
  },
  {
    id: 'high-priests-house', type: 'site', name: { en: "The High Priest's House", sv: 'Översteprästens hus' },
    lon: 35.2308, lat: 31.7752, focusKm: 20, within: 'jerusalem', ch: 18,
    aliases: { en: ['annas', 'caiaphas'], sv: ['hannas', 'kajafas', 'kaifas'] },
    blurb: { en: 'The palatial mansion in the Upper City where Annas and Caiaphas questioned Jesus, and Peter denied him (John 18).', sv: 'Palatset i Övre staden där Hannas och Kajafas förhörde Jesus, och Petrus förnekade honom (Joh 18).' },
  },
  {
    id: 'gabbatha', type: 'site', name: { en: 'The Stone Pavement (Gabbatha)', sv: 'Stenläggningen (Gabbata)' },
    lon: 35.2285, lat: 31.7765, focusKm: 22, within: 'jerusalem', ch: 19,
    aliases: { en: ['gabbatha', 'the stone pavement', 'stone pavement'], sv: ['gabbata', 'stenläggningen'] },
  },
  {
    id: 'herods-palace', type: 'site', name: { en: "Herod's Palace (Praetorium)", sv: 'Herodes palats (pretoriet)' },
    lon: 35.2245, lat: 31.7765, focusKm: 22, within: 'jerusalem', ch: 18,
    aliases: {
      en: ["herod's palace", 'praetorium', "governor's headquarters"],
      sv: ['pretoriet', 'herodes palats'],
    },
    blurb: {
      en: 'The royal palace on the western hill, with its three great towers — the likeliest seat of Pilate’s judgment (John 18–19).',
      sv: 'Kungapalatset på västra höjden, med sina tre stora torn — den troligaste platsen för Pilatus dom (Joh 18–19).',
    },
  },
  {
    id: 'antonia', type: 'site', name: { en: 'Antonia Fortress', sv: 'Antoniaborgen' },
    lon: 35.2345, lat: 31.7800, focusKm: 22, within: 'jerusalem', ch: 18,
    blurb: {
      en: 'Herod’s garrison fortress at the Temple Mount’s north-west corner, overlooking the courts.',
      sv: 'Herodes garnisonsborg vid tempelplatsens nordvästra hörn, med utsikt över förgårdarna.',
    },
  },
  {
    id: 'mount-of-olives', type: 'site', name: { en: 'Mount of Olives', sv: 'Olivberget' },
    lon: 35.245, lat: 31.778, focusKm: 26, within: 'jerusalem', ch: 8,
    aliases: { en: ['mount of olives'], sv: ['olivberget', 'oljeberget'] },
    blurb: {
      en: 'The ridge east of the city across the Kidron — where Jesus lodged, and the garden of his arrest lay (John 8:1; 18:1).',
      sv: 'Höjdryggen öster om staden bortom Kidron — där Jesus tog in, och där trädgården för hans gripande låg (Joh 8:1; 18:1).',
    },
  },
  {
    id: 'bethany', type: 'site', name: { en: 'Bethany', sv: 'Betania' },
    lon: 35.2965, lat: 31.7716, focusKm: 26, ch: 11,
    aliases: { en: ['bethany'], sv: ['betania'] },
    blurb: { en: 'The village of Mary, Martha and Lazarus, just over the Mount of Olives (John 11–12).', sv: 'Marias, Martas och Lasarus by, strax över Oljeberget (Joh 11–12).' },
  },
  {
    id: 'bethany-beyond-jordan', type: 'site', name: { en: 'Bethany beyond the Jordan', sv: 'Betania på andra sidan Jordan' },
    lon: 35.5525, lat: 31.8371, focusKm: 45, ch: 1,
    aliases: {
      en: ['bethany beyond the jordan', 'bethany across the jordan', 'bethany-beyond-jordan'],
      sv: ['betania på andra sidan jordan', 'betania bortom jordan'],
    },
    blurb: { en: 'Where John was baptizing, east of the river (John 1:28; 10:40).', sv: 'Där Johannes döpte, öster om floden (Joh 1:28; 10:40).' },
  },
  {
    id: 'ephraim', type: 'site', name: { en: 'Ephraim', sv: 'Efraim' },
    lon: 35.303, lat: 31.955, focusKm: 45, ch: 11,
    aliases: { en: ['ephraim'], sv: ['efraim'] },
    blurb: { en: 'The town near the wilderness where Jesus withdrew before Passover (John 11:54).', sv: 'Staden nära öknen dit Jesus drog sig undan före påsken (Joh 11:54).' },
  },
  {
    id: 'bethlehem', type: 'site', name: { en: 'Bethlehem', sv: 'Betlehem' },
    lon: 35.200, lat: 31.705, focusKm: 40, ch: 7,
    aliases: { en: ['bethlehem'], sv: ['betlehem'] },
  },

  // ---------------- water & the river ----------------
  {
    id: 'jordan', type: 'water', name: { en: 'the Jordan', sv: 'Jordan' },
    lon: 35.555, lat: 32.10, focusKm: 90, ch: 1,
    aliases: { en: ['jordan', 'the jordan'], sv: ['jordan', 'jordanfloden'] },
  },
  {
    id: 'dead-sea', type: 'water', name: { en: 'Dead Sea', sv: 'Döda havet' },
    lon: 35.470, lat: 31.500,
  },
  {
    id: 'mediterranean', type: 'water', name: { en: 'Mediterranean Sea', sv: 'Medelhavet' },
    lon: 34.870, lat: 32.250,
  },
];

export const PLACE_BY_ID = new Map(PLACES.map((p) => [p.id, p]));
