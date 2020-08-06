import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    { title: 'Dashboard', icon: 'home', url: '/'},
    { title: 'Progress Bar', icon: '', url: 'progress'},
    { title: 'Graficas', icon: 'grafica1', },
  ]

  constructor() { }
}
