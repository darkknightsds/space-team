import { SpaceTeamPage } from './app.po';

describe('space-team App', () => {
  let page: SpaceTeamPage;

  beforeEach(() => {
    page = new SpaceTeamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
