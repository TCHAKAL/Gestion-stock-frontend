/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { CommandeFournisseurDto } from './commande-fournisseur-dto';
export interface FournisseurDto {
  id?: number;
  nom?: string;
  prenom?: string;
  mail?: string;
  telephone?: string;
  adresse?: AdresseDto;
  photo?: string;
  idEntreprise?: number;
  commandeFournisseurs?: Array<CommandeFournisseurDto>;
}
