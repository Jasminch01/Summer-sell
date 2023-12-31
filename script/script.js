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
let totalValue;
let discountValue;
let afterTotal;

purchaseBtn.setAttribute('disabled', false);

for (const card of cards) {
  card.addEventListener("click", function () {
    const productName = card.children[2].innerText;
    const productPrice = card.children[3].innerText;
    const productPriceValue = parseFloat(productPrice);

    const li = document.createElement("li");
    li.innerText = productName;
    cart.appendChild(li);
    totalPrice += productPriceValue;

     totalValue = (totalPriceValue.innerText = totalPrice);
     if (totalValue >= 200) {
      applyBtn.removeAttribute("disabled", true);
      applyBtn.style.backgroundColor = '#E527B2'

    }
     if (totalValue > 0) {
      purchaseBtn.removeAttribute("disabled", true);
      purchaseBtn.style.backgroundColor = '#E527B2'
    }
  });
}

applyBtn.addEventListener("click", function () {
  if (inputCoupon.value == promoCode.innerText) {
    discountValue = totalPrice * (20 / 100);
    let afterTotal = totalPrice - discountValue;
    discount.innerText = discountValue.toFixed(1);
    total.innerText = afterTotal.toFixed(1);
    inputCoupon.value = '';
  }
});

goHomeBtn.addEventListener("click", function () {
  while (cart.firstChild) {
    cart.removeChild(cart.firstChild);  
  }
  totalPrice = 0;
  totalValue = 0;
  discountValue = 0;
  afterTotal = 0;
  totalPriceValue.innerText = totalPrice;
  discount.innerText = discountValue;
  total.innerText = afterTotal;
  purchaseBtn.setAttribute('disabled', true);
  purchaseBtn.style.backgroundColor = '#b63d96'
  applyBtn.setAttribute('disabled', true);
  applyBtn.style.backgroundColor = '#b63d96'

});