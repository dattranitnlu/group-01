import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartJSComponent } from './chartjs.component';
var routes = [
    {
        path: '',
        component: ChartJSComponent,
        data: {
            title: 'Charts'
        }
    }
];
var ChartJSRoutingModule = /** @class */ (function () {
    function ChartJSRoutingModule() {
    }
    ChartJSRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ChartJSRoutingModule);
    return ChartJSRoutingModule;
}());
export { ChartJSRoutingModule };
//# sourceMappingURL=chartjs-routing.module.js.map