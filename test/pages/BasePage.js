export default class BasePage {
  get notification() { return $('.notification-success') }
  open(path){
    browser.url(path)
  }

  successMsgDisplayed(){
    return this.notification.isDisplayed();
  }
}
