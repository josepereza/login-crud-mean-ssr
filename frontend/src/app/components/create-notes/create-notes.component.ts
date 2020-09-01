import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service"
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})

export class CreateNotesComponent implements OnInit {

  note:any = { }

  constructor(
    private taskservice:TasksService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  createNote(){
    this.taskservice.createNote(this.note)
    .subscribe(
      res => {
        console.log(res);
       this.note = res;
       this.router.navigate(['private']);
      },
      err => console.log(err)
    )
  }

}

