// =========================
// User Data
// =========================

let user =
JSON.parse(

    localStorage.getItem("user")

);

if(

    !user

){

    if(

        !window.location.pathname.includes("welcome.html")

    ){

        window.location.href="welcome.html";

    }

}