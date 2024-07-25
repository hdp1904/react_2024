class TodoController {
  #model;
  #view;
  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.initApp();
  }

  initApp() {
    this.setUpEvents();
    this.fetchTodos();
  }

  setUpEvents() {
    this.setUpDeleteEvent();
    this.setUpAddEvent();
  }

  fetchTodos() {
    todoAPI.fetchTodosAPI().then((todos) => {
      this.#model.setTodos(todos);
      this.#view.setRemainingCount(this.#model.length);
      todos.forEach((todo) => {
        this.#view.renderTodoElement(todo);
      });
    });
  }

  setUpAddEvent() {
    this.#view.addTodoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newTodo = {
        task: this.#view.addTodoInput.value,
      };

      todoAPI.postTodoAPI(newTodo).then((_newTodo) => {
        this.#model.addTodo(_newTodo);
        this.#view.setRemainingCount(this.#model.length);
        this.#view.renderTodoElement(_newTodo);
      });
    });
  }

  setUpDeleteEvent() {
    this.#view.todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("todo-item__delete")) {
        const todoId = e.target.parentElement.getAttribute("id");

        todoAPI.deleteTodoAPI(todoId).then(() => {
          this.#model.removeTodo(todoId);
          this.#view.setRemainingCount(this.#model.length);
          this.#view.removeTodoElement(todoId);
        });
      }
    });
  }
}
