//takes care for background
//used stack overflow for this
function updateImageSrc() {
  const imgElement = document.getElementById("background-img");
  if (window.innerWidth > 400) {
    imgElement.src = "./assets/images/background-pattern-desktop.svg";
  } else {
    imgElement.src = "./assets/images/background-pattern-mobile.svg";
  }
}
updateImageSrc();
window.addEventListener("resize", updateImageSrc);
//code
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const q1Button = document.getElementById("q1Button");
const q2Button = document.getElementById("q2Button");
const q3Button = document.getElementById("q3Button");
const q4Button = document.getElementById("q4Button");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
// question1.addEventListener("");
for (let i = 1; i <= 4; i++) {
  eval(`question${i}`).addEventListener("mouseover", function () {
    for (let j = 1; j <= 4; j++) {
      eval(`question${j}`).style.color = "var(--color-p-Dark-purple-900)";
    }
    eval(`question${i}`).style.color = "var(--color-p-Grayish-purple-700)";
  });
}
for (let i = 1; i <= 4; i++) {
  eval(`q${i}Button`).addEventListener("click", function () {
    let opened = false;
    if (eval(`answer${i}`).style.display === "flex") opened = true;
    for (let j = 1; j <= 4; j++) {
      eval(`answer${j}`).style.display = "none";
      eval(`q${j}Button`).src = "./assets/images/icon-plus.svg";
    }

    if (opened) {
      eval(`q${i}Button`).src = "./assets/images/icon-plus.svg";
      eval(`answer${i}`).style.display = "none";
    } else {
      eval(`q${i}Button`).src = "./assets/images/icon-minus.svg";
      eval(`answer${i}`).style.display = "flex";
    }
  });
}
