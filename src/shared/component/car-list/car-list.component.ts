import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icar } from 'src/shared/module/interface';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 


  @Input()CarArray!:Icar[];
  @Output()EditedObj : EventEmitter<Icar>= new EventEmitter<Icar>();
  @Output()EmitedDeleteID : EventEmitter <string> = new EventEmitter<string>();

 OnEdit(id:Icar){
  this.EditedObj.emit(id)
 }
 
OnDelete(id:string){
  this.EmitedDeleteID.emit(id)

}


}
