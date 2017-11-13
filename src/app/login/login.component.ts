import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthService} from '../providers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show: boolean;
  email: string;
  password: string;

  constructor(public as: AuthService, private router: Router) {
   }

  ngOnInit() {
    this.show = true;

  }

  userLogin() {
    this.as.loginWithEmail(this.email, this.password);
  }



}
