const burger = document.querySelector(".nav-burger");
const closeButton = document.querySelector(".nav-list__close-button");

const toggleCloseButton = () => {
  const navigation = document.querySelector(".header .nav-list");

  navigation.classList.toggle("nav-list--active");
};

burger.addEventListener("click", toggleCloseButton);
closeButton.addEventListener("click", toggleCloseButton);
