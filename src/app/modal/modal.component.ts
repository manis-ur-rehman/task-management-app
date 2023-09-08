import { Component, OnInit, ViewChild, ElementRef, inject} from '@angular/core';
import {TaskListService} from '../task-list.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
taskListService: TaskListService = inject(TaskListService);
editId:number | undefined;
@ViewChild('myModal') myModal!: ElementRef;

constructor(public formBuilder:FormBuilder){
}

taskItemForm!: FormGroup

ngOnInit() {
  this.taskItemForm = this.formBuilder.group({
    taskName: new FormControl<string>(''),
    taskPriority: new FormControl<string>(''),
    taskStatus: new FormControl<boolean | null>(null),
    taskDate: new FormControl<Date>(new Date()),
  })
}
openModal(id?:number){
  this.myModal.nativeElement.style.display = 'block';
  this.editId = id;
  if(this.editId !== undefined){
    let getItem = this.taskListService.getTaskByIndexing(this.editId);
    this.taskItemForm.patchValue({
      taskName: getItem?.taskName,
      taskPriority: getItem?.taskPriority,
      taskStatus: getItem?.taskStatus,
      taskDate: this.formatDate(getItem?.taskDate)
    })
  }
}
closeModal(){
  this.myModal.nativeElement.style.display = 'none'
}
get taskFormControl(){
  return this.taskItemForm.controls
}

private formatDate(date:any) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

onSubmit(){
if(this.editId !=undefined) {
  this.taskListService.updateTaskByIndexing(this.editId, this.taskItemForm.value);
}
else{
  this.taskListService.addTaskList(this.taskItemForm.value);
}
this.taskItemForm.reset()
}
}
