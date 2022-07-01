class LandingPage {
  //-----------------------------------Getters--------------------------------------------
  //Entity buttons
  get adminBtn() {
    return $('#root > div > header > nav > ul > li:nth-child(2) > a');
  }
  get superAdminBtn() {
    return $('#root > div > header > nav > ul > li:nth-child(3) > a');
  }
  get employeeBtn() {
    return $('#root > div > header > nav > ul > li:nth-child(4) > a');
  }
  get projectBtn() {
    return $('#root > div > header > nav > ul > li:nth-child(5) > a');
  }
  get timesheetBtn() {
    return $('#root > div > header > nav > ul > li:nth-child(6) > a');
  }
  get taskBtn() {
    return $('#root > div > header > nav > ul > li:nth-child(7) > a');
  }
  //Header buttons
  get homeBtn() {
    return $('#root > div > header > nav > ul > li:nth-child(1) > a');
  }
  get burgerBtn() {
    return $('#root > div > div.landing_sidebar__oq7-8 > button > i');
  }
  get facebookBtn() {
    return $('#root > div > nav > ul > li:nth-child(1) > a > i');
  }
  get twitterBtn() {
    return $('#root > div > nav > ul > li:nth-child(2) > a > i');
  }
  get linkedInBtn() {
    return $('#root > div > nav > ul > li:nth-child(3) > a > i');
  }
  get instagramBtn() {
    return $('#root > div > nav > ul > li:nth-child(4) > a > i');
  }
  get gitHubBtn() {
    return $('#root > div > nav > ul > li:nth-child(5) > a > i');
  }
  //Sidebar buttons
  get crossBtn() {
    return $('#root > div > div.landing_sidebar__oq7-8 > div > section:nth-child(1) > div > i');
  }
  get homeSideBtn() {
    return $(
      '#root > div > div.landing_sidebar__oq7-8 > div > section:nth-child(1) > a:nth-child(2)'
    );
  }
  get SignUpBtn() {
    return $(
      '#root > div > div.landing_sidebar__oq7-8 > div > section:nth-child(1) > a:nth-child(3)'
    );
  }
  get LogInBtn() {
    return $(
      '#root > div > div.landing_sidebar__oq7-8 > div > section:nth-child(1) > a:nth-child(4)'
    );
  }
  get contactBtn() {
    return $(
      '#root > div > div.landing_sidebar__oq7-8 > div > section:nth-child(1) > a:nth-child(5)'
    );
  }
  //Misc buttons
  get LearnMoreBtn() {
    return $(
      '#root > div > div.landing_sidebarMain__aCtTn > main > section.landing_firstSection__M9or0 > div:nth-child(1) > button'
    );
  }
  get SendMsgBtn() {
    return $(
      '#root > div > div.landing_sidebarMain__aCtTn > main > div:nth-child(8) > form > div.landing_buttonsForm__AntQb > button'
    );
  }
  //Footer buttons
  get fcBtn() {
    return $('#root > div > footer > div > div.footer_socials__lwx8a > a:nth-child(1) > i');
  }
  get twtBtn() {
    return $('#root > div > footer > div > div.footer_socials__lwx8a > a:nth-child(2) > i');
  }
  get lkInBtn() {
    return $('#root > div > footer > div > div.footer_socials__lwx8a > a:nth-child(3) > i');
  }
  get igBtn() {
    return $('#root > div > footer > div > div.footer_socials__lwx8a > a:nth-child(4) > i');
  }
  get ghBtn() {
    return $('#root > div > footer > div > div.footer_socials__lwx8a > a:nth-child(5) > i');
  }
  //-----------------------------------Setters--------------------------------------------
  //Request information inputs
  //-----------------------------------Methods--------------------------------------------
  //Open Trackgenix app
  open() {
    return browser.url('https://alfonso-trackgenix-app-git-tg-117-basp-m2022.vercel.app/');
  }
  //Header
  async headerChecker() {
    await expect(this.facebookBtn).toBeClickable();
    await this.facebookBtn.click();
    await browser.navigateTo('https://alfonso-trackgenix-app-git-tg-117-basp-m2022.vercel.app/');
    await expect(this.twitterBtn).toBeClickable();
    await this.twitterBtn.click();
    await browser.navigateTo('https://alfonso-trackgenix-app-git-tg-117-basp-m2022.vercel.app/');
    await expect(this.linkedInBtn).toBeClickable();
    await this.linkedInBtn.click();
    await browser.navigateTo('https://alfonso-trackgenix-app-git-tg-117-basp-m2022.vercel.app/');
    await expect(this.instagramBtn).toBeClickable();
    await this.instagramBtn.click();
    await browser.navigateTo('https://alfonso-trackgenix-app-git-tg-117-basp-m2022.vercel.app/');
    await expect(this.gitHubBtn).toBeClickable();
    await this.gitHubBtn.click();
    await browser.navigateTo('https://alfonso-trackgenix-app-git-tg-117-basp-m2022.vercel.app/');
  }
}

module.exports = new LandingPage();
