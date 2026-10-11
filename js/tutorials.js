// Builds the tutorial cards from tricks-data.js, with search and category filter.
const grid = document.getElementById("video-grid");
const searchBox = document.getElementById("search");
const categorySelect = document.getElementById("category-select");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("no-results");

const tutorialTricks = tricks.filter(function (trick) {
  return !trick.hideInTutorials;
});

function createVideoCard(trick) {
  const title = trick.tutorialName || trick.name;
  const link = "https://www.youtube.com/watch?v=" + trick.video;
  // Show the credit only if a channel name
  const credit = trick.channel ? `<p class="credit">Tutorial by ${trick.channel}</p>` : "";

  return `
    <article class="video-card">
      <a href="${link}" target="_blank" rel="noopener" class="thumb">
        <img src="https://img.youtube.com/vi/${trick.video}/hqdefault.jpg" alt="${title}" loading="lazy">
        <span class="play">▶</span>
      </a>
      <div class="video-info">
        <div class="card-top">
          <span class="card-category">${trick.category}</span>
          <span class="badge badge-${trick.difficulty.toLowerCase()}">${trick.difficulty}</span>
        </div>
        <h3>${title}</h3>
        ${credit}
        <a href="${link}" target="_blank" rel="noopener" class="card-link">Watch tutorial →</a>
      </div>
    </article>`;
}

function showVideos() {
  const text = searchBox.value.toLowerCase();
  const category = categorySelect.value;

  const filtered = tutorialTricks.filter(function (trick) {
    const title = trick.tutorialName || trick.name;
    const matchesSearch = title.toLowerCase().includes(text);
    const matchesCategory = category === "All" || trick.category === category;
    return matchesSearch && matchesCategory;
  });

  grid.innerHTML = filtered.map(createVideoCard).join("");
  resultCount.textContent = "Showing " + filtered.length + " of " + tutorialTricks.length + " tutorials";
  noResults.hidden = filtered.length > 0;
}

// Fill the dropdown with "All" plus each category from the data
const categories = ["All", ...new Set(tricks.map(function (t) { return t.category; }))];
categories.forEach(function (name) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  categorySelect.appendChild(option);
});

searchBox.addEventListener("input", showVideos);
categorySelect.addEventListener("change", showVideos);

showVideos();