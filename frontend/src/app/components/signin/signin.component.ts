import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:any = {}

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    public authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  signin(){
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('token',res.token);
            this.router.navigate(['private']);
          }
         
        },
        err => console.log(err)
      )
  }


}
