import { Component, OnInit } from '@angular/core';
import { AccountResponse } from '../core/interfaces/account-response';
import { Observable } from 'rxjs';
import { AccountsService } from '../core/services/accounts.service';
import { AccountWithRoles } from '../core/interfaces/account-with-roles';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountRolesService } from '../core/services/account-roles.service';
import { Role } from '../core/interfaces/role';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-account-listing',
  templateUrl: './account-listing.component.html',
  styleUrls: ['./account-listing.component.scss'],

})
export class AccountListingComponent implements OnInit {
  public accounts$!: Observable<AccountWithRoles[]>
  public roles$!: Observable<Role[]>;

  public constructor(
    private service: AccountsService, 
    private roleService: AccountRolesService,
    public dialog: MatDialog){}

  public ngOnInit(): void {
    this.accounts$ = this.getAllAccountsFromCompany();
    this.roles$ = this.getAllRoles();
    console.log(this.roles$.subscribe(x => console.log(x)))
  }

  public openCreateMemberDialog = () => {

  }

  private getAllAccountsFromCompany = () : Observable<AccountWithRoles[]> => {
    return this.service.getAllAccountsAtOrganisation('b4f75fed-37bf-40fc-a8b3-f071b41a3fc1');
  }

  private getAllRoles = () : Observable<Role[]> => {
    return this.roleService.getAllRoles();
  }
}
