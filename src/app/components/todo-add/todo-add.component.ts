
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  addTodo(title: string, description: string, completed: boolean): void {
    
  }

}
