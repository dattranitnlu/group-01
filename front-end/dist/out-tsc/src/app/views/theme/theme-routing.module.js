import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Theme'
        },
        children: [
            {
                path: '',
                redirectTo: 'colors'
            },
            {
                path: 'colors',
                component: ColorsComponent,
                data: {
                    title: 'Colors'
                }
            },
            {
                path: 'typography',
                component: TypographyComponent,
                data: {
                    title: 'Typography'
                }
            }
        ]
    }
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());
export { ThemeRoutingModule };
//# sourceMappingURL=theme-routing.module.js.map