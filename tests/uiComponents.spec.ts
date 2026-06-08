import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})

test.describe('Form Layouts page', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })

    //find and locate input box
    test('input fields', async ({ page }) => {
        const usingTheGridEmailInput = page.locator('nb-card', { hasText: "Using the Grid" }).getByRole('textbox', { name: "Email" })

        await usingTheGridEmailInput.fill('test@test.com')//fill in textbox with email
        await usingTheGridEmailInput.clear() //clear message from textbox
        await usingTheGridEmailInput.pressSequentially('test@test.com', { delay: 500 })//fill in textbox sequentially slowly

        //generic assertion
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect(inputValue).toEqual('test@test.com')

        //locator assertion
        await expect(usingTheGridEmailInput).toHaveValue('test@test.com')
    })
    //selecting checkbox (in this case checkbox was hidden)
    test('radio buttons', async ({ page }) => {
        const usingTheGridForm = page.locator('nb-card', { hasText: "Using the Grid" })

        await usingTheGridForm.getByLabel('Option 1').check({ force: true })  //select checkbox using getbylabel
        await usingTheGridForm.getByRole('radio', { name: "Option 1" }).check({ force: true }) //select checkboxy using getbyrole
        const radioStatus = await usingTheGridForm.getByRole('radio', { name: "Option 1" }).isChecked()// will check if this is true or false, if checked, radioStatus is true, else false
        expect(radioStatus).toBeTruthy()//check status is actually true
        await expect(usingTheGridForm.getByRole('radio', { name: "Option 1" })).toBeChecked()// second way to check if true

        await usingTheGridForm.getByRole('radio', { name: "Option 2" }).check({ force: true }) //select checkboxy using getbyrole
        expect(await usingTheGridForm.getByRole('radio', { name: "Option 1" }).isChecked()).toBeFalsy//check to make sure option 1 is not checked
        expect(await usingTheGridForm.getByRole('radio', { name: "Option 2" }).isChecked()).toBeTruthy// check that option 2 is checked
    })
})

test('checkboxes', async ({ page }) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

    await page.getByRole('checkbox', { name: "Hide on click" }).check({ force: true })//had to use force true because its hidden, can use click, but doesn't check stutus, so if checked, click will uncheck but check() will just check if uncheck and nothing if checked already
    await page.getByRole('checkbox', { name: "Hide on click" }).uncheck({ force: true })// will uncheck if checked
    await page.getByRole('checkbox', { name: "Prevent arising of duplicate toast" }).check({ force: true })

    //to make all checkbox checked
    const allBoxes = page.getByRole('checkbox')
    for (const box of await allBoxes.all()) {
        await box.check({ force: true })
        expect(await box.isChecked()).toBeTruthy
    }

    //to make all checkbox unchecked
    const allBoxesUnchecked = page.getByRole('checkbox')
    for (const box of await allBoxesUnchecked.all()) {
        await box.uncheck({ force: true })
        expect(await box.isChecked()).toBeFalsy
    }
})

