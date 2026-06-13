// adivstment popup----------------------------------------///////////////
let advistementOverlay = document.querySelector(".advert-overlay")

window.onload = ()=>{
     advistementOverlay.style.display = "flex"
}

advistementOverlay.addEventListener("click",(event)=>{
    if(event.target === advistementOverlay ){ document.querySelector(".advert-overlay").style.display = "none"}
})

document.querySelector(".advert-close").addEventListener("click",()=>{
     document.querySelector(".advert-overlay").style.display = "none"

})
// ── adding module ─────────────────────────────────────────────────
// import {cart} from "./addtocart/addtocart.js"

let cart = JSON.parse(localStorage.getItem('cart')) || []


console.log(cart)


// ── Menu Data ─────────────────────────────────────────────────
const menuSection = [
    {
        id: "section-heading-pizza",
        title: "PIZZA PREMIUM",
        items: [
            { name: "Chicken Pizza",    image: "./images/Sauce-Boss-50kb_variant_.jpg",                                                    desc: "Secret sauce base, mozzarella cheese, Tex Max",                              smallPizzaPrice: 500, mediumPizzaPrice: 800,  largePizzaPrice: 1200, extraLargePizza: 1800 },
            { name: "Fajita Pizza",     image: "./images/CreamyTikka-HandTossedTopcopy_variant_0-2024-11-07073417.jpg",                    desc: "Cheese mayo base, mozzarella cheese, chicken",                               smallPizzaPrice: 500, mediumPizzaPrice: 1000, largePizzaPrice: 1400, extraLargePizza: 2000 },
            { name: "BBQ Pizza",        image: "./images/CreamyTikka-HandTossedTopcopy_variant_0-2024-11-07073417.jpg",                    desc: "BBQ sauce, cheese mayo base, mozzarella cheese, chicken",                    smallPizzaPrice: 500, mediumPizzaPrice: 1000, largePizzaPrice: 1400, extraLargePizza: 2000 },
            { name: "Tikka Pizza",      image: "./images/-ChickenTikka_4.jpg",                                                             desc: "Pizza sauce base, mozzarella cheese, chicken tikka chunks",                  smallPizzaPrice: 500, mediumPizzaPrice: 1000, largePizzaPrice: 1400, extraLargePizza: 2000 },
            { name: "Vegetable Pizza",  image: "./images/b2009180-9cda-11ef-bf94-4552bcb9a3dd-Veggie-HandTossedTopcopy_variant_0-2024-11-07073417.jpg", desc: "Pizza sauce base, mozzarella cheese, onions, green peppers..", smallPizzaPrice: 500, mediumPizzaPrice: 1000, largePizzaPrice: 1400, extraLargePizza: 2000 },
            { name: "Malai Boti Pizza", image: "./images/pepperoni pizza.jpg",                                                             desc: "Pizza sauce base, mozzarella cheese, malai boti toppings",                  smallPizzaPrice: 500, mediumPizzaPrice: 1000, largePizzaPrice: 1400, extraLargePizza: 2000 }
        ]
    },
    {
        id: "section-heading-burger",
        title: "BURGERS",
        items: [
            { name: "Zinger Burger",       image: "./images/Zinger-Burger2.png",             desc: "Crispy Zinger fillet, signature mayo and lettuce",               price: 500 },
            { name: "Cheese Zinger Burger",image: "./images/cheese zindger burger ok.png",   desc: "Crispy Zinger fillet, signature mayo, cheese and lettuce",       price: 600 },
            { name: "Chicken Burger",      image: "./images/chicken burger.02png.jpg",       desc: "Chicken fillet, spicy mayo, lettuce, sesame bun",                price: 300 },
            { name: "KFC Special Burger",  image: "./images/jumbo burger.png",               desc: "2 breaded chicken patties, cheese, lettuce and special sauce",   price: 500 },
            { name: "Jumbo Burger",        image: "./images/jumbo burger.png",               desc: "2 breaded chicken patties, cheese, lettuce and extra sauce",     price: 700 }
        ]
    },
    {
        id: "section-heading-bbq",
        title: "BBQ PREMIUM",
        items: [
            { name: "Chicken Tikka Leg",   image: "./images/chicken tikka bbq.jpg",          desc: "Chicken leg piece, marinated with secret ingredients, tangy taste",     price: 400 },
            { name: "Chicken Tikka Chest", image: "./images/Chicken-Chest-Piece-2.png.jpg",  desc: "Chicken chest piece, marinated with secret ingredients, tangy taste",   price: 500 },
            { name: "Malai Tikka Leg",     image: "./images/CHICKEN-MALAI-TIKA-LEG.jpg",     desc: "Chicken leg piece, marinated with yogurt and special ingredients",       price: 550 },
            { name: "Malai Tikka Chest",   image: "./images/CHICKEN-MALAI-TIKA-chestjpg.jpg",desc: "Chicken chest piece, marinated with yogurt and special ingredients",     price: 650 },
            { name: "Malai Butti",         image: "./images/chicken butti bbq.jpg",           desc: "Chicken pieces, marinated with yogurt and spices, rich taste",          price: 500 },
            { name: "Chicken Butti",       image: "./images/chicken butti bbq.jpg",           desc: "Chicken pieces, marinated with secret ingredients, tangy taste",        price: 400 }
        ]
    },
    {
        id: "section-heading-roll",
        title: "ROLLS PREMIUM",
        items: [
            { name: "Chicken Roll",     image: "./images/chicken roll 2.jpg",       desc: "Crispy chicken with sauce base and mozzarella cheese",           price: 150 },
            { name: "Chicken Mayo Roll",image: "./images/mayo roll.jpg",            desc: "Chicken filled with spicy chunks and special mayo",              price: 250 },
            { name: "Zinger Roll",      image: "./images/zinger roll.jpg",          desc: "Zinger filled chicken with spicy chunks and sauce",              price: 300 },
            { name: "Cheese Roll",      image: "./images/chicken cheese roll.jpg",  desc: "Sauce base, mozzarella cheese and chicken tikka chunks",         price: 250 },
            { name: "Malai Butti Roll", image: "./images/chicken kabab roll.jpg",   desc: "Malai butti with mozzarella cheese, onions and green peppers",   price: 250 },
            { name: "Kabab Roll",       image: "./images/Kabab roll.jpg",           desc: "Perfectly grilled kabab with special chutney",                   price: 200 }
        ]
    },
    {
        id: "section-heading-fries",
        title: "FRIES",
        items: [
            { name: "Masala Fries", image: "./images/masala fries.jpg",    desc: "Crispy fries tossed with KFC special masala",                        price: 100 },
            { name: "Mayo Fries",   image: "./images/mayo garlic fries.jpg",desc: "Crispy fries with masala and special garlic mayo sauce",             price: 150 },
            { name: "Cheese Fries", image: "./images/cheese fries.jpg",    desc: "Fries loaded with chicken and melted cheese, baked in oven",         price: 400 },
            { name: "Pizza Fries",  image: "./images/pizza fries.jpg",     desc: "Pizza style fries with sauce, olives and a generous amount of cheese",price: 450 }
        ]
    },
    {
        id: "section-heading-friedchicken",
        title: "FRIED CHICKEN",
        items: [
            { name: "Quarter Broast",       image: "./images/Two-Piece-Broast-Chest-quarter.png", desc: "One chest plus one wing, fried to crisp perfection",          price: 500 },
            { name: "Half Broast",          image: "./images/half broast.png",                    desc: "Two chest pieces plus two wings, fried crisp and tender",    price: 600 },
            { name: "Crispy Chicken Wings", image: "./images/fried chicken wings.png",            desc: "Chicken wings marinated to taste, crispy and juicy",         price: 550 }
        ]
    },
    {
        id: "section-heading-sandwich",
        title: "SANDWICHES",
        items: [
            { name: "Chicken Sandwich",        image: "images/chicken sandwich.jpg",   desc: "Grilled chicken, fresh lettuce and special sauce, all in one bite",  price: 400 },
            { name: "Club Sandwich",           image: "./images/club sandwich.jpg",    desc: "Grilled chicken, fresh lettuce and cheese in a classic club style",  price: 550 },
            { name: "Grilled Chicken Sandwich",image: "./images/grilled sandwich.jpg", desc: "Smoky BBQ sauce, grilled chicken fillet, toasted to perfection",    price: 600 }
        ]
    },  {
        id: "section-heading-breakfast",
        title: "BREAKFAST",
        items: [
            { name: "Omelette ",      image: "./images/omelette roll.png",    desc: "Freshly made omelette with vegetables, wrapped in love",         price: 120 },
            { name: "Anda Paratha",       image: "./images/anda paratha.jpg",     desc: "Crispy paratha served with fried egg and chutney",                  price: 100 },
            { name: "Halwa Puri",         image: "./images/halwa purii.jpg",       desc: "Traditional halwa with crispy puris, a classic breakfast",          price: 150 },
            { name: "Channa Paratha",     image: "./images/channa paratha.jpg",   desc: "Spicy channa curry served with fresh paratha",                      price: 130 },
            { name: "French Toast",       image: "./images/french toast.jpg",     desc: "Golden fried bread with honey and cream, sweet morning treat",      price: 120 },
            { name: "Boiled Eggs",        image: "./images/boiled eggs.jpg",      desc: "Two perfectly boiled eggs served with salt and pepper",             price: 80  },
            { name: "Lassi",              image: "./images/lassi.jpg",            desc: "Fresh sweet or salted lassi made with pure dahi",                   price: 100 },
            { name: "Chai",               image: "./images/chai.jpg",             desc: "Desi dhaba style chai, perfectly brewed with milk and spices",      price: 50  }
    ]
    },{
        id: "section-heading-extra",
        title: "EXTRAS",
        items: [
            { name: "Cold Drinks",  image: "./images/cold drink 1.5l.jpeg", desc: "Pepsi, 7up, Sprite, Dew, Coca-Cola — 500ml & 1.5L", smallPepsiPrice: 100, largePepsiPrice: 200 },
            { name: "Water Bottle", image: "./images/Water.jpg",            desc: "Fresh mineral water — 500ml and 1.5 Liter",         smallWaterPrice: 40,  LargeWaterPrice: 60  },
            { name: "Naan",         image: "./images/naan.jpg",             desc: "Tandoori naan crafted with love, fresh from oven",   singleNaanPrice: 30,  doubleNaanPrice: 50  },
            { name: "Puri Paratha", image: "./images/puti paratha.jpg",     desc: "Crispy golden paratha made fresh daily",             price: 50 }
        ]
    }
];


