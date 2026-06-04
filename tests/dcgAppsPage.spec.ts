//import { state } from '@angular/animations'

/*This test suite is for the MDAT page and to test all elements are accessible 
and clickable on the MDAT page and available*/


import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/app');
   
    await expect(page).toHaveTitle("Census Bureau Apps");
    });

//Test the Official site banner on the MDAT page is clickable
test('Mdat Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
})

//Test the US Census Bureau logo from Mdat page is clickable
test('Mdat Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
})

//Test the data.census.gov homepage link from mdat page is clickable
test('Mdat Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
})

//Test the Tables Menu link on mdat page is clickable
test('MDat Page Tables Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Tables' }).first().click();
})

//Test the Maps Menu link on Mdat page is clickable
test('Mdat Page Maps Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Maps' }).first().click();
})


//Test the Charts Menu link on Mdat page is clickable
test('Mdat Page Charts Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Charts' }).first().click();
})

//Test the Profiles Menu link on Mdat page is clickable
test('Mdat Page Profiles Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Profiles' }).first().click();
})

//Test the Pages Menu link on Mdat page is clickable
test('Mdat Page Pages Link', async ({page}) => {
   await page.getByRole('link', { name: 'Pages' }).first().click();
})

//Test the All Menu link on Mdat page is clickable
test('Mdat Page  All Link', async ({page}) => {
   await page.getByRole('link', { name: 'All' }).first().click();
})

//Test the Apps Menu link on Mdat page is clickable
test('Mdat Page Apps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Apps page.').first().click()
})

//Test the Help dropdown Menu link on Mdat page is clickable
test('Mdat Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
})

//Test the Help dropdown =>Resource Menu link on Mdat page is clickable
test('Mdat Page Latest Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Latest Releases').click() 
})

//Test the Help dropdown =>Upcoming Release  Menu link on Mdat page is clickable
test('Mdat Page Upcoming Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Upcoming Releases').click() 
})

//Test the Help dropdown =>Site Updates Menu link on Mdat page is clickable
test('Mdat Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Site Updates').click() 
})

//Test the Help dropdown =>Resource Menu link on Mdat page is clickable
test('All Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
})

//Test the Help dropdown =>Tutorials Menu link on Mdat page is clickable
test('Mdat Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
})

//Test the Help dropdown =>FAQs Menu link on Mdat page is clickable
test('Mdat Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
})

//Test the Help dropdown =>Contact Us Menu link on Mdat page is clickable
test('Mdat Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
})

//Test the Link using "Accessibility" from Mdat page is clickable
test('Mdat Page footer Accessibility link', async ({page}) => {
   await page.getByText("Accessibility", { exact: true }).click();
});

//Test the Link using "Information Quality" from mdat page is clickable
test('Mdat Page Information Quality link', async ({page}) => {
   await page.getByText("Information Quality", { exact: true }).click();
});

//Test the Link using "FOIA" from mdat page is clickable
test('Mdat Page FOIA link', async ({page}) => {
   await page.getByText("FOIA", { exact: true }).click();
});

//Test the Link using "Data Protection and Privacy Policy" from mdat page is clickable
test('Mdat Page Data Protection and Privacy Policy link', async ({page}) => {
   await page.getByText("Data Protection and Privacy Policy", { exact: true }).click();
});

//Test the Link using "U.S. Department of Commerce" from mdat page is clickable
test('Mdat Page U.S. Department of Commerce link', async ({page}) => {
   await page.getByText("U.S. Department of Commerce", { exact: true }).click();
});

//Test the Link using "Release Notes" from mdat page is clickable
test('Mdat Page Release Notes link', async ({page}) => {
   await page.getByText("Release Notes", { exact: true }).click();
});

//Test the Link for Accessibility Icon image from mdat page is clickable
test('Mdat Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
})

//Test the Microdata image link on Mdat page is clickable
test('Mdat image Link', async ({page}) => {
   await page.getByLabel('Navigates to the Microdata page. Opens in a new window.')
})

//Test the Population image link on Mdat page is clickable
test('Population image Link', async ({page}) => {
   await page.getByLabel('Navigates to the Population Pyramids page. Opens in a new window.')
})

