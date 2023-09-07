import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import {TaskListService} from '../task-list.service';
import {TaskListItem} from '../../../types';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
taskListService: TaskListService = inject(TaskListService);
editId:number | undefined = undefined;
@ViewChild('myModal') myModal!: ElementRef;
constructor(){
}
ngOnInit(): void {
}

openModal(id?:number){
  this.editId = id;
  this.myModal.nativeElement.style.display = 'block';
}

closeModal(){
  this.myModal.nativeElement.style.display = 'none'
  // this.editId = undefined
}

onSubmit(data:TaskListItem){
let item = {
  taskName: data.taskName,
  taskPriority:data.taskPriority,
  taskStatus: data.taskStatus,
  taskDate: data.taskDate,
}
if(this.editId !=undefined) {
  console.log("id: ", this.editId);
  this.taskListService.editTaskList(this.editId, item);
}
else{
  this.taskListService.addTaskList(item);
}
}
}
