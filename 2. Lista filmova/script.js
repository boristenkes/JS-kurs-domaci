const movieList = document.querySelector(".movie-list");
const totalEl = document.querySelector(".total-price");
let totalPrice = 0;

const delegateMovieClick = e => {
   const target = e.target;
   
   if (target.classList.contains("buy-movie-btn")) {
      target.setAttribute("disabled", "true");
      target.innerText = "Watched";

      const priceParent = target.parentElement;
      const priceEl = priceParent.querySelector(".movie__info--price");
      let price = priceEl.querySelector(".price").innerText;
      price = parseInt(price);

      totalPrice += price;
      
      totalEl.textContent = "Total price: $" + totalPrice;
   }
}

movieList.addEventListener("click", delegateMovieClick);
