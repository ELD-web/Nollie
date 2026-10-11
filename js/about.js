// Builds the video credits list from the channel names in tricks-data.js
const creditList = document.getElementById("credit-list");

// Group the trick names by channel: { "CJ Morshed": ["Shove-it", ...], ... }
const channels = {};
tricks.forEach(function (trick) {
  if (!trick.channel) return;
  if (!channels[trick.channel]) channels[trick.channel] = [];
  channels[trick.channel].push(trick.name);
});

creditList.innerHTML = Object.keys(channels).map(function (name) {
  return `<li><strong>${name}</strong> – ${channels[name].join(", ")}</li>`;
}).join("");

// ===== Contact form validation =====
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

// Show or clear an error message under a field
function setError(fieldId, message) {
  document.getElementById(fieldId + "-error").textContent = message;
  document.getElementById(fieldId).classList.toggle("invalid", message !== "");
}

// Each function returns an error message, or "" if the field is fine
function checkName(value) {
  if (value.trim() === "") return "Please enter your name.";
  if (value.trim().length < 2) return "Your name must be at least 2 characters.";
  return "";
}

function checkEmail(value) {
  if (value.trim() === "") return "Please enter your email address.";
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(value.trim())) return "Please enter a valid email, like name@example.com.";
  return "";
}

function checkTopic(value) {
  if (value === "") return "Please choose a topic.";
  return "";
}

function checkMessage(value) {
  if (value.trim() === "") return "Please write a message.";
  if (value.trim().length < 10) return "Your message must be at least 10 characters.";
  return "";
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading
  successMessage.hidden = true;

  const errors = [
    checkName(form.name.value),
    checkEmail(form.email.value),
    checkTopic(form.topic.value),
    checkMessage(form.message.value)
  ];

  setError("name", errors[0]);
  setError("email", errors[1]);
  setError("topic", errors[2]);
  setError("message", errors[3]);

  // If every error is "", the form is valid
  if (errors.every(function (e) { return e === ""; })) {
    form.reset();
    successMessage.hidden = false;
  }
});

// Clear a field's error as soon as the user starts fixing it
form.addEventListener("input", function (event) {
  const id = event.target.id;
  if (id) setError(id, "");
});