let completed = 0;

let letterFinished = false;
let wishFinished = false;
let questionFinished = false;
let lastQuestionFinished = false;

let transitionStarted = false;


// =================================
// ELEMENTS
// =================================

const letterBtn =
  document.getElementById("letterBtn");

const wishBtn =
  document.getElementById("wishBtn");

const questionBtn =
  document.getElementById("questionBtn");

const lastQuestionBtn =
  document.getElementById("lastQuestionBtn");

const finalBtn =
  document.getElementById("finalBtn");

const lockedFinalBtn =
  document.getElementById("lockedFinalBtn");

const progressText =
  document.getElementById("progressText");

const popupArea =
  document.getElementById("popupArea");

const mailBox =
  document.getElementById("mailBox");

const mail =
  document.getElementById("mail");

const paperBox =
  document.getElementById("paperBox");

const heartCursor =
  document.getElementById("heartCursor");

const blackFade =
  document.getElementById("blackFade");

const unlockTicker =
  document.getElementById("unlockTicker");

let popupClosing = false;

// Works for static controls and buttons created inside each popup.
document.addEventListener("click", (event) => {
  const control = event.target.closest("button, .mail");
  if (!control || control.disabled || control.classList.contains("locked")) return;

  control.classList.remove("is-clicked");
  void control.offsetWidth;
  control.classList.add("is-clicked");
  control.addEventListener("animationend", () => {
    control.classList.remove("is-clicked");
  }, { once: true });
});


// Hide real Continue button first

finalBtn.style.display = "none";


// =================================
// BUTTON EVENTS
// =================================

letterBtn.addEventListener("click", openMail);

mail.addEventListener("click", openLetter);


wishBtn.addEventListener("click", () => {

  if (
    wishBtn.classList.contains("locked") ||
    wishFinished
  ) {
    return;
  }

  openWish();

});


questionBtn.addEventListener("click", () => {

  if (
    questionBtn.classList.contains("locked") ||
    questionFinished
  ) {
    return;
  }

  openQuestions();

});


lastQuestionBtn.addEventListener("click", () => {

  if (
    lastQuestionBtn.classList.contains("locked") ||
    lastQuestionFinished
  ) {
    return;
  }

  openLastQuestion();

});


// =================================
// FINAL TRANSITION
// No glass shatter
// =================================

finalBtn.addEventListener("click", () => {

  if (
    !finalBtn.classList.contains("unlocked") ||
    transitionStarted
  ) {
    return;
  }

  transitionStarted = true;

  finalBtn.disabled = true;

  document.body.classList.add("shake");


  // Stop shaking and begin black fade

  setTimeout(() => {

    document.body.classList.remove("shake");

    blackFade.classList.add("show");

  }, 700);


  // Open Stage 4

  setTimeout(() => {

    window.location.href = "secret.html";

  }, 1800);

});


// =================================
// OPEN LETTER
// =================================

function openMail() {

  if (letterFinished) {
    return;
  }

  popupArea.classList.remove("closing");
  popupArea.classList.add("show");

  mailBox.style.display = "block";

  paperBox.classList.remove("show");

  mail.classList.remove("open");

}


function openLetter() {

  mail.classList.add("open");

  setTimeout(() => {

    mailBox.style.display = "none";

    paperBox.innerHTML = `
      <h2>My Letter For You 💚</h2>

      <p>
        Happy Birthday! I made this little web journey for you because
        I want you to feel special today and I want to make you smile
        with this website.

        <br><br>

        This is only the first part, but every button has something made
        just for you. I'm sure this will excite you, and I hope this
        makes you feel special to me.

        <br><br>

        Anyway, happy birthday to you. I wish you the best of luck,
        and on this day, please enjoy your birthday.

        <br><br>

        Happy birthday.
      </p>

      <button class="done-btn" id="doneLetterBtn">
        Done
      </button>
    `;

    paperBox.classList.add("show");

    document
      .getElementById("doneLetterBtn")
      .addEventListener("click", finishLetter);

  }, 500);

}


// =================================
// OPEN WISH
// =================================

function openWish() {

  popupArea.classList.remove("closing");
  popupArea.classList.add("show");

  mailBox.style.display = "none";

  paperBox.innerHTML = `
    <div class="wish-stars">
      ✨ 🌙 ✨
    </div>

    <h2>Make A Wish 💚</h2>

    <p>What is your wish?</p>

    <textarea
      id="wishInput"
      placeholder="Type your wish here..."
    ></textarea>

    <button class="done-btn" id="doneWishBtn">
      Done
    </button>
  `;

  paperBox.classList.add("show");

  document
    .getElementById("doneWishBtn")
    .addEventListener("click", finishWish);

}


// =================================
// OPEN QUESTIONS
// =================================

