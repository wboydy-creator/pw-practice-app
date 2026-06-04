//import { state } from '@angular/animations'

/*This test suite is for the landing page and to test all elements are accessible 
and clickable on the landing page and text is correct and available*/

import {test, expect} from '@playwright/test'

test.describe('Landing Page Tests', () =>{
test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov');
   
    await expect(page).toHaveTitle(/Census/);
    
});
//Test the Official site banner on Landing page is clickable
test('Landing Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
});

//Test the US Census Bureau logo from landing page is clickable
test('Landing Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
});

//Test the Tables Menu link on Landing page is clickable
test('Landing Page Tables Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Tables page.').first().click()
});

//Test the Maps Menu link on Landing page is clickable
test('Landing Page Maps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Maps page.').first().click()
});

//Test the Charts Menu link on Landing page is clickable
test('Landing Page Charts Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Charts page.').first().click()
});

//Test the Profiles Menu link on Landing page is clickable
test('Landing Page Profiles Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Profiles Results page.').first().click()
});

//Test the Microdata Menu link on Landing page is clickable
test('Landing Page Mdat Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the MDAT page.').first().click()
});

//Test the Getting Started Menu link on Landing page is clickable
test('Landing Page Get Started Menu Link', async ({page}) => {
   await page.getByTitle('Learn the basics through short videos and resources').first().click()
});

//Test the Release dropdown Menu link on Landing page is clickable
test('Landing Page Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Releases page.').first().click()
});

//Test the Release dropdown =>Latest Menu link on Landing page is clickable
test('Landing Page Latest dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Releases page.').first().click()
   await page.getByText('Latest').click() 
});

//Test the Release dropdown =>Site Updates Menu link on Landing page is clickable
test('Landing Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Releases page.').first().click()
   await page.getByText('Site Updates').click() 
});

//Test the Help dropdown Menu link on Landing page is clickable
test('Landing Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
});

//Test the Help dropdown =>Resource Menu link on Landing page is clickable
test('Landing Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
});

//Test the Help dropdown =>Tutorials Menu link on Landing page is clickable
test('Landing Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
});

//Test the Help dropdown =>FAQs Menu link on Landing page is clickable
test('Landing Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
});

//Test the Help dropdown =>Contact Us Menu link on Landing page is clickable
test('Landing Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
});

//Test the Search By Address button from landing page is clickable
test('Landing Page Search Button', async ({page}) => {
   await page.getByLabel('Brings up the Search By Address dialog').first().click()
});

//Test the Explorer Filters button from landing page is clickable
test('Landing Page Explorer Button', async ({page}) => {
   await page.getByLabel('Navigates to the Explore Filters page').first().click()
});

//Test the Link for tables on "find tables" from landing page is clickable
test('Landing Page find tables link', async ({page}) => {
   await page.getByLabel('tables').first().click()
});

//Test the Link for maps on "build maps" from landing page is clickable
test('Landing Page build maps link', async ({page}) => {
   await page.getByLabel('maps').first().click()
});

//Test the Link for maps on "access microdata" from landing page is clickable
test('Landing Page access microdata link', async ({page}) => {
   await page.getByLabel('microdata').first().click()
});

//Test the Link for maps on "get started" from landing page is clickable
test('Landing Page get started link', async ({page}) => {
   await page.getByLabel('started').first().click()
});

//Test the Link for table using link "Explore Tables" from landing page is clickable
test('Landing Page explore tables link', async ({page}) => {
   await page.getByText('Explore Tables').click() 
});

//Test the Link for table using chevron "Explore Tables" from landing page is clickable
test('Landing Page explore tables chevron icon', async ({page}) => {
   await page.locator('.aqua-icon.link-icon').first().click()
});

//Test the Link for table using link "Explore Maps" from landing page is clickable
test('Landing Page explore maps link', async ({page}) => {
   await page.getByText('Explore Maps').click() 
});

//Test the Link for table using link "Explore Microdata" from landing page is clickable
test('Landing Page explore microdata link', async ({page}) => {
   await page.getByText('Explore Microdata').click() 
});

//Test the Link for table using link "Explore Resources" from landing page is clickable
test('Landing Page explore resources link', async ({page}) => {
   await page.getByText('Explore Resources').click() 
});

