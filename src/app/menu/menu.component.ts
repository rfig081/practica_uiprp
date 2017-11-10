import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private afa: AngularFireAuth) { }

  ngOnInit() {
  }

  userLogout() {
    this.afa.auth.signOut().then(function(){
      console.log('Logout Complete');
    }).catch(function(err){
      console.log(err);
    });
  }

}
