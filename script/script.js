//select html elements
const cards = document.getElementsByClassName("product-card");
const inputCoupon = document.getElementById("input-coupon");
const applyBtn = document.getElementById("apply-btn");
const cart = document.getElementById("cart");
//
const totalPriceValue = document.getElementById("total-price");
const discount = document.getElementById("discount");
const total = document.getElementById("total");

const purchaseBtn = document.getElementById("purchase-btn");

const goHomeBtn = document.getElementById("go-home-btn");

const promoCode = document.getElementById('promo-code');

let totalPrice = 0;

for (const card of cards) {
  card.addEventListener("click", function () {
    const productName = card.children[2].innerText;
    const productPrice = card.children[3].innerText;
    const productPriceValue = parseFloat(productPrice);

    const li = document.createElement("li");
    li.innerText = productName;
    cart.appendChild(li);
    // cart.style.display = 'block'
    console.log(li);
    totalPrice += productPriceValue;

    const totalValue = (totalPriceValue.innerText = totalPrice);
    if (totalValue >= 200) {
      applyBtn.removeAttribute("disabled", true);
    }
    if (totalValue > 0) {
      purchaseBtn.removeAttribute("disabled", true);
    }
  });
}

applyBtn.addEventListener("click", function () {
  if (inputCoupon.value == promoCode.innerText) {
    let discountValue = totalPrice * (20 / 100);
    let afterTotal = totalPrice - discountValue;
    discount.innerText = discountValue.toFixed(1);
    total.innerText = afterTotal.toFixed(1);
    inputCoupon.value = '';
  }
});

goHomeBtn.addEventListener("click", function () {
  totalPriceValue.innerText = "00";
  discount.innerText = "00";
  total.innerText = "00";

  while (cart.firstChild) {
    cart.removeChild(cart.firstChild);
    totalPrice = 0;
  }
});