//Test the Link for "Try searching for:" streamer from landing page is clickable
test('Landing Page search streamer', async ({page}) => {
   await page.locator('#typer-1').first().click()
});

//Test the Link for Table image from landing page is clickable
test('Landing Page Table Image', async ({page}) => {
   const image = page.locator('img[alt="Table displaying data from the 2017 Economic Census."]');
   await image.click();
});

//Test the Link for map image from landing page is clickable
test('Landing Page map Image', async ({page}) => {
   const image = page.locator('img[alt="Map visualizing Gini Index data from the 2020 American Community Survey."]');
   await image.click();
});

//Test the Link for Profile map image from landing page is clickable
test('Landing Page Profile map Image', async ({page}) => {
   const image = page.locator('img[alt="Profile displaying a map of and demographic information about Accokeek CDP, Maryland."]');
   await image.click();
});

//Test the Link for Mdat image from landing page is clickable
test('Landing Page MDat Image', async ({page}) => {
   const image = page.locator('img[alt="The Microdata application gives record-level access to Public Use Microdata Sample (PUMS) files."]');
   await image.click();
});

//Test the Link for "Getting started with your search on DCG" image from landing page is clickable
test('Landing Page getting started first Image', async ({page}) => {
   await page.getByLabel('Getting Started with Your Search on data.census.gov video thumbnail').first().click()
});

//Test the Link for "Touring the Mapping Feature on DCG" image from landing page is clickable
test('Landing Page getting started second Image', async ({page}) => {
   await page.getByLabel('Touring the Mapping Feature on data.census.gov video thumbnail').first().click()
});

//Test the Link for "Exploring the Microdata Access Tool (MDAT) on DCG" image from landing page is clickable
test('Landing Page getting started third Image', async ({page}) => {
   await page.getByLabel('Exploring the Microdata Access Tool (MDAT) on data.census.gov video thumbnail').first().click()
});

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

});

/**********************************All pages Menu and links******************************************** */
test.describe('All Page Tests', () => {
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
});

});

/*********************************Tables Page Menu and Links******************************** */

test.describe('Table Page Tests', () => {
test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/table');
   
    await expect(page).toHaveTitle("Census Bureau Tables");
    });

    //Test the Official site banner on Table page is clickable
test('Table Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
});

//Test the US Census Bureau logo from Table page is clickable
test('Table Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
});

//Test the data.census.gov homepage link from Table page is clickable
test('Table Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
});

//Test the Tables Menu link on Table page is clickable
test('Table Page Tables Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Tables' }).first().click();
});

//Test the Maps Menu link on Table page is clickable
test('Table Page Maps Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Maps' }).first().click();
});

//Test the Charts Menu link on Table page is clickable
test('Table Page Charts Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Charts' }).first().click();
});

//Test the Profiles Menu link on Table page is clickable
test('Table Page Profiles Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Profiles' }).first().click();
});

//Test the Pages Menu link on Table page is clickable
test('Table Page Pages Link', async ({page}) => {
   await page.getByRole('link', { name: 'Pages' }).first().click();
});

//Test the All Menu link on Table page is clickable
test('Table Page All Link', async ({page}) => {
   await page.getByRole('link', { name: 'All' }).first().click();
});

//Test the Apps Menu link on Table page is clickable
test('Table Page Apps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Apps page.').first().click()
});

//Test the Help dropdown Menu link on Table page is clickable
test('Table Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
});

//Test the Help dropdown =>Resource Menu link on Table page is clickable
test('Table Page Latest Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Latest Releases').click() 
});

//Test the Help dropdown =>Upcoming Release  Menu link on Table page is clickable
test('Table Page Upcoming Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Upcoming Releases').click() 
});

//Test the Help dropdown =>Site Updates Menu link on Table page is clickable
test('Table Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Site Updates').click() 
});

//Test the Help dropdown =>Resource Menu link on Table page is clickable
test('Table Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
});

//Test the Help dropdown =>Tutorials Menu link on Table page is clickable
test('Table Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
});

//Test the Help dropdown =>FAQs Menu link on Table page is clickable
test('Table Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
});

