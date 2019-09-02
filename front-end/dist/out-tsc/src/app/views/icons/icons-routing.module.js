import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreUIIconsComponent } from './coreui-icons.component';
import { FlagsComponent } from './flags.component';
import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Icons'
        },
        children: [
            {
                path: '',
                redirectTo: 'coreui-icons'
            },
            {
                path: 'coreui-icons',
                component: CoreUIIconsComponent,
                data: {
                    title: 'CoreUI Icons'
                }
            },
            {
                path: 'flags',
                component: FlagsComponent,
                data: {
                    title: 'Flags'
                }
            },
            {
                path: 'font-awesome',
                component: FontAwesomeComponent,
                data: {
                    title: 'Font Awesome'
                }
            },
            {
                path: 'simple-line-icons',
                component: SimpleLineIconsComponent,
                data: {
                    title: 'Simple Line Icons'
                }
            }
        ]
    }
];
var IconsRoutingModule = /** @class */ (function () {
    function IconsRoutingModule() {
    }
    IconsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], IconsRoutingModule);
    return IconsRoutingModule;
}());
export { IconsRoutingModule };
//# sourceMappingURL=icons-routing.module.js.map