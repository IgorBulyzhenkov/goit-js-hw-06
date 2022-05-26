let counterValue = 0;

const decrEl = document.querySelector('[data-action="decrement"]');

const incrEl = document.querySelector('[data-action="increment"]');

const valueEl = document.querySelector("#value");

decrEl.addEventListener("click", onClickSubtractionBtn);

incrEl.addEventListener("click", onClickAddBtn);

function onClickAddBtn() {
  valueEl.textContent = counterValue += 1;
}

function onClickSubtractionBtn() {
  valueEl.textContent = counterValue -= 1;
}
