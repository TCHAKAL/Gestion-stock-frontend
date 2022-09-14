/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeFournisseurDto } from '../../../app/models/commande-fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class StockiteasycommandeFournisseursService extends __BaseService {
  static readonly savePath = '/stockiteasy/commandeFournisseurs/create';
  static readonly deleteArticlePath = '/stockiteasy/commandeFournisseurs/delete/article/{idCommande}/{idLigneCommmande}';
  static readonly updateArticlePath = '/stockiteasy/commandeFournisseurs/update/article/{idCommande}/{idLigneCommmande}/{idArticle}';
  static readonly updateEtatCommandePath = '/stockiteasy/commandeFournisseurs/update/etat/{idCommande}/{etatCommande}';
  static readonly updateQuantitePath = '/stockiteasy/commandeFournisseurs/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByIdPath = '/stockiteasy/commandeFournisseurs/{idCommandeFournisseur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette méthode permet de créer ou modifier une commande fournisseur
   * @param body undefined
   * @return commandeFournisseur est créée/modifiée
   */
  saveResponse(body?: CommandeFournisseurDto): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/commandeFournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Cette méthode permet de créer ou modifier une commande fournisseur
   * @param body undefined
   * @return commandeFournisseur est créée/modifiée
   */
  save(body?: CommandeFournisseurDto): __Observable<CommandeFournisseurDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Cette méthode permet de supprimer une ligne commande fournisseur
   * @param params The `StockiteasycommandeFournisseursService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommmande`:
   *
   * - `idCommande`:
   *
   * @return La ligne commande fournisseur est supprimée
   */
  deleteArticleResponse(params: StockiteasycommandeFournisseursService.DeleteArticleParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/commandeFournisseurs/delete/article/${params.idCommande}/${params.idLigneCommmande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Cette méthode permet de supprimer une ligne commande fournisseur
   * @param params The `StockiteasycommandeFournisseursService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommmande`:
   *
   * - `idCommande`:
   *
   * @return La ligne commande fournisseur est supprimée
   */
  deleteArticle(params: StockiteasycommandeFournisseursService.DeleteArticleParams): __Observable<CommandeFournisseurDto> {
    return this.deleteArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Cette méthode permet de modifier l'article d'une ligne commande fournisseur
   * @param params The `StockiteasycommandeFournisseursService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommmande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return l'article de ligne commande fournisseur est modifié
   */
  updateArticleResponse(params: StockiteasycommandeFournisseursService.UpdateArticleParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/stockiteasy/commandeFournisseurs/update/article/${params.idCommande}/${params.idLigneCommmande}/${params.idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Cette méthode permet de modifier l'article d'une ligne commande fournisseur
   * @param params The `StockiteasycommandeFournisseursService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommmande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return l'article de ligne commande fournisseur est modifié
   */
  updateArticle(params: StockiteasycommandeFournisseursService.UpdateArticleParams): __Observable<CommandeFournisseurDto> {
    return this.updateArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Cette méthode permet de modifier l'état d'une commande fournisseur
   * @param params The `StockiteasycommandeFournisseursService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return L'état de la commande fournisseur est modifiée
   */
  updateEtatCommandeResponse(params: StockiteasycommandeFournisseursService.UpdateEtatCommandeParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/stockiteasy/commandeFournisseurs/update/etat/${params.idCommande}/${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Cette méthode permet de modifier l'état d'une commande fournisseur
   * @param params The `StockiteasycommandeFournisseursService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return L'état de la commande fournisseur est modifiée
   */
  updateEtatCommande(params: StockiteasycommandeFournisseursService.UpdateEtatCommandeParams): __Observable<CommandeFournisseurDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Cette méthode permet de modifier la quantite d'une ligne commande fournisseur
   * @param params The `StockiteasycommandeFournisseursService.UpdateQuantiteParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return La ligne de la commande fournisseur est modifiée
   */
  updateQuantiteResponse(params: StockiteasycommandeFournisseursService.UpdateQuantiteParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/stockiteasy/commandeFournisseurs/update/quantite/${params.idCommande}/${params.idLigneCommande}/${params.quantite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Cette méthode permet de modifier la quantite d'une ligne commande fournisseur
   * @param params The `StockiteasycommandeFournisseursService.UpdateQuantiteParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return La ligne de la commande fournisseur est modifiée
   */
  updateQuantite(params: StockiteasycommandeFournisseursService.UpdateQuantiteParams): __Observable<CommandeFournisseurDto> {
    return this.updateQuantiteResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Cette méthode permet de rechercher une commande fournisseur par son id
   * @param idCommandeFournisseur undefined
   * @return commandeFournisseur est trouvé
   */
  findByIdResponse(idCommandeFournisseur: number): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/commandeFournisseurs/${idCommandeFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Cette méthode permet de rechercher une commande fournisseur par son id
   * @param idCommandeFournisseur undefined
   * @return commandeFournisseur est trouvé
   */
  findById(idCommandeFournisseur: number): __Observable<CommandeFournisseurDto> {
    return this.findByIdResponse(idCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }
}

module StockiteasycommandeFournisseursService {

  /**
   * Parameters for deleteArticle
   */
  export interface DeleteArticleParams {
    idLigneCommmande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateArticle
   */
  export interface UpdateArticleParams {
    idLigneCommmande: number;
    idCommande: number;
    idArticle: number;
  }

  /**
   * Parameters for updateEtatCommande
   */
  export interface UpdateEtatCommandeParams {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  }

  /**
   * Parameters for updateQuantite
   */
  export interface UpdateQuantiteParams {
    quantite: number;
    idLigneCommande: number;
    idCommande: number;
  }
}

export { StockiteasycommandeFournisseursService }
