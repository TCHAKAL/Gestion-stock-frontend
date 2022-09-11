/* tslint:disable */
import { CategorieDto } from './categorie-dto';
export interface ArticleDto {
  id?: number;
  code?: string;
  designation?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
  photo?: string;
  categorie?: CategorieDto;
  idEntreprise?: number;
}
