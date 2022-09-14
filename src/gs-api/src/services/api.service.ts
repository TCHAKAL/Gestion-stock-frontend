/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpResponse, HttpHeaders} from '@angular/common/http';
import {BaseService as __BaseService} from '../base-service';
import {ApiConfiguration as __Configuration} from '../api-configuration';
import {StrictHttpResponse as __StrictHttpResponse} from '../strict-http-response';
import {Observable as __Observable} from 'rxjs';
import {map as __map, filter as __filter} from 'rxjs/operators';

import {ArticleDto} from '../../../app/models/article-dto';
import {LigneCommandeFournisseurDto} from '../../../app/models/ligne-commande-fournisseur-dto';
import {LigneVenteDto} from '../../../app/models/ligne-vente-dto';
import {CategorieDto} from '../../../app/models/categorie-dto';
import {CommandeClientDto} from '../../../app/models/commande-client-dto';
import {LigneCommandeClientDto} from '../../../app/models/ligne-commande-client-dto';
import {CommandeFournisseurDto} from '../../../app/models/commande-fournisseur-dto';
import {EntrepriseDto} from '../../../app/models/entreprise-dto';
import {FournisseurDto} from '../../../app/models/fournisseur-dto';
import {MvtStockDto} from '../../../app/models/mvt-stock-dto';
import {UtilisateurDto} from '../../../app/models/utilisateur-dto';
import {AuthenticationResponse} from '../../../app/models/authentication-response';
import {AuthenticationRequest} from '../../../app/models/authentication-request';

