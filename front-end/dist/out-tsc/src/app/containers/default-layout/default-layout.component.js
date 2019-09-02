import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent(_document) {
        var _this = this;
        this.navItems = navItems;
        this.sidebarMinimized = true;
        this.changes = new MutationObserver(function (mutations) {
            _this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    DefaultLayoutComponent.prototype.ngOnDestroy = function () {
        this.changes.disconnect();
    };
    DefaultLayoutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './default-layout.component.html'
        }),
        tslib_1.__param(0, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());
export { DefaultLayoutComponent };
//# sourceMappingURL=default-layout.component.js.map