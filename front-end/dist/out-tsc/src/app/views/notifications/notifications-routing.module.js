import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts.component';
import { BadgesComponent } from './badges.component';
import { ModalsComponent } from './modals.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Notifications'
        },
        children: [
            {
                path: '',
                redirectTo: 'alerts'
            },
            {
                path: 'alerts',
                component: AlertsComponent,
                data: {
                    title: 'Alerts'
                }
            },
            {
                path: 'badges',
                component: BadgesComponent,
                data: {
                    title: 'Badges'
                }
            },
            {
                path: 'modals',
                component: ModalsComponent,
                data: {
                    title: 'Modals'
                }
            }
        ]
    }
];
var NotificationsRoutingModule = /** @class */ (function () {
    function NotificationsRoutingModule() {
    }
    NotificationsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], NotificationsRoutingModule);
    return NotificationsRoutingModule;
}());
export { NotificationsRoutingModule };
//# sourceMappingURL=notifications-routing.module.js.map