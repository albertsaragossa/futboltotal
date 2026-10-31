// DADES DEL JOC — edita aquest fitxer per afegir jugadors, entrenadors i estadis.
// La foto es busca sola a Wikipedia/Wikimedia Commons a partir del nom (n). Només s'usen imatges amb llicència lliure.
// Opcional: w = títol exacte de la pàgina de Wikipedia si el nom és ambigu (ex. w: "Vinícius Júnior"); img = foto pròpia (ex. "img/foto.jpg").
// IMPORTANT: revisa equips i plantilles de la temporada actual (aquests són exemples).
const DATA = {
  leagues: {
    es: "LaLiga", en: "Premier League", it: "Serie A", de: "Bundesliga", fr: "Ligue 1"
  },
  teams: {
    es: ["Real Madrid","FC Barcelona","Atlético de Madrid","Athletic Club","Real Sociedad","Villarreal","Real Betis","Sevilla","Valencia","Girona","Celta de Vigo","Osasuna","Getafe","Rayo Vallecano","Mallorca","Espanyol","Alavés","Elche","Levante","Real Oviedo"],
    en: ["Arsenal","Aston Villa","Bournemouth","Brentford","Brighton","Chelsea","Crystal Palace","Everton","Fulham","Leeds United","Liverpool","Manchester City","Manchester United","Newcastle","Nottingham Forest","Sunderland","Tottenham","West Ham","Wolverhampton","Burnley"],
    it: ["Inter","AC Milan","Juventus","Napoli","Roma","Lazio","Atalanta","Fiorentina","Bologna","Torino","Genoa","Udinese","Cagliari","Lecce","Parma","Como","Verona","Sassuolo","Cremonese","Pisa"],
    de: ["Bayern Munic","Borussia Dortmund","Bayer Leverkusen","RB Leipzig","Eintracht Frankfurt","VfB Stuttgart","Wolfsburg","Borussia M'gladbach","Friburg","Werder Bremen","Hoffenheim","Mainz 05","Augsburg","Union Berlin","Heidenheim","St. Pauli","Colònia","Hamburg"],
    fr: ["Paris Saint-Germain","Olympique de Marsella","Olympique de Lió","Mònaco","Lille","Niça","Rennes","Lens","Estrasburg","Nantes","Tolosa","Reims","Montpeller","Brest","Le Havre","Angers","Auxerre","Lorient"]
  },
  // l = codi de lliga, t = equip (ha de coincidir amb la llista d'equips), n = nom (només per tu, mai es mostra), pos = posició
  players: [
    { n: "Lamine Yamal", t: "FC Barcelona", l: "es", pos: "DAVANTER" },
    { n: "Vinícius Jr.", t: "Real Madrid", l: "es", pos: "DAVANTER" },
    { n: "Erling Haaland", t: "Manchester City", l: "en", pos: "DAVANTER" },
    { n: "Mohamed Salah", t: "Liverpool", l: "en", pos: "DAVANTER" },
    { n: "Lautaro Martínez", t: "Inter", l: "it", pos: "DAVANTER" },
    { n: "Harry Kane", t: "Bayern Munic", l: "de", pos: "DAVANTER" },
    { n: "Ousmane Dembélé", t: "Paris Saint-Germain", l: "fr", pos: "DAVANTER" }
  ],
  coaches: [
    { n: "Hansi Flick", t: "FC Barcelona", l: "es" },
    { n: "Arne Slot", t: "Liverpool", l: "en" },
    { n: "Vincent Kompany", t: "Bayern Munic", l: "de" },
    { n: "Luis Enrique", t: "Paris Saint-Germain", l: "fr" }
  ],
  stadiums: [
    { n: "Camp Nou", t: "FC Barcelona", l: "es" },
    { n: "Santiago Bernabéu", t: "Real Madrid", l: "es" },
    { n: "Anfield", t: "Liverpool", l: "en" },
    { n: "San Siro", t: "Inter", l: "it" },
    { n: "Allianz Arena", t: "Bayern Munic", l: "de" },
    { n: "Parc des Princes", t: "Paris Saint-Germain", l: "fr" }
  ]
};
