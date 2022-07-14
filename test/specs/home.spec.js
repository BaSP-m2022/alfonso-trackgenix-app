const HomePage = require('../pageobjects/home.page')

describe('TrackGENIX app landing page test', () => {
  beforeAll('Open browser', async () => {
    await browser.url('https://alfonso-trackgenix-app.vercel.app/')
  })
  describe('Checking elements to be displayed', () => {
    it('Verifying if the title of the page is correct', async () => {
      await expect(browser).toHaveTitle('TRACKgenix')
    })
    it('Header should have social media links', async () => {
      await expect(HomePage.socialMediaHeaderLinks).toHaveChildren(5)
    })
    it('Checking main section welcome title', async () => {
      await expect(HomePage.landingTitle).toHaveText('Hi, we are Trackgenix SA')
    })
    it('Verifying the image in -We are trackGENIX- section', async () => {
      await expect(HomePage.landingImg).toBeDisplayed()
    })
    it('Copyright should be displayed on footer', async () => {
      await expect(HomePage.copyright).toHaveText('Trackgenix © 2021 Radium Rocket')
    })
    it('Sidebar should be displayed when clicking hamburguer button', async () => {
      await HomePage.sidebarBtn.click()
      await expect(HomePage.menuTitle).toHaveText('Menu')
    })
  })
  describe('Checking sidebar links', () => {
    beforeEach('Open browser', async () => {
      await browser.url('https://alfonso-trackgenix-app.vercel.app/')
      await HomePage.sidebarBtn.click()
    })  
    it('Verifying Home page link to exist', async () => {
      await HomePage.homeLink.click()
      await expect(browser).toHaveUrl('https://alfonso-trackgenix-app.vercel.app/')
    })
    it('Verifying Sign-up page link to exist', async () => {
      await HomePage.signUpLink.click()
      await expect(browser).toHaveUrlContaining('signup')
    })
    it('Verifying Log-in page link to exist', async () => {
      await HomePage.logInLink.click()
      await expect(browser).toHaveUrlContaining('login')
    })
    it('Verifying close button', async () => {
      await expect(HomePage.sbCloseBtn).toBeClickable()
    })
  })
})