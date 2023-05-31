const cityObject = document.querySelector("ul");

// declaring different weather statuses
const cloud = `<i class="fa-solid fa-cloud fa-2xl"></i>`;
const sun = `<i class="fa-regular fa-sun fa-2xl"></i>`;
const snow = '<i class="fa-regular fa-sun fa-2xl"></i>';
const partCloudDay = '<i class="fa-solid fa-cloud-sun fa-2xl"></i>';
const rain = '<i class="fa-solid fa-cloud-rain fa-2xl"></i>';
const heavyRain = '<i class="fa-solid fa-cloud-showers-heavy fa-2xl"></i>';
const mist = `<i class="fa-solid fa-smog fa-2xl"></i>`;

// checking what weather status in the desire location and setting img equivalent
function weatherIcon(finalData) {
  const getWeatherCondition = finalData.current.condition.text;
  switch (getWeatherCondition) {
    case "Sunny":
    case "Clear":
      return sun;
    case "Cloudy":
    case "Partly cloudy":
    case "Patchy rain possible":
      return partCloudDay;
    case "Light rain":
      return rain;
    case "Snow":
      return snow;
    case "Fog":
    case "Mist":
      return sun;
    default:
      return heavyRain;
  }
}

let weatherWidgets = [];

function renderElement(finalData) {
  const cityItem = document.createElement("li");
  cityItem.classList.add("gridLi");

  const id = crypto.randomUUID();
  cityItem.setAttribute("id", id);

  const spanCountryName = document.createElement("span");
  spanCountryName.classList.add("countryCitySpan");
  spanCountryName.innerHTML = `${finalData.location.country}, <br> ${finalData.location.name}`;

  const spanWeatherIcon = document.createElement("span");
  spanWeatherIcon.classList.add("imgSpan");
  spanWeatherIcon.innerHTML = weatherIcon(finalData);

  const spanCelsius = document.createElement("span");
  spanCelsius.classList.add("celsiusSpan");
  spanCelsius.innerHTML = `${finalData.current.temp_c}°C`;

  const spanFahrenheit = document.createElement("span");
  spanFahrenheit.classList.add("fahrenheitSpan");
  spanFahrenheit.innerHTML = `${finalData.current.temp_f}°F `;

  cityItem.appendChild(spanCountryName);
  cityItem.appendChild(spanWeatherIcon);
  cityItem.appendChild(spanFahrenheit);
  cityItem.appendChild(spanCelsius);

  return { cityItem, id };
}

// rendering page by adding new list item with different information
function renderList(finalData) {
  const { cityItem, id } = renderElement(finalData);
  cityItem.setAttribute("draggable", "true");
  cityObject.appendChild(cityItem);
  locationInp.value = "";
  saveSearchHistory();
  dragItem(id);
}

const currentPosition = document.querySelector(".currentPosition");

function renderUserLocation(finalData) {
  const { cityItem, id } = renderElement(finalData);
  currentPosition.appendChild(cityItem);
}

