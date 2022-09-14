import {Component, OnInit} from '@angular/core';
import {EntrepriseDto} from "../../models/entreprise-dto";
import {EntrepriseService} from "../../services/entreprise.service";
import {AdresseDto} from "../../models/adresse-dto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {AuthenticationRequest} from "../../models/authentication-request";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {

  entrepriseDto: EntrepriseDto = {};
  adresse: AdresseDto = {};
  entrepriseForm!: FormGroup;
  adresseForm!: FormGroup;
  errorMsg!: Array<string>;

  constructor(private entrepriseService: EntrepriseService,
              private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.entrepriseForm = this.formBuilder.group({
      nom: [null, Validators.required],
      codeFiscal: [null, Validators.required],
      email: [null, Validators.required],
      description: [null, Validators.required],
      telephone: [null, Validators.required],

    });
    this.adresseForm = this.formBuilder.group({
      adresse1: [null, Validators.required],
      adresse2: [null],
      ville: [null],
      codePostale: [null],
      pays: [null],
    });
  }

  inscrire() {
    this.entrepriseDto = this.entrepriseForm.value;
    this.entrepriseDto.adresse = this.adresseForm.value;
    this.entrepriseService.save(this.entrepriseDto).subscribe(entreprise => {
        const authenticationRequest: AuthenticationRequest = {
          email: this.entrepriseDto.email,
          motPasse: 'som3R@ndomP@a$$word'
        }
        this.userService.login(authenticationRequest).subscribe(response=>{
          this.userService.setAccessToken(response);
          localStorage.setItem('origin','inscription');
          this.router.navigate(['/profil/changermotpasse']);
        });
        console.log(this.entrepriseDto);
      },
      error => {
        console.log(error);
        this.errorMsg = error.error.errors
      });
  }
}
