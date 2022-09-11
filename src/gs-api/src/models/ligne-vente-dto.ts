/* tslint:disable */
import { VenteDto } from './vente-dto';
import { ArticleDto } from './article-dto';
export interface LigneVenteDto {
  id?: number;
  vente?: VenteDto;
  quantite?: number;
  article?: ArticleDto;
}
