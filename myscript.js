// START: SET CLASSES FOR TASKS & TASKLIST //

// Set Class for Task framework - Can tell it's a class because name is capitalized
// Declare all fields of "Add Task Modal"
class Task {
  constructor(id, taskName, assignee, status, description, dueDate) {
    this.id = id;
    this.taskName = taskName;
    this.assignee = assignee;
    this.status = status;
    this.description = description;
    this.dueDate = dueDate;
  }
}
// Set Class for Task List
// Declare empty array to hold books
// Declare Id so that a function can be created in order to increment
class TaskList {
  constructor() {
    this.tasks = [];
    this.currentId = 1;
  }

  // END: SET CLASSES FOR TASKS & TASKLIST //

  // START: CREATE NEW TASK //
  // This function uses the above framework (class) to get details of each task, create the task & get ready for the array
  addTask(taskName, assignee, status, description, dueDate = "") {
    // "new" is a keyword to instruct it to create a new task using "Task" class
    // alert(`${taskName}, ${assignee}, ${status}, ${description}, ${dueDate}`);
    const task = new Task(
      this.currentId++, // instructs it to add 1 to the Id to get a unique Id for this task getting newly created
      taskName,
      assignee,
      status,
      description,
      dueDate
    );
    // alert("here");
    // creates an instance of class
    this.tasks.push(task); // Invokes function and pushes the new object (task) into the array (tasks);
  }

  //Update function in the class
  updateTask(id, name, description, assignee, status, date) {
    alert("in class update");
    let updated_id = "";
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == id) {
        alert("update if");
        this.tasks[i].taskName = name;
        this.tasks[i].description = description;
        this.tasks[i].assignee = assignee;
        this.tasks[i].status = status;
        this.tasks[i].dueDate = date;
        updated_id = id;
        break;
      }
    }
    return updated_id;
  }

  deleteTask(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      // alert(`${this.tasks[i].id} === ${id}`);
      if (this.tasks[i].id == id) {
        // alert("in delete " + i + " " + this.tasks[i].name);
        this.tasks.splice(i, 1);
        break;
      }
    }
  }

  // This function displays HTML content that represents cards
  displayListHtml() {
    //alert(this.tasks.length);
    let displayHtml = "";
    //alert(displayHtml);
    for (let i = 0; i < this.tasks.length; i++) {
      displayHtml = `<div id="taskRow_${this.tasks[i].id}" class="row cardTask mx-0 my-1 ">
      <div class="col-sm-8 pl-0 pr-3">     
    <li class="list-group-item" id="taskCard">${this.tasks[i].taskName}
      <div id="demo_${this.tasks[i].id}" class="collapse">
        <ul style="list-style-type:disc;">
        <li>Assignee: ${this.tasks[i].assignee}</li>
        <li>Status: ${this.tasks[i].status}</li>
        <li>Description: ${this.tasks[i].description}</li>
        <li>Due: ${this.tasks[i].dueDate}</li>
        </ul>
      </div> 
      </div>
<div class="taskBox col-sm-4 pr-0 pl-0">
<span class="pull-right">          
      <button type="button" class="btn view btn-sm" data-toggle="collapse" data-target="#demo_${this.tasks[i].id}"><i class="fa fa-eye" aria-hidden="true"></i></button>
      <button id="edit_${this.tasks[i].id}" type="button" class="btn edit btn-sm" data-toggle="modal" data-target="#modalEdit"><i class="fa fa-pencil"></i>
    </button> 
  <button id="delete_${this.tasks[i].id}" type="button" class="delete btn trash btn-sm" data-toggle="modal" data-target="#modalDelete"><i class="fa fa-trash"></i></button>
  </button>
</span>  
</li> 
</div>
</div> `;
    }
    return displayHtml;
  }

  // Keyword 'displayXXX' to create function
  displayTask() {
    // Use for loop to run through the array
    for (i = 0; i < this.tasks.length; i++) {
      // "i" doesn't mean anything, it is just good practise for the variable name in a for loop. Arrays all start at 0 (even though we think of it as book "1").
      // It finishes the loop when gets to the end of the objects held in the array, ie. end of the tasks. And tasks can keep getting added and this loop will run until it goes through all tasks because of the length parameter (this.tasks.length)
      //if you add .xxx, Eg.(this.tasks[i].taskName) it would return all the task names of the task list
    }
    // Test: console.log(this.tasks[i]);
  }
}

