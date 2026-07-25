let completed = 0;

let letterFinished = false;
const extraLettersFinished = [false, false, false];
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

const letter2Btn = document.getElementById("letter2Btn");
const letter3Btn = document.getElementById("letter3Btn");
const letter4Btn = document.getElementById("letter4Btn");
const extraLetterButtons = [letter2Btn, letter3Btn, letter4Btn];

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

extraLetterButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("locked") || extraLettersFinished[index]) return;
    openExtraLetter(index);
  });
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


const extraLetterContent = [
  { title: "From Sittie", message: "HAPPY BIRTHDAY MIEMIEE, how are you? hope your doing good. i wish you nothing but the best, especially today because its your day. i wish you nothing but happiness and success for your future, i often see you hang out with our friends lalo na classmate mo lang sila which is good, hope you stay like that. I just also wanna say that thank you for the memories we've shared, and i know life has taken us on different paths, but I couldn't let today pass without wishing you a happy birthday. No matter what happened between us, I'll always be grateful for the memories we shared and the lessons we learned together. You became a part of an important chapter of my life, and that's something I'll always appreciate. i hope life continues to treat you well and i hope your new life out there brings you peace and happiness. Wishing you the best and a good things ahead. Iloveyouuuu umieeeee💋🫶" },
  { title: "From elhaiza.salazar", message: "Hello Umiii this is your Izarett hehehe,  anyway happy birthday po Devilina 😆😆. As for this message for my Gorgeous Umii I just want to say na I'm very glad that I've meet you , and actually I can't believe na magiging friend kita 😆😆, but now we are already building a lot of memorable memories such as syempre nung Grade 10 tayo nohh lalo na yung kupyahan natin pag sa math time 😆. I also want to say thank you for everything you have done for me and I truly appreciate it po , lalo na po yung mag s-stay mo sa tabi ko and laging pag papaalala sakin ng bagay bagay lalo na yung about sa katangahan ko sa lovelife 😆😆. I wish that you're dream and wishes will come true as the time passed 😊,  please remember that We are always here for you and I understand kung bakit sometimes is hindi ka sanay na mag open up samin pero kahit ganun ay I'll just wait you up till you already comfortable enough para mag open up po sakin . Again happy birthday poo Umiii duss 😊😊" },
  { title: "From jenny", message: "Hi yumi , i wanna to say happy happy birthday to u , una sa lahat salamat palagi dahil nanjn ka para sakin kapag may problema ako at kapag kailan ko ng makakaramay sa mga stress ko sa buhay nanjn ka para mag advice at pag sabihan ako salamat talaga sa lahat at ang wish ko syu sana marami pang blessings  at more lucky day for  u and of course good health always and keep safe my lovable bsf mwuah 💋💋 happy birthday to u 🥳🥳." }
];

function openExtraLetter(index) {
  const letter = extraLetterContent[index];
  popupArea.classList.remove("closing");
  popupArea.classList.add("show");
  mailBox.style.display = "none";
  paperBox.innerHTML = `
    <div class="letter-rose" aria-hidden="true">&#127801;</div>
    <h2>${letter.title}</h2>
    <p>${letter.message}</p>
    <button class="done-btn" id="doneExtraLetterBtn">Done</button>
  `;
  paperBox.classList.add("show");
  document.getElementById("doneExtraLetterBtn").addEventListener("click", () => finishExtraLetter(index));
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

  letterBtn.textContent = "Letter I ✓";

  letterBtn.classList.add("locked");
  letterBtn.classList.remove("current-step");

  letter2Btn.classList.remove("locked");
  letter2Btn.classList.add("current-step");
  letter2Btn.textContent = "Letter II";

  closePopup();

  updateProgress();

}


function finishExtraLetter(index) {
  if (extraLettersFinished[index]) return;
  extraLettersFinished[index] = true;
  completed++;

  const button = extraLetterButtons[index];
  button.textContent = `Letter ${["II", "III", "IV"][index]} ✓`;
  button.classList.add("locked", "completed");
  button.classList.remove("current-step");

  const nextButton = extraLetterButtons[index + 1];
  if (nextButton) {
    nextButton.classList.remove("locked");
    nextButton.classList.add("current-step");
    nextButton.textContent = `Letter ${["III", "IV"][index]}`;
  } else {
    wishBtn.classList.remove("locked");
    wishBtn.classList.add("current-step");
    wishBtn.textContent = "Wish";
  }

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
  wishBtn.classList.remove("current-step");

  questionBtn.classList.remove("locked");
  questionBtn.classList.add("current-step");

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
  questionBtn.classList.remove("current-step");

  lastQuestionBtn.classList.remove("locked");
  lastQuestionBtn.classList.add("current-step");

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
  lastQuestionBtn.classList.remove("current-step");

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
    completed + "/7";

  if (completed === 7) {

    lockedFinalBtn.style.display = "none";

    finalBtn.style.display = "inline-block";

    finalBtn.classList.add(
      "final-btn",
      "unlocked"
    );

    finalBtn.textContent =
      "Secret Unlocked 💚";

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
