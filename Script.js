let cart = 0;

function addToCart() {
  cart++;
  document.getElementById("cart-count").innerText = cart;
}

/* Product Filtering */
function filterProducts(category) {
  let products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    if (category === "all") {
      product.style.display = "block";
    } else {
      product.style.display = product.classList.contains(category) ? "block" : "none";
    }
  });
}

/* Dark Mode Toggle */
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
