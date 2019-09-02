import { CoreUIPage } from './app.po';
describe('core-ui App', function () {
    var page;
    beforeEach(function () {
        page = new CoreUIPage();
    });
    it('should display footer containing creativeLabs', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toContain('creativeLabs');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map