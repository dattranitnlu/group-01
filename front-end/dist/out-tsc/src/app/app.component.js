import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
var AppComponent = /** @class */ (function () {
    function AppComponent(router, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        }),
        tslib_1.__metadata("design:paramtypes", [Router, NgbModal])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map