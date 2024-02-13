document.addEventListener("DOMContentLoaded", () => {
    // Получаем id задачи из URL
    const taskId = new URL(window.location.href).searchParams.get("id");
    // Получаем массив задач из localStorage, если он есть
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // Ищем индекс текущей задачи в массиве задач
    const currentTaskIndex = tasks.findIndex((task) => task.id === taskId);
    // Получаем текущую задачу по индексу
    const currentTask = tasks[currentTaskIndex];
  
    // Получаем форму редактирования задачи и поля ввода
  const editTaskForm = document.getElementById("editTaskForm");
  const taskNameInput = document.getElementById("taskName");
  const taskDescriptionInput = document.getElementById("taskDescription");

  // Если задача не найдена, выводим сообщение и прекращаем выполнение
  if (!currentTask) {
    editTaskForm.innerHTML = "Task not found";
    return;
  }
// Заполняем поля ввода данными текущей задачи
  taskNameInput.value = currentTask.name;
  taskDescriptionInput.value = currentTask.description;

  // Функция для обработки отправки формы
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Получаем данные формы
    const formData = new FormData(editTaskForm);
    const formProps = Object.fromEntries(formData);

    // Обновляем данные текущей задачи
// Обновляем данные текущей задачи
    tasks[currentTaskIndex] = {
      ...currentTask,
      name: formProps.taskName,
      description: formProps.taskDescription,
    };

    // Сохраняем обновленные данные в localStorage
      localStorage.setItem("tasks", JSON.stringify(tasks)); 

}});
