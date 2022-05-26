const inpEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inpEl.addEventListener("input", event => {
  spanEl.textContent = event.currentTarget.value || "Anonymous";
});