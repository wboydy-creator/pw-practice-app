//import { state } from '@angular/animations'

/*This test suite is for the ALL page(TAB) and to test all elements are accessible 
and clickable on the ALL page and available*/


import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/all');
   
    await expect(page).toHaveTitle("Census Bureau Search");
    });

//Test the Official site banner on all page is clickable
test('All Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
})

//Test the US Census Bureau logo from all page is clickable
test('All Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
})




