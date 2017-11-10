import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show: boolean;
  email: string;
  password: string;

  constructor(private afa: AngularFireAuth) {
   }

  ngOnInit() {
    this.show = true;

  }

  userLogin() {
    this.afa.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(function(user){
      console.log('User logged in: ' + user.email);
      this.email = '';
      this.password = '';
    })
    .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
    });
  }



}
