import {Component, OnInit} from '@angular/core';
import {Todo} from '../../classes/todo/todo';
import {TodoService} from '../../services/todo/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  providers: [TodoService]
})
export class MainComponent {
  newTodo: Todo = new Todo();

  constructor(private _todoService: TodoService) {
  }

  addTodo() {
    this._todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this._todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this._todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this._todoService.getAllTodos();
  }
}
