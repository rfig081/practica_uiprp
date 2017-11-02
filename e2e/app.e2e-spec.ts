import { FormViajesPage } from './app.po';

describe('form-viajes App', () => {
  let page: FormViajesPage;

  beforeEach(() => {
    page = new FormViajesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
