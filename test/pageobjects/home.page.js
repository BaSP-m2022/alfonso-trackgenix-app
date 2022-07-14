class HomePage {
  ///// GETTERS /////
  // Header
  get sidebarBtn() { return $('#root > div > button') }
  get socialMediaHeaderLinks() { return $('#root > div > nav > ul' ) }
  // Sidebar //
  get menuTitle() { return $('#root > div > div.sidebar_Sidebar__xJMyu > section:nth-child(1) > div > p') }
  get homeLink() { return $('#root > div > div.sidebar_Sidebar__xJMyu > section:nth-child(1) > a:nth-child(2)') }
  get signUpLink() { return $('#root > div > div.sidebar_Sidebar__xJMyu > section:nth-child(1) > a:nth-child(3)') }
  get logInLink() { return $('#root > div > div.sidebar_Sidebar__xJMyu > section:nth-child(1) > a:nth-child(4)') }
  get sbCloseBtn() { return $('#root > div > div.sidebar_Sidebar__xJMyu > section:nth-child(1) > div > i') }
  // Body //
  get landingTitle() { return $('#root > div > div > main > section.landing_firstSection__M9or0 > div:nth-child(1) > h1') }
  get landingImg() { return $('#root > div > div > main > section.landing_firstSection__M9or0 > div.landing_wrapImage__QPGJR > img') }
  get learnMoreBtn() { return $('#root > div > div > main > section.landing_firstSection__M9or0 > div:nth-child(1) > button') }
  // Request form //
  get nameInput() { return $('#root > div > div > main > div:nth-child(8) > form > div.landing_nameEmailForm__YFMIb > input[type=text]:nth-child(1)') }
  get emailInput() { return $('#root > div > div > main > div:nth-child(8) > form > div.landing_nameEmailForm__YFMIb > input[type=text]:nth-child(2)') }
  get selectArea() { return $('#root > div > div > main > div:nth-child(8) > form > div:nth-child(2) > select') }
  get textArea() { return $('#root > div > div > main > div:nth-child(8) > form > div.landing_messageForm__5elZc > textarea') }
  get sendMsgBtn() { return $('#root > div > div > main > div:nth-child(8) > form > div.landing_buttonsForm__AntQb > button') }
  // Footer //
  get fcBtn() { return $('#root > div > footer > div > div.footer_socials__lwx8a > a:nth-child(1) > i') }
  get twtBtn() { return $('#root > div > footer > div > div.footer_socials__lwx8a > a:nth-child(2) > i') }
  get lkInBtn() { return $('#root > div > footer > div > div.footer_socials__lwx8a > a:nth-child(3) > i') }
  get igBtn() { return $('#root > div > footer > div > div.footer_socials__lwx8a > a:nth-child(4) > i') }
  get ghBtn() { return $('#root > div > footer > div > div.footer_socials__lwx8a > a:nth-child(5) > i') }
  get copyright() { return $('#root > div > footer > div > div.footer_copyright__iDmy9') }
  ///// SETTERS ////
  open() {
    return brownser.url('');
  }
  async setName(name) {
    await this.nameInput.setValue(name);
  }
  async setEmail(email) {
    await this.emailInput.setValue(email);
  }
  async setSelectArea(indexArea) {
    await this.selectArea.selectByIndex(indexArea);
  }
  async setText(text) {
    await this.textArea.setValue(text);
  }
  ///// METHODS /////

}

module.exports = new HomePage();