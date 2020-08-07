
const listOfCards = document.querySelector("#listOfCards");
const addTaskBug = document.querySelector("#addTaskBug");

function addNewTaskCard(Task) {
  const template = `<li class="list-group-item" id="taskCard">${Task}
<span class="pull-right">          
<button job="edit" type="button" class="btn edit btn-sm" data-toggle="modal" data-target="#modalEdit"><i class="fa fa-pencil"></i>
</button>
<button job="delete" type="button" class="btn trash btn-sm" data-toggle="modal" data-target="#modalDelete"><i class="fa fa-trash"></i></button>
</button>
</span>  
</li>`;

  const position = "beforeend";
  listOfCards.insertAdjacentHTML(position, template);
}
alert(newtask);
addNewTaskCard(Task);

document.addEventListener("keyup", function(event){
if(event.keyCode == 13){
    const task = addTaskBug.value;
    if (task){
        addNewTaskCard(`${taskName}, ${assignee}, ${status}, ${description}, ${dueDate}`);
    }
    addTaskBug.value = "";
}
)};