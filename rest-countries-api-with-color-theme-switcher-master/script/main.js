let dark = false;
let countryCount = 0;
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
//duplicate div function
function duplicateDiv(i) {
  let originalDiv = document.getElementById(`Country-div${i}`);
  let clone = originalDiv.cloneNode(true);
  // document.getElementById("Countries-blocks").innerHTML += clone.innerHTML;
  clone.removeAttribute("id");
  clone.id = `Country-div${i + 1}`;
  children = clone.children;
  children[0].id = `countryFlagID${i + 1}`;
  let grandson = children[1].children;

  grandson[0].id = `countryNameID${i + 1}`;
  grandson[1].id = `countryPopulationID${i + 1}`; //
  grandson[2].id = `countryReginID${i + 1}`;
  grandson[3].id = `countryCapitalID${i + 1}`;
  // document.getElementById("Countries-blocks").innerHTML += clone.innerHTML;
  document.getElementById("Countries-blocks").appendChild(clone);
}
// duplicateDiv(0);

//used stack overflow
//dropDownMenu
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

  // Update button text and run specific code when clicking a dropdown item
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent dropdown closing before updating text

      // Update the dropdown button text
      dropdownBtn.textContent = this.textContent;

      // Close the dropdown
      dropdownBtn.classList.remove("active");
      dropdownList.classList.remove("active");
      //stopped stackoverflow
      // Run specific code based on the selected item
      const selectedRegion = this.textContent;
      let reg = "";
      switch (selectedRegion) {
        case "Africa":
          console.log("You selected Africa");
          reg = "Africa";
          filterByReg(reg);
          break;
        case "America":
          console.log("You selected America");
          //America
          reg = "Americas";
          filterByReg(reg);
          break;
        case "Asia":
          console.log("You selected Asia");
          reg = "Asia";
          filterByReg(reg);
          break;
        case "Europe":
          console.log("You selected Europe");
          reg = "Europe";
          filterByReg(reg);
          break;
        case "Oceania":
          console.log("You selected Oceania");
          reg = "Oceania";
          filterByReg(reg);
          break;
        default:
          console.log("No region selected");
      }
    });
  });
});
//shows all country
function showAllCountry() {
  for (let i = 0; i < countryCount; i++) {
    let filterDiv = document.getElementById(`Country-div${i}`);
    filterDiv.style.display = "block";
  }
}
//filter by region
function filterByReg(reg) {
  showAllCountry();
  for (let i = 0; i < countryCount; i++) {
    let filterDiv = document.getElementById(`Country-div${i}`);
    let filterReg = document.getElementById(`countryReginID${i}`);
    if (!filterReg.innerText.includes(reg)) {
      filterDiv.style.display = "none";
    }
  }
}
//search
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("text");
  const searchIcon = document.getElementById("searchIcon");

  //the search function
  function search() {
    const userInput = searchInput.value.trim(); // Get the value of the search input
    if (userInput !== "") {
      console.log(userInput);
      showAllCountry();
      for (let i = 0; i < countryCount; i++) {
        let filterDiv = document.getElementById(`Country-div${i}`);
        let filterName = document.getElementById(`countryNameID${i}`);
        if (
          !filterName.innerText.toLowerCase().includes(userInput.toLowerCase())
        ) {
          filterDiv.style.display = "none";
        }
      }
    } else {
      console.log("Please enter a search term.");
      showAllCountry();
    }
  }
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      search();
    }
  });

  searchIcon.addEventListener("click", function () {
    search();
  });
});

//api
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
        pCountryName.className = "country-name";
        pCountryName.innerText = data[i].name.common;
        //pop
        let PCountryPop = document.getElementById(`countryPopulationID${i}`);
        let spanPop = document.createElement("span");
        spanPop.className = "info-span";
        spanPop.textContent = "Population: ";
        PCountryPop.appendChild(spanPop);
        PCountryPop.innerHTML = spanPop.outerHTML + data[i].population;
        //reg
        let PCountryReg = document.getElementById(`countryReginID${i}`);
        let spanReg = document.createElement("span");
        spanReg.className = "info-span";
        spanReg.textContent = "Region: ";
        PCountryReg.appendChild(spanReg);
        PCountryReg.innerHTML = spanReg.outerHTML + data[i].region;

        //cap
        let PCountryCap = document.getElementById(`countryCapitalID${i}`);
        if (data[i].capital) {
          let spanCap = document.createElement("span");
          spanCap.className = "info-span";
          spanCap.textContent = "Capital: ";
          PCountryCap.appendChild(spanCap);
          PCountryCap.innerHTML = spanCap.outerHTML + data[i].capital;
        } else {
          PCountryCap.innerText = "";
        }
        countryCount++;
        if (i !== data.length - 1) duplicateDiv(i);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}
getAll();
