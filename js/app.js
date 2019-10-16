// Elements
const input = document.querySelector('.input');
const button = document.querySelector('.add');
const taskList = document.querySelector('.taskList');
let task = document.querySelector('.task');

loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  button.addEventListener('click', addTask);
  task.addEventListener('click', removeTask);
}

function addTask(e) {
  e.preventDefault();

  taskList.innerHTML += `
    <li class="task">
        ${input.value}
        <i class="fas fa-trash"></i>
        <i class="fas fa-check"></i>
    </li>
    `;

  // Clear input
  input.value = '';
}

function removeTask(e) {
  console.log(e.target.parentElement.parentElement);
  if (e.target.parentElement.classList.contains('task')) {
    e.target.parentElement.remove();
  }
  e.preventDefault();
}
