import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
var CarouselsComponent = /** @class */ (function () {
    function CarouselsComponent() {
        this.myInterval = 6000;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    CarouselsComponent.prototype.ngOnDestroy = function () {
        this.myInterval = 0;
        this.noWrapSlides = true;
        this.myInterval = false;
    };
    CarouselsComponent.prototype.addSlide = function () {
        this.slides.push({
            image: "https://lorempixel.com/900/500/abstract/" + (this.slides.length % 8 + 1) + "/"
        });
    };
    CarouselsComponent.prototype.removeSlide = function (index) {
        var toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    };
    CarouselsComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'carousels.component.html',
            providers: [
                { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CarouselsComponent);
    return CarouselsComponent;
}());
export { CarouselsComponent };
//# sourceMappingURL=carousels.component.js.map