import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
})

test.describe('Form Layouts page', () => {
    test.beforeEach( async({page}) =>{
        await page.getByText('Forms').click() 
        await page.getByText('Form Layouts').click()
    })

    //find and locate input box
    test('input fields', async({page}) => {
        const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})
        
        await usingTheGridEmailInput.fill('test@test.com')//fill in textbox with email
        await usingTheGridEmailInput.clear() //clear message from textbox
        await usingTheGridEmailInput.pressSequentially('test@test.com', {delay: 500})//fill in textbox sequentially slowly

        //generic assertion
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect (inputValue).toEqual('test@test.com')

        //locator assertion
        await expect(usingTheGridEmailInput).toHaveValue('test@test.com')
    })

})