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

//Test the data.census.gov homepage link from all page is clickable
test('All Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
})

//Test the Tables Menu link on All page is clickable
test('All Page Tables Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Tables' }).first().click();
})

//Test the Maps Menu link on All page is clickable
test('All Page Maps Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Maps' }).first().click();
})


//Test the Charts Menu link on All page is clickable
test('All Page Charts Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Charts' }).first().click();
})

//Test the Profiles Menu link on All page is clickable
test('All Page Profiles Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Profiles' }).first().click();
})

//Test the Pages Menu link on All page is clickable
test('All Page Profiles Pages Link', async ({page}) => {
   await page.getByRole('link', { name: 'Pages' }).first().click();
})

//Test the All Menu link on All page is clickable
test('All Page Profiles All Link', async ({page}) => {
   await page.getByRole('link', { name: 'All' }).first().click();
})

//Test the Apps Menu link on All page is clickable
test('All Page Apps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Apps page.').first().click()
})

//Test the Help dropdown Menu link on All page is clickable
test('All Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
})

//Test the Help dropdown =>Resource Menu link on All page is clickable
test('All Page Latest Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Latest Releases').click() 
})

//Test the Help dropdown =>Upcoming Release  Menu link on All page is clickable
test('All Page Upcoming Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Upcoming Releases').click() 
})

//Test the Help dropdown =>Site Updates Menu link on All page is clickable
test('All Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Site Updates').click() 
})

//Test the Help dropdown =>Resource Menu link on All page is clickable
test('All Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
})

//Test the Help dropdown =>Tutorials Menu link on All page is clickable
test('All Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
})

//Test the Help dropdown =>FAQs Menu link on All page is clickable
test('All Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
})

//Test the Help dropdown =>Contact Us Menu link on ALL page is clickable
test('All Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
})

//Test the Link using "Accessibility" from all page is clickable
test('All Page footer Accessibility link', async ({page}) => {
   await page.getByText("Accessibility", { exact: true }).click();
});

//Test the Link using "Information Quality" from all page is clickable
test('All Page Information Quality link', async ({page}) => {
   await page.getByText("Information Quality", { exact: true }).click();
});

//Test the Link using "FOIA" from all page is clickable
test('All Page FOIA link', async ({page}) => {
   await page.getByText("FOIA", { exact: true }).click();
});

//Test the Link using "Data Protection and Privacy Policy" from all page is clickable
test('All Page Data Protection and Privacy Policy link', async ({page}) => {
   await page.getByText("Data Protection and Privacy Policy", { exact: true }).click();
});

//Test the Link using "U.S. Department of Commerce" from all page is clickable
test('All Page U.S. Department of Commerce link', async ({page}) => {
   await page.getByText("U.S. Department of Commerce", { exact: true }).click();
});

//Test the Link using "Release Notes" from all page is clickable
test('All Page Release Notes link', async ({page}) => {
   await page.getByText("Release Notes", { exact: true }).click();
});

//Test the Link for Accessibility Icon image from all page is clickable
test('All Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
})

//Test the VIEW ALL DATASETS(..) button on All page is clickable
test('All Page View All Datasets button', async ({page}) => {
   await page.getByRole('button', { name: 'VIEW ALL Datasets' }).first().click();
})

//Test the VIEW ALL Profiles(..) button on All page is clickable
test('All Page View All Profiles button', async ({page}) => {
   await page.getByRole('button', { name: 'VIEW ALL Profiles' }).first().click();
})

//Test the VIEW ALL Pages(..) button on All page is clickable
test('All Page View All Pages button', async ({page}) => {
   await page.getByRole('button', { name: 'VIEW ALL Pages' }).first().click();
})

//Test the Link for Geo Profile card image from all page is clickable
test('All Page Geo profile card Image', async ({page}) => {
   await page.getByLabel('Explore Data. United States Profile. Click or press enter to navigate to this profile.').first().click()
})

//Test the Table panel table button on All page is clickable
test('All Page Table panel Table button', async ({page}) => {
   await page.getByRole('button', { name: 'Table' }).first().click();
})

//Test the table panel map button on All page is clickable
test('All Page Table panel Map button', async ({page}) => {
   await page.getByRole('button', { name: 'Map' }).first().click();
})

//Test the table panel chart  button on All page is clickable
test('All Page Table panel Chart button', async ({page}) => {
   await page.getByRole('button', { name: 'Chart' }).first().click();
})

