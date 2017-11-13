import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private isLoggin: boolean;
  private userEmail: string;

  constructor(public authService: AuthService) { 
      
  }

  ngOnInit() {
    this.authService.afu.authState.subscribe(auth => {
      if(auth == null) {
          this.isLoggin = false;
          this.userEmail = '';
      }else {
          this.isLoggin = true;
          this.userEmail = auth.email;
      }
   });
  }

  userLogout() {
    this.authService.logout();
  }

}
