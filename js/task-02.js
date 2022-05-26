const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrEl = document.querySelector("#ingredients");

const markup = ingredients.map((item) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = item;
  return itemEl;
});
 arrEl.append(...markup);

