import {test} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click() 
    await page.getByText('Form Layouts').click()
   })

test('Locator syntax rules', async ({page}) => {
    //find by Tag name
    await page.locator('input').first().click()

    //Find by ID
    page.locator('#inputEmail1')

    //Find by Class value
    page.locator('.shape-rectangle')

    //Find by attribute
    page.locator('[placeholder="Email"]')

    //Find Class value (full)
    page.locator('c[lass="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine different selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //Find by XPath (Not Recommended)
    page.locator('//*[@id="inputEmail1"]')

    //Find by partial test match
    page.locator(':test(Using")')

    //Find by exact text match
    page.locator(':text-is(Using the Grid")')
})

test('User facing locators', async ({page}) => {
    await page.getByRole('textbox', {name: "Email"}).first().click()
    await page.getByRole('button', {name: "sign in"}).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder('Jane Doe').click()

    await page.getByText('Using the Grid').click()

    await page.getByTestId('SignIn').click()

   // await page.getByTitle('IoT Dashboard').click()
})

test('locating child elements', async({page}) => {
    //cheld elements
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click()//try to find unique element instead of using the order such as first

    await page.locator('nb-card').nth(3).getByRole('button').click()// try to avoid this approach as the element(card) can change:  fyi index always starts with (0)
})

test('locating parent elements', async({page}) =>{
    await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"}).click()
    await page.locator('nb-card', {has: page.locator('#inputEmail')}).getByRole('textbox', {name: "Email"}).click()

    await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).click()
    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: "Password"}).click()
    // use for depenndents
    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "sign in"})
        .getByRole('textbox', {name: "Email"}).click()
// Not suggested to use below ass much
        await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: "Email"}).click()
})