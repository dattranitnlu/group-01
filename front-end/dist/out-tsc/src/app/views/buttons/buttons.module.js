import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ButtonsComponent } from './buttons.component';
import { BrandButtonsComponent } from './brand-buttons.component';
// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownsComponent } from './dropdowns.component';
// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';
// Angular
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                ButtonsRoutingModule,
                BsDropdownModule.forRoot(),
                FormsModule
            ],
            declarations: [
                ButtonsComponent,
                DropdownsComponent,
                BrandButtonsComponent
            ]
        })
    ], ButtonsModule);
    return ButtonsModule;
}());
export { ButtonsModule };
//# sourceMappingURL=buttons.module.js.map