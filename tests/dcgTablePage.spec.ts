import { test, expect } from '@playwright/test'

test.describe('Table Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/table/');

    });

    //Test Decennial Table returns with Data
    test('Access to Decennial DP1 table 2000', async ({ page }) => {
        await page.goto('/table/DECENNIALDPSLDH2000.DP1?q=dec&y=2000', { waitUntil: 'networkidle' });

        await expect(
            page.locator('span.ag-header-cell-text')
                .filter({ hasText: 'Label' })
        ).toBeVisible();

        //confirm information in row, this is a way to confirm table exist and no data or something went wrong error
        await expect(
            page.locator('span.ag-group-value')
                .filter({ hasText: 'Under 5 years' })
        ).toBeVisible();
    });

    test('Access to Decennial H1 table 2010', async ({ page }) => {
        await page.goto('/table/DECENNIALCD1162010.H1?q=dec&y=2010', { waitUntil: 'networkidle' });

        await expect(
            page.locator('span.ag-header-cell-text')
                .filter({ hasText: 'Label' })
        ).toBeVisible();

        //View all columns
        const viewport = page.locator('.ag-center-cols-viewport');
        const headers = new Set<string>();

        //Set view of column
        const maxScroll = await viewport.evaluate(el => el.scrollWidth - el.clientWidth);

        //Scroll the table to view all columns
        for (let scroll = 0; scroll <= maxScroll; scroll += 300) {
            await viewport.evaluate((el, x) => {
                el.scrollLeft = x;
                el.dispatchEvent(new Event('scroll', { bubbles: true }));
            }, scroll);

            // Give AG Grid time to virtualize the columns
            await page.waitForTimeout(200);

            const visible = await page
                .locator('.ag-header-cell-text')
                .allTextContents();

            visible.forEach(h => headers.add(h.trim()));
        }
        //can view on screen panel, uncomment if want to view on screen panel
        //console.log([...headers]);
        //console.log('Count:', headers.size);

        //Confirm all columns, 50 states plus Puerto Rico and Label column
        expect(headers.size).toBe(53);

        //confirm no value in table is empty
        const cells = page.locator(
            '.ag-cell-value.ag-cell.ag-cell-not-inline-editing.ag-cell-normal-height.aqua-numeric-cell.stringType'
        );

        const values = await cells.allTextContents();

        for (const [index, value] of values.entries()) {
            expect(value.trim(), `Cell ${index} is empty`).not.toBe('');
        }

        //confirm H1 as dropdown label
        await expect(
            page.locator('span.table-id').getByText('H1', { exact: true }).first()
        ).toBeVisible();

        //Universe Housing Unit chip
        const chips = page
            .locator('#toolbar-button-datasets')
            .locator('.aqua-chip_label-area');

        await expect(chips.nth(0)).toHaveText('Decennial Census');
        await expect(chips.nth(1)).toHaveText('Universe: Housing units');
        await expect(chips.nth(2)).toHaveText('2010: DEC 116th Congressional District Summary File')

        //select the drop down chevron
        const icon = page.locator('.aqua-icon.aqua-toolbar-button-icon').first();

        await expect(icon).toBeVisible();
        await icon.click();

        //confirm the item in the underline
        const selectedItem = page.locator(
            'div.aqua-layout.inline.selected'
        );

        await expect(selectedItem).toContainText(
            '2010: DEC 116th Congressional District Summary File'
        );

        await expect(selectedItem).toHaveCSS(
            'text-decoration-line',
            'underline'
        );

        await expect(selectedItem).toHaveCSS(
            'text-decoration-color',
            'rgb(255, 86, 34)'
        );


        const actualItems = await page
            .locator('div.aqua-layout.inline.align-center.justify-center.py-1')
            .allTextContents();

        console.log(actualItems);

        //confirm all items in drop down
        const expectedItems = [
            "2010: DEC 116th Congressional District Summary File",
            "2010: DEC 113th Congressional District Summary File",
            "2010: DEC 115th Congressional District Summary File",
            "2010: DEC National Redistricting Data",
            "2010: DEC Summary File 1",
            "2010: DEC Redistricting Data (PL 94-171)",
        ];

        expect(actualItems).toEqual(expect.arrayContaining(expectedItems));

    })


    test('Access to Decennial P12C table 2010', async ({ page }) => {
        await page.goto('/table/DECENNIALCD1162010.P12C?q=dec&y=2010', { waitUntil: 'networkidle' });

        await expect(
            page.locator('span.ag-header-cell-text')
                .filter({ hasText: 'Label' })
        ).toBeVisible();

        //View all columns
        const viewport = page.locator('.ag-center-cols-viewport');
        const headers = new Set<string>();

        //Set view of column
        const maxScroll = await viewport.evaluate(el => el.scrollWidth - el.clientWidth);

        //Scroll the table to view all columns
        for (let scroll = 0; scroll <= maxScroll; scroll += 300) {
            await viewport.evaluate((el, x) => {
                el.scrollLeft = x;
                el.dispatchEvent(new Event('scroll', { bubbles: true }));
            }, scroll);

            // Give AG Grid time to virtualize the columns
            await page.waitForTimeout(200);

            const visible = await page
                .locator('.ag-header-cell-text')
                .allTextContents();

            visible.forEach(h => headers.add(h.trim()));
        }
        //can view on screen panel, uncomment if want to view on screen panel
        //console.log([...headers]);
        //console.log('Count:', headers.size);

        //Confirm all columns, 50 states plus Puerto Rico and Label column
        expect(headers.size).toBe(53);

        //confirm no value in table is empty
        const cells = page.locator(
            '.ag-cell-value.ag-cell.ag-cell-not-inline-editing.ag-cell-normal-height.aqua-numeric-cell.stringType'
        );

        const values = await cells.allTextContents();

        for (const [index, value] of values.entries()) {
            expect(value.trim(), `Cell ${index} is empty`).not.toBe('');
        }

        //confirm H1 as dropdown label
        await expect(
            page.locator('span.table-id').getByText('P12C', { exact: true }).first()
        ).toBeVisible();

        //Universe Housing Unit chip
        const chips = page
            .locator('#toolbar-button-datasets')
            .locator('.aqua-chip_label-area');

        await expect(chips.nth(0)).toHaveText('Decennial Census');
        await expect(chips.nth(1)).toHaveText('Universe: People who are American Indian and Alaska Native alone');
        await expect(chips.nth(2)).toHaveText('2010: DEC 116th Congressional District Summary File')

        //select the drop down chevron
        const icon = page.locator('.aqua-icon.aqua-toolbar-button-icon').first();

        await expect(icon).toBeVisible();
        await icon.click();

        //confirm the item in the underline
        const selectedItem = page.locator(
            'div.aqua-layout.inline.selected'
        );

        await expect(selectedItem).toContainText(
            '2010: DEC 116th Congressional District Summary File'
        );

        await expect(selectedItem).toHaveCSS(
            'text-decoration-line',
            'underline'
        );

        await expect(selectedItem).toHaveCSS(
            'text-decoration-color',
            'rgb(255, 86, 34)'
        );


        const actualItems = await page
            .locator('div.aqua-layout.inline.align-center.justify-center.py-1')
            .allTextContents();

        console.log(actualItems);

        //confirm all items in drop down
        //confirm all items in drop down
        const expectedItems = [
            "2010: DEC 116th Congressional District Summary File",
            "2010: DEC 113th Congressional District Summary File",
            "2010: DEC 115th Congressional District Summary File",
            "2010: DEC Summary File 1"

        ];

        expect(actualItems).toEqual(expect.arrayContaining(expectedItems));

    })

    //Confirm on the side panel, table selection and correct Product for DEC table
    test('Confirm Table shows selection and correct Products', async ({ page }) => {
        await page.goto('/table/DECENNIALPL2010.H1?q=dec&y=2010', { waitUntil: 'networkidle' });

        const h1Container = page.locator('#sidePanel-result-H1');

        await expect(h1Container).toBeVisible();

        // Expand products
        const viewProducts = h1Container.locator('.more-products-button');

        await expect(viewProducts).toBeVisible();

        await viewProducts.click();

        // Wait for products to appear
        const products = h1Container.locator('.product-item');

        await expect(products.first()).toBeVisible();

        // Get products
        const actualItems = await products.allTextContents();

        console.log('Product count:', actualItems.length);
        console.log(actualItems);

        // Validate products exist (order does not matter)
        const expectedItems = [
            "2010: DEC 116th Congressional District Summary File",
            "2010: DEC 113th Congressional District Summary File",
            "2010: DEC 115th Congressional District Summary File",
            "2010: DEC Summary File 1",
        ];

        expect(actualItems).toEqual(expect.arrayContaining(expectedItems));


    });

    //Confirm on the table selection Notes are correct for DEC table
    test('Confirm DEC A_TOTPR table Notes', async ({ page }) => {
        await page.goto('/table/DECENNIALPES2020.A_TOTPR?q=dec',);

        const notesButton = page
            .locator('#toolbar-button-notes')
            .filter({ has: page.locator(':visible') })
            .first();

        //had to include a wait, before clicking button as button will not open on initial click if page still loading
        await page.waitForTimeout(3000);

        await notesButton.click();

        await page.waitForTimeout(1000);

        //confirm textbox input locator
        const noteSearch = page.getByPlaceholder('Find in note');

        await expect(noteSearch).toBeVisible();

        await noteSearch.fill('negative');

        // wait for search result UI
        await expect(page.locator('.searchMatches')).toBeVisible();

        await expect(page.locator('.searchMatches'))
            .toContainText('1 / 1');

        const heading = page.locator('h2.table-description').filter({
            hasText: 'Net Coverage Error for the Puerto Rico Household Population'
        });

        //Confirm the headings in Notes for Decennial
        await expect(heading.first()).toHaveText(
            'Net Coverage Error for the Puerto Rico Household Population'

        );
        
        const surveyProgram = page.locator('div.mb-1')
            .filter({ hasText: 'Survey/Program:' })
            .last();
            await expect(surveyProgram).toContainText('Decennial Census');

        const year = page.locator('div.mb-1')
            .filter({ hasText: 'Year:' })
            .last();

            await expect(year).toContainText('2020');

        const tableId = page.locator('div.mb-1')
            .filter({ hasText: 'Table ID:' })
            .last();

            await expect(tableId).toContainText('A_TOTPR');
    });

        //Confirm on the table selection Notes are correct for DEC table
    test('Confirm DEC P1 table Notes', async ({ page }) => {
        await page.goto('/table/DECENNIALCD1182020.P1',);
         const notesButton = page
            .locator('#toolbar-button-notes')
            .filter({ has: page.locator(':visible') })
            .first();

        //had to include a wait, before clicking button as button will not open on initial click if page still loading
        await page.waitForTimeout(3000);

        await notesButton.click();

        await page.waitForTimeout(1000);

        const heading = page.locator('h2.table-description').filter({
            hasText: 'TOTAL POPULATION'
        });

        //Confirm the headings in Notes for Decennial
        await expect(heading.first()).toHaveText(
            'TOTAL POPULATION'


        );

        const surveyProgram = page.locator('div.mb-1')
            .filter({ hasText: 'Survey/Program:' })
            .last();
        await expect(surveyProgram).toContainText('Decennial Census');

        const universe = page.locator('div.mb-1')
            .filter({ hasText: 'Universe:' })
            .last();

        await expect(universe).toContainText('Total population');

        const year = page.locator('div.mb-1')
            .filter({ hasText: 'Year:' })
            .last();

        await expect(year).toContainText('2020');

        const tableId = page.locator('div.mb-1')
            .filter({ hasText: 'Table ID:' })
            .last();

        await expect(tableId).toContainText('P1');


const printButton = page.getByRole('button', {
  name: 'Press to print the table notes'
});

await expect(printButton).toBeVisible();
await expect(printButton).toBeEnabled();


    // browser's native print dialog to return control.
    await Promise.race([
        printButton.click(),
        page.waitForTimeout(1000)
    ]);

// Give the browser a moment to open the dialog.
await page.waitForTimeout(1000);
    });

    //Confirm download from table menu works properly
    test('Confirm DEC P1 Download', async ({ page }) => {
        await page.goto('/table/DECENNIALCD1182020.P1',);

        const downloadButton = page
            .locator('#toolbar-button-download')
            .filter({ has: page.locator(':visible') })
            .first();

        //had to include a wait, before clicking button as button will not open on initial click if page still loading
        await page.waitForTimeout(3000);

        await downloadButton.click();

        await expect(
            page.getByRole('heading', {
                name: 'Download Table Data'
            })
        ).toBeVisible();

        //confirm subtext in table download screen
        const downloadFormatText = page.locator('div.ml-4.mt-3', {
            hasText: 'Choose a format to download the table data:'
        });

        await expect(downloadFormatText).toBeVisible();

        // Select Excel format
        const excelRadio = page
            .getByText('Excel: Presentation-ready Excel format', { exact: true })
            .locator('xpath=preceding-sibling::div[contains(@class,"aqua-radio")]');

        await excelRadio.click();

        //await page.getByRole('button', { name: 'Download Data' }).click();

        //Confirm Excel download of exported table data has completed successfully
        const [exceldownload] = await Promise.all([
            page.waitForEvent('download'),
            page.getByRole('button', { name: 'Download Data' }).first().click()
        ]);

        //confirm Excel download completed successfully
        expect(await exceldownload.failure()).toBeNull();

        // Select CSV format
        const csvRadio = page
            .getByText('CSV: Table-view .csv format', { exact: true })
            .locator('xpath=preceding-sibling::div[contains(@class,"aqua-radio")]');

        await csvRadio.click();

        //await page.getByRole('button', { name: 'Download Data' }).click();

        //Confirm Excel download of exported table data has completed successfully
        const [csvdownload] = await Promise.all([
            page.waitForEvent('download'),
            page.getByRole('button', { name: 'Download Data' }).first().click()
        ]);

        //confirm Excel download completed successfully
        expect(await csvdownload.failure()).toBeNull();

        const zipRadio = page
            .getByText('ZIP: Flat, machine-readable .csv files including GEOIDs', { exact: true })
            .locator('xpath=preceding-sibling::div[contains(@class,"aqua-radio")]');

        await zipRadio.click();

        await Promise.all([
            page.waitForLoadState('networkidle'),
            page.getByRole('button', {
                name: 'Download Data',
                exact: true
            }).click()
        ]);

        console.log('Current URL:', page.url());

        // Wait for the download page to load
        const zipButton = page.getByText('DOWNLOAD .ZIP', { exact: true });

        await expect(zipButton).toBeVisible();

       // console.log(await page.locator('body').innerText());
        await expect(zipButton).toBeVisible();

        const [zipDownload] = await Promise.all([
            page.waitForEvent('download'),
            zipButton.click()
        ]);

        //confirm Excel download completed successfully
        expect(await zipDownload.failure()).toBeNull();

    });

});

   