// console.log(menuSection[2])
// ── Get size options from an item ─────────────────────────────
function getSizeOptions(item) {
    const sizes = [];
    if (item.smallPizzaPrice)  sizes.push({ label: "Small",       price: item.smallPizzaPrice });
    if (item.mediumPizzaPrice) sizes.push({ label: "Medium",      price: item.mediumPizzaPrice });
    if (item.largePizzaPrice)  sizes.push({ label: "Large",       price: item.largePizzaPrice });
    if (item.extraLargePizza)  sizes.push({ label: "Extra Large", price: item.extraLargePizza });
    if (item.smallPepsiPrice)  sizes.push({ label: "500ml",       price: item.smallPepsiPrice });
    if (item.largePepsiPrice)  sizes.push({ label: "1.5L",        price: item.largePepsiPrice });
    if (item.smallWaterPrice)  sizes.push({ label: "500ml",       price: item.smallWaterPrice });
    if (item.LargeWaterPrice)  sizes.push({ label: "1.5L",        price: item.LargeWaterPrice });
    if (item.singleNaanPrice)  sizes.push({ label: "Single",      price: item.singleNaanPrice });
    if (item.doubleNaanPrice)  sizes.push({ label: "Double",      price: item.doubleNaanPrice });
    return sizes;
}

