import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var CollapsesComponent = /** @class */ (function () {
    function CollapsesComponent() {
        this.isCollapsed = false;
    }
    CollapsesComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    CollapsesComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    CollapsesComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'collapses.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CollapsesComponent);
    return CollapsesComponent;
}());
export { CollapsesComponent };
//# sourceMappingURL=collapses.component.js.map