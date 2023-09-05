// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Initialize tasks from local storage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        renderTasks();
    }
}

// Function to edit a task
function editTask(index) {
    const updatedTask = prompt("Edit task:", tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }
}

// Initial rendering
renderTasks();