test('List and dropdown', async ({ page }) => {
    const dropDownMenu = page.locator('ngx-header nb-select')
    await dropDownMenu.click()//click to open dropdown menu})

    page.getByRole('list')//when the list has a UL tag(parent list)
    page.getByRole('listitem')//wen the list has LI tag(all the listed item in the list)

    //const optionList = page.getByRole('list').locator('nb-option')//locate all the options in the dropdown menu
    const optionList = page.locator('nb-option-list nb-option')
    await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])//locate all the options in the dropdown menu, this is better because it will work even if there is no list tag in the dropdown menu
    await optionList.filter({ hasText: "Cosmic" }).click()//filter the option with text "Cosmic" and click it
    const header = page.locator('nb-layout-header')
    await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)')//check if the header has class cosmic-theme, this is to check if the theme is changed to cosmic

    const colors = {
        Light: 'rgb(255, 255, 255)',
        Dark: 'rgb(34, 43, 69)',
        Cosmic: 'rgb(50, 50, 89)',
        Corporate: 'rgb(255, 255, 255)'
    }

    await dropDownMenu.click()//click to open dropdown menu again for next iteration
    for (const color in colors) {
        await optionList.filter({ hasText: color }).click()//filter the option with text "color" and click it
        await expect(header).toHaveCSS('background-color', colors[color])//check if the header has class color-theme, this is to check if the theme is changed to color
        if (color != "Corporate") // will continue until color is not corporate
            await dropDownMenu.click()//click to open dropdown menu again for next iteration
    }

})
//finding and noting tooltip
test('tooltips', async ({ page }) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()

    const toolTipCard = page.locator('nb-card', { hasText: "Tooltip Placements" })
    await toolTipCard.getByRole('button', { name: "Top" }).hover()

    page.getByRole('tooltip')//this only works if you have a role tooltip created in the DOM
    const tooltip = await page.locator('nb-tooltip').textContent()
    expect(tooltip).toEqual('This is a tooltip')
})
//dialog box for browser dialogs box, not withing site
test('dialog box', async ({ page }) => {

    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    //listner created for dialog box
    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Are you sure you want to delete?')
        dialog.accept()// to accept to delete
    })

    await page.getByRole('table').locator('tr', { hasText: "mdo@gmail.com" }).locator('.nb-trash').click()

    //mak3e sure does not have email that was deleted
    await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com')
})

test('web tables', async ({ page }) => {

    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    //Scenario 1: how to get the row by any test in this row
    const targetRow = page.getByRole('row', { name: "twitter@outlook.com" })
    await targetRow.locator('.nb-edit').click()
    await page.locator('input-editor').getByPlaceholder('Age').clear()// clear age input value
    await page.locator('input-editor').getByPlaceholder('Age').fill('35')//fill input with age 
    await page.locator('.nb-checkmark').click()//confirm update


    //scenario 2: to get the row based on the value in the specific column
    await page.locator('.ng2-smart-pagination-nav').getByText('2').click()
    const targetRowByID = page.getByRole('row', { name: "19" }).filter({ has: page.locator('td').nth(1).getByText('19') })
    await targetRowByID.locator('.nb-edit').click()
    await page.locator('input-editor').getByPlaceholder('E-mail').clear()// clear email input value
    await page.locator('input-editor').getByPlaceholder('E-mail').fill('wboydy@gmail.com')//fill input with email
    await page.locator('.nb-checkmark').click()
    await expect(targetRowByID.locator('td').nth(5)).toHaveText('wboydy@gmail.com')//assertion to confirm correct new imput

    //scenario 3 test filter of the table

    const ages = ["20", "30", "40", "200"]

    //for loop here will cycle through all ages
    for (let age of ages) {//set variable of age  to obtain each of the ages through the loop
        await page.locator('input-filter').getByPlaceholder('Age').clear()
        await page.locator('input-filter').getByPlaceholder('Age').fill(age)
        await page.waitForTimeout(500)// create a timeout to allow for each selection during loop

        const ageRows = page.locator('tbody tr')// locator will give all rows inside of table body

        // for this loop for each cellValue, you will get the cell content
        for (let row of await ageRows.all()) {
            const cellValue = await row.locator('td').last().textContent()

            if (age == "200") {
                expect(await page.getByRole('table').textContent()).toContain('No data found')

            } else {

                expect(cellValue).toEqual(age)// assertion to confirm age is correct

            }
        }
    }
})
//selecting date from calendar (not idea because its hard coded, but just to show how to select from calendar)
test('datepicker', async ({ page }) => {
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()

    const calendarInputFields = page.getByPlaceholder('Form Picker')
    await calendarInputFields.click()// click to open calendar

    await page.locator('[class="day-cell ng-star-inserted"]').getByText('1', { exact: true }).click()//select day 1 (have to use exact because there are multiple 1s in the calendar)
    await expect(calendarInputFields).toHaveValue('Jun 1, 2026')//assertion to confirm correct date is selected
})

