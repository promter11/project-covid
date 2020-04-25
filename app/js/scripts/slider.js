(() => {
  const interval = setInterval(() => {
    if (fetchStatus) {
      const
        sliderBlock   = document.querySelector(".stats .block-content"),
        sliderLeft    = document.querySelector(".stats .block-elements__button--left"),
        sliderRight   = document.querySelector(".stats .block-elements__button--right"),
        sliderSlides  = document.querySelectorAll(".stats .content-item").length / 6;

      let
        elementIndex = 0,
        elementWidth = sliderBlock.getBoundingClientRect().width;

      const transformSlide = () => {
        sliderBlock.style.transform = `
          translateX(-${elementWidth * elementIndex}px)
        `;
      };

      const handleResize = () => {
        window.addEventListener("resize", () => {
          elementWidth = sliderBlock.getBoundingClientRect().width;

          transformSlide();
        });
      };

      const handleClick = () => {
        sliderLeft.addEventListener("click", () => {
          --elementIndex <= 0
            ? sliderLeft.setAttribute("disabled", true)
            : sliderRight.removeAttribute("disabled");

          transformSlide();
        });

        sliderRight.addEventListener("click", () => {
          ++elementIndex >= sliderSlides - 1
            ? sliderRight.setAttribute("disabled", true)
            : sliderLeft.removeAttribute("disabled");

          transformSlide();
        });
      };

      handleResize();
      handleClick();

      clearInterval(interval);
    }
  }, 1000);
})();
