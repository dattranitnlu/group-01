import { TestBed } from '@angular/core/testing';

import { UserTypeService } from './user-type.service';

describe('UserTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTypeService = TestBed.get(UserTypeService);
    expect(service).toBeTruthy();
  });
});