const taskList = new TaskList(); // Creates an instance of class BookList. Sets taskList as a variable and attaches it to a new function.
// test -->console.log(bookList.books);

// taskList.displayTask(); invoking the function of displaying contents of the array. taskList previously set as a variable that holds a function to create a new Task list.

// END: CREATE NEW TASK //

// START: ADD OBJECT TO ARRAY - adding a new task //
// Display tasks
function addTaskToWebpage() {
  let listOfCards = document.querySelector("#listOfCards");
  const displayHtml = taskList.displayListHtml();
  let range = document.createRange();
  let documentFragment = range.createContextualFragment(displayHtml);
  // attach delete event listener
  documentFragment
    .querySelector("button.delete")
    .addEventListener("click", deleteTask);
  documentFragment
    .querySelector("button.edit")
    .addEventListener("click", openEditModal);
  listOfCards.appendChild(documentFragment);
}
// END: ADD OBJECT TO ARRAY - adding a new task //

// START: EDIT TASK //

function openEditModal() {
  // alert("hello");
  const taskElement = event.target.closest(".edit"); // Searches for the delete button most recently clicked
  let editIdArr = taskElement.id.split("_");
  let retreiveId = editIdArr[1];
  // alert(retreiveId);
  document.querySelector("#editTaskId").value = retreiveId;
  for (i = 0; i <= taskList.tasks.length; i++) {
    alert("in for");
    if (taskList.tasks[i].id == retreiveId) {
      alert("in edit");
      document.querySelector("#editTaskName").value =
        taskList.tasks[i].taskName;
      document.querySelector("#editTaskDescription").value =
        taskList.tasks[i].description;
      document.querySelector("#editAssignee").value =
        taskList.tasks[i].assignee;
      document.querySelector("#dueDate").value = taskList.tasks[i].dueDate;
      break;
    }
  }
  $("#modalEdit").modal("show"); //function to show the Modal at Edit
}

// validation for edit modal

let btnEditUpdate = document.querySelector("#btnEditUpdate");
let editTaskName = document.querySelector("#editTaskName");
// let taskNameErrMsg = document.querySelector("#taskNameErrMsg");
let editAssignee = document.querySelector("#editAssignee");
// let taskAssigneeErrMsg = document.querySelector("#taskAssigneeErrMsg");
let editTaskStatus = document.querySelector("#editTaskStatus");
let editTaskDescription = document.querySelector("#editTaskDescription");
// let taskDescriptionErrMsg = document.querySelector("#taskDescriptionErrMsg");
let editDueDate = document.querySelector("#editDueDate");

