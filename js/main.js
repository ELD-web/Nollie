// Shows the number of landed stances in the navbar on every page.
function updateNavbarCounter() {
  const counter = document.getElementById("tracker-count");
  if (!counter) return;

  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("nollieProgress")) || {};
  } catch (error) {
    saved = {};
  }

  const total = tricks.length * stances.length;
  counter.textContent = Object.keys(saved).length + "/" + total;
}

updateNavbarCounter();

// Mobile menu
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav-links");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}