import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { CustomerTypeComponent } from './views/customer-type/customer-type.component';
import { CustomersComponent } from './views/customers/customers.component';
import { CustomerTypeEditComponent } from './views/customer-type/customer-type-edit.component';
import { CustomerEditComponent } from './views/customers/customer-edit.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersManagementComponent } from './views/users-management/users-management.component';
export var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '404',
        component: P404Component,
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        component: P500Component,
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login Page'
        }
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'customer-type/:id',
                component: CustomerTypeEditComponent
            },
            {
                path: 'customer-type',
                component: CustomerTypeComponent
            },
            {
                path: 'customers/:id',
                component: CustomerEditComponent
            },
            {
                path: 'customers',
                component: CustomersComponent
            },
            {
                path: 'users-management',
                component: UsersManagementComponent
            },
            {
                path: 'dashboard',
                loadChildren: function () { return import('./views/dashboard/dashboard.module').then(function (m) { return m.DashboardModule; }); }
            },
        ]
    },
    { path: '**', component: P404Component }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app.routing.js.map