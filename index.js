document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
  });
  
  function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
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
  
    saveTask(task);
    clearInputFields();
    loadTasks();
  }

  function clearInputFields() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskDescription').value = '';
  }
  
  function editTask(taskId) {
    window.location.href = `http://127.0.0.1:5500/edit/edit.html?id=${taskId}`;
  }

  function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadTasks() {
    const incompletedTasksDiv = document.getElementById('incompletedTasks');
    const completedTasksDiv = document.getElementById('completedTasks');
    incompletedTasksDiv.innerHTML = '';
    completedTasksDiv.innerHTML = '';
  
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    tasks.forEach(task => {
      const taskDiv = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      console.log(task.completed)
      checkbox.addEventListener('change', () => toggleTaskCompletion(task.id));
      
      const taskInfo = document.createElement('div');
      taskInfo.innerHTML = `
        <p><b>Title</b>: ${task.name}</p>
        <p><b>Description</b>: ${task.description}</p>
        <p><b>Date:</b> ${task.date}</p>
      `;
  
      const editButton = document.createElement('button');
      editButton.innerText = 'Edit';
      editButton.addEventListener('click', () => editTask(task.id));
  
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', () => deleteTask(task.id));
  
      taskDiv.appendChild(checkbox);
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
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  
  
  function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  
  
  function generateUniqueId() {
    return "id" + Math.random().toString(16).slice(2)
  }
  
  
  
  
  
  
  
  