const LandingPage = require('../pageobjects/landing.page.js');

describe('Landing page test', () => {
  beforeAll('Open browser', async () => {
    await LandingPage.open();
  });
  it('Header buttons', async () => {
    await LandingPage.headerChecker();
  });
});
