class LoginPage {
  ///// GETTERS /////
  get inputEmail() { return $('[name="email"]') }
  get inputPassword() { return $('[name="password"]') }
  get continueBtn() { return $('.login_buttonContinue__EGjlD') }
  get errorMsgContainer () {return $('.login_errorInput__gUgZZ')}
  get logoutBtn() {return $('.header_rutes__-JsnG > li:nth-child(8) > a:nth-child(1)')}
  
  ///// SETTERS /////
  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.continueBtn.click();
  }
}

module.exports = new LoginPage()
