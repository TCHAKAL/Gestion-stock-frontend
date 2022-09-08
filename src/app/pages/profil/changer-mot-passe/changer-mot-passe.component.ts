import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-changer-mot-passe',
  templateUrl: './changer-mot-passe.component.html',
  styleUrls: ['./changer-mot-passe.component.scss']
})
export class ChangerMotPasseComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.router.navigate(['profil']);
  }

}
