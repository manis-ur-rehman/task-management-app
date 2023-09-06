import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AppLayoutComponent} from '../app-layout/app-layout.component'

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@ViewChild('myModal') myModal!: ElementRef;
@ViewChild('taskListComponent') taskListComponent!:AppLayoutComponent

constructor(){}

ngOnInit(): void {  
}

openModal(){
  this.myModal.nativeElement.style.display = 'block';
}

closeModal(){
  this.myModal.nativeElement.style.display = 'none'
}

onSubmit(data:any){
console.log("data: ", data.value)
}
}
