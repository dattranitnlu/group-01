import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons.component';
import { DropdownsComponent } from './dropdowns.component';
import { BrandButtonsComponent } from './brand-buttons.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Buttons'
        },
        children: [
            {
                path: '',
                redirectTo: 'buttons'
            },
            {
                path: 'buttons',
                component: ButtonsComponent,
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'dropdowns',
                component: DropdownsComponent,
                data: {
                    title: 'Dropdowns'
                }
            },
            {
                path: 'brand-buttons',
                component: BrandButtonsComponent,
                data: {
                    title: 'Brand buttons'
                }
            }
        ]
    }
];
var ButtonsRoutingModule = /** @class */ (function () {
    function ButtonsRoutingModule() {
    }
    ButtonsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ButtonsRoutingModule);
    return ButtonsRoutingModule;
}());
export { ButtonsRoutingModule };
//# sourceMappingURL=buttons-routing.module.js.map