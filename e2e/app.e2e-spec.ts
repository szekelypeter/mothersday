import { MothersdayPage } from './app.po';

describe('mothersday App', function() {
  let page: MothersdayPage;

  beforeEach(() => {
    page = new MothersdayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
