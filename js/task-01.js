const categoriesList = document.querySelector("categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");

console.log("Number of categorie:", categoriesItems.length);

categoriesItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const elementsList = item.querySelectorAll("li");

  console.log("Category: ${categoryName}");
  console.log("Elements: ${elementsList.lenght}");
});