//Test the Help dropdown =>Contact Us Menu link on Table page is clickable
test('Table Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
});

//Test the Link for Accessibility Icon image from Table page is clickable
test('Table Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
});

});

/**************************Map Menu and Link******************************** */

test.describe('Map Page Tests', () => {
test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/map');
   
    await expect(page).toHaveTitle("Census Bureau Maps");
    });

//Test the Official site banner on Maps page is clickable
test('Maps Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
});

//Test the US Census Bureau logo from Maps page is clickable
test('Maps Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
});

//Test the data.census.gov homepage link from Maps page is clickable
test('Maps Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
});

//Test the Tables Menu link on Maps page is clickable
test('Maps Page Tables Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Tables' }).first().click();
});

//Test the Maps Menu link on Maps page is clickable
test('Maps Page Maps Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Maps' }).first().click();
});

//Test the Charts Menu link on Maps page is clickable
test('Maps Page Charts Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Charts' }).first().click();
});

//Test the Profiles Menu link on Maps page is clickable
test('Maps Page Profiles Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Profiles' }).first().click();
});

//Test the Pages Menu link on Maps page is clickable
test('Maps Page Profiles Pages Link', async ({page}) => {
   await page.getByRole('link', { name: 'Pages' }).first().click();
});

//Test the All Menu link on Maps page is clickable
test('Maps Page Profiles All Link', async ({page}) => {
   await page.getByRole('link', { name: 'All' }).first().click();
});

//Test the Apps Menu link on Maps page is clickable
test('Maps Page Apps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Apps page.').first().click()
});

//Test the Help dropdown Menu link on Maps page is clickable
test('Maps Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
});

//Test the Help dropdown =>Resource Menu link on Maps page is clickable
test('Maps Page Latest Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Latest Releases').click() 
});

//Test the Help dropdown =>Upcoming Release  Menu link on Maps page is clickable
test('Maps Page Upcoming Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Upcoming Releases').click() 
});

//Test the Help dropdown =>Site Updates Menu link on Maps page is clickable
test('Maps Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Site Updates').click() 
});

//Test the Help dropdown =>Resource Menu link on Maps page is clickable
test('Maps Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
});

//Test the Help dropdown =>Tutorials Menu link on Maps page is clickable
test('Maps Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
});

//Test the Help dropdown =>FAQs Menu link on Maps page is clickable
test('Maps Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
});

//Test the Help dropdown =>Contact Us Menu link on Maps page is clickable
test('Maps Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
});

//Test the Link for Accessibility Icon image from Maps page is clickable
test('Maps Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
});

});

/*******************************Chart Page menu and links***************** */

test.describe('Charts Page Tests', () => {
test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/chart');
   
    await expect(page).toHaveTitle("Census Bureau Charts");
    });

//Test the Official site banner on Charts page is clickable
test('Charts Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
});

//Test the US Census Bureau logo from Charts page is clickable
test('Charts Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
});

//Test the data.census.gov homepage link from Charts page is clickable
test('Charts Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
});

//Test the Tables Menu link on Charts page is clickable
test('Charts Page Tables Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Tables' }).first().click();
});

//Test the Maps Menu link on Charts page is clickable
test('Charts Page Maps Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Maps' }).first().click();
});

//Test the Charts Menu link on Charts page is clickable
test('Charts Page Charts Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Charts' }).first().click();
});

//Test the Profiles Menu link on Charts page is clickable
test('Charts Page Profiles Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Profiles' }).first().click();
});

//Test the Pages Menu link on Charts page is clickable
test('Charts Page Pages Link', async ({page}) => {
   await page.getByRole('link', { name: 'Pages' }).first().click();
});

//Test the All Menu link on Charts page is clickable
test('Charts Page All Link', async ({page}) => {
   await page.getByRole('link', { name: 'All' }).first().click();
});

//Test the Apps Menu link on Charts page is clickable
test('Charts Page Apps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Apps page.').first().click()
});

//Test the Help dropdown Menu link on Charts page is clickable
test('Charts Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
});

//Test the Help dropdown =>Resource Menu link on Charts page is clickable
test('Charts Page Latest Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Latest Releases').click() 
});

