import { Component, OnInit } from '@angular/core';
import { AccountResponse } from '../core/interfaces/account-response';
import { Observable } from 'rxjs';
import { AccountsService } from '../core/services/accounts.service';
import { AccountWithRoles } from '../core/interfaces/account-with-roles';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountRolesService } from '../core/services/account-roles.service';
import { Role } from '../core/interfaces/role';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CreateMemberDialogComponent } from 'src/app/shared/dialogs/create-member-dialog/create-member-dialog.component';
import { MemberAccountRequest } from '../core/interfaces/member-account-request';

@Component({
  selector: 'app-account-listing',
  templateUrl: './account-listing.component.html',
  styleUrls: ['./account-listing.component.scss'],

})
export class AccountListingComponent implements OnInit {
  public accounts$!: Observable<AccountWithRoles[]>

  public constructor(
    private service: AccountsService,
    public dialog: MatDialog){}

  public ngOnInit(): void {
    this.accounts$ = this.getAllAccountsFromCompany();
  }

  public openCreateMemberDialog = () => {
    const dialogRef = this.dialog.open(CreateMemberDialogComponent,  {
      height: '100vh',
      width: '500px',
      position: {'right': '0'},
    })

    dialogRef.afterClosed().subscribe((formData: MemberAccountRequest) => {
      this.submitNewMemberAccount(formData);
    })
  }

  private getAllAccountsFromCompany = () : Observable<AccountWithRoles[]> => {
    return this.service.getAllAccountsAtOrganisation('b4f75fed-37bf-40fc-a8b3-f071b41a3fc1');
  }

  private submitNewMemberAccount = (memberAccount: MemberAccountRequest) => {
    this.service.registerNewMember(memberAccount).subscribe({
      next: response => {
        console.log(response);
        this.ngOnInit()
      },
      error: error => {
        console.log(error)
      }
    })
  } 

}
