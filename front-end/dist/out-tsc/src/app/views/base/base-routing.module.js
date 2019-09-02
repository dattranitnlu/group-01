import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Base'
        },
        children: [
            {
                path: '',
                redirectTo: 'cards'
            },
            {
                path: 'cards',
                component: CardsComponent,
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'forms',
                component: FormsComponent,
                data: {
                    title: 'Forms'
                }
            },
            {
                path: 'switches',
                component: SwitchesComponent,
                data: {
                    title: 'Switches'
                }
            },
            {
                path: 'tables',
                component: TablesComponent,
                data: {
                    title: 'Tables'
                }
            },
            {
                path: 'tabs',
                component: TabsComponent,
                data: {
                    title: 'Tabs'
                }
            },
            {
                path: 'carousels',
                component: CarouselsComponent,
                data: {
                    title: 'Carousels'
                }
            },
            {
                path: 'collapses',
                component: CollapsesComponent,
                data: {
                    title: 'Collapses'
                }
            },
            {
                path: 'paginations',
                component: PaginationsComponent,
                data: {
                    title: 'Pagination'
                }
            },
            {
                path: 'popovers',
                component: PopoversComponent,
                data: {
                    title: 'Popover'
                }
            },
            {
                path: 'progress',
                component: ProgressComponent,
                data: {
                    title: 'Progress'
                }
            },
            {
                path: 'tooltips',
                component: TooltipsComponent,
                data: {
                    title: 'Tooltips'
                }
            }
        ]
    }
];
var BaseRoutingModule = /** @class */ (function () {
    function BaseRoutingModule() {
    }
    BaseRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], BaseRoutingModule);
    return BaseRoutingModule;
}());
export { BaseRoutingModule };
//# sourceMappingURL=base-routing.module.js.map