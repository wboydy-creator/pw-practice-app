import { test, expect } from '@playwright/test'

test('drag and drop with iframe', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')

    const frame = page.frameLocator('[rel-title="Photo Manager"] iframe')//drill down to the iframe within the page

    await frame.locator('Li', { hasText: "High Tatras 2" }).dragTo(frame.locator('#trash'))// located item and directed to frame called trash

    //more presice control
    await frame.locator('Li', { hasText: "High Tatras 4" }).hover()
    await page.mouse.down()//engage mouse button
    await frame.locator('#trash').hover()
    await page.mouse.up()// release the mouse button

    await expect(frame.locator('#trash Li h5')).toHaveText("High Tatras 2", "High Tatras 4")

})
