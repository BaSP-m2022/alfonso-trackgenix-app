const LoginPage = require('../pageobjects/login.page.js');

describe('Login page test', () => {
  beforeEach('Open browser', () => {
    browser.url('https://alfonso-trackgenix-app.vercel.app/login');
  })
  describe('Username input test', () => {
    it('The email field is empty, should display an error message', async () => {
    await LoginPage.login('', 'qwer1234');
    await expect(LoginPage.errorMsgContainer).toHaveText('This field is required');
    })
    it('Invalid email field, should display an error message', async () => {
      await LoginPage.login('adminkpo@', 'qwer1234');
      await expect(LoginPage.errorMsgContainer).toHaveText('Invalid email format');
    })
  })
  describe('Password input test', () => {
    it('The password field is empty, should display an error message', async () => {
      await LoginPage.login('sarasa92@admin.com', '');
      await expect(LoginPage.errorMsgContainer).toHaveText('This field is required');
    })
    it('Password field with less than 8 characters should display an error message', async () => {
      await LoginPage.login('sarasa92@admin.com', '1234');
      await expect(LoginPage.errorMsgContainer).toHaveText('Password must contain at least 8 characters');
    })
  })
  describe('Login with valid credentials', () => {
    it('It should login and redirect to the employee page', async () => {
      await LoginPage.login('sarasa92@gmail.com', 'qwer1234');
      await expect(browser).toHaveUrl('https://alfonso-trackgenix-app.vercel.app/employees/profile/62b89fb0dd9fb8d43161894c');
    })
  })
  describe('Logout function test', () => {
    it('Logout action should redirect to the home page', async () => {
      await LoginPage.login('sarasa92@gmail.com', 'qwer1234');
      await LoginPage.logoutBtn.click();
      await expect(browser).toHaveUrl('https://alfonso-trackgenix-app.vercel.app/');
    })
  })
})
