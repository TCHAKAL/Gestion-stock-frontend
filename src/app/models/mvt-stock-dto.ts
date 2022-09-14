/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface MvtStockDto {
  id?: number;
  article?: ArticleDto;
  quantite?: number;
  dateMvt?: number;
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POSITIVE' | 'CORRECTION_NEGATIVE';
  sourceMvtStock?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  idEntreprise?: number;
}
