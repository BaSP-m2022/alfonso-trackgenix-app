const HomePage = require('../pageobjects/home.page')
const HeaderPage = require('../pageobjects/header.page')
const LoginPage = require('../pageobjects/login.page')
const EmployeePage = require('../pageobjects/employee.page')

describe('Employees e2e for trackGENIX app test', () => {
  beforeAll('Open browser', () => {
    browser.url('https://alfonso-trackgenix-app.vercel.app/')
    HomePage.sidebarBtn.click()
    HomePage.logInLink.click()
    LoginPage.login('sarasa92@gmail.com', 'qwer1234')
    browser.debug(15000)
  })
  describe('Principal elements display testing', () => {
    it('Checking Employee Profile redirection', async () => {
      await expect(browser).toHaveUrl('https://alfonso-trackgenix-app.vercel.app/employees/profile/62b89fb0dd9fb8d43161894c')
    })
    it('Checking Employee Profile page elements', async () => {
      await expect(EmployeePage.employeeTable).toExist()
      await expect(EmployeePage.employeeEditBtn).toBeClickable()
      await expect(EmployeePage.employeeGoHomeBtn).toBeClickable()
    })
    it('Checking Welcome title', async () => {
      await expect(EmployeePage.employeeWelcomeTitle).toHaveTextContaining('Welcome')
    })
  })
  describe('Functionalities testing', () => {
    it('Edit employee succesfully', async () => {
      await EmployeePage.employeeEditBtn.click()
      await expect(EmployeePage.employeeCancelBtn).toBeClickable()
      await EmployeePage.employeeFirstNameInput.setValue('Agustina')
      await EmployeePage.employeeUpdateBtn.click()
    })
    it('Logout', async () => {
      await HeaderPage.navLogOut.click()
      await expect(browser).toHaveUrl('https://alfonso-trackgenix-app.vercel.app/')
    })
  })
})