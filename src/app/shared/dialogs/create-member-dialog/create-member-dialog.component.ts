import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MemberAccountRequest } from 'src/app/features/accounts-management/core/interfaces/member-account-request';
import { Role } from 'src/app/features/accounts-management/core/interfaces/role';
import { AccountRolesService } from 'src/app/features/accounts-management/core/services/account-roles.service';

@Component({
  selector: 'app-create-member-dialog',
  templateUrl: './create-member-dialog.component.html',
  styleUrls: ['./create-member-dialog.component.scss']
})
export class CreateMemberDialogComponent implements OnInit {
  public roles$: Observable<Role[]> | undefined;
  public selectedRoles: Role[] = [];

  public constructor(private roleService: AccountRolesService, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<CreateMemberDialogComponent>) {}

  public ngOnInit(): void {
    this.roles$ = this.getSystemRoles();
    console.log(this.roles$.subscribe(x => console.log(x)))
  }

  public memberRegistrationForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    roles: ['', [Validators.required]],
  })
  
  public getSystemRoles = () => {
    return this.roleService.getAllRoles();
  }

  public showSelectedRoleNames = (selectedRoles: Role[]): string => {
    if (!selectedRoles || selectedRoles.length === 0) return '';
    return selectedRoles.map((role: Role) => role.name).join(', ');
  }

  public getFormData = () => {
    const x: MemberAccountRequest = {
      firstName: this.memberRegistrationForm.value.firstName!,
      lastName: this.memberRegistrationForm.value.lastName!,
      email: this.memberRegistrationForm.value.email!,
      roles: this.selectedRoles.map(role => role.id),
      companyId: 'b4f75fed-37bf-40fc-a8b3-f071b41a3fc1'
    }
    this.dialogRef.close(x);
  }
}
