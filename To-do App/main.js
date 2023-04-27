
const userInput = document.querySelector(".user-input");
const mainList = document.querySelector("ul")

const newListItem = document.createElement('li')
const newSpan = document.createElement('span')
const deleteButton = document.createElement('button')
deleteButton.textContent = "Delete"
const editButton = document.createElement('button')
editButton.textContent = "Edit"

function addTodo() {

    const inputValue = userInput.value
    
    if (inputValue.length > 0) {
        mainList.appendChild(newListItem)
        newSpan.textContent = inputValue;
        newListItem.appendChild(newSpan)
        newListItem.appendChild(deleteButton);
        newListItem.appendChild(editButton);
    } else {
        alert("Please enter valid To-do")
    }
    
    userInput.value = ''
    
    deleteButton.addEventListener('click', () => mainList.removeChild(newListItem))
    editButton.addEventListener('click', editTodo())
    
    userInput.focus()
}

function editTodo() {
    const editSpan = document.querySelector('ul').children[0]
    const newInput = document.createElement('input') 

    mainList.replaceChild(newInput ,editSpan.childNodes[0])
}