const HomePage = require('../pageobjects/home.page')
const SignUpPage = require('../pageobjects/signup.page')

describe('REGISTER page test', () => {
    beforeAll('Open browser and go to sign up page', async () => {
        await browser.url('https://alfonso-trackgenix-app.vercel.app/')
        await HomePage.sidebarBtn.click()
        await HomePage.signUpLink.click()
    })
    describe('Checking elements to be displayed', () => {
        it('Should redirect to REGISTER page', async () => {
            await expect(browser).toHaveUrl('https://alfonso-trackgenix-app.vercel.app/signup')
        })
        it('Verifying if the title of the page is correct', async () => {
            await expect(browser).toHaveTitle('TRACKgenix')
        })
        it('Should displayed REGISTER title on form', async () => {
            await expect(SignUpPage.registerTitle).toHaveText('REGISTER')
        })
    })
    describe('Checking REGISTER form', () => {
        it('Sending valid data, should display a modal with an employee created message', async () => {
            await SignUpPage.register('Karen','Soto','Coco 1234','20/11/1995','3417120979','prueba2@gmail.com','asdf1234')
            await SignUpPage.continueBtn.click()
            await expect(SignUpPage.employeeCreatedMsg).toBePresent()
        })
        it('Sending empty data, should display an error message below each empty input', async () => {
            await browser.url('https://alfonso-trackgenix-app.vercel.app/signup')
            await SignUpPage.register('','','','','','','')
            await SignUpPage.continueBtn.click()
            await expect(SignUpPage.allErrorFields).toBeDisplayed()
        })
    })
})