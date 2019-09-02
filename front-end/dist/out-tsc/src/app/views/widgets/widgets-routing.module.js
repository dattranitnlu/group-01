import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets.component';
var routes = [
    {
        path: '',
        component: WidgetsComponent,
        data: {
            title: 'Widgets'
        }
    }
];
var WidgetsRoutingModule = /** @class */ (function () {
    function WidgetsRoutingModule() {
    }
    WidgetsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], WidgetsRoutingModule);
    return WidgetsRoutingModule;
}());
export { WidgetsRoutingModule };
//# sourceMappingURL=widgets-routing.module.js.map