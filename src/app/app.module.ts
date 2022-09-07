import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './pages/articles/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMouvementsStockComponent } from './pages/mouvements-stock/page-mouvements-stock/page-mouvements-stock.component';
import { DetailMouvementsStockComponent } from './pages/mouvements-stock/detail-mouvements-stock/detail-mouvements-stock.component';
import { AccordionDetailMouvementsStockComponent } from './pages/mouvements-stock/accordion-detail-mouvements-stock/accordion-detail-mouvements-stock.component';
import { CorrectionStockComponent } from './pages/mouvements-stock/correction-stock/correction-stock.component';
import { DetailClientFournisseurComponent } from './composants/detail-client-fournisseur/detail-client-fournisseur.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauClientFournisseurComponent } from './composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    PageMouvementsStockComponent,
    DetailMouvementsStockComponent,
    AccordionDetailMouvementsStockComponent,
    CorrectionStockComponent,
    DetailClientFournisseurComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauClientFournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
