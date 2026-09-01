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
