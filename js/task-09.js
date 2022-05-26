function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const btnEl = document.querySelector(".change-color");
const paragraph = document.querySelector(".color");


function onBodyBackgroundColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  paragraph.textContent = color;
}

btnEl.addEventListener("click", onBodyBackgroundColor);
