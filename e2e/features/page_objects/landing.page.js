'use strict';
import * as cml from '../support/_common_library';

const elements = new Map().set('title', element(by.css('#prm > div > span')));

export let title = {
	waitForVisibility: async () => await cml.waitForElementToBeVisible(elements.get('title'), 5000, 'landing.title.waitForVisibility'),
	getText: async () => await cml.getElementText(elements.get('title'), false, false, 'landing.title.getText')
};
