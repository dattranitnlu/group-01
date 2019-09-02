import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
var CustomerService = /** @class */ (function () {
    function CustomerService(apiService) {
        this.apiService = apiService;
    }
    CustomerService.prototype.list = function () {
        return this.apiService.get(this.apiService.apiUrl.customer);
    };
    CustomerService.prototype.get = function (id) {
        return this.apiService.get(this.apiService.apiUrl.customer + "/" + id);
    };
    CustomerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], CustomerService);
    return CustomerService;
}());
export { CustomerService };
//# sourceMappingURL=customer.service.js.map