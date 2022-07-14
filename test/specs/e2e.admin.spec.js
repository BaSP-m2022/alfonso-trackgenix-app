const HomePage = require('../pageobjects/home.page')
const HeaderPage = require('../pageobjects/header.page')
const LoginPage = require('../pageobjects/login.page')
const AdminsPage = require('../pageobjects/admin.page')

describe('Admins e2e for trackGENIX app test', () => {
	beforeAll('Open browser and admin login with valid credentials', () => {
		browser.url('https://alfonso-trackgenix-app.vercel.app/')
		HomePage.sidebarBtn.click()
		HomePage.logInLink.click()
		LoginPage.login('adminkpo@admin.com', 'qwer1234')
		browser.debug(15000)
	})
	describe('Elements display and redirections testing on ADMIN TABLE LIST page', () => {
		it('Checking redirection to ADMIN TABLE LIST', async () => {
			await expect(browser).toHaveUrl('https://alfonso-trackgenix-app.vercel.app/admins')
		})
		it('Checking display of title on ADMIN TABLE LIST', async () => {
			await expect(AdminsPage.adminTableTitle).toHaveText('Admins')
		})
		it('Checking display of ADD/EDIT/DELETE buttons on ADMIN TABLE LIST', async () => {
			await expect(AdminsPage.adminTableAddBtn).toBeClickable()
			await expect(AdminsPage.adminTableEditBtn).toBeClickable()
			await expect(AdminsPage.adminTableDeleteBtn).toBeClickable()
		})
		it('Checking display of previous/next page buttons on ADMIN TABLE LIST', async () => {
			await expect(AdminsPage.adminTablePrevBtn).toBeClickable()
			await expect(AdminsPage.adminTableNextBtn).toBeClickable()
		})
		it('Checking table list display on ADMIN TABLE LIST', async () => {
			await expect(AdminsPage.adminTableList).toBeDisplayed()
		})
	})
	describe('ADD/EDIT/DELETE functionalities on ADMIN TABLE LIST testing', () => {
		describe('CREATE functionality testing', () => {
			it('Checking CREATE form modal title on ADMIN TABLE LIST to be displayed', async () => {
				await AdminsPage.adminTableAddBtn.click()
				await expect(AdminsPage.adminModalTitle).toHaveText('Create Admin')
			})
			it('Checking RESET button on CREATE form modal on ADMIN TABLE LIST to be displayed', async () => {
				await expect(AdminsPage.adminModalResetBtn).toBeClickable()
			})
			it('Checking SUBMIT button on CREATE form modal on ADMIN TABLE LIST to be displayed', async () => {
				await expect(AdminsPage.adminModalSubmitBtn).toBeClickable()
			})
			it('Checking CLOSE button on CREATE form modal on ADMIN TABLE LIST to be displayed', async () => {
				await expect(AdminsPage.adminModalCloseBtn).toBeClickable()
			})
			it('Checking CREATE functionality', async () => {
				await AdminsPage.createAdmin('Karen','Soto','test1234@gmail.com','mypassword1',true)
				await AdminsPage.adminModalSubmitBtn.click()
				await expect(browser).toHaveUrlContaining('admins')
			})
		})
		describe('EDIT functionality testing', () => {
			it('Checking EDIT form modal title on ADMIN TABLE LIST to be displayed', async () => {
				await browser.refresh()
				await browser.url('https://alfonso-trackgenix-app.vercel.app/login')
				await LoginPage.login('adminkpo@admin.com', 'qwer1234')
				await AdminsPage.adminTableEditBtn.click()
				await expect(AdminsPage.adminModalTitle).toHaveText('Edit Admin')
			})
			it('Checking EDIT functionality', async () => {
				await AdminsPage.adminModalStatusCheckbox.click()
				await AdminsPage.adminModalSubmitBtn.click()
				await expect(browser).toHaveUrlContaining('admins')
			})
		})
	})
	describe('Elements display and redirections testing on ADMIN PROFILE page', () => {
		it('Checking redirection to ADMIN PROFILE home', async () => {
			await HeaderPage.navHomeLink.click()
			await expect(browser).toHaveUrl('https://alfonso-trackgenix-app.vercel.app/')
		})
		it('Checking ADMIN PROFILE button on ADMIN PROFILE home', async () => {
			await expect(AdminsPage.adminProfileBtn).toBeClickable()
		})
		it('Checking ADMIN PROFILE button redirection to admin table list', async () => {
			await AdminsPage.adminProfileBtn.click()
			await expect(browser).toHaveUrl('https://alfonso-trackgenix-app.vercel.app/admins/profile/62bb2dbe576424de7c76bff5')
		})
		it('Checking Welcome title on ADMIN PROFILE page', async () => {
			await expect(AdminsPage.adminWelcomeTitle).toHaveTextContaining('Welcome')
		})
	})
})