let html = '';

menuSection.forEach((section) => {
    if (!section.items || section.items.length === 0) return;
    
    html +=`<h3 id="${section.id}">${section.title}</h3><div class="pizza-section">`;
    
    section.items.forEach((item,index)=>{

        item.id = `${section.id}-${index}`
        
        let sizes = getSizeOptions(item)
        html +=  `
        <div class="pizza-section-boxes" data-section-id = "${section.id}" data-index = "${index}" ">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="manu-card-cointainer">
        <h4>${item.name}
        <a href="# >
        <i class="ri-heart-line"></i>
        </a>
        </h4>
        <p>${item.desc}</p>
        <h5>From <span>Rs.${sizes.length > 0 ? sizes[0].price : item.price}</span></h5>
        
        </div>
        </div>`;
    })
    html += '</div>'
});



let sizes;


document.querySelector(".menu-container").addEventListener("click",(event)=>{
    
    const clickedItem = event.target.closest(".pizza-section-boxes")
    // console.log(clickedItem.dataset.sectionId)
    // console.log(clickedItem.dataset.index)
    
    const sectionId = clickedItem.dataset.sectionId
    const itemNum = clickedItem.dataset.index
    
    
    let foundSection = menuSection.find(section => section.id === sectionId)  // find means looping to manusec saving each object into section and then if section.id === sectionId then save it to found section
    
    let foundItem = foundSection.items[itemNum]
    
    sizes = getSizeOptions(foundItem)
    
    let popupHtml = ''
    
    popupHtml = `<button class="popup-close-btn" id="popup-close">&#x2715;</button>
    <img class="popup-image" src="${foundItem.image}" alt="">
    <h4 class="popup-name">${foundItem.name}</h4>
    <p class="popup-para">${foundItem.desc}</p>
    
    <div class = "chose-size"><h3>CHOOSE A SIZE</h3>
        <div class = "sizes-grid">
            
        </div>
    </div>

    <h5 class="popup-price">RS:${sizes.length > 0 ? sizes[0].price : foundItem.price}</h5>
    <button class="popup-add-btn">Add to Cart - RS:${sizes.length > 0 ? sizes[0].price : foundItem.price}</button>`
    


        
        
        // console.log("popup opened")
        document.querySelector(".popup-overlay").style.display = "flex" 
        
        document.querySelector("#pop-up").innerHTML = popupHtml
        // console.log(popupHtml)
        
        let closeBtn = document.querySelector(".popup-close-btn")
        closeBtn.addEventListener(("click"),(event)=>{
                document.querySelector(".popup-overlay").style.display = "none" 
        })

        let popupOverlay = document.querySelector(".popup-overlay")
        popupOverlay.addEventListener("click",(event)=>{
            if(event.target === popupOverlay){    
            document.querySelector(".popup-overlay").style.display = "none";
            } 
        })



        if(sizes.length > 0){
            sizes.forEach((item,index) => {
                document.querySelector(".sizes-grid").innerHTML +=
                
                `<button data-price = "${item.price}" data-label = ${item.label} class = "popup-multi-button-${index} popup-multi-button">${item.label} <p> &nbspRs.${item.price}</p> </button>`

            document.querySelector(".chose-size").style.display = "contents"
            document.querySelector(".popup-price").style.display = "none"
                

        });
        
        let popupMultiButtons = document.querySelectorAll(".popup-multi-button")

        popupMultiButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            popupMultiButtons.forEach((btn) =>
              btn.classList.remove("selected"),
            );
            event.target.classList.add("selected");
            let addToCartBtn = document.querySelector(".popup-add-btn")

            let btnPrice = button.dataset.price
            let btnLabel = button.dataset.name

            addToCartBtn.innerHTML = `Add to Cart - RS:${btnPrice}`
          });
        });            
        }

        addedToCart(foundItem)
    });


