import { Component, OnInit } from '@angular/core';
import { mobiles } from 'src/shared/const/data';
import { Imob } from 'src/shared/module/interface';

@Component({
  selector: 'app-mobile-dashh',
  templateUrl: './mobile-dashh.component.html',
  styleUrls: ['./mobile-dashh.component.scss']
})
export class MobileDashhComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


MobileArr:Array<Imob>=mobiles


Addmob(add:Imob){
  this.MobileArr.push(add)

}
Deletetodo(id: String) {
  const index = this.MobileArr.findIndex(s => s.id === id);
   
    this.MobileArr.splice(index, 1);
  }

editedTodo!:Imob

Editmob(mob:Imob){
  this.editedTodo=mob
}


updatedTod(todo:Imob){
  
    let getindex = this.MobileArr.findIndex(t => t.id === todo.id)
    
    this.MobileArr[getindex]=todo
  

}



}
