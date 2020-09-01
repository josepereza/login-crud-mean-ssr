# login-crud-mean

* Para Angular Universal una solucion es cambiar todos los localStorage con :
```
getToken(){
      if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
     }
     
  ```
