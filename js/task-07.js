const inpEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

function updateStileEl(element) {
  spanEl.style.cssText = `font-size: ${element.target.value}px`;
}
spanEl.style.fontSize = inpEl.value + 'px';

inpEl.addEventListener("input", updateStileEl);
