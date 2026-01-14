import { Component, OnInit } from '@angular/core';
import { students } from 'src/shared/const/data';
import { Istd } from 'src/shared/module/interface';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
s: any;

  constructor() { }

  ngOnInit(): void {
  }

StdArr:Array<Istd>=students

Addstudent(std : Istd){
  this.StdArr.push(std)
}

Ondelete(id: any) {
  const index = this.StdArr.findIndex(s => s.id === id);
   
    this.StdArr.splice(index, 1);
  }

  edittodo!:Istd
  Editedobj(Todo:Istd){
    this.edittodo=Todo
    console.log(Todo)
    
  } 


  getUpdateTodo(A:Istd){
    let getindex = this.StdArr.findIndex(todo => todo.id === A.id)
    this.StdArr[getindex]=A
  }
}
