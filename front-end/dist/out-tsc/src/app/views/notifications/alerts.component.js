import * as tslib_1 from "tslib";
import { Component, SecurityContext, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
// such override allows to keep some initial values
export function getAlertConfig() {
    return Object.assign(new AlertConfig(), { type: 'success' });
}
var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(sanitizer) {
        this.dismissible = true;
        this.alerts = [
            {
                type: 'success',
                msg: "You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "Better check yourself, you're not looking too good."
            }
        ];
        this.alertsHtml = [
            {
                type: 'success',
                msg: "<strong>Well done!</strong> You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "<strong>Heads up!</strong> This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "<strong>Warning!</strong> Better check yourself, you're not looking too good."
            }
        ];
        this.index = 0;
        this.messages = [
            'You successfully read this important alert message.',
            'Now this text is different from what it was before. Go ahead and click the button one more time',
            'Well done! Click reset button and you\'ll see the first message'
        ];
        this.alertsDismiss = [];
        this.alertsHtml = this.alertsHtml.map(function (alert) { return ({
            type: alert.type,
            msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
        }); });
    }
    AlertsComponent.prototype.reset = function () {
        this.alerts = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    };
    AlertsComponent.prototype.changeText = function () {
        if (this.messages.length - 1 !== this.index) {
            this.index++;
        }
    };
    AlertsComponent.prototype.add = function () {
        this.alertsDismiss.push({
            type: 'info',
            msg: "This alert will be closed in 5 seconds (added: " + new Date().toLocaleTimeString() + ")",
            timeout: 5000
        });
    };
    AlertsComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'alerts.component.html',
            encapsulation: ViewEncapsulation.None,
            styles: [
                "\n  .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  "
            ],
            providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], AlertsComponent);
    return AlertsComponent;
}());
export { AlertsComponent };
//# sourceMappingURL=alerts.component.js.map