import { test, expect } from '@playwright/test'

test.describe('Microdata Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://data.census.gov/app/mdat/');

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



});

 