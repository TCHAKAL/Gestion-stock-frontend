import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StockiteasycategoriesService} from "../../../../gs-api/src/services/stockiteasycategories.service";

@Component({
  selector: 'app-changer-mot-passe',
  templateUrl: './changer-mot-passe.component.html',
  styleUrls: ['./changer-mot-passe.component.scss']
})
export class ChangerMotPasseComponent implements OnInit {

  constructor(private router: Router , private categorieService:StockiteasycategoriesService) {
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.router.navigate(['profil']);
  }

  changerMotPasse() {
    this.categorieService.findAll().subscribe(res=>{
    })
  }
}
