import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fa-solid fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Vue d\'ensemble',
          icon: 'fa-solid fa-chart-pie',
          url: '',
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'fa-solid fa-chart-column',
          url: 'statistiques',
        }
      ]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fa-solid fa-sitemap',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: 'fa-solid fa-boxes-stacked',
          url: 'articles',
        },
        {
          id: '22',
          titre: 'Mouvements du stock',
          icon: 'fab fa-stack-overflow',
          url: 'mouvements',
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fa-solid fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fa-solid fa-user',
          url: 'clients',
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fa-solid fa-basket-shopping',
          url: 'commandes/clients',
        }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fa-solid fa-users-gear',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'fa-solid fa-user-secret',
          url: 'fournisseurs',
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'fa-solid fa-truck-fast',
          url: 'commandes/clients',
        }
      ]
    },
    {
      id: '5',
      titre: 'Paramétrages',
      icon: 'fa-solid fa-screwdriver-wrench',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Catégories',
          icon: 'fa-solid fa-bars-progress',
          url: '',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fa-solid fa-user-shield',
          url: '',
        }
      ]
    },
  ];

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }

  navigate(url?: string) {
    this.router.navigate([url]);
  }
}
