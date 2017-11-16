import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frbs-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  menuItems = [
    {
      name: 'Панель',
      path: 'dashboard',
      icon: 'dashboard',
    },
    {
      name: 'Монитор',
      path: 'monitor',
      icon: 'personal_video',
    },
    {
      name: 'Сотрудники',
      path: 'employees',
      icon: 'people',
    },
    {
      name: 'Отделы',
      path: 'departments',
      icon: 'contact_mail',
    },
    {
      name: 'Устройства',
      path: 'devices',
      icon: 'settings_input_component',
    },
    {
      name: 'События',
      path: 'log',
      icon: 'notifications',
    },
    {
      name: 'Настройки',
      path: 'settings',
      icon: 'settings',
    },
    {
      name: 'Помощь',
      path: 'help',
      icon: 'help',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
