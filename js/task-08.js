const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (event.target.elements.email || event.target.elements.password !== " ") {
    alert("Заповніть всі поля для вводу");
  } else {
    console.log(event.currentTarget.elements);
  }
}
