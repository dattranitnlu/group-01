import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
    }
    tslib_1.__decorate([
        ViewChild('myModal', { static: false }),
        tslib_1.__metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "myModal", void 0);
    tslib_1.__decorate([
        ViewChild('largeModal', { static: false }),
        tslib_1.__metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "largeModal", void 0);
    tslib_1.__decorate([
        ViewChild('smallModal', { static: false }),
        tslib_1.__metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "smallModal", void 0);
    tslib_1.__decorate([
        ViewChild('primaryModal', { static: false }),
        tslib_1.__metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "primaryModal", void 0);
    tslib_1.__decorate([
        ViewChild('successModal', { static: false }),
        tslib_1.__metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "successModal", void 0);
    tslib_1.__decorate([
        ViewChild('warningModal', { static: false }),
        tslib_1.__metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "warningModal", void 0);
    tslib_1.__decorate([
        ViewChild('dangerModal', { static: false }),
        tslib_1.__metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "dangerModal", void 0);
    tslib_1.__decorate([
        ViewChild('infoModal', { static: false }),
        tslib_1.__metadata("design:type", ModalDirective)
    ], ModalsComponent.prototype, "infoModal", void 0);
    ModalsComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'modals.component.html'
        })
    ], ModalsComponent);
    return ModalsComponent;
}());
export { ModalsComponent };
//# sourceMappingURL=modals.component.js.map