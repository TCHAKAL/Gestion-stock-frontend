import {Injectable} from '@angular/core';
import {AuthenticationRequest} from "../../../../gs-api/src/models/authentication-request";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../../../gs-api/src/models/authentication-response";
import {ApiService} from "../../../../gs-api/src/services/api.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {  }

  login(authenticationRequest: AuthenticationRequest):Observable<AuthenticationResponse> {
    return this.apiService.authenticate(authenticationRequest);
  }

   setConnectedUser(authenticationResponse: AuthenticationResponse):void{
    localStorage.setItem('connectedUser',JSON.stringify(authenticationResponse));
  }

  isUserLoggedAndTokenValid():boolean{
    if(localStorage.getItem('connectedUser')){
      //TODO vérifier la validité du token
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }

}
