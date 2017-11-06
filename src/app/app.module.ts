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
import { ReportesComponent } from './reportes/reportes.component';
import { DataEntryComponent } from './data-entry/data-entry.component';

/**
 * Routes are set here:
 */
const routes: Routes = [
    { path: '', redirectTo: 'reportes', pathMatch: 'full' },
    { path: 'reportes', component: ReportesComponent },    
    { path: 'archivar', component: DataEntryComponent },    
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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

