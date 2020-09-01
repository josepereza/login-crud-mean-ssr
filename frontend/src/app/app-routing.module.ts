import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components 

import {TasksComponent} from "./components/tasks/tasks.component"
import {PrivateTasksComponent} from "./components/private-tasks/private-tasks.component"
import {SignupComponent} from "./components/signup/signup.component"
import {SigninComponent} from "./components/signin/signin.component"
import {CreateNotesComponent} from "./components/create-notes/create-notes.component"

import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tasks',
    pathMatch: 'full'
  },
  {
    path:'tasks',
    component: TasksComponent
  },
  {
  path:'private',
  component: PrivateTasksComponent,
  canActivate: [AuthGuard]
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'create-notes',
    component: CreateNotesComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
