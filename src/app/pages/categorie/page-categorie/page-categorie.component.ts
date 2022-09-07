import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.scss']
})
export class PageCategorieComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  nouvelCategorie() {
    this.router.navigate(["categories/nouveau"]);
  }
}
