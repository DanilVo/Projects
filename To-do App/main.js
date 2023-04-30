const userInput = document.querySelector('.user-input');
const mainList = document.querySelector('ul');

function addTodo() {
  const newListItem = document.createElement('li');
  const deleteButton = document.createElement('button');
  const newSpan = document.createElement('input');
  deleteButton.textContent = 'Delete';
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  newSpan.setAttribute('readonly', 'readonly');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  const inputValue = userInput.value;

  if (inputValue.length > 0) {
    mainList.appendChild(newListItem);
    newListItem.appendChild(checkBox);
    newSpan.value = inputValue;
    newListItem.appendChild(newSpan);
    newListItem.append(deleteButton);
    newListItem.appendChild(editButton);
  } else {
    alert('Please enter valid To-do');
  }

  userInput.value = '';

  userInput.focus();
  deleteButton.addEventListener('click', () =>
    mainList.removeChild(newListItem)
  );

  editButton.addEventListener('click', editTodo);

  function editTodo() {
    if (editButton.textContent == 'Edit') {
      newSpan.removeAttribute('readonly', 'readonly');
      editButton.textContent = 'Save';
      newSpan.focus();
    } else {
      newSpan.setAttribute('readonly', 'readonly');
      editButton.textContent = 'Edit';
    }
  }

  checkBox.addEventListener('click', finishedTodo);

  function finishedTodo() {
    if(checkBox.checked == false) {
      checkBox.classList.add('checked')
    } else {
      checkBox.classList.remove('checked')
    }
  }
}
