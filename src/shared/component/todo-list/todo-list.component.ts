import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from 'src/shared/module/interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit  {

  constructor() { }

  ngOnInit(): void {
  }
@Input() Tstd!: Istd[];

 @Output() deleteID: EventEmitter<string> = new EventEmitter<string>();
@Output() EmitEditObj: EventEmitter<Istd> = new EventEmitter<Istd>();


Ondelete(id : string) {
  // console.log("hii");
  
  this.deleteID.emit(id);
 }

OnEdit(obj:Istd){
  // console.log("hii");
  
this.EmitEditObj.emit(obj)
}

}
