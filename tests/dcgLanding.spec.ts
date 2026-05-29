//import { state } from '@angular/animations'

/*This test suite is for the landing page and to test all elements are accessible 
and clickable on the landing page and text is correct and available*/

import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov');
   
    await expect(page).toHaveTitle(/Census/);
    });

//Test the Official site banner on Landing page is clickable
test('Landing Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
})

//Test the US Census Bureau logo from landing page is clickable
test('Landing Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
})

//Test the Tables Menu link on Landing page is clickable
test('Landing Page Tables Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Tables page.').first().click()
})

//Test the Maps Menu link on Landing page is clickable
test('Landing Page Maps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Maps page.').first().click()
})

//Test the Charts Menu link on Landing page is clickable
test('Landing Page Charts Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Charts page.').first().click()
})

//Test the Profiles Menu link on Landing page is clickable
test('Landing Page Profiles Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Profiles Results page.').first().click()
})

//Test the Microdata Menu link on Landing page is clickable
test('Landing Page Mdat Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the MDAT page.').first().click()
})

//Test the Getting Started Menu link on Landing page is clickable
test('Landing Page Get Started Menu Link', async ({page}) => {
   await page.getByTitle('Learn the basics through short videos and resources').first().click()
})

//Test the Release dropdown Menu link on Landing page is clickable
test('Landing Page Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Releases page.').first().click()
})

//Test the Release dropdown =>Latest Menu link on Landing page is clickable
test('Landing Page Latest dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Releases page.').first().click()
   await page.getByText('Latest').click() 
})

//Test the Release dropdown =>Site Updates Menu link on Landing page is clickable
test('Landing Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Releases page.').first().click()
   await page.getByText('Site Updates').click() 
})

//Test the Help dropdown Menu link on Landing page is clickable
test('Landing Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
})

//Test the Help dropdown =>Resource Menu link on Landing page is clickable
test('Landing Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
})

//Test the Help dropdown =>Tutorials Menu link on Landing page is clickable
test('Landing Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
})

//Test the Help dropdown =>FAQs Menu link on Landing page is clickable
test('Landing Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
})

//Test the Help dropdown =>Contact Us Menu link on Landing page is clickable
test('Landing Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
})


//Test the Search By Address button from landing page is clickable
test('Landing Page Search Button', async ({page}) => {
   await page.getByLabel('Brings up the Search By Address dialog').first().click()
})

//Test the Explorer Filters button from landing page is clickable
test('Landing Page Explorer Button', async ({page}) => {
   await page.getByLabel('Navigates to the Explore Filters page').first().click()
})

//Test the Link for tables on "find tables" from landing page is clickable
test('Landing Page find tables link', async ({page}) => {
   await page.getByLabel('tables').first().click()
})

//Test the Link for maps on "build maps" from landing page is clickable
test('Landing Page build maps link', async ({page}) => {
   await page.getByLabel('maps').first().click()
})

//Test the Link for maps on "access microdata" from landing page is clickable
test('Landing Page access microdata link', async ({page}) => {
   await page.getByLabel('microdata').first().click()
})

//Test the Link for maps on "get started" from landing page is clickable
test('Landing Page get started link', async ({page}) => {
   await page.getByLabel('started').first().click()
})

//Test the Link for table using link "Explore Tables" from landing page is clickable
test('Landing Page explore tables link', async ({page}) => {
   await page.getByText('Explore Tables').click() 
})

//Test the Link for table using chevron "Explore Tables" from landing page is clickable
test('Landing Page explore tables chevron icon', async ({page}) => {
   await page.locator('.aqua-icon.link-icon').first().click()
})

//Test the Link for table using link "Explore Maps" from landing page is clickable
test('Landing Page explore maps link', async ({page}) => {
   await page.getByText('Explore Maps').click() 
})

//Test the Link for table using link "Explore Microdata" from landing page is clickable
test('Landing Page explore microdata link', async ({page}) => {
   await page.getByText('Explore Microdata').click() 
})

//Test the Link for table using link "Explore Resources" from landing page is clickable
test('Landing Page explore resources link', async ({page}) => {
   await page.getByText('Explore Resources').click() 
})

//Test the Link for "Try searching for:" streamer from landing page is clickable
test('Landing Page search streamer', async ({page}) => {
   await page.locator('#typer-1').first().click()
})

