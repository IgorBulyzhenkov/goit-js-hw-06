const arrEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${arrEl.length}`);

arrEl.forEach((item, index, array) => {
  console.log(`Category: ${array[index].querySelector("h2").textContent}`);
  console.log(`Element: ${item.querySelectorAll("li").length}`);
});
