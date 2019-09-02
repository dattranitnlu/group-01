import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(customerService) {
        this.customerService = customerService;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.list().subscribe(function (res) {
            _this.customers = res;
        });
    };
    CustomersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-customers',
            templateUrl: './customers.component.html',
            styleUrls: ['./customers.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CustomerService])
    ], CustomersComponent);
    return CustomersComponent;
}());
export { CustomersComponent };
//# sourceMappingURL=customers.component.js.map