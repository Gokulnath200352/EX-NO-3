## Ex03 To-Do List using JavaScript
## Date:01.09.2026
## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
STEP 1
Build the HTML structure (index.html).

STEP 2
Style the App (style.css).

STEP 3
Plan the features the To-Do App should have.

STEP 4
Create a To-do application using Javascript.

STEP 5
Add functionalities.

STEP 6
Test the App.

STEP 7
Open the HTML file in a browser to check layout and functionality.

STEP 8
Fix styling issues and refine content placement.

STEP 9
Deploy the website.

STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
## index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TaskFlow - Todo Application</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="app-container">

        <!-- Header -->
        <header class="header">

            <div class="brand">
                <div class="logo">
                    ✓
                </div>

                <div>
                    <h1>TaskFlow</h1>
                    <p>Organize your day. Get things done.</p>
                </div>
            </div>

            <button id="themeBtn" class="theme-btn" title="Change theme">
                🌙
            </button>

        </header>


        <!-- Statistics -->
        <section class="stats-grid">

            <div class="stat-card">
                <div class="stat-icon total-icon">📋</div>

                <div>
                    <span>Total Tasks</span>
                    <strong id="totalTasks">0</strong>
                </div>
            </div>


            <div class="stat-card">
                <div class="stat-icon active-icon">⚡</div>

                <div>
                    <span>Active</span>
                    <strong id="activeTasks">0</strong>
                </div>
            </div>


            <div class="stat-card">
                <div class="stat-icon completed-icon">✓</div>

                <div>
                    <span>Completed</span>
                    <strong id="completedTasks">0</strong>
                </div>
            </div>


            <div class="stat-card">
                <div class="stat-icon progress-icon">🎯</div>

                <div>
                    <span>Progress</span>
                    <strong id="progressPercent">0%</strong>
                </div>
            </div>

        </section>


        <!-- Add Task -->
        <section class="task-input-card">

            <div class="input-header">
                <div>
                    <h2>Add New Task</h2>
                    <p>Create a task and start making progress.</p>
                </div>
            </div>


            <form id="taskForm">

                <div class="main-input">

                    <span class="input-icon">✏️</span>

                    <input
                        type="text"
                        id="taskInput"
                        placeholder="What needs to be done?"
                        autocomplete="off"
                    >

                    <button type="submit" id="addBtn">
                        <span>＋</span>
                        Add Task
                    </button>

                </div>


                <div class="task-options">

                    <div class="option-group">

                        <label for="priority">
                            Priority
                        </label>

                        <select id="priority">
                            <option value="low">🟢 Low</option>
                            <option value="medium" selected>🟡 Medium</option>
                            <option value="high">🔴 High</option>
                        </select>

                    </div>


                    <div class="option-group">

                        <label for="dueDate">
                            Due Date
                        </label>

                        <input
                            type="date"
                            id="dueDate"
                        >

                    </div>

                </div>

            </form>

        </section>


        <!-- Progress -->
        <section class="progress-card">

            <div class="progress-info">

                <div>
                    <span>Today's Progress</span>
                    <strong id="progressText">0 of 0 tasks completed</strong>
                </div>

                <strong id="progressNumber">0%</strong>

            </div>

            <div class="progress-bar">
                <div id="progressFill"></div>
            </div>

        </section>


        <!-- Task List -->
        <section class="tasks-card">

            <div class="tasks-header">

                <div>
                    <h2>My Tasks</h2>
                    <p id="taskSummary">0 tasks</p>
                </div>

                <button id="clearCompletedBtn" class="clear-btn">
                    Clear Completed
                </button>

            </div>


            <!-- Search -->
            <div class="search-box">

                <span>🔍</span>

                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search your tasks..."
                    autocomplete="off"
                >

            </div>


            <!-- Filters -->
            <div class="filters">

                <button class="filter-btn active" data-filter="all">
                    All
                </button>

                <button class="filter-btn" data-filter="active">
                    Active
                </button>

                <button class="filter-btn" data-filter="completed">
                    Completed
                </button>

            </div>


            <!-- Tasks -->
            <div id="taskList" class="task-list"></div>


            <!-- Empty State -->
            <div id="emptyState" class="empty-state">

                <div class="empty-icon">
                    📝
                </div>

                <h3>No tasks found</h3>

                <p>
                    Add your first task above and start being productive.
                </p>

            </div>

        </section>


        <!-- Footer -->
        <footer>
            <p>TaskFlow • Built with HTML, CSS & JavaScript</p>
        </footer>

    </div>


    <!-- Edit Modal -->
    <div id="editModal" class="modal">

        <div class="modal-content">

            <button id="closeModal" class="close-modal">
                ×
            </button>

            <h2>Edit Task</h2>

            <p>Update your task details.</p>

            <input
                type="text"
                id="editTaskInput"
                placeholder="Task name"
            >


            <div class="modal-options">

                <div>
                    <label>Priority</label>

                    <select id="editPriority">

                        <option value="low">🟢 Low</option>
                        <option value="medium">🟡 Medium</option>
                        <option value="high">🔴 High</option>

                    </select>

                </div>


                <div>

                    <label>Due Date</label>

                    <input
                        type="date"
                        id="editDueDate"
                    >

                </div>

            </div>


            <button id="saveEditBtn" class="save-btn">
                Save Changes
            </button>

        </div>

    </div>


    <!-- Toast -->
    <div id="toast" class="toast">
        Task added successfully!
    </div>


    <script src="script.js"></script>

