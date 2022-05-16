// Task Class: Represents a Task
class Task {
    constructor(taskTodo, time, note) {
      this.taskTodo = taskTodo;
      this.time = time;
      this.note = note;
    }
  }
  
  // UI Class: Handle UI Tasks
  class UI {
    static displayTasks() {
      const tasks = Store.getTasks();
  
      tasks.forEach((task) => UI.addTasksToList(task));
    }
  
    static addTasksToList(task) {
      const list = document.querySelector('#task-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${task.taskTodo}</td>
        <td>${task.time}</td>
        <td>${task.note}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteTask(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#todo-form');
      container.insertBefore(div, form);
  
      // Vanish in 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.querySelector('#taskTodo').value = '';
      document.querySelector('#time').value = '';
      document.querySelector('#note').value = '';
    }
  }
  
  // Store Class: Handles Storage
  class Store {
    static getTasks() {
      let tasks;
      if(localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }
  
      return tasks;
    }
  
    static addTask(task) {
      const tasks = Store.getTasks();
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    static removeTask(note) {
      const tasks = Store.getTasks();
  
      tasks.forEach((task, index) => {
        if(task.note === note) {
          tasks.splice(index, 1);
        }
      });
  
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  
  // Event: Display Tasks
  document.addEventListener('DOMContentLoaded', UI.displayTasks);
  
  // Event: Add a Task
  document.querySelector('#todo-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
  
    // Get form values
    const taskTodo = document.querySelector('#taskTodo').value;
    const time = document.querySelector('#time').value;
    const note = document.querySelector('#note').value;
  
    // Validate
    if(taskTodo === '' || time === '' || note === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
      // Instatiate task
      const task = new Task(taskTodo, time, note);
  
      // Add Task to UI
      UI.addTasksToList(task);
  
      // Add task to store
      Store.addTask(task);
  
      // Show success message
      UI.showAlert('Task Added', 'success');
  
      // Clear fields
      UI.clearFields();
    }
  });
  
  // Event: Remove a Task
  document.querySelector('#task-list').addEventListener('click', (e) => {
    // Remove task from UI
    UI.deleteTask(e.target);
  
    // Remove task from store
    Store.removeTask(e.target.parentElement.previousElementSibling.textContent);
  
    // Show success message
    UI.showAlert('Task Removed', 'success');
  });