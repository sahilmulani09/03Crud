import { Component,  OnInit } from '@angular/core';
import { CARData } from 'src/shared/const/data';
import { Icar } from 'src/shared/module/interface';

@Component({
  selector: 'app-car-dashh',
  templateUrl: './car-dashh.component.html',
  styleUrls: ['./car-dashh.component.scss']
})
export class CarDashhComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


 CarArr:Array<Icar>=CARData


 AddCar(add:Icar){
  this.CarArr.push(add)
 }

DeleteId(id:string){
const index = this.CarArr.findIndex(s => s.id === id);
   
    this.CarArr.splice(index, 1);
}


 EDITEDstore ! : Icar

 editedobj(car:Icar){
  this.EDITEDstore=car
 }
  
Updatedobj(A:Icar){
  let getindex = this.CarArr.findIndex(B => B.id === A.id)
  this.CarArr[getindex] = A
}

 
 

}
