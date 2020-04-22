(() => {
  const modal = document.querySelector(".modal");

  modal.addEventListener("click", (event) => {
    if (
      event.target.nodeName === "path" ||
      event.target.nodeName === "svg" ||
      event.target.classList.contains("modal")
    ) {
      modal.classList.remove("modal--active");
    }
  });
})();
