import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {
  isAuthenticated = false;
  title = '';
  constructor(public keycloakService: KeycloakService) { }

  items: MenuItem[] = [];
  async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.keycloakService.isLoggedIn();
    this.title = this.isAuthenticated ? 'UCB JUDGE' : 'JUEZ VIRTUAL UNIVERSIDAD CATÓLICA BOLIVIANA "SAN PABLO"';
    if (this.isAuthenticated) {
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
}
