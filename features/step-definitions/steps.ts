import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
    browser.maximizeWindow();
});
When(/^I click on signin link$/, async () => {
    await LoginPage.signin();
});

When(/^I login with crdentials$/, async () => {
    await LoginPage.login();
});

Then(/^I should see a home page$/, async () => {
const text = await $('#center_column > h1').getText();
console.log("====>>"+text);
await LoginPage.signout.click();
});
When(/^adding item to cart$/, async () => {
    await LoginPage.addtocart();
    });
    Then(/^validating the item details$/, async () => {
        await $('#form > p > button > span').isDisplayed();
        });

