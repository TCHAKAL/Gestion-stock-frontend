import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate() : void {
    this.router.navigate(['articles/nouveau']);
}

}
