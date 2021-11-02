import _ from 'lodash';
import "./style.css";

const tasksArr = [
  {
    index: 0,
    describtion: "Wake up",
    completed: false,
  },
  {
    index: 1,
    describtion: "Go to shower",
    completed: false,
  },
  {
    index: 2,
    describtion: "Take breakfast",
    completed: false,
  },
  {
    index: 3,
    describtion: "start class",
    completed: false,
  },
];

// selectors

const todoInput = document.querySelector(".add");
const addTodoBtn = document.querySelector(".arrow");
const list = document.querySelector(".list");

// Methods/functions
const addTodo = (value) => {
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add('check');
  const para = document.createElement("p");
  para.classList.add("task");
  para.textContent = value;
  const trash = document.createElement("i");
  trash.classList.add("fas", "fa-trash-alt");
  listItem.appendChild(checkbox);
  listItem.appendChild(para);
  listItem.appendChild(trash);
  list.appendChild(listItem);
  
};

// map the todos from the arrays  

const mapTasks = (tasks)=>{
tasks.forEach(task=>{
  addTodo(task.describtion);
})
}

mapTasks(tasksArr)

