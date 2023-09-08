import { Injectable } from '@angular/core';
import { TaskListItem, TaskPriority } from 'types';

@Injectable({
  providedIn: 'root'
})

export class TaskListService {

  taskList=[
    {
      taskName: "first",
      taskPriority: TaskPriority.LOW,
      taskStatus: false,
      taskDate: new Date(),
  },
  {
    taskName: "second",
    taskPriority:TaskPriority.MEDIUM,
    taskStatus: true,
    taskDate: new Date(),
  },
  {
    taskName: "third",
    taskPriority:TaskPriority.HIGH,
    taskStatus: false,
    taskDate: new Date(),
  },
  ]

  constructor() {
   }

getAllTaskListing():TaskListItem[]{
  return this.taskList
}
addTaskList(item: TaskListItem){
this.taskList.push(item);
}
editTaskList(id: number, editItem: TaskListItem){
  this.taskList.forEach((_, index)=>{
    if(id === index){
      this.taskList[id] = editItem
    }
  })
}
markDoneTask(id:number){
  this.taskList.forEach((item, index)=>{
    if(id === index){
      this.taskList[id] = {...item, taskStatus: true}
    }
  })
}
filterTask(filterTaskStatus:boolean){
  return this.taskList.filter((item)=>
    item.taskStatus === filterTaskStatus
  )
}
}

