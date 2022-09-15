const burger = document.querySelector(".burger");
const narrowMenu = document.querySelector(".narrow-menu");
const narrowMenuItems = document.querySelectorAll(".narrow-menu-item");
const categoryButtons = document.querySelectorAll(".card-btn");
const infoSectionItems = document.querySelectorAll(".info-section");

console.log(categoryButtons);

burger.addEventListener("click", function () {
  narrowMenu.classList.toggle("no-display");
});

narrowMenuItems.forEach((item) => {
  item.addEventListener("click", function () {
    narrowMenu.classList.toggle("no-display");
  });
});

categoryButtons.forEach((item) => {
  item.addEventListener("click", function (e) {
    infoSectionItems.forEach((item) => {
      item.classList.add("no-display");
    });

    let newInfoSectionItems = [...infoSectionItems];

    const showCategory = newInfoSectionItems.find((infoItem) => {
      return infoItem.id === e.target.innerText.toLowerCase();
    });

    showCategory.classList.remove("no-display");
  });
});
