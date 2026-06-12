import { test, expect } from '@playwright/test'

test.describe('Microdata Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/app/mdat/');

        await expect(page).toHaveTitle("Microdata - Census Bureau Datasets");
    });

    //Default Mdat selection
    //Test the Mdat default selection (ACS 1-Year Public Use Microdata Sample and latest Vintage)
    test('Default selection dataset and vintage', async ({ page }) => {
        const selections = page.locator('.selection');

        //confirming latest dataSet
        await expect(selections.filter({
            hasText: 'ACS 1-Year Estimates Public Use Microdata Sample'
        })).toBeVisible();

        //confirming latest vintage of 2024
        await expect(selections.filter({
            hasText: '2024'
        })).toBeVisible();

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'NEXT' }).first().click();

        //testing of the title of page after clicking next on Mdat home page
        await expect(page).toHaveTitle("Microdata - Census Bureau Data Variables");

        //Assert the URL ends with ACSPUMS1Y2024/vars (default selection after clicking next)
        await expect(page).toHaveURL(/ACSPUMS1Y2024\/vars$/)
    });


    /**************Test the Mdat Selecting Age and sex using dataset ACSPUMS1Y2024 and that the table returns with data****************/
    //Default Mdat selection
    test('Selecting Age and sex using dataset ACSPUMS1Y2024', async ({ page }) => {

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'NEXT' }).first().click();

        const dropdown = page.getByRole('combobox').first();

        await dropdown.click();//click first time to open

        await page.getByRole('option', { name: 'Age and Sex' }).first().click();

        const agepRow = page.locator(
            "div.ag-center-cols-container[ref='eContainer'] div[role='row']",
        ).filter({
            has: page.locator("div[col-id='id'] span[ref='eValue']"),
            hasText: "AGEP"

        });
        //make sure only one variable was selected AGEP
        await expect(agepRow).toHaveCount(1);

        await agepRow.click();

        //select agep variable
        await expect(
            agepRow.locator("input[type='checkbox']")
        ).toBeChecked();

        //select sex variable
        const sexRow = page.locator(
            "div.ag-center-cols-container[ref='eContainer'] div[role='row']",
        ).filter({
            has: page.locator("div[col-id='id'] span[ref='eValue']"),
            hasText: "SEX"

        });
        //Selecting only one variable sex
        await expect(sexRow).toHaveCount(1);

        await sexRow.click();

        await expect(
            sexRow.locator("input[type='checkbox']")
        ).toBeChecked();

        //Assert the URL ends with ACSPUMS1Y2024/vars (default selection after clicking next)
        await expect(page).toHaveURL(
            /ACSPUMS1Y2024\/vars\?cv=SEX&vv=AGEP&wt=PWGTP$/)

        //confirm that the "Selected" text update for variables
        await expect(
            page.locator('div.status.mr-5')
        ).toHaveText('Selected: 2 variables (2 columns, 1 row)');

        //confirm that the row count is selected
        await expect(
            page.locator('div.rowCount.mt-3')
        ).toHaveText(' Showing 2 of 521 variables. Use Type filter to show/hide variable types. ');

        //Selecting the Mdat Button "View Table" for results
        await Promise.all([
            page.waitForURL(/ACSPUMS1Y2024\/vars\?cv=SEX&vv=AGEP&wt=PWGTP$/), // adjust if needed
            page.getByRole('button', { name: 'VIEW TABLE' }).first().click()
        ]);

        await expect(
            page.locator('span.ag-header-group-text')
                .filter({ hasText: 'Sex (SEX)' })
        ).toBeVisible();

        //set the totalCells to the cells in the table
        const totalCells = page.locator('div.ag-cell[col-id="total"]');

        const count = await totalCells.count();

        //cycle through all the cells to confirm that its not empty
        for (let i = 0; i < count; i++) {
            await expect(totalCells.nth(i)).not.toBeEmpty();
        }
    });

    /**************Test the Mdat Selecting Age and sex using dataset CPSBASIC 2024DEC (CPSBASIC202412/vars) and that the table returns with data****************/
    //Default Mdat selection
    test('Selecting Age and sex using dataset CPSBASIC202412', async ({ page }) => {

        //select dropdown to view dataSets available
        const dropdown = page.getByRole('combobox').first();

        await dropdown.click();//click first time to open

        //Select CPS Basic Monthly in dropdown
        await page.getByRole('option', { name: 'CPS Basic Monthly' }).first().click();

        //select the vintage for the Mdat dataset
        const yeardropdown = page.getByRole('combobox').nth(1);
        await yeardropdown.click();

        await page.getByRole('option', { name: '2024 DEC' }).first().click();

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'NEXT' }).first().click();

        //Select a variable from the available list PWCMPWGT
        const row = page.getByRole('row').filter({ hasText: 'PWCMPWGT' });
        await row.locator('input.ag-checkbox-input').check();

        //Select a variable from the available list HWHHWGT
        const secondrow = page.getByRole('row').filter({ hasText: 'HWHHWGT' });
        await secondrow.locator('input.ag-checkbox-input').check();

        //Select Geography tab
        const geographiesTab = page.locator('a', { hasText: 'Geographies' });
        await geographiesTab.click();


        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'SELECT ALL' }).first().click();

        //confirm that the geography number returns all region - bubble above geographies should match total for selection
        await expect(
            page.locator('.aqua-dot-indicator').first()
        ).toHaveText('4');

        await page.getByRole('button', { name: 'VIEW TABLE' }).first().click()

        //set the totalCells to the cells in the table
        const totalCells = page.locator('[role="gridcell"][col-id="total"]');

        const count = await totalCells.count();

        for (let i = 0; i < count; i++) {
            await expect(totalCells.nth(i)).not.toHaveText('');
        }

    })

    /**************Test the Mdat Selecting Age and sex using dataset CPSBASIC 2024DEC (CPSBASIC202412/vars) and that the table returns with data****************/
    //Default Mdat selection
    test('Mdate Select All-Deselect All is operable', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/geos');

        await expect(page).toHaveTitle("Microdata - Census Bureau Geographies");

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'SELECT ALL' }).first().click();

        //confirm that the Region all count
        const regionButton = page.locator('[aria-label="REGION (4)"]');

        await expect(regionButton).toBeVisible();
        await regionButton.click();

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'DESELECT ALL' }).first().click();

        //selecting the Division Tab from Mdat geographies
        const divisionButton = page.locator('div[aria-label="DIVISION"]');

        await divisionButton.click();

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'SELECT ALL' }).first().click();

        //confirm that the division select all count 
        const divisioncountButton = page.locator('[aria-label="DIVISION (9)"]');

        await expect(divisioncountButton).toBeVisible();
        await divisioncountButton.click();

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'DESELECT ALL' }).first().click();

        //selecting the State Tab from Geographies
        const stateButton = page.locator('div[aria-label="STATE"]');

        await stateButton.click();

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'SELECT ALL' }).first().click();

        //confirm that the STATE select all count 
        const statecountButton = page.locator('[aria-label="STATE (51)"]');

        await expect(statecountButton).toBeVisible();
        await statecountButton.click();

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'DESELECT ALL' }).first().click();

        //selecting the PUMA Tab from Geographies
        const pumaButton = page.locator('div[aria-label="PUMA"]');

        await pumaButton.click();

        await page.getByRole('option', { name: 'Alabama' }).first().click();

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'SELECT ALL' }).first().click();

        //confirm that the division select all count 
        const pumacountButton = page.locator('[aria-label="PUMA (39)"]');

        await expect(pumacountButton).toBeVisible();
        await pumacountButton.click();

        //Clicking the Next button from Mdat home page
        await page.getByRole('button', { name: 'DESELECT ALL' }).first().click();

    });


    //Default Mdat selection
    test('closing geography using x in geo chip', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/geos?rv=ucgid&g=AwJm-BVBlEBoCMcAscDMQ');

        await expect(page).toHaveTitle("Microdata - Census Bureau Geographies");

        //confirm that the Region all count
        const regionButton = page.locator('[aria-label="REGION (4)"]');

        await expect(regionButton).toBeVisible();
        await regionButton.click();

        const chip = page.locator('.aqua-chip').filter({
            hasText: 'Midwest'
        });

        await chip.locator('.aqua-icon.close').click();

        //confirm that the Region all count
        const regionxButton = page.locator('[aria-label="REGION (3)"]');

        await expect(regionxButton).toBeVisible();
        await regionxButton.click();
    });


    /**************Testing the download of Mdat table****************/
    //Default Mdat selection
    test('Mdat Download tables', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/table?cv=SEX&vv=AGEP&wt=PWGTP');

        await expect(page).toHaveTitle("Microdata - Census Bureau Data Table");

        //Clicking the MDat Download/Share button to download table
        await page.getByRole('button', { name: 'DOWNLOAD/SHARE' }).first().click();

        //Clicking the MDat Download/Share button to download table
        await page.getByRole('checkbox', { name: 'JSON' }).first().click();

        //Clicking the MDat Download/Share button to download table
        await page.getByRole('checkbox', { name: 'Housing Unit Weight' }).first().click();

        //Confirm download of exported table data has completed successfully
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.getByRole('button', { name: 'EXPORT TABLE DATA' }).first().click()
        ]);

        expect(await download.failure()).toBeNull();

        //Confirm download of RAW data of table has completed successfully
        const [downloadraw] = await Promise.all([
            page.waitForEvent('download'),
            page.getByRole('button', { name: 'DOWNLOAD RAW DATA' }).first().click()
        ]);

        expect(await downloadraw.failure()).toBeNull();
    });

    /**************Testing the view Universe function****************/
    //Test View Universe when no Geography was selected
    test('View Universe with No Geo', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/table?cv=SEX&vv=AGEP&wt=PWGTP');

        await expect(page).toHaveTitle("Microdata - Census Bureau Data Table");

        //Selecting the View Universe button
        await page.getByRole('button', { name: 'VIEW UNIVERSE' }).first().click()

        //Confirm message in reference of suggestions for Geography U.S.
        const universeText = page.getByText('Default (usually U.S.)', { exact: true });

        await expect(universeText).toBeVisible();

        //Closing out the message box and clicking done
        await page.getByRole('button', { name: 'DONE' }).first().click()
    });

    /*****Selecting View Universe button wtih Geography selected*******/
    test('View Universe with Geo selected', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/table?cv=SEX&rv=ucgid&vv=AGEP&wt=PWGTP&g=AwFm-BVBlYEYA0wBMSRA');

        await expect(page).toHaveTitle("Microdata - Census Bureau Data Table");

        //Selecting the View Universe button
        await page.getByRole('button', { name: 'VIEW UNIVERSE' }).first().click()

        //Confirming the Geographies selected and displaying in Table Universe box
        const alabama = page.locator('li').filter({ hasText: 'Alabama' });
        const alaska = page.locator('li').filter({ hasText: 'Alaska' });
        const arizona = page.locator('li').filter({ hasText: 'Arizona' });

        await expect(alabama).toBeVisible();
        await expect(alaska).toBeVisible();
        await expect(arizona).toBeVisible();

        //Closing out the message box and clicking done
        await page.getByRole('button', { name: 'DONE' }).first().click()
    });

    /*****Create and use Geography Group and confirm new Group created*******/
    //Create a new group name
    test('create geography group', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/geos?rv=ucgid&g=AwJm-BVBlEBoCMcAscDMQ');

        await expect(page).toHaveTitle("Microdata - Census Bureau Geographies");

        //selecting the Group Tab from Geographies
        const groupButton = page.locator('div[aria-label="GROUP"]');

        await groupButton.click();

        //selected Regional group
        await page
            .locator('.check')
            .filter({
                has: page.locator('input[aria-label="REGION"]')
            })
            .click();

        //Selecting the Create New Group button
        await page.getByRole('button', { name: 'CREATE NEW GROUP' }).first().click()

        //select edit pen on custom Group

        // Wait for edit pen and click it
        await page.waitForSelector('.aqua-icon.edit-icon', { state: 'visible' });
        await page.locator('.aqua-icon.edit-icon').click();

        const input = page.locator('input.input:visible').first();

        //Input in the input box to rename group
        await expect(input).toBeVisible();
        await input.fill('GroupName');

        //press enter after input
        await input.press('Enter');

        //View table
        await page.getByRole('button', { name: 'VIEW TABLE' }).first().click()

        //Confirm that the table has a text that includes GroupName - New Group created
        await expect(
            page.locator('[role="gridcell"]').filter({ hasText: 'GroupName' })
        ).toHaveCount(1);

    });


    //Delete the group created
    test('Delete geography group', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/geos?rv=ucgid&g=AwJm-BVBlEBoCMcAscDMQ');

        await expect(page).toHaveTitle("Microdata - Census Bureau Geographies");

        //selecting the Group Tab from Geographies
        const groupButton = page.locator('div[aria-label="GROUP"]');

        await groupButton.click();

        //selected Regional group
        await page
            .locator('.check')
            .filter({
                has: page.locator('input[aria-label="REGION"]')
            })
            .click();

        //Selecting the Create New Group button
        await page.getByRole('button', { name: 'CREATE NEW GROUP' }).first().click()

        //select edit pen on custom Group

        // Wait for edit pen and click it
        await page.waitForSelector('.aqua-icon.edit-icon', { state: 'visible' });
        await page.locator('.aqua-icon.edit-icon').click();

        const input = page.locator('input.input:visible').first();

        //Input in the input box to rename group
        await expect(input).toBeVisible();
        await input.fill('NewGroupName');

        //press enter after input
        await input.press('Enter');

        // Wait for edit pen and click it
        await page.waitForSelector('.aqua-icon.ml-4.mr-2', {
            state: 'visible'
        });
        await page.locator('.aqua-icon.ml-4.mr-2').click();

        //View table
        await page.getByRole('button', { name: 'DELETE' }).first().click()

        // confirm that the group created has been deleted
        await expect(
            page.getByText('GroupName', { exact: true })
        ).toHaveCount(0);
    });
});