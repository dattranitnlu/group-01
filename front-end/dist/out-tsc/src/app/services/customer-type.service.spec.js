import { TestBed } from '@angular/core/testing';
import { CustomerTypeService } from './customer-type.service';
describe('CustomerTypeService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CustomerTypeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=customer-type.service.spec.js.map