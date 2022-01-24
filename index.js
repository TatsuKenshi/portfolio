const burger = document.querySelector(".burger");
const narrowMenu = document.querySelector(".narrow-menu");
const narrowMenuItems = document.querySelectorAll(".narrow-menu-item");

burger.addEventListener("click", function () {
  narrowMenu.classList.toggle("no-display");
});

narrowMenuItems.forEach((item) => {
  item.addEventListener("click", function () {
    narrowMenu.classList.toggle("no-display");
  });
});
