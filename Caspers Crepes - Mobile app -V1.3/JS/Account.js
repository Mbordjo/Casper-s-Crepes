// =========================
// Account Page
// =========================

function loadAccount(){

    document.getElementById(

        "user-name"

    ).textContent=user.name;

    document.getElementById(

        "user-email"

    ).textContent=user.email;

    document.getElementById(

        "user-points"

    ).textContent=

        user.loyaltyPoints+" Points";

    document.getElementById(

        "profile-picture"

    ).src=

        "images/avatars/"+user.avatar;

}


function updateLoyaltyProgress(){

    const rewardGoal = 100;


    const points = user.loyaltyPoints;


    const percentage = 
        Math.min((points / rewardGoal) * 100, 100);


    document.getElementById("progress-fill").style.width =
        percentage + "%";


    document.getElementById("progress-message").textContent =
        points + " / " + rewardGoal + " points until your next reward";


}


loadAccount();
updateLoyaltyProgress();