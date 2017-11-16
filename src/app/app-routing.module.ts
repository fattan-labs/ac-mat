import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './sections/not-found/not-found.component';
import {DashboardComponent} from './sections/dashboard/dashboard.component';
import {MonitorComponent} from './sections/monitor/monitor.component';
import {SettingsComponent} from './sections/settings/settings.component';
import {DepartmentsComponent} from './sections/departments/departments.component';
import {DevicesComponent} from './sections/devices/devices.component';
import {EmployeesComponent} from './sections/employees/employees.component';
import {HelpComponent} from './sections/help/help.component';
import {LogComponent} from './sections/log/log.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent, data: {title: 'Панель'} },
  { path: 'departments', component: DepartmentsComponent, data: { title: 'Отделы' } },
  { path: 'devices', component: DevicesComponent, data: { title: 'Устройства' } },
  { path: 'employees', component: EmployeesComponent, data: { title: 'Сотрудники' } },
  { path: 'help', component: HelpComponent, data: { title: 'Помощь' } },
  { path: 'log', component: LogComponent, data: { title: 'Журнал' } },
  { path: 'monitor', component: MonitorComponent, data: { title: 'Монитор' } },
  { path: 'settings', component: SettingsComponent, data: { title: 'Настройки' } },
  { path: '**', component: NotFoundComponent, data: { title: 'Страница не найдена' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
