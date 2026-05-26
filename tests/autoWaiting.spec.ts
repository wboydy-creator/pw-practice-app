import { state } from '@angular/animations'
import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click() 
   })

   test('auto waiting', async ({page}) => {
    const successButton = page.locator('.bg-success')

    //await successButton.click()    

    //const text = await successButton.textContent() 

    //await successButton.waitFor({state: "attached"})
    //const text = await successButton.allTextContents()

    //auto waiting is when playwright waits for the element to be visible before performing any action on it. In this case, it waits for the success button to be visible before clicking on
    //expect(text).toContain('Data loaded with AJAX get request.')

    await expect(successButton).toHaveText('Data loaded with AJAX get request.' , {timeout: 20000})//Using timeout of 20 seconds to wait for the success button to be visible before performing any action on it. This is useful when the element takes a long time to load or when there are network issues that may cause delays in loading the element. By default, Playwright has a timeout of 30 seconds for all actions, but you can override it for specific actions like this one.
    
   })
    
   test('alternative waits', async ({page}) => {
    const successButton = page.locator('.bg-success')

    //__wait for element
    //await page.waitForSelector('.bg-success')

    //__wait for a particular response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //wait__for network calls to be completed('NOT RECOMMENDED)
    await page.waitForLoadState('networkidle')

    
    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
   })

   test('timeouts', async ({page}) =>{

    const successButton = page.locator('bg-success')
    await successButton.click()

   })