function addedToCart(foundItem) {
  let addtocartBtn = document.querySelectorAll(".popup-add-btn");
  let baseSelected = document.querySelector(".popup-multi-button-0")
  let quantity = 1;
  addtocartBtn.forEach((btn) => {
      
    if (sizes.length > 0){
        baseSelected.classList.add("selected");}
      
      btn.addEventListener("click", () => {
            document.querySelector(".popup-overlay").style.display = "none";

        let selectedButton = document.querySelector(".popup-multi-button.selected")

       
        let btnPrice = selectedButton ? selectedButton.dataset.price : null;
        let btnLabel = selectedButton ? selectedButton.dataset.label : null;
    let matchingItems = cart.find((cartItems) => cartItems.itemId === foundItem.id);
      
    if(sizes.length > 0){
                let matchingItem = cart.find(cartItem => cartItem.itemId === foundItem.id && cartItem.itemLabel === btnLabel
                )
                if(matchingItem){   
                matchingItem.itemQuantity += 1
            } else {
                cart.push({ itemName: foundItem.name,
                    itemLabel : btnLabel,
                itemPrice: btnPrice,
                itemImage: foundItem.image,
                itemId: foundItem.id,
                itemQuantity: quantity,})
            }
    } else if (matchingItems) {
        matchingItems.itemQuantity += 1;
      } else {
        cart.push({
          itemName: foundItem.name,
          itemPrice: foundItem.price,
          itemImage: foundItem.image,
          itemId: foundItem.id,
          itemQuantity: quantity,
          itemLabel: ''
        });
      }
      localStorage.setItem('cart',JSON.stringify(cart))

      updateCartHtml()
      
    });
});
}



document.querySelector(".menu-container").innerHTML = html;

function updateCartHtml(){
let cartCount1 =  document.querySelector(".cart-count1")
let cartCount2 =  document.querySelector(".cart-count2")
  
    let quantity = 0
    cart.forEach(item =>{
        quantity += item.itemQuantity
    })
 
    
    
    cartCount1.innerHTML = quantity
    cartCount2.innerHTML = quantity
}

updateCartHtml()



const sections = document.querySelectorAll('h3[id]');
const navLinks = document.querySelectorAll('.nav2 .items a');
const nav2 = document.querySelector('.nav2')

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 170) {
            current = sec.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        
        if (link.getAttribute('href') === `#${current}`) {
            link.parentElement.classList.add('active');
            
            setTimeout(() => {
                link.parentElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    inline: 'center', 
                    block: 'nearest' 
                })
            }, 100)
        }
    });
});