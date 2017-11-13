import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(public afu: AngularFireAuth, private router: Router) { }

  loginWithEmail(email, password) {
    this.afu.auth.signInWithEmailAndPassword(email, password)
    .then(function(user){
      console.log('User logged in: ' + user.email);
      this.router.navigate(['reportes'])
    })
    .catch(function(err){
      let errorCode = err.errorCode;
      let errorMessage = err.errorMessage;
      console.log(errorCode + errorMessage);
    });
  }

  logout(){
    this.afu.auth.signOut().then(function() {
        this.router.navigate['login'];
    });
  }

  isLoggedIn(): boolean {
    this.afu.authState.subscribe(auth => {
      if(auth == null) { 
        return false
      }
      else 
      {
        return true
      };
    })
    return false;
  }

}
