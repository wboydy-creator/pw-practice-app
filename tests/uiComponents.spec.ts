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
    //selecting checkbox (in this case checkbox was hidden)
    test('radio buttons', async({page}) =>{
        const usingTheGridForm = page.locator('nb-card', {hasText: "Using the Grid"})

        await usingTheGridForm.getByLabel('Option 1').check({force: true})  //select checkbox using getbylabel
        await usingTheGridForm.getByRole('radio', {name: "Option 1"}).check({force: true}) //select checkboxy using getbyrole
        const radioStatus =  await usingTheGridForm.getByRole('radio', {name: "Option 1"}).isChecked()// will check if this is true or false, if checked, radioStatus is true, else false
        expect(radioStatus).toBeTruthy()//check status is actually true
        await expect(usingTheGridForm.getByRole('radio', {name: "Option 1"})).toBeChecked()// second way to check if true

        await usingTheGridForm.getByRole('radio', {name: "Option 2"}).check({force: true}) //select checkboxy using getbyrole
        expect(await usingTheGridForm.getByRole('radio', {name: "Option 1"}).isChecked()).toBeFalsy//check to make sure option 1 is not checked
        expect(await usingTheGridForm.getByRole('radio', {name: "Option 2"}).isChecked()).toBeTruthy// check that option 2 is checked
    })
})