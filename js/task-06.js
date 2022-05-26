const inpEl = document.querySelector("#validation-input");
let inpLength = inpEl.dataset.length;
inpEl.addEventListener("blur", (event) => {
  const toInpEl = event.currentTarget.value;
  return toInpEl.length === inpLength
    ? changes("valid", "invalid")
    : changes("invalid", "valid");
});
function changes(addClass, removeClass) {
  inpEl.classList.add(addClass);
  inpEl.classList.remove(removeClass);
}
