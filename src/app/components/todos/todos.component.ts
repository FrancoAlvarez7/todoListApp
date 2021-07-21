import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  ingresarTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        contenido: 'Prueba 1',
        completado: false
      },

      {
        contenido: 'Prueba 2',
        completado: true
      }

    ]

  }

  todoTerminado(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completado = !v.completado;

      return v;
    })
  }

  eliminarTodo(id :number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }

  agregarTodo() {
    this.todos.push({
      contenido: this.ingresarTodo,
      completado: false
    });

    this.ingresarTodo = "";
  }

}
