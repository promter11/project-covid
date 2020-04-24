(() => {
  const
    burger      = document.querySelector(".nav-burger"),
    closeButton = document.querySelector(".nav-list__close-button"),
    navigation  = document.querySelector(".header .nav-list");
  
  const toggleCloseButton = () =>
    navigation.classList.toggle("nav-list--active");

  burger.addEventListener("click", toggleCloseButton);
  closeButton.addEventListener("click", toggleCloseButton);
})();
