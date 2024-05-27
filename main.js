let cartIcon = document.querySelector('#i');
let cart = document.querySelector('.cart');
let closecart = document.querySelector('#close-cart');

cartIcon.onclick = () =>{
    cart.classList.add("active");
};
closecart.onclick = () =>{
    cart.classList.remove("active");
};
if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

function ready(){
    var reomveCartButtons = document.getElementsByClassName('cart-remove');
    console.log(reomveCartButtons);
    for (var i = 0; i<reomveCartButtons.length; i++){
        var button = reomveCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i< quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i =0; i<cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("₹" , ""));
        var quantity = quantityElement.value;
        total = total +(price * quantity);

        document.getElementsByClassName('total-price')[0].innerText = "₹" + total;
    }
}
    
