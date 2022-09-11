import {Component, Inject, OnInit} from '@angular/core';
import {AuthenticationRequest} from "../../../gs-api/src/models/authentication-request";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  authenticationRequest:AuthenticationRequest={};

  constructor(@Inject(UserService) private userService : UserService,
              private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.authenticationRequest)
      .subscribe(data=>{
        localStorage.setItem('authenticationResponse',JSON.stringify(data));
      },error=>{
      console.log(error);
      debugger;
      this.router.navigate(['inscrire']);
    });
  }
}
