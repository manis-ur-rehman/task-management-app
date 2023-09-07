import { Component, inject } from '@angular/core';
import {TaskListService} from '../task-list.service';
import {TaskListItem} from '../../../types'

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {
  taskList:TaskListItem[] = []
  taskListService: TaskListService = inject(TaskListService)
  constructor(){
    this.taskList = this.taskListService.getAllTaskListing();
  }
}
