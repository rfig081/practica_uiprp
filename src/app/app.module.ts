// Libraries Imports
import {
    RouterModule,
    Routes,
    RouterLinkActive
} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components Imports
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ReportesComponent } from './reportes/reportes.component';
import { DataEntryComponent } from './data-entry/data-entry.component';


// Firebase Stuff
import { AngularFireModule  } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireAuth} from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: 'AIzaSyB01Z98DWnc1iM0rlnYOOlmx-hZie3VTK4',
  authDomain: 'practice-97ad0.firebaseapp.com',
  databaseURL: 'https://practice-97ad0.firebaseio.com',
  projectId: 'practice-97ad0',
  storageBucket: 'practice-97ad0.appspot.com',
  messagingSenderId: '306464265919'
};

// Custom Service
import {AuthService} from './providers/auth.service';
import { LoginActivateGuard } from './providers/login-activate.guard';

/**
 * Routes are set here:
 */
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'reportes', component: ReportesComponent, canActivate: [LoginActivateGuard] },    
    { path: 'archivar', component: DataEntryComponent, canActivate: [LoginActivateGuard]},    
    { path: 'solicitud', component: SolicitudComponent }
]



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MenuComponent,
        SolicitudComponent,
        DataEntryComponent,
        ReportesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
    ],
    providers: [AngularFireAuth, AuthService, LoginActivateGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }

