import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {
  taskList=[
    {
      taskName: "first",
      priority:"low",
      status: false,
      date: new Date(),
  },
  {
    taskName: "second",
    priority:"medium",
    status: true,
    date: new Date(),
  },
  {
    taskName: "third",
    priority:"high",
    status: false,
    date: new Date(),
  },
  ]
}
