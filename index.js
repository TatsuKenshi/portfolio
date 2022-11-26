const burger = document.querySelector(".burger");
const narrowMenu = document.querySelector(".narrow-menu");
const narrowMenuItems = document.querySelectorAll(".narrow-menu-item");
const categoryButtons = document.querySelectorAll(".card-btn");
const infoSectionItems = document.querySelectorAll(".info-section");
const homeBtn = document.querySelector(".back-home-btn");
const homeBtnImg = document.querySelector("#homeIcon");

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

window.onscroll = function () {
  visibleScrollButton();
};

const visibleScrollButton = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    homeBtn.classList.remove("no-display");
  } else {
    homeBtn.classList.add("no-display");
  }
};

homeBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
