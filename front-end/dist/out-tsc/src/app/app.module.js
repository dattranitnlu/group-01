import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
import { AppComponent } from './app.component';
// Import containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
var APP_CONTAINERS = [
    DefaultLayoutComponent
];
import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule, } from '@coreui/angular';
// Import routing module
import { AppRoutingModule } from './app.routing';
// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import { CustomerTypeComponent } from './views/customer-type/customer-type.component';
import { CustomersComponent } from './views/customers/customers.component';
import { CustomerTypeEditComponent } from './views/customer-type/customer-type-edit.component';
import { CustomerEditComponent } from './views/customers/customer-edit.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersManagementComponent } from './views/users-management/users-management.component';
import { UserAddingModalComponent } from './views/users-management/user-adding-modal/user-adding-modal.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            imports: [
                BrowserModule,
                HttpClientModule,
                BrowserAnimationsModule,
                AppRoutingModule,
                AppAsideModule,
                AppBreadcrumbModule.forRoot(),
                AppFooterModule,
                AppHeaderModule,
                AppSidebarModule,
                PerfectScrollbarModule,
                BsDropdownModule.forRoot(),
                TabsModule.forRoot(),
                ChartsModule,
                DataTablesModule,
                FormsModule,
                NgbModule
            ],
            declarations: [
                AppComponent
            ].concat(APP_CONTAINERS, [
                P404Component,
                P500Component,
                LoginComponent,
                RegisterComponent,
                CustomerTypeComponent,
                CustomersComponent,
                CustomerTypeEditComponent,
                CustomerEditComponent,
                DashboardComponent,
                UsersManagementComponent,
                UserAddingModalComponent
            ]),
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map