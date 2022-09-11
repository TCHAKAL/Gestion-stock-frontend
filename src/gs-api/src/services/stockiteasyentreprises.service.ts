/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EntrepriseDto } from '../models/entreprise-dto';
import { FournisseurDto } from '../models/fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class StockiteasyentreprisesService extends __BaseService {
  static readonly savePath = '/stockiteasy/entreprises/create';
  static readonly findByIdPath = '/stockiteasy/entreprises/{idEntreprise}';
  static readonly findByNomPath = '/stockiteasy/entreprises/{nomEntreprise}';
  static readonly findAllPath = '/stockiteasy/fournisseurs';
  static readonly deletePath = '/stockiteasy/fournisseurs/delete/{idFournisseur}';
  static readonly findByMailPath = '/stockiteasy/fournisseurs/{mail}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  saveResponse(): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/entreprises/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save(): __Observable<EntrepriseDto> {
    return this.saveResponse().pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @return successful operation
   */
  findByIdResponse(): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/entreprises/${idEntreprise}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById(): __Observable<EntrepriseDto> {
    return this.findByIdResponse().pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @return successful operation
   */
  findByNomResponse(): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/entreprises/${nomEntreprise}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByNom(): __Observable<EntrepriseDto> {
    return this.findByNomResponse().pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * Cette méthode permet de charger la liste des fournisseurs
   * @return les Utlisateurs sont trouvés dans la BDD
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<FournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/fournisseurs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }
  /**
   * Cette méthode permet de charger la liste des fournisseurs
   * @return les Utlisateurs sont trouvés dans la BDD
   */
  findAll(): __Observable<Array<FournisseurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<FournisseurDto>)
    );
  }

  /**
   * Cette méthode permet de supprimer un fournisseur par son ID
   * @param idFournisseur undefined
   */
  deleteResponse(idFournisseur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/fournisseurs/delete/${idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Cette méthode permet de supprimer un fournisseur par son ID
   * @param idFournisseur undefined
   */
  delete(idFournisseur: number): __Observable<null> {
    return this.deleteResponse(idFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Cette méthode permet de rechercher un fournisseur par son email
   * @param mail undefined
   * @return Utlisateur est trouvé dans la BDD
   */
  findByMailResponse(mail: string): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/fournisseurs/${mail}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * Cette méthode permet de rechercher un fournisseur par son email
   * @param mail undefined
   * @return Utlisateur est trouvé dans la BDD
   */
  findByMail(mail: string): __Observable<FournisseurDto> {
    return this.findByMailResponse(mail).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }
}

module StockiteasyentreprisesService {
}

export { StockiteasyentreprisesService }
