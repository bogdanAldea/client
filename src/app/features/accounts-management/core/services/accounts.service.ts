import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountResponse } from '../interfaces/account-response';
import { ApiRoutes } from 'src/app/configurations/api-routes/api-routes';
import { AccountWithRoles } from '../interfaces/account-with-roles';
import { MemberAccountRequest } from '../interfaces/member-account-request';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  public constructor(private httpClient: HttpClient) { }

  public getAllAccountsAtOrganisation = (organisationId: string) : Observable<AccountWithRoles[]> => {
    const apiUrl: string = ApiRoutes.Organisation.Base;
    const endpoint: string = ApiRoutes.Organisation.AllAccounts;
    return this.httpClient.get<AccountWithRoles[]>(`${apiUrl}/${organisationId}/${endpoint}`);
  }

  public getUserAccount = (userAccountId: string) : Observable<AccountResponse> => {
    return this.httpClient.get<AccountResponse>(`${ApiRoutes.Account.Accounts}/${userAccountId}`);
  }

  public registerNewMember = (memberRequest: MemberAccountRequest): Observable<any> => {
    return this.httpClient.post<MemberAccountRequest>(`${ApiRoutes.Account.Accounts}`, memberRequest);
  }
}
