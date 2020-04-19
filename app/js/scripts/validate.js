const subscribeForm = document.querySelector(".subscribe-form");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target.elements[0],
    pattern = /[a-z0-9]+\@[a-z]{2,}\.[a-z]{2,4}/;

  if (!pattern.test(input.value)) {
    input.classList.add("subscribe-form__input--invalid");

    input.placeholder = "Please enter a valid email address";
    input.value = "";
  } else {
    input.classList.remove("subscribe-form__input--invalid");

    input.placeholder = "example@gmail.com";
    input.value = "";
  }
});
