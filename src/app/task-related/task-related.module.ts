import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from '../app-layout/app-layout.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppLayoutComponent,
    TaskListComponent,
    AddTaskComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AppLayoutComponent]
})
export class TaskRelatedModule { }