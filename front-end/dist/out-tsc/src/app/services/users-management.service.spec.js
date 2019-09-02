import { TestBed } from '@angular/core/testing';
import { UsersManagementService } from './users-management.service';
describe('UsersManagementService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(UsersManagementService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=users-management.service.spec.js.map