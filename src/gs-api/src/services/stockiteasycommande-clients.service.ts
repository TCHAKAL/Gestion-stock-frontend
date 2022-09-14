/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeClientDto } from '../../../app/models/commande-client-dto';
@Injectable({
  providedIn: 'root',
})
class StockiteasycommandeClientsService extends __BaseService {
  static readonly savePath = '/stockiteasy/commandeClients/create';
  static readonly updateArticlePath = '/stockiteasy/commandeClients/update/article/{idCommande}/{idLigneCommmande}/{idArticle}';
  static readonly updateEtatCommandePath = '/stockiteasy/commandeClients/update/etat/{idCommande}/{etatCommande}';
  static readonly updateQuantitePath = '/stockiteasy/commandeClients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette méthode permet de créer ou modifier une commande client
   * @param body undefined
   * @return commandeClient est créée/modifiée
   */
  saveResponse(body?: CommandeClientDto): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/commandeClients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * Cette méthode permet de créer ou modifier une commande client
   * @param body undefined
   * @return commandeClient est créée/modifiée
   */
  save(body?: CommandeClientDto): __Observable<CommandeClientDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Cette méthode permet de modifier l'article d'une ligne commande client
   * @param params The `StockiteasycommandeClientsService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommmande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return l'article de ligne commande client est modifié
   */
  updateArticleResponse(params: StockiteasycommandeClientsService.UpdateArticleParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/stockiteasy/commandeClients/update/article/${params.idCommande}/${params.idLigneCommmande}/${params.idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * Cette méthode permet de modifier l'article d'une ligne commande client
   * @param params The `StockiteasycommandeClientsService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommmande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return l'article de ligne commande client est modifié
   */
  updateArticle(params: StockiteasycommandeClientsService.UpdateArticleParams): __Observable<CommandeClientDto> {
    return this.updateArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Cette méthode permet de modifier l'état d'une commande client
   * @param params The `StockiteasycommandeClientsService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return L'état de la commande client est modifiée
   */
  updateEtatCommandeResponse(params: StockiteasycommandeClientsService.UpdateEtatCommandeParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/stockiteasy/commandeClients/update/etat/${params.idCommande}/${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * Cette méthode permet de modifier l'état d'une commande client
   * @param params The `StockiteasycommandeClientsService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return L'état de la commande client est modifiée
   */
  updateEtatCommande(params: StockiteasycommandeClientsService.UpdateEtatCommandeParams): __Observable<CommandeClientDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Cette méthode permet de modifier la quantite d'une ligne commande client
   * @param params The `StockiteasycommandeClientsService.UpdateQuantiteParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return La ligne de la commande client est modifiée
   */
  updateQuantiteResponse(params: StockiteasycommandeClientsService.UpdateQuantiteParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/stockiteasy/commandeClients/update/quantite/${params.idCommande}/${params.idLigneCommande}/${params.quantite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * Cette méthode permet de modifier la quantite d'une ligne commande client
   * @param params The `StockiteasycommandeClientsService.UpdateQuantiteParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return La ligne de la commande client est modifiée
   */
  updateQuantite(params: StockiteasycommandeClientsService.UpdateQuantiteParams): __Observable<CommandeClientDto> {
    return this.updateQuantiteResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }
}

module StockiteasycommandeClientsService {

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

export { StockiteasycommandeClientsService }
