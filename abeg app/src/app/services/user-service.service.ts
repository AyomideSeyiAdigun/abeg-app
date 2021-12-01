import { Injectable } from '@angular/core';
import { Router,Route, CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements CanLoad  {

  constructor(public router: Router) { }
 
 
 
 
 
  canLoad(route:Route):boolean{
    let path = route.path
    if(path=='admin'){
      alert('you are not authorized')
      return false
    }
    else {
      return true
    }
    
  }

  
}
