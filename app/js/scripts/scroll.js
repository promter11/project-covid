const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    let elementID = document.querySelector(event.toElement.hash);

    elementID.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  });
});
