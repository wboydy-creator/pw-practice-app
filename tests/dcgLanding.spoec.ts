import { state } from '@angular/animations'
import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://data.census.gov')
       })
