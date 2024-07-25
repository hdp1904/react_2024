class TodoView {
  constructor() {
    this.addTodoInput = document.getElementById("add-todo-input");
    this.addTodoBtn = document.querySelector(".add-todo-form__submit");
    this.addTodoForm = document.querySelector(".add-todo-form");
    this.todoList = document.querySelector(".todo-list");
  }

  renderTodoElement(todo) {
    const { id, task } = todo;
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.id = id;

    const todoTask = document.createElement("span");
    todoTask.classList.add("todo-item__task");

    todoTask.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todo-item__delete");
    deleteBtn.textContent = "Delete";

    todoItem.append(todoTask, deleteBtn);
    this.todoList.appendChild(todoItem);
  }

  removeTodoElement(todoId) {
    const todoItem = document.getElementById(todoId);
    todoItem.remove();
  }

  setRemainingCount(newCount) {
    const countElem = document.getElementById("remaining-todo-count");
    countElem.textContent = newCount;
  }
}
