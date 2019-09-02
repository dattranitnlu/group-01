import { TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
describe('CustomerService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CustomerService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=customer.service.spec.js.map