@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly savePath = '/stockiteasy/articles/create';
  static readonly findAllByCategoriePath = '/stockiteasy/articles/filter/categorie/{idArticle}';
  static readonly findHistoriqueCommandeFournisseurPath = '/stockiteasy/articles/historique/commandeFournisseur/{idArticle}';
  static readonly findHistoriqueVentePath = '/stockiteasy/articles/historique/vente/{idArticle}';
  static readonly findByIdPath = '/stockiteasy/articles/{idArticle}';
  static readonly findAllPath = '/stockiteasy/categories/all';
  static readonly findByDesignationPath = '/stockiteasy/categories/{designation}';
  static readonly findAll_1Path = '/stockiteasy/commandeClients';
  static readonly deleteArticlePath = '/stockiteasy/commandeClients/delete/article/{idCommande}/{idLigneCommmande}';
  static readonly deletePath = '/stockiteasy/commandeClients/delete/{idCommande}';
  static readonly findAllLigneCommandeClientByCommandeClientIdPath = '/stockiteasy/commandeClients/lignesCommande/{idCommande}';
  static readonly updateClientPath = '/stockiteasy/commandeClients/update/client/{idCommande}/{idClient}';
  static readonly findById_1Path = '/stockiteasy/commandeClients/{idCommandeClient}';
  static readonly findAll_2Path = '/stockiteasy/commandeFournisseurs';
  static readonly delete_1Path = '/stockiteasy/commandeFournisseurs/delete/{idCommande}';
  static readonly findAllLigneCommandeFournisseurByCommandeFournisseurIdPath = '/stockiteasy/commandeFournisseurs/lignesCommande/{idCommande}';
  static readonly updateFournisseurPath = '/stockiteasy/commandeFournisseurs/update/fournisseur/{idCommande}/{idFournisseur}';
  static readonly findAll_3Path = '/stockiteasy/entreprises';
  static readonly delete_2Path = '/stockiteasy/entreprises/delete/{idEntreprise}';
  static readonly save_1Path = '/stockiteasy/fournisseurs/create';
  static readonly findById_2Path = '/stockiteasy/fournisseurs/{idFournisseur}';
  static readonly findAllByArticleIdPath = '/stockiteasy/mouvements/filter/article/{idArticle}';
  static readonly correctionStockNegativePath = '/stockiteasy/mouvements/stockreel/correction/negative';
  static readonly stockReelArticlePath = '/stockiteasy/mouvements/stockreel/{idArticle}';
  static readonly savePhotoPath = '/stockiteasy/photos/{id}/{titre}/{context}';
  static readonly findAll_4Path = '/stockiteasy/utilisateurs';
  static readonly save_2Path = '/stockiteasy/utilisateurs/create';
  static readonly delete_3Path = '/stockiteasy/utilisateurs/delete/{idFournisseur}';
  static readonly findByEmailAndMotPassePath = '/stockiteasy/utilisateurs/{mail}';
  static readonly save_3Path = '/stockiteasy/ventes/create';
  static readonly delete_4Path = '/stockiteasy/ventes/delete/{idVente}';
  static readonly findByCodePath = '/stockiteasy/ventes/{codeVente}';
  static readonly findById_3Path = '/stockiteasy/ventes/{idVente}';
  static readonly authenticatePath = 'stockiteasy/authentication/authenticate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette méthode permet d'ajouter et de modifier un article
   * @return L'objet article créé / modifié
   */
  saveResponse(): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/articles/create`,
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
   * Cette méthode permet d'ajouter et de modifier un article
   * @return L'objet article créé / modifié
   */
  save(): __Observable<ArticleDto> {
    return this.saveResponse().pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllByCategorieResponse(idArticle:number): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/articles/filter/categorie/${idArticle}`,
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
   * @return successful operation
   */
  findAllByCategorie(idArticle:number): __Observable<Array<ArticleDto>> {
    return this.findAllByCategorieResponse(idArticle).pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueCommandeFournisseurResponse(idArticle:number): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/articles/historique/commandeFournisseur/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueCommandeFournisseur(idArticle:number): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseurResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueVenteResponse(idArticle:number): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/articles/historique/vente/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueVente(idArticle:number): __Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVenteResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * Cette méthode permet de recherhcer un article par son ID
   * @return L'objet article est trouvé dans la BDD
   */
  findByIdResponse(idArticle:number): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/articles/${idArticle}`,
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
   * Cette méthode permet de recherhcer un article par son ID
   * @return L'objet article est trouvé dans la BDD
   */
  findById(idArticle:number): __Observable<ArticleDto> {
    return this.findByIdResponse(idArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Cette méthode permet de renvoyer la liste des categories
   * @return L'objet categorie est trouvé dans la BDD
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CategorieDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/categories/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategorieDto>>;
      })
    );
  }

  /**
   * Cette méthode permet de renvoyer la liste des categories
   * @return L'objet categorie est trouvé dans la BDD
   */
  findAll(): __Observable<Array<CategorieDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CategorieDto>)
    );
  }

  /**
   * Cette méthode permet de rechercher une categorie par sa designation
   * @return La catégorie est trouvé dans la BDD
   */
  findByDesignationResponse(designation:string): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/categories/${designation}`,
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
   * Cette méthode permet de rechercher une categorie par sa designation
   * @return La catégorie est trouvé dans la BDD
   */
  findByDesignation(designation:string): __Observable<CategorieDto> {
    return this.findByDesignationResponse(designation).pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }

  /**
   * Cette méthode permet de charger la liste des commandeClients
   * @return les commandeClients sont trouvés dans la BDD
   */
  findAll_1Response(): __Observable<__StrictHttpResponse<Array<CommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/commandeClients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeClientDto>>;
      })
    );
  }

  /**
   * Cette méthode permet de charger la liste des commandeClients
   * @return les commandeClients sont trouvés dans la BDD
   */
  findAll_1(): __Observable<Array<CommandeClientDto>> {
    return this.findAll_1Response().pipe(
      __map(_r => _r.body as Array<CommandeClientDto>)
    );
  }

  /**
   * Cette méthode permet de supprimer une ligne commande client
   * @return La ligne commande client est supprimée
   */
  deleteArticleResponse(idCommande: number, idLigneCommmande: number): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/commandeClients/delete/article/${idCommande}/${idLigneCommmande}`,
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
   * Cette méthode permet de supprimer une ligne commande client
   * @return La ligne commande client est supprimée
   */
  deleteArticle(idCommande: number, idLigneCommmande: number): __Observable<CommandeClientDto> {
    return this.deleteArticleResponse(idCommande, idLigneCommmande).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Cette méthode permet de supprimer une commande client par son ID
   */
  deleteResponse(idCommande: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/commandeClients/delete/${idCommande}`,
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
   * Cette méthode permet de supprimer une commande client par son ID
   */
  delete(idCommande: number): __Observable<null> {
    return this.deleteResponse(idCommande).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Cette méthode permet de charger la liste des lignes commande clients avec id de la commande
   * @return les lignes commande clients sont trouvées dans la BDD
   */
  findAllLigneCommandeClientByCommandeClientIdResponse(idCommande: number): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/commandeClients/lignesCommande/${idCommande}`,
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
   * Cette méthode permet de charger la liste des lignes commande clients avec id de la commande
   * @return les lignes commande clients sont trouvées dans la BDD
   */
  findAllLigneCommandeClientByCommandeClientId(idCommande: number): __Observable<Array<LigneCommandeClientDto>> {
    return this.findAllLigneCommandeClientByCommandeClientIdResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * Cette méthode permet de modifier le client d'une ligne commande client
   * @return Le client de la commande client est modifié
   */
  updateClientResponse(idCommande: number, idClient: number): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/stockiteasy/commandeClients/update/client/${idCommande}/${idClient}`,
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
   * Cette méthode permet de modifier le client d'une ligne commande client
   * @return Le client de la commande client est modifié
   */
  updateClient(idCommande: number, idClient: number): __Observable<CommandeClientDto> {
    return this.updateClientResponse(idCommande, idClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Cette méthode permet de rechercher une commande client par son id
   * @return commandeClient est trouvé
   */
  findById_1Response(idCommandeClient: number): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/commandeClients/${idCommandeClient}`,
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
   * Cette méthode permet de rechercher une commande client par son id
   * @return commandeClient est trouvé
   */
  findById_1(idCommandeClient: number): __Observable<CommandeClientDto> {
    return this.findById_1Response(idCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Cette méthode permet de charger la liste des commandeFournisseurs
   * @return les commandeFournisseurs sont trouvés dans la BDD
   */
  findAll_2Response(): __Observable<__StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/commandeFournisseurs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeFournisseurDto>>;
      })
    );
  }

  /**
   * Cette méthode permet de charger la liste des commandeFournisseurs
   * @return les commandeFournisseurs sont trouvés dans la BDD
   */
  findAll_2(): __Observable<Array<CommandeFournisseurDto>> {
    return this.findAll_2Response().pipe(
      __map(_r => _r.body as Array<CommandeFournisseurDto>)
    );
  }

  /**
   * Cette méthode permet de supprimer une commande fournisseur par son ID
   */
  delete_1Response(idCommande: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/commandeFournisseurs/delete/${idCommande}`,
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
   * Cette méthode permet de supprimer une commande fournisseur par son ID
   */
  delete_1(idCommande: number): __Observable<null> {
    return this.delete_1Response(idCommande).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Cette méthode permet de charger la liste des lignes commande fournisseurs avec id de la commande
   * @return les lignes commande fournisseurs sont trouvées dans la BDD
   */
  findAllLigneCommandeFournisseurByCommandeFournisseurIdResponse(idCommande: number): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/commandeFournisseurs/lignesCommande/${idCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }

  /**
   * Cette méthode permet de charger la liste des lignes commande fournisseurs avec id de la commande
   * @return les lignes commande fournisseurs sont trouvées dans la BDD
   */
  findAllLigneCommandeFournisseurByCommandeFournisseurId(idCommande: number): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findAllLigneCommandeFournisseurByCommandeFournisseurIdResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * Cette méthode permet de modifier le fournisseur d'une ligne commande fournisseur
   * @return Le fournisseur de la commande fournisseur est modifié
   */
  updateFournisseurResponse(idCommande: number, idFournisseur: number): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/stockiteasy/commandeFournisseurs/update/fournisseur/${idCommande}/${idFournisseur}`,
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
   * Cette méthode permet de modifier le fournisseur d'une ligne commande fournisseur
   * @return Le fournisseur de la commande fournisseur est modifié
   */
  updateFournisseur(idCommande: number, idFournisseur: number): __Observable<CommandeFournisseurDto> {
    return this.updateFournisseurResponse(idCommande, idFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_3Response(): __Observable<__StrictHttpResponse<Array<EntrepriseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/entreprises`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }

  /**
   * @return successful operation
   */
  findAll_3(): __Observable<Array<EntrepriseDto>> {
    return this.findAll_3Response().pipe(
      __map(_r => _r.body as Array<EntrepriseDto>)
    );
  }

  delete_2Response(idEntreprise: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/entreprises/delete/${idEntreprise}`,
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

  delete_2(idEntreprise: number): __Observable<null> {
    return this.delete_2Response(idEntreprise).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Cette méthode permet de créer ou modifier un fournisseur
   * @return Utlisateur est crée/modifié
   */
  save_1Response(): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/fournisseurs/create`,
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
   * Cette méthode permet de créer ou modifier un fournisseur
   * @return Utlisateur est crée/modifié
   */
  save_1(): __Observable<FournisseurDto> {
    return this.save_1Response().pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * Cette méthode permet de rechercher un fournisseur par son id
   * @return Utlisateur est trouvé
   */
  findById_2Response(idFournisseur: number): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/fournisseurs/${idFournisseur}`,
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
   * Cette méthode permet de rechercher un fournisseur par son id
   * @return Utlisateur est trouvé
   */
  findById_2(idFournisseur: number): __Observable<FournisseurDto> {
    return this.findById_2Response(idFournisseur).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllByArticleIdResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<MvtStockDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/mouvements/filter/article/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MvtStockDto>>;
      })
    );
  }

  /**
   * @return successful operation
   */
  findAllByArticleId(idArticle: number): __Observable<Array<MvtStockDto>> {
    return this.findAllByArticleIdResponse(idArticle).pipe(
      __map(_r => _r.body as Array<MvtStockDto>)
    );
  }

  /**
   * @return successful operation
   */
  correctionStockNegativeResponse(): __Observable<__StrictHttpResponse<MvtStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/mouvements/stockreel/correction/negative`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStockDto>;
      })
    );
  }

  /**
   * @return successful operation
   */
  correctionStockNegative(): __Observable<MvtStockDto> {
    return this.correctionStockNegativeResponse().pipe(
      __map(_r => _r.body as MvtStockDto)
    );
  }

  /**
   * @return successful operation
   */
  stockReelArticleResponse(idArticle: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/mouvements/stockreel/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({body: parseFloat((_r as HttpResponse<any>).body as string)}) as __StrictHttpResponse<number>
      })
    );
  }

  /**
   * @return successful operation
   */
  stockReelArticle(idArticle: number): __Observable<number> {
    return this.stockReelArticleResponse(idArticle).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @return successful operation
   */
  savePhotoResponse(id: number, titre: string, context: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/photos/${id}/${titre}/${context}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }

  /**
   * @return successful operation
   */
  savePhoto(id: number, titre: string, context: string): __Observable<{}> {
    return this.savePhotoResponse(id, titre, context).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Cette méthode permet de charger la liste des utilisateurs
   * @return les Utlisateurs sont trouvés dans la BDD
   */
  findAll_4Response(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/utilisateurs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * Cette méthode permet de charger la liste des utilisateurs
   * @return les Utlisateurs sont trouvés dans la BDD
   */
  findAll_4(): __Observable<Array<UtilisateurDto>> {
    return this.findAll_4Response().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Cette méthode permet de créer ou modifier un utilisateur
   * @return Utlisateur est crée/modifié
   */
  save_2Response(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/utilisateurs/create`,
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
   * Cette méthode permet de créer ou modifier un utilisateur
   * @return Utlisateur est crée/modifié
   */
  save_2(): __Observable<UtilisateurDto> {
    return this.save_2Response().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Cette méthode permet de supprimer un utilisateur par son ID
   */
  delete_3Response(idFournisseur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/utilisateurs/delete/${idFournisseur}`,
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
   * Cette méthode permet de supprimer un utilisateur par son ID
   */
  delete_3(idFournisseur: number): __Observable<null> {
    return this.delete_3Response(idFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Cette méthode permet de rechercher un utilisateur par son email et mot de passe
   * @return Utlisateur est trouvé dans la BDD
   */
  findByEmailAndMotPasseResponse(mail:string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/utilisateurs/${mail}`,
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
   * Cette méthode permet de rechercher un utilisateur par son email et mot de passe
   * @return Utlisateur est trouvé dans la BDD
   */
  findByEmailAndMotPasse(mail:string): __Observable<UtilisateurDto> {
    return this.findByEmailAndMotPasseResponse(mail).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Cette méthode permet de créer ou modifier une vente
   * @return La vente est créée/modifiée
   */
  save_3Response(): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/ventes/create`,
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
   * Cette méthode permet de créer ou modifier une vente
   * @return La vente est créée/modifiée
   */
  save_3(): __Observable<FournisseurDto> {
    return this.save_3Response().pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * Cette méthode permet de supprimer une vente par son ID
   */
  delete_4Response(idVente:number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stockiteasy/ventes/delete/${idVente}`,
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
   * Cette méthode permet de supprimer une vente par son ID
   */
  delete_4(idVente:number): __Observable<null> {
    return this.delete_4Response(idVente).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Cette méthode permet de rechercher une vente par son code
   * @return La vente est trouvée
   */
  findByCodeResponse(codeVente:string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/ventes/${codeVente}`,
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
   * Cette méthode permet de rechercher une vente par son code
   * @return La vente est trouvée
   */
  findByCode(codeVente:string): __Observable<UtilisateurDto> {
    return this.findByCodeResponse(codeVente).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Cette méthode permet de rechercher une vente par son id
   * @return La vente est trouvée
   */
  findById_3Response(idVente:string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/ventes/${idVente}`,
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
   * Cette méthode permet de rechercher une vente par son id
   * @return La vente est trouvée
   */
  findById_3(idVente:string): __Observable<UtilisateurDto> {
    return this.findById_3Response(idVente).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateResponse(body?: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stockiteasy/authentication/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticate(body?: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }
}

module ApiService {
}

export {ApiService}
