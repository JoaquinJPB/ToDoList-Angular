import { Component, OnInit, } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {}

  getDataTodo(title: string, description: string, completed: boolean): void {
    this.sendDataTodo();
  }

  sendDataTodo(): void{
    
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
