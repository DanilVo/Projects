const userInput = document.querySelector('.user-input');
const mainList = document.querySelector('ul');

const finishedToDos = document.querySelector('#finishedToDos');
let countFinishedToDos = 0;
finishedToDos.innerText = countFinishedToDos;

const allToDos = document.querySelector('#allToDos');
let countAllToDos = 0;
allToDos.innerText = countAllToDos;

// Add a new item to the list by pressing enter
userInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

// Main function add todo
function addTodo() {
  const newListItem = document.createElement('li');
  const newInput = document.createElement('input');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  const inputValue = userInput.value;

  userInput.value = '';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  
  //Remove todo 
  const removeToDo = () => {
    if (newListItem.classList.contains('checked')) {
      newListItem.classList.remove('checked');
      countFinishedToDos -= 1;
      printFinishedToDos();
    }
    mainList.removeChild(newListItem);
    countAllToDos -= 1;
    printNumber();
  };


  deleteButton.addEventListener('click', removeToDo);

  userInput.focus();

  newInput.setAttribute('readonly', 'readonly');
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  function editTodo() {
    if (editButton.textContent == 'Edit') {
      newInput.removeAttribute('readonly', 'readonly');
      editButton.textContent = 'Save';
      newInput.focus();
    } else {
      newInput.setAttribute('readonly', 'readonly');
      editButton.textContent = 'Edit';
    }
  }
  editButton.addEventListener('click', editTodo);

  checkBox.addEventListener('click', isFinishedTodo);

  function isFinishedTodo() {
    if (checkBox.checked) {
      newListItem.classList.add('checked');
      countFinishedToDos += 1;
      printFinishedToDos();
    } else {
      newListItem.classList.remove('checked');
      countFinishedToDos -= 1;
      printFinishedToDos();
    }
    console.log(checkBox.checked);
  }

  if (inputValue.length) {
    mainList.appendChild(newListItem);
    newListItem.appendChild(checkBox);
    newInput.value = inputValue;
    newListItem.appendChild(newInput);
    newListItem.appendChild(deleteButton);
    newListItem.appendChild(editButton);

    countAllToDos += 1;
    printNumber();
    let toDosFromLS = getArrayFromLS() || [];
    setArrayToLS([
      ...toDosFromLS,
      {
        value: newInput.value,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
  } else {
    alert('Please enter valid To-do');
  }
}

const printNumber = () => (allToDos.innerText = countAllToDos);

const printFinishedToDos = () => (finishedToDos.innerText = countFinishedToDos);

function getArrayFromLS() {
  let value = localStorage.getItem('to-Dos');
  return JSON.parse(value);
}

function setArrayToLS(array) {
  localStorage.setItem('to-Dos', JSON.stringify(array));
}

function removeFromLS() {

}