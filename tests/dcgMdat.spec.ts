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


    //Default Mdat selection - region
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
    //Use the AutoGroup feature to create groups
    test('Create and use autogroup', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/cart?cv=SEX&rv=ucgid&nv=AGEP_RC1&vv=AGEP&wt=PWGTP&g=AwFm-BVBlYEYg&AGEP_RC1=N4IgyiBcIEoKYGMD2ATOACAZkgTugggOZwgA0sUI~A4gKIAKZIAalANpsgAMpAjJPwCcgpgDkkAF3S0ANgGc4AdwAWcHBmo4kAVwAOcFGQk5tcALpmAvkA');

        //Selecting the Create New Group button
        await page.getByRole('button', { name: 'CREATE CUSTOM GROUP' }).first().click()

        const variable = page.locator('.varId', {
            hasText: 'AGEP_RC1'
        });

        await expect(variable).toBeVisible();

        //Click the variable agep_rc1
        await variable.click();


        //Selecting the Create New Group button
        await page.getByRole('button', { name: 'AUTO GROUP' }).first().click()

        //input new number of 50 in "Start" input box
        await page.locator('input[aria-label="start"]').fill('5');

        //input new number of 5000 in "end" input box
        await page.locator('input[aria-label="end"]').fill('90');

        //Save the new selection and confirm update to custom group
        await page.getByRole('button', { name: 'SAVE' }).first().click()

        const values = await page
            .locator('[role="gridcell"][col-id="label"]')
            .allTextContents();

        //create loop to confirm no value less than 5 or greater than 90
        for (const text of values) {
            const value = Number(text.trim());

            //if not a number, will skip 
            if (Number.isNaN(value)) {
                continue; // skip labels like "Not Elsewhere Grouped"
            }

            //confirm value between 5 and 90
            expect(value).toBeGreaterThanOrEqual(5);
            expect(value).toBeLessThanOrEqual(90);
        };
        //test RECODE button

        //check for cell point to edit
        const cell = page.locator('text=6:6').first();

        //select edit button
        const editButton = cell.locator(
            'xpath=ancestor::div[@role="gridcell"]//img[@title="Edit group"]'
        );

        //make sure edit Button in view
        await editButton.scrollIntoViewIfNeeded();
        const box = await editButton.boundingBox();
        await editButton.click({ trial: true });
        await editButton.click();

        //Selecting the Create New Group button
        await page.getByRole('button', { name: 'Edit range' }).first().click();

        //Update the new number of minimum 8 in "Start" input box
        await page.locator('input[aria-label="minimum"]').fill('8');

        //Update the new number of minimum 8 in "Start" input box
        await page.locator('input[aria-label="maximum"]').fill('8');

        //Save the new selection and confirm update to custom group
        await page.getByRole('button', { name: 'CANCEL' }).nth(1).click()
        //await page.locator('button:has-text("SAVE")').click();

        //Use to cancel the recode
        await page.getByRole('button', { name: 'CANCEL RECODE' }).click()


    });

    //url exceeded limit
    test('URL exceeded limit', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/cart?nv=PWGTP_RC1&vv=*PWGTP,WGTP&wt=PWGTP&PWGTP_RC1=N4IgyiBcIEoKYGMD2ATOACAZkgTugCgKoCyY6ADnDgM5IB26A7nAJYDmAFgC4gA0sUEPgDqAcQAq~PiABqUANryQABkgBGSAE5tm6QDkkXdAFEANtTiMOVDKJxIArpRR8uOB3AC6ngL5A');

        //Select the button "AUTO GROUP" to open the input panel for autogroup
        await page.getByRole('button', { name: 'AUTO GROUP' }).first().click()

        //input new number of 50 in "Start" input box
        await page.locator('input[aria-label="start"]').fill('50');

        //Select the button "RESET" to reset "Start" back to 1
        await page.getByRole('button', { name: 'RESET' }).first().click()

        //input new number of 50 in "start" input box
        await page.locator('input[aria-label="start"]').fill('50');

        //input new number of 5000 in "end" input box
        await page.locator('input[aria-label="end"]').fill('5000');

        //Save the new selection and confirm update to custom group
        await page.getByRole('button', { name: 'SAVE' }).first().click()

        await expect(
            page.locator('.warning-text')
        ).toContainText('Current selections exceed the character limit');

        //Save the new selection and confirm update to custom group
        await page.getByRole('button', { name: 'DISMISS' }).first().click()

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
    //Delete all Variables
    test('Delete variable selected from cart', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/cart?vv=PWGTP,WGTP,AGEP&wt=PWGTP');

        //Select the button "Delete all variables"
        await page.getByRole('button', { name: 'DELETE ALL VARIABLES' }).first().click()

        //Select the button "Keep" all variables"
        await page.getByRole('button', { name: 'KEEP VARIABLES' }).first().click()


        // Verify PWGTP variable is available
        const variable = page.locator('.varId', { hasText: 'PWGTP' });

        await expect(variable).toBeVisible();

        //Select the button "Delete all variables"
        await page.getByRole('button', { name: 'DELETE ALL VARIABLES' }).first().click()

        //VSelect the button "Keep" all variables"
        await page.getByRole('button', { name: 'DELETE VARIABLES' }).first().click()

        // check for variable in this case PWGTP
        const delvariable = page.locator('.varId', { hasText: 'PWGTP' });

        //confirm no variables exist
        await expect(delvariable).toHaveCount(0);

    });

    //Compare Puma ID is not duplicate
    test('No duplicate Puma IDs in table', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2022/table?cv=SEX&rv=POWPUMA&wt=PWGTP');

        //check ID in table return
        const pumaCells = page.locator('[role="gridcell"][col-id="POWPUMA"]');

        //check all cells for puma 
        const values = await pumaCells.allTextContents();

        //Trim to just view ID
        const ids = values.map(v => v.split(':')[0].trim());

        //Begin array to confirm each of the cells
        const duplicates = ids.filter(
            (id, index) => ids.indexOf(id) !== index
        );

        //assert to confirm that the array compare to previous ID doesn't match
        expect(duplicates).toEqual([]);
    });

    //drag and drop
    test('drag and drop from rows to columns frame', async ({ page }) => {
        await page.goto('/app/mdat/ACSPUMS1Y2024/table?cv=SEX&rv=ucgid&vv=AGEP&wt=PWGTP&g=AwFm-BVBlYCYA0og');

        const source = page.locator('.aqua-chip', {
            hasText: 'Selected Geographies'
        });


        const target = page.locator('#cv');

        await source.dragTo(target);

        //Find by gridcell within frame
        const cell = page.locator(
            '[role="gridcell"][col-id="totalCol"]'
        );

        //for this scenario, confirming that values 8,322,517 was confirmed in Row after drag and drop and 'Alaska' is no longer in row
        await expect.poll(async () => {
            return await cell.first().textContent();
        }).not.toContain('Alaska');
        //await expect(cell.first()).toContainText('8,322,517');

        //Check to see if Alaska returns, should be 2 grouped headers with Alaska
        await expect(
            page.getByRole('columnheader', { name: 'Alaska' })
        ).toHaveCount(2);
    });
});