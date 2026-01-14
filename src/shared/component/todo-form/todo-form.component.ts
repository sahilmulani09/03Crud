import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/shared/module/interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnChanges {

  @ViewChild('todoForm') todoForm!: NgForm;

  @Input() getEditTodod!: Istd;

  @Output() sendstudent: EventEmitter<Istd> = new EventEmitter<Istd>();
  @Output() emitUpdate: EventEmitter<Istd> = new EventEmitter<Istd>();

  isEditMode :boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['getEditTodod']['currentValue']) {
      this.isEditMode = true;

      this.todoForm.form.patchValue(changes['getEditTodod']['currentValue'])

     
    }
  }

 onSubmit() {

if(this.todoForm.valid){
  let todo_obj : Istd={
    ...this.todoForm.value,
    id:Date.now().toString()
  }
  this.todoForm.reset()
  this.sendstudent.emit(todo_obj)
}

 }



OnUpdate(){
if(this.todoForm.valid){
  let updatd_Obj : Istd={
    ...this.todoForm.value,
    id:this.getEditTodod.id
  }
  this.todoForm.reset()
  this.isEditMode=false
  this.emitUpdate.emit(updatd_Obj)
}
}
}
