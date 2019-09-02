import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.isCollapsed = false;
        this.iconCollapse = 'icon-arrow-up';
    }
    FormsComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    FormsComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    FormsComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
        this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
    };
    FormsComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'forms.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());
export { FormsComponent };
//# sourceMappingURL=forms.component.js.map