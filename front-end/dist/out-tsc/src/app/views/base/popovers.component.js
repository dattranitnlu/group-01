import * as tslib_1 from "tslib";
import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var PopoversComponent = /** @class */ (function () {
    function PopoversComponent(sanitizer) {
        this.title = 'Welcome word';
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-warning\">Never trust not sanitized <code>HTML</code>!!!</span>";
        this.html = sanitizer.sanitize(SecurityContext.HTML, this.html);
    }
    PopoversComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'popovers.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], PopoversComponent);
    return PopoversComponent;
}());
export { PopoversComponent };
//# sourceMappingURL=popovers.component.js.map