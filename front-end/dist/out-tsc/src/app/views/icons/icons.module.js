import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CoreUIIconsComponent } from './coreui-icons.component';
import { FlagsComponent } from './flags.component';
import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';
import { IconsRoutingModule } from './icons-routing.module';
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = tslib_1.__decorate([
        NgModule({
            imports: [IconsRoutingModule],
            declarations: [
                CoreUIIconsComponent,
                FlagsComponent,
                FontAwesomeComponent,
                SimpleLineIconsComponent
            ]
        })
    ], IconsModule);
    return IconsModule;
}());
export { IconsModule };
//# sourceMappingURL=icons.module.js.map