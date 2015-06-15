import todoService from './TodoService';

export default class TodoController {

    constructor() {
        this.descriptionInputElement = document.querySelector('#new-todo-description');
        this.todoListElement = document.querySelector('#todo-list-panel');
    }

    onAdd() {
        const description = this.descriptionInputElement.value;

        if (description) {
            todoService.addTodo(description);
            this.descriptionInputElement.value = '';
            this.repaint();
        }
    }

    onKeyUp(e) {
        const isEnterKey = e.keyCode === 13;

        if (isEnterKey) {
            this.onAdd();
        }
    }

    repaint() {
        this.todoListElement.innerHTML = '';
        todoService.todos.forEach(todo => this.render(todo));
    }

    render(todo) {
        const liElement = document.createElement('li');

        liElement.classList.add('list-group-item');

        if(todo.done) {
            liElement.classList.add('done');
        }

        liElement.innerHTML = `
            ${todo.description}
            <button class="btn btn-xs pull-right" onclick="todo.onSetDone(${todo.id})">
                <i class="glyphicon glyphicon-ok"></i>
            </button>`;

        this.todoListElement.appendChild(liElement);
    }

    onSetDone(todoId) {
        todoService.setDone(todoId);
        this.repaint();
    }

    onClear() {
        todoService.clear();
        this.repaint();
    }
}
