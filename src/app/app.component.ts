import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  todoitem:string='';
  todolist:Array<string>=[];
  addTodo()
  {
    this.todolist.push(this.todoitem);
    console.log(this.todolist)
    this.todoitem='';
  }
  removeTodo(index:number)
  {
    this.todolist.splice(index,1)
  }
     }
   
