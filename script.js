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

const btnZeroRuns = document.querySelector("#btn-0-runs");
const btnOneRun = document.querySelector("#btn-1-runs");
const btnTwoRuns = document.querySelector("#btn-2-runs");
const btnThreeRuns = document.querySelector("#btn-3-runs");
const btnFourRuns = document.querySelector("#btn-4-runs");
const btnSixRuns = document.querySelector("#btn-6-runs");
const btnWicket = document.querySelector("#btn-wicket");
const btnCustom = document.querySelector("#btn-custom");
const btnWide = document.querySelector("#btn-wide");
const btnNoBall = document.querySelector("#btn-no-ball");
const btnBye = document.querySelector("#btn-bye");
const btnLegBye = document.querySelector("#btn-leg-bye");
const btnUndo = document.querySelector("#btn-undo");
const btnSubmitInModal = document.querySelector("#btn-submit");

/*----------------------------- myModal ------------------------------------------*/

const modal = document.querySelector("#myModal");
const inputField = document.querySelector("#inputField");

/*------------------------------------------------- main ------------------------------------------------------*/

let totalRuns = 0;
let totalBallsBowled = 0;
let currentRunRate = 0.0;
let wicketsFallen = 0;

btnZeroRuns.addEventListener("click", function () {
  progressOver();
  updateCurrentRunRate();
});

btnOneRun.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 1;
  runsEl.innerText = runsAfter;
  totalRuns++;

  progressOver();
  updateCurrentRunRate();
});

btnTwoRuns.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 2;
  runsEl.innerText = runsAfter;
  totalRuns += 2;

  progressOver();
  updateCurrentRunRate();
});

btnThreeRuns.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 3;
  runsEl.innerText = runsAfter;
  totalRuns += 3;

  progressOver();
  updateCurrentRunRate();
});

btnFourRuns.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 4;
  runsEl.innerText = runsAfter;
  totalRuns += 4;

  progressOver();
  updateCurrentRunRate();
});

btnSixRuns.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 6;
  runsEl.innerText = runsAfter;
  totalRuns += 6;

  progressOver();
  updateCurrentRunRate();
});

btnCustom.addEventListener("click", function () {
  openCustomModal();
  progressOver();
});

btnSubmitInModal.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  const userInput = parseInt(inputField.value);
  let runsAfter = runsBefore + userInput;
  runsEl.innerText = runsAfter;
  totalRuns += userInput;

  updateCurrentRunRate();

  modal.style.display = "none";
});

btnWide.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 1;
  runsEl.innerText = runsAfter;
  totalRuns++;

  countExtras("wide");
  updateCurrentRunRate();
});

btnNoBall.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 1;
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
  let totalRuns = parseInt(runsEl.textContent);

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
