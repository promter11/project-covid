(() => {
  const
    burger      = document.querySelector(".header .nav-burger"),
    navigation  = document.querySelector(".header .nav-list"),
    closeButton = document.querySelector(".header .nav-list__close-button");
  
  const toggleCloseButton = () =>
    navigation.classList.toggle("nav-list--active");

  burger.addEventListener("click", toggleCloseButton);
  closeButton.addEventListener("click", toggleCloseButton);
})();
