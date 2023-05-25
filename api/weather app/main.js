const locationInp = document.querySelector(".locationInput");
const setLocationBtn = document.querySelector(".setLocationBtn");
const cityObject = document.querySelector("ul");

setLocationBtn.addEventListener("click", formatUserInput());

const enterKeypress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setLocationBtn.click();
  }
};
locationInp.addEventListener("keypress", enterKeypress);

locationInp.focus();

function formatUserInput() {
  const letterCheckItems = /[!@#$%^&*()+0-9]/g;
  setLocationBtn.addEventListener("click", () => {
    if (locationInp.value) {
      const cn = locationInp.value.toLowerCase().replace(letterCheckItems, "");
      if (cn.includes("")) {
        const nameArr = cn.split(" ");
        let cityName = nameArr.join("%20");
        setLocation(cityName);
      } else {
        setLocation(cityName);
      }
    }
  });
}

function setLocation(cityName) {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "45f67ff11dmshb9159dcbe37c0ecp1b0068jsna0e855c575e8",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((data) => {
      if (data.status === 400) {
        locationInp.value = ''
        throw new Error(alert("Enter valid place"));
      }
      return data.json();
    })
    .then((finalData) => {
      renderList(finalData);
    })
    .catch(error => console.log(error))
}

function renderList(finalData) {
  if (finalData.location) {
    const cityItem = document.createElement("li");
    const spanCountryName = document.createElement("span");
    spanCountryName.innerHTML = `Country: ${finalData.location.country} | `;
    const spanCityName = document.createElement("span");
    spanCityName.innerHTML = `City: ${finalData.location.name} | `;

    const spanCelsius = document.createElement("span");
    spanCelsius.innerHTML = `Celsius: ${finalData.current.temp_c}°C | `;
    const spanFahrenheit = document.createElement("span");
    spanFahrenheit.innerHTML = `Fahrenheit: ${finalData.current.temp_f}°F `;

    cityItem.appendChild(spanCountryName);
    cityItem.appendChild(spanCityName);
    cityItem.appendChild(spanCelsius);
    cityItem.appendChild(spanFahrenheit);
    cityObject.appendChild(cityItem);
    locationInp.value = "";
    searchHistorySave();
  }
}

const darkLight = document.querySelector("#changeDarkLight");
darkLight.addEventListener("click", isDarkLightMode);
const darkLightLabel = document.querySelector(".darkLightLabel");
const wrapper = document.querySelector("body");

function isDarkLightMode() {
  if (darkLight.checked) {
    darkLightLabel.innerHTML = "Light Mode";
    wrapper.classList.add("bodyDark");
  } else {
    darkLightLabel.innerHTML = "Dark Mode";
    wrapper.classList.remove("bodyDark");
  }
}

function removeListChild() {
  while (cityObject.children.length > 1) {
    cityObject.removeChild(cityObject.children[0]);
  }
}

function searchHistorySave() {
  const searchHistoryInp = document.querySelector("#searchHistory");
  if (!searchHistoryInp.checked) {
    removeListChild();
  }
}
