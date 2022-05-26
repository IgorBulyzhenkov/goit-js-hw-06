let counterValue = 0;

const decrEl = document.querySelector('[data-action="decrement"]');
const incrEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

function onClickAddBtn() {
  counterValue += 1;
  valueText();
}
function onClickSubtractionBtn() {
  counterValue -= 1;
  valueText();
}
function valueText() {
  valueEl.textContent = counterValue;
}

decrEl.addEventListener("click", onClickSubtractionBtn);
incrEl.addEventListener("click", onClickAddBtn);
