import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMouvementsStockComponent} from "./pages/mouvements-stock/page-mouvements-stock/page-mouvements-stock.component";
import {PageClientComponent} from "./pages/client/page-client/page-client.component";
import {PageFournisseurComponent} from "./pages/fournisseur/page-fournisseur/page-fournisseur.component";
import {
  NouveauClientFournisseurComponent
} from "./composants/client-fournisseur/nouveau-client-fournisseur/nouveau-client-fournisseur.component";
import {PageCommandeClientComponent} from "./pages/commande-client/page-commande-client/page-commande-client.component";
import {
  PageCommandeFournisseurComponent
} from "./pages/commande-fournisseur/page-commande-fournisseur/page-commande-fournisseur.component";
import {
  NouvelleCommandeClientFournisseurComponent
} from "./composants/client-fournisseur/nouvelle-commande-client-fournisseur/nouvelle-commande-client-fournisseur.component";

const routes: Routes = [
  {path: 'login', component: PageLoginComponent},
  {path: 'inscrire', component: PageInscriptionComponent},
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {path: 'statistiques', component: PageStatistiquesComponent},
      {path: 'articles', component: PageArticleComponent},
      {path: 'articles/nouveau', component: NouvelArticleComponent},
      {path: 'mouvements', component: PageMouvementsStockComponent},
      {path: 'clients', component: PageClientComponent},
      {path: 'clients/nouveau', component: NouveauClientFournisseurComponent},
      {path: 'fournisseurs', component: PageFournisseurComponent},
      {path: 'fournisseurs/nouveau', component: NouveauClientFournisseurComponent},
      {path: 'commandes/clients', component: PageCommandeClientComponent},
      {path: 'commandes/fournisseurs', component: PageCommandeFournisseurComponent},

      {path: 'commandes/clients/nouveau', component: NouvelleCommandeClientFournisseurComponent},
      {path: 'commandes/fournisseurs/nouveau', component: NouvelleCommandeClientFournisseurComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
