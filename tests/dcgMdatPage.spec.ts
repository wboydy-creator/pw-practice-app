//import { state } from '@angular/animations'

/*This test suite is for the MDat app page and to test all elements are accessible 
and clickable on the Mdat page and available*/


import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/app/mdat/');
   
    await expect(page).toHaveTitle("Microdata - Census Bureau Datasets");
    });

//Test the MDat Official site banner clickable
test('Maps Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
})

//Test the MDat US Census Bureau logo clickable
test('Maps Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
})

//Test the MDat homepage link is clickable
test('Maps Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
})

//Test the MDat homepage variable link is clickable
test('Mdat variables menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Variables' }).first().click();
})

//Test the MDat homepage Geographies link is clickable
/*test('Mdat Geographies menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Geographies' }).first().click();
})*/

//Test the MDat homepage Cart link is clickable
test('Mdat Cart menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Cart' }).first().click();
})

//Test the MDat homepage Table link is clickable
test('Mdat Table menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Table' }).first().click();
})

//first Mdat chevron to open chevron 
test('Mdat Dataset Chevron ', async ({page}) => {
const dropdown = page.getByRole('combobox').first();

await dropdown.click();//click first time to open

await expect(dropdown).toHaveAttribute('aria-expanded', 'true');//check to see if open

await dropdown.click();//click first time to open

await expect(dropdown).toHaveAttribute('aria-expanded', 'false');//check to see if closed
})

//second (Year) Mdat chevron to open chevron 
test('Mdat year Chevron ', async ({page}) => {
const yearDropdown = page
  .getByRole('combobox')
  .filter({ hasText: '2024' });

await yearDropdown.click();//click first time to open

await expect(yearDropdown).toHaveAttribute('aria-expanded', 'true');//check to see if open

await yearDropdown.click();//clicking second time to close

await expect(yearDropdown).toHaveAttribute('aria-expanded', 'false');//check to see if closed
})

//Test the Link using "Accessibility" from Mdat page is clickable
test('Mdat Page footer Accessibility link', async ({page}) => {
   await page.getByText("Accessibility", { exact: true }).click();
});

//Test the Link using "Information Quality" from Mdat page is clickable
test('Mdat Page Information Quality link', async ({page}) => {
   await page.getByText("Information Quality", { exact: true }).click();
});

//Test the Link using "FOIA" from Mdat page is clickable
test('Mdat Page FOIA link', async ({page}) => {
   await page.getByText("FOIA", { exact: true }).click();
});

//Test the Link using "Data Protection and Privacy Policy" from Mdat page is clickable
test('Mdat Page Data Protection and Privacy Policy link', async ({page}) => {
   await page.getByText("Data Protection and Privacy Policy", { exact: true }).click();
});

//Test the Link using "U.S. Department of Commerce" from Mdat page is clickable
test('Mdat Page U.S. Department of Commerce link', async ({page}) => {
   await page.getByText("U.S. Department of Commerce", { exact: true }).click();
});

//Test the Link using "Release Notes" from Mdat page is clickable
test('Mdat Page Release Notes link', async ({page}) => {
   await page.getByText("Release Notes", { exact: true }).click();
});

//Test the Link for Accessibility Icon image from Mdat page is clickable
test('Mdat Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
})

//Test the Link using "Saved Pages" from Mdat page is clickable
test('Mdat Find Saved Pages link', async ({page}) => {
   await page.getByText("Find your saved page", { exact: true }).click();
});

//Test the MDat homepage Next Button is clickable
test('Mdat Home Page Next Button', async ({page}) => {
   await page.getByRole('button', { name: 'NEXT' }).first().click();
})




