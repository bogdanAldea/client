import { Component, OnInit } from '@angular/core';
import { AccountResponse } from 'src/app/features/accounts-management/core/interfaces/account-response';
import { AccountsService } from 'src/app/features/accounts-management/core/services/accounts.service';
import  jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-with-navigation',
  templateUrl: './layout-with-navigation.component.html',
  styleUrls: ['./layout-with-navigation.component.scss']
})
export class LayoutWithNavigationComponent implements OnInit {
  public loggedUserAccount$!: Observable<AccountResponse>;

  public constructor(private accountService: AccountsService) {}
  
  public ngOnInit(): void {
    const accountid: string | null  = this.getAccountIdentifierFromAccessToken();
    this.loggedUserAccount$ = this.getLoggedInUserAccount(accountid!);
  }

  private getAccountIdentifierFromAccessToken = () : string | null => {
    const access_token: string | null = localStorage.getItem("access_token")
    try {
      const decodedToken: any = jwt_decode(access_token!)
      return decodedToken.account_identifier
    } catch (error) {
      console.error("Failed to decode JWT.", error);
      return null;
    }
  }

  private getLoggedInUserAccount = (accountid: string) => {
    return this.accountService.getUserAccount(accountid)
  }

}
