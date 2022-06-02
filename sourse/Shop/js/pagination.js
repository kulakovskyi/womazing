const productItems = document.querySelectorAll(".products__item");
const counterAll = document.querySelectorAll(".counter__all");
counterAll.forEach((item) => {
  item.innerHTML = productItems.length;
});

const errorShow = document.querySelector(".products__error");
const buttonAll = document.querySelector(".button__all");
const buttonPalto = document.querySelector(".button__palto");
const buttonSweetShot = document.querySelector(".button__sweetshot");
const buttonKardigan = document.querySelector(".button__kardigan");
const buttonTolstovka = document.querySelector(".button__tolstovka");
const buttons = document.querySelectorAll(".button__product");

let countStart = 9;

function removeActiveBtn() {
  buttons.forEach((item) => {
    item.classList.remove("_active-btn");
  });
}

productItems.forEach((item) => {
  buttonPalto.addEventListener("click", function () {
    removeActiveBtn();
    buttonPalto.classList.add("_active-btn");
    item.style.display = "none";
    errorShow.style.display = "block";
  });

  buttonSweetShot.addEventListener("click", function () {
    removeActiveBtn();
    errorShow.style.display = "none";
    item.style.display = "none";
    buttonSweetShot.classList.add("_active-btn");
    if (item.classList.contains("sweetshot")) {
      item.style.display = "block";
    }
  });

  buttonKardigan.addEventListener("click", function () {
    removeActiveBtn();
    errorShow.style.display = "none";
    item.style.display = "none";
    buttonKardigan.classList.add("_active-btn");
    if (item.classList.contains("kardigan")) {
      item.style.display = "block";
    }
  });

  buttonTolstovka.addEventListener("click", function () {
    removeActiveBtn();
    errorShow.style.display = "none";
    item.style.display = "none";
    buttonTolstovka.classList.add("_active-btn");
    if (item.classList.contains("tolstovka")) {
      item.style.display = "block";
    }
  });

  buttonAll.addEventListener("click", function () {
    removeActiveBtn();
    errorShow.style.display = "none";
    buttonAll.classList.add("_active-btn");
    item.style.display = "none";
    for (let i = 0; i < productItems.length; i++) {
      if (i < countStart) {
        productItems[i].style.display = "block";
      }
    }
  });
});

const count = productItems.length;

const paginationAmount = Math.ceil(count / countStart);
//const countStart = 9;
const paginator = document.querySelector(".paginator");
let page = "";

for (let i = 0; i < paginationAmount; i++) {
  page += "<span data-page=" + i * countStart + '  id="page' + (i + 1) + '">' + (i + 1) + "</span>";
}

paginator.innerHTML = page;

for (let i = 0; i < productItems.length; i++) {
  if (i < countStart) {
    productItems[i].style.display = "block";
  }
}

let mainPage = document.getElementById("page1");
mainPage.classList.add("_active");

//Скролл к нопке
const scrollTo = document.querySelector(".button__all");

//Счетчик на то сколько товаров
const productsNUmberShow = document.querySelectorAll(".counter__active");

function pagination(event) {
  let e = event || window.event;
  let target = e.target;
  let id = target.id;
  scrollTo.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });

  if (target.tagName.toLowerCase() != "span") return;

  let dataPage = +target.dataset.page;
  mainPage.classList.remove("_active");
  mainPage = document.getElementById(id);
  mainPage.classList.add("_active");
  console.log(dataPage);
  let j = 0;
  for (let i = 0; i < productItems.length; i++) {
    let dataNum = productItems[i].dataset.num;
    if (dataNum <= dataPage || dataNum >= dataPage) productItems[i].style.display = "none";
  }

  for (let i = dataPage; i < productItems.length; i++) {
    if (j >= countStart) break;
    productItems[i].style.display = "block";
    j++;

    //Счетчик тута
    productsNUmberShow.forEach((item) => {
      item.innerHTML = j;
    });
  }
}
