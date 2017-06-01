import { DeveloperRepositoryPage } from './app.po';

describe('developer-repository App', () => {
  let page: DeveloperRepositoryPage;

  beforeEach(() => {
    page = new DeveloperRepositoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
