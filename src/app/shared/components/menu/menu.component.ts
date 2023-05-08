import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Problemas',
        icon: 'pi pi-desktop',
        routerLink: '/user-profile'
      },
      {
        label: 'Concursos',
        icon: 'pi pi-bolt',
        routerLink: '/user-profile'
      },
      {
        label: 'Materias',
        icon: 'pi pi-book',
        routerLink: '/user-profile'
      },
      {
        label: 'Ranking',
        icon: 'pi pi-chart-bar',
        routerLink: '/user-profile'
      },
      {
        label: 'Configuración',
        icon: 'pi pi-cog',
        routerLink: '/account-settings'
      },
    ];
  }
}
