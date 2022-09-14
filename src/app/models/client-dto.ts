/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface ClientDto {
  id?: number;
  idEntreprise?: number;
  nom?: string;
  prenom?: string;
  mail?: string;
  telephone?: string;
  adresse?: AdresseDto;
  photo?: string;
}
