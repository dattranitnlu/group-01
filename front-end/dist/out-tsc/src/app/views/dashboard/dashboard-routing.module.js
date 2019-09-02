import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
var routes = [
    {
        path: '',
        component: DashboardComponent,
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
export { DashboardRoutingModule };
//# sourceMappingURL=dashboard-routing.module.js.map