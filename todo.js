const todoInput = document.querySelector (".todo-input");
const todoButton = document.querySelector (".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter");
// add eventlistener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterDone);
// Function
function addTodo (event){
    event.preventDefault();
// create new div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
// create list
const newTodo = document.createElement("li")
newTodo.innerText = todoInput.value;
newTodo.classList.add ("todo-item");
todoDiv.appendChild(newTodo);
//checkmark button
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class = "fas fa-check">';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//trash mark button
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class = "fas fa-trash">';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);



todoList.appendChild(todoDiv);

todoInput.value = "";
}
// to delete an an item on the list
function deleteCheck(event){
    const item = event.target;
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");

        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterDone(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
              if (todo.classList.contains("completed")) {
                todo.style.display = "flex";
              } else {
                todo.style.display = "none";
              }
              break;
            case "uncompleted":
              if(todo.classList.contains("uncompleted")){
                todo.style.display = "flex";
              } else {
                todo.style.display = "none";
              }
              break;
        }
    })
}


function filterDone(event){
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contain("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contain("uncompleted")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
               break;
        }
    })
}