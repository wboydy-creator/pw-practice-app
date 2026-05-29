import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov');
   
    await expect(page).toHaveTitle(/Census/);
    });

    //Test the Search Icon from landing page is clickable
test('Landing Page search icon', async ({page}) => {
   await page.getByRole('combobox', { name: 'Search Button' }).click();
})

//Test the Microphone from landing page is clickable
test('Landing Page microphone icon', async ({page}) => {
   await page.getByRole('button', {
  name: 'Speak to perform a search'}).click();
})