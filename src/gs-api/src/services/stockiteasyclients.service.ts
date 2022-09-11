/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ClientDto } from '../models/client-dto';
@Injectable({
  providedIn: 'root',
})
class StockiteasyclientsService extends __BaseService {
  static readonly findAllPath = '/stockiteasy/clients';
  static readonly savePath = '/stockiteasy/clients/create';
  static readonly deletePath = '/stockiteasy/clients/delete/{idClient}';
  static readonly findByIdPath = '/stockiteasy/clients/{idClient}';
  static readonly findByMailPath = '/stockiteasy/clients/{mail}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette méthode permet de charger la liste des clients
   * @return les Utlisateurs sont trouvés dans la BDD
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/clients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }
  /**
   * Cette méthode permet de charger la liste des clients
   * @return les Utlisateurs sont trouvés dans la BDD
   */
  findAll(): __Observable<Array<ClientDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ClientDto>)
    );
  }

  /**
   * Cette méthode permet de créer ou modifier un client
   * @param body undefined
   * @return Utlisateur est crée/modifié
   */
  saveResponse(body?: ClientDto): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/clients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Cette méthode permet de créer ou modifier un client
   * @param body undefined
   * @return Utlisateur est crée/modifié
   */
  save(body?: ClientDto): __Observable<ClientDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * Cette méthode permet de supprimer un client par son ID
   * @param idClient undefined
   */
  deleteResponse(idClient: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/clients/delete/${idClient}`,
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
   * Cette méthode permet de supprimer un client par son ID
   * @param idClient undefined
   */
  delete(idClient: number): __Observable<null> {
    return this.deleteResponse(idClient).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Cette méthode permet de rechercher un client par son id
   * @param idClient undefined
   * @return Utlisateur est trouvé
   */
  findByIdResponse(idClient: number): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/clients/${idClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Cette méthode permet de rechercher un client par son id
   * @param idClient undefined
   * @return Utlisateur est trouvé
   */
  findById(idClient: number): __Observable<ClientDto> {
    return this.findByIdResponse(idClient).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * Cette méthode permet de rechercher un client par son email
   * @param mail undefined
   * @return Utlisateur est trouvé dans la BDD
   */
  findByMailResponse(mail: string): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/clients/${mail}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Cette méthode permet de rechercher un client par son email
   * @param mail undefined
   * @return Utlisateur est trouvé dans la BDD
   */
  findByMail(mail: string): __Observable<ClientDto> {
    return this.findByMailResponse(mail).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }
}

module StockiteasyclientsService {
}

export { StockiteasyclientsService }
