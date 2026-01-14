import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imob } from 'src/shared/module/interface';

@Component({
  selector: 'app-mobile-form',
  templateUrl: './mobile-form.component.html',
  styleUrls: ['./mobile-form.component.scss']
})
export class MobileFormComponent implements OnInit , OnChanges {

  constructor() { }

@ViewChild('MobileForm') MobileForm! :NgForm
@Output()EmitMob : EventEmitter<Imob> =new EventEmitter<Imob>();
@Output()EmitMobUpdate: EventEmitter<Imob> = new EventEmitter<Imob>();
@Input()geteditObj!: Imob


  ngOnInit(): void {
  }

  isinEditmode:boolean=false

ngOnChanges(changes: SimpleChanges): void {
  if(!!changes['geteditObj']['currentValue']){
    this.isinEditmode=true
    this.MobileForm.form.patchValue(changes['geteditObj']['currentValue'])
  }
}




OnAdd(){
 if(this.MobileForm.valid){
  let Todo_obj : Imob={
    ...this.MobileForm.value,
    id:Date.now().toString()}
    this.MobileForm.reset()
    this.EmitMob.emit(Todo_obj)
  }

}

OnUpdate(){

if(this.MobileForm.valid){
  let mob_obj:Imob={
    ...this.MobileForm.value,
    id:this.geteditObj.id

  }
  console.log(mob_obj);
  
this.MobileForm.reset()
this.isinEditmode=false
this.EmitMobUpdate.emit(mob_obj)

}

}


}


