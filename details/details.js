document.addEventListener("DOMContentLoaded", loadTaskDetails);

function loadTaskDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get("id");
  
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    const task = tasks.find((task) => task.id === taskId);
  
    if (task) {
      const taskDetailsDiv = document.getElementById("taskDetails");
      taskDetailsDiv.innerHTML = `
            <p class="taks_title"><b>Title</b>: ${task.name}</p>
            <p class="taks_title"><b>Description</b>: ${task.description}</p>
            <button onclick="goBack()" class="taks_title-button">Back</button>
          `;
    } else {
      const taskDetailsDiv = document.getElementById("taskDetails");
      taskDetailsDiv.innerHTML = "<p>Task not found.</p>";
    }
  }

function goBack() {
    window.history.back();
  }
  
  