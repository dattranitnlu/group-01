import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
// import { HttpClient } from 'selenium-webdriver/http';
var CustomerTypeService = /** @class */ (function () {
    function CustomerTypeService(apiService) {
        this.apiService = apiService;
    }
    CustomerTypeService.prototype.list = function () {
        return this.apiService.get(this.apiService.apiUrl.customerType);
    };
    CustomerTypeService.prototype.get = function (id) {
        return this.apiService.get(this.apiService.apiUrl.customerType + "/" + id);
    };
    CustomerTypeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], CustomerTypeService);
    return CustomerTypeService;
}());
export { CustomerTypeService };
//# sourceMappingURL=customer-type.service.js.map