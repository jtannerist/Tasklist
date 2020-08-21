// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"myscript.js":[function(require,module,exports) {
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// START: SET CLASSES FOR TASKS & TASKLIST //
// Set Class for Task framework - Can tell it's a class because name is capitalized
// Declare all fields of "Add Task Modal"
var Task = function Task(id, taskName, assignee, status, description, dueDate) {
  _classCallCheck(this, Task);

  this.id = id;
  this.taskName = taskName;
  this.assignee = assignee;
  this.status = status;
  this.description = description;
  this.dueDate = dueDate;
}; // Set Class for Task List
// Declare empty array to hold books
// Declare Id so that a function can be created in order to increment


var TaskList = /*#__PURE__*/function () {
  function TaskList() {
    _classCallCheck(this, TaskList);

    this.tasks = [];
    this.currentId = parseInt(localStorage.getItem("currentId")) || 1;
    localStorage.setItem("currentId", this.currentId);
  } // END: SET CLASSES FOR TASKS & TASKLIST //
  // START: CREATE NEW TASK //
  // This function uses the above framework (class) to get details of each task, create the task & get ready for the array


  _createClass(TaskList, [{
    key: "addTask",
    value: function addTask(taskName, assignee, status, description) {
      var dueDate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      // "new" is a keyword to instruct it to create a new task using "Task" class
      // alert(`${taskName}, ${assignee}, ${status}, ${description}, ${dueDate}`);
      var task = new Task(this.currentId++, // instructs it to add 1 to the Id to get a unique Id for this task getting newly created
      taskName, assignee, status, description, dueDate); // alert("here");
      // creates an instance of class

      this.tasks.push(task); // Invokes function and pushes the new object (task) into the array (tasks);
      //add to local storage

      localStorage.setItem("currentId", this.currentId);
      var mynewtasks = JSON.parse(localStorage.getItem("mytasks")) || [];
      mynewtasks.push(task);
      localStorage.setItem("mytasks", JSON.stringify(mynewtasks));
    } //Update function in the class

  }, {
    key: "updateTask",
    value: function updateTask(id, name, description, assignee, status, date) {
      // alert("in class update");
      var updated_id = "";

      for (var _i = 0; _i < this.tasks.length; _i++) {
        if (this.tasks[_i].id == id) {
          // alert("update if");
          this.tasks[_i].taskName = name;
          this.tasks[_i].description = description;
          this.tasks[_i].assignee = assignee;
          this.tasks[_i].status = status;
          this.tasks[_i].dueDate = date;
          updated_id = id;
        }
      }

      var mynewtasks = JSON.parse(localStorage.getItem("mytasks"));

      for (var _i2 = 0; _i2 < mynewtasks.length; _i2++) {
        if (mynewtasks[_i2].id == id) {
          //update in local storage
          mynewtasks[_i2].taskName = name;
          mynewtasks[_i2].description = description;
          mynewtasks[_i2].assignee = assignee;
          mynewtasks[_i2].status = status;
          mynewtasks[_i2].dueDate = date;
          localStorage.setItem("mytasks", JSON.stringify(mynewtasks)); // alert("edit local");

          break;
        }
      }

      return updated_id;
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(id) {
      for (var _i3 = 0; _i3 < this.tasks.length; _i3++) {
        if (this.tasks[_i3].id == id) {
          this.tasks.splice(_i3, 1);
          break;
        }
      } //local storage


      var mynewtasks = JSON.parse(localStorage.getItem("mytasks"));

      for (var _i4 = 0; _i4 < mynewtasks.length; _i4++) {
        if (mynewtasks[_i4].id == id) {
          // delete from local storage
          mynewtasks.splice(_i4, 1);
          localStorage.setItem("mytasks", JSON.stringify(mynewtasks));
          break;
        }
      }
    } // Keyword 'displayXXX' to create function

  }, {
    key: "displayTask",
    value: function displayTask() {
      // Use for loop to run through the array
      for (i = 0; i < this.tasks.length; i++) {// "i" doesn't mean anything, it is just good practise for the variable name in a for loop. Arrays all start at 0 (even though we think of it as book "1").
        // It finishes the loop when gets to the end of the objects held in the array, ie. end of the tasks. And tasks can keep getting added and this loop will run until it goes through all tasks because of the length parameter (this.tasks.length)
        //if you add .xxx, Eg.(this.tasks[i].taskName) it would return all the task names of the task list
      } // Test: console.log(this.tasks[i]);

    }
  }]);

  return TaskList;
}();

var taskList = new TaskList(); // Creates an instance of class BookList. Sets taskList as a variable and attaches it to a new function.
// test -->console.log(bookList.books);
// taskList.displayTask(); invoking the function of displaying contents of the array. taskList previously set as a variable that holds a function to create a new Task list.
// END: CREATE NEW TASK //
// START: ADD OBJECT TO ARRAY - adding a new task //
// Display tasks

function addTaskToWebpage() {
  var listOfCards = document.querySelector("#listOfCards");
  var displayHtml = taskList.displayListHtml();
  var range = document.createRange();
  var documentFragment = range.createContextualFragment(displayHtml); // attach delete event listener

  documentFragment.querySelector("button.delete").addEventListener("click", deleteTask);
  documentFragment.querySelector("button.edit").addEventListener("click", openEditModal);
  listOfCards.appendChild(documentFragment);
} // END: ADD OBJECT TO ARRAY - adding a new task //
// START: DISPLAY TASKS FROM STORAGE ON WEB PAGE LOAD //


displayAllTasksFromStorage(); // Display all task froms storage

function displayAllTasksFromStorage() {
  var mynewtasks = JSON.parse(window.localStorage.getItem("mytasks")) || taskList.tasks;
  var displayAllHtml = "";

  if (mynewtasks) {
    listOfCards.innerHTML = "";

    for (var _i5 = 0; _i5 < mynewtasks.length; _i5++) {
      displayAllHtml = "<div id=\"taskRow_".concat(mynewtasks[_i5].id, "\" class=\"row cardTask mx-0 my-1 \">\n<div class=\"col-sm-8 pl-0 pr-3\">     \n<li class=\"list-group-item\" id=\"taskCard\">").concat(mynewtasks[_i5].taskName, "\n<div id=\"demo_").concat(mynewtasks[_i5].id, "\" class=\"collapse\">\n  <ul style=\"list-style-type:disc;\">\n  <li>Assignee: ").concat(mynewtasks[_i5].assignee, "</li>\n  <li>Status: ").concat(mynewtasks[_i5].status, "</li>\n  <li>Description: ").concat(mynewtasks[_i5].description, "</li>\n  <li>Due: ").concat(mynewtasks[_i5].dueDate, "</li>\n  </ul>\n</div> \n</div>\n<div class=\"taskBox col-sm-4 pr-0 pl-0\">\n<span class=\"pull-right\">          \n<button type=\"button\" class=\"btn view btn-sm\" data-toggle=\"collapse\" data-target=\"#demo_").concat(mynewtasks[_i5].id, "\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></button>\n<button id=\"edit_").concat(mynewtasks[_i5].id, "\" type=\"button\" class=\"btn edit btn-sm\" data-toggle=\"modal\" data-target=\"#modalEdit\"><i class=\"fa fa-pencil\"></i>\n</button> \n<button id=\"delete_").concat(mynewtasks[_i5].id, "\" type=\"button\" class=\"delete btn trash btn-sm\" data-toggle=\"modal\" data-target=\"#modalDelete\"><i class=\"fa fa-trash\"></i></button>\n</button>\n</span>  \n</li> \n</div>\n</div> ");

      var _listOfCards = document.querySelector("#listOfCards");

      var range = document.createRange();
      var documentFragment = range.createContextualFragment(displayAllHtml); // local storage attach delete event listener

      documentFragment.querySelector("button.delete").addEventListener("click", deleteTask); // local storage attach edit event listener

      documentFragment.querySelector("button.edit").addEventListener("click", openEditModal);

      _listOfCards.appendChild(documentFragment);
    }
  }
} // END: DISPLAY TASKS FROM STORAGE ON WEB PAGE LOAD //
// START: EDIT TASK //


function openEditModal() {
  // alert("hello");
  var taskElement = event.target.closest(".edit"); // Searches for the delete button most recently clicked

  var editIdArr = taskElement.id.split("_");
  var retreiveId = editIdArr[1]; // alert(retreiveId);

  document.querySelector("#editTaskId").value = retreiveId;
  var taskArr = JSON.parse(localStorage.getItem("mytasks")) || taskList.tasks;

  for (i = 0; i <= taskArr.length; i++) {
    // alert("in for");
    if (taskArr[i].id == retreiveId) {
      // alert("in edit");
      document.querySelector("#editTaskName").value = taskArr[i].taskName;
      document.querySelector("#editTaskDescription").value = taskArr[i].description;
      document.querySelector("#editAssignee").value = taskArr[i].assignee;
      document.querySelector("#dueDate").value = taskArr[i].dueDate;
      break;
    }
  }

  $("#modalEdit").modal("show"); //function to show the Modal at Edit
} // Validation for edit modal


var btnEditUpdate = document.querySelector("#btnEditUpdate");
var editTaskName = document.querySelector("#editTaskName");
var editTaskNameErrMsg = document.querySelector("#editTaskNameErrMsg");
var editAssignee = document.querySelector("#editAssignee");
var editTaskAssigneeErrMsg = document.querySelector("#editTaskAssigneeErrMsg");
var editTaskStatus = document.querySelector("#editTaskStatus");
var editTaskDescription = document.querySelector("#editTaskDescription");
var editTaskDescriptionErrMsg = document.querySelector("#editTaskDescriptionErrMsg");
var editDueDate = document.querySelector("#editDueDate");

btnEditUpdate.onclick = function () {
  // alert("inside edit function");
  if (editTaskName.value == "" || editTaskName.value.length < 8 || editTaskDescription.value == "" || editTaskDescription.value.length < 15 || editAssignee.value == "") {
    // alert("inside edit if");
    editTaskNameErrMsg.innerHTML = "Please enter a task name longer than 8 characters";
    editTaskNameErrMsg.style.color = "#ff0000";
    editTaskName.style.borderColor = "#ff0000";
    editTaskAssigneeErrMsg.innerHTML = "Please enter an assignee";
    editTaskAssigneeErrMsg.style.color = "#ff0000";
    editAssignee.style.borderColor = "#ff0000";
    editTaskDescriptionErrMsg.innerHTML = "Please enter a description longer than 15 characters";
    editTaskDescriptionErrMsg.style.color = "#ff0000";
    editTaskDescription.style.borderColor = "#ff0000";
  } else {
    editTaskNameErrMsg.innerHTML = "Looks good!";
    editTaskNameErrMsg.style.color = "#66CDAA";
    editTaskName.style.borderColor = "#66CDAA";
    editTaskAssigneeErrMsg.innerHTML = "Looks good!";
    editTaskAssigneeErrMsg.style.color = "#66CDAA";
    editAssignee.style.borderColor = "#66CDAA";
    editTaskDescriptionErrMsg.innerHTML = "Looks good!";
    editTaskDescriptionErrMsg.style.color = "#66CDAA";
    editTaskDescription.style.borderColor = "#66CDAA"; // return true;
    // alert("here edit task");
    //after edit validation

    var editTaskId = document.querySelector("#editTaskId"); // alert("after edit task");

    var u_id = taskList.updateTask(editTaskId.value, editTaskName.value, editTaskDescription.value, editAssignee.value, editTaskStatus.value, editDueDate.value);
    $("#modalEdit").modal("hide"); // hides the modal once data filled out
    // displayUpdatedTask(u_id);

    displayAllTasksFromStorage();
  }
}; // Edit Task Name on change validation


editTaskName.onchange = function () {
  if (editTaskName.value == "" || editTaskName.value.length < 8) {
    editTaskNameErrMsg.innerHTML = "Please enter a task name longer than 8 characters";
    editTaskNameErrMsg.style.color = "#ff0000";
    editTaskName.style.borderColor = "#ff0000";
  } else {
    editTaskNameErrMsg.innerHTML = "Looks good!";
    editTaskNameErrMsg.style.color = "#66CDAA";
    editTaskName.style.borderColor = "#66CDAA";
  }
}; // Edit Assignee on change validation


editAssignee.onchange = function () {
  if (editAssignee.value == "") {
    editTaskAssigneeErrMsg.innerHTML = "Please enter an assignee";
    editTaskAssigneeErrMsg.style.color = "#ff0000";
    editAssignee.style.borderColor = "#ff0000";
  } else {
    editTaskAssigneeErrMsg.innerHTML = "Looks good!";
    editTaskAssigneeErrMsg.style.color = "#66CDAA";
    editAssignee.style.borderColor = "#66CDAA";
  }
}; // Edit Task Description on change validation


editTaskDescription.onchange = function () {
  if (editTaskDescription.value == "" || editTaskDescription.value.length < 15) {
    editTaskDescriptionErrMsg.innerHTML = "Please enter a description longer than 15 characters";
    editTaskDescriptionErrMsg.style.color = "#ff0000";
    editTaskDescription.style.borderColor = "#ff0000";
  } else {
    editTaskDescriptionErrMsg.innerHTML = "Looks good!";
    editTaskDescriptionErrMsg.style.color = "#66CDAA";
    editTaskDescription.style.borderColor = "#66CDAA";
  }
}; // END: EDIT TASK //
// START: DELETE TASK //


function deleteTask() {
  // alert("delete");
  var taskElement = event.target.closest(".delete"); // Searches for the delete button most recently clicked
  // alert("del2");

  var delIdArr = taskElement.id.split("_"); // alert("del3");

  var retreiveId = delIdArr[1]; // alert(retreiveId);

  taskList.deleteTask(retreiveId); // alert("d");
  // Delete the list row from the ul
  // let task_row = `#taskRow_${retreiveId}`;
  // var tRow = document.querySelector(task_row);
  // tRow.parentNode.removeChild(tRow);

  displayAllTasksFromStorage();
} // END: DELETE TASK //
// START: ADD TASK VALIDATION //
// Set variables


var btnAddTaskSave = document.querySelector("#btnAddTaskSave");
var taskName = document.querySelector("#taskName");
var taskNameErrMsg = document.querySelector("#taskNameErrMsg");
var assignee = document.querySelector("#assignee");
var taskAssigneeErrMsg = document.querySelector("#taskAssigneeErrMsg");
var taskStatus = document.querySelector("#taskStatus");
var taskDescription = document.querySelector("#taskDescription");
var taskDescriptionErrMsg = document.querySelector("#taskDescriptionErrMsg");
var dueDate = document.querySelector("#dueDate"); // Set function (action) assigned to Add Task button
// alert("alert inside js");

btnAddTaskSave.onclick = function () {
  // alert("inside function");
  if (taskName.value == "" || taskName.value.length < 8 || taskDescription.value == "" || taskDescription.value.length < 15 || assignee.value == "") {
    // alert("inside if");
    taskNameErrMsg.innerHTML = "Please enter a task name longer than 8 characters";
    taskNameErrMsg.style.color = "#ff0000";
    taskName.style.borderColor = "#ff0000";
    taskAssigneeErrMsg.innerHTML = "Please enter an assignee";
    taskAssigneeErrMsg.style.color = "#ff0000";
    assignee.style.borderColor = "#ff0000";
    taskDescriptionErrMsg.innerHTML = "Please enter a description longer than 15 characters";
    taskDescriptionErrMsg.style.color = "#ff0000";
    taskDescription.style.borderColor = "#ff0000"; // return false;
  } else {
    taskNameErrMsg.innerHTML = "Looks good!";
    taskNameErrMsg.style.color = "#66CDAA";
    taskName.style.borderColor = "#66CDAA";
    taskAssigneeErrMsg.innerHTML = "Looks good!";
    taskAssigneeErrMsg.style.color = "#66CDAA";
    assignee.style.borderColor = "#66CDAA";
    taskDescriptionErrMsg.innerHTML = "Looks good!";
    taskDescriptionErrMsg.style.color = "#66CDAA";
    taskDescription.style.borderColor = "#66CDAA"; // return true;

    taskList.addTask(taskName.value, assignee.value, taskStatus.value, taskDescription.value, dueDate.value);
    $("#modalAdd").modal("hide"); // hides the modal once data filled out
    // addTaskToWebpage(); //called the display function (from function addTaskToWebpage() {)

    displayAllTasksFromStorage();
  }
}; // Once validation alerts users something is wrong, this changes feedback on a change of input
//Task Name on change validation


taskName.onchange = function () {
  if (taskName.value == "" || taskName.value.length < 8) {
    taskNameErrMsg.innerHTML = "Please enter a task name longer than 8 characters";
    taskNameErrMsg.style.color = "#ff0000";
    taskName.style.borderColor = "#ff0000";
  } else {
    taskNameErrMsg.innerHTML = "Looks good!";
    taskNameErrMsg.style.color = "#66CDAA";
    taskName.style.borderColor = "#66CDAA";
  }
}; //Assignee on change validation


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
}; //Task Description on change validation


