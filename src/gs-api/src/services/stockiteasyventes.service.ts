/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDto } from '../../../app/models/utilisateur-dto';
@Injectable({
  providedIn: 'root',
})
class StockiteasyventesService extends __BaseService {
  static readonly findAllPath = '/stockiteasy/ventes';
  static readonly findByDateVentePath = '/stockiteasy/ventes/{dateVente}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette méthode permet de charger la liste des ventes
   * @return Les ventes sont trouvées
   */
  findAllResponse(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/ventes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * Cette méthode permet de charger la liste des ventes
   * @return Les ventes sont trouvées
   */
  findAll(): __Observable<UtilisateurDto> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Cette méthode permet de rechercher une vente par sa date de vente
   * @param dateVente undefined
   * @return La vente est trouvée
   */
  findByDateVenteResponse(dateVente: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/ventes/${dateVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * Cette méthode permet de rechercher une vente par sa date de vente
   * @param dateVente undefined
   * @return La vente est trouvée
   */
  findByDateVente(dateVente: number): __Observable<UtilisateurDto> {
    return this.findByDateVenteResponse(dateVente).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }
}

module StockiteasyventesService {
}

export { StockiteasyventesService }
