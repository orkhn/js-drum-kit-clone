"use strict";
const keys = document.querySelectorAll(`.key`);

// Functions
function playSound(e) {
  e.preventDefault();
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  key.classList.add(`playing`);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove(`playing`);
}

// Event Listeners
keys.forEach((key) => {
  key.addEventListener(`transitionend`, removeTransition);
});

window.addEventListener(`keydown`, playSound);
