// =================================
// ORIGINAL ELEMENTS
// =================================

const heartCursor =
  document.getElementById("heartCursor");

const flowerContainer =
  document.getElementById("flowerContainer");

const letterBtn =
  document.getElementById("letterBtn");

const wishesBtn =
  document.getElementById("wishesBtn");

const videoBtn =
  document.getElementById("videoBtn");

const lastBtn =
  document.getElementById("lastBtn");

const modal =
  document.getElementById("modal");

const modalBox =
  document.getElementById("modalBox");

const finalScreen =
  document.getElementById("finalScreen");


// =================================
// TRANSITION ELEMENTS
// =================================

const wallTransition =
  document.getElementById("wallTransition");

const crackContainer =
  document.getElementById("crackContainer");

const breakFlash =
  document.getElementById("breakFlash");

const transitionMessage =
  document.getElementById("transitionMessage");

const povBlink =
  document.getElementById("povBlink");


// =================================
// PROGRESS VARIABLES
// =================================

let letterRead = false;
let wishesRead = false;
let videoFinished = false;

let stageReady = false;


// =================================
// STAGE 4 ENTRANCE
// =================================

window.addEventListener("load", () => {
  startStageFourTransition();
});


function startStageFourTransition() {

  setTimeout(() => {
    wallTransition.classList.add("earthquake");

    transitionMessage.textContent =
      "The wall is beginning to crack...";
  }, 700);


  setTimeout(() => {
    createCracks(12);
  }, 1300);


  setTimeout(() => {
    createCracks(18);

    transitionMessage.textContent =
      "Something is behind it...";
  }, 2300);


  setTimeout(() => {
    createCracks(24);
  }, 3200);


  setTimeout(() => {
    wallTransition.classList.remove("earthquake");

    breakFlash.classList.add("flash");

    createWallPieces();

    wallTransition.classList.add("breaking");

    transitionMessage.style.display = "none";

    document.body.classList.add("stage-ready");
  }, 4100);


  setTimeout(() => {
    povBlink.classList.add("show");

    void povBlink.offsetWidth;

    povBlink.classList.add("blink");
  }, 4550);


  setTimeout(() => {
    povBlink.classList.remove("show", "blink");

    wallTransition.style.display = "none";

    document.body.classList.remove(
      "transition-playing"
    );

    stageReady = true;
  }, 8050);

}


// =================================
// CREATE CRACKS
// =================================

function createCracks(amount) {

  for (let index = 0; index < amount; index++) {

    const crack =
      document.createElement("div");

    crack.className = "crack-line";

    const angle =
      Math.random() * 360;

    const length =
      100 + Math.random() * 420;

    const offsetX =
      (Math.random() - 0.5) * 90;

    const offsetY =
      (Math.random() - 0.5) * 90;

    crack.style.left =
      `calc(50% + ${offsetX}px)`;

    crack.style.top =
      `calc(50% + ${offsetY}px)`;

    crack.style.transform =
      `rotate(${angle}deg)`;

    crack.style.setProperty(
      "--crack-length",
      length + "px"
    );

    crack.style.animationDelay =
      Math.random() * 0.25 + "s";

    crackContainer.appendChild(crack);

    createCrackBranches(
      angle,
      length
    );
  }
}


// =================================
// CRACK BRANCHES
// =================================

function createCrackBranches(
  parentAngle,
  parentLength
) {

  const branchCount =
    1 + Math.floor(Math.random() * 3);

  for (
    let branchIndex = 0;
    branchIndex < branchCount;
    branchIndex++
  ) {

    const branch =
      document.createElement("div");

    branch.className = "crack-branch";

    const direction =
      Math.random() > 0.5 ? 1 : -1;

    const branchAngle =
      parentAngle +
      direction * (25 + Math.random() * 55);

    const distanceFromCenter =
      parentLength *
      (0.25 + Math.random() * 0.5);

    const radians =
      parentAngle * Math.PI / 180;

    const branchX =
      window.innerWidth / 2 +
      Math.cos(radians) * distanceFromCenter;

    const branchY =
      window.innerHeight / 2 +
      Math.sin(radians) * distanceFromCenter;

    branch.style.left =
      branchX + "px";

    branch.style.top =
      branchY + "px";

    branch.style.transform =
      `rotate(${branchAngle}deg)`;

    branch.style.setProperty(
      "--branch-length",
      35 + Math.random() * 120 + "px"
    );

    branch.style.animationDelay =
      0.25 + Math.random() * 0.35 + "s";

    crackContainer.appendChild(branch);
  }
}


// =================================
// WALL PIECES
// =================================

function createWallPieces() {

  for (let index = 0; index < 45; index++) {

    const piece =
      document.createElement("div");

    piece.className = "wall-piece";

    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      350 + Math.random() * 900;

    const x =
      Math.cos(angle) * distance;

    const y =
      Math.sin(angle) * distance;

    piece.style.setProperty(
      "--piece-x",
      x + "px"
    );

    piece.style.setProperty(
      "--piece-y",
      y + "px"
    );

    piece.style.setProperty(
      "--piece-rotation",
      Math.random() * 1000 + "deg"
    );

    const size =
      60 + Math.random() * 160;

    piece.style.width =
      size + "px";

    piece.style.height =
      size + "px";

    piece.style.animationDelay =
      Math.random() * 0.18 + "s";

    wallTransition.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 1600);
  }
}


// =================================
// HEART CURSOR
// =================================

document.addEventListener(
  "mousemove",
  (event) => {

    heartCursor.style.left =
      event.clientX + "px";

    heartCursor.style.top =
      event.clientY + "px";
  }
);


// =================================
// LETTER BUTTON
// =================================

