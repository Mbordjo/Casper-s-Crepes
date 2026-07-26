console.log("Casper's Crepes Loaded");

// Current Loyalty Points

let loyaltyPoints = 0;

// Free Crepe Goal

const goal = 500;

updateLoyalty();

function updateLoyalty(){

    const fill = document.querySelector(".progress-fill");

    const text = document.querySelector(".points");

    const left = document.querySelector(".points-left");

    const percent = (loyaltyPoints / goal) * 100;

    fill.style.width = percent + "%";

    text.textContent = `⭐ ${loyaltyPoints} Points`;

    left.textContent =
        `${goal - loyaltyPoints} Points until Free Crepe`;

}

// ------------------------------
// Category Buttons
// ------------------------------

const categories = document.querySelectorAll(".category");

categories.forEach(button => {

    button.addEventListener("click", () => {

        categories.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

    });

});
