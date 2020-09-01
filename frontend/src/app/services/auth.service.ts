import { DOCUMENT } from '@angular/common';
import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://173.249.39.9:3000/"

  constructor(
    @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: any,
    public http:HttpClient,
    private router:Router
    ) { }

    signUp(user){
     return this.http.post<any>(this.URL+'signup',user);
    }

    signIn(user){
      return this.http.post<any>(this.URL+'signin',user);
    }

    loggedIn(){
      if (isPlatformBrowser(this.platformId)) {
        return !!localStorage.getItem('token');
      }
    }
      

    getToken(){
      if (isPlatformBrowser(this.platformId)) {
        return localStorage.getItem('token');      }
      
    
    }

    logout(){
      if (isPlatformBrowser(this.platformId)) {
        localStorage.removeItem('token');
        this.router.navigate(['signin'])
      }
    
    }

}
