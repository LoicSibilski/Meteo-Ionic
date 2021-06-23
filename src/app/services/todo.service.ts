import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    { titre: 'Truc', done: true },
    { titre: 'Truc', done: false },
    { titre: 'Truc', done: false },
    { titre: 'Truc', done: true },
    { titre: 'Truc', done: false },
  ];

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(todo: Todo) {

  }

  changeDone(todo: Todo) {

  }
}
