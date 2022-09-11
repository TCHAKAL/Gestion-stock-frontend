/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface EntrepriseDto {
  id?: number;
  nom?: string;
  email?: string;
  description?: string;
  codeFiscal?: string;
  photo?: string;
  adresse?: AdresseDto;
  telephone?: string;
  siteWeb?: string;
}
