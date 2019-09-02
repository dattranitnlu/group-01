import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerTypeService } from '../../services/customer-type.service';
var CustomerTypeEditComponent = /** @class */ (function () {
    function CustomerTypeEditComponent(route, customerTypeService) {
        var _this = this;
        this.route = route;
        this.customerTypeService = customerTypeService;
        this.customerType = {};
        this.id = this.route.snapshot.paramMap.get('id');
        this.customerTypeService.get(this.id).subscribe(function (res) {
            _this.customerType = res;
            console.log(res);
        });
    }
    CustomerTypeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerTypeService.get(this.id).subscribe(function (res) {
            _this.customerType = res;
        });
    };
    CustomerTypeEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-customer-type-edit',
            templateUrl: './customer-type-edit.component.html',
            styleUrls: ['./customer-type-edit.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CustomerTypeService])
    ], CustomerTypeEditComponent);
    return CustomerTypeEditComponent;
}());
export { CustomerTypeEditComponent };
//# sourceMappingURL=customer-type-edit.component.js.map