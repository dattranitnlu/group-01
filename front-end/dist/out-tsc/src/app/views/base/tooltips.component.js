import * as tslib_1 from "tslib";
import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent(sanitizer) {
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>";
        this.html = sanitizer.sanitize(SecurityContext.HTML, this.html);
    }
    TooltipsComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'tooltips.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], TooltipsComponent);
    return TooltipsComponent;
}());
export { TooltipsComponent };
//# sourceMappingURL=tooltips.component.js.map