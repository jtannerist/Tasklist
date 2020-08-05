// START: ADD TASK VALIDATION - on Task Name & Task Description //

// Set variables //
let btnAddTaskSave = document.querySelector(".btnAddTaskSave");
let taskName = document.querySelector(".taskName");
let TaskNameErrMsg = document.querySelector("#TaskNameErrMsg");
let taskDescription = document.querySelector(".taskDescription");
let taskDescriptionErrMsg = document.querySelector("#taskDescriptionErrMsg");
// Set function (action) assigned to Add Task button //
btnAddTaskSave.onclick = function () {
  if (
    taskName.value == "" ||
    taskName.value.length <= 8 ||
    // ??? length validation not working
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
// END: ADD TASK VALIDATION //

// START: SET CLASSES FOR TASKS & TASKLIST //

// Set Class for Task framework //
// Declare all fields of Add Task Modal //
// Can tell it's a class because name is capitalized //
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
  addTask(taskName, assignee, status, description, dueDate) {
    // "new" is a keyword to instruct it to create a new task using "Task" class//
    const task = new Task(
      this.currentId++, // instructs it to add 1 to the Id to get a unique Id for this task getting newly created //
      taskName,
      assignee,
      status,
      description,
      dueDate
    ); // creates an instance of class //
    this.tasks.push(task); // Invokes function and pushes the new object (task) into the array (tasks);
  }
  // Keyword 'displayXXX' to create function //
  displayTask() {
    // Use for loop to run through the array //
    for (i = 0; i < this.tasks.length; i++) {
      // "i" doesn't mean anything, it is just good practise for the variable name in a for loop. Arrays all start at 0 (even though we think of it as book "1"). //
      // It finishes the loop when gets to the end of the objects held in the array, ie. end of the tasks. And tasks can keep getting added and this loop will run until it goes through all tasks because of the length parameter (this.tasks.length) //
      //if you add .xxx, Eg.(this.tasks[i].taskName) it would return all the task names of the task list //

      // ??? can i remove this now? -->
      console.log(this.tasks[i]);

      // --> TO DO: Use if condition to match the id. if the id is attached, you can extract the contents of that array object. create an html format. append that to the html file
    }
  }
}

const taskList = new TaskList(); // Creates an instance of class BookList. Sets taskList as a variable and attaches it to a new function.

let date1 = new Date("2020-08-26");
let date2 = new Date("2020-08-27");
// ??? can i remove for now until we learn the date function? //

// ?? Was this only needed to show it in the console - can i remove? //
// bookList.addBook(
//   "The Book Thief",
//   "life",
//   "Markus Zusak",
//   "image.jpg",
//   true,
//   date1
// );

// ??? can i remove this now? -->
console.log(bookList.books);

taskList.displayTask(); // invoking the function of displaying contents of the array. taskList previously set as a variable that holds a function to create a new Task list.

// END: SET CLASSES FOR TASKS & TASKLIST //
