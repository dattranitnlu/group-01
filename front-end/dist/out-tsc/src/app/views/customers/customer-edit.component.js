import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(route, customerSerice) {
        var _this = this;
        this.route = route;
        this.customerSerice = customerSerice;
        this.customer = {};
        this.id = this.route.snapshot.paramMap.get('id');
        this.customerSerice.get(this.id).subscribe(function (res) {
            _this.customer = res;
            console.log(res);
        });
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
    };
    CustomerEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-customer-edit',
            templateUrl: './customer-edit.component.html',
            styleUrls: ['./customer-edit.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CustomerService])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());
export { CustomerEditComponent };
//# sourceMappingURL=customer-edit.component.js.map