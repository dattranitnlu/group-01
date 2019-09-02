import { async, TestBed } from '@angular/core/testing';
import { CustomerTypeEditComponent } from './customer-type-edit.component';
describe('CustomerTypeEditComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CustomerTypeEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CustomerTypeEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=customer-type-edit.component.spec.js.map