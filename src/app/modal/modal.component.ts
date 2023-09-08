import { Component, OnInit, ViewChild, ElementRef, inject, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import {TaskListService} from '../task-list.service';
import {TaskListItem} from '../../../types';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges, OnInit, DoCheck{
taskListService: TaskListService = inject(TaskListService);
editId:number | undefined = 5;
@ViewChild('myModal') myModal!: ElementRef;

constructor(public formBuilder:FormBuilder){
  this.editId = 8
  console.log("constructor: ", this.editId);
}

taskItemForm!: FormGroup

ngOnInit() {
  this.taskItemForm = this.formBuilder.group({
    taskName: new FormControl<string>(''),
    taskPriority: new FormControl<string>(''),
    taskStatus: new FormControl<boolean | null>(null),
    taskDate: new FormControl<Date | ''>(''),
  })
}

ngOnChanges(){
  console.log("on changes called: ", this.editId)
}
ngDoCheck() {
  if(this.editId){
    this.taskItemForm.patchValue({
      taskName: 'aaaa',
      taskPriority: 'medium',
      taskStatus: true,
      taskDate: ''
    })
    // this.taskFormControl['taskName'].setValue('dddd')
  }
  console.log("ngDoCheck", this.editId);
}

openModal(id?:number){
  this.editId = id;
  this.myModal.nativeElement.style.display = 'block';
}
closeModal(){
  this.myModal.nativeElement.style.display = 'none'
}
get taskFormControl(){
  return this.taskItemForm.controls
}



onSubmit(){
  console.log("values: ", this.taskItemForm.value)
if(this.editId !=undefined) {
  this.taskListService.editTaskList(this.editId, this.taskItemForm.value);
}
else{
  this.taskListService.addTaskList(this.taskItemForm.value);
}
}
}
