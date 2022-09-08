import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {
  PageMouvementsStockComponent
} from "./pages/mouvements-stock/page-mouvements-stock/page-mouvements-stock.component";
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
import {PageCategorieComponent} from "./pages/categorie/page-categorie/page-categorie.component";
import {NouvelleCategorieComponent} from "./pages/categorie/nouvelle-categorie/nouvelle-categorie.component";
import {PageUtilisateurComponent} from "./pages/utilisateur/page-utilisateur/page-utilisateur.component";
import {NouvelUtilisateurComponent} from "./pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component";
import {PageProfilComponent} from "./pages/profil/page-profil/page-profil.component";
import {ChangerMotPasseComponent} from "./pages/profil/changer-mot-passe/changer-mot-passe.component";

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
      {
        path: 'clients/nouveau',
        component: NouveauClientFournisseurComponent,
        data: {origin: 'client'}
      },
      {path: 'commandes/clients', component: PageCommandeClientComponent},
      {
        path: 'commandes/clients/nouveau',
        component: NouvelleCommandeClientFournisseurComponent,
        data: {origin: 'client'}
      },

      {path: 'fournisseurs', component: PageFournisseurComponent},
      {
        path: 'fournisseurs/nouveau',
        component: NouveauClientFournisseurComponent,
        data: {origin: 'fournisseur'}
      },
      {path: 'commandes/fournisseurs', component: PageCommandeFournisseurComponent},
      {
        path: 'commandes/fournisseurs/nouveau',
        component: NouvelleCommandeClientFournisseurComponent,
        data: {origin: 'fournisseur'}
      },

      {path: 'categories', component: PageCategorieComponent},
      {path: 'categories/nouveau', component: NouvelleCategorieComponent},

      {path: 'utilisateurs', component: PageUtilisateurComponent},
      {path: 'utilisateurs/nouveau', component: NouvelUtilisateurComponent},

      {path: 'profil', component: PageProfilComponent},
      {path: 'profil/changermotpasse', component: ChangerMotPasseComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
