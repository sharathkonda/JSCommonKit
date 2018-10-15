import * as chai from 'chai';
import * as cml from '../support/_common_library';
import * as landing from '../page_objects/landing.page';
import { Given, When, Then, setDefaultTimeout } from 'cucumber';

let expect = chai.expect;

browser.waitForAngularEnabled(false);

setDefaultTimeout(120 * 1000);

Given(/^I have navigated to url <([^<>]*)>$/, async (webURL) => {
	await cml.openURL(webURL);
});

When(/^title is displayed$/, async () => {
	await landing.title.waitForVisibility();
});

Then(/^title text contains <([^<>]*)>$/, async (expText) => {
	expect((await landing.title.getText()).includes(expText)).to.be.true;
});
