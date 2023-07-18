// Sample data
let users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ];
  
  let tasks = [];
  
  // Function to render the user list
  function renderUserList() {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';
  
    users.forEach((user) => {
      const userElement = document.createElement('div');
      userElement.innerText = user.name;
      userListElement.appendChild(userElement);
    });
  }
  
  // Function to render the task list
  function renderTaskList() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
  
    tasks.forEach((task) => {
      const taskElement = document.createElement('div');
      taskElement.innerText = task.assignee + ': ' + task.description;
      taskListElement.appendChild(taskElement);
    });
  }
  
  // Function to assign a task to a user
  function assignTask() {
    const assigneeInput = document.getElementById('assigneeInput');
    const taskInput = document.getElementById('taskInput');
  
    const assignee = assigneeInput.value;
    const task = taskInput.value;
  
    if (assignee && task) {
      tasks.push({ assignee, description: task });
  
      // Clear input fields
      assigneeInput.value = '';
      taskInput.value = '';
  
      // Render the updated task list
      renderTaskList();
    }
  }
  
  // Initialize the project management tool
  function init() {
    renderUserList();
    renderTaskList();
  
    const assignTaskButton = document.getElementById('assignTaskButton');
    assignTaskButton.addEventListener('click', assignTask);
  }
  
  // Call the initialization function
  init();
  