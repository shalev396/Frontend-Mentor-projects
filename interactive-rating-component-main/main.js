const submit = document.getElementById("submit");
const Rating = document.getElementById("Rating");
const thanks = document.getElementById("thanks");
const buttons = document.querySelectorAll(".rateButton button");
const selected = document.getElementById("selected");
let val = 0;

submit.addEventListener("click", function () {
  Rating.style.display = "none";
  thanks.style.display = "flex";
  selected.textContent = `You selected ${val} out of 5`;
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    val = this.textContent;
    clear();
    this.classList.add("active");
  });
});

function clear() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
}
