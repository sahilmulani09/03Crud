import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imob } from 'src/shared/module/interface';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss']
})
export class MobileListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

@Input() MobileArray ! : Imob[];
@Output() deleteID: EventEmitter<string> = new EventEmitter<string>();
@Output() EmitedObj: EventEmitter<Imob> = new EventEmitter<Imob>();


OnRemove(id:string){
  this.deleteID.emit(id)
}

OnEdit(mob:Imob){
this.EmitedObj.emit(mob)
}




}
