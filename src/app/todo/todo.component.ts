import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../models/todo';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.form = new FormGroup(
      {
        titre: new FormControl('',Validators.required),
        done: new FormControl(false)
      }
    );

  }

  ngOnInit() {
    Storage.get({key:'todos'}).then(result => this.todos = JSON.parse(result.value) || []);
  }

  fait(todoIndex: number){
    this.todos[todoIndex].done= !this.todos[todoIndex].done;
    this.saveTodos();
  }

  addTodo(){
    if(this.form.value.titre){
      this.todos.push(this.form.value);
      this.saveTodos();
      this.form.reset();
    }
  }

  supprimer(todoIndex: number){
    this.todos.splice(todoIndex, 1);
    this.saveTodos();
  }

  private saveTodos(){
    Storage.set({key:'todos', value: JSON.stringify(this.todos)});
  }
}
