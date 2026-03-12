const fragen = [
  { typ: "mc", frage: "Ein Bauer hat 15 Schafe. Alle laufen in den Wald außer 9. Wie viele Schafe stehen noch auf der Weide?", antworten: ["15", "8", "9"], richtige: 2 },
  { typ: "mc", frage: "Welcher Berg war vor Entdeckung des Mount Everest der höchste Berg?", antworten: ["Mount Everest", "K2", "Kangchenjunga"], richtige: 0 },
  { typ: "mc", frage: "Während eines Halbmarathons überholt Tom Peter, der auf dem zweiten Platz war. Auf welchem Platz ist Tom jetzt?", antworten: ["1.", "2.", "3."], richtige: 1 },
  { typ: "mc", frage: "Welche Maus läuft auf 2 Beinen?", antworten: ["keine", "jede", "die von Disney"], richtige: 2 },
  { typ: "mc", frage: "Wasser verhält sich zu Rohr wie … zu Kabel?", antworten: ["Draht", "Wärme", "Strom"], richtige: 0 },
  { typ: "mc", frage: "Johannes Eltern haben 3 Kinder: Tick, Trick und?", antworten: ["Truck", "Track", "Johannes"], richtige: 2 },
  { typ: "mc", frage: "Wie viele Monate im Jahr haben 28 Tage?", antworten: ["1", "2", "3", "5", "12"], richtige: 4 },
  { typ: "mc", frage: "Bern schreibt man am Anfang mit \"B\" und hinten mit \"H\". Stimmt das?", antworten: ["Vielleicht", "Ja", "keine Ahnung", "Nein"], richtige: 1 },
  { typ: "mc", frage: "1 Kilo Federn oder 1 Kilo Gold?", antworten: ["1 Kilo Federn", "1 Kilo Gold", "beides gleich"], richtige: 2 },
  { typ: "mc", frage: "Wenn ein Flugzeug in Deutschland abstürzt, wo begräbt man die Überlebenden?", antworten: ["In Deutschland", "Nirgendwo", "Im Meer"], richtige: 1 },
  { typ: "mc", frage: "Was wird immer größer, je mehr man wegnimmt?", antworten: ["Ein Loch", "Ein Berg", "Eine Lüge"], richtige: 0 },
  { typ: "mc", frage: "Wie viele Buchstaben hat das Wort 'Alphabet'?", antworten: ["26", "27", "8"], richtige: 2 },
  { typ: "text", frage: "Wie heißt die Hauptstadt von Frankreich?", richtige: ["paris"] },
  { typ: "text", frage: "Wie viele Tage hat der Februar in einem normalen Jahr?", richtige: ["28"] },
  { typ: "text", frage: "In welchem Jahr begann der Zweite Weltkrieg?", richtige: ["1939"] },
  { typ: "text", frage: "Was ist die Quadratwurzel von 9?", richtige: ["3"] },
  { typ: "tf", frage: "Die Sonne ist ein Planet.", richtige: false },
  { typ: "tf", frage: "Ein Wochenende hat zwei Tage.", richtige: true },
  { typ: "tf", frage: "Ein Jahr hat 365 Tage.", richtige: true },
  { typ: "tf", frage: "Ein Rechteck hat immer vier Seiten.", richtige: true },
  { typ: "tf", frage: "Der Mount Everest ist kleiner als der Kilimandscharo.", richtige: false },
  { typ: "mc", frage: "Wie viele Sekunden hat eine Minute?", antworten: ["60", "100", "30"], richtige: 0 },
{ typ: "mc", frage: "Was ist 5 + 7?", antworten: ["11", "12", "13"], richtige: 1 },
{ typ: "mc", frage: "Welche Farbe entsteht aus Blau und Gelb?", antworten: ["Grün", "Lila", "Orange"], richtige: 0 },
{ typ: "mc", frage: "Wie viele Kontinente gibt es auf der Erde?", antworten: ["5", "6", "7"], richtige: 2 },
{ typ: "mc", frage: "Welches Tier ist ein Säugetier?", antworten: ["Hai", "Delfin", "Adler"], richtige: 1 },
{ typ: "mc", frage: "Wie viele Stunden hat ein Tag?", antworten: ["12", "24", "36"], richtige: 1 },
{ typ: "mc", frage: "Welches Metall ist flüssig bei Raumtemperatur?", antworten: ["Eisen", "Quecksilber", "Kupfer"], richtige: 1 },
{ typ: "mc", frage: "Wie viele Seiten hat ein Dreieck?", antworten: ["3", "4", "5"], richtige: 0 },
{ typ: "mc", frage: "Welcher Planet ist der Sonne am nächsten?", antworten: ["Merkur", "Mars", "Venus"], richtige: 0 },
{ typ: "mc", frage: "Wie viele Minuten hat eine Stunde?", antworten: ["30", "60", "90"], richtige: 1 },

{ typ: "text", frage: "Wie heißt die Hauptstadt von Deutschland?", richtige: ["berlin"] },
{ typ: "text", frage: "Wie viele Kontinente gibt es?", richtige: ["7"] },
{ typ: "text", frage: "Wie viele Seiten hat ein Quadrat?", richtige: ["4"] },
{ typ: "text", frage: "Welcher Planet wird auch der rote Planet genannt?", richtige: ["mars"] },
{ typ: "text", frage: "Wie viele Tage hat eine Woche?", richtige: ["7"] },
{ typ: "text", frage: "Wie viele Stunden hat ein Tag?", richtige: ["24"] },
{ typ: "text", frage: "Wie lautet die Formel für Wasser?", richtige: ["h2o"] },
{ typ: "text", frage: "Wie viele Minuten hat eine Stunde?", richtige: ["60"] },
{ typ: "text", frage: "Welcher Kontinent ist Deutschland zugeordnet?", richtige: ["europa"] },
{ typ: "text", frage: "Wie viele Beine hat eine Spinne?", richtige: ["8"] },

{ typ: "tf", frage: "Ein Dreieck hat drei Seiten.", richtige: true },
{ typ: "tf", frage: "Die Erde ist flach.", richtige: false },
{ typ: "tf", frage: "Wasser gefriert bei 0 Grad Celsius.", richtige: true },
{ typ: "tf", frage: "Ein Jahr hat 12 Monate.", richtige: true },
{ typ: "tf", frage: "Die Sonne dreht sich um die Erde.", richtige: false },
{ typ: "tf", frage: "Ein Quadrat hat vier gleich lange Seiten.", richtige: true },
{ typ: "tf", frage: "Ein Kilometer sind 100 Meter.", richtige: false },
{ typ: "tf", frage: "Ein Mensch hat normalerweise zwei Augen.", richtige: true },
{ typ: "tf", frage: "Die Hauptstadt von Italien ist Rom.", richtige: true },
{ typ: "tf", frage: "Ein Tag hat 48 Stunden.", richtige: false },
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

function normalize(text) {
  return String(text).trim().toLowerCase();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let aktuelleFrage = 0;
let punkte = 0;
let startTime = null;
const antwortenLog = [];

function showFrage() {
  const frage = quizFragen[aktuelleFrage];
  frageEl.innerText = frage.frage;
  antwortenEl.innerHTML = "";

  if (frage.typ === "mc") {
    frage.antworten.forEach((text, idx) => {
      const btn = document.createElement("button");
      btn.innerText = text;
      btn.addEventListener("click", () => pruefeAntwort(idx));
      antwortenEl.appendChild(btn);
    });
    return;
  }

  if (frage.typ === "tf") {
    ["Wahr", "Falsch"].forEach((text) => {
      const btn = document.createElement("button");
      btn.innerText = text;
      btn.addEventListener("click", () => pruefeAntwort(text));
      antwortenEl.appendChild(btn);
    });
    return;
  }

  if (frage.typ === "text") {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Antwort eingeben";
    input.autocomplete = "off";
    input.className = "text-antwort";

    const btn = document.createElement("button");
    btn.innerText = "Prüfen";
    btn.addEventListener("click", () => pruefeAntwort(input.value));

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        pruefeAntwort(input.value);
      }
    });

    antwortenEl.append(input, btn);
    input.focus();
    return;
  }
}

