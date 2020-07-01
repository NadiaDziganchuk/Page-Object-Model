import { user} from '../data/register.data';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

describe('VERIFY SUCCESSFUL LOGIN', () => {
  it('should register new user and verify login is successful',  () => {
    RegisterPage.open();
    RegisterPage.registerNewUser(user);
    LoginPage.open();
    LoginPage.loginAs(user);
    expect(LoginPage.successMsgDisplayed());
    // browser.waitUntil(() => LoginPage.successMsgDisplayed());
  });
})
