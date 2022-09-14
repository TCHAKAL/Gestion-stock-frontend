/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MvtStockDto } from '../../../app/models/mvt-stock-dto';
@Injectable({
  providedIn: 'root',
})
class StockiteasymouvementsService extends __BaseService {
  static readonly correctionStockPositivePath = '/stockiteasy/mouvements/stockreel/correction/positive';
  static readonly entreeStockPath = '/stockiteasy/mouvements/stockreel/entree';
  static readonly sortieStockPath = '/stockiteasy/mouvements/stockreel/sortie';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  correctionStockPositiveResponse(body?: MvtStockDto): __Observable<__StrictHttpResponse<MvtStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/mouvements/stockreel/correction/positive`,
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
   * @param body undefined
   * @return successful operation
   */
  correctionStockPositive(body?: MvtStockDto): __Observable<MvtStockDto> {
    return this.correctionStockPositiveResponse(body).pipe(
      __map(_r => _r.body as MvtStockDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  entreeStockResponse(body?: MvtStockDto): __Observable<__StrictHttpResponse<MvtStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/mouvements/stockreel/entree`,
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
   * @param body undefined
   * @return successful operation
   */
  entreeStock(body?: MvtStockDto): __Observable<MvtStockDto> {
    return this.entreeStockResponse(body).pipe(
      __map(_r => _r.body as MvtStockDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  sortieStockResponse(body?: MvtStockDto): __Observable<__StrictHttpResponse<MvtStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stockiteasy/mouvements/stockreel/sortie`,
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
   * @param body undefined
   * @return successful operation
   */
  sortieStock(body?: MvtStockDto): __Observable<MvtStockDto> {
    return this.sortieStockResponse(body).pipe(
      __map(_r => _r.body as MvtStockDto)
    );
  }
}

module StockiteasymouvementsService {
}

export { StockiteasymouvementsService }
