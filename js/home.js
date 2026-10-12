const deckImage = document.getElementById("deck-image");
const deckCaption = document.getElementById("deck-caption");
const flipBtn = document.getElementById("flip-btn");

const deckViews = {
  horizontal: {
    src: "Vertical Deck.jpg",
    alt: "Fingerboard deck with a samurai skull design, shown horizontally",
    caption: "Vertical view"
  },
  vertical: {
    src: "Horizontal Deck.jpg",
    alt: "Fingerboard deck with a samurai skull design, shown vertically",
    caption: "Horizontal view"
  }
};

let isHorizontal = true;

flipBtn.addEventListener("click", function () {
  deckImage.classList.add("swapping");

  setTimeout(function () {
    isHorizontal = !isHorizontal;
    const view = isHorizontal ? deckViews.horizontal : deckViews.vertical;

    deckImage.src = view.src;
    deckImage.alt = view.alt;
    deckCaption.textContent = view.caption;
    deckImage.classList.remove("swapping");
  }, 250);
});