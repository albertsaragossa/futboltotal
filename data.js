// LLIGUES DEL JOC. Jugadors, entrenadors, estadis i fotos es carreguen sols de Wikidata / Wikimedia Commons.
// Per afegir una lliga: una línia nova amb  id (únic), name (el que es mostra)  i
//   q: "Q…" (identificador de la lliga a Wikidata, el més fiable)  O  s: "nom a la Viquipèdia en anglès" (el joc el busca).
const LEAGUES = [
  { id: "es", name: "LaLiga",               q: "Q324867" },
  { id: "en", name: "Premier League",       q: "Q9448" },
  { id: "it", name: "Serie A",              q: "Q15804" },
  { id: "de", name: "Bundesliga",           q: "Q82595" },
  { id: "fr", name: "Ligue 1",              q: "Q13394" },
  { id: "nl", name: "Eredivisie",           s: "Eredivisie" },
  { id: "pt", name: "Primeira Liga",        s: "Primeira Liga" },
  { id: "be", name: "Pro League (Bèlgica)", s: "Belgian Pro League" },
  { id: "tr", name: "Süper Lig",            s: "Süper Lig" },
  { id: "sc", name: "Scottish Premiership", s: "Scottish Premiership" },
  { id: "br", name: "Brasileirão",          s: "Campeonato Brasileiro Série A" },
  { id: "ar", name: "Liga Argentina",       s: "Argentine Primera División" },
  { id: "us", name: "MLS",                  s: "Major League Soccer" },
  { id: "mx", name: "Liga MX",              s: "Liga MX" },
  { id: "sa", name: "Saudi Pro League",     s: "Saudi Pro League" },
  { id: "jp", name: "J1 League",            s: "J1 League" }
];
