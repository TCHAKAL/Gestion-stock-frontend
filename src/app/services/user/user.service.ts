import {Injectable} from '@angular/core';
import {AuthenticationRequest} from "../../models/authentication-request";
import {Observable, of} from "rxjs";
import {AuthenticationResponse} from "../../models/authentication-response";
import {ApiService} from "../../../gs-api/src/services/api.service";
import {Router} from "@angular/router";
import {StockiteasyutilisateursService} from "../../../gs-api/src/services/stockiteasyutilisateurs.service";
import {UtilisateurDto} from "../../models/utilisateur-dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private apiService: ApiService,
    private utilisateurService: StockiteasyutilisateursService
  ) {
  }

  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.apiService.authenticate(authenticationRequest);
  }

  setAccessToken(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem('accessToken', JSON.stringify(authenticationResponse));
  }

  setUtilisateur(utilisateur: UtilisateurDto): void {
    localStorage.setItem('utilisateur', JSON.stringify(utilisateur));
  }

  isUserLoggedAndTokenValid(): boolean {
    if (localStorage.getItem('accessToken')) {
      //TODO vérifier la validité du token
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }

  getUserByEmail(email: string): Observable<UtilisateurDto> {
    if (email !== undefined){
      return this.utilisateurService.findByEmail(email);
    }
    return of();
  }

  getConnectedUser():UtilisateurDto{
    if(localStorage.getItem('utilisateur')){
      let utilisateur = localStorage.getItem('utilisateur');
      // @ts-ignore
      return JSON.parse(utilisateur);
    }
    return {};
  }
}
