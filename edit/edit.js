document.addEventListener("DOMContentLoaded", () => {
  const taskId = new URL(window.location.href).searchParams.get("id");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const currentTaskIndex = tasks.findIndex((task) => task.id === taskId);
  const currentTask = tasks[currentTaskIndex];

  const editTaskForm = document.getElementById("editTaskForm");
  const taskNameInput = document.getElementById("taskName");
  const taskDescriptionInput = document.getElementById("taskDescription");

  if (!currentTask) {
    editTaskForm.innerHTML = "Task not found";
    return;
  }

  taskNameInput.value = currentTask.name;
  taskDescriptionInput.value = currentTask.description;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(editTaskForm);
    const formProps = Object.fromEntries(formData);

    tasks[currentTaskIndex] = {
      ...currentTask,
      name: formProps.taskName,
      description: formProps.taskDescription,
    };

    localStorage.setItem("tasks", JSON.stringify(tasks));

    console.log("Updated tasks:", tasks);
  };

  editTaskForm.addEventListener("submit", handleFormSubmit);

  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", () => {
      history.back();
    });
  }
});
