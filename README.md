# login-crud-mean

* https://willtaylor.blog/angular-universal-gotchas/
* https://medium.com/@MarkPieszak/angular-universal-server-side-rendering-deep-dive-dc442a6be7b7

* Para Angular Universal una solucion es cambiar todos los localStorage con :


```
import { DOCUMENT } from '@angular/common';
import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({ 
    ... 
})
export class MyComponent {

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: any,
        windowRefService: WindowRefService,
    ) {}

    ngOnInit() {
        this.scrollToTop();
    }

    scrollToTop() {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem('token');  
        }
    }
}
```
o  probar con :
```
getToken(){
      if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
     }
     
  ```
