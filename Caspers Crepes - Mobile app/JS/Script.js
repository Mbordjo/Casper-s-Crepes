const cartButton = document.getElementById("cart-button");

cartButton.addEventListener("click", () => {

    document
        .getElementById("cart-panel")
        .classList.toggle("hidden");

});

const search = document.getElementById("search");

search.addEventListener("input",()=>{

    const active =
        document.querySelector(".categories .active");

    renderMenu(

        active.textContent,

        search.value

    );

});

let favorites = [];

function toggleFavorite(name){

    if(favorites.includes(name)){

        favorites =
            favorites.filter(item=>item!==name);

    }else{

        favorites.push(name);

    }

    console.log(favorites);

}