const grid = document.getElementById("trick-grid");

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
    
grid.innerHTML = tricks.map(createCard).join("");