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

test('checkboxes', async({page}) => {
        await page.getByText('Modal & Overlays').click() 
        await page.getByText('Toastr').click()

        await page.getByRole('checkbox', {name: "Hide on click"}).check({force: true})//had to use force true because its hidden, can use click, but doesn't check stutus, so if checked, click will uncheck but check() will just check if uncheck and nothing if checked already
        await page.getByRole('checkbox', {name: "Hide on click"}).uncheck({force: true})// will uncheck if checked
        await page.getByRole('checkbox', {name: "Prevent arising of duplicate toast"}).check({force: true})

        //to make all checkbox checked
        const allBoxes = page.getByRole('checkbox')
        for(const box of await allBoxes.all()){
            await box.check({force: true})
            expect(await box.isChecked()).toBeTruthy
        }

        //to make all checkbox unchecked
        const allBoxesUnchecked = page.getByRole('checkbox')
        for(const box of await allBoxesUnchecked.all()){
            await box.uncheck({force: true})
            expect(await box.isChecked()).toBeFalsy
        }
    })

test('List and dropdown', async({page}) => {
    const dropDownMenu=page.locator ('ngx-header nb-select')
    await dropDownMenu.click()//click to open dropdown menu})

    page.getByRole('list')//when the list has a UL tag(parent list)
    page.getByRole('listitem')//wen the list has LI tag(all the listed item in the list)

    //const optionList = page.getByRole('list').locator('nb-option')//locate all the options in the dropdown menu
    const optionList = page.locator('nb-option-list nb-option')
    await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])//locate all the options in the dropdown menu, this is better because it will work even if there is no list tag in the dropdown menu
    await optionList.filter({hasText: "Cosmic"}).click()//filter the option with text "Cosmic" and click it
    const header = page.locator('nb-layout-header')
    await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)')//check if the header has class cosmic-theme, this is to check if the theme is changed to cosmic

    const colors = {
        Light: 'rgb(255, 255, 255)',
        Dark: 'rgb(34, 43, 69)',
        Cosmic: 'rgb(50, 50, 89)',
        Corporate: 'rgb(255, 255, 255)'
    }

    await dropDownMenu.click()//click to open dropdown menu again for next iteration
    for(const color in colors){
        await optionList.filter({hasText: color}).click()//filter the option with text "color" and click it
        await expect(header).toHaveCSS('background-color', colors[color])//check if the header has class color-theme, this is to check if the theme is changed to color
        if(color != "Corporate") // will continue until color is not corporate
         await dropDownMenu.click()//click to open dropdown menu again for next iteration
    }

})