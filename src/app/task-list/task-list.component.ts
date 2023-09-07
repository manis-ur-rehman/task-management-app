import { Component, Input, inject } from '@angular/core';
import { TaskListItem } from 'types';
import {TaskListService} from '../task-list.service'

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent {
  @Input() taskList?: TaskListItem[]
  taskListService:TaskListService = inject(TaskListService);
  markAsDoneHandling(id: number){
this.taskListService.markDoneTask(id);
  }
}
