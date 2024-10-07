document.addEventListener("DOMContentLoaded", () => {

  let taskForm = document.getElementById('main-content');
  let taskList = document.getElementById('tasks');
  let taskInput = document.getElementById('new-task-description');
  let priorityInput = document.getElementById('task-priority');
  let dueDateInput = document.getElementById('task_due_date');
  let sortSelect = document.getElementById('sort_tasks');
  let durationInput = document.getElementById('task_duration');
  let userInput = document.getElementById('task_user');
      
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
      
    let taskValue = taskInput.value;
    let priorityValue = priorityInput.value;
    let durationValue = durationInput.value;
    let dueDateValue = dueDateInput.value;
    let userValue = userInput.value;
      
    // if (taskValue === '') return;
      
    let li = document.createElement('li');
    li.textContent = `${taskValue} | User: ${userValue} | Duration: ${durationValue} | Due: ${dueDateValue}`;
          
          
    if (priorityValue === 'High') {
      li.style.color = 'red';
    } else if (priorityValue === 'Medium') {
      li.style.color = 'yellow';
    } else if (priorityValue === 'Low'){
      li.style.color = 'green';
    }
      
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit Task';
    li.appendChild(editButton);
      
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    li.appendChild(deleteButton);

    
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(li);
    });
      
          
    editButton.addEventListener('click', function() {
      durationInput.value = durationValue;
      taskInput.value = taskValue;
      userInput.value = userValue;
      priorityInput.value = priorityValue;
      dueDateInput.value = dueDateValue;
      
      taskList.removeChild(li);
      taskInput.focus(); 
    });
      
    taskList.appendChild(li);          
    durationInput.value = '';
    taskInput.value = '';
    dueDateInput.value = '';
    userInput.value = '';
      
  });

      
  sortSelect.addEventListener('change', function() {
    let tasks = Array.from(taskList.students);
    tasks.sort(function(a, b, c) {
      let firstPriority = getPriorityValue(a.style.color);
      let secondPriority = getPriorityValue(b.style.color);
      let thirdPriority = getPriorityValue(c.style.color);
      if (sortSelect.value === 'descending') {
        return firstPriority - secondPriority;
      } 
      else {
        return secondPriority - thirdPriority;
      }
    });
      
    taskList.innerHTML = '';
    tasks.forEach(function(task) {
      taskList.appendChild(task);
    });
  });
      
  function getPriorityValue(color) {
    if (color === 'red') {
      return 'H' ; 
    }
    else if (color === 'yellow') {
      return 'M' ; 
    } 
    else if (color === 'green'){
      return 'L' ; 
    }
  }
});