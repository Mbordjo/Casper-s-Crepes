let avatar = "dog1.png";

function selectAvatar(img){

    document
        .querySelectorAll(".avatar")
        .forEach(a=>a.classList.remove("selected"));

    img.classList.add("selected");

    avatar =
        img.src.split("/").pop();

}

function createProfile(){

    const user={

        name:
        document.getElementById("name").value,

        username:
        document.getElementById("username").value,

        email:
        document.getElementById("email").value,

        avatar:avatar,

        loyaltyPoints:0,

        favorites:[],

        orders:[]

    };

    localStorage.setItem(

        "user",

        JSON.stringify(user)

    );

    window.location.href="index.html";

}