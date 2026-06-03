//import { state } from '@angular/animations'

/*This test suite is for the ALL page(TAB) and to test all elements are accessible 
and clickable on the ALL page and available*/


import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/map');
   
    await expect(page).toHaveTitle("Census Bureau Maps");
    });

    //Test the Official site banner on Maps page is clickable
test('Maps Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
})

//Test the US Census Bureau logo from Maps page is clickable
test('Maps Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
})

//Test the data.census.gov homepage link from Maps page is clickable
test('Maps Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
})

//Test the Tables Menu link on Maps page is clickable
test('Maps Page Tables Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Tables' }).first().click();
})

//Test the Maps Menu link on Maps page is clickable
test('Maps Page Maps Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Maps' }).first().click();
})


//Test the Charts Menu link on Maps page is clickable
test('Maps Page Charts Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Charts' }).first().click();
})

//Test the Profiles Menu link on Maps page is clickable
test('Maps Page Profiles Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Profiles' }).first().click();
})

//Test the Pages Menu link on Maps page is clickable
test('Maps Page Profiles Pages Link', async ({page}) => {
   await page.getByRole('link', { name: 'Pages' }).first().click();
})

//Test the All Menu link on Maps page is clickable
test('Maps Page Profiles All Link', async ({page}) => {
   await page.getByRole('link', { name: 'All' }).first().click();
})

//Test the Apps Menu link on Maps page is clickable
test('Maps Page Apps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Apps page.').first().click()
})

//Test the Help dropdown Menu link on Maps page is clickable
test('Maps Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
})

//Test the Help dropdown =>Resource Menu link on Maps page is clickable
test('Maps Page Latest Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Latest Releases').click() 
})

//Test the Help dropdown =>Upcoming Release  Menu link on Maps page is clickable
test('Maps Page Upcoming Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Upcoming Releases').click() 
})

//Test the Help dropdown =>Site Updates Menu link on Maps page is clickable
test('Maps Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Site Updates').click() 
})

//Test the Help dropdown =>Resource Menu link on Maps page is clickable
test('Maps Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
})

//Test the Help dropdown =>Tutorials Menu link on Maps page is clickable
test('Maps Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
})

//Test the Help dropdown =>FAQs Menu link on Maps page is clickable
test('Maps Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
})

//Test the Help dropdown =>Contact Us Menu link on Maps page is clickable
test('Maps Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
})

//Test the Link for Accessibility Icon image from Maps page is clickable
test('Maps Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
})