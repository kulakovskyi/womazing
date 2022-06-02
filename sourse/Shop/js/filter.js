const productItems = document.querySelectorAll(".products__item");
const buttons = document.querySelector(".product__buttons");
const errorItems = document.querySelector(".products__error");

const buttonActive = document.querySelectorAll(".button__product");

buttons.addEventListener("click", (event) => {
  menuButton.classList.remove("_active-burger");
  iconButton.classList.remove("_active-burger");
  if (event.target.tagName !== "BUTTON") return false;
  buttonActive.forEach((item) => {
    item.classList.remove("_active-btn");
  });
  event.target.classList.add("_active-btn");
  errorItems.style.display = "none";
  if (event.target.dataset["f"] === "palto") errorItems.style.display = "block";

  let filterClass = event.target.dataset["f"];
  productItems.forEach((elem) => {
    elem.style.display = "block";
    if (!elem.classList.contains(filterClass) && filterClass !== "all") {
      elem.style.display = "none";
    }
  });
});
