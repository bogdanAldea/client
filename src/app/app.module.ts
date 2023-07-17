import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InternshipManagementModule } from './features/internship-management/internship-management.module';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { AccountsManagementModule } from './features/accounts-management/accounts-management.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateMemberDialogComponent } from './src/app/shared/dialogs/create-member-dialog/create-member-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMemberDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    InternshipManagementModule,
    AuthenticationModule,
    AccountsManagementModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
