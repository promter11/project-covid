(() => {
  const
    sliderBlock = document.querySelector(".stats .block-content"),
    sliderLeft  = document.querySelector(".stats .block-elements__button--left"),
    sliderRight = document.querySelector(".stats .block-elements__button--right");

  let
    sliderSlides,
    elementIndex = 0,
    elementWidth = sliderBlock.getBoundingClientRect().width;

  const fetchDelay = () => {
    setTimeout(() => {
      sliderSlides = document.querySelectorAll(".stats .item-wrapper");
    }, 5000);
  };

  const getSliderWidthWithResize = () => {
    window.addEventListener("resize", () => {
      elementWidth = sliderBlock.getBoundingClientRect().width;
    });
  };

  const handleClick = () => {
    sliderLeft.addEventListener("click", () => {
      --elementIndex <= 0
        ? sliderLeft.setAttribute("disabled", true)
        : sliderRight.removeAttribute("disabled");

      sliderBlock.style.transform = `
        translateX(-${elementWidth * elementIndex}px)
      `;
    });

    sliderRight.addEventListener("click", () => {
      ++elementIndex >= sliderSlides.length - 1
        ? sliderRight.setAttribute("disabled", true)
        : sliderLeft.removeAttribute("disabled");

      sliderBlock.style.transform = `
        translateX(-${elementWidth * elementIndex}px)
      `;
    });
  };

  fetchDelay();
  getSliderWidthWithResize();
  handleClick();
})();
