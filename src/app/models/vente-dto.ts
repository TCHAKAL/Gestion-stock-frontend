/* tslint:disable */
import { LigneVenteDto } from './ligne-vente-dto';
export interface VenteDto {
  id?: number;
  code?: string;
  dateVente?: number;
  commentaire?: string;
  idEntreprise?: number;
  ligneVente?: Array<LigneVenteDto>;
}
