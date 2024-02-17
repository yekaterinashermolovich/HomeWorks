document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function addTask() {
  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;

  const taskId = generateUniqueId();
  const taskDate = new Date().toLocaleDateString();
  const task = {
    id: taskId,
    name: taskName,
    description: taskDescription,
    date: taskDate,
    completed: false, 
    edited: false,
  };

  let taskNameValue = document.getElementById("taskName").value;
  let taskDescriptionValue = document.getElementById("taskDescription").value;

  let taskNameRegex = /^[a-zA-Z0-9\s]+$/;
  let taskDescriptionRegex = /^[a-zA-Z0-9\s]+$/;

  if (!taskNameRegex.test(taskNameValue)) {
    alert("Not correct name");
    return false;
  }

  if (!taskDescriptionRegex.test(taskDescriptionValue)) {
    alert("Not correct description");
    return false;
  }

  saveTask(task);
  clearInputFields();
  loadTasks();
}

function clearInputFields() {
  document.getElementById("taskName").value = "";
  document.getElementById("taskDescription").value = "";
}

function editTask(taskId) {
  const editUrl = `/edit/edit.html?id=${taskId}`;
  window.location.href = (editUrl);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.unshift(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(
  isSortByDate = false,
  isSortByTitle = false,
  filterCompleted = "all"
) {
  const incompletedTasksDiv = document.getElementById("incompletedTasks");
  const completedTasksDiv = document.getElementById("completedTasks");
  incompletedTasksDiv.innerHTML = "";
  completedTasksDiv.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (isSortByDate) {
    tasks.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (isSortByTitle) {
    tasks.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filterCompleted === "completed") {
    tasks = tasks.filter((task) => task.completed);
  } else if (filterCompleted === "incompleted") {
    tasks = tasks.filter((task) => !task.completed);
  }

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTaskCompletion(task.id));

    const taskNameDiv = document.createElement("div");
    taskNameDiv.innerText = task.name;
    taskNameDiv.style.cursor = "pointer"; 
    taskNameDiv.addEventListener("click", () => viewTaskDetails(task.id));

    const taskInfo = document.createElement("div");
    taskInfo.innerHTML = `
        <p><b>Title</b>: ${task.name}</p>
        <p><b>Description</b>: ${task.description}</p>
        <p><b>Date:</b> ${task.date}</p>
      `;

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => editTask(task.id));

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskNameDiv);
    taskDiv.appendChild(taskInfo);
    taskDiv.appendChild(editButton);
    taskDiv.appendChild(deleteButton);

    if (task.completed) {
      completedTasksDiv.appendChild(taskDiv);
    } else {
      incompletedTasksDiv.appendChild(taskDiv);
    }
  });
}

function toggleTaskCompletion(taskId) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      task.completed = !task.completed;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}
console.log(localStorage);

function deleteTask(taskId) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function generateUniqueId() {
  return "id" + Math.random().toString(16).slice(2);
}

function viewTaskDetails(taskId) {
  const detailsUrl = `details/details.html?id=${taskId}`;
  window.location.href = (detailsUrl);
}

function sortTasks() {
  const sortBy = document.getElementById("sortSelect").value;
  if (sortBy === "date") {
    loadTasks(true);
  } else if (sortBy === "title") {
    loadTasks(false, true);
  }
} 

function filterTasks() {
  const status = document.getElementById("filterSelect").value;
  loadTasks(false, false, status);
} 

