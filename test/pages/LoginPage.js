import BasePage from './BasePage';

class LoginPage extends BasePage {
  get emailInput() { return $('[name="email"]') }
  get passwordInput() { return $('[name="password"]') }
  get loginBtn() { return $('button[type="submit"]') }

  open() {
    super.open('/user/login');
  }

  loginAs(user){
    this.emailInput.setValue(user.email);
    this.passwordInput.setValue(user.password);
    this.loginBtn.click();
  }
}

export default new LoginPage();
