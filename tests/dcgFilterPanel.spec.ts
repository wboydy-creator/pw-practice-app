import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov/all');
   
    await expect(page).toHaveTitle("Census Bureau Search");
    });

//Test the Official site banner on Landing page is clickable
test('Landing Page Official site banner Link', async ({page}) => {
   await page.getByText(' Here’s how you know ').first().click()
})

//Test the US Census Bureau logo from landing page is clickable
test('Landing Page Census Bureau Logo', async ({page}) => {
   await page.getByLabel('Navigates to the census.gov home page.').first().click()
})

/*Test the Filters button toggle and confirmation.  
The block of testing test that you can click filters button, 
for it to open and close the filter panel*/
test('All Page Link', async ({page}) => {

   const filtersButton = page.locator(
    '.LaunchBarButton',
    { hasText: 'Filters' }
  );

  await expect(filtersButton).toBeVisible();

  // Capture class before click
  const before = await filtersButton.getAttribute('class');

  // Click button
  await filtersButton.click();

  // Capture class after click
  const after = await filtersButton.getAttribute('class');

  // Verify state changed
  expect(before).not.toBe(after);

   // Click button
  await filtersButton.click();

    // Verify state changed
  expect(before).not.toBe(after);

  });

  /*Test that the ? mark next to Filters opens to show the information dialog box 
  and clicking close on the information dialog boxes closes the dialog box*/
  test('click question-circle icon', async ({ page }) => {
   // Locate icon using unique SVG asset in style attribute
  const questionIcon = page.locator(

   // 'div.aqua-icon[style*="question-circle"]' - this is if there was a single aqua-icon
   'div.aqua-icon[style*="question-circle-854bbe8e.svg"]'//using this to make more unique
  );
  //assetion to check to see if visible
  await expect(questionIcon).toBeVisible();

  // Click the icon
  await questionIcon.click();

 // Locate close icon
 const closeButton = page.getByRole('button', { name: 'Close Dialog' });

  await expect(closeButton).toBeVisible();
  
  // Click to close dialog
  await closeButton.click();

  });