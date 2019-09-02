import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.host = "http://localhost:8081";
        this.apiUrl = {
            student: this.host + "/students",
            userType: this.host + "/user-types",
            user: this.host + "/user",
            classes: this.host + "/class",
            semester: this.host + "/semester",
            exam: this.host + "/exam",
            answersheet: this.host + "/answersheet",
            test: this.host + "/test",
            questionType: this.host + "/questions-type",
            question: this.host + "/question",
            testDetail: this.host + "/test-detail",
            option: this.host + "/option",
            part: this.host + "/part",
            subject: this.host + "/subject",
            customer: this.host + "/subject",
            customerType: this.host + "/subject"
        };
    }
    ApiService.prototype.get = function (url) {
        return this.http.get(url);
    };
    ApiService.prototype.put = function (url, attribute) {
        var httpOption = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.put(url, attribute, httpOption);
    };
    ApiService.prototype.post = function (url, attribute) {
        var httpOption = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(url, attribute, httpOption);
    };
    ApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map