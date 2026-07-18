// =================================
// GET HTML ELEMENTS
// =================================

const passwordInput =
    document.getElementById("passwordInput");

const unlockBtn =
    document.getElementById("unlockBtn");

const loginMessage =
    document.getElementById("loginMessage");

const eyeBtn =
    document.getElementById("eyeBtn");

const hintBtn =
    document.getElementById("hintBtn");

const hintBox =
    document.getElementById("hintBox");

const heartCursor =
    document.getElementById("heartCursor");

const flowerContainer =
    document.getElementById("flower-container");

const loginCard =
    document.getElementById("loginCard");


// Transition elements
const unlockTransition =
    document.getElementById("unlockTransition");

const transitionLock =
    document.getElementById("transitionLock");

const transitionText =
    document.getElementById("transitionText");


// =================================
// PASSWORD
// =================================

const correctPassword = "1234";

let isUnlocking = false;


/* Check entered password */

function checkPassword() {

    if (isUnlocking) {
        return;
    }

    const enteredPassword =
        passwordInput.value.trim().toLowerCase();

    const expectedPassword =
        correctPassword.toLowerCase();


    /* CORRECT PASSWORD */

    if (enteredPassword === expectedPassword) {

        isUnlocking = true;

        loginMessage.style.color = "#00ff99";
        loginMessage.textContent = "Access granted 💚";

        unlockBtn.textContent = "Access Granted";
        unlockBtn.disabled = true;

        passwordInput.disabled = true;
        eyeBtn.disabled = true;
        hintBtn.disabled = true;


        /* Start transition shortly after success message */

        setTimeout(function () {

            document.body.classList.add("unlocking");

            unlockTransition.classList.add("show");

        }, 500);


        /* Unlock padlock near the end */

        setTimeout(function () {

            transitionLock.textContent = "🔓";

            transitionLock.classList.add("unlocked");

            transitionText.textContent =
                "The next stage is unlocked 💚";

        }, 4500);


        /* Go to Stage 3 */

        setTimeout(function () {

            window.location.href = "web.html";

        }, 5500);

    }


    /* WRONG PASSWORD */

    else {

        loginMessage.style.color = "#ff6b6b";

        loginMessage.textContent =
            "Wrong code, try again ❤️";

        passwordInput.value = "";

        loginCard.classList.remove("shake");

        // Restart the shake animation
        void loginCard.offsetWidth;

        loginCard.classList.add("shake");

        setTimeout(function () {
            loginCard.classList.remove("shake");
        }, 400);

        passwordInput.focus();
    }
}


// Unlock button
unlockBtn.addEventListener("click", checkPassword);


// =================================
// PRESS ENTER TO UNLOCK
// =================================

passwordInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        checkPassword();
    }

});


// =================================
// SHOW OR HIDE PASSWORD
// =================================

eyeBtn.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        eyeBtn.textContent = "🙈";

    } else {

        passwordInput.type = "password";

        eyeBtn.textContent = "👁";
    }

    passwordInput.focus();
});


// =================================
// HINT BUTTON
// =================================

hintBtn.addEventListener("click", function () {

    hintBox.classList.toggle("hidden");

});


// =================================
// HEART CURSOR
// =================================

document.addEventListener("mousemove", function (event) {

    heartCursor.style.left =
        event.clientX + "px";

    heartCursor.style.top =
        event.clientY + "px";

});


// =================================
// FALLING FLOWERS
// =================================

const flowers = [
    "🌸",
    "🌺",
    "🌷",
    "💐",
    "🌹",
    "💚"
];

function createFlower() {

    const flower =
        document.createElement("div");

    flower.className = "flower";

    flower.textContent =
        flowers[
            Math.floor(Math.random() * flowers.length)
        ];

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        Math.random() * 18 + 18 + "px";

    const duration =
        Math.random() * 4 + 5;

    flower.style.animationDuration =
        duration + "s";

    flowerContainer.appendChild(flower);

    setTimeout(function () {
        flower.remove();
    }, duration * 1000);
}

setInterval(createFlower, 300);


// Focus password after entrance animation
setTimeout(function () {

    passwordInput.focus();

}, 1500);