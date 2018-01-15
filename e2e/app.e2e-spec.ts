import { AngloginPage } from './app.po';

describe('anglogin App', () => {
  let page: AngloginPage;

  beforeEach(() => {
    page = new AngloginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
