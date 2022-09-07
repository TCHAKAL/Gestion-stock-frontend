import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-commande-client',
  templateUrl: './page-commande-client.component.html',
  styleUrls: ['./page-commande-client.component.scss']
})
export class PageCommandeClientComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  nouvelleCommandeClient():void {
    this.router.navigate(["commandes/clients/nouveau"]);
  }
}
