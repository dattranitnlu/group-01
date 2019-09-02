import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
var PaginationsComponent = /** @class */ (function () {
    function PaginationsComponent() {
        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;
        this.maxSize = 5;
        this.bigTotalItems = 675;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.currentPager = 4;
    }
    PaginationsComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    PaginationsComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    PaginationsComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'paginations.component.html',
            styles: ['.pager li.btn:active { box-shadow: none; }'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PaginationsComponent);
    return PaginationsComponent;
}());
export { PaginationsComponent };
//# sourceMappingURL=paginations.component.js.map