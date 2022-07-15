/*
 * RESPONSIVE MENI
 */

let menuBtn = document.querySelector(".header button");

menuBtn.addEventListener("click", () => {
  let menu = document.querySelector(".header ul");
  let headerBtn = document.querySelector(".header button");

  if (headerBtn.innerText === "MENU") {
    menu.style.display = "block";
    headerBtn.innerText = "CLOSE";
  } else {
    menu.style.display = "none";
    headerBtn.innerText = "MENU";
  }
});

/*
 * GALERIJA
 */

let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");

let imgNum = 0;

const moveRight = () => {
  displayNone();
  imgNum++;

  if (imgNum === pictures.length) {
    imgNum = 0;
  }

  pictures[imgNum].style.display = "block";
};

const moveLeft = () => {
  displayNone();
  imgNum--;

  if (imgNum === -1) {
    imgNum = pictures.length - 1;
  }

  pictures[imgNum].style.display = "block";
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};

/*
 * PORTFOLIO
 */

let portfolioButtons = document.querySelectorAll(
  ".portfolio-categories button"
);

portfolioButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let category = btn.getAttribute("data-category");
    let portfolioItems = document.querySelectorAll(".portfolio-single-item");

    portfolioItems.forEach((item) => {
      item.style.display = "none";
    });

    if (category === "sve") {
      portfolioItems.forEach((item) => {
        item.style.display = "block";
      });
    }

    portfolioItems.forEach((item) => {
      if (item.getAttribute("data-category").includes(category)) {
        item.style.display = "block";
      }
    });
  });
});

/*
 * MODAL
 */

let popupModal = document.querySelector(".popup-modal");
let overlay = document.querySelector(".overlay");

let openModal = document.querySelector(".modal-section button");

openModal.addEventListener("click", () => {
  popupModal.style.display = "block";
  overlay.style.display = "block";
});

let closeModal = document.querySelector("#closeModal");

closeModal.addEventListener("click", () => {
  popupModal.style.display = "none";
  overlay.style.display = "none";
});

/*
 * DRUGI MODAL
 */

const openSecondModal = document.getElementById("open-second-modal");
const closeSecondModal = document.querySelector("#closeSecondModal");
const secondModal = document.querySelector(".second-modal");

openSecondModal.addEventListener("click", () => {
  secondModal.style.display = "block";
  overlay.style.display = "block";
});

closeSecondModal.addEventListener("click", () => {
  secondModal.style.display = "none";
  overlay.style.display = "none";
});
