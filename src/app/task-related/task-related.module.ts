import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from '../app-layout/app-layout.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import {EditTaskComponent} from '../edit-task/edit-task.component';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTaskComponent } from '../filter-task/filter-task.component';
import { CapatilizeTextPipe } from '../capatilize-text.pipe';



@NgModule({
  declarations: [
    AppLayoutComponent,
    TaskListComponent,
    AddTaskComponent,
    ModalComponent,
    EditTaskComponent,
    FilterTaskComponent,
    CapatilizeTextPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AppLayoutComponent]
})
export class TaskRelatedModule { }