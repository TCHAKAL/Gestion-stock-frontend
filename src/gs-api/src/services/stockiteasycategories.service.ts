/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategorieDto } from '../../../app/models/categorie-dto';
@Injectable({
  providedIn: 'root',
})
class StockiteasycategoriesService extends __BaseService {
  static readonly savePath = '/stockiteasy/categories/create';
  static readonly deletePath = '/stockiteasy/categories/delete/{idCategorie}';
  static readonly findByCodePath = '/stockiteasy/categories/{codeCategorie}';
  static readonly findByIdPath = '/stockiteasy/categories/{idCategorie}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette méthode permet d'ajouter et de modifier une categorie
   * @param body undefined
   * @return L'objet categorie créé / modifié
   */
  saveResponse(body?: CategorieDto): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategorieDto>;
      })
    );
  }
  /**
   * Cette méthode permet d'ajouter et de modifier une categorie
   * @param body undefined
   * @return L'objet categorie créé / modifié
   */
  save(body?: CategorieDto): __Observable<CategorieDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }

  /**
   * Cette méthode permet de supprimer une categorie par son ID
   * @param idCategorie undefined
   */
  deleteResponse(idCategorie: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/categories/delete/${idCategorie}`,
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
   * Cette méthode permet de supprimer une categorie par son ID
   * @param idCategorie undefined
   */
  delete(idCategorie: number): __Observable<null> {
    return this.deleteResponse(idCategorie).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Cette méthode permet de rechercher une categorie par son code
   * @param codeCategorie Le code de catégorie doit etre dans l'un des valeurs suivant [CAT1,CAT2,CAT3]
   * @return La categorie est trouvé dans la BDD
   */
  findByCodeResponse(codeCategorie: string): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/categories/${codeCategorie}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategorieDto>;
      })
    );
  }
  /**
   * Cette méthode permet de rechercher une categorie par son code
   * @param codeCategorie Le code de catégorie doit etre dans l'un des valeurs suivant [CAT1,CAT2,CAT3]
   * @return La categorie est trouvé dans la BDD
   */
  findByCode(codeCategorie: string): __Observable<CategorieDto> {
    return this.findByCodeResponse(codeCategorie).pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }

  /**
   * Cette méthode permet de recherhcer une categorie par son ID
   * @param idCategorie undefined
   * @return L'objet categorie est trouvé dans la BDD
   */
  findByIdResponse(idCategorie: number): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/categories/${idCategorie}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategorieDto>;
      })
    );
  }
  /**
   * Cette méthode permet de recherhcer une categorie par son ID
   * @param idCategorie undefined
   * @return L'objet categorie est trouvé dans la BDD
   */
  findById(idCategorie: number): __Observable<CategorieDto> {
    return this.findByIdResponse(idCategorie).pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }
}

module StockiteasycategoriesService {
}

export { StockiteasycategoriesService }
