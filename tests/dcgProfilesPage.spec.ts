//import { state } from '@angular/animations'

/*This test suite is for the Profiles page(TAB) and to test all elements are accessible 
and clickable on the Profiles page and available*/


import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/profile');
   
    await expect(page).toHaveTitle("Census Bureau Profiles Results");
    });

//Test the Official site banner on Profiles page is clickable
test('Profiles Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
})

//Test the US Census Bureau logo from Profiles page is clickable
test('Profiles Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
})

//Test the data.census.gov homepage link from Profiles page is clickable
test('Profiles Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
})

//Test the Tables Menu link on Profiles page is clickable
test('Profiles Page Tables Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Tables' }).first().click();
})

//Test the Maps Menu link on Profiles page is clickable
test('Profiles Page Maps Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Maps' }).first().click();
})


//Test the Charts Menu link on Profiles page is clickable
test('Profiles Page Charts Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Charts' }).first().click();
})

//Test the Profiles Menu link on Profiles page is clickable
test('Profiles Page Profiles Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Profiles' }).first().click();
})

//Test the Pages Menu link on Profiles page is clickable
test('Profiles Page Pages Link', async ({page}) => {
   await page.getByRole('link', { name: 'Pages' }).first().click();
})

//Test the All Menu link on Profiles page is clickable
test('Profiles Page All Link', async ({page}) => {
   await page.getByRole('link', { name: 'All' }).first().click();
})

//Test the Apps Menu link on Profiles page is clickable
test('Profiles Page Apps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Apps page.').first().click()
})

//Test the Help dropdown Menu link on Profiles page is clickable
test('Profiles Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
})

//Test the Help dropdown =>Resource Menu link on Profiles page is clickable
test('Profiles Page Latest Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Latest Releases').click() 
})

//Test the Help dropdown =>Upcoming Release  Menu link on Profiles page is clickable
test('Profiles Page Upcoming Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Upcoming Releases').click() 
})

//Test the Help dropdown =>Site Updates Menu link on Profiles page is clickable
test('Profiles Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Site Updates').click() 
})

//Test the Help dropdown =>Resource Menu link on Profiles page is clickable
test('Profiles Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
})

//Test the Help dropdown =>Tutorials Menu link on Profiles page is clickable
test('Profiles Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
})

//Test the Help dropdown =>FAQs Menu link on Profiles page is clickable
test('Profiles Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
})

//Test the Help dropdown =>Contact Us Menu link on Profiles page is clickable
test('Profiles Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
})

//Test the Link for Accessibility Icon image from Profiles page is clickable
test('Profiles Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
})