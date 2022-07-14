class EmployeePage {
    ///// GETTERS /////
    get employeeProfileBtn() {return $('.Button_Button__72Faw') }
    get employeeWelcomeTitle() { return $('#root > div > h1') }
    get employeeTable() {return $('.profile_form__GBd3S') }
    get employeeEditBtn() {return $('.profile_greenButton__hc9z6') }
    get employeeGoHomeBtn() {return $('.profile_goHome__Epo09') }
    get employeeCancelBtn() {return $('.profile_redButton__R8NSb') }
    get employeeUpdateBtn() {return $('.profile_buttonSubmit__DELlj') }
    
    get employeeFirstNameInput() { return $('div.profile_row__41l36:nth-child(1) > div:nth-child(2) > input:nth-child(1)') }
    get employeeLastNameInput() { return $('div.profile_row__41l36:nth-child(2) > div:nth-child(2) > input:nth-child(1)') }
    get employeeGenderSelect() { return $('select.profile_inputsProfile__4UTDd') }
    get employeeMaleOption() { return $('select.profile_inputsProfile__4UTDd > option:nth-child(1)') }
    get employeeFemaleOption() { return $('select.profile_inputsProfile__4UTDd > option:nth-child(2)') }
    get employeeOtherOption() { return $('select.profile_inputsProfile__4UTDd > option:nth-child(3)') }
    
    get employeeAddressInput() { return $('div.profile_row__41l36:nth-child(4) > div:nth-child(2) > input:nth-child(1)') }
    get employeePhoneInput() { return $('div.profile_row__41l36:nth-child(5) > div:nth-child(2) > input:nth-child(1)') }
    get employeeBirthDateInput() { return $('div.profile_row__41l36:nth-child(6) > div:nth-child(2) > input:nth-child(1)') }
    get employeeEmailInput() { return $('div.profile_row__41l36:nth-child(7) > div:nth-child(2) > input:nth-child(1)') }
    get employeePasswordInput() { return $('div.profile_row__41l36:nth-child(8) > div:nth-child(2) > input:nth-child(1)') }
    get employeeStatusCheckbox() { return $('div.profile_row__41l36:nth-child(9) > div:nth-child(2) > input:nth-child(1)') }
    
}

module.exports = new EmployeePage();