const runsEl = document.querySelector("#runs");
const wicketsEl = document.querySelector("#wickets");
const overEl = document.querySelector("#current-over");
const ballEl = document.querySelector("#current-ball");
const currentRunRateEl = document.querySelector("#current-runrate");
const extrasTotalEl = document.querySelector("#extras-total");
const wideCountEl = document.querySelector("#wide-count");
const noBallCountEl = document.querySelector("#no-ball-count");
const byeCountEl = document.querySelector("#bye-count");
const legByeCountEl = document.querySelector("#leg-bye-count");
const tossWinnerEl = document.querySelector("#toss-winner");
const battingTeamNameEl = document.querySelector("#batting-team-name");

/*----------------------------- buttons ------------------------------------------*/

const btnWicket = document.querySelector("#btn-wicket");
const btnCustom = document.querySelector("#btn-custom");
const btnWide = document.querySelector("#btn-wide");
const btnNoBall = document.querySelector("#btn-no-ball");
const btnBye = document.querySelector("#btn-bye");
const btnLegBye = document.querySelector("#btn-leg-bye");
const btnUndo = document.querySelector("#btn-undo");
const btnSubmitInModal = document.querySelector(".btn-submit");

/*----------------------------- myModal ------------------------------------------*/

const modal = document.querySelector("#myModal");
const inputField = document.querySelector("#inputField");

/*------------------------------------------------- main ------------------------------------------------------*/

let totalRuns = 0;
let totalBallsBowled = 0;
let currentRunRate = 0.0;
let wicketsFallen = 0;

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-run")) {
    const runsBefore = totalRuns;
    const runsScored = parseInt(event.target.textContent);
    const runsAfter = runsBefore + runsScored;
    runsEl.innerText = runsAfter;
    totalRuns += runsScored;

    progressOver();
    updateCurrentRunRate();
  }
});

btnCustom.addEventListener("click", function () {
  openCustomModal();
  progressOver();
});

btnSubmitInModal.addEventListener("click", function () {
  const runsBefore = totalRuns;
  const userInput = parseInt(inputField.value);
  if (!isNaN(userInput)) {
    const runsAfter = runsBefore + userInput;
    runsEl.innerText = runsAfter;
    totalRuns += userInput;
  } else {
    runsEl.innerText = runsBefore;
  }

  updateCurrentRunRate();

  modal.style.display = "none";
});

btnWide.addEventListener("click", function () {
  const runsBefore = totalRuns;
  const runsAfter = runsBefore + 1;
  runsEl.innerText = runsAfter;
  totalRuns++;

  countExtras("wide");
  updateCurrentRunRate();
});

btnNoBall.addEventListener("click", function () {
  const runsBefore = totalRuns;
  const runsAfter = runsBefore + 1;
  runsEl.innerText = runsAfter;
  totalRuns++;

  countExtras("no-ball");
  openCustomModal();
  updateCurrentRunRate();
});

btnBye.addEventListener("click", function () {
  countExtras("bye");
  openCustomModal();
  progressOver();
  updateCurrentRunRate();
});

btnLegBye.addEventListener("click", function () {
  countExtras("leg-bye");
  openCustomModal();
  progressOver();
  updateCurrentRunRate();
});

btnWicket.addEventListener("click", function () {
  let wicketsBefore = parseInt(wicketsEl.textContent);
  wicketsEl.innerText = wicketsBefore + 1;
  wicketsFallen++;

  if (wicketsFallen === 10) {
    setTimeout(function () {
      alert("Innings Over!");
      const userConfirmationToSwitch = confirm("Switch sides?");
    }, 100);

    if (userConfirmationToSwitch) {
      switchSides();
    }
  }

  progressOver();
  updateCurrentRunRate();
});

/* ------------------------------------ Functions ---------------------------------------------*/

function progressOver() {
  totalBallsBowled += 1;

  let overCount = Math.floor(totalBallsBowled / 6);
  let ballCount = totalBallsBowled % 6;

  overEl.innerText = overCount;
  ballEl.innerText = ballCount;
}

function updateCurrentRunRate() {
  if (totalBallsBowled === 0) {
    return 0.0;
  } else {
    let oversDone = totalBallsBowled / 6;
    currentRunRate = totalRuns / oversDone;
  }

  currentRunRateEl.innerText = currentRunRate.toFixed(2);
}

function countExtras(ball) {
  let extrasTotal = parseInt(extrasTotalEl.textContent);
  extrasTotalEl.innerText = extrasTotal + 1;

  if (ball === "wide") {
    let wideCount = parseInt(wideCountEl.textContent);
    wideCountEl.innerText = wideCount + 1;
  } else if (ball === "no-ball") {
    let noBallCount = parseInt(noBallCountEl.textContent);
    noBallCountEl.innerText = noBallCount + 1;
  } else if (ball === "bye") {
    let byeCount = parseInt(byeCountEl.textContent);
    byeCountEl.innerText = byeCount + 1;
  } else if (ball === "leg-bye") {
    let legByeCount = parseInt(legByeCountEl.textContent);
    legByeCountEl.innerText = legByeCount + 1;
  }
}

function openCustomModal() {
  modal.style.display = "block";
  inputField.value = "";

  document.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none";
  });
}

function switchSides() {}
