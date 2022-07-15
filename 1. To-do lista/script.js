
const container = document.querySelector(".container");

const delegateContainerClick = e => {
   const target = e.target;

   if (target.matches(".add-task-btn"))
      addTask();

   if (target.matches(".single-task"))
      target.classList.toggle("completed");

   if (target.matches(".remove-task-btn"))
      target.parentElement.remove();
}

container.addEventListener("click", delegateContainerClick);

const addTask = () => {
   const taskTitle = container.querySelector(".task-input");
   const taskList = container.querySelector(".task-list");

   if (!taskTitle.value) return taskTitle.style.border = "2px solid red";

   taskTitle.style.border = "none"
   
   const newTask = document.createElement("li");
   newTask.innerText = taskTitle.value;
   newTask.classList.add("single-task");

   const removeTaskBtn = document.createElement("img");
   removeTaskBtn.classList.add("remove-task-btn");
   removeTaskBtn.src = "close-button.svg";
   removeTaskBtn.setAttribute("alt", "&times;");

   newTask.append(removeTaskBtn);
   taskList.append(newTask);

   taskTitle.value = "";
}