import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../models/authentication-response";

@Injectable({
  providedIn:'root'
})
export class HttpInterceptorService implements HttpInterceptor{


  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authenticationResponse : AuthenticationResponse={};
    if(localStorage.getItem('connectedUser')){
      authenticationResponse = JSON.parse(
        localStorage.getItem('connectedUser') as string
      );
    }
    const authRequest = req.clone({
      headers:new HttpHeaders({
        Authorization:'Bearer '+authenticationResponse.jwtAccessToken
      })
    });
    return next.handle(authRequest);
  }

}
