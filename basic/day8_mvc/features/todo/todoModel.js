class TodoModel {
  #todos;
  constructor() {
    this.#todos = [];
  }

  setTodos(todos) {
    this.#todos = todos;
  }

  get length() {
    return this.#todos.length;
  }

  getTodos() {
    return [...this.#todos];
  }

  addTodo(newTodo) {
    this.#todos.push(newTodo);
  }

  removeTodo(id) {
    this.#todos = this.#todos.filter((todo) => todo.id !== id);
  }
}