btnEditUpdate.onclick = function () {
  // alert("inside function");
  // if (
  //   editTaskName.value == "" ||
  //   editTaskName.value.length < 8 ||
  //   editTaskDescription.value == "" ||
  //   editTaskDescription.value.length < 15 ||
  //   editAassignee.value == ""
  // ) {
  //   // alert("inside if");
  //   taskNameErrMsg.innerHTML =
  //     "Please enter a task name longer than 8 characters";
  //   taskNameErrMsg.style.color = "#ff0000";
  //   taskName.style.borderColor = "#ff0000";
  //   taskAssigneeErrMsg.innerHTML = "Please enter an assignee";
  //   taskAssigneeErrMsg.style.color = "#ff0000";
  //   assignee.style.borderColor = "#ff0000";
  //   taskDescriptionErrMsg.innerHTML =
  //     "Please enter a description longer than 15 characters";
  //   taskDescriptionErrMsg.style.color = "#ff0000";
  //   taskDescription.style.borderColor = "#ff0000";
  //   // return false;
  // } else {
  //   taskNameErrMsg.innerHTML = "Looks good!";
  //   taskNameErrMsg.style.color = "#66CDAA";
  //   taskName.style.borderColor = "#66CDAA";
  //   taskAssigneeErrMsg.innerHTML = "Looks good!";
  //   taskAssigneeErrMsg.style.color = "#66CDAA";
  //   assignee.style.borderColor = "#66CDAA";
  //   taskDescriptionErrMsg.innerHTML = "Looks good!";
  //   taskDescriptionErrMsg.style.color = "#66CDAA";
  //   taskDescription.style.borderColor = "#66CDAA";
  //   // return true;
  alert("here update task");
  //after edit validation
  let editTaskId = document.querySelector("#editTaskId");
  let u_id = taskList.updateTask(
    editTaskId.value,
    editTaskName.value,
    editTaskDescription.value,
    editAssignee.value,
    editTaskStatus.value,
    editDueDate.value
  );

  $("#modalEdit").modal("hide"); // hides the modal once data filled out
};

// END: EDIT TASK //

// START: DELETE TASK //
function deleteTask() {
  const taskElement = event.target.closest(".delete"); // Searches for the delete button most recently clicked
  let delIdArr = taskElement.id.split("_");
  let retreiveId = delIdArr[1];
  // alert(retreiveId);
  taskList.deleteTask(retreiveId);
  // Delete the list row from the ul
  let task_row = `#taskRow_${retreiveId}`;
  var tRow = document.querySelector(task_row);
  tRow.parentNode.removeChild(tRow);
}

// END: DELETE TASK //

// START: ADD TASK VALIDATION //
// Set variables
let btnAddTaskSave = document.querySelector("#btnAddTaskSave");
let taskName = document.querySelector("#taskName");
let taskNameErrMsg = document.querySelector("#taskNameErrMsg");
let assignee = document.querySelector("#assignee");
let taskAssigneeErrMsg = document.querySelector("#taskAssigneeErrMsg");
let taskStatus = document.querySelector("#taskStatus");
let taskDescription = document.querySelector("#taskDescription");
let taskDescriptionErrMsg = document.querySelector("#taskDescriptionErrMsg");
let dueDate = document.querySelector("#dueDate");

// Set function (action) assigned to Add Task button
// alert("alert inside js");
btnAddTaskSave.onclick = function () {
  // alert("inside function");
  if (
    taskName.value == "" ||
    taskName.value.length < 8 ||
    taskDescription.value == "" ||
    taskDescription.value.length < 15 ||
    assignee.value == ""
  ) {
    // alert("inside if");
    taskNameErrMsg.innerHTML =
      "Please enter a task name longer than 8 characters";
    taskNameErrMsg.style.color = "#ff0000";
    taskName.style.borderColor = "#ff0000";
    taskAssigneeErrMsg.innerHTML = "Please enter an assignee";
    taskAssigneeErrMsg.style.color = "#ff0000";
    assignee.style.borderColor = "#ff0000";
    taskDescriptionErrMsg.innerHTML =
      "Please enter a description longer than 15 characters";
    taskDescriptionErrMsg.style.color = "#ff0000";
    taskDescription.style.borderColor = "#ff0000";
    // return false;
  } else {
    taskNameErrMsg.innerHTML = "Looks good!";
    taskNameErrMsg.style.color = "#66CDAA";
    taskName.style.borderColor = "#66CDAA";
    taskAssigneeErrMsg.innerHTML = "Looks good!";
    taskAssigneeErrMsg.style.color = "#66CDAA";
    assignee.style.borderColor = "#66CDAA";
    taskDescriptionErrMsg.innerHTML = "Looks good!";
    taskDescriptionErrMsg.style.color = "#66CDAA";
    taskDescription.style.borderColor = "#66CDAA";
    // return true;

    taskList.addTask(
      taskName.value,
      assignee.value,
      taskStatus.value,
      taskDescription.value,
      dueDate.value
    );
    $("#modalAdd").modal("hide"); // hides the modal once data filled out
    addTaskToWebpage(); //called the display function (from function addTaskToWebpage() {)
  }
};