function openQuestions() {

  popupArea.classList.remove("closing");
  popupArea.classList.add("show");

  mailBox.style.display = "none";

  paperBox.innerHTML = `
    <h2>Questions For You 💚</h2>

    <div class="question">
      <p>1. Are you having fun?</p>

      <label>
        <input type="checkbox">
        Yes
      </label>

      <label>
        <input type="checkbox">
        No
      </label>
    </div>

    <div class="question">
      <p>2. Did you receive flowers?</p>

      <label>
        <input type="checkbox">
        Yes
      </label>

      <label>
        <input type="checkbox">
        No
      </label>
    </div>

    <div class="question">
      <p>3. Did you receive a gift?</p>

      <label>
        <input type="checkbox">
        Yes
      </label>

      <label>
        <input type="checkbox">
        No
      </label>
    </div>

    <div class="question">
      <p>4. Did you eat?</p>

      <label>
        <input type="checkbox">
        Yes
      </label>

      <label>
        <input type="checkbox">
        No
      </label>
    </div>

    <div class="question">
      <p>5. Did you like what you ate?</p>

      <label>
        <input type="checkbox">
        Yes
      </label>

      <label>
        <input type="checkbox">
        No
      </label>
    </div>

    <button class="done-btn" id="doneQuestionBtn">
      Done
    </button>
  `;

  paperBox.classList.add("show");

  document
    .getElementById("doneQuestionBtn")
    .addEventListener("click", finishQuestion);

}


// =================================
// OPEN LAST QUESTION
// =================================

function openLastQuestion() {

  popupArea.classList.remove("closing");
  popupArea.classList.add("show");

  mailBox.style.display = "none";

  paperBox.innerHTML = `
    <h2>Last Question 💚</h2>

    <p>Who really am I to you?</p>

    <textarea
      id="lastQuestionInput"
      placeholder="Type your answer here..."
    ></textarea>

    <button
      class="done-btn"
      id="doneLastQuestionBtn"
    >
      Done
    </button>
  `;

  paperBox.classList.add("show");

  document
    .getElementById("doneLastQuestionBtn")
    .addEventListener(
      "click",
      finishLastQuestion
    );

}


// =================================
// FINISH LETTER
// =================================

function finishLetter() {

  if (letterFinished) {
    return;
  }

  letterFinished = true;

  completed++;

  letterBtn.textContent = "Letter ✓";

  letterBtn.classList.add("locked");

  wishBtn.classList.remove("locked");

  wishBtn.textContent = "Wish";

  closePopup();

  updateProgress();

}


// =================================
// FINISH WISH
// =================================

function finishWish() {

  if (wishFinished) {
    return;
  }

  wishFinished = true;

  completed++;

  wishBtn.textContent = "Wish ✓";

  wishBtn.classList.add("locked");

  questionBtn.classList.remove("locked");

  questionBtn.textContent = "Question";

  closePopup();

  updateProgress();

}


// =================================
// FINISH QUESTIONS
// =================================

function finishQuestion() {

  if (questionFinished) {
    return;
  }

  questionFinished = true;

  completed++;

  questionBtn.textContent = "Question ✓";

  questionBtn.classList.add("locked");

  lastQuestionBtn.classList.remove("locked");

  lastQuestionBtn.textContent =
    "Last Question";

  closePopup();

  updateProgress();

}


// =================================
// FINISH LAST QUESTION
// =================================

function finishLastQuestion() {

  if (lastQuestionFinished) {
    return;
  }

  lastQuestionFinished = true;

  completed++;

  lastQuestionBtn.textContent =
    "Last Question ✓";

  lastQuestionBtn.classList.add("locked");

  closePopup();

  updateProgress();

}


// =================================
// CLOSE POPUP
// =================================

function closePopup() {
  if (popupClosing) return;
  popupClosing = true;
  popupArea.classList.add("closing");

  setTimeout(() => {
    paperBox.classList.remove("show");
    popupArea.classList.remove("show", "closing");
    popupClosing = false;
  }, 380);

}


// =================================
// UPDATE PROGRESS
// =================================

function updateProgress() {

  progressText.textContent =
    completed + "/4";

  if (completed === 4) {

    unlockTicker.classList.add("finished");

    lockedFinalBtn.style.display = "none";

    finalBtn.style.display = "inline-block";

    finalBtn.classList.add(
      "final-btn",
      "unlocked"
    );

    finalBtn.textContent =
      "Continue 💚";

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
// FALLING FLOWERS
// =================================

setInterval(createFlower, 350);


function createFlower() {

  const flower =
    document.createElement("div");

  flower.className = "flower";

  const emojis = [
    "🌸",
    "🌺",
    "🌷",
    "🌹",
    "💐",
    "❤️",
    "💚",
    "💕",
    "💖"
  ];

  flower.innerHTML =
    emojis[
      Math.floor(
        Math.random() * emojis.length
      )
    ];

  flower.style.left =
    Math.random() * 100 + "vw";

  flower.style.fontSize =
    18 + Math.random() * 25 + "px";

  flower.style.animationDuration =
    4 + Math.random() * 4 + "s";

  document.body.appendChild(flower);

  setTimeout(() => {

    flower.remove();

  }, 8000);

}
