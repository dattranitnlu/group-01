import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
var ColorsComponent = /** @class */ (function () {
    function ColorsComponent(_document) {
        this._document = _document;
    }
    ColorsComponent.prototype.themeColors = function () {
        var _this = this;
        Array.from(this._document.querySelectorAll('.theme-color')).forEach(function (el) {
            var background = getStyle('background-color', el);
            var table = _this._document.createElement('table');
            table.innerHTML = "\n        <table class=\"w-100\">\n          <tr>\n            <td class=\"text-muted\">HEX:</td>\n            <td class=\"font-weight-bold\">" + rgbToHex(background) + "</td>\n          </tr>\n          <tr>\n            <td class=\"text-muted\">RGB:</td>\n            <td class=\"font-weight-bold\">" + background + "</td>\n          </tr>\n        </table>\n      ";
            el.parentNode.appendChild(table);
        });
    };
    ColorsComponent.prototype.ngOnInit = function () {
        this.themeColors();
    };
    ColorsComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'colors.component.html'
        }),
        tslib_1.__param(0, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], ColorsComponent);
    return ColorsComponent;
}());
export { ColorsComponent };
//# sourceMappingURL=colors.component.js.map