// Once validation alerts users something is wrong, this changes feedback on a change of input

//Task Name on change validation
taskName.onchange = function () {
  if (taskName.value == "" || taskName.value.length < 8) {
    taskNameErrMsg.innerHTML =
      "Please enter a task name longer than 8 characters";
    taskNameErrMsg.style.color = "#ff0000";
    taskName.style.borderColor = "#ff0000";
  } else {
    taskNameErrMsg.innerHTML = "Looks good!";
    taskNameErrMsg.style.color = "#66CDAA";
    taskName.style.borderColor = "#66CDAA";
  }
};

//Assignee on change validation
assignee.onchange = function () {
  if (assignee.value == "") {
    taskAssigneeErrMsg.innerHTML = "Please enter an assignee";
    taskAssigneeErrMsg.style.color = "#ff0000";
    assignee.style.borderColor = "#ff0000";
  } else {
    taskAssigneeErrMsg.innerHTML = "Looks good!";
    taskAssigneeErrMsg.style.color = "#66CDAA";
    assignee.style.borderColor = "#66CDAA";
  }
};

//Task Description on change validation
taskDescription.onchange = function () {
  if (taskDescription.value == "" || taskDescription.value.length < 15) {
    taskDescriptionErrMsg.innerHTML =
      "Please enter a description longer than 15 characters";
    taskDescriptionErrMsg.style.color = "#ff0000";
    taskDescription.style.borderColor = "#ff0000";
  } else {
    taskDescriptionErrMsg.innerHTML = "Looks good!";
    taskDescriptionErrMsg.style.color = "#66CDAA";
    taskDescription.style.borderColor = "#66CDAA";
  }
};

// END: ADD TASK VALIDATION //

// START: CLEAR FIELDS //

let addTaskBug = document.querySelectorAll("button.addTaskBug");
// alert(addTaskBug);
for (i = 0; i < addTaskBug.length; i++) {
  addTaskBug[i].onclick = function () {
    $("#modalAdd").modal("show"); //function to show the Modal at Add
    clearAllFields();
  };
}

function clearAllFields() {
  // alert("clear");
  // alert(taskName);
  taskName.value = null;
  assignee.value = null;
  taskStatus.value = null;
  taskDescription.value = null;
  dueDate.value = null;
  taskNameErrMsg.innerHTML = "";
  taskAssigneeErrMsg.innerHTML = "";
  taskDescriptionErrMsg.innerHTML = "";
  taskName.style.borderColor = "#ced4da";
  assignee.style.borderColor = "#ced4da";
  taskDescription.style.borderColor = "#ced4da";
}

// END: CLEAR FIELDS //

// START: FETCH API //

// //set the specific API URL
// const url = 'http://www.example.com';

// //function to make API Call
// const getFetch = async (url) => {
//   const response = await fetch(url);
//   //convert response to Json format
//   const myJson = await response.json();
//   // return the response
//   return myJson ;
// }

// //initialize the data to be posted

// const data = {

// }

// //function to make API Call
// const postFetch = async (url,data) => (
// const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       //type of data
//       'Content-Type': 'application/json'
//     },
//     //data to be posted on server
//     body: JSON.stringify(data)
//   });
// //convert response to Json format
// const myJson = await response.json();
// //return the response
// return myJson ;
// }

// END: FETCH API //

// START: SHOW TODAY's DATE IN NAVBAR //

const dateElement = document.getElementById("date");
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// END: SHOW TODAY's DATE IN NAVBAR //
