// LS - refers to local storage

window.addEventListener("load", showArrayFromLS);

function showArrayFromLS() {
  let arr = JSON.parse(localStorage.getItem("to-Dos"));
  if (arr) {
    arr.forEach((todo) => {
      const listItemLS = document.createElement("li");
      const checkBoxLS = document.createElement("input");
      const newInputLS = document.createElement("input");
      newInputLS.setAttribute("readonly", "readonly");
      checkBoxLS.type = "checkbox";
      const deleteButtonLS = document.createElement("button");
      deleteButtonLS.textContent = "Delete";
      const editButtonLS = document.createElement("button");
      editButtonLS.textContent = "Edit";
      mainList.appendChild(listItemLS);
      checkBoxLS.checked = todo.completed;
      listItemLS.appendChild(checkBoxLS);
      newInputLS.value = todo.value;
      listItemLS.appendChild(newInputLS);
      listItemLS.appendChild(deleteButtonLS);
      listItemLS.appendChild(editButtonLS);
      deleteButtonLS.addEventListener("click", getArrIndex);
      // console.log(todo.value);
      
      deleteButtonLS.addEventListener('click', ()=> {
        arr.forEach((todo) => {
        })
      
      function getArrIndex(todo) {
        let arr = localStorage.getItem("to-Dos");
        let arrLS = JSON.parse(arr)
        })
      }
    });
  }


  function removeFromLS(index) {
    
    // console.log(arrLS[index]);
  }
}
