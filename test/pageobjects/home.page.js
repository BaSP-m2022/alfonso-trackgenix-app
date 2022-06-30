class HomePage {
  /* eslint-disable */
  get headerCompanyName() { return $('.header_appName__ZCFAq') }
  get homeLink() { return $('#root > div > header > nav > ul > li:nth-child(1) > a') }
  get adminLink() { return $('#root > div > header > nav > ul > li:nth-child(2) > a') }
  get superAdminLink() { return $('#root > div > header > nav > ul > li:nth-child(3) > a') }
  get employeesLink() { return $('#root > div > header > nav > ul > li:nth-child(4) > a') }
  get projectsLink() { return $('#root > div > header > nav > ul > li:nth-child(5) > a') }
  get timesheetsLink() { return $('#root > div > header > nav > ul > li:nth-child(6) > a') }
  get tasksLink() { return $('#root > div > header > nav > ul > li:nth-child(7) > a') }

  get menuButton() { return $('.sidebar_sideButton__K4G6H') }
  get homeTitle() { return $('#root > div > section > h2') }

  get facebookLink() { return $('.footer_socials__lwx8a > a:nth-child(1)') }
  get twitterLink() { return $('.footer_socials__lwx8a > a:nth-child(2)') }
  get linkedinLink() { return $('.footer_socials__lwx8a > a:nth-child(3)') }
  get instagramLink() { return $('.footer_socials__lwx8a > a:nth-child(4)') }
  get githubLink() { return $('.footer_socials__lwx8a > a:nth-child(5)') }
  get footerCopyright() { return $('.footer_copyright__iDmy9') }

  get titleSidebar() { return $('.sidebar_sidebarTitle__xplvB') }
  get homeLinkSidebar() { return $('#root > div > section > div > section:nth-child(1) > a:nth-child(2)') }
  get signupLinkSidebar() { return $('#root > div > section > div > section:nth-child(1) > a:nth-child(3)')}
  get loginLinkSidebar() { return $('#root > div > section > div > section:nth-child(1) > a:nth-child(4)')}
  get contactLinkSidebar() { return $('#root > div > section > div > section:nth-child(1) > a:nth-child(5)')}
  get closeButtonSidebar() { return $('#root > div > section > div > section:nth-child(1) > div > i')}

  open() {
    return browser.url('https://alfonso-trackgenix-app.vercel.app/');
  }
}
module.exports = new HomePage()
/* eslint-enable */
