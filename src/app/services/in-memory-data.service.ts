import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = 
    [
      { id: 1, title: 'Práctica: Enrutamiento y Navegación', description: "Crea una SPA en Angular que gestione una TO-DO list (CRUD).", completed: false },
      { id: 2, title: 'Glosario TSDSI', description: "Glosario del tema: Sistema de información", completed: true },
      { id: 3, title: 'TFT-01 & TFT-02', description: "Entrega de los documentos referentes al TFG", completed: true },
      { id: 4, title: 'Práctica 4: Correo', description: "Práctica de correo correspondiente a la práctica 4 de SSR", completed: false },
      { id: 5, title: 'Práctica: Ingeniería inversa', description: "Crea la documentación de la aplicación que encontrarás en la carpeta Ingeniería Inversa y utiliza dicha aplicación para desarrollar una nueva aplicación que gestione la plantilla de jugadores de un equipo deportivo.", completed: false },
      { id: 5, title: 'Entrega Sprint 1', description: "Entrega del Sprint 1 de la asignatura MDA", completed: false }
    ];
    return {todos};
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}