//Test the Link for Table image from landing page is clickable
test('Landing Page Table Image', async ({page}) => {
   const image = page.locator('img[alt="Table displaying data from the 2017 Economic Census."]');
   await image.click();
})

//Test the Link for map image from landing page is clickable
test('Landing Page map Image', async ({page}) => {
   const image = page.locator('img[alt="Map visualizing Gini Index data from the 2020 American Community Survey."]');
   await image.click();
})

//Test the Link for Profile map image from landing page is clickable
test('Landing Page Profile map Image', async ({page}) => {
   const image = page.locator('img[alt="Profile displaying a map of and demographic information about Accokeek CDP, Maryland."]');
   await image.click();
})

//Test the Link for Mdat image from landing page is clickable
test('Landing Page MDat Image', async ({page}) => {
   const image = page.locator('img[alt="The Microdata application gives record-level access to Public Use Microdata Sample (PUMS) files."]');
   await image.click();
})

//Test the Link for "Getting started with your search on DCG" image from landing page is clickable
test('Landing Page getting started first Image', async ({page}) => {
   await page.getByLabel('Getting Started with Your Search on data.census.gov video thumbnail').first().click()
})

//Test the Link for "Touring the Mapping Feature on DCG" image from landing page is clickable
test('Landing Page getting started second Image', async ({page}) => {
   await page.getByLabel('Touring the Mapping Feature on data.census.gov video thumbnail').first().click()
})

//Test the Link for "Exploring the Microdata Access Tool (MDAT) on DCG" image from landing page is clickable
test('Landing Page getting started third Image', async ({page}) => {
   await page.getByLabel('Exploring the Microdata Access Tool (MDAT) on data.census.gov video thumbnail').first().click()
})

//Test the Link using "America's" from landing page is clickable
test('Landing Page Americas link', async ({page}) => {
   await page.getByText("America's", { exact: true }).click();
});

//Test the Link using "state" from landing page is clickable
test('Landing Page state link', async ({page}) => {
   await page.getByText("states", { exact: true }).click();
});

//Test the Link using "counties" from landing page is clickable
test('Landing Page counties link', async ({page}) => {
   await page.getByText("counties", { exact: true }).click();
});

//Test the Link using "places" from landing page is clickable
test('Landing Page places link', async ({page}) => {
   await page.getByText("places", { exact: true }).click();
});

//Test the Link using "tribal areas" from landing page is clickable
test('Landing Page tribal areas link', async ({page}) => {
   await page.getByText("tribal areas", { exact: true }).click();
});

//Test the Link using "zip codes" from landing page is clickable
test('Landing Page zip codes link', async ({page}) => {
   await page.getByText("zip codes", { exact: true }).click();
});

//Test the Link using "congressional districts" from landing page is clickable
test('Landing Page congressional districts link', async ({page}) => {
   await page.getByText("congressional districts", { exact: true }).click();
});

//Test the Link using "email - census.data@census.gov" from landing page is clickable
test('Landing Page email link', async ({page}) => {
   await page.getByText("census.data@census.gov", { exact: true }).click();
});

//Test the Link using "Accessibility" from landing page is clickable
test('Landing Page footer Accessibility link', async ({page}) => {
   await page.getByText("Accessibility", { exact: true }).click();
});

//Test the Link using "Information Quality" from landing page is clickable
test('Landing Page Information Quality link', async ({page}) => {
   await page.getByText("Information Quality", { exact: true }).click();
});

//Test the Link using "FOIA" from landing page is clickable
test('Landing Page FOIA link', async ({page}) => {
   await page.getByText("FOIA", { exact: true }).click();
});

//Test the Link using "Data Protection and Privacy Policy" from landing page is clickable
test('Landing Page Data Protection and Privacy Policy link', async ({page}) => {
   await page.getByText("Data Protection and Privacy Policy", { exact: true }).click();
});

//Test the Link using "U.S. Department of Commerce" from landing page is clickable
test('Landing Page U.S. Department of Commerce link', async ({page}) => {
   await page.getByText("U.S. Department of Commerce", { exact: true }).click();
});

//Test the Link using "Release Notes" from landing page is clickable
test('Landing Page Release Notes link', async ({page}) => {
   await page.getByText("Release Notes", { exact: true }).click();
});

//Test the Link for Accessibility Icon image from landing page is clickable
test('Landing Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
})
