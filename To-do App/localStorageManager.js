// LS - refers to local storage

window.addEventListener("load", showArrayFromLS);

function showArrayFromLS() {
  let arr = JSON.parse(localStorage.getItem("to-Dos"));
  if (arr) {
    arr.forEach((todo) => {
      const printNumber = () => (allToDos.innerText = arr.length);
      printNumber();
      const listItemLS = document.createElement('li');
      const checkBoxLS = document.createElement('input');
      const newInputLS = document.createElement('input');
      newInputLS.setAttribute('readonly', 'readonly');
      checkBoxLS.type = 'checkbox';
      const deleteButtonLS = document.createElement('button');
      deleteButtonLS.textContent = 'Delete';
      const editButtonLS = document.createElement('button');
      editButtonLS.textContent = 'Edit';
      mainList.appendChild(listItemLS);
      checkBoxLS.checked = todo.completed;
      listItemLS.appendChild(checkBoxLS);
      newInputLS.value = todo.value;
      listItemLS.appendChild(newInputLS);
      listItemLS.appendChild(deleteButtonLS);
      listItemLS.appendChild(editButtonLS);

      let findToDoIndex = arr.findIndex((el) => el.id == todo.id);
      deleteButtonLS.addEventListener('click', () => {
        arr.splice(findToDoIndex, 1);
        setArrayToLS(arr);
        mainList.removeChild(listItemLS);
        location.reload();
      });

      // deleteButtonLS.addEventListener('click', () =>
      //   console.log(arr.length + 1)
      // );
    });

    function setArrayToLS(array) {
      localStorage.removeItem('to-Dos');
      localStorage.setItem('to-Dos', JSON.stringify(array));
    }
  }
}
