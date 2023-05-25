const locationInp = document.querySelector('.locationInput');
const setLocationBtn = document.querySelector('.setLocationBtn');
const cityObject = document.querySelector('ul');

setLocationBtn.addEventListener('click', formatUserInput());

locationInp.focus();
// on key 'Enter' allow to search
const enterKeypress = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    setLocationBtn.click();
  }
};
locationInp.addEventListener('keypress', enterKeypress);

// formatting users input, removing unnecessary symbols and numbers
function formatUserInput() {
  const letterCheckItems = /[!@#$%^&*()+0-9]/g;
  setLocationBtn.addEventListener('click', () => {
    if (locationInp.value) {
      const cn = locationInp.value.toLowerCase().replace(letterCheckItems, '');
      if (cn.includes('')) {
        const nameArr = cn.split(' ');
        let cityName = nameArr.join('%20');
        setLocation(cityName);
      } else {
        setLocation(cityName);
      }
    }
  });
}

// finding location with users input
function setLocation(cityName) {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '45f67ff11dmshb9159dcbe37c0ecp1b0068jsna0e855c575e8',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  fetch(url, options)
    .then((data) => {
      if (data.status === 400) {
        locationInp.value = '';
        throw new Error(alert('Enter valid place'));
      }
      return data.json();
    })
    .then((finalData) => {
      renderList(finalData);
      console.log(finalData);
    })
    .catch((error) => console.log(error));
}

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
  const getWeatherStatus = finalData.current.condition.text;
  if (getWeatherStatus === 'Sunny' || getWeatherStatus === 'Clear') {
    return sun;
  } else if (getWeatherStatus === 'Cloudy') {
    return partCloudDay;
  } else if (getWeatherStatus === 'Partly cloudy') {
    return partCloudDay;
  } else if (getWeatherStatus === 'Light rain') {
    return rain;
  } else if (getWeatherStatus === 'Snow') {
    return snow;
  } else if (getWeatherStatus === 'Mist') {
    return mist;
  } else heavyRain;

  document.innerHTML = console.log(cloud);
}

// rendering page by adding new list item with different information
function renderList(finalData) {
  if (finalData.location) {
    const cityItem = document.createElement('li');
    cityItem.classList.add('parent');
    cityItem.setAttribute('draggable', 'true');
    cityItem.setAttribute('id', crypto.randomUUID());
    const spanCountryName = document.createElement('span');
    spanCountryName.classList.add('countryCitySpan');
    spanCountryName.innerHTML = `${finalData.location.country}, <br> ${finalData.location.name}`;
    const spanWeatherIcon = document.createElement('span');
    spanWeatherIcon.classList.add('imgSpan');
    spanWeatherIcon.innerHTML = weatherIcon(finalData);
    const spanCelsius = document.createElement('span');
    spanCelsius.classList.add('celsiusSpan');
    spanCelsius.innerHTML = `${finalData.current.temp_c}°C`;
    const spanFahrenheit = document.createElement('span');
    spanFahrenheit.classList.add('fahrenheitSpan');
    spanFahrenheit.innerHTML = ` ${finalData.current.temp_f}°F `;

    cityItem.appendChild(spanCountryName);
    cityItem.appendChild(spanWeatherIcon);
    cityItem.appendChild(spanFahrenheit);
    cityItem.appendChild(spanCelsius);
    cityObject.appendChild(cityItem);
    locationInp.value = '';
    saveSearchHistory();
    console.log(cityItem.getAttribute('id'));
  }
  dragItem();
}

const darkLight = document.querySelector('#changeDarkLight');
darkLight.addEventListener('click', isDarkLightMode);
const darkLightLabel = document.querySelector('.darkLightLabel');
const wrapper = document.querySelector('body');
// appending dark/light theme to page
function isDarkLightMode() {
  if (darkLight.checked) {
    darkLightLabel.innerHTML = 'Light Mode';
    wrapper.classList.add('bodyDark');
  } else {
    darkLightLabel.innerHTML = 'Dark Mode';
    wrapper.classList.remove('bodyDark');
  }
}

// case if user wants to only see one request removes the previous one
function removeListChild() {
  while (cityObject.children.length > 1) {
    cityObject.removeChild(cityObject.children[0]);
  }
}

// case of numerous list items and user changes the setting to one each time,
// removes all previous items
function saveSearchHistory() {
  const searchHistoryInp = document.querySelector('#searchHistory');
  if (!searchHistoryInp.checked) {
    removeListChild();
  }
}

// allows to user save locations as widgets in the left side
function dragItem() {
  const sideWidget = document.querySelector('.sideWidget');
  const dragItem = document.querySelector('li');
  
  sideWidget.ondragover = allowDrop;
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  dragItem.ondragstart = drag;
  
  function drag(event) {
    event.dataTransfer.setData('id', event.target.getAttribute('id'));
    console.log("id on drag " + event.target.id);
  }
  
  sideWidget.ondrop = drop;
  
  function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    let getEl = document.getElementById(itemId);
    try {
      event.target.append(getEl);
      console.log("id on drop " + event.target.id);
    } catch (error) {}
  }
}

