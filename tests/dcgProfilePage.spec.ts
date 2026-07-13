import { test, expect } from '@playwright/test'

test.describe('Profile Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/profile/');

        await expect(page).toHaveTitle("Census Bureau Profiles Results");
    });

    //Test United States Profile selection
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

        //view all the profile highlights(sections)
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
        await page.goto('/profile/United_States?g=010XX00US', { waitUntil: 'networkidle' });

        //locate income and poverty, verify section URL
        const incomePoverty = page
            .locator('button[aria-label="Income and Poverty section"]')
            .first();

        await expect(incomePoverty).toBeVisible();
        await incomePoverty.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#income-and-poverty');
    });

    test('Education Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US', { waitUntil: 'networkidle' });

        //locate education, verify section URL
        const education = page
            .locator('button[aria-label="Education section"]')
            .first();

        await expect(education).toBeVisible();
        await education.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#education');
    });

    test('Employment Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US', { waitUntil: 'networkidle' });

        //locate employment, verify section URL
        const employment = page
            .locator('button[aria-label="Employment section"]')
            .first();

        await expect(employment).toBeVisible();
        await employment.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#employment');
    });

    test('Housing Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US', { waitUntil: 'networkidle' });

        //locate housing, verify section URL
        const housing = page
            .locator('button[aria-label="Housing section"]')
            .first();

        await expect(housing).toBeVisible();
        await housing.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#housing');
    });

    test('Health Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US', { waitUntil: 'networkidle' });

        //locate health, verify section URL
        const health = page
            .locator('button[aria-label="Health section"]')
            .first();

        await expect(health).toBeVisible();
        await health.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#health');
    });

    test('Business and Economy Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US', { waitUntil: 'networkidle' });

        //locate business and economy, verify section URL
        const businessEconomy = page
            .locator('button[aria-label="Business and Economy section"]')
            .first();

        await expect(businessEconomy).toBeVisible();
        await businessEconomy.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#business-and-economy');
    });

    test('Families and Living Arrangement Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US', { waitUntil: 'networkidle' });

        //locate Families and Living Arrangements, verify section URL
        const familiesLivingArrangement = page
            .locator('button[aria-label="Families and Living Arrangements section"]')
            .first();

        await expect(familiesLivingArrangement).toBeVisible();
        await familiesLivingArrangement.click();

        await expect(page).toHaveURL('/profile/United_States?g=010XX00US#families-and-living-arrangements');
    });

    test('Race and Ethnicity Section URL', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US', { waitUntil: 'networkidle' });

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
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people', { waitUntil: 'networkidle'});

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
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people', { waitUntil: 'networkidle' });

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
        await page.goto('/profile/United_States?g=010XX00US#business-and-economy', { waitUntil: 'networkidle' });

        //confirm legend information is present for the Business and Economic Map
        const legend = page.locator('.TopicVizMapLegend');
        await expect(legend).toBeVisible({ timeout: 50000 });

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

        // Open the dropdown
        const topicTitle = page.locator('.map-topic-title');

        //confirm dropdown list is in view
        await expect(topicTitle).toBeVisible({ timeout: 25000 });

        //verify the drop down header - This should start with American Indain and Alaska Native alone 
        // - but this is a known defect that we created defect.  Once this is resolved, will create test case to cover all topics in drop down
        /*await expect(page.locator('.map-topic-title')).toHaveText(
          'American Indian and Alaska Native alone'
        
        );*/
    });
//confirm the name at bottom of business and economy map.  Defect issue has to be resaolved, will uncomment once business and economy map is fixed

