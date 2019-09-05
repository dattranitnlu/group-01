import { TestBed } from '@angular/core/testing';

import { ClassesManagementService } from './classes-management.service';

describe('ClassesManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassesManagementService = TestBed.get(ClassesManagementService);
    expect(service).toBeTruthy();
  });
});
