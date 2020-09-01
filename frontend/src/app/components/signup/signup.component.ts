import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:any = {
    email: '',
    password: ''
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: any,
    private authService: AuthService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  Signup(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res)
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token',res.token)
          this.router.navigate(['/private'])
        }
      
      },
      err => console.log(err)
    )
  }

}
