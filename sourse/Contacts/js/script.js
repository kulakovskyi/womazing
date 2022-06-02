//меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");

iconMenu.addEventListener("click", function (e) {
  document.body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
});

/************Скролл и пояление шапки*****************/

let oldScrollTopPosition = 0;
const header = document.querySelector(".header");
const headerRow = document.querySelector(".header__row");

window.onscroll = () => {
  const scrollTopPosition = document.documentElement.scrollTop;
  oldScrollTopPosition = scrollTopPosition;
  if (scrollTopPosition >= 805) {
    header.classList.add("_scroll");
    headerRow.classList.add("_scroll");
  } else {
    header.classList.remove("_scroll");
    headerRow.classList.remove("_scroll");
  }
};

/************************POPUP*****************************/

const popUp = document.querySelector(".popup");
const popUpContent = document.querySelector(".popup__info");
const telPopUp = document.querySelector(".icon-telephone");
const popUpClose = document.querySelector(".popupclose");
const body = document.querySelector("body");

/*Фикс на отступ для фиксированных елементов*/

const lockPadFixEl = document.querySelectorAll(".lock-padding");

let open = function () {
  popupPaddingRight();
  popUp.classList.add("_open");
  popUpContent.classList.add("_open");
  document.body.classList.add("_lock");
};

let close = function () {
  popUp.classList.remove("_open");
  popUpContent.classList.remove("_open");
  document.body.classList.remove("_lock");
  popUpContent.classList.remove("_form-out");
  formSuccses.classList.remove("_form-out");
  body.style.paddingRight = 0 + "px";
  for (let i = 0; i < lockPadFixEl.length; i++) {
    let el = lockPadFixEl[i];
    el.style.paddingRight = 0 + "px";
  }
};

let popupPaddingRight = function () {
  let width = window.innerWidth - document.querySelector(".wrapper").clientWidth + "px";

  for (let i = 0; i < lockPadFixEl.length; i++) {
    let el = lockPadFixEl[i];
    el.style.paddingRight = width;
  }

  console.log(window.innerWidth);
  console.log(document.querySelector(".wrapper").clientWidth);
  body.style.paddingRight = width;
};

telPopUp.addEventListener("click", (e) => {
  open();
  window.onclick = function (e) {
    if (e.target == popUp) {
      close();
    }
  };
});

popUpClose.addEventListener("click", (e) => {
  close();
});

/******************FORM*****************************/

const formValid = document.querySelector(".popup__form");
const formInputs = document.querySelectorAll(".js-input");

const formSumbit = document.querySelector(".form-sumbit");
const formSuccses = document.querySelector(".form__succsesfull");
const closeBtn = document.querySelector(".button__close");

formValid.onsubmit = function (event) {
  event.preventDefault();
  emptyInputs = Array.from(formInputs).filter((input) => input.value === "");

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("_error");
    } else {
      input.classList.remove("_error");
    }
  });

  if (emptyInputs.length !== 0) {
    console.log("inputs not filled");
    return false;
  }
  popUpContent.classList.add("_form-out");
  formSuccses.classList.add("_form-out");
};

closeBtn.addEventListener("click", function () {
  close();
});

/******************FORM on index.html*****************************/

const formContactValid = document.querySelector(".contact__form__info");
const formContactInputs = document.querySelectorAll(".js-input-contact");

const formSucsesfull = document.querySelector(".form__sucsesfull");

formContactValid.onsubmit = function (event) {
  event.preventDefault();
  demptyContactInputs = Array.from(formContactInputs).filter((input) => input.value === "");

  formContactInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("_error");
    } else {
      input.classList.remove("_error");
    }
  });

  if (demptyContactInputs.length !== 0) {
    console.log("inputs not filled");
    return false;
  }

  formSucsesfull.classList.add("_open");
};
