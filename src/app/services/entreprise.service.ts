import {Injectable} from "@angular/core";
import {EntrepriseDto} from "../../gs-api/src/models/entreprise-dto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  rootUrl: string = 'http://localhost:9090';

  constructor(private http: HttpClient) {
  }

  save(entrepriseDto?: EntrepriseDto): Observable<EntrepriseDto> {
    return this.http.post<EntrepriseDto>(this.rootUrl + `/stockiteasy/entreprises/create`, entrepriseDto);
  }
}
