let cart = JSON.parse(localStorage.getItem('cart')) || []
// console.log(cart)



let confirmButton = document.querySelector(".confirm-button")
let cartItemsContainer = document.querySelector(".cart-items-container") 
let orderDetails = document.querySelector(".order-details-box")




confirmButton.addEventListener("click",()=>{
    inputAdress =  document.querySelector(".input-address")
    if(inputAdress.value === ''){
        alert("Please enter Your Adress")}
})





cartItemsContainer.addEventListener("click",(event)=>{
    let cartItem = event.target.closest(".cart-item")
    let addbtn = event.target.closest(".add-btn")
    let deletebtn = event.target.closest(".delete-btn")


    if(!cartItem){
        return
    }
    


    let index = cartItem.dataset.index

    if(addbtn){
        cart[index].itemQuantity += 1
        localStorage.setItem('cart',JSON.stringify(cart)) 
        rendering()
    }

    if(deletebtn){
        cart[index].itemQuantity -= 1
        if(cart[index].itemQuantity <= 0){
            cart.splice(index,1)
        }
        localStorage.setItem('cart',JSON.stringify(cart))

        rendering()
    }
})



function rendering(){
            cartHtml = ''
            cart.forEach((item,index) => {
            cartHtml += `
            <div class="cart-item" data-index ="${index}">
                <div class="cart-item-left">
                    <img src=".${item.itemImage}" alt="${item.itemName}">
                    <div>
                        <p class="cart-item-name">${item.itemName} ${item.itemLabel}</p>
                        <p class="cart-item-price">Rs. ${item.itemPrice}</p>
                    </div>
                </div>
                <div class="cart-item-controls">
                    <button class="delete-btn"><i class="ri-delete-bin-line"></i></button>
                    <span class="cart-item-qty">${item.itemQuantity}</span>
                    <button class="add-btn">+</button>
                </div>
                <p class="cart-item-total">RS<br>12000</p>
                </div>`;
                });



            if (cart.length === 0) {
              orderDetails.style.display = "none";
              document.querySelector(".confirm-bar").style.display = "none";
              document.querySelector(".voucher-box").style.display = "none";

            cartItemsContainer.innerHTML = `
            <div class="empty-cart">
            <p>Your cart is empty! But Your Stomach does not have to!</p>
            <a href="../index.html"><button>START YOUR ORDER</button></a>
            </div>`;
            } else {
              cartItemsContainer.innerHTML = cartHtml;
              totalPrice();
              updateCartHtml();
            //   incersingQuantity();
              // filteringCart()
            }

}

function incearsingQuantity(){
    let quantityIncreaser = document.querySelectorAll(".add-btn")
    let quantityDecreaser = document.querySelectorAll(".delete-btn")
    cart.forEach((item,index)=>{

        quantityIncreaser[index].addEventListener("click",()=>{
        item.itemQuantity = item.itemQuantity += 1

        localStorage.setItem('cart',JSON.stringify(cart))

        document.querySelectorAll(".cart-item-qty")[index].innerHTML = item.itemQuantity
        
        rendering()
        })

})
}
















function updateCartHtml(){
let cartCount1 =  document.querySelector(".cart-count1")
let cartCount2 =  document.querySelector(".cart-count2")
let confirmSummarItems = document.querySelector(".confirm-summary-items")
let quantityIncreaser = document.querySelectorAll(".add-btn")
  
    let quantity = 0
    cart.forEach(item =>{
        quantity += item.itemQuantity
    })
 
    
    
    cartCount1.innerHTML = quantity
    cartCount2.innerHTML = quantity
    confirmSummarItems.innerHTML = `${quantity} ITEMS`
}


// totalPrice()


function totalPrice(){
let breakdownTotal = document.querySelector(".breakdown-total")
let totalPriceSummary = document.querySelector(".confirm-summary-Total-price")
let itemTotal = document.querySelectorAll(".cart-item-total")
let deliveryChargesHtml = document.querySelector(".breakdown-dilavery")
let grandTotal = document.querySelector(".breakdown-grand")
let totalPrice = 0
let diliverycharges = 0

if(cart.length > 0){
    diliverycharges = 100
}else{
    diliverycharges = 0
}

cart.forEach((item,index)=>{
    
    itemTotalPrice = 0
    itemTotalPrice += Number(item.itemPrice) * Number(item.itemQuantity)
    // console.log(itemTotalPrice)
    itemTotal[index].innerHTML = `RS<br>${itemTotalPrice}`
    
    totalPrice += Number(item.itemPrice) * Number(item.itemQuantity)
})
totalPriceSummary.innerHTML = `RS. ${diliverycharges+totalPrice}`
breakdownTotal.innerHTML = totalPrice
deliveryChargesHtml.innerHTML = diliverycharges
grandTotal.innerHTML = diliverycharges + totalPrice

}




// function filteringCart(){
//     cart = cart.filter(items => item.itemQuantity > 0)

//     localStorage.setItem('cart',JSON.stringify(cart))
//     updateCartHtml()
//     totalPrice()
//     incersingQuantity()
// }



rendering()
