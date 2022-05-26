const inpEl = document.querySelector("#validation-input");
let inpLength = Number(inpEl.dataset.length);

function validateInput (element) {
    const toInpEl = element.currentTarget;
    return toInpEl.value.trim().length === inpLength
      ? changes("valid", "invalid")
      : changes("invalid", "valid");
};

function changes(addClass, removeClass) {
  inpEl.classList.add(addClass);
  inpEl.classList.remove(removeClass);
}


inpEl.addEventListener("blur", validateInput);

