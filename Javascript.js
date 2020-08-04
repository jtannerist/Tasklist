// Add Task - Add Task Name & Task Description - Validaton //
let btnAddTaskSave = document.querySelector(".btnAddTaskSave");
let taskName = document.querySelector(".taskName");
let TaskNameErrMsg = document.querySelector("#TaskNameErrMsg");
let taskDescription = document.querySelector(".taskDescription");
let taskDescriptionErrMsg = document.querySelector("#taskDescriptionErrMsg");
btnAddTaskSave.onclick = function () {
  if (
    taskName.value == "" ||
    taskName.value.length <= 8 ||
    taskDescription.value == ""
  ) {
    TaskNameErrMsg.innerHTML =
      "Please enter a Task Name longer than 8 characters";
    TaskNameErrMsg.style.color = "#ff0000";
    taskName.style.borderColor = "#ff0000";
    taskDescriptionErrMsg.innerHTML = "Please enter a Task Description";
    taskDescriptionErrMsg.style.color = "#ff0000";
    taskDescription.style.borderColor = "#ff0000";
    return false;
  } else {
    taskName.style.borderColor = "#66CDAA";
    taskDescription.style.borderColor = "#66CDAA";
    return true;
  }
};
// END Add Task - Add Task Name - Validaton //

//length validation not working
