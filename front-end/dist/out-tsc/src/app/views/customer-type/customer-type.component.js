import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CustomerTypeService } from '../../services/customer-type.service';
var CustomerTypeComponent = /** @class */ (function () {
    function CustomerTypeComponent(customerTypeService) {
        this.customerTypeService = customerTypeService;
    }
    CustomerTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerTypeService.list().subscribe(function (res) {
            _this.customerTypes = res;
        });
    };
    CustomerTypeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-customer-type',
            templateUrl: './customer-type.component.html',
            styleUrls: ['./customer-type.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CustomerTypeService])
    ], CustomerTypeComponent);
    return CustomerTypeComponent;
}());
export { CustomerTypeComponent };
//# sourceMappingURL=customer-type.component.js.map