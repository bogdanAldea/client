import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/configurations/api-routes/api-routes';
import { Role } from '../interfaces/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountRolesService {

  public constructor(private httpClient: HttpClient) { }

  public getAllRoles = () : Observable<Role[]> => {
    return this.httpClient.get<Role[]>(ApiRoutes.Roles.Base);
  }
}
