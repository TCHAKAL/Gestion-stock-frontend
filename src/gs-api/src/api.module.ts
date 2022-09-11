/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { StockiteasyarticlesService } from './services/stockiteasyarticles.service';
import { ApiService } from './services/api.service';
import { StockiteasycategoriesService } from './services/stockiteasycategories.service';
import { StockiteasyclientsService } from './services/stockiteasyclients.service';
import { StockiteasycommandeClientsService } from './services/stockiteasycommande-clients.service';
import { StockiteasycommandeFournisseursService } from './services/stockiteasycommande-fournisseurs.service';
import { StockiteasyentreprisesService } from './services/stockiteasyentreprises.service';
import { StockiteasymouvementsService } from './services/stockiteasymouvements.service';
import { StockiteasyutilisateursService } from './services/stockiteasyutilisateurs.service';
import { StockiteasyventesService } from './services/stockiteasyventes.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    StockiteasyarticlesService,
    ApiService,
    StockiteasycategoriesService,
    StockiteasyclientsService,
    StockiteasycommandeClientsService,
    StockiteasycommandeFournisseursService,
    StockiteasyentreprisesService,
    StockiteasymouvementsService,
    StockiteasyutilisateursService,
    StockiteasyventesService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
