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
import { DetailClientFournisseurComponent } from './composants/client-fournisseur/detail-client-fournisseur/detail-client-fournisseur.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauClientFournisseurComponent } from './composants/client-fournisseur/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { DetailCommandeClientFournisseurComponent } from './composants/client-fournisseur/detail-commande-client-fournisseur/detail-commande-client-fournisseur.component';
import { AccordionDetailCommandeClientFournisseurComponent } from './composants/client-fournisseur/accordion-detail-commande-client-fournisseur/accordion-detail-commande-client-fournisseur.component';
import { PageCommandeClientComponent } from './pages/commande-client/page-commande-client/page-commande-client.component';
import { PageCommandeFournisseurComponent } from './pages/commande-fournisseur/page-commande-fournisseur/page-commande-fournisseur.component';
import { NouvelleCommandeClientFournisseurComponent } from './composants/client-fournisseur/nouvelle-commande-client-fournisseur/nouvelle-commande-client-fournisseur.component';
import { PageCategorieComponent } from './pages/categorie/page-categorie/page-categorie.component';
import { DetailCategorieComponent } from './pages/categorie/detail-categorie/detail-categorie.component';
import { NouvelleCategorieComponent } from './pages/categorie/nouvelle-categorie/nouvelle-categorie.component';

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
    NouveauClientFournisseurComponent,
    DetailCommandeClientFournisseurComponent,
    AccordionDetailCommandeClientFournisseurComponent,
    PageCommandeClientComponent,
    PageCommandeFournisseurComponent,
    NouvelleCommandeClientFournisseurComponent,
    PageCategorieComponent,
    DetailCategorieComponent,
    NouvelleCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
