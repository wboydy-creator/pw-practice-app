# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dcgMdat.spec.ts >> Microdata Page Tests >> closing geography using x in geo chip
- Location: tests\dcgMdat.spec.ts:250:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[aria-label="REGION (4)"]')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[aria-label="REGION (4)"]')

```

# Test source

```ts
  170 |         }
  171 | 
  172 |     })
  173 | 
  174 |     /**************Test the Mdat Selecting Age and sex using dataset CPSBASIC 2024DEC (CPSBASIC202412/vars) and that the table returns with data****************/
  175 |     //Default Mdat selection
  176 |     test('Mdate Select All-Deselect All is operable', async ({ page }) => {
  177 |         await page.goto('/app/mdat/ACSPUMS1Y2024/geos');
  178 | 
  179 |         await expect(page).toHaveTitle("Microdata - Census Bureau Geographies");
  180 | 
  181 |         //Clicking the Next button from Mdat home page
  182 |         await page.getByRole('button', { name: 'SELECT ALL' }).first().click();
  183 | 
  184 |         //confirm that the Region all count
  185 |         const regionButton = page.locator('[aria-label="REGION (4)"]');
  186 | 
  187 |         await expect(regionButton).toBeVisible();
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
  248 | 
  249 |     //Default Mdat selection
  250 |     test('closing geography using x in geo chip', async ({ page }) => {
  251 |         await page.goto('/app/mdat/ACSPUMS1Y2024/geos?rv=ucgid&g=AwJm-BVBlEBoCMcAscDMQ');
  252 | 
  253 |         await expect(page).toHaveTitle("Microdata - Census Bureau Geographies");
  254 | 
  255 |         //confirm that the Region all count
  256 |         const regionButton = page.locator('[aria-label="REGION (4)"]');
  257 | 
  258 |         await expect(regionButton).toBeVisible();
  259 |         await regionButton.click();
  260 | 
  261 |         const chip = page.locator('.aqua-chip').filter({
  262 |             hasText: 'Midwest'
  263 |         });
  264 | 
  265 |         await chip.locator('.aqua-icon.close').click();
  266 | 
  267 |                 //confirm that the Region all count
  268 |         const regionxButton = page.locator('[aria-label="REGION (4)"]');
  269 | 
> 270 |         await expect(regionxButton).toBeVisible();
      |                                     ^ Error: expect(locator).toBeVisible() failed
  271 |         await regionxButton.click();
  272 |     });
  273 | 
  274 | 
  275 |     /**************Testing the download of Mdat table****************/
  276 |     //Default Mdat selection
  277 |     test('Mdat Download tables', async ({ page }) => {
  278 |         await page.goto('/app/mdat/ACSPUMS1Y2024/table?cv=SEX&vv=AGEP&wt=PWGTP');
  279 | 
  280 |         await expect(page).toHaveTitle("Microdata - Census Bureau Data Table");
  281 | 
  282 |         //Clicking the MDat Download/Share button to download table
  283 |         await page.getByRole('button', { name: 'DOWNLOAD/SHARE' }).first().click();
  284 | 
  285 |         //Clicking the MDat Download/Share button to download table
  286 |         await page.getByRole('checkbox', { name: 'JSON' }).first().click();
  287 | 
  288 |         //Clicking the MDat Download/Share button to download table
  289 |         await page.getByRole('checkbox', { name: 'Housing Unit Weight' }).first().click();
  290 | 
  291 |         //Confirm download of exported table data has completed successfully
  292 |         const [download] = await Promise.all([
  293 |             page.waitForEvent('download'),
  294 |             page.getByRole('button', { name: 'EXPORT TABLE DATA' }).first().click()
  295 |         ]);
  296 | 
  297 |         expect(await download.failure()).toBeNull();
  298 | 
  299 |         //Confirm download of RAW data of table has completed successfully
  300 |         const [downloadraw] = await Promise.all([
  301 |             page.waitForEvent('download'),
  302 |             page.getByRole('button', { name: 'DOWNLOAD RAW DATA' }).first().click()
  303 |         ]);
  304 | 
  305 |         expect(await downloadraw.failure()).toBeNull();
  306 |     });
  307 | 
  308 |     /**************Testing the view Universe function****************/
  309 |     //Test View Universe when no Geography was selected
  310 |     test('View Universe with No Geo', async ({ page }) => {
  311 |         await page.goto('/app/mdat/ACSPUMS1Y2024/table?cv=SEX&vv=AGEP&wt=PWGTP');
  312 | 
  313 |         await expect(page).toHaveTitle("Microdata - Census Bureau Data Table");
  314 | 
  315 |         //Selecting the View Universe button
  316 |         await page.getByRole('button', { name: 'VIEW UNIVERSE' }).first().click()
  317 | 
  318 |         //Confirm message in reference of suggestions for Geography U.S.
  319 |         const universeText = page.getByText('Default (usually U.S.)', { exact: true });
  320 | 
  321 |         await expect(universeText).toBeVisible();
  322 | 
  323 |         //Closing out the message box and clicking done
  324 |         await page.getByRole('button', { name: 'DONE' }).first().click()
  325 |     });
  326 | 
  327 |     /*****Selecting View Universe button wtih Geography selected*******/
  328 |     test('View Universe with Geo selected', async ({ page }) => {
  329 |         await page.goto('/app/mdat/ACSPUMS1Y2024/table?cv=SEX&rv=ucgid&vv=AGEP&wt=PWGTP&g=AwFm-BVBlYEYA0wBMSRA');
  330 | 
  331 |         await expect(page).toHaveTitle("Microdata - Census Bureau Data Table");
  332 | 
  333 |         //Selecting the View Universe button
  334 |         await page.getByRole('button', { name: 'VIEW UNIVERSE' }).first().click()
  335 | 
  336 |         //Confirming the Geographies selected and displaying in Table Universe box
  337 |         const alabama = page.locator('li').filter({ hasText: 'Alabama' });
  338 |         const alaska = page.locator('li').filter({ hasText: 'Alaska' });
  339 |         const arizona = page.locator('li').filter({ hasText: 'Arizona' });
  340 | 
  341 |         await expect(alabama).toBeVisible();
  342 |         await expect(alaska).toBeVisible();
  343 |         await expect(arizona).toBeVisible();
  344 | 
  345 |         //Closing out the message box and clicking done
  346 |         await page.getByRole('button', { name: 'DONE' }).first().click()
  347 |     });
  348 | 
  349 | });
  350 | 
```