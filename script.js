// =================================
// ORIGINAL FLOWER INTRO
// =================================

const flowerIntro = document.getElementById("flowerIntro");

function createIntroPetal() {
    const petal = document.createElement("div");

    petal.className = "introPetal";
    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = Math.random() * 100 + "vh";

    petal.style.fontSize = 15 + Math.random() * 35 + "px";
    petal.style.animationDuration =
        0.8 + Math.random() * 1.2 + "s";

    flowerIntro.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 2000);
}

const introInterval = setInterval(createIntroPetal, 80);

setTimeout(() => {
    clearInterval(introInterval);
}, 4000);


// =================================
// HEART CURSOR
// =================================

const heartCursor = document.getElementById("heartCursor");

document.addEventListener("mousemove", function (event) {
    heartCursor.style.left = event.clientX + "px";
    heartCursor.style.top = event.clientY + "px";
});

document.querySelectorAll("button, a").forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        heartCursor.classList.add("hovering");
    });

    element.addEventListener("mouseleave", function () {
        heartCursor.classList.remove("hovering");
    });
});

document.addEventListener("mouseleave", function () {
    heartCursor.style.opacity = "0";
});

document.addEventListener("mouseenter", function () {
    heartCursor.style.opacity = "1";
});


// =================================
// CURSOR SPARKLES
// =================================

document.addEventListener("mousemove", function (event) {
    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
});


// =================================
// FALLING PETALS
// =================================

function createPetal() {
    const petal = document.createElement("div");

    petal.className = "petal";
    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        5 + Math.random() * 5 + "s";

    petal.style.fontSize =
        18 + Math.random() * 18 + "px";

    document.body.appendChild(petal);

    petal.addEventListener("animationend", function () {
        petal.remove();
    });
}

setInterval(createPetal, 500);


// =================================
// STAGE 1 TO STAGE 2 TRANSITION
// =================================

const beginBtn = document.getElementById("beginBtn");
const pageTransition = document.getElementById("pageTransition");

let isTransitioning = false;

beginBtn.addEventListener("click", function () {
    if (isTransitioning) {
        return;
    }

    isTransitioning = true;

    document.body.classList.add("transitioning");
    pageTransition.classList.add("active");

    // Open Stage 2 after blink animation
    setTimeout(function () {
        window.location.href = "login.html";
    }, 1650);
});