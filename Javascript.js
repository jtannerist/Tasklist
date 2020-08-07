
// START: CREATE NEW CARD //
const NewTaskCard = document.querySelector("#taskCard");
const AddTaskModalSaveButton = document.querySelector(".btnAddTaskSave");
AddTaskModalSaveButton.addEventListener("click", saveButtonClicked);

// Create action when save button clicked on Add new task modal //
function saveButtonClicked() {
  // Set variables for fields in a task //
  const taskName = document.querySelector("#taskName").value;
  // console.log(taskName); for testing
  const assignee = document.querySelector("#assignee").value;
  const taskStatus = document.querySelector("#taskStatus").value;
  const taskDescription = document.querySelector("#taskDescription").value;
  const dueDate = document.querySelector("#dueDate").value;
  // console.log({ taskName, assignee, taskStatus, taskDescription, dueDate }); only printing taskName
  AddTask(taskName, assignee, taskStatus, taskDescription, dueDate); // A new task will hold array of values //
}

function addTask(taskName, assignee, taskStatus, taskDescription, dueDate) {
  // Create new task card copying layout //
    const addTaskElement = document.createElement()
    // taskElement.taskList.add()
    addTaskElement.innerHTML = `
    `;
  console.log(addTaskElement);
  addTaskElement.append(addTaskElement); // invoke action and create new HTML
}




// UPDATE TASK //
editTask(id, taskName, assignee, taskStatus, taskDescription, dueDate) {
  for (i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].id === id)
  }
}