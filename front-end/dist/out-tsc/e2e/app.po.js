import { browser, element, by } from 'protractor';
var CoreUIPage = /** @class */ (function () {
    function CoreUIPage() {
    }
    CoreUIPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    CoreUIPage.prototype.getParagraphText = function () {
        return element(by.className('app-footer')).getText();
    };
    return CoreUIPage;
}());
export { CoreUIPage };
//# sourceMappingURL=app.po.js.map