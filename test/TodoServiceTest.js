import todoService from '../app/TodoService';

beforeEach(function () {
    todoService.clear();
});

describe('TodoService', function () {

    it('isDefined', function () {
        expect(todoService).toBeDefined();
    });

    describe('#addTodo()', function () {

        it('should be able to add a new todo', function () {
            var addedTodo = todoService.addTodo('My new Todo task');
            expect(addedTodo).toBeDefined();
            expect(addedTodo.id).toBeDefined();
            expect(addedTodo.timeStamp).toBeDefined();
            expect(addedTodo.done).toBeDefined();
            expect(addedTodo.done).toBe(false);
        });

        it('should return the newly added task', function () {
            todoService.addTodo('My super task');
            expect(todoService.todos.length).toBe(1);
        });

    });

    describe('#setDone()', function () {

        it('should be able to set a todo to done', function () {
            var addedTodo = todoService.addTodo('My new Todo task');
            todoService.setDone(addedTodo.id);

            expect(addedTodo.done).toBe(true);
            expect(todoService.todos[0].done).toBe(true);

        });

        it('should throw if todo is not found', function () {
            expect(function () {
                todoService.setDone('some-fantasy-id');
            }).toThrowError('No Todo item with id some-fantasy-id found!');

        });

    });

    describe('#getTasks()', function () {

        it('should return an empty list if no tasks defined', function () {
            expect(todoService.todos.length).toBe(0);
        });

        it('should return all added tasks', function () {
            todoService.addTodo('todo1');
            todoService.addTodo('todo2');

            expect(todoService.todos.length).toBe(2);
        });

    });

    describe('#clear()', function () {

        it('should return an empty list after clearing', function () {
            todoService.addTodo('todo1');
            todoService.clear();

            expect(todoService.todos.length).toBe(0);
        });
    });
});