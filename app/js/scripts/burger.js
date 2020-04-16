const burger = document.querySelector(".nav-burger");
const navigation = document.querySelector(".header .nav-list");
const closeButton = document.querySelector(".nav-list__close-button");

burger.addEventListener("click", () => {
  navigation.classList.toggle("nav-list--active");
});

closeButton.addEventListener("click", () => {
  navigation.classList.toggle("nav-list--active");
});
