let cart = JSON.parse(localStorage.getItem('cart')) || []
console.log(cart)



let confirmButton = document.querySelector(".confirm-button")
let cartItemsContainer = document.querySelector(".cart-items-container") 
let orderDetails = document.querySelector(".order-details-box")



cartItemsContainer.addEventListener("click",(event)=>{

    let addbtn = event.target.closest(".add-btn")
    let deletebtn = event.target.closest(".delete-btn")

    // let addbtnIndex = addbtn.dataset.index
    // let deletebtnIndex = deletebtn.dataset.index
    
    if(!addbtn && !deletebtn){
        return
    }


    if(addbtn){
        cart[addbtn.dataset.index].quantity += 1
        localStorage.setItem('cart',JSON.stringify(cart))
        rendering()
    }


    if(deletebtn){

        cart[deletebtn.dataset.index].quantity -= 1

        if(cart[deletebtn.dataset.index].quantity <= 0){
            cart.splice(deletebtn.dataset.index,1)
        }
        rendering()
        localStorage.setItem('cart',JSON.stringify(cart))
        
    }
})






if(cart.length > 0){
confirmButton.addEventListener("click",()=>{
    

    inputAdress =  document.querySelector(".input-address")
    if(inputAdress.value === ''){
        alert("Please enter Your Adress")
    return
    }

    let orderDetails = cart.map(item => 
    `${item.name} ${item.label || ''} x${item.quantity} = RS.${item.price * item.quantity}`
).join('%0A')
let address = inputAdress.value;
let totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

let message = `🍔 *New Order - Kech Food Center*%0A%0A${orderDetails}%0A%0A💰 *Total: RS.${totalAmount + 100}*%0A📍 *Address:* ${address}%0A%0A_Please confirm this order_`

let phoneNumber = "923352053652" // delivery guy number

window.open(`https://wa.me/${phoneNumber}?text=${message}`)

})
}



function rendering(){
let cartHtml = ''
cart.forEach((item,index)=>{
    
    let Total = item.quantity * item.price

    cartHtml += ` <div class="cart-item">
                <div class="cart-item-left">
                    <img src=".${item.image}" alt="${item.name}">
                    <div>
                        <p class="cart-item-name">${item.name} &nbsp ${item.label}</p>
                        <p class="cart-item-price">Rs. ${item.price}</p>
                    </div>
                </div>
                <div class="cart-item-controls">
                    <button data-index="${index}" class="delete-btn"><i class="ri-delete-bin-line"></i></button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button data-index="${index}" class="add-btn">+</button>
                </div>
                <p class="cart-item-total">RS<br>${Total}</p>
            </div>`

        })


      if(cart.length === 0 ){
        // cartItemsContainer.style.display = "none"
        document.querySelector(".voucher-box").style.display = "none"
        document.querySelector(".confirm-button").style.color = "red"
        document.querySelector(".breakdown-total").innerHTML = 0;
        document.querySelector(".breakdown-dilavery").innerHTML=0;
        document.querySelector(".breakdown-grand").innerHTML=0;
        document.querySelector(".confirm-summary-items").innerHTML='0 ITEMS';
        document.querySelector(".confirm-summary-Total-price").innerHTML='RS.0';
        document.querySelector(".confirm-button").addEventListener("click",()=>{
            alert("Add something to the Cart🍕🍔🍟")
        })
        cartItemsContainer.innerHTML = `<div class="empty-cart">
            <p>Your cart is empty! But Your Stomach does not have to!</p>
            <a href="../index.html"><button>START YOUR ORDER</button></a>
            </div>`;
      }else{  
            cartItemsContainer.innerHTML = cartHtml
            updateBreakdown()
            }
}




function updateBreakdown(){
let breakDownTotal = document.querySelector(".breakdown-total")
let breakDownDelivery = document.querySelector(".breakdown-dilavery")
let breakDownGrandTotal = document.querySelector(".breakdown-grand")
let confirmSummaryItems = document.querySelector(".confirm-summary-items")
let confirmSummaryTotalPrice = document.querySelector(".confirm-summary-Total-price")
let cartCount1 = document.querySelector(".cart-count1")
let cartCount2 = document.querySelector(".cart-count2")

let totalItems = 0 ;
let Total = 0;
let grandTotal = 0;
let deliveryCharges = 0


cart.forEach((item,index)=>{
    totalItems += item.quantity
    cartCount1.innerHTML = totalItems
    cartCount2.innerHTML = totalItems


    console.log(totalItems)
    Total += item.quantity * item.price

    if(totalItems > 1){
        deliveryCharges = 100
    }else{
        deliveryCharges = 0
    }

    console.log(deliveryCharges)

    grandTotal = Total + deliveryCharges
    breakDownTotal.innerHTML = Total
    breakDownDelivery.innerHTML = deliveryCharges
    breakDownGrandTotal.innerHTML = grandTotal 
    confirmSummaryItems.innerHTML = `${totalItems} ITEMS `
    confirmSummaryTotalPrice.innerHTML = `RS. ${grandTotal}`
})
}




rendering()
// localStorage.clear()