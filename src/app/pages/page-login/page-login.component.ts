import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        email: [null, Validators.required],
        motPasse: [null, Validators.required],

      },
      {
        updateOn: 'change'
      });
  }

  //Il faut ajouter Cross Unblock pour Unblock CORS error dans la phase de developpement
  login() {
    console.log(this.loginForm.value)
    this.userService.login(this.loginForm.value)
      .subscribe(data => {
        localStorage.setItem('authenticationResponse', JSON.stringify(data));
        this.userService.setAccessToken(data);
        this.getUserByEmail();
        this.router.navigate(['']);
      }, (error) => {
        console.log(error)
        this.errorMessage = 'Login et / ou mot de passe incorrect(s)';
      });
  }

  getUserByEmail() {
    this.userService.getUserByEmail(this.loginForm.value.email).subscribe(utilisateur => {
      this.userService.setUtilisateur(utilisateur);
    });
  }
}
