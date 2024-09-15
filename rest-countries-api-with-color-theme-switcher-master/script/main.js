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

function duplicateDiv(i) {
  let originalDiv = document.getElementById(`Country-div${i}`);
  let clone = originalDiv.cloneNode(true);
  clone.removeAttribute("id");
  clone.id = `Country-div${i + 1}`;
  children = clone.children;
  children[0].id = `countryFlagID${i + 1}`;
  let grandson = children[1].children;
  let grandgrandson = grandson[0].children;
  // grandgrandson.innerText = "1111111111111111";

  grandson[0].id = `countryNameID${i + 1}`;
  grandson[1].id = `countryPopulationID${i + 1}`; //
  grandson[2].id = `countryReginID${i + 1}`;
  grandson[3].id = `countryCapitalID${i + 1}`;

  document.body.appendChild(clone);
}
// duplicateDiv(0);

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
/////////////////api
function getAll() {
  fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        //img
        let imgCountry = document.getElementById(`countryFlagID${i}`);
        imgCountry.src = data[i].flags.png;
        imgCountry.alt = data[i].flags.alt;
        //name
        let pCountryName = document.getElementById(`countryNameID${i}`);
        pCountryName.innerText = data[i].name.common;
        //pop
        let PCountryPop = document.getElementById(`countryPopulationID${i}`);
        PCountryPop.innerText = data[i].population;
        //reg
        let PCountryReg = document.getElementById(`countryReginID${i}`);
        PCountryReg.innerText = data[i].region;
        //cap
        let PCountryCap = document.getElementById(`countryCapitalID${i}`);
        if (data[i].capital) {
          //error
          PCountryCap.innerText = data[i].capital[0];
        } else {
          PCountryCap.innerText = "";
        }
        console.log(i);
        if (i !== data.length - 1) duplicateDiv(i);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}
getAll();
