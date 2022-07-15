
/*
 *    Search box
 */

const searchWrapper = document.querySelector(".search-box-wrapper");
const searchBox     = document.querySelector(".search-box");
const searchIcon    = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
   searchWrapper.classList.toggle("active");

   if (searchWrapper.matches(".active"))
      searchBox.setAttribute("placeholder", "Search...");
   else
      searchBox.setAttribute("placeholder", "");
});

/*
 *    Hamburger menu
 */

const navList      = document.querySelector(".nav-links");
const hamburgerBtn = document.querySelector(".hamburger");
const closeMenuBtn = document.querySelector(".close-menu");

hamburgerBtn.addEventListener("click", () => navList.classList.add("open"));
closeMenuBtn.addEventListener("click", () => navList.classList.remove("open"));

/*
 *    Carousel
 */

const buttons = document.querySelectorAll("[data-carousel-button]");
const carousel = document.querySelector("[data-carousel]");

buttons.forEach(button => {
   button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
      
      const activeSlide = slides.querySelector("[data-active]");
      
      let newIndex = Array.from(slides.children).indexOf(activeSlide) + offset;

      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
   });
});

window.onscroll = () => {
   const carouselPos = carousel.getBoundingClientRect().top;
   const screenPos = window.innerHeight / 1.3;
   if (carouselPos < screenPos)
      carousel.classList.add("showCarousel");
   else
      carousel.classList.remove("showCarousel");

   const animatedButtons = document.querySelector(".animated-buttons")
   const animatedButtonsPos = animatedButtons.getBoundingClientRect().top;
   if (animatedButtonsPos < screenPos)
      animatedButtons.classList.add("showButtons");
   else
      animatedButtons.classList.remove("showButtons");

}

/*
 *    Animated Buttons 
 */

const animatedButtons = document.querySelector(".animated-buttons");

animatedButtons.addEventListener("click", e => {

   const buttons = Array.from(animatedButtons.querySelectorAll(".animated-button-wrapper button"));

   switch(buttons.indexOf(e.target)) {

      // Rotating button
      case 0:
         e.target.classList.add("rotate-me");
         setTimeout(() => {
            e.target.classList.remove("rotate-me")
         }, 1000);
      break;

      // Passing-by button
      case 1:
         e.target.parentElement.style.overflow = "hidden";
         e.target.classList.add("passing-by");
         setTimeout(() => {
            e.target.classList.remove("passing-by")
         }, 1000);
      break;

      // Ripple button
      case 2:
         e.target.style.overflow = "hidden";
         const ripple = document.createElement("span");
         ripple.classList.add("ripple");

         e.target.append(ripple);

         setTimeout(() => {
            ripple.remove();
         }, 500);
      break;

      // Change-size button
      case 3:
         e.target.classList.add("change-size");
         setTimeout(() => {
            e.target.classList.remove("change-size");
         }, 200);
      break;

      // Change-border-radius button
      case 4:
         e.target.classList.add("change-border-radius");
         setTimeout(() => {
            e.target.classList.remove("change-border-radius");
         }, 1000);
      break;

      // Fade-out button
      case 5:
         e.target.style.opacity = 0;
         setTimeout(() => {
            e.target.style.opacity = 1;
         }, 1000);
      break;
   }
});
