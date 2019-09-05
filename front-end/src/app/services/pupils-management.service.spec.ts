import { TestBed } from '@angular/core/testing';

import { PupilsManagementService } from './pupils-management.service';

describe('PupilsManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PupilsManagementService = TestBed.get(PupilsManagementService);
    expect(service).toBeTruthy();
  });
});