letterBtn.addEventListener("click", () => {

  if (!stageReady || letterRead) return;

  modalBox.innerHTML = `
    <h2>My Letter To You 💚</h2>

    <p>
      Happy Birthday. I made this website because I wanted to give you
      something different, something made with effort, time, and care.
    </p>

    <p>
      I hope that while you were going through every stage, you felt how
      special this day is and how much I wanted to make you smile.
    </p>

    <p>
      Thank you for being part of my life. This little website is my way
      of showing that you deserve something thoughtful and beautiful.
    </p>

    <button
      class="close-btn"
      onclick="finishLetter()"
    >
      Continue
    </button>
  `;

  modal.classList.add("show");
});


// =================================
// WISHES BUTTON
// =================================

wishesBtn.addEventListener("click", () => {

  if (!stageReady || wishesRead) return;

  modalBox.innerHTML = `
    <h2>My Wishes For You 🌸</h2>

    <p>
      I wish you happiness, peace, strength, and success in everything
      you do.
    </p>

    <p>
      I wish that you keep growing, smiling, and becoming the person
      you dream of becoming.
    </p>

    <p>
      And for us, I wish that we continue to understand each other,
      support each other, and create more memories together.
    </p>

    <button
      class="close-btn"
      onclick="finishWishes()"
    >
      Continue
    </button>
  `;

  modal.classList.add("show");
});


// =================================
// NEW VIDEO BUTTON
// =================================

videoBtn.addEventListener("click", () => {

  if (
    !stageReady ||
    videoBtn.classList.contains("locked")
  ) {
    return;
  }

  modalBox.innerHTML = `
    <h2>A Video For You 🎬</h2>

    <p>
      Watch this video until the end.
    </p>

    <video
      id="memoryVideo"
      class="memory-video"
      controls
      playsinline
    >
     <source src="videos/video.mp4" type="video/mp4">

      Your browser does not support this video.
    </video>

    <p
      class="video-message"
      id="videoMessage"
    >
      The final button will unlock when the video finishes.
    </p>

    <button
      class="close-btn video-done-btn"
      id="videoDoneBtn"
      disabled
    >
      Finish Watching
    </button>
  `;

  modal.classList.add("show");

  const memoryVideo =
    document.getElementById("memoryVideo");

  const videoDoneBtn =
    document.getElementById("videoDoneBtn");

  const videoMessage =
    document.getElementById("videoMessage");


  memoryVideo.addEventListener("ended", () => {

    videoDoneBtn.disabled = false;

    videoDoneBtn.classList.add("ready");

    videoDoneBtn.textContent =
      "Continue 💚";

    videoMessage.textContent =
      "Video completed. One Last Thing is ready.";
  });


  videoDoneBtn.addEventListener("click", () => {

    if (videoDoneBtn.disabled) return;

    finishVideo();
  });
});


// =================================
// FINAL BUTTON
// =================================

lastBtn.addEventListener("click", () => {

  if (
    !stageReady ||
    lastBtn.classList.contains("locked")
  ) {
    return;
  }

  modal.classList.remove("show");

  setTimeout(() => {
    flowerContainer.style.display = "none";

    heartCursor.style.display = "none";

    finalScreen.classList.add("show");
  }, 500);
});


// =================================
// FINISH LETTER
// =================================

function finishLetter() {

  if (letterRead) return;

  letterRead = true;

  letterBtn.textContent =
    "💌 Letter ✓";

  letterBtn.classList.add("completed");

  closeModal();

  checkVideoUnlock();
}


// =================================
// FINISH WISHES
// =================================

function finishWishes() {

  if (wishesRead) return;

  wishesRead = true;

  wishesBtn.textContent =
    "🌸 Wishes ✓";

  wishesBtn.classList.add("completed");

  closeModal();

  checkVideoUnlock();
}


// =================================
// UNLOCK VIDEO
// =================================

function checkVideoUnlock() {

  if (letterRead && wishesRead) {

    videoBtn.disabled = false;

    videoBtn.classList.remove("locked");

    videoBtn.classList.add("unlocked");

    videoBtn.innerHTML =
      "🎬 Watch Our Video";
  }
}


// =================================
// FINISH VIDEO
// =================================

function finishVideo() {

  if (videoFinished) return;

  videoFinished = true;

  videoBtn.textContent =
    "🎬 Video ✓";

  videoBtn.classList.remove("unlocked");

  videoBtn.classList.add("completed");

  closeModal();

  unlockLastButton();
}


// =================================
// UNLOCK LAST BUTTON
// =================================

function unlockLastButton() {

  if (!videoFinished) return;

  lastBtn.disabled = false;

  lastBtn.classList.remove("locked");

  lastBtn.classList.add("unlocked");

  lastBtn.innerHTML =
    "🎁 One Last Thing";
}


// =================================
// CLOSE MODAL
// =================================

function closeModal() {
  modal.classList.remove("show");
}


// =================================
// FLOWERS
// =================================

function createFlower() {

  if (!stageReady) return;

  const flower =
    document.createElement("div");

  flower.className = "flower";

  const emojis = [
    "🌸",
    "🌷",
    "🌹",
    "💚",
    "✨",
    "🍃"
  ];

  flower.innerHTML =
    emojis[
      Math.floor(Math.random() * emojis.length)
    ];

  flower.style.left =
    Math.random() * 100 + "vw";

  flower.style.fontSize =
    16 + Math.random() * 24 + "px";

  flower.style.animationDuration =
    4 + Math.random() * 4 + "s";

  flower.style.opacity =
    0.5 + Math.random() * 0.5;

  flowerContainer.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 8000);
}


setInterval(createFlower, 280);