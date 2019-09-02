import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
describe('ApiService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ApiService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=api.service.spec.js.map