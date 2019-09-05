import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersManagementComponent } from './views/users-management/users-management.component';
import { UserAddingModalComponent } from './views/users-management/user-adding-modal/user-adding-modal.component';
import { UserEditingModalComponent } from './views/users-management/user-editing-modal/user-editing-modal.component';
import { QuestionsManagementComponent } from './views/questions-management/questions-management.component';
import { ClassesManagementComponent } from './views/classes-management/classes-management.component';
import { ClassAddingModalComponent } from './views/classes-management/class-adding-modal/class-adding-modal.component';
import { ClassEditingModalComponent } from './views/classes-management/class-editing-modal/class-editing-modal.component';
import { PupilsManagementComponent } from './views/pupils-management/pupils-management.component';
import { PupilAddingModalComponent } from './views/pupils-management/pupil-adding-modal/pupil-adding-modal.component';
import { PupilEditingModalComponent } from './views/pupils-management/pupil-editing-modal/pupil-editing-modal.component';

@NgModule({
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
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UsersManagementComponent,
    UserAddingModalComponent,
    UserEditingModalComponent,
    QuestionsManagementComponent,
    ClassesManagementComponent,
    ClassAddingModalComponent,
    ClassEditingModalComponent,
    PupilsManagementComponent,
    PupilAddingModalComponent,
    PupilEditingModalComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
