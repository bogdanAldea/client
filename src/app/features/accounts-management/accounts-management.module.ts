import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsManagementRoutingModule } from './accounts-management-routing.module';
import { AccountListingComponent } from './account-listing/account-listing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AccountListingComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AccountsManagementRoutingModule,
    SharedModule
  ]
})
export class AccountsManagementModule { }
