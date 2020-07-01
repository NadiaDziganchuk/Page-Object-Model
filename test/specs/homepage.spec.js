import HomePage from '../pages/HomePage';

describe('TEST HOMEPAGE', () => {
  it('verify login and register buttons are displayed', () => {
    HomePage.open();
    expect(HomePage.loginLink.isDisplayed()).true;
    expect(HomePage.registerLink.isDisplayed()).true;
  });
});



// lutka@yahoo.com
// lutka
