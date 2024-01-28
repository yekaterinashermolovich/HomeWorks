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
  