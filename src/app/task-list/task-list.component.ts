import { Component, Input, inject, Output, EventEmitter } from '@angular/core';
import { TaskListItem } from 'types';
import {TaskListService} from '../task-list.service'

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent {
  taskList:TaskListItem[] = []
  taskListService: TaskListService = inject(TaskListService)
  constructor(){
    this.taskList = this.taskListService.getAllTaskListing();
  }
  markAsDoneHandling(id: number){
this.taskListService.markDoneTask(id);
  }
  onChange(event: any){
    if(event.target.value !== "null"){
      let convertIntoBoolean = JSON.parse(event.target.value);
      this.taskList = this.taskListService.filterTask(convertIntoBoolean)
    }
    else{
    this.taskList = this.taskListService.getAllTaskListing();
    }
  }
}
