// DOM event for showing task string(s) provided by the user

document.addEventListener("DOMContentLoaded", () => {

  let taskForm = document.getElementById('main-content');
  let taskList = document.getElementById('tasks');
  let taskInput = document.getElementById('new-task-description');
  let priorityInput = document.getElementById('task-priority');
  let dueDateInput = document.getElementById('task_due_date');
  let sortSelect = document.getElementById('sort_tasks');
  let durationInput = document.getElementById('task_duration');
  let userInput = document.getElementById('task_user');

  // prevention of page reloading after the submit button is clicked
      
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //form values
      
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
    
   // edit button

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit Task';
    li.appendChild(editButton);

    // delete task

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    li.appendChild(deleteButton);

    
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(li);
    });
      
    // edit task
          
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

   
  //sorting functionality according to priority value

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

      // code for priority value

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