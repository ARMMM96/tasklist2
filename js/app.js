// Elements
const taskInput = document.querySelector('.input');
const button = document.querySelector('.add');
const taskList = document.querySelector('.taskList');
let task = document.querySelectorAll('.task');

loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  button.addEventListener('click', addTask);
  task.forEach(task => {
    task.addEventListener('click', removeTask);
    task.addEventListener('click', checkTask);
  });
}

// Add Task
function addTask(e) {
  e.preventDefault();

  if (taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');

  // Add class
  li.className = 'task';

  // Create new link element
  const link = document.createElement('a');

  // Create text node and append to a
  link.appendChild(document.createTextNode(taskInput.value));

  //  Append a to li
  li.appendChild(link);

  // Add icon html
  link.innerHTML += `             
         <i class="fas fa-trash"></i>
         <i class="fas fa-check"></i>
                               `;

  // Append the link to li
  li.appendChild(link);
  li.addEventListener('click', removeTask);
  li.addEventListener('click', checkTask);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
}

// Remove Task
function removeTask(e) {
  // console.log(e.target);
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}

function checkTask(e) {
  // Checked task
  if (e.target.classList.contains('fa-check')) {
    e.target.parentElement.parentElement.classList.toggle('background');
    if (e.target.classList.contains('fa-check')) {
      e.target.classList.remove('fa-check');
      e.target.classList.add('fa-undo');
    }
  }
  // unChecked task
  else if (e.target.classList.contains('fa-undo')) {
    e.target.parentElement.parentElement.classList.toggle('background');
    e.target.classList.remove('fa-undo');
    e.target.classList.add('fa-check');
  }
  e.preventDefault();
}
