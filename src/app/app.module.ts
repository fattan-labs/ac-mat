import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatTableModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import {NotFoundComponent} from './sections/not-found/not-found.component';
import { MonitorComponent } from './sections/monitor/monitor.component';
import { EmployeesComponent } from './sections/employees/employees.component';
import { DepartmentsComponent } from './sections/departments/departments.component';
import { DevicesComponent } from './sections/devices/devices.component';
import { LogComponent } from './sections/log/log.component';
import { SettingsComponent } from './sections/settings/settings.component';
import { HelpComponent } from './sections/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NotFoundComponent,
    DashboardComponent,
    MonitorComponent,
    EmployeesComponent,
    DepartmentsComponent,
    DevicesComponent,
    LogComponent,
    SettingsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatSidenavModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
