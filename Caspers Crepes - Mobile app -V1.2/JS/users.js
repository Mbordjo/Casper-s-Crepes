// =========================
// User Data
// =========================

let user =
    JSON.parse(localStorage.getItem("user")) || {

        name: "Casper Customer",

        email: "casper@example.com",

        loyaltyPoints: 0,

        favorites: [],

        orderHistory: []

    };