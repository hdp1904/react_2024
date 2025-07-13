const API_URL = "http://localhost:3000/todos";

const todoView = new TodoView();


const todoController = new TodoController(todoModel, todoView);