function pruefeAntwort(selection) {
  if (startTime === null) {
    startTime = Date.now();
  }

  const frage = quizFragen[aktuelleFrage];
  let korrekt = false;
  let gewählteAntwort = "";
  let richtigeAntwort = "";

  if (frage.typ === "mc") {
    korrekt = selection === frage.richtige;
    gewählteAntwort = frage.antworten[selection] ?? "(keine)";
    richtigeAntwort = frage.antworten[frage.richtige];
  } else if (frage.typ === "tf") {
    gewählteAntwort = selection;
    const antwortBool = selection === "Wahr";
    korrekt = antwortBool === frage.richtige;
    richtigeAntwort = frage.richtige ? "Wahr" : "Falsch";
  } else if (frage.typ === "text") {
    gewählteAntwort = (selection ?? "").trim();
    const normalisiert = normalize(gewählteAntwort);
    const akzeptierte = (frage.richtige || []).map(normalize);
    korrekt = akzeptierte.includes(normalisiert);
    richtigeAntwort = (frage.richtige || []).join(" / ");
  }

  if (korrekt) {
    punkte++;
  }

  antwortenLog.push({
    frage: frage.frage,
    gewählteAntwort,
    richtigeAntwort,
    korrekt,
  });

  aktuelleFrage++;
  if (aktuelleFrage < quizFragen.length) {
    showFrage();
  } else {
    zeigeErgebnis();
  }
}

function zeigeErgebnis() {
  frageEl.innerText = "Test beendet";
  antwortenEl.innerHTML = "";

const quote = punkte === quizFragen.length
    ? "Perfekt! Alle Antworten sind richtig."
    : punkte === 0
    ? "Kein Problem, einfach nochmal versuchen."
    : "";

  const prozent = (punkte / quizFragen.length) * 100;
  const gruppe = prozent >= 80 ? "high" : prozent >= 50 ? "mid" : "low";

  const elapsed = startTime ? Date.now() - startTime : 0;
  const minutes = Math.floor(elapsed / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  const timeText = `${minutes}m ${seconds}s`;

  const summary = `<strong>Du hast ${punkte} von ${quizFragen.length} Fragen richtig.</strong> — ${rand(messages[gruppe])}<br><em class="timer">Benötigte Zeit: <strong>${timeText}</strong></em>${quote ? "<br>" + quote : ""}`;

  const details = antwortenLog
    .map((eintrag) => {
      const icon = eintrag.korrekt ? "✅" : "❌";
      return `
        <li>
          ${icon} ${eintrag.frage}<br>
          Deine Antwort: <strong>${eintrag.gewählteAntwort}</strong><br>
          Richtige Antwort: <strong>${eintrag.richtigeAntwort}</strong>
        </li>`;
    })
    .join("");

  ergebnisEl.innerHTML = `
    ${summary}
    <ul class="ergebnis-liste">${details}</ul>
    <button id="restart">Nochmal</button>
  `;
  ergebnisEl.classList.add("visible");

  get("restart").addEventListener("click", () => window.location.reload());
}

const MAX_FRAGEN = 20;
const quizFragen = shuffle([...fragen]).slice(0, Math.min(MAX_FRAGEN, fragen.length));

showFrage();
