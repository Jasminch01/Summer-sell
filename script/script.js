//select html elements
const cards = document.getElementsByClassName("product-card");
const inputCoupon = document.getElementById('input-coupon');
const applyBtn = document.getElementById('apply-btn');
const cart = document.getElementById('cart');
//
const discount = document.getElementById('discount');
const total = document.getElementById('total');

let totalPrice = 0;

for (const card of cards) {
    card.addEventListener('click', function(){
        const productName = card.children[2].innerText;
        const productPrice = card.children[3].innerText;
        const productPriceValue = parseFloat(productPrice);
        
        const li = document.createElement('li');
        li.innerText = productName;
        cart.appendChild(li);
        totalPrice +=productPriceValue;

        const total = document.getElementById('total-price');
        const totalValue = total.innerText = totalPrice;
        if (totalValue >= 200) {
            applyBtn.removeAttribute('disabled', true)
        }
    })
    
}


applyBtn.addEventListener('click', function(){ 
    if (inputCoupon.value == 'SELL200') {
        let discountValue = totalPrice * (20/100);
        let afterTotal = totalPrice - discountValue;
        discount.innerText = discountValue.toFixed(1);
        total.innerText = afterTotal.toFixed(1);
    }
})
