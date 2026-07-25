// =========================
// Shopping Cart
// =========================

let cart = JSON.parse(

    localStorage.getItem("cart")

) || [];

function addToCart(name){

    const selectedItem = menu.find(item => item.name === name);

    const existing = cart.find(item=>{

        return item.name===selectedItem.name;

    });

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            ...selectedItem,

            quantity:1

        });
        

    }

    updateCartCount();

    renderCart();

    console.log(cart);

    console.log("Total: $" + getCartTotal().toFixed(2));

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

}

function updateCartCount(){

    document.getElementById("cart-count").textContent = cart.length;

}

function getCartTotal(){

    let total = 0;

    cart.forEach(item => {

        total += item.price;

    });

    return total;

}

function renderCart() {

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    cart.forEach(item => {

        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>

                        ${item.name}

                    </strong>

                    <div class="quantity">

                        <button
                            onclick="decreaseQuantity('${item.name}')">

                            -

                        </button>

                        <span>

                            ${item.quantity}

                        </span>

                        <button
                            onclick="increaseQuantity('${item.name}')">

                            +

                        </button>

                    </div>

                    <button

                        class="remove"

                        onclick="removeItem('${item.name}')">

                        ✕

                    </button>

                </div>

                <span>$${item.price.toFixed(2)}</span>

            </div>

        `;

    });

    document.getElementById("cart-total").textContent =
        "Total: $" + getCartTotal().toFixed(2);

}

function increaseQuantity(name){

    const item =
        cart.find(i=>i.name===name);

    item.quantity++;

    renderCart();

    updateCartCount();

}

function decreaseQuantity(name){

    const item =
        cart.find(i=>i.name===name);

    item.quantity--;

    if(item.quantity<=0){

        cart =
            cart.filter(i=>i.name!==name);

    }

    renderCart();

    updateCartCount();

}

function removeItem(name){

    cart =
        cart.filter(item=>item.name!==name);

    renderCart();

    updateCartCount();

}