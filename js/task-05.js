const inpEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inpEl.addEventListener("input", onInputText);

function onInputText(event) {
    spanEl.textContent = event.currentTarget.value.trim() || "Anonymous";
}