</body>
</html>
```
## style.css:
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {

    --primary: #6366f1;
    --primary-dark: #4f46e5;

    --background: #f5f7ff;
    --card: rgba(255, 255, 255, 0.92);

    --text: #172033;
    --secondary: #718096;

    --border: #e5e7eb;

    --success: #10b981;
    --danger: #ef4444;
    --warning: #f59e0b;

    --shadow:
        0 20px 50px rgba(31, 41, 55, 0.08);
}

body.dark {

    --background: #0f172a;
    --card: #172033;

    --text: #f8fafc;
    --secondary: #94a3b8;

    --border: #293548;

    --shadow:
        0 20px 50px rgba(0, 0, 0, 0.3);
}


body {

    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

    background:
        radial-gradient(
            circle at top left,
            rgba(99, 102, 241, 0.15),
            transparent 35%
        ),
        var(--background);

    color: var(--text);

    min-height: 100vh;

    transition:
        background 0.3s,
        color 0.3s;
}


button,
input,
select {

    font: inherit;
}


/* Main */

.app-container {

    width: min(1100px, 94%);

    margin: auto;

    padding: 40px 0;
}


/* Header */

.header {

    display: flex;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 35px;
}


.brand {

    display: flex;

    align-items: center;

    gap: 15px;
}


.logo {

    width: 58px;
    height: 58px;

    display: flex;

    justify-content: center;
    align-items: center;

    border-radius: 18px;

    color: white;

    font-size: 30px;
    font-weight: 800;

    background:
        linear-gradient(
            135deg,
            #6366f1,
            #8b5cf6
        );

    box-shadow:
        0 10px 25px rgba(99, 102, 241, 0.35);
}


.brand h1 {

    font-size: 30px;

    letter-spacing: -1px;
}


.brand p {

    color: var(--secondary);

    margin-top: 4px;

    font-size: 14px;
}


.theme-btn {

    width: 48px;
    height: 48px;

    border: 1px solid var(--border);

    border-radius: 15px;

    background: var(--card);

    cursor: pointer;

    font-size: 20px;

    transition: 0.2s;
}


.theme-btn:hover {

    transform: translateY(-3px);

    box-shadow: var(--shadow);
}


/* Stats */

.stats-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;

    margin-bottom: 22px;
}


.stat-card {

    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 20px;

    padding: 22px;

    display: flex;

    align-items: center;

    gap: 15px;

    box-shadow: var(--shadow);

    backdrop-filter: blur(10px);

    transition: 0.25s;
}


.stat-card:hover {

    transform: translateY(-4px);
}


.stat-icon {

    width: 45px;
    height: 45px;

    border-radius: 14px;

    display: flex;

    justify-content: center;
    align-items: center;

    font-size: 20px;
}


.total-icon {
    background: #eef2ff;
}

.active-icon {
    background: #ecfdf5;
}

.completed-icon {
    background: #f0fdf4;
}

.progress-icon {
    background: #fff7ed;
}


.stat-card span {

    display: block;

    font-size: 13px;

    color: var(--secondary);

    margin-bottom: 5px;
}


.stat-card strong {

    font-size: 24px;
}


/* Cards */

.task-input-card,
.progress-card,
.tasks-card {

    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 24px;

    box-shadow: var(--shadow);

    backdrop-filter: blur(15px);
}


.task-input-card {

    padding: 28px;

    margin-bottom: 20px;
}


.input-header h2,
.tasks-header h2 {

    font-size: 21px;
}


.input-header p,
.tasks-header p {

    color: var(--secondary);

    font-size: 13px;

    margin-top: 5px;
}


/* Input */

.main-input {

    display: flex;

    align-items: center;

    gap: 10px;

    margin-top: 24px;

    padding: 7px 7px 7px 16px;

    border: 2px solid var(--border);

    border-radius: 16px;

    transition: 0.2s;
}


.main-input:focus-within {

    border-color: var(--primary);

    box-shadow:
        0 0 0 4px rgba(99, 102, 241, 0.1);
}


.input-icon {

    font-size: 18px;
}


.main-input input {

    flex: 1;

    border: none;

    outline: none;

    background: transparent;

    color: var(--text);

    min-width: 0;

    font-size: 15px;
}


.main-input input::placeholder {

    color: var(--secondary);
}


.main-input button {

    border: none;

    background:
        linear-gradient(
            135deg,
            var(--primary),
            #8b5cf6
        );

    color: white;

    padding: 13px 20px;

    border-radius: 12px;

    cursor: pointer;

    font-weight: 700;

    transition: 0.2s;
}


.main-input button:hover {

    transform: translateY(-2px);

    box-shadow:
        0 8px 20px rgba(99, 102, 241, 0.3);
}


.task-options {

    display: flex;

    gap: 15px;

    margin-top: 15px;
}


.option-group {

    display: flex;

    flex-direction: column;

    gap: 7px;

    flex: 1;
}


.option-group label,
.modal-options label {

    font-size: 12px;

    font-weight: 600;

    color: var(--secondary);
}


select,
input[type="date"] {

    border: 1px solid var(--border);

    background: var(--background);

    color: var(--text);

    padding: 11px;

    border-radius: 11px;

    outline: none;

    cursor: pointer;
}


/* Progress */

.progress-card {

    padding: 23px 28px;

    margin-bottom: 20px;
}


.progress-info {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 12px;
}


.progress-info span {

    display: block;

    font-weight: 700;

    font-size: 14px;
}


.progress-info strong {

    font-size: 14px;
}


#progressNumber {

    font-size: 20px;

    color: var(--primary);
}


.progress-bar {

    height: 10px;

    border-radius: 20px;

    background: var(--border);

    overflow: hidden;
}


#progressFill {

    height: 100%;

    width: 0%;

    border-radius: 20px;

    background:
        linear-gradient(
            90deg,
            var(--primary),
            #8b5cf6
        );

    transition: width 0.5s ease;
}


/* Tasks */

.tasks-card {

    padding: 28px;
}


.tasks-header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 20px;
}


.clear-btn {

    background: transparent;

    border: none;

    color: var(--danger);

    cursor: pointer;

    font-size: 13px;

    font-weight: 600;
}


.clear-btn:hover {

    text-decoration: underline;
}


/* Search */

.search-box {

    display: flex;

    align-items: center;

    gap: 10px;

    padding: 13px 15px;

    border: 1px solid var(--border);

    background: var(--background);

    border-radius: 13px;

    margin-bottom: 16px;
}


.search-box input {

    flex: 1;

    border: none;

    outline: none;

    background: transparent;

    color: var(--text);
}


/* Filters */

.filters {

    display: flex;

    gap: 8px;

    margin-bottom: 20px;
}


.filter-btn {

    padding: 8px 15px;

    border-radius: 10px;

    border: 1px solid var(--border);

    background: transparent;

    color: var(--secondary);

    cursor: pointer;

    font-size: 13px;

    transition: 0.2s;
}


.filter-btn:hover {

    border-color: var(--primary);

    color: var(--primary);
}


.filter-btn.active {

    background: var(--primary);

    border-color: var(--primary);

    color: white;
}


/* Task */

.task-list {

    display: flex;

    flex-direction: column;

    gap: 12px;
}


.task-item {

    display: flex;

    align-items: center;

    gap: 14px;

    padding: 17px;

    border: 1px solid var(--border);

    border-radius: 16px;

    background: var(--background);

    transition: 0.25s;

    animation: slideIn 0.25s ease;
}


@keyframes slideIn {

    from {

        opacity: 0;

        transform: translateY(-8px);

    }

    to {

        opacity: 1;

        transform: translateY(0);

    }
}


.task-item:hover {

    transform: translateX(3px);

    border-color: rgba(99, 102, 241, 0.4);
}


.check-btn {

    width: 24px;
    height: 24px;

    border-radius: 50%;

    border: 2px solid #cbd5e1;

    background: transparent;

    cursor: pointer;

    flex-shrink: 0;

    display: flex;

    justify-content: center;
    align-items: center;

    color: white;
}


.task-item.completed .check-btn {

    background: var(--success);

    border-color: var(--success);
}


.task-content {

    flex: 1;

    min-width: 0;
}


.task-title {

    font-weight: 600;

    word-break: break-word;
}


.task-item.completed .task-title {

    text-decoration: line-through;

    color: var(--secondary);
}


.task-meta {

    display: flex;

    gap: 8px;

    align-items: center;

    margin-top: 7px;

    flex-wrap: wrap;
}


.priority {

    font-size: 11px;

    padding: 4px 8px;

    border-radius: 7px;

    font-weight: 700;
}


.priority-low {

    background: #dcfce7;

    color: #15803d;
}


.priority-medium {

    background: #fef3c7;

    color: #b45309;
}


.priority-high {

    background: #fee2e2;

    color: #b91c1c;
}


.due-date {

    font-size: 11px;

    color: var(--secondary);
}


.overdue {

    color: var(--danger);

    font-weight: 700;
}


.task-actions {

    display: flex;

    gap: 5px;
}


.action-btn {

    width: 36px;
    height: 36px;

    border: none;

    background: transparent;

    border-radius: 9px;

    cursor: pointer;

    transition: 0.2s;

    font-size: 16px;
}


.action-btn:hover {

    background: var(--border);

    transform: scale(1.08);
}


.delete-btn:hover {

    color: var(--danger);
}


/* Empty */

.empty-state {

    text-align: center;

    padding: 50px 20px;

    color: var(--secondary);
}


.empty-icon {

    width: 70px;
    height: 70px;

    margin: auto auto 15px;

    border-radius: 20px;

    background: var(--background);

    display: flex;

    justify-content: center;
    align-items: center;

    font-size: 30px;
}


.empty-state h3 {

    color: var(--text);

    margin-bottom: 6px;
}


.empty-state p {

    font-size: 13px;
}


/* Modal */

.modal {

    position: fixed;

    inset: 0;

    display: none;

    justify-content: center;
    align-items: center;

    background: rgba(15, 23, 42, 0.65);

    backdrop-filter: blur(8px);

    z-index: 1000;

    padding: 20px;
}


.modal.show {

    display: flex;
}


.modal-content {

    position: relative;

    width: min(500px, 100%);

    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 22px;

    padding: 30px;

    box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.3);

    animation: modalIn 0.25s ease;
}


@keyframes modalIn {

    from {

        opacity: 0;

        transform: scale(0.95);
    }

    to {

        opacity: 1;

        transform: scale(1);
    }
}


.modal-content h2 {

    margin-bottom: 5px;
}


.modal-content > p {

    color: var(--secondary);

    font-size: 13px;

    margin-bottom: 20px;
}


.close-modal {

    position: absolute;

    right: 18px;
    top: 18px;

    border: none;

    background: transparent;

    font-size: 28px;

    color: var(--secondary);

    cursor: pointer;
}


#editTaskInput {

    width: 100%;

    padding: 13px;

    border: 1px solid var(--border);

    border-radius: 11px;

    background: var(--background);

    color: var(--text);

    outline: none;

    margin-bottom: 15px;
}


.modal-options {

    display: flex;

    gap: 12px;
}


.modal-options > div {

    flex: 1;

    display: flex;

    flex-direction: column;

    gap: 7px;
}


.save-btn {

    width: 100%;

    margin-top: 20px;

    border: none;

    padding: 13px;

    border-radius: 11px;

    background: var(--primary);

    color: white;

    font-weight: 700;

    cursor: pointer;
}


.save-btn:hover {

    background: var(--primary-dark);
}


/* Toast */

.toast {

    position: fixed;

    bottom: 25px;

    right: 25px;

    background: #172033;

    color: white;

    padding: 14px 20px;

    border-radius: 12px;

    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.2);

    transform: translateY(100px);

    opacity: 0;

    transition: 0.3s;

    z-index: 2000;

    font-size: 14px;
}


.toast.show {

    transform: translateY(0);

    opacity: 1;
}


/* Footer */

footer {

    text-align: center;

    color: var(--secondary);

    font-size: 12px;

    margin-top: 25px;
}


/* Responsive */

@media (max-width: 800px) {

    .stats-grid {

        grid-template-columns:
            repeat(2, 1fr);
    }
}


@media (max-width: 600px) {

    .app-container {

        padding: 25px 0;
    }


    .brand h1 {

        font-size: 24px;
    }


    .brand p {

        display: none;
    }


    .stats-grid {

        grid-template-columns: 1fr 1fr;

        gap: 10px;
    }


    .stat-card {

        padding: 15px;
    }


    .stat-card strong {

        font-size: 20px;
    }


    .main-input {

        flex-wrap: wrap;

        padding: 10px;
    }


    .main-input input {

        width: calc(100% - 40px);
    }


    .main-input button {

        width: 100%;
    }


    .task-options {

        flex-direction: column;
    }


    .tasks-header {

        align-items: flex-start;

        gap: 10px;
    }


    .task-item {

        align-items: flex-start;
    }


    .task-actions {

        flex-direction: column;
    }


    .modal-options {

        flex-direction: column;
    }
}
```
## script.js
```
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priority");
const dueDateInput = document.getElementById("dueDate");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const themeBtn = document.getElementById("themeBtn");

const totalTasks = document.getElementById("totalTasks");
const activeTasks = document.getElementById("activeTasks");
const completedTasks = document.getElementById("completedTasks");
const progressPercent = document.getElementById("progressPercent");
const progressText = document.getElementById("progressText");
const progressNumber = document.getElementById("progressNumber");
const progressFill = document.getElementById("progressFill");
const taskSummary = document.getElementById("taskSummary");
const toast = document.getElementById("toast");

const editModal = document.getElementById("editModal");
const editTaskInput = document.getElementById("editTaskInput");
const editPriority = document.getElementById("editPriority");
const editDueDate = document.getElementById("editDueDate");
const saveEditBtn = document.getElementById("saveEditBtn");
const closeModal = document.getElementById("closeModal");

let tasks = [];
let currentFilter = "all";
let currentEditId = null;

function loadTasks() {
    try {
        const savedTasks = localStorage.getItem("taskflow_tasks");

        if (savedTasks) {
            tasks = JSON.parse(savedTasks);

            if (!Array.isArray(tasks)) {
                tasks = [];
            }
        }
    } catch (error) {
        console.error("Could not load tasks:", error);
        tasks = [];
    }
}

function saveTasks() {
    try {
        localStorage.setItem(
            "taskflow_tasks",
            JSON.stringify(tasks)
        );
    } catch (error) {
        console.error("Could not save tasks:", error);
    }
}

function generateId() {
    return Date.now().toString() +
        Math.random().toString(36).substring(2, 9);
}

let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function addTask() {
    const title = taskInput.value.trim();

    if (!title) {
        taskInput.focus();
        showToast("Please enter a task first.");
        return;
    }

    const newTask = {
        id: generateId(),
        title: title,
        completed: false,
        priority: priorityInput.value,
        dueDate: dueDateInput.value || "",
        createdAt: new Date().toISOString()
    };

    tasks.unshift(newTask);

    saveTasks();

    taskInput.value = "";
    priorityInput.value = "medium";
    dueDateInput.value = "";

    renderTasks();
    updateStats();

    showToast("✓ Task added successfully!");

    taskInput.focus();
}

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});

function renderTasks() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    let filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title
            .toLowerCase()
            .includes(searchTerm);

        let matchesFilter = true;

        if (currentFilter === "active") {
            matchesFilter = !task.completed;
        }

        if (currentFilter === "completed") {
            matchesFilter = task.completed;
        }

        return matchesSearch && matchesFilter;
    });

    taskList.innerHTML = "";

    if (filteredTasks.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    filteredTasks.forEach(task => {
        taskList.appendChild(createTaskElement(task));
    });
}

function createTaskElement(task) {
    const article = document.createElement("article");
    article.className = "task-item";

    if (task.completed) {
        article.classList.add("completed");
    }

    const checkButton = document.createElement("button");
    checkButton.className = "check-btn";
    checkButton.type = "button";
    checkButton.title = task.completed
        ? "Mark as active"
        : "Mark as completed";

    checkButton.textContent = task.completed ? "✓" : "";

    checkButton.addEventListener("click", () => {
        toggleTask(task.id);
    });

    const content = document.createElement("div");
    content.className = "task-content";

    const title = document.createElement("div");
    title.className = "task-title";
    title.textContent = task.title;

    const meta = document.createElement("div");
    meta.className = "task-meta";

    const priority = document.createElement("span");
    priority.className = `priority priority-${task.priority}`;
    priority.textContent = getPriorityText(task.priority);

    meta.appendChild(priority);

    if (task.dueDate) {
        const due = document.createElement("span");
        due.className = "due-date";

        const date = new Date(task.dueDate + "T00:00:00");

        due.textContent =
            "📅 " +
            date.toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
                year: "numeric"
            });

        if (!task.completed && isOverdue(task.dueDate)) {
            due.classList.add("overdue");

            due.textContent =
                "⚠️ Overdue • " +
                date.toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "short"
                });
        }

        meta.appendChild(due);
    }

    content.appendChild(title);
    content.appendChild(meta);

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editButton = document.createElement("button");
    editButton.className = "action-btn";
    editButton.type = "button";
    editButton.title = "Edit task";
    editButton.textContent = "✏️";

    editButton.addEventListener("click", () => {
        openEditModal(task.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "action-btn delete-btn";
    deleteButton.type = "button";
    deleteButton.title = "Delete task";
    deleteButton.textContent = "🗑️";

    deleteButton.addEventListener("click", () => {
        deleteTask(task.id);
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    article.appendChild(checkButton);
    article.appendChild(content);
    article.appendChild(actions);

    return article;
}

function getPriorityText(priority) {
    switch (priority) {
        case "high":
            return "🔴 High";

        case "medium":
            return "🟡 Medium";

        case "low":
            return "🟢 Low";

        default:
            return "Medium";
    }
}

function isOverdue(dateString) {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const due = new Date(dateString + "T00:00:00");

    return due < today;
}

function toggleTask(id) {
    const task = tasks.find(item => item.id === id);

    if (!task) return;

    task.completed = !task.completed;

    saveTasks();
    renderTasks();
    updateStats();

    showToast(
        task.completed
            ? "✓ Task completed!"
            : "Task moved back to active."
    );
}

function deleteTask(id) {
    const task = tasks.find(item => item.id === id);

    if (!task) return;

    tasks = tasks.filter(item => item.id !== id);

    saveTasks();
    renderTasks();
    updateStats();

    showToast("🗑️ Task deleted.");
}

function openEditModal(id) {
    const task = tasks.find(item => item.id === id);

    if (!task) return;

    currentEditId = id;

    editTaskInput.value = task.title;
    editPriority.value = task.priority;
    editDueDate.value = task.dueDate;

    editModal.classList.add("show");

    setTimeout(() => {
        editTaskInput.focus();
    }, 100);
}

function closeEditModal() {
    editModal.classList.remove("show");
    currentEditId = null;
}

closeModal.addEventListener("click", closeEditModal);

saveEditBtn.addEventListener("click", function() {
    if (!currentEditId) return;

    const newTitle = editTaskInput.value.trim();

    if (!newTitle) {
        editTaskInput.focus();
        showToast("Task name cannot be empty.");
        return;
    }

    const task = tasks.find(
        item => item.id === currentEditId
    );

    if (!task) return;

    task.title = newTitle;
    task.priority = editPriority.value;
    task.dueDate = editDueDate.value || "";

    saveTasks();
    renderTasks();
    updateStats();
    closeEditModal();

    showToast("✓ Task updated successfully!");
});

editModal.addEventListener("click", function(event) {
    if (event.target === editModal) {
        closeEditModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (
        event.key === "Escape" &&
        editModal.classList.contains("show")
    ) {
        closeEditModal();
    }
});

editTaskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        saveEditBtn.click();
    }
});

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        currentFilter = this.dataset.filter;

        renderTasks();
    });
});

searchInput.addEventListener("input", renderTasks);

clearCompletedBtn.addEventListener("click", function() {
    const completedCount = tasks.filter(
        task => task.completed
    ).length;

    if (completedCount === 0) {
        showToast("There are no completed tasks.");
        return;
    }

    tasks = tasks.filter(task => !task.completed);

    saveTasks();
    renderTasks();
    updateStats();

    showToast(
        `✓ ${completedCount} completed task(s) cleared.`
    );
});

function updateStats() {
    const total = tasks.length;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const active = total - completed;

    let percentage = 0;

    if (total > 0) {
        percentage = Math.round(
            (completed / total) * 100
        );
    }

    totalTasks.textContent = total;
    activeTasks.textContent = active;
    completedTasks.textContent = completed;

    progressPercent.textContent =
        percentage + "%";

    progressNumber.textContent =
        percentage + "%";

    progressText.textContent =
        `${completed} of ${total} tasks completed`;

    progressFill.style.width =
        percentage + "%";

    taskSummary.textContent =
        `${total} ${total === 1 ? "task" : "tasks"}`;
}

function loadTheme() {
    const savedTheme =
        localStorage.getItem("taskflow_theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
}

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "taskflow_theme",
        darkMode ? "dark" : "light"
    );

    themeBtn.textContent =
        darkMode ? "☀️" : "🌙";
});

function init() {
    loadTasks();
    loadTheme();
    renderTasks();
    updateStats();
    taskInput.focus();
}

init();
```
## OUTPUT
<img width="1600" height="950" alt="image" src="https://github.com/user-attachments/assets/e24d291b-097c-4769-b2f7-d8c07a450dae" />
<img width="1600" height="1000" alt="image" src="https://github.com/user-attachments/assets/daa00503-4710-44be-b116-58fd6da4dc6c" />


## RESULT
The program for creating To-do list using JavaScript is executed successfully.
