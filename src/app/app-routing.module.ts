import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodosComponent } from './components/todos/todos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent},
  { path: 'details/:id', component: TodoDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo-add', component: TodoAddComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
