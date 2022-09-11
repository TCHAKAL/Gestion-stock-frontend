import {Injectable} from '@angular/core';
import {AuthenticationRequest} from "../../../gs-api/src/models/authentication-request";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../../gs-api/src/models/authentication-response";
import {ApiService} from "../../../gs-api/src/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authenticationService: ApiService
             ) {
  }

  login(authenticationRequest: AuthenticationRequest):Observable<AuthenticationResponse> {
    return this.authenticationService.authenticate(authenticationRequest);
    //   .subscribe(data=>{
    //     localStorage.setItem('authenticationResponse',JSON.stringify(data));
    //   },error=>{
    //   console.log(error);
    //   this.router.navigate(['inscrire']);
    // });
  }
}