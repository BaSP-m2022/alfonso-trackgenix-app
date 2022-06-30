const HomePage = require('../pageobjects/home.page');

describe('Home page testing', () => {
  beforeAll('Open browser', () => {
    browser.url('https://alfonso-trackgenix-app.vercel.app/');
  });

  describe('Header elements test', () => {
    it('Checking if header logo is present', async () => {
      await HomePage.open();
      await expect(HomePage.headerCompanyName).toBeDisplayed();
    });

    it('Checking if header menu exist', async () => {
      await HomePage.open();
      await expect(HomePage.homeLink).toBeExisting();
      await expect(HomePage.adminLink).toBeExisting();
      await expect(HomePage.superAdminLink).toBeExisting();
      await expect(HomePage.employeesLink).toBeExisting();
      await expect(HomePage.projectsLink).toBeExisting();
      await expect(HomePage.timesheetsLink).toBeExisting();
      await expect(HomePage.tasksLink).toBeExisting();
    });
  });

  describe('Main container elements test', () => {
    it('Checking if menu bar is clickeable', async () => {
      await HomePage.open();
      await expect(HomePage.menuButton).toBeClickable();
    });

    it('Checking if main container title is present', async () => {
      await HomePage.open();
      await expect(HomePage.homeTitle).toBeExisting();
    });
  });

  describe('Footer elements test', () => {
    it('Checking if social media links are clickeable', async () => {
      await HomePage.open();
      await expect(HomePage.facebookLink).toBeClickable();
      await expect(HomePage.twitterLink).toBeClickable();
      await expect(HomePage.linkedinLink).toBeClickable();
      await expect(HomePage.instagramLink).toBeClickable();
      await expect(HomePage.githubLink).toBeClickable();
    });

    it('Checking if footer copyright is present', async () => {
      await HomePage.open();
      await expect(HomePage.footerCopyright).toBeExisting();
    });
  });

  describe('Sidebar elements test', () => {
    it('Checking if social bar title is present', async () => {
      await HomePage.open();
      await HomePage.menuButton.click();
      await expect(HomePage.titleSidebar).toBeExisting();
    });

    it('Checking if sidebar elements exist', async () => {
      await HomePage.open();
      await HomePage.menuButton.click();
      await expect(HomePage.homeLinkSidebar).toBeExisting();
      await expect(HomePage.signupLinkSidebar).toBeExisting();
      await expect(HomePage.loginLinkSidebar).toBeExisting();
      await expect(HomePage.contactLinkSidebar).toBeExisting();
      await expect(HomePage.closeButtonSidebar).toBeExisting();
    });
  });
});
