import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
var ChartJSModule = /** @class */ (function () {
    function ChartJSModule() {
    }
    ChartJSModule = tslib_1.__decorate([
        NgModule({
            imports: [
                ChartJSRoutingModule,
                ChartsModule
            ],
            declarations: [ChartJSComponent]
        })
    ], ChartJSModule);
    return ChartJSModule;
}());
export { ChartJSModule };
//# sourceMappingURL=chartjs.module.js.map