const fragen = [
  { frage: "Ein Bauer hat 15 Schafe. Alle laufen in den Wald außer 9. Wie viele Schafe stehen noch auf der Weide?", antworten: ["15", "8", "9"], richtige: 2 },
  { frage: "Welcher Berg war vor Entdeckung des Mount Everest der höchste Berg?", antworten: ["Mount Everest", "K2", "Kangchenjunga"], richtige: 0 },
  { frage: "Während eines Halbmarathons überholt Tom Peter, der auf dem zweiten Platz war. Auf welchem Platz ist Tom jetzt?", antworten: ["1.", "2.", "3."], richtige: 1 },
  { frage: "Welche Maus läuft auf 2 Beinen?", antworten: ["keine", "jede", "die von Disney"], richtige: 2 },
  { frage: "Wasser verhält sich zu Rohr wie … zu Kabel?", antworten: ["Draht", "Wärme", "Strom"], richtige: 0 },
  { frage: "Johannes Eltern haben 3 Kinder: Tick, Trick und?", antworten: ["Truck", "Track", "Johannes"], richtige: 2 },
  { frage: "Wie viele Monate im Jahr haben 28 Tage?", antworten: ["1", "2", "3", "5", "12"], richtige: 4 },
  { frage: "Bern schreibt man am Anfang mit \"B\" und hinten mit \"H\". Stimmt das?", antworten: ["Vielleicht", "Ja", "keine Ahnung", "Nein"], richtige: 1 },
  { frage: "1 Kilo Federn oder 1 Kilo Gold?", antworten: ["1 Kilo Federn", "1 Kilo Gold", "beides gleich"], richtige: 2 },
  { frage: "Wenn ein Flugzeug in Deutschland abstürzt, wo begräbt man die Überlebenden?", antworten: ["In Deutschland", "Nirgendwo", "Im Meer"], richtige: 1 },
  { frage: "Was wird immer größer, je mehr man wegnimmt?", antworten: ["Ein Loch", "Ein Berg", "Eine Lüge"], richtige: 0 },
  { frage: "Wie viele Buchstaben hat das Wort 'Alphabet'?", antworten: ["26", "27", "8"], richtige: 2 },
];

const get = (id) => document.getElementById(id);
const frageEl = get("frage");
const antwortenEl = get("antworten");
const ergebnisEl = get("ergebnis");

const messages = {
  low: [
    "War ein schwerer Start, aber beim nächsten Mal geht's besser!",
    "Kopf hoch, Übung macht den Meister.",
    "Nicht schlimm – einfach nochmal versuchen!",
  ],
  mid: [
    "Gute Arbeit! Mit ein bisschen Übung holst du noch mehr Punkte.",
    "Nicht schlecht – du hast schon ein gutes Gefühl dafür.",
    "Fast da! Noch ein bisschen dranbleiben, und es klappt.",
  ],
  high: [
    "Top! Du hast das richtig gut gemacht.",
    "Sehr stark! Das war eine richtig gute Leistung.",
    "Perfekt! So bleibt der Wissensstand erhalten.",
  ],
};

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let aktuelleFrage = 0;
let punkte = 0;

function showFrage() {
  const frage = fragen[aktuelleFrage];
  frageEl.innerText = frage.frage;
  antwortenEl.innerHTML = "";

  frage.antworten.forEach((text, idx) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.addEventListener("click", () => pruefeAntwort(idx));
    antwortenEl.appendChild(btn);
  });
}

function pruefeAntwort(idx) {
  if (idx === fragen[aktuelleFrage].richtige) {
    punkte++;
  }

  aktuelleFrage++;
  if (aktuelleFrage < fragen.length) {
    showFrage();
  } else {
    zeigeErgebnis();
  }
}

function zeigeErgebnis() {
  frageEl.innerText = "Test beendet";
  const gruppe = punkte >= 5 ? "high" : punkte >= 3 ? "mid" : "low";
  ergebnisEl.innerText = `Punkte: ${punkte} — ${rand(messages[gruppe])}`;
  ergebnisEl.classList.add("visible");

  setTimeout(() => {
    window.location.reload();
  }, 10_000);
}

shuffle(fragen);
showFrage();
