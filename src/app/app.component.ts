import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private afa: AngularFireAuth) {
  }

  NgOnInit() {
    this.afa.auth.onAuthStateChanged(function(user) {
      if (user) {
        // signin
        console.log('User online: ' + user.email);
      }else {
        // logout
        console.log('No logged in user: ');
      }
    }, function(err) {});
   }
}