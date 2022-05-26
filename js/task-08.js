const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();
  const eventTarget = event.currentTarget;
  const formEl = eventTarget.elements;
  const valueForms = {
    email: formEl.email.value.trim(),
    password: formEl.password.value.trim(),
  };
  const formData = new FormData(eventTarget);
  valueForms.email && valueForms.password
    ? formData
    : alert("Заповніть всі поля для вводу !");
  console.log(valueForms);
  console.log(formData);
  eventTarget.reset();
}
 console.dir(form);

form.addEventListener("submit", onFormSubmit);
