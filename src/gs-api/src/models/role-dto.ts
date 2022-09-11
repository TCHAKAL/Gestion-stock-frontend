/* tslint:disable */
import { UtilisateurDto } from './utilisateur-dto';
export interface RoleDto {
  id?: number;
  roleName?: string;
  utilisateur?: UtilisateurDto;
}
