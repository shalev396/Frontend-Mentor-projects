let dark = false;
// let countryName = "Israel";
let countryName = sessionStorage.getItem("countryName");
//dark mode
document.getElementById("DMBut").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  let imgMoon = document.getElementById("moonIcon");
  let imgArrow = document.getElementById("backArrow");
  if (dark != true) {
    dark = true;
    imgMoon.src =
      "/Frontend-Mentor-projects/rest-countries-api-with-color-theme-switcher-master/assets/images/icons8-dm-50.png";
    imgArrow.src =
      "/Frontend-Mentor-projects/rest-countries-api-with-color-theme-switcher-master/assets/images/icons8-dm-arrow-50.png";
  } else {
    dark = false;
    imgMoon.src =
      "/Frontend-Mentor-projects/rest-countries-api-with-color-theme-switcher-master/assets/images/icons8-lm-50.png";
    imgArrow.src =
      "/Frontend-Mentor-projects/rest-countries-api-with-color-theme-switcher-master/assets/images/icons8-lm-arrow-50.png";
  }
});
//back
document.getElementById(`back-button`).onclick = function () {
  location.href =
    "/Frontend-Mentor-projects/rest-countries-api-with-color-theme-switcher-master/index.html";
};
//api
function getCountry(countryName1, countryIndex, allCountries) {
  fetch(`https://restcountries.com/v3.1/name/${countryName1}`, {
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
      temp = data[0].translations.cym.official;
      // temp = temp[Object.keys(temp)[0]].official;
      pCountryNativeName.innerHTML = spanNativeName.outerHTML + temp;
      //pop
      let PCountryPop = document.getElementById(`countryPopulation`);
      let spanPop = document.createElement("span");
      spanPop.className = "detail-info-span";
      spanPop.textContent = "Population: ";
      PCountryPop.appendChild(spanPop);
      temp = "";
      temp = data[0].population;
      temp = parseInt(temp);
      temp = temp.toLocaleString();
      PCountryPop.innerHTML = spanPop.outerHTML + temp;
      //reg
      let PCountryReg = document.getElementById(`countryRegion`);
      let spanReg = document.createElement("span");
      spanReg.className = "detail-info-span";
      spanReg.textContent = "Region: ";
      PCountryReg.appendChild(spanReg);
      PCountryReg.innerHTML = spanReg.outerHTML + data[0].region;

      //subreg
      let PCountrySubReg = document.getElementById(`countrySunRegion`);
      let spanSubReg = document.createElement("span");
      spanSubReg.className = "detail-info-span";
      spanSubReg.textContent = "Sub Region: ";
      PCountrySubReg.appendChild(spanSubReg);
      console.log(data[0].subregion);

      if (data[0].subregion) {
        PCountrySubReg.innerHTML = spanSubReg.outerHTML + data[0].subregion;
      } else PCountrySubReg.innerHTML = spanSubReg.outerHTML + "";

      //cap
      let PCountryCap = document.getElementById(`countryCapital`);
      if (data[0].capital) {
        let spanCap = document.createElement("span");
        spanCap.className = "detail-info-span";
        spanCap.textContent = "Capital: ";
        PCountryCap.appendChild(spanCap);
        PCountryCap.innerHTML = spanCap.outerHTML + data[0].capital;
      } else {
        PCountryCap.innerText = "";
      }
      //TopDomain
      let PCountryTopDom = document.getElementById(`countryTopDomain`);
      let spanTopDom = document.createElement("span");
      spanTopDom.className = "detail-info-span";
      spanTopDom.textContent = "Top Level Domain: ";
      PCountryTopDom.appendChild(spanTopDom);
      PCountryTopDom.innerHTML = spanTopDom.outerHTML + data[0].tld[0];

      //currencies
      let PCountryCurr = document.getElementById(`countryCurrencies`);
      let spanCurr = document.createElement("span");
      spanCurr.className = "detail-info-span";
      spanCurr.textContent = "Currencies: ";
      PCountryCurr.appendChild(spanCurr);
      let allCurr = "";
      let countCurr = 0;
      if (data[0].currencies) {
        temp = "";
        temp = data[0].currencies;
        for (let j = 0; Object.keys(temp)[j]; j++) {
          countCurr++;
        }
        for (let i = 0; i < countCurr; i++) {
          temp = "";
          temp = data[0].currencies;
          temp = temp[Object.keys(temp)[i]].name;

          allCurr += " " + temp;
        }
      }

      PCountryCurr.innerText = "";
      PCountryCurr.innerHTML = spanCurr.outerHTML + allCurr;

      //Languages
      let PCountryLang = document.getElementById(`countryLanguages`);
      let spanLang = document.createElement("span");
      spanLang.className = "detail-info-span";
      spanLang.textContent = "Languages: ";
      PCountryLang.appendChild(spanLang);
      let allLang = "";
      if (data[0].languages) {
        let countLang = 0;
        temp = "";
        temp = data[0].languages;
        for (let j = 0; Object.keys(temp)[j]; j++) {
          countLang++;
        }
        for (let i = 0; i < countLang; i++) {
          temp = "";
          temp = data[0].languages;
          temp = temp[Object.keys(temp)[i]];

          allLang += " " + temp;
        }
      }

      PCountryLang.innerText = "";
      PCountryLang.innerHTML = spanLang.outerHTML + allLang;
      //bordered
      console.log(data[0]);
      if (data[0].borders) {
        for (let i = 0; i < data[0].borders.length - 1; i++) {
          duplicateDiv(i);
        }
        let fullNames = getAllRelevantName(data[0].borders, allCountries);
        for (let i = 0; i < fullNames.length; i++) {
          let borederdCountry = document.getElementById(
            `borederdCountryID${i}`
          );
          borederdCountry.textContent = fullNames[i];
        }
      } else {
        document.getElementById(`borederdCountryID${0}`).style.display = "none";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}
//duplicate div function
function duplicateDiv(i) {
  let originalDiv = document.getElementById(`borederdCountryID0`);
  let clone = originalDiv.cloneNode(true);
  // document.getElementById("Countries-blocks").innerHTML += clone.innerHTML;
  clone.removeAttribute("id");
  clone.id = `borederdCountryID${i + 1}`;
  children = clone.children;
  document.getElementById("boeder-countries").appendChild(clone);
}

//api getting all for mainly for borders
//and call getCountry in it
function getAll() {
  fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      let found = false;
      let countryIndex;
      for (let i = 0; i < data.length && !found; i++) {
        if (data[i].name.common === countryName) {
          found = true;
          countryIndex = i;
        }
      }
      getCountry(countryName, countryIndex, data);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}
//get full names from shortname
function getAllRelevantName(nameArr, countriesArr) {
  let fullNames = [];
  for (let i = 0; i < countriesArr.length; i++) {
    for (let j = 0; j < nameArr.length; j++) {
      if (countriesArr[i].cca3.toString() === nameArr[j].toString()) {
        fullNames.push(countriesArr[i].name.common);
      }
    }
  }

  return fullNames;
}

getAll();
