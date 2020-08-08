// START: SET CLASSES FOR TASKS & TASKLIST //

// Set Class for Task framework - Can tell it's a class because name is capitalized //
// Declare all fields of "Add Task Modal" //
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
// Set Class for Task List //
// Declare empty array to hold books //
// Declare Id so that a function can be created in order to increment //
class TaskList {
  constructor() {
    this.tasks = [];
    this.currentId = 1;
  }

  // This function uses the above framework (class) to get details of each task, create the task & get ready for the array //
  addTask(taskName, assignee, status, description, dueDate = "") {
    // "new" is a keyword to instruct it to create a new task using "Task" class//
    // alert(`${taskName}, ${assignee}, ${status}, ${description}, ${dueDate}`);
    const task = new Task(
      this.currentId++, // instructs it to add 1 to the Id to get a unique Id for this task getting newly created //
      taskName,
      assignee,
      status,
      description,
      dueDate
    );
    // alert("here");
    // creates an instance of class //
    this.tasks.push(task); // Invokes function and pushes the new object (task) into the array (tasks);
  }

  // This function displays HTML content that represents cards
  displayListHtml() {
    //alert(this.tasks.length);
    let displayHtml = "";
    //alert(displayHtml);
    for (let i = 0; i < this.tasks.length; i++) {
      displayHtml = `<div class="row cardTask mx-0 my-1">
      <div class="col-sm-8 pl-0 pr-3">     
    <li class="list-group-item" id="taskCard">${this.tasks[i].taskName}
      <div id="demo1" class="collapse">
        <ul style="list-style-type:disc;">
        <li>Assignee: ${this.tasks[i].assignee}</li>
        <li>Status: ${this.tasks[i].status}</li>
        <li>Description: ${this.tasks[i].description}</li>
        <li>Due: ${this.tasks[i].dueDate}</li>
        </ul>
      </div> 
      </div>
<!-- View button and details of task --> 
<div class="taskBox col-sm-4 pr-0 pl-0">
<span class="pull-right">          
      <button type="button" class="btn view btn-sm" data-toggle="collapse" data-target="#demo1"><i class="fa fa-eye" aria-hidden="true"></i></button>
      
     <!-- Edit Task button that opens Modal -->
      <button type="button" class="btn edit btn-sm" data-toggle="modal" data-target="#modalEdit"><i class="fa fa-pencil"></i>
    </button> 
    <!-- Delete Task button that opens Modal -->
   <button type="button" class="btn trash btn-sm" data-toggle="modal" data-target="#modalDelete"><i class="fa fa-trash"></i></button>
  </button>
</span>  
</li> 
</div>
</div>  `;
    }
    return displayHtml;
  }

  // Keyword 'displayXXX' to create function //
  displayTask() {
    // Use for loop to run through the array //
    for (i = 0; i < this.tasks.length; i++) {
      // "i" doesn't mean anything, it is just good practise for the variable name in a for loop. Arrays all start at 0 (even though we think of it as book "1"). //
      // It finishes the loop when gets to the end of the objects held in the array, ie. end of the tasks. And tasks can keep getting added and this loop will run until it goes through all tasks because of the length parameter (this.tasks.length) //
      //if you add .xxx, Eg.(this.tasks[i].taskName) it would return all the task names of the task list //
    }
    // Test: console.log(this.tasks[i]); -->
  }
}

const taskList = new TaskList(); // Creates an instance of class BookList. Sets taskList as a variable and attaches it to a new function.
// test -->console.log(bookList.books); //

// taskList.displayTask(); // invoking the function of displaying contents of the array. taskList previously set as a variable that holds a function to create a new Task list.

// END: SET CLASSES FOR TASKS & TASKLIST //

// START: ADD TASK VALIDATION - on Task Name & Task Description //
// Set variables //
let btnAddTaskSave = document.querySelector("#btnAddTaskSave");
let taskName = document.querySelector("#taskName");
let taskNameErrMsg = document.querySelector("#taskNameErrMsg");
let taskDescription = document.querySelector("#taskDescription");
let taskDescriptionErrMsg = document.querySelector("#taskDescriptionErrMsg");
let assignee = document.querySelector("#assignee");
let taskAssigneeErrMsg = document.querySelector("#taskAssigneeErrMsg");
let taskStatus = document.querySelector("#taskStatus");
let dueDate = document.querySelector("#dueDate");
// Set function (action) assigned to Add Task button //
// alert("alert inside js");
btnAddTaskSave.onclick = function () {
  // alert("inside function");
  if (
    taskName.value == "" ||
    taskName.value.length < 8 ||
    // ??? length validation not working
    taskDescription.value == "" ||
    assignee.value == ""
  ) {
    // alert("inside if");
    taskNameErrMsg.innerHTML =
      "Please enter a Task Name longer than 8 characters";
    taskNameErrMsg.style.color = "#ff0000";
    taskName.style.borderColor = "#ff0000";
    taskAssigneeErrMsg.innerHTML = "Please enter an assignee";
    taskAssigneeErrMsg.style.color = "#ff0000";
    assignee.style.borderColor = "#ff0000";
    taskDescriptionErrMsg.innerHTML = "Please enter a Task Description";
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
    $("#modalAdd").modal("hide");
    displayTaskList(); //called the display function (from function displayTaskList() {)
  }
};

taskName.onchange = function () {
  if (taskName.value == "" || taskName.value.length < 8) {
    // alert("inside if");
    taskNameErrMsg.innerHTML =
      "Please enter a Task Name longer than 8 characters";
    taskNameErrMsg.style.color = "#ff0000";
    taskName.style.borderColor = "#ff0000";
  } else {
    taskNameErrMsg.innerHTML = "Looks good!";
    taskNameErrMsg.style.color = "#66CDAA";
    taskName.style.borderColor = "#66CDAA";
  }
};

taskName.onchange = function () {
  if (taskName.value == "" || taskName.value.length < 8) {
    // alert("inside if");
    taskAssigneeErrMsg.innerHTML =
      "Please enter a Task Name longer than 8 characters";
    taskAssigneeErrMsg.style.color = "#ff0000";
    assignee.style.borderColor = "#ff0000";
  } else {
    taskAssigneeErrMsg.innerHTML = "Looks good!";
    taskAssigneeErrMsg.style.color = "#66CDAA";
    assignee.style.borderColor = "#66CDAA";
  }
};

taskName.onchange = function () {
  if (taskName.value == "" || taskName.value.length < 8) {
    // alert("inside if");
    taskAssigneeErrMsg.innerHTML =
      "Please enter a Task Name longer than 8 characters";
    taskAssigneeErrMsg.style.color = "#ff0000";
    assignee.style.borderColor = "#ff0000";
  } else {
    taskAssigneeErrMsg.innerHTML = "Looks good!";
    taskAssigneeErrMsg.style.color = "#66CDAA";
    assignee.style.borderColor = "#66CDAA";
  }
};

// ADD OBJECT TO ARRAY - adding a new task

//Display tasks catching it
function displayTaskList() {
  let listOfCards = document.querySelector("#listOfCards");
  const displayHtml = taskList.displayListHtml();
  let range = document.createRange();
  let documentFragment = range.createContextualFragment(displayHtml);
  listOfCards.appendChild(documentFragment);
}
