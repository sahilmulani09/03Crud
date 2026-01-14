import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Icar } from 'src/shared/module/interface';
@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit, OnChanges {


@ViewChild('CarForm')CarForm ! : NgForm;
@Output()emitedCar : EventEmitter<Icar> = new EventEmitter<Icar>();
@Input()EditedObj!:Icar
@Output()EmitUpdatedList : EventEmitter<Icar>=new EventEmitter<Icar>();
  constructor() { }

  ngOnInit(): void {
  }

OnSubmit(){
  if(this.CarForm.valid){
    let car_obj : Icar={
      ...this.CarForm.value,
      id:Date.now().toString()
    }
    this.CarForm.reset()
    this.emitedCar.emit(car_obj)
  }
}
isInEditmode:Boolean=false

ngOnChanges(changes: SimpleChanges): void {
  if(!!changes['EditedObj']['currentValue']){
    this.isInEditmode=true
    this.CarForm.form.patchValue(changes['EditedObj']['currentValue'])
  }
}

OnUpdate(){
  // console.log("hijijij");
  
  if(this.CarForm.valid){
    let car_obj:Icar={
      ...this.CarForm.value,
      id:this.EditedObj.id
    }
    this.CarForm.reset()
    this.isInEditmode=false
    this.EmitUpdatedList.emit(car_obj)
  }
}
 


}
