import { test, expect } from '@playwright/test'

test.describe('Microdata Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/profile/');

        await expect(page).toHaveTitle("Census Bureau Profiles Results");
    });

    //Default Mdat selection
    //Test the Mdat default selection (ACS 1-Year Public Use Microdata Sample and latest Vintage)
    test('Access to United States Profile', async ({ page }) => {

        await page.goto('/profile/United_States?g=010XX00US')

        //confirm Nation is the bread crumb profile 
        const nation = page.locator('.profile-type', {
            hasText: 'Nation'
        });

        await expect(nation).toBeVisible();

        //Confirm United States is the heading for the profile page
        await expect(
            page.getByRole('heading', { name: 'United States' })
        ).toBeVisible();

        //Confirm the profile page has the correct start text for the United States
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('The United States consists of 50 States');

        //Clicking the Read more link will expand the text to show the full description of the United States
        await page.getByRole('button', { name: 'Read More' }).first().click();


        const links = page.locator(
            'span.DynamicLinkWrapper .hover-underline-animation'
        );

        const uniqueTexts = [...new Set(await links.allTextContents())];

        //if you want to see on the console the unique texts that were found on the page, you can uncomment the line below
        // console.log(uniqueTexts);

        expect(uniqueTexts).toEqual([
            'District of Columbia',
            'New York, New York',
            'Alaska',
            'Hawaii'
        ]);
        //confirm that there are 4 unique texts found on the page
        expect(uniqueTexts).toHaveLength(4);

        //Clicking the Close button to collapse Read More screen
        await page.getByRole('button', { name: 'CLOSE' }).first().click();

        //Clicking the Share Profile link will expand the text to show the full description of the United States
        await page.getByRole('button', { name: 'Share Profile' }).first().click();

        //Clicking the Close button to collapse share box
        await page.getByRole('button', { name: 'CLOSE' }).first().click();

        const buttons = page.getByRole('button');

        console.log(await buttons.count());

        const highlights = page.locator(
            '.ProfileHighlight .highlight-title button'
        );

        const uniqueHighlights = [
            ...new Set(await highlights.allTextContents())
        ];

        //view available highlights on the console, can uncomment if you want to view
        //console.log(uniqueHighlights);

        //confirm all highlights are available, should be 10 for US profile
        expect(uniqueHighlights).toHaveLength(10);


    });
    //Test the Read More hyperlink
    test('Profile Read More Hyperlink', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US')

        //Clicking the Read more link will expand the text to show the full description of the United States
        await page.getByRole('button', { name: 'Read More' }).first().click();

        const dialog = page.locator('.HeaderDescriptionDialog');

        const dcLink = dialog.getByRole('link', {
            name: 'District of Columbia'
        });

        await dcLink.click();

        //future assertion -  (Defect - failure now, but expected until resolve after cloud migration complete - will uncomment once cloud migration is complete and UI defect is continued)
        //correct assertion once defect(125480) is resolved should be:  https://data.census.gov/profile/District_of_Columbia?g=040XX00US11

        //expecting this URL until after defect is resolved
        await expect(page).toHaveURL(
            '/profile?g=040XX00US11'
        );
    });
    //Test the Discription hyperlink
    test('Profile Description Hyperlink', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US')

        const dialog = page.locator('.DynamicLinkWrapper');

        const dcLink = dialog.getByRole('link', {
            name: 'New York, New York'
        });

        await dcLink.click();

        //confirming URL is correct after seelecting profile
        await expect(page).toHaveURL(
            '/profile/New_York,_New_York?g=160XX00US3651000'
        );
    });
    //Test all available profile states from descrtiption within wrapper (Map)
    test('Profile states from map', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US')

        const hiddenSpans = page.locator('span[style="display: none;"]');

        //verifies all the states plus District of Columbia, Puerto Rico and Alaska
        await expect(hiddenSpans).toHaveCount(53);

    });

    //Test section button 


    //Confirm the Profile section and section URL is correct
    test('People and population Section and confirm Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US');

        //locate populations and people, verify section URL
        const populations = page
            .locator('button[aria-label="Populations and People section"]')
            .first();

        await expect(populations).toBeVisible();
        await populations.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#populations-and-people');

    });

    test('income and poverty Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US');

        //locate income and poverty, verify section URL
        const incomePoverty = page
            .locator('button[aria-label="Income and Poverty section"]')
            .first();

        await expect(incomePoverty).toBeVisible();
        await incomePoverty.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#income-and-poverty');
    });

    test('Education Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US');

        //locate education, verify section URL
        const education = page
            .locator('button[aria-label="Education section"]')
            .first();

        await expect(education).toBeVisible();
        await education.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#education');
    });

    test('Employment Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US');

        //locate employment, verify section URL
        const employment = page
            .locator('button[aria-label="Employment section"]')
            .first();

        await expect(employment).toBeVisible();
        await employment.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#employment');
    });

    test('Housing Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US');

        //locate housing, verify section URL
        const housing = page
            .locator('button[aria-label="Housing section"]')
            .first();

        await expect(housing).toBeVisible();
        await housing.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#housing');
    });

    test('Health Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US');

        //locate health, verify section URL
        const health = page
            .locator('button[aria-label="Health section"]')
            .first();

        await expect(health).toBeVisible();
        await health.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#health');
    });

    test('Business and Economy Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US');

        //locate business and economy, verify section URL
        const businessEconomy = page
            .locator('button[aria-label="Business and Economy section"]')
            .first();

        await expect(businessEconomy).toBeVisible();
        await businessEconomy.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#business-and-economy');
    });

    test('Families and Living Arrangement Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US');

        //locate Families and Living Arrangements, verify section URL
        const familiesLivingArrangement = page
            .locator('button[aria-label="Families and Living Arrangements section"]')
            .first();

        await expect(familiesLivingArrangement).toBeVisible();
        await familiesLivingArrangement.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#families-and-living-arrangements');
    });

    test('Race and Ethnicity Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US');

        //locate Families and Living Arrangements, verify section URL
        const raceEthnicity = page
            .locator('button[aria-label="Race and Ethnicity section"]')
            .first();

        await expect(raceEthnicity).toBeVisible();
        await raceEthnicity.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#race-and-ethnicity');
    });

    test('Test for source toggle switch', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US');

        //confirm toggle switch works and hides source when turnt off
        await expect(
            page.getByRole('link', { name: 'P1 source table' })
        ).toBeVisible();

        const toggle = page.getByRole('switch', {
            name: /Display sources/i
        });

        await expect(toggle).toHaveAttribute('aria-checked', 'true');

        await toggle.click();

        await expect(toggle).toHaveAttribute('aria-checked', 'false');

        await expect(
            page.getByRole('link', { name: 'P1 source table' })
        ).not.toBeVisible();
    });

    test('confirm description in sections has United States for US profile', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people');

        //Under Populations and People, confirm Median Age in United States - is to verify profile has US on sections
        const medianAge = page.locator(
            'p.measure-description',
            { hasText: 'Median Age in United States' }
        );
        await expect(medianAge).toBeVisible();

    });

    
    test('confirm sorce file s0101 table returns link (2024 American Community Survey 1-year Estimates', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people');

        //confirm the source table ACSST1Y2024 table
        const s0101Link = page.locator(
            'a[aria-label="S0101 source table"][href*="ACSST1Y2024"]'
        );

        await expect(s0101Link).toBeVisible();


    });

    test('confirm show table', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people');

        //confirm the Show table button executes and can download table
        const s0101 = page.locator('a[aria-label="S0101 source table"][href*="ACSST1Y2024"]');

        await s0101.scrollIntoViewIfNeeded();

        const showTable = page.locator('span', { hasText: 'Show Table' });

        await showTable.first().click();

        const downloadButton = page.getByRole('button', { name: 'Download Table' });

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            downloadButton.click(),
        ]);

        //confirm success of download
        expect(await download.failure()).toBeNull();

        //close dialogue box
        await page.getByRole('button', { name: /close/i }).click();
    });

    test('Chart toggle switch is and MOE visibility', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people');

        //locate element by label for chart box
        const toggle = page.getByLabel(/Types of Language Spoken at Home chart\. Margin of error toggle switch/i);

        //confirm toggle is visivle and can click
        await expect(toggle).toBeVisible();
        await toggle.click();

const englishMoe = page.getByLabel(
  'The margin of error for English only is plus or minus 0.1%'
);

        //confirm Moe value is present once toggle switch is on
        await expect(englishMoe).toBeVisible();
        await expect(englishMoe).toHaveText(/±\s*0\.1%/);
    });

    test('confirm share-Embed button', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people');

        //click the section share button
        await page.locator('#share-embed-button_population-pyramid--population-by-age-and-sex').click();

        await page.getByRole('button', { name: 'Copy' }).first().click();

        const copyButton = page.locator('button[title="Copy url to clipboard"]');

        await copyButton.click();

        //confirm button on copy updates to Copied!
        await expect(copyButton).toContainText('Copied!');

        //confirm the link is correct for the share-embed button
        const linkInput = page
            .locator('.aqua-text-input')
            .filter({ has: page.locator('.aqua-text-input_label', { hasText: 'Link' }) })
            .locator('input');

        await expect(linkInput).toHaveValue(
            'https://data.census.gov/vizwidget?g=010XX00US&infoSection=Age+and+Sex'
        );

    });
    test('Confirm Business and Economic Map', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#business-and-economy');

        //confirm legend information is present for the Business and Economic Map
        const legend = page.locator('.TopicVizMapLegend');

        //confirm legend is visible
        await expect(legend).toBeVisible();

        const labels = await legend.locator('.label').allTextContents();

        //confirm that there are labels present for the legend
        expect(labels.length).toBeGreaterThan(0);

        //f you want to confirm the exact labels present on the legend, you can uncomment the line below to view them in the console
        /*await expect(labelLocator).toHaveCount(5);
        
        await expect(labelLocator).toHaveText([
          '$805,008,753',
          '$1,429,217,482',
          '$2,053,426,211',
          '$2,677,634,940',
          '$3,301,843,669',
        ]);*/


    });

    test('Confirm elements from Map', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people');

        const map = page.locator('#map-section canvas.maplibregl-canvas');

        await expect(map).toBeVisible();

        // Confirm the map is present and has a bounding box
        const box = await map.boundingBox();
        if (!box) throw new Error('Map not found');

        // Approximate location of Texas (example only)
        await page.locator('#map-section canvas').click({
            position: {
                x: 1013,
                y: 385.375
            }
        });

        // Click on the "View Profile" link in the popup
        await page
            .locator('.MapPopups a.profile-link')
            .getByText('View Profile')
            .click();

        // Confirm that the URL has changed to the Texas profile page
        await expect(page).toHaveURL(/\/profile\/Texas\?g=040XX00US48/);
    });

});








  


 



















