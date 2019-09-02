import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsersManagementService } from '../../services/users-management.service';
import { Subject } from 'rxjs';
var UsersManagementComponent = /** @class */ (function () {
    function UsersManagementComponent(usersManagementService) {
        this.usersManagementService = usersManagementService;
        this.aUser = {};
        this.dtOptions = {};
        // We use this trigger because fetching the list of persons can be quite long,
        // thus we ensure the data is fetched before rendering
        this.dtTrigger = new Subject();
    }
    UsersManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 7
        };
        this.usersManagementService.list().subscribe(function (res) {
            _this.users = res.data;
            _this.dtTrigger.next();
            console.log(res);
        });
    };
    UsersManagementComponent.prototype.getUser = function () {
        var _this = this;
        // this.id = this.route.snapshot.paramMap.get('id');
        this.usersManagementService.get(this.id).subscribe(function (res) {
            console.log(res);
            return _this.aUser = res;
        });
    };
    UsersManagementComponent = tslib_1.__decorate([
        Component({
            selector: 'app-users-management',
            templateUrl: './users-management.component.html',
            styleUrls: ['./users-management.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UsersManagementService])
    ], UsersManagementComponent);
    return UsersManagementComponent;
}());
export { UsersManagementComponent };
//# sourceMappingURL=users-management.component.js.map