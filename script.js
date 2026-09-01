const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const clearCompletedBtn = document.getElementById("clearCompleted");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const remainingTasks = document.getElementById("remainingTasks");

const filterButtons = document.querySelectorAll(".filter-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

/* Save Todos to Local Storage */
function saveTodos() {
localStorage.setItem("todos", JSON.stringify(todos));
}

/* Display Todos */
function displayTodos() {
todoList.innerHTML = "";

```
const filteredTodos = todos.filter(function(todo) {
    if (currentFilter === "active") {
        return !todo.completed;
    }

    if (currentFilter === "completed") {
        return todo.completed;
    }

    return true;
});

filteredTodos.forEach(function(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";

    const leftDiv = document.createElement("div");
    leftDiv.className = "todo-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", function() {
        todo.completed = checkbox.checked;
        saveTodos();
        displayTodos();
    });

    const taskText = document.createElement("span");
    taskText.className = "todo-text";

    if (todo.completed) {
        taskText.classList.add("completed");
    }

    taskText.textContent = todo.text;

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(taskText);

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    /* Edit Button */
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    editBtn.addEventListener("click", function() {
        const newText = prompt("Edit your task:", todo.text);

        if (newText !== null && newText.trim() !== "") {
            todo.text = newText.trim();
            saveTodos();
            displayTodos();
        }
    });

    /* Delete Button */
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function() {
        todos = todos.filter(function(item) {
            return item.id !== todo.id;
        });

        saveTodos();
        displayTodos();
    });

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(leftDiv);
    li.appendChild(actionsDiv);

    todoList.appendChild(li);
});

updateStatistics();
```

}

/* Add New Todo */
function addTodo() {
const task = todoInput.value.trim();

```
if (task === "") {
    alert("Please enter a task!");
    return;
}

const newTodo = {
    id: Date.now(),
    text: task,
    completed: false
};

todos.push(newTodo);

saveTodos();
displayTodos();

todoInput.value = "";
todoInput.focus();
```

}

/* Add Task Button */
addBtn.addEventListener("click", addTodo);

/* Add Task Using Enter Key */
todoInput.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
addTodo();
}
});

/* Filter Tasks */
filterButtons.forEach(function(button) {
button.addEventListener("click", function() {
filterButtons.forEach(function(btn) {
btn.classList.remove("active");
});

```
    button.classList.add("active");

    currentFilter = button.dataset.filter;

    displayTodos();
});
```

});

/* Clear Completed Tasks */
clearCompletedBtn.addEventListener("click", function() {
todos = todos.filter(function(todo) {
return !todo.completed;
});

```
saveTodos();
displayTodos();
```

});

/* Update Statistics */
function updateStatistics() {
const total = todos.length;

```
const completed = todos.filter(function(todo) {
    return todo.completed;
}).length;

const remaining = total - completed;

totalTasks.textContent = "Total: " + total;
completedTasks.textContent = "Completed: " + completed;
remainingTasks.textContent = "Remaining: " + remaining;
```

}

/* Load Todos When Page Opens */
displayTodos();
