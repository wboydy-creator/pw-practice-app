# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dcgMdat.spec.ts >> Microdata Page Tests >> View Universe Button
- Location: tests\dcgMdat.spec.ts:283:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'VIEW universe' }).first()

```

# Test source

```ts
  188 |         await regionButton.click();
  189 | 
  190 |         //Clicking the Next button from Mdat home page
  191 |         await page.getByRole('button', { name: 'DESELECT ALL' }).first().click();
  192 | 
  193 |         //selecting the Division Tab from Mdat geographies
  194 |         const divisionButton = page.locator('div[aria-label="DIVISION"]');
  195 | 
  196 |         await divisionButton.click();
  197 | 
  198 |         //Clicking the Next button from Mdat home page
  199 |         await page.getByRole('button', { name: 'SELECT ALL' }).first().click();
  200 | 
  201 |         //confirm that the division select all count 
  202 |         const divisioncountButton = page.locator('[aria-label="DIVISION (9)"]');
  203 | 
  204 |         await expect(divisioncountButton).toBeVisible();
  205 |         await divisioncountButton.click();
  206 | 
  207 |         //Clicking the Next button from Mdat home page
  208 |         await page.getByRole('button', { name: 'DESELECT ALL' }).first().click();
  209 | 
  210 |         //selecting the State Tab from Geographies
  211 |         const stateButton = page.locator('div[aria-label="STATE"]');
  212 | 
  213 |         await stateButton.click();
  214 | 
  215 |         //Clicking the Next button from Mdat home page
  216 |         await page.getByRole('button', { name: 'SELECT ALL' }).first().click();
  217 | 
  218 |         //confirm that the STATE select all count 
  219 |         const statecountButton = page.locator('[aria-label="STATE (51)"]');
  220 | 
  221 |         await expect(statecountButton).toBeVisible();
  222 |         await statecountButton.click();
  223 | 
  224 |         //Clicking the Next button from Mdat home page
  225 |         await page.getByRole('button', { name: 'DESELECT ALL' }).first().click();
  226 | 
  227 |         //selecting the PUMA Tab from Geographies
  228 |         const pumaButton = page.locator('div[aria-label="PUMA"]');
  229 | 
  230 |         await pumaButton.click();
  231 | 
  232 |         await page.getByRole('option', { name: 'Alabama' }).first().click();
  233 | 
  234 |         //Clicking the Next button from Mdat home page
  235 |         await page.getByRole('button', { name: 'SELECT ALL' }).first().click();
  236 | 
  237 |         //confirm that the division select all count 
  238 |         const pumacountButton = page.locator('[aria-label="PUMA (39)"]');
  239 | 
  240 |         await expect(pumacountButton).toBeVisible();
  241 |         await pumacountButton.click();
  242 | 
  243 |         //Clicking the Next button from Mdat home page
  244 |         await page.getByRole('button', { name: 'DESELECT ALL' }).first().click();
  245 | 
  246 |     });
  247 | 
  248 |     /**************Testing the download of Mdat table****************/
  249 |     //Default Mdat selection
  250 |     test('Mdat Download tables', async ({ page }) => {
  251 |         await page.goto('/app/mdat/ACSPUMS1Y2024/table?cv=SEX&vv=AGEP&wt=PWGTP');
  252 | 
  253 |         await expect(page).toHaveTitle("Microdata - Census Bureau Data Table");
  254 | 
  255 |         //Clicking the MDat Download/Share button to download table
  256 |         await page.getByRole('button', { name: 'DOWNLOAD/SHARE' }).first().click();
  257 | 
  258 |         //Clicking the MDat Download/Share button to download table
  259 |         await page.getByRole('checkbox', { name: 'JSON' }).first().click();
  260 | 
  261 |         //Clicking the MDat Download/Share button to download table
  262 |         await page.getByRole('checkbox', { name: 'Housing Unit Weight' }).first().click();
  263 | 
  264 |         //Confirm download of exported table data has completed successfully
  265 |         const [download] = await Promise.all([
  266 |             page.waitForEvent('download'),
  267 |             page.getByRole('button', { name: 'EXPORT TABLE DATA' }).first().click()
  268 |         ]);
  269 | 
  270 |         expect(await download.failure()).toBeNull();
  271 | 
  272 |         //Confirm download of RAW data of table has completed successfully
  273 |         const [downloadraw] = await Promise.all([
  274 |             page.waitForEvent('download'),
  275 |             page.getByRole('button', { name: 'DOWNLOAD RAW DATA' }).first().click()
  276 |         ]);
  277 | 
  278 |         expect(await downloadraw.failure()).toBeNull();
  279 |     });
  280 | 
  281 |         /**************Testing the download of Mdat table****************/
  282 |     //Default Mdat selection
  283 |     test('View Universe Button', async ({ page }) => {
  284 | 
  285 |         //Selecting VIEW UNIVERSE button with no Geography selected, to return message of no geo
  286 |             /**************Testing the download of Mdat table****************/
  287 |     //Default Mdat selection
> 288 |     page.getByRole('button', { name: 'VIEW universe' }).first().click()
      |                                                                 ^ Error: locator.click: Test ended.
  289 |     });
  290 | });
  291 | 
```