//Test the Help dropdown =>Upcoming Release  Menu link on Charts page is clickable
test('Charts Page Upcoming Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Upcoming Releases').click() 
});

//Test the Help dropdown =>Site Updates Menu link on Charts page is clickable
test('Charts Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Site Updates').click() 
});

//Test the Help dropdown =>Resource Menu link on Charts page is clickable
test('Charts Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
});

//Test the Help dropdown =>Tutorials Menu link on Charts page is clickable
test('Charts Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
});

//Test the Help dropdown =>FAQs Menu link on Charts page is clickable
test('Charts Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
});

//Test the Help dropdown =>Contact Us Menu link on Charts page is clickable
test('Charts Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
});

//Test the Link for Accessibility Icon image from Charts page is clickable
test('Charts Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
});
});

/*******************************Profiles Page menu and links***************** */

test.describe('Profiles Page Tests', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/profile');
   
    await expect(page).toHaveTitle("Census Bureau Profiles Results");
    });

//Test the Official site banner on Profiles page is clickable
test('Profiles Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
});

//Test the US Census Bureau logo from Profiles page is clickable
test('Profiles Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
});

//Test the data.census.gov homepage link from Profiles page is clickable
test('Profiles Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
});

//Test the Tables Menu link on Profiles page is clickable
test('Profiles Page Tables Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Tables' }).first().click();
});

//Test the Maps Menu link on Profiles page is clickable
test('Profiles Page Maps Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Maps' }).first().click();
});

//Test the Charts Menu link on Profiles page is clickable
test('Profiles Page Charts Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Charts' }).first().click();
});

//Test the Profiles Menu link on Profiles page is clickable
test('Profiles Page Profiles Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Profiles' }).first().click();
});

//Test the Pages Menu link on Profiles page is clickable
test('Profiles Page Pages Link', async ({page}) => {
   await page.getByRole('link', { name: 'Pages' }).first().click();
});

//Test the All Menu link on Profiles page is clickable
test('Profiles Page All Link', async ({page}) => {
   await page.getByRole('link', { name: 'All' }).first().click();
});

//Test the Apps Menu link on Profiles page is clickable
test('Profiles Page Apps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Apps page.').first().click()
});

//Test the Help dropdown Menu link on Profiles page is clickable
test('Profiles Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
});

//Test the Help dropdown =>Resource Menu link on Profiles page is clickable
test('Profiles Page Latest Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Latest Releases').click() 
});

//Test the Help dropdown =>Upcoming Release  Menu link on Profiles page is clickable
test('Profiles Page Upcoming Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Upcoming Releases').click() 
});

//Test the Help dropdown =>Site Updates Menu link on Profiles page is clickable
test('Profiles Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Site Updates').click() 
});

//Test the Help dropdown =>Resource Menu link on Profiles page is clickable
test('Profiles Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
});

//Test the Help dropdown =>Tutorials Menu link on Profiles page is clickable
test('Profiles Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
});

//Test the Help dropdown =>FAQs Menu link on Profiles page is clickable
test('Profiles Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
});

//Test the Help dropdown =>Contact Us Menu link on Profiles page is clickable
test('Profiles Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
});

//Test the Link for Accessibility Icon image from Profiles page is clickable
test('Profiles Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
});

});

/*******************************WebPages Page menu and links***************** */

test.describe('WebPages Page Tests', () => {
   test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/webpages');
   
    await expect(page).toHaveTitle("Census Bureau Pages");
    });

//Test the Official site banner on webPages page is clickable
test('webPages Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
});

//Test the US Census Bureau logo from webPages page is clickable
test('webpages Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
});

//Test the data.census.gov homepage link from webPages page is clickable
test('webPages Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
});

//Test the Tables Menu link on webPages page is clickable
test('webPages Page Tables Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Tables' }).first().click();
});

//Test the Maps Menu link on webPages page is clickable
test('webPages Page Maps Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Maps' }).first().click();
});


//Test the Charts Menu link on webPages page is clickable
test('webPages Page Charts Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Charts' }).first().click();
});

//Test the Profiles Menu link on webPages page is clickable
test('webPages Page Profiles Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Profiles' }).first().click();
});

