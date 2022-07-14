class SignUpPage {
    ///// GETTERS /////
    // Inputs
    get registerTitle() { return $('form > h1') }
    get firstNameInput() { return $('[name="firstName"]') }
    get lastNameInput() { return $('[name="lastName"]') }
    get genderInput() { return $('/html/body/div/div/section/section[2]/form/div[2]/div[1]/select') }
    get addressInput() { return $('[name="address"]') }
    get birthDateInput() { return $('[name="dob"]') }
    get phoneInput() { return $('[name="phone"]') }
    get registerEmailInput() { return $('[name="email"]') }
    get registerPasswordInput() { return $('[name="password"]') }
    // Error messages
    get allErrorFields() { return $('.signup_errorInput__5C7Py') }
    get fistNameError() { return $('#root > div > section > section.signup_form__e\+PH4 > form > div:nth-child(2) > div:nth-child(1) > p') }
    get lastNameError() { return $('#root > div > section > section.signup_form__e\+PH4 > form > div:nth-child(2) > div:nth-child(2) > p') }
    get genderInput() { return $('#root > div > section > section.signup_form__e\+PH4 > form > div:nth-child(3) > div:nth-child(1) > select') }
    get addressError() { return $('#root > div > section > section.signup_form__e\+PH4 > form > div:nth-child(3) > div:nth-child(2) > p') }
    get birthDateError() { return $('#root > div > section > section.signup_form__e\+PH4 > form > div:nth-child(4) > div:nth-child(1) > p') }
    get phoneError() { return $('#root > div > section > section.signup_form__e\+PH4 > form > div:nth-child(4) > div:nth-child(2) > p') }
    get registerEmailError() { return $('#root > div > section > section.signup_form__e\+PH4 > form > div:nth-child(5) > div:nth-child(1) > p') }
    get registerPasswordError() { return $('#root > div > section > section.signup_form__e\+PH4 > form > div:nth-child(5) > div:nth-child(2) > p') }
    // Buttons
    get resetBtn() { return $('.signup_buttonReset__zwjfO') }
    get continueBtn() { return $('.signup_buttonContinue__hlqTE') }
    //
    get employeeCreatedMsg() { return $('#root > div > section > div > div > div.modal_modalBody__IaBTo > div > p') }
    ///// SETTERS /////
    async register(firstname, lastname, address, birthdate, phone, email, password) {
    await this.firstNameInput.setValue(firstname)
    await this.lastNameInput.setValue(lastname)
    await this.addressInput.setValue(address)
    await this.birthDateInput.setValue(birthdate)
    await this.phoneInput.setValue(phone)
    await this.registerEmailInput.setValue(email)
    await this.registerPasswordInput.setValue(password)
    }
}
module.exports = new SignUpPage();