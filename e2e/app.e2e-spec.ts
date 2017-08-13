import { RezoPage } from './app.po';

describe('rezo App', function() {
  let page: RezoPage;

  beforeEach(() => {
    page = new RezoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
