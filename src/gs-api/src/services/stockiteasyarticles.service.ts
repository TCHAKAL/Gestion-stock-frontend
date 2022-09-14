/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../../../app/models/article-dto';
import { LigneCommandeClientDto } from '../../../app/models/ligne-commande-client-dto';
@Injectable({
  providedIn: 'root',
})
class StockiteasyarticlesService extends __BaseService {
  static readonly findAllPath = '/stockiteasy/articles/all';
  static readonly deletePath = '/stockiteasy/articles/delete/{idArticle}';
  static readonly findHistoriqueCommandeClientPath = '/stockiteasy/articles/historique/commandeClient/{idArticle}';
  static readonly findByCodePath = '/stockiteasy/articles/{codeArticle}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette méthode permet de renvoyer la liste des articles
   * @return Les articles sont trouvés dans la BDD
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/articles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Cette méthode permet de renvoyer la liste des articles
   * @return Les articles sont trouvés dans la BDD
   */
  findAll(): __Observable<Array<ArticleDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Cette méthode permet de supprimer un article par son ID
   * @param idArticle undefined
   */
  deleteResponse(idArticle: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/articles/delete/${idArticle}`,
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
   * Cette méthode permet de supprimer un article par son ID
   * @param idArticle undefined
   */
  delete(idArticle: number): __Observable<null> {
    return this.deleteResponse(idArticle).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueCommandeClientResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/articles/historique/commandeClient/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueCommandeClient(idArticle: number): __Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriqueCommandeClientResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * Cette méthode permet de rechercher un article par son code
   * @param codeArticle undefined
   * @return L'article est trouvé dans la BDD
   */
  findByCodeResponse(codeArticle: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/articles/${codeArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Cette méthode permet de rechercher un article par son code
   * @param codeArticle undefined
   * @return L'article est trouvé dans la BDD
   */
  findByCode(codeArticle: string): __Observable<ArticleDto> {
    return this.findByCodeResponse(codeArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }
}

module StockiteasyarticlesService {
}

export { StockiteasyarticlesService }
