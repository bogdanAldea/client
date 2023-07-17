import { TestBed } from '@angular/core/testing';

import { AccountRolesService } from './account-roles.service';

describe('AccountRolesService', () => {
  let service: AccountRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