/*test('source label on business and economy map', async ({ page }) => {
    await page.goto('/profile/United_States?g=010XX00US#business-and-economy');
    await expect(
  page.locator('span.source-field.dataset')
).toHaveText('2023 ECNSVY Business Patterns County Business Patterns');

});*/

    //Testing the View Option button on Map(Customize map)
    test('View Options customize map from Map', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#business-and-economy');

        await page.locator('#map-options-button').click();

        const maptopicTitle = page.locator('.map-topic-title');

        await expect(maptopicTitle).toBeVisible();

        await page.locator('#customize-map_annual-payroll').click();

        await expect(page).toHaveURL(
            '/map/010XX00US$04000S0/CBP2023/CB2300CBP/PAYANN?layer=VT_2023_040_00_PP_D1')

    });

       //Testing the View Option button on Map(Show Table) - This will be updated once defect is resolved
    /*test('View Options show table from Map', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#business-and-economy');

        await page.locator('#map-options-button').click();

        const maptopicTitle = page.locator('.map-topic-title');

        await expect(maptopicTitle).toBeVisible();

        await page.locator('#show table_annual-payroll').click();


    });*/

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

    test('Verify the Population Pyramid', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people', { waitUntil: 'networkidle' });

        const populationPyramid = page.locator(
            'section svg g foreignObject'
        );

        await expect(populationPyramid).toBeVisible();

        // Verify the chart header
        await expect(page.locator('text.geo-label')).toHaveText('United States');

        //confirm Female side exist
        await expect(
            page.locator('text.sex-label-text', { hasText: 'Female' })
        ).toBeVisible();

        //confirm Male side exist
        await expect(
            page.locator('text.sex-label-text').getByText('Male', { exact: true })
        ).toBeVisible();

        //confirm male color is light blue
        const maleBar = page.locator('rect.bar.male').first();

        await expect(maleBar).toHaveCSS('fill', 'rgb(122, 212, 226)');


        //confirm male color is light blue
        const femaleBar = page.locator('rect.bar.female').first();



        //confirm female color is light yellow
        await expect(femaleBar).toHaveCSS('fill', 'rgb(255, 213, 52)');

        // hover of male side of pyramid
        await maleBar.hover();

        //highlight of male side of pyramid
        await expect(maleBar).toHaveCSS('fill', 'rgb(39, 198, 222)');

        //hover of female side of pyramid
        await femaleBar.hover();

        //highlight of female side of pyramid
        await expect(femaleBar).toHaveCSS('fill', 'rgb(252, 165, 40)');

        //confirm the y-axis  label
        const ageLabels = page.locator('text.text');

        await expect(ageLabels).toContainText([
            'Under 5 years',
            '5 to 9 years',
            '10 to 14 years',
            '15 to 19 years',
            '20 to 24 years',
            '25 to 29 years',
            '30 to 34 years',
            '35 to 39 years',
            '40 to 44 years',
            '45 to 49 years',
            '50 to 54 years',
            '55 to 59 years',
            '60 to 64 years',
            '65 to 69 years',
            '70 to 74 years',
            '75 to 79 years',
            '80 to 84 years',
            '85 years and over',
        ]);

        //confirm the x-axis lavel
        const ticks = page.locator('svg text')
            .filter({ hasText: /^(0|5M|10M)$/ })
            .first();

        await expect(ticks).toBeVisible();

        //select the + Display Margin of Error
        await page
            .locator('#moe-toggle_population-pyramid--population-by-age-and-sex')
            .click();

        //Access the pyramid view with MOE
        const moe = page.locator('tspan.bar-label-moe');

        //Confirm MOE is displaying on Pyramid
        await expect(moe.first()).toBeVisible();
    });

    test('Language spoke at home section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people');

        //locate element in SupTopic
        const languageSection = page
            .locator('#subtopic_language-spoken-at-home')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Language Spoken at Home
        await expect(languageSection.locator('h3.topic-title'))
            .toHaveText('Language Spoken at Home');

        // Chart title - Language spoken at Home
        await expect(languageSection.locator('h4.chart-title'))
            .toHaveText('Types of Language Spoken at Home');

        // Metric for Language Spoken at home overall percentage
        await expect(languageSection.locator('.measure-estimate-value'))
            .toHaveText('23.0%');

        // MOE - for Language Spoken at home
        await expect(languageSection.locator('.measure-moe'))
            .toContainText('0.1%');

        // description - additional subtopic information
        await expect(languageSection.locator('.measure-description'))
            .toContainText('Language Other Than English Spoken at Home');

        // confirm that the chart exists in the Language Spoken at Home section
        await expect(languageSection.locator('.chart-component'))
            .toBeVisible();
    });
    test('Native and Foreign born section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const nativeSection = page
            .locator('#subtopic_native-and-foreign-born')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Native and Foreign-Born
        await expect(nativeSection.locator('h3.topic-title'))
            .toHaveText('Native and Foreign-Born');

        // Chart title - Native and Foreign-Born
        await expect(nativeSection.locator('h4.chart-title'))
            .toHaveText('Foreign-Born Population');

        // Metric for Native and Foreign-Born overall percentage
        await expect(nativeSection.locator('.measure-estimate-value'))
            .toHaveText('14.8%');

        // MOE - for Native and Foreign-Born
        await expect(nativeSection.locator('.measure-moe'))
            .toContainText('0.1%');

        // description - additional subtopic information
        await expect(nativeSection.locator('.measure-description'))
            .toContainText('Foreign-Born population in United States');

        // confirm that the chart exists in the Native and Foreign Born section
        await expect(nativeSection.locator('.chart-component'))
            .toBeVisible();
    });

    test('Older Population section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const olderPopSection = page
            .locator('#subtopic_older-population')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Older Population
        await expect(olderPopSection.locator('h3.topic-title'))
            .toHaveText('Older Population');

        // Chart title - Older Population
        await expect(olderPopSection.locator('h4.chart-title'))
            .toHaveText('Older Population by Age');

        // Metric for Older Population overall percentage
        await expect(olderPopSection.locator('.measure-estimate-value'))
            .toHaveText('18.0%');

        // MOE - for Older Population
        await expect(olderPopSection.locator('.measure-moe'))
            .toContainText('0.1%');

        // description - additional subtopic information
        await expect(olderPopSection.locator('.measure-description'))
            .toContainText('65 Years and Older in United States');

        // confirm that the chart exists in the Older Population section
        await expect(olderPopSection.locator('.chart-component'))
            .toBeVisible();
    });

    test('Residential Mobility section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const residentialSection = page
            .locator('#subtopic_residential-mobility')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // title - Residential Mobilitry
        await expect(residentialSection.locator('h3.topic-title'))
            .toHaveText('Residential Mobility');

        // Chart title - Residential Mobility
        await expect(residentialSection.locator('h4.chart-title'))
            .toHaveText('Residential Mobility in the Last Year');

        // Metric for Residential Mobility overall percentage
        await expect(residentialSection.locator('.measure-estimate-value'))
            .toHaveText('2.1%');

        // MOE - for Residential Mobility
        await expect(residentialSection.locator('.measure-moe'))
            .toContainText('0.1%');

        // description - additional subtopic information
        await expect(residentialSection.locator('.measure-description'))
            .toContainText('Moved From a Different State in the Last Year in United States');

        // confirm that the chart exists in the Residential Mobility section
        await expect(residentialSection.locator('.chart-component'))
            .toBeVisible();
    });

    test('Veterans section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#populations-and-people', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const vetSection = page
            .locator('#subtopic_veterans')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Veterans
        await expect(vetSection.locator('h3.topic-title'))
            .toHaveText('Veterans');

        // Chart title - Veterans
        await expect(vetSection.locator('h4.chart-title'))
            .toHaveText('Veterans by Sex');

        // Metric for veterans overall percentage
        await expect(vetSection.locator('.measure-estimate-value'))
            .toHaveText('5.9%');

        // MOE - for veterans section
        await expect(vetSection.locator('.measure-moe'))
            .toContainText('0.1%');

        // description - additional subtopic information
        await expect(vetSection.locator('.measure-description'))
            .toContainText('Veterans in United States');

        // confirm that the chart exists in the Veterans section
        await expect(vetSection.locator('.chart-component'))
            .toBeVisible();
    });

    test('Income and Earnings section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#income-and-poverty', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const incomeSection = page
            .locator('#subtopic_income-and-earnings')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Income and Earnings
        await expect(incomeSection.locator('h3.topic-title'))
            .toHaveText('Income and Earnings');

        // Chart title - income and Earnings
        await expect(incomeSection.locator('h4.chart-title'))
            .toHaveText('Median Income by Types of Families');

        // Metric for income and earnings overall percentage
        await expect(incomeSection.locator('.measure-estimate-value'))
            .toHaveText('$81,604');

        // MOE - for income and earnings section
        await expect(incomeSection.locator('.measure-moe'))
            .toContainText('$128');

        // description - additional subtopic information
        await expect(incomeSection.locator('.measure-description'))
            .toContainText('Median Household Income in United States');

        // confirm that the chart exists in the income and earnings section
        await expect(incomeSection.locator('.chart-component'))
            .toBeVisible();
    });
    test('Poverty section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#income-and-poverty', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const povertySection = page
            .locator('#subtopic_poverty')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Poverty
        await expect(povertySection.locator('h3.topic-title'))
            .toHaveText('Poverty');

        // Chart title - Poverty
        await expect(povertySection.locator('h4.chart-title'))
            .toHaveText('Poverty by Age');

        // Metric for Poverty overall percentage
        await expect(povertySection.locator('.measure-estimate-value'))
            .toHaveText('12.1%');

        // MOE - for Poverty section
        await expect(povertySection.locator('.measure-moe'))
            .toContainText('0.1%');

        // description - additional subtopic information
        await expect(povertySection.locator('.measure-description'))
            .toContainText('Poverty, All people in United States');

        // confirm that the chart exists in the Poverty section
        await expect(povertySection.locator('.chart-component'))
            .toBeVisible();
    });

    test('Education Attainment section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#education', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const educationSection = page
            .locator('#subtopic_educational-attainment')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Education Attainment
        await expect(educationSection.locator('h3.topic-title'))
            .toHaveText('Educational Attainment');

        // Chart title - Education Attainment
        await expect(educationSection.locator('h4.chart-title'))
            .toHaveText('Education Attainment (Population 25 Years and Older)');

        // Metric for Education overall percentage
        await expect(educationSection.locator('.measure-estimate-value'))
            .toHaveText('36.8%');

        // MOE - for Education section
        await expect(educationSection.locator('.measure-moe'))
            .toContainText('0.1%');

        // description - additional subtopic information
        await expect(educationSection.locator('.measure-description'))
            .toContainText('Bachelor\'s Degree or Higher in United States');

        // confirm that the chart exists in the School Enrollment section
        await expect(educationSection.locator('.chart-component'))
            .toBeVisible();
    });

    test('School Enrollment section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#education', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const schoolSection = page
            .locator('#subtopic_school-enrollment')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - School Enrollment
        await expect(schoolSection.locator('h3.topic-title'))
            .toHaveText('School Enrollment');

        // Chart title - School Enrollment
        await expect(schoolSection.locator('h4.chart-title'))
            .toHaveText('School Enrollment (Population 3 Years and Over Enrolled in School)');

        // Metric for School Enrollment overall percentage
        await expect(schoolSection.locator('.measure-estimate-value'))
            .toHaveText('67.2%');

        // MOE - for School Enrollment section
        await expect(schoolSection.locator('.measure-moe'))
            .toContainText('0.1%');

        // description - additional subtopic information
        await expect(schoolSection.locator('.measure-description'))
            .toContainText('School Enrolled Population Enrolled in Kindergarten to 12th Grade in United States');

        // confirm that the chart exists in the School Enrollment section
        await expect(schoolSection.locator('.chart-component'))
            .toBeVisible();
    });

    test('Class of Worker section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#employment', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const workerSection = page
            .locator('#subtopic_class-of-worker')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Class of Worker
        await expect(workerSection.locator('h3.topic-title'))
            .toHaveText('Class of Worker');

        // Chart title - Class of Worker
        await expect(workerSection.locator('h4.chart-title'))
            .toHaveText('Class of Worker');

        // Metric for Class of Worker overall percentage
        await expect(workerSection.locator('.measure-estimate-value'))
            .toHaveText('14.6%');

        // MOE - for Class of Worker section
        await expect(workerSection.locator('.measure-moe'))
            .toContainText('0.1%');

        // description - additional subtopic information
        await expect(workerSection.locator('.measure-description'))
            .toContainText('Local, state, and federal government workers in United States');

        // confirm that the chart exists in the Class of Worker section
        await expect(workerSection.locator('.chart-component'))
            .toBeVisible();
    });

    test('Commuting section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#employment', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const commuteSection = page
            .locator('#subtopic_commuting')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // Subsection title - Commuting
        await expect(commuteSection.locator('h3.topic-title'))
            .toHaveText('Commuting');

        // Chart title - Commuting
        await expect(commuteSection.locator('h4.chart-title'))
            .toHaveText('Means of Transportation to Work (Workers 16 Years and Over)');

        // Metric for Commuting overall percentage
        await expect(commuteSection.locator('.measure-estimate-value'))
            .toHaveText('27.2');

        // MOE - for Commuting section
        await expect(commuteSection.locator('.measure-moe'))
            .toContainText('0.1');

        // description - additional subtopic information
        await expect(commuteSection.locator('.measure-description'))
            .toContainText('Average travel time to work (in minutes) in United States');

        // confirm that the chart exists in the Commuting section
        await expect(commuteSection.locator('.chart-component'))
            .toBeVisible();
    });

     test('Employment and Labor Force section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#employment', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const laborSection = page
            .locator('#subtopic_employment-and-labor-force-status')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Employment and Labor Force Status
        await expect(laborSection.locator('h3.topic-title'))
            .toHaveText('Employment and Labor Force Status');

        // Chart title - Industry
        await expect(laborSection.locator('h4.chart-title'))
            .toHaveText('Employment Rate');

        // Metric for Employment and Labor Force overall percentage
        await expect(laborSection.locator('.measure-estimate-value'))
            .toHaveText('60.6%');

        // MOE - for Employment and Labor Force section
        await expect(laborSection.locator('.measure-moe'))
            .toContainText('0.1');

        // description - additional subtopic information
        await expect(laborSection.locator('.measure-description'))
            .toContainText('Employment Rate in United States');

        // confirm that the chart exists in the Employment and Labor Force Status section
        await expect(laborSection.locator('.chart-component'))
            .toBeVisible();
    });

     test('Industry section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#employment', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const industrySection = page
            .locator('#subtopic_industry')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Industry
        await expect(industrySection.locator('h3.topic-title'))
            .toHaveText('Industry');

        // Chart title - Industry
        await expect(industrySection.locator('h4.chart-title'))
            .toHaveText('Industry for the Civilian Employed Population 16 Years and Over');

        // confirm that the chart exists in the Industry section
        await expect(industrySection.locator('.chart-component'))
            .toBeVisible();
    });

       test('Occupation section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#employment', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const occupationSection = page
            .locator('#subtopic_occupation')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Occupation
        await expect(occupationSection.locator('h3.topic-title'))
            .toHaveText('Occupation');

        // Chart title - Occupation
        await expect(occupationSection.locator('h4.chart-title'))
            .toHaveText('Occupation for the Civilian Employed Population 16 Years and Over');

        // confirm that the chart exists in the Occupation section
        await expect(occupationSection.locator('.chart-component'))
            .toBeVisible();
    });

        test('Work Experience section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#employment', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const workSection = page
            .locator('#subtopic_work-experience')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Work Experience
        await expect(workSection.locator('h3.topic-title'))
            .toHaveText('Work Experience');

        // Chart title - Work Experience
        await expect(workSection.locator('h4.chart-title'))
            .toHaveText('Mean Usual Hours Worked for Workers by Sex');

        // Metric for Work Experience overall percentage
        await expect(workSection.locator('.measure-estimate-value'))
            .toHaveText('38.4');

        // MOE - for Work Experience section
        await expect(workSection.locator('.measure-moe'))
            .toContainText('0.1');

        // description - additional subtopic information
        await expect(workSection.locator('.measure-description'))
            .toContainText('Mean Usual Hours Worked for Workers in United States');

        // confirm that the chart exists in the WorkExperience section
        await expect(workSection.locator('.chart-component'))
            .toBeVisible();
    });

        test('Financial section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#housing', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const financeSection = page
            .locator('#subtopic_financial-characteristics')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Financial Characteristics
        await expect(financeSection.locator('h3.topic-title'))
            .toHaveText('Financial Characteristics');

        // Chart title - Financial Characteristics
        await expect(financeSection.locator('h4.chart-title'))
            .toHaveText('Occupied Units Paying Rent');

        // Metric for Financial Characteristics overall percentage
        await expect(financeSection.locator('.measure-estimate-value'))
            .toHaveText('$1,487');

        // MOE - for Financial Characteristics section
        await expect(financeSection.locator('.measure-moe'))
            .toContainText('$3');

        // description - additional subtopic information
        await expect(financeSection.locator('.measure-description'))
            .toContainText('Median Gross Rent in United States');

        // confirm that the chart exists in the Financial Characteristics section
        await expect(financeSection.locator('.chart-component'))
            .toBeVisible();
    });

       test('Health and Safety section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#housing', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const healthSection = page
            .locator('#subtopic_health-and-safety-characteristics')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Health and Safety Characteristics
        await expect(healthSection.locator('h3.topic-title'))
            .toHaveText('Health and Safety Characteristics');

        // Metric for Health and Safety overall percentage
        await expect(healthSection.locator('.measure-estimate-value'))
            .toHaveText('14,003,818');

        // MOE - for Health and Safety section
        await expect(healthSection.locator('.measure-moe'))
            .toContainText('145,175');

        // description - additional subtopic information
        await expect(healthSection.locator('.measure-description'))
            .toContainText('Vacant Housing Units in United States');

    });

        test('Homeownership Rate section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#housing', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const homeSection = page
            .locator('#subtopic_homeownership-rate')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Homeownership Rate
        await expect(homeSection.locator('h3.topic-title'))
            .toHaveText('Homeownership Rate');

        // Chart title - Homeownership Rate
        await expect(homeSection.locator('h4.chart-title'))
            .toHaveText('Housing Value');

        // Metric for Homeownership Rate overall percentage
        await expect(homeSection.locator('.measure-estimate-value'))
            .toHaveText('65.3%');

        // MOE - for Homeownership Rate section
        await expect(homeSection.locator('.measure-moe'))
            .toContainText('0.1%');

        // description - additional subtopic information
        await expect(homeSection.locator('.measure-description'))
            .toContainText('Homeownership Rate in United States');

        // confirm that the chart exists in the Homeownership Rate section
        await expect(homeSection.locator('.chart-component'))
            .toBeVisible();
    });

            test('Housing Units section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#housing', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const housingSection = page
            .locator('#subtopic_housing-units')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Homeownership Rate
        await expect(housingSection.locator('h3.topic-title'))
            .toHaveText('Housing Units');

        // Chart title - Housing Units
        await expect(housingSection.locator('h4.chart-title'))
            .toHaveText('Housing Occupancy');

        // Metric for Housing Units overall percentage
        await expect(housingSection.locator('.measure-estimate-value'))
            .toHaveText('146,740,964');

        // MOE - for Housing Units section
        await expect(housingSection.locator('.measure-moe'))
            .toContainText('8,590');

        // description - additional subtopic information
        await expect(housingSection.locator('.measure-description'))
            .toContainText('Total Housing Units in United States');

        // confirm that the chart exists in the Housing Units section
        await expect(housingSection.locator('.chart-component'))
            .toBeVisible();
    });

        test('Occupancy Characteristics section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#housing', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const occupancySection = page
            .locator('#subtopic_occupancy-characteristics')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Occupancy Characteristics
        await expect(occupancySection.locator('h3.topic-title'))
            .toHaveText('Occupancy Characteristics');

        // Chart title - Occupancy Characteristics
        await expect(occupancySection.locator('h4.chart-title'))
            .toHaveText('Owner Occupied Housing Units by Types of Households');

        // Metric for Occupancy Characteristics overall percentage
        await expect(occupancySection.locator('.measure-estimate-value'))
            .toHaveText('132,737,146');

        // MOE - for Occupancy Characteristics section
        await expect(occupancySection.locator('.measure-moe'))
            .toContainText('140,273');

        // description - additional subtopic information
        await expect(occupancySection.locator('.measure-description'))
            .toContainText('Occupied Housing Units in United States');

        // confirm that the chart exists in the Occupancy Characteristics section
        await expect(occupancySection.locator('.chart-component'))
            .toBeVisible();
    });

     test('Physical Characteristics section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#housing', { waitUntil: 'networkidle' });

         //locate element in SupTopic
         const physicalSection = page
             .locator('#subtopic_physical-characteristics')
             .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

         // SubSection title - Physical Characteristics
         await expect(physicalSection.locator('h3.topic-title'))
             .toHaveText('Physical Characteristics');

         // Chart title - Physical Characteristics
         await expect(physicalSection.locator('h4.chart-title'))
             .toHaveText('Bedrooms in Occupied Housing Units');

         // Metric for Physical Characteristics overall percentage
         await expect(physicalSection.locator('.measure-estimate-value'))
             .toHaveText('24.0%');

         // MOE - for Physical Characteristics section
         await expect(physicalSection.locator('.measure-moe'))
             .toContainText('0.1%');

         // description - additional subtopic information
         await expect(physicalSection.locator('.measure-description'))
             .toContainText('Occupied Housing Units with Four or More Bedrooms in United States');

         // confirm that the chart exists in the Physical Characteristics section
         await expect(physicalSection.locator('.chart-component'))
             .toBeVisible();
     });

    test('Vacancy section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#housing', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const vacancySection = page
            .locator('#subtopic_vacancy')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Vacancy
            await expect(vacancySection.locator('h3.topic-title'))
                .toHaveText('Vacancy');

            // Chart title - Vacancy
            await expect(vacancySection.locator('h4.chart-title'))
                .toHaveText('Vacancy Rate');

            // Metric for Vacancy overall percentage
            await expect(vacancySection.locator('.measure-estimate-value'))
                .toHaveText('14,003,818');

            // MOE - for Vacancy section
            await expect(vacancySection.locator('.measure-moe'))
                .toContainText('145,175');

            // description - additional subtopic information
            await expect(vacancySection.locator('.measure-description'))
                .toContainText('Vacant Housing Units in United States');

            // confirm that the chart exists in the Vacancy section
            await expect(vacancySection.locator('.chart-component'))
                .toBeVisible();
        });

        test('Disability section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#health', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const disabilitySection = page
            .locator('#subtopic_disability')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Disability
            await expect(disabilitySection.locator('h3.topic-title'))
                .toHaveText('Disability');

            // Chart title - Disability
            await expect(disabilitySection.locator('h4.chart-title'))
                .toHaveText('Types of Disabilities');

            // Metric for Disability overall percentage
            await expect(disabilitySection.locator('.measure-estimate-value'))
                .toHaveText('13.7%');

            // MOE - for Disability section
            await expect(disabilitySection.locator('.measure-moe'))
                .toContainText('0.1%');

            // description - additional subtopic information
            await expect(disabilitySection.locator('.measure-description'))
                .toContainText('Disabled Population in United States');

            // confirm that the chart exists in the Disability section
            await expect(disabilitySection.locator('.chart-component'))
                .toBeVisible();
        });

        test('Fertility section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#health', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const fertilitySection = page
            .locator('#subtopic_fertility')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Fertility
            await expect(fertilitySection.locator('h3.topic-title'))
                .toHaveText('Fertility');

            // Chart title - Fertility
            await expect(fertilitySection.locator('h4.chart-title'))
                .toHaveText('Women with Births in the Past 12 Months');

            // Metric for Fertility overall percentage
            await expect(fertilitySection.locator('.measure-estimate-value'))
                .toHaveText('79,622,525');

            // MOE - for Fertility section
            await expect(fertilitySection.locator('.measure-moe'))
                .toContainText('38,515');

            // description - additional subtopic information
            await expect(fertilitySection.locator('.measure-description'))
                .toContainText('Women 15 to 50 years old in United States');

            // confirm that the chart exists in the Fertility section
            await expect(fertilitySection.locator('.chart-component'))
                .toBeVisible();
        });

        test('Health Insurance section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#health', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const insuranceSection = page
            .locator('#subtopic_health-insurance')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Health Insurance
            await expect(insuranceSection.locator('h3.topic-title'))
                .toHaveText('Health Insurance');

            // Chart title - Health Insurance
            await expect(insuranceSection.locator('h4.chart-title'))
                .toHaveText('Population Without Health Insurance Coverage');

            // Metric for Health Insurance overall percentage
            await expect(insuranceSection.locator('.measure-estimate-value'))
                .toHaveText('8.2%');

            // MOE - for Health Insurance section
            await expect(insuranceSection.locator('.measure-moe'))
                .toContainText('0.1%');

            // description - additional subtopic information
            await expect(insuranceSection.locator('.measure-description'))
                .toContainText('Without Health Care Coverage in United States');

            // confirm that the chart exists in the Health Insurance section
            await expect(insuranceSection.locator('.chart-component'))
                .toBeVisible();
        });

    test('Expenses and expenditures section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#business-and-economy', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const insuranceSection = page
            .locator('#subtopic_expenses-and-expenditures')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Expenses and Expenditures
        await expect(insuranceSection.locator('h3.topic-title'))
            .toHaveText('Expenses and Expenditures');

        // Metric for Expenses and Expenditures overall percentage
        await expect(insuranceSection.locator('.measure-estimate-value'))
            .toHaveText('$529,751,969');

        // description - additional subtopic information
        await expect(insuranceSection.locator('.measure-description'))
            .toContainText('Total Annual Payroll (in thousands) in United States for 23: Construction');
    });

    test('Children section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#families-and-living-arrangements', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const childrenSection = page
            .locator('#subtopic_children')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Children
            await expect(childrenSection.locator('h3.topic-title'))
                .toHaveText('Children');

            // Chart title - Children
            await expect(childrenSection.locator('h4.chart-title'))
                .toHaveText('Children Under 18 by Age Range');

            // Metric for Children overall percentage
            await expect(childrenSection.locator('.measure-estimate-value'))
                .toHaveText('21.4%');

            // MOE - for Children section
            await expect(childrenSection.locator('.measure-moe'))
                .toContainText('0.1%');

            // description - additional subtopic information
            await expect(childrenSection.locator('.measure-description'))
                .toContainText('Under 18 years old in United States');

            // confirm that the chart exists in the Children section
            await expect(childrenSection.locator('.chart-component'))
                .toBeVisible();
        });

        test('Families and Household section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#families-and-living-arrangements', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const familiesSection = page
            .locator('#subtopic_families-and-household-characteristics')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Families and Household
            await expect(familiesSection.locator('h3.topic-title'))
                .toHaveText('Families and Household Characteristics');

            // Chart title - Families and Household4
            await expect(familiesSection.locator('h4.chart-title'))
                .toHaveText('Total Households by Type of Households');

            // Metric for Families and Household overall percentage
            await expect(familiesSection.locator('.measure-estimate-value'))
                .toHaveText('3.11');

            // MOE - for Families and Household section
            await expect(familiesSection.locator('.measure-moe'))
                .toContainText('± 0.01');

            // description - additional subtopic information
            await expect(familiesSection.locator('.measure-description'))
                .toContainText('Average Family Size in United States');

            // confirm that the chart exists in the Families and Household section
            await expect(familiesSection.locator('.chart-component'))
                .toBeVisible();
        });

        test('Marital Status and Marital History section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#families-and-living-arrangements', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const maritalSection = page
            .locator('#subtopic_marital-status-and-marital-history')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Marital Status and Marital History
            await expect(maritalSection.locator('h3.topic-title'))
                .toHaveText('Marital Status and Marital History');

            // Chart title - Marital Status and Marital History
            await expect(maritalSection.locator('h4.chart-title'))
                .toHaveText('Marital Status by Sex');

            // Metric for Marital Status and Marital History overall percentage
            await expect(maritalSection.locator('.measure-estimate-value'))
                .toHaveText('34.8%');

            // MOE - for Marital Status and Marital History section
            await expect(maritalSection.locator('.measure-moe'))
                .toContainText('± 0.1%');

            // description - additional subtopic information
            await expect(maritalSection.locator('.measure-description'))
                .toContainText('Never Married in United States');

            // confirm that the chart exists in the Marital Status and Marital History section
            await expect(maritalSection.locator('.chart-component'))
                .toBeVisible();
        }); 

         test('American Indian and Alaska Native section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#race-and-ethnicity', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const alaskaSection = page
            .locator('#subtopic_american-indian-and-alaska-native')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - American Indian and Alaska Native
            await expect(alaskaSection.locator('h3.topic-title'))
                .toHaveText('American Indian and Alaska Native');

            // Metric for American Indian and Alaska Native overall percentage
            await expect(alaskaSection.locator('.measure-estimate-value'))
                .toHaveText('3,727,135');

           // description - additional subtopic information
            await expect(alaskaSection.locator('.measure-description'))
                .toContainText('American Indian and Alaska Native alone in United States');
        }); 

        test('Asian section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#race-and-ethnicity', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const asianSection = page
            .locator('#subtopic_asian')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Asian
            await expect(asianSection.locator('h3.topic-title'))
                .toHaveText('Asian');

            // Metric for Asian overall percentage
            await expect(asianSection.locator('.measure-estimate-value'))
                .toHaveText('19,886,049');

           // description - additional subtopic information
            await expect(asianSection.locator('.measure-description'))
                .toContainText('Asian alone in United States');
        }); 

        test('Black or African American section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#race-and-ethnicity', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const africanSection = page
            .locator('#subtopic_black-or-african-american')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Black or African American
            await expect(africanSection.locator('h3.topic-title'))
                .toHaveText('Black or African American');

            // Metric for Black or African American overall percentage
            await expect(africanSection.locator('.measure-estimate-value'))
                .toHaveText('41,104,200');

           // description - additional subtopic information
            await expect(africanSection.locator('.measure-description'))
                .toContainText('Black or African American alone in United States');
        }); 

        test('Hispanic or Latino section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#race-and-ethnicity', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const hispanicSection = page
            .locator('#subtopic_hispanic-or-latino')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Hispanic or Latino
            await expect(hispanicSection.locator('h3.topic-title'))
                .toHaveText('Hispanic or Latino');

            // Metric for Hispanic or Latino overall percentage
            await expect(hispanicSection.locator('.measure-estimate-value'))
                .toHaveText('62,080,044');

           // description - additional subtopic information
            await expect(hispanicSection.locator('.measure-description'))
                .toContainText('Hispanic or Latino (of any race) in United States');
        }); 

        test('Native Hawaiian and Other Pacific Islander section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#race-and-ethnicity', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const nativeSection = page
            .locator('#subtopic_native-hawaiian-and-other-pacific-islander')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Native Hawaiian and Other Pacific Islander
            await expect(nativeSection.locator('h3.topic-title'))
                .toHaveText('Native Hawaiian and Other Pacific Islander');

            // Metric for Hispanic or Latino overall percentage
            await expect(nativeSection.locator('.measure-estimate-value'))
                .toHaveText('689,966');

           // description - additional subtopic information
            await expect(nativeSection.locator('.measure-description'))
                .toContainText('Native Hawaiian and Other Pacific Islander alone in United States');
        }); 

        test('Not Hispanic or Latino section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#race-and-ethnicity', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const notHispanicSection = page
            .locator('#subtopic_not-hispanic-or-latino')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

            // SubSection title - Native Hawaiian and Other Pacific Islander
            await expect(notHispanicSection.locator('h3.topic-title'))
                .toHaveText('Not Hispanic or Latino');

            // Metric for Hispanic or Latino overall percentage
            await expect(notHispanicSection.locator('.measure-estimate-value'))
                .toHaveText('191,697,647');

           // description - additional subtopic information
            await expect(notHispanicSection.locator('.measure-description'))
                .toContainText('White alone, not Hispanic or Latino in United States');
        });

    test('Some Other Race section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#race-and-ethnicity', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const otherSection = page
            .locator('#subtopic_some-other-race')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Some Other Race
        await expect(otherSection.locator('h3.topic-title'))
            .toHaveText('Some Other Race');

        // Metric for Some Other Race overall percentage
        await expect(otherSection.locator('.measure-estimate-value'))
            .toHaveText('27,915,715');

        // description - additional subtopic information
        await expect(otherSection.locator('.measure-description'))
            .toContainText('Some Other Race alone in United States');
    });

    test('Two or More Races section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#race-and-ethnicity', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const moreRacesSection = page
            .locator('#subtopic_two-or-more-races')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Two or More Races
        await expect(moreRacesSection.locator('h3.topic-title'))
            .toHaveText('Two or More Races');

        // Metric for Two or More Races overall percentage
        await expect(moreRacesSection.locator('.measure-estimate-value'))
            .toHaveText('33,848,943');

        // description - additional subtopic information
        await expect(moreRacesSection.locator('.measure-description'))
            .toContainText('Two or More Races in United States');
    });

    test('White section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#race-and-ethnicity', { waitUntil: 'networkidle' });

        //locate element in SupTopic
        const whiteSection = page
            .locator('#subtopic_white')
            .locator('xpath=ancestor::div[contains(@class,"SubTopic")]');

        // SubSection title - Two or More Races
        await expect(whiteSection.locator('h3.topic-title'))
            .toHaveText('White');

        // Metric for Two or More Races overall percentage
        await expect(whiteSection.locator('.measure-estimate-value'))
            .toHaveText('204,277,273');

        // description - additional subtopic information
        await expect(whiteSection.locator('.measure-description'))
            .toContainText('White alone in United States');
    });

    test('Explore Your State section and chart', async ({ page }) => {
        await page.goto('/profile/United_States?g=010XX00US#explore-your-state', { waitUntil: 'networkidle' });

        //confirm all states, including DC and Puerto Rico
        const expectedStates = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia',
            'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
            'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
            'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
            'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];

        const stateLabels = page.locator('.profile-label');
        await expect(stateLabels).toHaveCount(52);

        const actualStates = (await stateLabels.allTextContents())
            .map(text => text.trim());

        expect(actualStates).toEqual(expectedStates);

        //Show header Explore Your State
        const heading = page.getByRole('heading', { name: 'Explore Your State' });
        await expect(heading).toBeVisible();

        //confirm eligible state available
        const stateLabel = page.locator('.profile-label').filter({
            hasText: 'Alabama'
        });

        //Confirm Alabama subheader available
        await expect(stateLabel).toBeVisible();

        //Confirm the state profile link
        const profileLink = page.locator(
            'div:nth-of-type(2) > div.aqua-layout > div > div.horizontal > div:nth-of-type(1) div.hover-underline-animation'
        );

        //View the link and select link to advance to profile page
        await expect(profileLink).toBeVisible();
        await profileLink.click();

        await expect(page).toHaveURL(
            '/profile/Alabama?g=040XX00US01'
        );
    });

    //Test state level (040) profile page
    test('State level profile and chart', async ({ page }) => {
        await page.goto('/profile/California?g=040XX00US06#populations-and-people', { waitUntil: 'networkidle' });

        //confirm State is the bread crumb profile 
        const state = page.locator('.profile-type', {
            hasText: 'State'
        });
        await expect(state).toBeVisible();

        //Confirm California is the heading for the profile page
        await expect(
            page.getByRole('heading', { name: 'California' })
        ).toBeVisible();

        //Confirm the profile page has the correct start text for the California
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('California has a land area of 155,859.2 square miles and a water area of 7,834.6 square miles. It is the 3rd largest state by area. California is bordered by Nevada, Arizona, and Oregon.');

        //confirm breadcrumb United States > States
        const breadcrumbTexts = await page
            .locator('.aqua-breadcrumbs')
            .first()
            .locator('.breadcrumbs-item a, .breadcrumbs-item span[tabindex]')
            .evaluateAll(nodes =>
                nodes
                    .map(n => n.textContent?.trim())
                    .filter(Boolean)
            );

        expect(breadcrumbTexts).toEqual([
            'United States',
            'California'
        ]);

        //confirm the links in the california profile description
        const links = page.locator(
            'span.DynamicLinkWrapper .hover-underline-animation'
        );

        const uniqueTexts = [...new Set(await links.allTextContents())];

        //if you want to see on the console the unique texts that were found on the page, you can uncomment the line below
        // console.log(uniqueTexts);

        expect(uniqueTexts).toEqual([
            'Nevada',
            'Arizona',
            'Oregon'
        ]);
        //confirm that there are 4 unique texts found on the page
        expect(uniqueTexts).toHaveLength(3);
    });

    test('Nearby States section and chart', async ({ page }) => {
        await page.goto('/profile/California?g=040XX00US06#nearby-states', { waitUntil: 'networkidle' });

        //confirm all California nearby states
        const nearbyStates = [
            "Nevada",
            "Arizona",
            "Oregon"
        ];

        const stateLabels = page.locator('.profile-label');
        await expect(stateLabels).toHaveCount(3);

        const actualStates = (await stateLabels.allTextContents())
            .map(text => text.trim());

        expect(actualStates).toEqual(nearbyStates);

        //Show header Explore Your State
        const heading = page.getByRole('heading', { name: 'Nearby States' });
        await expect(heading).toBeVisible();

        //confirm eligible state available
        const stateLabel = page.locator('.profile-label').filter({
            hasText: 'Nevada'
        });

        //Confirm Nevada subheader available
        await expect(stateLabel).toBeVisible();

        //Confirm the state profile link
        const profileLink = page.locator(
            'div:nth-of-type(2) > div.aqua-layout > div > div.horizontal > div:nth-of-type(1) div.hover-underline-animation'
        );

        //View the link and select link to advance to profile page
        await expect(profileLink).toBeVisible();
        await profileLink.click();

        await expect(page).toHaveURL(
            '/profile/Nevada?g=040XX00US32'
        );
    });

    test('State of Cali hightlights', async ({ page }) => {
        await page.goto('/profile/California?g=040XX00US06', { waitUntil: 'networkidle' });

        //view all the profile highlights(sections)
        const highlightLocator = page.locator('.highlight');

        await expect(highlightLocator.first()).toBeVisible({
            timeout: 10000
        });

        const highlights = await highlightLocator.allTextContents();

        //view available highlights on the console, can uncomment if you want to view
        console.log(highlights);

        const topics = [
            'Populations and People',
            'Income and Poverty',
            'Education',
            'Employment',
            'Housing',
            'Health',
            'Business and Economy',
            'Families and Living Arrangements',
            'Race and Ethnicity'
        ];

        const uniqueTopics = [
            ...new Set(
                highlights.flatMap(text =>
                    topics.filter(topic => text.startsWith(topic))
                )
            )
        ];

        //can view on console the available highlights, uncomment if want to view
        console.log(uniqueTopics);

        //confirm the highlights available for state level (California)
        expect(uniqueTopics).toHaveLength(9);
    });

       //Test County level (050) profile page
    test('County level profile and chart', async ({ page }) => {
        await page.goto('/profile/Los_Angeles_County,_California?g=050XX00US06037');

        //confirm County is the bread crumb profile 
        const county = page.locator('.profile-type', {
            hasText: 'County'
        });
        await expect(county).toBeVisible();

        //Confirm Los Angeles County, califorinia is the heading for the profile page
        await expect(
            page.getByRole('heading', { name: 'Los Angeles County, California' })
        ).toBeVisible();

        //Confirm the profile page has the correct start text for the Los Angeles County, California
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('Los Angeles County, California has 4,060.3 square miles of land area and is the 11th largest county in');

        //confirm breadcrumb United States > States > County
        const breadcrumbTexts = await page
            .locator('.aqua-breadcrumbs')
            .first()
            .locator('.breadcrumbs-item a, .breadcrumbs-item span[tabindex]')
            .evaluateAll(nodes =>
                nodes
                    .map(n => n.textContent?.trim())
                    .filter(Boolean)
            );

        expect(breadcrumbTexts).toEqual([
            'United States',
            'California',
            'Los Angeles County, California'
        ]);

       //Confirm the profile page has the correct start text for the United States
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('Los Angeles County, California has 4,060.3 square miles of land');

        //Clicking the Read more link will expand the text to show the full description of the United States
        await page.getByRole('button', { name: 'Read More' }).first().click();


        const links = page.locator(
            'span.DynamicLinkWrapper .hover-underline-animation'
        );

        const uniqueTexts = [...new Set(await links.allTextContents())];

        //if you want to see on the console the unique texts that were found on the page, you can uncomment the line below
        //console.log(uniqueTexts);

        //Confirm the surrounding counties from profile description of Los Angeles county
        expect(uniqueTexts).toEqual([
            'California',
            'San Bernardino County, California',
            'Ventura County, California',
            'Kern County, California',
            'Orange County, California'
        ]);
        //confirm that there are 4 unique texts found on the page
        expect(uniqueTexts).toHaveLength(5);
    });

    //Confirm the Nearby Counties 
    test('Nearby County section and chart', async ({ page }) => {
        await page.goto(
            '/profile/Los_Angeles_County,_California?g=050XX00US06037#nearby-counties',
            { waitUntil: 'networkidle' }  //"Navigate to the page, then wait until the network has been quiet (no more than 0 ongoing network connections for a short period) before continuing."
        );

        const nearbyAnchor = page.locator('#nearby-counties');
        await expect(nearbyAnchor).toBeAttached();

        const heading = page.getByRole('heading', { name: 'Nearby Counties' });

        await expect(heading).toBeVisible({
            timeout: 15000
        });

        const countyLabels = page.locator('.profile-card .profile-label');

        await expect(countyLabels).toHaveCount(4, {
            timeout: 15000
        });

        const actualCounty = (await countyLabels.allTextContents())
            .map(text => text.replace(/\s+/g, ' ').trim());

        console.log(actualCounty);

        expect(actualCounty).toEqual([
            'San Bernardino County, California',
            'Ventura County, California',
            'Kern County, California',
            'Orange County, California'
        ]);
    });

    test('County hightlights', async ({ page }) => {
        await page.goto('/profile/Los_Angeles_County,_California?g=050XX00US06037', { waitUntil: 'networkidle' })

        //view all the profile highlights(sections)
        const countyhighlightLocator = page.locator('.highlight');

        await expect(countyhighlightLocator.first()).toBeVisible({
            timeout: 10000
        });

        const countyhighlights = await countyhighlightLocator.allTextContents();

        //view available highlights on the console, can uncomment if you want to view
        console.log(countyhighlights);

        const topics = [
            'Populations and People',
            'Income and Poverty',
            'Education',
            'Employment',
            'Housing',
            'Health',
            'Business and Economy',
            'Families and Living Arrangements',
            'Race and Ethnicity'
        ];

        const uniqueTopics = [
            ...new Set(
                countyhighlights.flatMap(text =>
                    topics.filter(topic => text.startsWith(topic))
                )
            )
        ];

        //can view on console the available highlights, uncomment if want to view
        console.log(uniqueTopics);

        //confirm the highlights available for state level (California)
        expect(uniqueTopics).toHaveLength(9);
    });

       //Test County level (060) CCP - profile page
    test('County subdivision level profile', async ({ page }) => {
        await page.goto('/profile/Los_Angeles_CCD,_Los_Angeles_County,_California?g=060XX00US0603791750');

        //confirm County is the bread crumb profile 
        const county = page.locator('.profile-type', {
            hasText: 'County Subdivision'
        });
        await expect(county).toBeVisible();

        //Confirm Los Angeles County, califorinia is the heading for the profile page
        await expect(
            page.getByRole('heading', { name: 'Los Angeles CCD, Los Angeles County, California' })
        ).toBeVisible();

        //Confirm the profile page has the correct start text for the Los Angeles CCD, Los Angeles, California
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('Los Angeles CCD, Los Angeles County, California is a city, town, place equivalent, or township located');

        //confirm breadcrumb United States > States > County > CCD
        const breadcrumbTexts = await page
            .locator('.aqua-breadcrumbs')
            .first()
            .locator('.breadcrumbs-item a, .breadcrumbs-item span[tabindex]')
            .evaluateAll(nodes =>
                nodes
                    .map(n => n.textContent?.trim())
                    .filter(Boolean)
            );

        expect(breadcrumbTexts).toEqual([
            'United States',
            'California',
            'Los Angeles County, California',
            'Los Angeles CCD, Los Angeles County, California'
        ]);

       //Confirm the profile page has the correct start text for the CCD
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('Los Angeles CCD, Los Angeles County, California is a city, town, place equivalent, or township located in');

        //Clicking the Read more link will expand the text to show the full description of the county Subdivision
       // await page.getByRole('button', { name: 'Read More' }).first().click();


        const links = page.locator(
            'span.DynamicLinkWrapper .hover-underline-animation'
        );

        const uniqueTexts = [...new Set(await links.allTextContents())];

        //if you want to see on the console the unique texts that were found on the page, you can uncomment the line below
        //console.log(uniqueTexts);

        //Confirm the surrounding counties from profile description of the CCD
        expect(uniqueTexts).toEqual([
            'Los Angeles County, California'
        ]);
        //confirm that there are 4 unique texts found on the page
        expect(uniqueTexts).toHaveLength(1);
    });

    test('County subdivision hightlights', async ({ page }) => {
       await page.goto('/profile/Los_Angeles_CCD,_Los_Angeles_County,_California?g=060XX00US0603791750#populations-and-people', { waitUntil: 'networkidle' })

        //view all the profile highlights(sections)
        const countysubhighlightLocator = page.locator('.highlight');

        await expect(countysubhighlightLocator.first()).toBeVisible({
            timeout: 10000
        });

        const countysubhighlights = await countysubhighlightLocator.allTextContents();

        //view available highlights on the console, can uncomment if you want to view
        console.log(countysubhighlights);

        const topics = [
            'Populations and People',
            'Income and Poverty',
            'Education',
            'Employment',
            'Housing',
            'Health',
            'Families and Living Arrangements',
            'Race and Ethnicity'
        ];

        const uniqueTopics = [
            ...new Set(
                countysubhighlights.flatMap(text =>
                    topics.filter(topic => text.startsWith(topic))
                )
            )
        ];

        //can view on console the available highlights, uncomment if want to view
        console.log(uniqueTopics);

        //confirm the highlights available for state level (California)
        expect(uniqueTopics).toHaveLength(8);
    });

    //Test Place level (160) - CDP profile page
    test('Place level profile', async ({ page }) => {
        await page.goto('/profile/Akiachak_CDP,_Alaska?g=160XX00US0200760');

        //confirm Place is the bread crumb profile Z+
        const place = page.locator('.profile-type', {
            hasText: 'Place'
        });
        await expect(place).toBeVisible();

        //Confirm Akiachak CDP, Alaska is the heading for the profile page
        await expect(
            page.getByRole('heading', { name: 'Akiachak CDP, Alaska' })
        ).toBeVisible();

        //Confirm the profile page has the correct start text for the Akiachak CDP, Alaska
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('Akiachak CDP, Alaska is a city, town, place equivalent, or township located in');

        //confirm breadcrumb United States > States > CDP
        const breadcrumbTexts = await page
            .locator('.aqua-breadcrumbs')
            .first()
            .locator('.breadcrumbs-item a, .breadcrumbs-item span[tabindex]')
            .evaluateAll(nodes =>
                nodes
                    .map(n => n.textContent?.trim())
                    .filter(Boolean)
            );

        expect(breadcrumbTexts).toEqual([
            'United States',
            'Alaska',
            'Akiachak CDP, Alaska'
        ]);

       //Confirm the profile page has the correct start text for the CDP
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('Akiachak CDP, Alaska is a city, town, place equivalent, or township located in');

        //Clicking the Read more link will expand the text to show the full description of the county Subdivision
       // await page.getByRole('button', { name: 'Read More' }).first().click();


        const links = page.locator(
            'span.DynamicLinkWrapper .hover-underline-animation'
        );

        const uniqueTexts = [...new Set(await links.allTextContents())];

        //if you want to see on the console the unique texts that were found on the page, you can uncomment the line below
        //console.log(uniqueTexts);

        //Confirm the surrounding counties from profile description of CDP place
        expect(uniqueTexts).toEqual([
            'Alaska'
        ]);
        //confirm that there are 4 unique texts found on the page
        expect(uniqueTexts).toHaveLength(1);
    });

    test('Place hightlights', async ({ page }) => {
       await page.goto('/profile/Los_Angeles_CCD,_Los_Angeles_County,_California?g=060XX00US0603791750#populations-and-people', { waitUntil: 'networkidle' })

        //view all the profile highlights(sections)
        const placehighlightLocator = page.locator('.highlight');

        await expect(placehighlightLocator.first()).toBeVisible({
            timeout: 10000
        });

        const placehighlights = await placehighlightLocator.allTextContents();

        //view available highlights on the console, can uncomment if you want to view
        console.log(placehighlights);

        const topics = [
            'Populations and People',
            'Income and Poverty',
            'Education',
            'Employment',
            'Housing',
            'Health',
            'Families and Living Arrangements',
            'Race and Ethnicity'
        ];

        const uniqueTopics = [
            ...new Set(
                placehighlights.flatMap(text =>
                    topics.filter(topic => text.startsWith(topic))
                )
            )
        ];

        //can view on console the available highlights, uncomment if want to view
        console.log(uniqueTopics);

        //confirm the highlights available for place level (Alaska)
        expect(uniqueTopics).toHaveLength(8);
    });

    //Test ZipCode tabulation Area level (860) - CDP profile page
    test('ZipCode tabulation level profile', async ({ page }) => {
        await page.goto('/profile/ZCTA5_35004?g=860XX00US35004');

        //confirm Zipcode Tabulation bread crumb profile 
        const zcta = page.locator('.profile-type', {
            hasText: 'ZIP Code Tabulation Area'
        });
        await expect(zcta).toBeVisible();

        //Confirm ZCTA5 35004 is the heading for the profile page
        await expect(
            page.getByRole('heading', { name: 'ZCTA5 35004' })
        ).toBeVisible();

        //Confirm the profile page has the correct start text for the Akiachak CDP, Alaska
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('ZCTA5 35004 is a ZIP Code Tabulation Area located in');

        //confirm breadcrumb United States > States > Zipcode Tabulation Area
        const breadcrumbTexts = await page
            .locator('.aqua-breadcrumbs')
            .first()
            .locator('.breadcrumbs-item a, .breadcrumbs-item span[tabindex]')
            .evaluateAll(nodes =>
                nodes
                    .map(n => n.textContent?.trim())
                    .filter(Boolean)
            );

        expect(breadcrumbTexts).toEqual([
            'United States',
            'Alabama',
            'ZCTA5 35004'
        ]);

       //Confirm the profile page has the correct start text for the ZCTA
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('ZCTA5 35004 is a ZIP Code Tabulation Area located in');

        //Clicking the Read more link will expand the text to show the full description of the county Subdivision
       // await page.getByRole('button', { name: 'Read More' }).first().click();


        const links = page.locator(
            'span.DynamicLinkWrapper .hover-underline-animation'
        );

        const uniqueTexts = [...new Set(await links.allTextContents())];

        //if you want to see on the console the unique texts that were found on the page, you can uncomment the line below
        //console.log(uniqueTexts);

        //Confirm the surrounding counties from profile description of ZCTA
        expect(uniqueTexts).toEqual([
            'Alabama'
        ]);
        //confirm that there are 4 unique texts found on the page
        expect(uniqueTexts).toHaveLength(1);
    });

    test('ZCTA hightlights', async ({ page }) => {
       await page.goto('/profile/ZCTA5_35004?g=860XX00US35004#populations-and-people', { waitUntil: 'networkidle' })

        //view all the profile highlights(sections)
        const zctahighlightLocator = page.locator('.highlight');

        await expect(zctahighlightLocator.first()).toBeVisible({
            timeout: 10000
        });

        const zctahighlights = await zctahighlightLocator.allTextContents();

        //view available highlights on the console, can uncomment if you want to view
        console.log(zctahighlights);

        const topics = [
            'Populations and People',
            'Income and Poverty',
            'Education',
            'Employment',
            'Housing',
            'Health',
            'Families and Living Arrangements',
            'Race and Ethnicity'
        ];

        const uniqueTopics = [
            ...new Set(
                zctahighlights.flatMap(text =>
                    topics.filter(topic => text.startsWith(topic))
                )
            )
        ];

        //can view on console the available highlights, uncomment if want to view
        console.log(uniqueTopics);

        //confirm the highlights available for place level (Alaska)
        expect(uniqueTopics).toHaveLength(8);
    });

      //Test School district Area level (960) - School district profile page
    test('School district level highlights', async ({ page }) => {
        await page.goto('/profile/Chattahoochee_County_for_Fort_Benning,_Georgia?g=9600000US1313053');

        //confirm School district bread crumb profile 
        const school = page.locator('.profile-type', {
            hasText: 'School District (Secondary)'
        });
        await expect(school).toBeVisible();

        //Confirm School district is the heading for the profile page
        await expect(
            page.getByRole('heading', { name: 'Chattahoochee County for Fort Benning, Georgia' })
        ).toBeVisible();

        //Confirm the profile page has the correct start text for the Chattahoochee County for Fort Benning, Georgia
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('Chattahoochee County for Fort Benning, Georgia is a School District (Secondary) located in Georgia');

        //confirm breadcrumb United States > States > School District
        const breadcrumbTexts = await page
            .locator('.aqua-breadcrumbs')
            .first()
            .locator('.breadcrumbs-item a, .breadcrumbs-item span[tabindex]')
            .evaluateAll(nodes =>
                nodes
                    .map(n => n.textContent?.trim())
                    .filter(Boolean)
            );

        expect(breadcrumbTexts).toEqual([
            'United States',
            'Georgia',
            'Chattahoochee County for Fort Benning, Georgia'
        ]);

       //Confirm the  page has the correct start text for the School district
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('Chattahoochee County for Fort Benning, Georgia is a School District (Secondary) located in Georgia');

        //Clicking the Read more link will expand the text to show the full description of the county Subdivision
       // await page.getByRole('button', { name: 'Read More' }).first().click();


        const links = page.locator(
            'span.DynamicLinkWrapper .hover-underline-animation'
        );

        const uniqueTexts = [...new Set(await links.allTextContents())];

        //if you want to see on the console the unique texts that were found on the page, you can uncomment the line below
        //console.log(uniqueTexts);

        //Confirm the surrounding counties from profile description of ZCTA
        expect(uniqueTexts).toEqual([
            'Georgia'
        ]);
        //confirm that there are 4 unique texts found on the page
        expect(uniqueTexts).toHaveLength(1);
    });

    test('Schoolistrict highlights', async ({ page }) => {
       await page.goto('/profile/Chattahoochee_County_for_Fort_Benning,_Georgia?g=9600000US1313053#populations-and-people', { waitUntil: 'networkidle' })

        //view all the profile highlights(sections)
        const schoolhighlightLocator = page.locator('.highlight');

        await expect(schoolhighlightLocator.first()).toBeVisible({
            timeout: 10000
        });

        const schoolhighlights = await schoolhighlightLocator.allTextContents();

        //view available highlights on the console, can uncomment if you want to view
        console.log(schoolhighlights);

        const topics = [
            'Populations and People',
            'Income and Poverty',
            'Education',
            'Employment',
            'Housing',
            'Health',
            'Families and Living Arrangements',
            'Race and Ethnicity'
        ];

        const uniqueTopics = [
            ...new Set(
                schoolhighlights.flatMap(text =>
                    topics.filter(topic => text.startsWith(topic))
                )
            )
        ];

        //can view on console the available highlights, uncomment if want to view
        console.log(uniqueTopics);

        //confirm the highlights available for place level (Alaska)
        expect(uniqueTopics).toHaveLength(8);
    });

       //Test Congressional district Area level (500) - Congressional district profile page
    test('Congressional District level profile', async ({ page }) => {
        await page.goto('/profile/Congressional_District_(at_Large),_Montana?g=500XX00US3000');

        //confirm Congressional District bread crumb profile 
        const zcta = page.locator('.profile-type', {
            hasText: 'Congressional District'
        });
        await expect(zcta).toBeVisible();

        //Confirm Congressional District(at Large) is the heading for the profile page
        await expect(
            page.getByRole('heading', { name: 'Congressional District (at Large) (116th Congress), Montana' })
        ).toBeVisible();

        //Confirm the profile page has the correct start text for the Akiachak CDP, Alaska
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('Congressional District (at Large) (116th Congress), Montana is a Congressional District located in Montana');

        //confirm breadcrumb United States > States > Congressional District
        const breadcrumbTexts = await page
            .locator('.aqua-breadcrumbs')
            .first()
            .locator('.breadcrumbs-item a, .breadcrumbs-item span[tabindex]')
            .evaluateAll(nodes =>
                nodes
                    .map(n => n.textContent?.trim())
                    .filter(Boolean)
            );

        expect(breadcrumbTexts).toEqual([
            'United States',
            'Montana',
            'Congressional District (at Large) (116th Congress), Montana'
        ]);

       //Confirm the profile page has the correct start text for the Cogressional District
        await expect(
            page.locator('span.DynamicLinkWrapper')
        ).toContainText('Congressional District (at Large) (116th Congress), Montana is a Congressional District located in Montana');

        //Clicking the Read more link will expand the text to show the full description of the county Subdivision
       // await page.getByRole('button', { name: 'Read More' }).first().click();


        const links = page.locator(
            'span.DynamicLinkWrapper .hover-underline-animation'
        );

        const uniqueTexts = [...new Set(await links.allTextContents())];

        //if you want to see on the console the unique texts that were found on the page, you can uncomment the line below
        //console.log(uniqueTexts);

        //Confirm the surrounding counties from profile description of Congressional District
        expect(uniqueTexts).toEqual([
            'Montana'
        ]);
        //confirm that there are 4 unique texts found on the page
        expect(uniqueTexts).toHaveLength(1);
    });

    test('Congressional District highlights', async ({ page }) => {
       await page.goto('/profile/Congressional_District_(at_Large),_Montana?g=500XX00US3000#populations-and-people', { waitUntil: 'networkidle' })

        //view all the profile highlights(sections)
        const congressionalhighlightLocator = page.locator('.highlight');

        await expect(congressionalhighlightLocator.first()).toBeVisible({
            timeout: 10000
        });

        const congressionalhighlights = await congressionalhighlightLocator.allTextContents();

        //view available highlights on the console, can uncomment if you want to view
        console.log(congressionalhighlights);

        const topics = [
            'Populations and People',
            'Income and Poverty',
            'Education',
            'Employment',
            'Housing',
            'Health',
            'Families and Living Arrangements',
            'Race and Ethnicity'
        ];

        const uniqueTopics = [
            ...new Set(
                congressionalhighlights.flatMap(text =>
                    topics.filter(topic => text.startsWith(topic))
                )
            )
        ];

        //can view on console the available highlights, uncomment if want to view
        console.log(uniqueTopics);

        //confirm the highlights available for place level (Alaska)
        expect(uniqueTopics).toHaveLength(8);
    });

    //Test NAICS level (010) - Codeset profile page
    test('NAICS level highlights', async ({ page }) => {
        await page.goto('/profile/11_-_Agriculture,_forestry,_fishing_and_hunting?g=010XX00US&codeset=naics~11');

        //confirm CodeSet bread crumb profile 
        const code = page.locator('.profile-type', {
            hasText: 'Sector'
        });
        await expect(code).toBeVisible();

        //Confirm 11: Agriculture, forestry, fishing and hunting is the heading for the profile page
        await expect(
            page.getByRole('heading', { name: '11: Agriculture, forestry, fishing and hunting' })
        ).toBeVisible();

        const description = page.locator('span.DynamicLinkWrapper').filter({
            hasText: 'The Agriculture, Forestry'
        });

        await expect(description).toContainText(
            'The Agriculture, Forestry, Fishing and Hunting sector comprises establishments'
        );
        //Clicking the Read more link will expand the text to show the full description of the Codeset
        await page.getByRole('button', { name: 'Read More' }).first().click();


        const links = page.locator(
            'span.DynamicLinkWrapper .hover-underline-animation'
        );

        const uniqueTexts = [...new Set(await links.allTextContents())];

        //if you want to see on the console the unique texts that were found on the page, you can uncomment the line below
        //console.log(uniqueTexts);

        //Confirm the surrounding counties from profile description of Codeset
        expect(uniqueTexts).toEqual([
            'United States',
        ]);
        //confirm that there are 4 unique texts found on the page
        expect(uniqueTexts).toHaveLength(1);
    });

});