//Test the Pages Menu link on webPages page is clickable
test('webPages Page Pages Link', async ({page}) => {
   await page.getByRole('link', { name: 'Pages' }).first().click();
});

//Test the All Menu link on webPages page is clickable
test('webPages Page All Link', async ({page}) => {
   await page.getByRole('link', { name: 'All' }).first().click();
});

//Test the Apps Menu link on webPages page is clickable
test('webPages Page Apps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Apps page.').first().click()
});

//Test the Help dropdown Menu link on webPages page is clickable
test('webPages Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
});

//Test the Help dropdown =>Resource Menu link on webPages page is clickable
test('webPages Page Latest Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Latest Releases').click() 
});

//Test the Help dropdown =>Upcoming Release  Menu link on webPages page is clickable
test('webPages Page Upcoming Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Upcoming Releases').click() 
});

//Test the Help dropdown =>Site Updates Menu link on webPages page is clickable
test('webPages Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Site Updates').click() 
});

//Test the Help dropdown =>Resource Menu link on webPages page is clickable
test('webPages Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
});

//Test the Help dropdown =>Tutorials Menu link on webPages page is clickable
test('webPages Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
});

//Test the Help dropdown =>FAQs Menu link on webPages page is clickable
test('webPages Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
});

//Test the Help dropdown =>Contact Us Menu link on webPages page is clickable
test('webPages Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
});

//Test the Link for Accessibility Icon image from webPages page is clickable
test('webPages Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
}); 

});

/*******************************Microdata Page menu and links***************** */

test.describe('Microdata Page Tests', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/app/mdat/');
   
    await expect(page).toHaveTitle("Microdata - Census Bureau Datasets");
    });

//Test the MDat Official site banner clickable
test('Mdat Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
});

//Test the MDat US Census Bureau logo clickable
test('Mdat Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
});

//Test the MDat homepage link is clickable
test('Mdat Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
});

//Test the MDat homepage variable link is clickable
test('Mdat variables menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Variables' }).first().click();
});

//Test the MDat homepage Geographies link is clickable - this is a question on whether geographies should display on homepage
/*test('Mdat Geographies menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Geographies' }).first().click();
})*/

//Test the MDat homepage Cart link is clickable
test('Mdat Cart menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Cart' }).first().click();
});

//Test the MDat homepage Table link is clickable
test('Mdat Table menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Table' }).first().click();
});

//first Mdat chevron to open chevron 
test('Mdat Dataset Chevron ', async ({page}) => {
const dropdown = page.getByRole('combobox').first();

await dropdown.click();//click first time to open

await expect(dropdown).toHaveAttribute('aria-expanded', 'true');//check to see if open

await dropdown.click();//click first time to open

await expect(dropdown).toHaveAttribute('aria-expanded', 'false');//check to see if closed
});

//second (Year) Mdat chevron to open chevron 
test('Mdat year Chevron ', async ({page}) => {
const yearDropdown = page
  .getByRole('combobox')
  .filter({ hasText: '2024' });

await yearDropdown.click();//click first time to open

await expect(yearDropdown).toHaveAttribute('aria-expanded', 'true');//check to see if open

await yearDropdown.click();//clicking second time to close

await expect(yearDropdown).toHaveAttribute('aria-expanded', 'false');//check to see if closed
});

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
});

//Test the Link using "Saved Pages" from Mdat page is clickable
test('Mdat Find Saved Pages link', async ({page}) => {
   await page.getByText("Find your saved page", { exact: true }).click();
});

//Test the MDat homepage Next Button is clickable
test('Mdat Home Page Next Button', async ({page}) => {
   await page.getByRole('button', { name: 'NEXT' }).first().click();
});

});

/*******************************Apps Page menu and links***************** */

test.describe('Apps Page Tests', () => {
test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/app');
   
    await expect(page).toHaveTitle("Census Bureau Apps");
    });

//Test the Official site banner on the Apps page is clickable
test('Apps Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
});

//Test the US Census Bureau logo from Apps page is clickable
test('Apps Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
});

//Test the data.census.gov homepage link from Apps page is clickable
test('Apps Page home page link', async ({page}) => {
   await page.getByLabel('Navigates to the Home page.').first().click()
});

