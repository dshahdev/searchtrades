import { TestRestPage } from './app.po';

describe('test-rest App', () => {
  let page: TestRestPage;

  beforeEach(() => {
    page = new TestRestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
