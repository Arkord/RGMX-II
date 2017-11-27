import { RGMXIIPage } from './app.po';

describe('rgmx-ii App', () => {
  let page: RGMXIIPage;

  beforeEach(() => {
    page = new RGMXIIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