taskDescription.onchange = function () {
  if (taskDescription.value == "" || taskDescription.value.length < 15) {
    taskDescriptionErrMsg.innerHTML = "Please enter a description longer than 15 characters";
    taskDescriptionErrMsg.style.color = "#ff0000";
    taskDescription.style.borderColor = "#ff0000";
  } else {
    taskDescriptionErrMsg.innerHTML = "Looks good!";
    taskDescriptionErrMsg.style.color = "#66CDAA";
    taskDescription.style.borderColor = "#66CDAA";
  }
}; // END: ADD TASK VALIDATION //
// START: CLEAR FIELDS //


var addTaskBug = document.querySelectorAll("button.addTaskBug"); // alert(addTaskBug);

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
  taskDescription.value = null;
  dueDate.value = null;
  taskNameErrMsg.innerHTML = "";
  taskAssigneeErrMsg.innerHTML = "";
  taskDescriptionErrMsg.innerHTML = "";
  taskName.style.borderColor = "#ced4da";
  assignee.style.borderColor = "#ced4da";
  taskDescription.style.borderColor = "#ced4da";
  taskStatus.value = selected;
} // END: CLEAR FIELDS //
// START: STORE LIST TITLE //
// declare variable


var listTitle = document.querySelector("#listTitle"); // declare variable for title entered by user
// let listTitleVal =
// JSON.parse(localStorage.getItem("listTitle")) ||
// document.querySelector("#listTitle").value;

document.querySelector("#listTitle").value = JSON.parse(localStorage.getItem("listTitle")); // alert(document.querySelector("#listTitle").value);
// Invoke function when value changed to either retrieve from local storage or add new

listTitle.onchange = function () {
  localStorage.setItem("listTitle", JSON.stringify(document.querySelector("#listTitle").value)); // localStorage.setItem("listTitle", JSON.stringify(listTitleVal));
  // alert(document.querySelector("#listTitle").value);
}; // END: STORE LIST TITLE //
// START: SHOW TODAY's DATE IN NAVBAR //


var dateElement = document.getElementById("date");
var options = {
  weekday: "long",
  month: "short",
  day: "numeric"
};
var today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options); // END: SHOW TODAY's DATE IN NAVBAR //
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59554" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","myscript.js"], null)
//# sourceMappingURL=/myscript.a18071fa.js.map