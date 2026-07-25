function renderMenu(category = "All", search = "") {

    const menuContainer = document.getElementById("menu");

    menuContainer.innerHTML = "";

    const filteredMenu = menu.filter(item=>{

        const categoryMatch =
            category === "All" ||
            item.category === category;

        const searchMatch =
            item.name
            .toLowerCase()
            .includes(search.toLowerCase());

        return categoryMatch && searchMatch;

    });

    filteredMenu.forEach(item => {

        menuContainer.innerHTML += `

        <div class="menu-card">

            <div class="menu-left">

                <div class="menu-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}">

                </div>

                <div class="menu-info">

                    <h3>${item.name}</h3>

                    <p>${item.description}</p>

                </div>

            </div>

            <div class="menu-right">

                <button
                    class="favorite-button"
                    onclick="toggleFavorite('${item.name}')">

                    ♡

                </button>

                <div class="price">

                    $${item.price.toFixed(2)}

                </div>

                <button
                    class="add-button"
                    onclick="addToCart('${item.name}')">

                    +

                </button>

            </div>

        </div>

        `;

    });

    const buttons = document.querySelectorAll(".categories button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            renderMenu(button.textContent);

        });

    });

}

renderMenu();
updateCartCount();
renderCart();