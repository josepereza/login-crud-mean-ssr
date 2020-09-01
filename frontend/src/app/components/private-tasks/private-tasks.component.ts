import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  tasks = []
  
  constructor(
    private tasksService:TasksService,
    private router:Router
    ) { }

  ngOnInit() {
    this.tasksService.getPrivateTasks()
    .subscribe(
      res => {
        console.log(res);
       this.tasks = res.task;
      },
      err => console.log(err)
    )
  }

  deleteNote(id:string){
    this.tasksService.deletePrivateTasks(id)
    .subscribe(
      res => {
        console.log(res);
       this.ngOnInit();
      },
      err => console.log(err)
    )
  }



}