//selecting date from calendar (not idea because its hard coded, but just to show how to select from calendar)
test('datePicker automated', async ({ page }) => {
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()

    const calendarInputFields = page.getByPlaceholder('Form Picker')
    await calendarInputFields.click()// click to open calendar

    let date = new Date()// get current date
    date.setDate(date.getDate() + 1)// set date to tomorrow's date
    const expectedDate = date.getDate().toString()// get day of month and convert to string


    await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click()//select day 1 (have to use exact because there are multiple 1s in the calendar)
    await expect(calendarInputFields).toHaveValue('Jun 6, 2026')//assertion to confirm correct date is selected
})


/*selecting date from calendar (not idea because its hard coded, but just to show how to 
 select from calendar - including assertion, this will fail if the Date in the future extends to another month)*/
test('datePicker automated assertion not hardcoded', async ({ page }) => {
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()

    const calendarInputFields = page.getByPlaceholder('Form Picker')
    await calendarInputFields.click()// click to open calendar

    let date = new Date()// get current date
    date.setDate(date.getDate() + 1)// set date to tomorrow's date
    const expectedDate = date.getDate().toString()// get day of month and convert to string
    const expectedMonthshort = date.toLocaleString('En-US', { month: 'short' })
    const expectedYear = date.getFullYear()// get year and convert to string
    const dateToAssert = `${expectedMonthshort} ${expectedDate}, ${expectedYear}`//not single quote allows to format date individually


    await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click()//select day 1 (have to use exact because there are multiple 1s in the calendar)
    await expect(calendarInputFields).toHaveValue(dateToAssert)//assertion to confirm correct date is selected
})

/*selecting date from calendar if date changes to next month(month switching) with longer version of name*/
test('datePicker month switching', async ({ page }) => {
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()

    const calendarInputFields = page.getByPlaceholder('Form Picker')
    await calendarInputFields.click()// click to open calendar

    let date = new Date()// get current date
    date.setDate(date.getDate() + 300)// set date ahead of today
    const expectedDate = date.getDate().toString()// get day of month and convert to string
    const expectedMonthshort = date.toLocaleString('En-US', { month: 'short' })
    const expectedMonthLong = date.toLocaleString('En-US', { month: 'long' })

    const expectedYear = date.getFullYear()// get year and convert to string
    const dateToAssert = `${expectedMonthshort} ${expectedDate}, ${expectedYear}`//not single quote allows to format date individually


    let calendarMonthandYear = await page.locator('nb-calendar-view-mode').textContent()//text display in current selector
    const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`//getting expected month and year

    //start a while loop, that states while current month and year does not include the expected, keep going until it does
    while (!calendarMonthandYear.includes(expectedMonthAndYear)) {
        await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()//click chevron right to go to next month
        calendarMonthandYear = await page.locator('nb-calendar-view-mode').textContent()//get the text to confirm which month year
    }

    await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click()//select day 1 (have to use exact because there are multiple 1s in the calendar)
    await expect(calendarInputFields).toHaveValue(dateToAssert)//assertion to confirm correct date is selected
})

//slider change point (move)
test('sliders', async ({ page }) => {
    //update attribute
    //const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
    //await tempGauge.evaluate( node => {
    //    node.setAttribute('cx', '232.630')//set to the bottom
    //    node.setAttribute('cy', '232.630')//set to the bottom
    //})
    //await tempGauge.click()

    //Mouse Movement
    const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
    await tempBox.scrollIntoViewIfNeeded()

    const box = await tempBox.boundingBox()
    const x = box.x + box.width / 2
    const y = box.y + box.height / 2
    await page.mouse.move(x, y)
    await page.mouse.down()
    await page.mouse.move(x + 100, y)
    await page.mouse.move(x + 100, y + 100)
    await page.mouse.up()
    await expect(tempBox).toContainText('30')

})




