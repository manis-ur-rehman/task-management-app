import { Component, ViewChild, OnInit } from '@angular/core';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  constructor(){}
  @ViewChild('modalComponent') modalComponent!:ModalComponent
ngOnInit(): void {
  
}

openModal(id?: number){
this.modalComponent.openModal(id)
}
}