//Test the Tables Menu link on Apps page is clickable
test('Apps Page Tables Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Tables' }).first().click();
});

//Test the Maps Menu link on Apps page is clickable
test('Apps Page Maps Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Maps' }).first().click();
});

//Test the Charts Menu link on Apps page is clickable
test('Apps Page Charts Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Charts' }).first().click();
});

//Test the Profiles Menu link on Apps page is clickable
test('Apps Page Profiles Menu Link', async ({page}) => {
   await page.getByRole('link', { name: 'Profiles' }).first().click();
});

//Test the Pages Menu link on Apps page is clickable
test('Apps Page Pages Link', async ({page}) => {
   await page.getByRole('link', { name: 'Pages' }).first().click();
});

//Test the All Menu link on Apps page is clickable
test('Apps Page  All Link', async ({page}) => {
   await page.getByRole('link', { name: 'All' }).first().click();
});

//Test the Apps Menu link on Apps page is clickable
test('Mdat Page Apps Menu Link', async ({page}) => {
   await page.getByLabel('Navigates to the Apps page.').first().click()
});

//Test the Help dropdown Menu link on Mdat page is clickable
test('Apps Page Help dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
});

//Test the Help dropdown =>Resource Menu link on Apps page is clickable
test('Apps Page Latest Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Latest Releases').click() 
});

//Test the Help dropdown =>Upcoming Release  Menu link on Apps page is clickable
test('Apps Page Upcoming Release dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Upcoming Releases').click() 
});

//Test the Help dropdown =>Site Updates Menu link on Apps page is clickable
test('Apps Page Site Updates dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByText('Site Updates').click() 
});

//Test the Help dropdown =>Resource Menu link on Apps page is clickable
test('Apps Page Resource dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Resources page.').click() 
});

//Test the Help dropdown =>Tutorials Menu link on Apps page is clickable
test('Apps Page Tutorials dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the Tutorials page.').click() 
});

//Test the Help dropdown =>FAQs Menu link on Apps page is clickable
test('Apps Page FAQs dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Navigates to the F A Q page.').click() 
});

//Test the Help dropdown =>Contact Us Menu link on Apps page is clickable
test('Apps Page Contact Us dropdown Link', async ({page}) => {
   await page.getByLabel('Navigates to the Help page.').first().click()
   await page.getByLabel('Send Us an Email').click() 
});

//Test the Link using "Accessibility" from Apps page is clickable
test('Apps Page footer Accessibility link', async ({page}) => {
   await page.getByText("Accessibility", { exact: true }).click();
});

//Test the Link using "Information Quality" from Apps page is clickable
test('Apps Page Information Quality link', async ({page}) => {
   await page.getByText("Information Quality", { exact: true }).click();
});

//Test the Link using "FOIA" from Apps page is clickable
test('Apps Page FOIA link', async ({page}) => {
   await page.getByText("FOIA", { exact: true }).click();
});

//Test the Link using "Data Protection and Privacy Policy" from Apps page is clickable
test('Apps Page Data Protection and Privacy Policy link', async ({page}) => {
   await page.getByText("Data Protection and Privacy Policy", { exact: true }).click();
});

//Test the Link using "U.S. Department of Commerce" from Apps page is clickable
test('Apps Page U.S. Department of Commerce link', async ({page}) => {
   await page.getByText("U.S. Department of Commerce", { exact: true }).click();
});

//Test the Link using "Release Notes" from Apps page is clickable
test('Apps Page Release Notes link', async ({page}) => {
   await page.getByText("Release Notes", { exact: true }).click();
});

//Test the Link for Accessibility Icon image from Apps page is clickable
test('Apps Page Accessibility Image', async ({page}) => {
   await page.getByLabel('Opens the Accessibility panel.').first().click()
});

//Test the Microdata image link on Apps page is clickable
test('Apps image Link', async ({page}) => {
   await page.getByLabel('Navigates to the Microdata page. Opens in a new window.')
});

//Test the Population image link on Apps page is clickable
test('Apps Population image Link', async ({page}) => {
   await page.getByLabel('Navigates to the Population Pyramids page. Opens in a new window.')
})
});