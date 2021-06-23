import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../models/todo';

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

  ngOnInit() {}

  fait(todoIndex: number){
    this.todos[todoIndex].done= !this.todos[todoIndex].done;
  }

  addTodo(){
    console.log(this.form.value);
    this.todos.push(this.form.value);
    this.form.reset();
  }

  supprimer(todoIndex: number){
    this.todos.splice(todoIndex,1);
  }

}
