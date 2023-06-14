import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title = "Task Manager"

  constructor() { }
  
  ngOnInit(): void {
      
  }

  addTask() {
     console.log("Add Task");
  }
}