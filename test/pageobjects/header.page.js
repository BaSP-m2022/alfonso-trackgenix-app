class HeaderPage {
    get trackGenixTitle() { return $('#root > div > header > nav > div > h1') }
    get trackGenixSubtitle() { return $('#root > div > header > nav > div > h2') }
    get navHomeLink() { return $('#root > div > header > nav > ul > li:nth-child(1) > a') }
    get navAdminLink() { return $('#root > div > header > nav > ul > li:nth-child(2) > a') }
    get navSuperAdminLink() { return $('#root > div > header > nav > ul > li:nth-child(3) > a') }
    get navEmployeesLink() { return $('#root > div > header > nav > ul > li:nth-child(4) > a') }
    get navProjectsLink() { return $('#root > div > header > nav > ul > li:nth-child(5) > a') }
    get navTimesheetsLink() { return $('#root > div > header > nav > ul > li:nth-child(6) > a') }
    get navTasksLink() { return $('#root > div > header > nav > ul > li:nth-child(7) > a') }
    get navLogOut() { return $('#root > div > header > nav > ul > li:nth-child(8) > a') }

}

module.exports = new HeaderPage();
