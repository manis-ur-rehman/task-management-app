import { Component, Output, EventEmitter } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.css']
})
export class FilterTaskComponent {
  @Output() filterStatusBind:EventEmitter<any> = new EventEmitter() 
constructor(public formBuilder:FormBuilder){}

filterForm = this.formBuilder.group({
  filterTask: [null],
});

FilterStatusHandling(e: any){
    this.filterStatusBind.emit(e);
}
onSubmit(){}
}
