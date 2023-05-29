const locationInp = document.querySelector('.locationInput');
const setLocationBtn = document.querySelector('.setLocationBtn');

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
        let cityPosition = nameArr.join('%20');
        setLocation(cityPosition);
      } else {
        setLocation(cityPosition);
      }
    }
  });
}

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const userPosition = `${position.coords.latitude}%2C${position.coords.longitude}`;
      setLocation(userPosition);
    });
  } else {
    throw new Error(alert('Geolocation is not supported by this browser.'));
  }
}

addEventListener('load', getUserLocation);

// finding location with users input
function setLocation(cityPosition) {
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityPosition}&days=3`;
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
        throw new Error(alert('Enter valid place.'));
      }
      return data.json();
    })
    .then((finalData) => {
      if (cityPosition.includes('%2C')) {
        renderUserLocation(finalData);
      } else renderList(finalData);
    })
    .catch((error) => console.log(error));
}

const darkLight = document.querySelector('#changeDarkLight');
darkLight.addEventListener('click', isDarkLightMode);
const darkLightLabel = document.querySelector('.darkLightLabel');
const wrapper = document.querySelector('body');
// appending dark/light theme on page
function isDarkLightMode() {
  if (darkLight.checked) {
    darkLightLabel.innerHTML = 'Light Mode';
    wrapper.classList.add('bodyDark');
  } else {
    darkLightLabel.innerHTML = 'Dark Mode';
    wrapper.classList.remove('bodyDark');
  }
}

// case if user wants to only see one request, removes all the previous if there was
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
function dragItem(id) {
  const sideWidget = document.querySelector('.sideWidget');
  const dragItem = document.getElementById(id);

  sideWidget.ondragover = allowDrop;

  function allowDrop(event) {
    event.preventDefault();
  }

  dragItem.ondragstart = drag;

  function drag(event) {
    event.dataTransfer.setData('id', event.target.getAttribute('id'));
  }

  sideWidget.ondrop = drop;

  function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    let getEl = document.getElementById(itemId);
    if (event.target.classList.contains('sideWidget')) {
      getEl.removeAttribute('draggable');
      event.target.append(getEl);
    }
  }
}
