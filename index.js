const inputbox = document.getElementById('todo-title');
const datePicker = document.getElementById('date-picker');
const addButton = document.getElementById("toclick")
const pendingTask = document.getElementById('pending');
const completedTask = document.getElementById("complete");

addButton.addEventListener("click", function(event) {
  event.preventDefault();
  const dueDate = datePicker.value;
  const todoTitle = inputbox.value;
  const task = document.createElement("div");
  task.innerHTML = `<br><div>${todoTitle} - ${dueDate} <button id="deletetodo" onclick="deleteTodo(event)">🗑️</button></div>`;
  pendingTask.insertBefore(task, pendingTask.firstChild);
  inputbox.value=""; 
});

function deleteTodo(event) {
  event.preventDefault();
  const task = event.target.parentNode;
  task.innerHTML = `<br>${task.innerHTML.split("<")[0]} <span style="color: green">&#x2714;</span>`;
  task.style.color = "black";
  completedTask.appendChild(task);
  pendingTask.removeChild(task);

}

































// let todos;
//     const savedTodos = JSON.parse(localStorage.getItem('todos'));

//     if (Array.isArray(savedTodos)) {
//         todos = savedTodos;
//     } 
//     else 
//     {
//         todos = [];
//     }
//         render();

//         function createTodo(title, dueDate) {
//             const id = ' ' + new Date().getTime();

//             todos.push({
//                 title: title,
//                 dueDate: dueDate,
//                 id: id
//             });                                                           

//             saveTodos();
//         }

//         function removeTodo(idToDelete) {
//             todos = todos.filter(function (todo) {
//                 if (todo.id === idToDelete) {
//                     return false;
//                 }
//                 else {
//                     return true;
//                 }
//             });
//             saveTodos();
//         }

//         function saveTodos() {
//             localStorage.setItem('todos', JSON.stringify(todos));
//         }

//         function addTodo() {
//             const textbox = document.getElementById('todo-title');
//             const title = textbox.value;

//             const datePicker = document.getElementById('date-picker');
//             const dueDate = datePicker.value;
            
//             createTodo(title, dueDate)
//             render();
//         }

//         function deleteTodo(event) {
//             const deleteButton = event.target;
//             const idToDelete = deleteButton.id;

//             removeTodo(idToDelete);
//             render();
//         }
//         function completeTodo(){
//             const textbox = document.getElementById('todo-title');
//             const title = textbox.value;

//             const datePicker = document.getElementById('date-picker');
//             const dueDate = datePicker.value;
            
//             createTodo(title, dueDate)
//             render();
//         }

//         function render() {
//             document.getElementById('todo-list').innerHTML = 'YOUR PENDING TASKS';
//             document.getElementById('complete').innerHTML = 'YOUR COMPLETED TASKS';
//             let i =0;
//             todos.forEach(function (todo) {
//                 const element = document.createElement('div');
//                 i++;
//                 element.innerText = i+ " : " + todo.title + ' ' + ":- " + todo.dueDate;


//                 const deleteButton = document.createElement('button');
//                 deleteButton.innerText = "🗑️";
//                 deleteButton.style = 'margin-left: 16px; background-color:rgb(190 187 220);';
//                 deleteButton.onclick = deleteTodo;
//                 deleteButton.id = todo.id;
//                 element.appendChild(deleteButton);

//                 const todoList = document.getElementById('todo-list');
//                 todoList.appendChild(element);

//                 const completeButton = document.createElement('button2');
//                 completeButton.innerText = "✅";
//                 completeButton.style = 'margin-left: 12px; background-color:rgb(190 187 220);';
//                 completeButton.onclick = completeTodo;
//                 element.appendChild(completeButton);
//             });
//         }
