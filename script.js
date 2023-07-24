const runsEl = document.querySelector("#runs");
const wicketsEl = document.querySelector("#wickets");
const over = document.querySelector("#current-over");

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

/*----------------------------- myModal ------------------------------------------*/

const modal = document.querySelector("#myModal");
const inputField = document.querySelector("#inputField");

/*------------------------------------------------- main ------------------------------------------------------*/

btnOneRun.addEventListener("click", function () {
  progressOver();
});

btnOneRun.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 1;
  runsEl.innerText = runsAfter;

  progressOver();
});

btnTwoRuns.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 2;
  runsEl.innerText = runsAfter;

  progressOver();
});

btnThreeRuns.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 3;
  runsEl.innerText = runsAfter;

  progressOver();
});

btnFourRuns.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 4;
  runsEl.innerText = runsAfter;

  progressOver();
});

btnSixRuns.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 6;
  runsEl.innerText = runsAfter;

  progressOver();
});

btnCustom.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  modal.style.display = "block";
  inputField.value = "";

  // Handle the submit button click
  document.querySelector("#btn-submit").addEventListener("click", function () {
    const userInput = inputField.value;
    let runsAfter = runsBefore + parseInt(userInput);
    runsEl.innerText = runsAfter;

    progressOver();

    // Hide the modal
    modal.style.display = "none";
  });

  // Handle the close button click
  document.querySelector(".close").addEventListener("click", function () {
    // Hide the modal
    modal.style.display = "none";
  });
});

btnWide.addEventListener("click", function () {
  let runsBefore = parseInt(runsEl.textContent);
  let runsAfter = runsBefore + 1;
  runsEl.innerText = runsAfter;

  addExtras("WD");
});

btnWicket.addEventListener("click", function () {
  let wicketsBefore = parseInt(wicketsEl.textContent);
  wicketsEl.innerText = wicketsBefore + 1;

  progressOver();
});

function progressOver() {}
function addExtras(ball) {}
