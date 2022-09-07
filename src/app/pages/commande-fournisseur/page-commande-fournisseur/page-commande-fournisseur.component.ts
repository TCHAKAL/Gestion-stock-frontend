import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-commande-fournisseur',
  templateUrl: './page-commande-fournisseur.component.html',
  styleUrls: ['./page-commande-fournisseur.component.scss']
})
export class PageCommandeFournisseurComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  nouvelleCommandeFournisseur():void {
    this.router.navigate(["commandes/fournisseurs/nouveau"]);
  }
}
