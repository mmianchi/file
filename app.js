//Define vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// 
function loadEventListeners(){
  // Add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click', clearTasks)
}

// Add Task 
function addTask(e) {
  if(taskInput.value === ''){
    alert('Add a task');
  }

  // create li element
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  // create new link
  const link = document.createElement('a');
  link.className ='delete-item secondary-content';
  link.innerHTML ='<i class="fa fa-remove"></i>'
  li.appendChild(link);

  taskList.appendChild(li);
 // clear input
  taskInput.value = '';
  e.preventDefault();
}


// Remove Task
function removeTask(e){

  if (e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){
      e.target.parentElement.parentElement.remove(); 
    }
  }
}

// Clear Btn
function clearTasks(e){
  // //one way
  // taskList.innerHTML='';
  //faster way 
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}