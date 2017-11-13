import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthService} from './providers/auth.service';
import { Router } from '@angular/router';
import { transition } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggin: boolean;
  private userDisplayName: string;
  private userEmail: string;
  constructor(public authService: AuthService, private router: Router) {
  }

  NgOnInit() {
    this.authService.afu.authState.subscribe(auth=>{
      if(auth == null)
      {
          this.isLoggin = false;
          this.userDisplayName = '';
          this.userEmail = '';
          this.router.navigate['login'];
      }else{
        this.isLoggin = true;
        this.userDisplayName = auth.displayName;
        this.userEmail = auth.email;
        console.log('Logged in');
        console.log(auth);
        this.router.navigate['reportes'];
      }
  })
  }
}