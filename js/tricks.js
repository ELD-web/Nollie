// Builds the trick cards and handles search, category, and difficulty filtering.
const grid = document.getElementById("trick-grid");
const searchBox = document.getElementById("search");
const categoryBox = document.getElementById("category-filters");
const difficultyBox = document.getElementById("difficulty-filters");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("no-results");

// Current filter settings
let searchText = "";
let selectedCategory = "All";
let selectedDifficulty = "All";

function createCard(trick) {
  return `
    <article class="trick-card">
      <div class="card-top">
        <span class="card-category">${trick.category}</span>
        <span class="badge badge-${trick.difficulty.toLowerCase()}">${trick.difficulty}</span>
      </div>
      <h3>${trick.name}</h3>
      <p>${trick.description}</p>
      <a href="https://www.youtube.com/watch?v=${trick.video}" target="_blank" rel="noopener" class="card-link">Watch tutorial →</a>
    </article>`;
}

//search, category, and difficulty
function showTricks() {
  const filtered = tricks.filter(function (trick) {
    const matchesSearch = trick.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === "All" || trick.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || trick.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  grid.innerHTML = filtered.map(createCard).join("");
  resultCount.textContent = "Showing " + filtered.length + " of " + tricks.length + " tricks";
  noResults.hidden = filtered.length > 0;
}

function createFilterButtons(container, names, onPick) {
  names.forEach(function (name) {
    const button = document.createElement("button");
    button.textContent = name;
    button.className = "pill" + (name === "All" ? " active" : "");

    button.addEventListener("click", function () {
      container.querySelectorAll(".pill").forEach(function (b) {
        b.classList.remove("active");
      });
      button.classList.add("active");
      onPick(name);
      showTricks();
    });

    container.appendChild(button);
  });
}

// Category buttons come from the data, plus "All"
const categories = ["All", ...new Set(tricks.map(function (t) { return t.category; }))];
createFilterButtons(categoryBox, categories, function (name) {
  selectedCategory = name;
});

// Difficulty buttons
createFilterButtons(difficultyBox, ["All", "Beginner", "Intermediate", "Advanced"], function (name) {
  selectedDifficulty = name;
});

// Update the list on every keystroke in the search box
searchBox.addEventListener("input", function () {
  searchText = searchBox.value;
  showTricks();
});

showTricks();