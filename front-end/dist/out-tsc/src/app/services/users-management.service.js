import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
var UsersManagementService = /** @class */ (function () {
    function UsersManagementService(apiService) {
        this.apiService = apiService;
    }
    UsersManagementService.prototype.list = function () {
        return this.apiService.get(this.apiService.apiUrl.user);
    };
    UsersManagementService.prototype.get = function (id) {
        return this.apiService.get(this.apiService.apiUrl.user + "/" + id);
    };
    UsersManagementService.prototype.post = function (user) {
        return this.apiService.post("" + this.apiService.apiUrl.user, user);
    };
    UsersManagementService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], UsersManagementService);
    return UsersManagementService;
}());
export { UsersManagementService };
//# sourceMappingURL=users-management.service.js.map