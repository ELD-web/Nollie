// Tracker Progress saves in Local Storage.
const STORAGE_KEY = "nollieProgress";
const list = document.getElementById("tracker-list");
const percentText = document.getElementById("progress-percent");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

// Saved progress looks like { "ollie-0": true, "kickflip-2": true }
// The key is the trick id + the stance number (0 to 3).
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {}; // nothing saved yet, or the saved data was damaged
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let progress = loadProgress();

function createRow(trick) {
  const boxes = stances.map(function (stance, index) {
    const key = trick.id + "-" + index;
    const checked = progress[key] ? "checked" : "";
    return `
      <label class="stance-box">
        <input type="checkbox" data-key="${key}" ${checked}>
        ${stance}
      </label>`;
  }).join("");

  return `
    <div class="tracker-row">
      <div class="tracker-info">
        <div class="card-top">
          <span class="card-category">${trick.category}</span>
          <span class="badge badge-${trick.difficulty.toLowerCase()}">${trick.difficulty}</span>
        </div>
        <h3>${trick.name}</h3>
      </div>
      <div class="stance-group">${boxes}</div>
    </div>`;
}

// Recalculate the overall percentage and the progress bar
function updateProgress() {
  const total = tricks.length * stances.length;
  const done = Object.keys(progress).length;
  const percent = Math.round((done / total) * 100);

  percentText.textContent = percent + "%";
  progressText.textContent = done + " of " + total + " stances landed";
  progressFill.style.width = percent + "%";

  updateNavbarCounter();
}

// One listener on the whole list catches every checkbox click
list.addEventListener("change", function (event) {
  const box = event.target;
  if (!box.matches("input[type='checkbox']")) return;

  if (box.checked) {
    progress[box.dataset.key] = true;
  } else {
    delete progress[box.dataset.key];
  }
  saveProgress();
  updateProgress();
});

list.innerHTML = tricks.map(createRow).join("");
updateProgress();

// Reset button: clear all saved progress after the user confirms
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", function () {
  const sure = confirm("Reset all your progress? This can't be undone.");
  if (!sure) return;

  progress = {};
  saveProgress();
  list.innerHTML = tricks.map(createRow).join("");
  updateProgress();
});