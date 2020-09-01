import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL= "http://173.249.39.9:3000/"
  
  constructor(public http:HttpClient,private router:Router) { }

  getTasks(){
    return this.http.get<any>(this.URL+'tasks');
  }

  createNote(note){
    return this.http.post<any>(this.URL+'new-note',note);
   }

  getPrivateTasks(){
    return this.http.get<any>(this.URL+'private-tasks');
  }

  deletePrivateTasks(id:string){
    return this.http.delete(this.URL+'private-tasks/delete/'+id);
  }
}
