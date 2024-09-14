let dark = false;
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

function duplicateDiv() {
  // Get the original div
  var originalDiv = document.getElementById("Country-div");
  // Clone the original div
  var clone = originalDiv.cloneNode(true);
  // Optionally, remove the id attribute from the clone
  clone.removeAttribute("id");
  // Append the clone to the body or any other container
  document.body.appendChild(clone);
}
duplicateDiv();

//////////////////

document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownList = document.querySelector(".dropdown-list");
  const dropdownItems = document.querySelectorAll(".dropdown-list li");

  // Toggle the dropdown on button click
  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent click from bubbling up
    this.classList.toggle("active");
    dropdownList.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".custom-dropdown")) {
      dropdownBtn.classList.remove("active");
      dropdownList.classList.remove("active");
    }
  });

  // Update button text when clicking a dropdown item
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent dropdown closing before updating text
      dropdownBtn.textContent = this.textContent;
      dropdownBtn.classList.remove("active");
      dropdownList.classList.remove("active");
    });
  });
});
