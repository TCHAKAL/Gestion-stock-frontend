import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from "@angular/router";

@Component({
  selector: 'app-nouvelle-commande-client-fournisseur',
  templateUrl: './nouvelle-commande-client-fournisseur.component.html',
  styleUrls: ['./nouvelle-commande-client-fournisseur.component.scss']
})
export class NouvelleCommandeClientFournisseurComponent implements OnInit {
  origin!: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.origin = data['origin'])
  }

  onCancel() {
    if (this.origin === 'client') {
      this.router.navigate(['commandes/clients']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['commandes/fournisseurs']);
    }
  }
}
