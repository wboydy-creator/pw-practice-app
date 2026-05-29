//import { state } from '@angular/animations'

/*This test suite is for the ALL page(TAB) and to test all elements are accessible 
and clickable on the ALL page and available*/


import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/all');
   
    await expect(page).toHaveTitle("/all");
    });

//Test the Official site banner on Landing page is clickable
test('Landing Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
})