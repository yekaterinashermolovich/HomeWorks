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
    window.location.href = `http://127.0.0.1:5500/edit.html=${taskId}`;
  }
  function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  