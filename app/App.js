import TodoController from 'TodoController';

export class App {
    constructor(window) {
        window.todo = new TodoController();
    }
}