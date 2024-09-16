let dark = false;
let countryName = "israel"; // sessionStorage.getItem("countryName");
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

//api
function getAll() {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //img
      let imgCountry = document.getElementById(`countryFlag`);
      imgCountry.src = data[0].flags.png;
      imgCountry.alt = data[0].flags.alt;
      //name
      let pCountryName = document.getElementById(`countryName`);
      pCountryName.className = "detail-country-name";
      pCountryName.innerText = data[0].name.common;
      //nativename
      let pCountryNativeName = document.getElementById(`countryNativeName`);
      let spanNativeName = document.createElement("span");
      spanNativeName.className = "detail-info-span";
      spanNativeName.textContent = "Native name: ";
      pCountryNativeName.className = "detail-country-native-name";
      temp = "";
      //TODO take leng from .languages and use first
      temp = data[0].name.nativeName;
      temp = temp[Object.keys(temp)[0]].official;
      console.log(temp);
      pCountryNativeName.innerHTML = spanNativeName.outerHTML + temp;
      //pop
      let PCountryPop = document.getElementById(`countryPopulationID${i}`);
      let spanPop = document.createElement("span");
      spanPop.className = "detail-info-span";
      spanPop.textContent = "Population: ";
      PCountryPop.appendChild(spanPop);
      PCountryPop.innerHTML = spanPop.outerHTML + data[0].population;
      //reg
      let PCountryReg = document.getElementById(`countryReginID${i}`);
      let spanReg = document.createElement("span");
      spanReg.className = "info-span";
      spanReg.textContent = "Region: ";
      PCountryReg.appendChild(spanReg);
      PCountryReg.innerHTML = spanReg.outerHTML + data[0].region;

      //cap
      let PCountryCap = document.getElementById(`countryCapitalID${i}`);
      if (data[i].capital) {
        let spanCap = document.createElement("span");
        spanCap.className = "info-span";
        spanCap.textContent = "Capital: ";
        PCountryCap.appendChild(spanCap);
        PCountryCap.innerHTML = spanCap.outerHTML + data[0].capital;
      } else {
        PCountryCap.innerText = "";
      }
      countryCount++;
      if (i !== data.length - 1) duplicateDiv(i);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}
getAll();
