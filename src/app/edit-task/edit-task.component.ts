import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @ViewChild('modalComponent') modalComponent!:ModalComponent  
  @Input() taskStatus!:boolean; 
  @Input() editId!:number;
  
  ngOnInit(): void {
  }

openModal(){
  this.modalComponent.openModal(this.editId);
  }
}
