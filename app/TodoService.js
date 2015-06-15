import statusComparator from './statusComparator';

class TodoService {

    constructor() {
        this.idCounter = 0;
        this._todos = [];
    }

    getAndIncrementIdCounter() {
        this.idCounter = this.idCounter + 1;
        return this.idCounter;
    }

    addTodo(description) {
        const todoObject = {
            timeStamp: new Date(),
            description: description,
            id: this.getAndIncrementIdCounter(),
            done: false
        };
        this._todos.push(todoObject);
        return todoObject;
    }

    setDone(id) {
        const matchingTodos = this._todos.filter(function(todo){
            return todo.id === id;
        });

        if (matchingTodos.length === 1) {
            matchingTodos[0].done = true;
            this._todos.sort(statusComparator);
        } else {
            throw new Error(`No Todo item with id ${id} found!`);
        }
    }

    get todos() {
        return this._todos;
    }

    clear() {
        this.idCounter = 0;
        this._todos = [];
    }
}

export default new TodoService();
