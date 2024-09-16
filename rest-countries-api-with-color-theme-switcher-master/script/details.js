let dark = false;
//dark mode
document.getElementById("DMBut").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  let imgMoon = document.getElementById("moonIcon");
  let imgSearch = document.getElementById("searchIcon");
  if (dark != true) {
    dark = true;
    imgMoon.src = "/assets/images/icons8-dm-50.png";
    imgSearch.src = "/assets/images/icons8-dm-search-24.png";
  } else {
    dark = false;
    imgMoon.src = "/assets/images/icons8-lm-50.png";
    imgSearch.src = "/assets/images/icons8-lm-search-24.png";
  }
});
