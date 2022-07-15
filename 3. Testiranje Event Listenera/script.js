const clickListener = document.getElementById("clickListener");
const dragListener = document.getElementById("dragListener");
const mousemoveListener = document.getElementById("mousemoveListener");
const inputListener = document.getElementById("inputListener");
const submitListener = document.getElementById("submitListener");
const scrollListener = document.getElementById("scrollListener");

clickListener.addEventListener("click", (e) => {
   const x = e.clientX - e.target.offsetLeft;
   const y = e.clientY - e.target.offsetTop;

   const ripple = document.createElement("span");
   ripple.classList.add("ripple-animation");
   ripple.style.left = x + "px";
   ripple.style.top  = y + "px";

   clickListener.append(ripple);
   
   setTimeout(() => {
      ripple.remove();
   }, 500);
});


dragListener.addEventListener("drag", (e) => {
   e.target.innerText = "You are dragging me!"
   e.target.style.fontSize = "1.5rem";

   dragListener.addEventListener("dragend", (e) => {
      e.target.innerText = "Drag!";
      e.target.style.fontSize = "2rem";
   })
});


mousemoveListener.addEventListener("mousemove", (e) => {
   e.target.parentElement.style.background = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
});


inputListener.addEventListener("input", (e) => {
   e.target.style.color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
});


submitListener.addEventListener("submit", (e) => {
   e.preventDefault();
   e.target.parentElement.innerHTML = "<h3>You have submitted the form!</h3>";
   console.log(e.target.parentElement)
});


scrollListener.addEventListener("scroll", (e) => {
   const fontSizes = [14, 21, 15, 13, 16, 10, 13];
   const index = Math.floor(Math.random() * fontSizes.length)

   const text = scrollListener.querySelector("p");
   text.style.fontSize = fontSizes[index] + "px";
});


