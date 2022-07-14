class AdminsPage {
    ///// GETTERS /////
    //// PROFILE elements ////
    get adminTitle() { return $('#root > div > section > div.table_container__TD1ls > h2') }
    get adminWelcomeTitle() { return $('#root > div > h1') }
    get adminProfileForm() { return $('.profile_form__J0E0W') }
    // Buttons
    get adminProfileBtn() { return $('.Button_Button__72Faw') }
    get adminEditBtn() { return $('#root > div > div > button') }
    get adminCancelBtn() { return $('#root > div > div > button') }
    get adminUpdateBtn() { return $('#root > div > form > button') }
    get adminAddBtn() { return $('.profile_buttonSubmit__c3a3J') }
    // Modals
    get adminModal() { return $('#root > div > div.modal_modalBackground__6FizA > div') }
    // Edit Inputs
    get adminFirstNameInput() { return $('div.profile_row__lVWUT:nth-child(1) > div:nth-child(2) > input:nth-child(1)') }
    get adminLastNameInput() { return $('div.profile_row__lVWUT:nth-child(2) > div:nth-child(2) > input:nth-child(1)') }
    get adminEmailInput() { return $('div.profile_row__lVWUT:nth-child(3) > div:nth-child(2) > input:nth-child(1)') }
    get adminPasswordInput() { return $('div.profile_row__lVWUT:nth-child(4) > div:nth-child(2) > input:nth-child(1)') }
    get adminStatusCheckbox() { return $('div.profile_row__lVWUT:nth-child(5) > div:nth-child(2) > input:nth-child(1)') }

    //// TABLE LIST elements ////
    get adminTableTitle() { return $('#root > div > section > div.table_container__TD1ls > h2') }
    get adminTableList() { return $('#root > div > section > div.table_container__TD1ls > table') }
    // Buttons
    get adminTableAddBtn() { return $('#root > div > section > div.table_container__TD1ls > button') }
    get adminTableEditBtn() { return $('#root > div > section > div.table_container__TD1ls > table > tbody > tr:nth-child(1) > td:nth-child(7) > button') }
    get adminTableDeleteBtn() { return $('#root > div > section > div.table_container__TD1ls > table > tbody > tr:nth-child(1) > td:nth-child(8) > button') }
    get adminTablePrevBtn() { return $('#root > div > section > div.table_container__TD1ls > div > div:nth-child(2) > button') }
    get adminTableNextBtn() { return $('#root > div > section > div.table_container__TD1ls > div > div:nth-child(3) > button') }
    // Modal form
    get adminModalTitle() { return $('#root > div > section > div.modal_modalBackground__6FizA > div > div.modal_modalBody__IaBTo > form > div > div:nth-child(1) > h2') }
    get adminModalCloseBtn() { return $('#root > div > section > div.modal_modalBackground__6FizA > div > div.modal_modalHeader__r9G49 > i') }
    get adminModalResetBtn() { return $('#root > div > section > div.modal_modalBackground__6FizA > div > div.modal_modalBody__IaBTo > form > div > div.form_inputs__IGiGt > div:nth-child(5) > button') }
    get adminModalSubmitBtn() { return $('#root > div > section > div.modal_modalBackground__6FizA > div > div.modal_modalBody__IaBTo > form > div > button') }
    get adminModalNameInput() { return $('#root > div > section > div.modal_modalBackground__6FizA > div > div.modal_modalBody__IaBTo > form > div > div.form_inputs__IGiGt > div:nth-child(1) > input[type=text]') }
    get adminModalLastNameInput() { return $('#root > div > section > div.modal_modalBackground__6FizA > div > div.modal_modalBody__IaBTo > form > div > div.form_inputs__IGiGt > div:nth-child(2) > input[type=text]') }
    get adminModalEmailInput() { return $('#root > div > section > div.modal_modalBackground__6FizA > div > div.modal_modalBody__IaBTo > form > div > div.form_inputs__IGiGt > div:nth-child(3) > input[type=email]') }
    get adminModalPasswordInput() { return $('#root > div > section > div.modal_modalBackground__6FizA > div > div.modal_modalBody__IaBTo > form > div > div.form_inputs__IGiGt > div:nth-child(4) > input[type=password]') }
    get adminModalStatusCheckbox() { return $('#root > div > section > div.modal_modalBackground__6FizA > div > div.modal_modalBody__IaBTo > form > div > div.form_inputs__IGiGt > div:nth-child(5) > div:nth-child(2) > input[type=checkbox]') }
    // Edit Modal

    ///// SETTERS /////
    // For admin form
    async adminSetName(name) {
        await this.adminModalNameInput.setValue(name)
    }
    async adminSetLastName(lastname) {
        await this.adminModalLastNameInput.setValue(lastname)
    }
    async adminSetEmail(email) {
        await this.adminModalEmailInput.setValue(email)
    }
    async adminSetPassword(password) {
        await this.adminModalPasswordInput.setValue(password)
    }
    async adminSetStatus(status) {
        await this.adminModalPasswordInput.setValue(status)
    }

    // For edit profile form
    async setName(name) {
        await this.adminFirstNameInput.setValue(name)
    }
    async setLastName(lastName) {
        await this.adminLastNameInput.setValue(lastName)
    }
    async setEmail(email) {
        await this.adminEmailInput.setValue(email)
    }
    async setPassword(password) {
        await this.adminPasswordInput.setValue(password)
    }

    ///// METHODS /////
    // 
    async createAdmin(name,lastname,email,password,status) {
        await this.adminSetName(name)
        await this.adminSetLastName(lastname)
        await this.adminSetEmail(email)
        await this.adminSetPassword(password)
        await this.adminSetStatus(status)
    }

    async editAdmin(name, lastName, email, password) {
        await this.setName(name)
        await this.setLastName(lastName)
        await this.setEmail(email)
        await this.setPassword(password)
    };

};
module.exports = new AdminsPage();