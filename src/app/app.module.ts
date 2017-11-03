import {
    RouterModule,
    Routes
} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MenuComponent,
        SolicitudComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Routes are set here:
 */
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MenuComponent },
    //{ path: 'archivar', component: Data-entryComponent },
    //{ path: 'informes', component: InformesComponent }
    { path: 'solicitud', component: SolicitudComponent }
]