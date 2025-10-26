// DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Load tasks on page load
window.onload = loadTasks;

// Add button click event
addBtn.addEventListener('click', addTask);

// Add new task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = createTaskElement(taskText);
  taskList.appendChild(li);

  saveTaskToLocalStorage(taskText);
  taskInput.value = "";
}

// Create <li> task element
function createTaskElement(taskText, isCompleted = false) {
  const li = document.createElement('li');
  li.textContent = taskText;

  if (isCompleted) li.classList.add('completed');

  // Click to mark complete
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateLocalStorage();
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.classList.add('delete-btn');
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
    updateLocalStorage();
  });

  li.appendChild(delBtn);
  return li;
}

// Local Storage helpers
function saveTaskToLocalStorage(taskText) {
  const tasks = getTasksFromLocalStorage();
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(task => {
    const li = createTaskElement(task.text, task.completed);
    taskList.appendChild(li);
  });
}

function updateLocalStorage() {
  const allTasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    allTasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(allTasks));
}
