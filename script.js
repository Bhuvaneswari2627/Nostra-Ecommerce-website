// collections page
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const productList = document.getElementById("productList");

  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const filter = searchInput.value.toLowerCase();
      const products = productList.querySelectorAll(".product-card");

      products.forEach(prod => {
        const title = prod.querySelector("h3").textContent.toLowerCase();
        prod.style.display = title.includes(filter) ? "" : "none";
      });
    });
  }
});

function filterProducts(category) {
  const products = document.querySelectorAll(".product-card");
  products.forEach(prod => {
    if (category === 'all' || prod.dataset.category === category) {
      prod.style.display = "";
    } else {
      prod.style.display = "none";
    }
  });
}

//  nav toggle
const toggle = document.querySelector(".mobile-menu-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const nav = document.querySelector(".nav-links");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
    }
  });
}
