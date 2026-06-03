# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dcgMapsPage.spec.ts >> Maps Page Official site banner Link
- Location: tests\dcgMapsPage.spec.ts:16:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Census Bureau Tables"
Received: "Census Bureau Maps"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    9 × unexpected value "Census Bureau Maps"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary "top skip navigation link":
    - button "Skip to main content" [ref=e3] [cursor=pointer]:
      - heading "Skip to main content" [level=3]
  - generic [ref=e6]:
    - generic [ref=e8]:
      - img [ref=e9]
      - generic [ref=e11]:
        - generic "An official website of the United States government" [ref=e12]
        - generic "Here’s how you know. Press enter for more information." [ref=e13] [cursor=pointer]:
          - generic [ref=e14]: Here’s how you know
    - alert [ref=e15]
    - banner [ref=e18]:
      - generic [ref=e19]:
        - link "Navigates to the census.gov home page." [ref=e23] [cursor=pointer]:
          - /url: https://www.census.gov
          - img "United States Census Bureau - Census Data Homepage" [ref=e24]
        - generic [ref=e25]:
          - generic [ref=e28]:
            - application [ref=e29]:
              - combobox [ref=e32]:
                - status
                - generic [ref=e33]:
                  - generic [ref=e34]: Search for an area, a topic, or both
                  - generic "Clear Text" [ref=e36] [cursor=pointer]
                  - button "Search for an address" [ref=e38] [cursor=pointer]
                  - button "Speak to perform a search" [ref=e40] [cursor=pointer]
                  - combobox "Search Button" [ref=e43] [cursor=pointer]
            - link "Navigates to the Explore Filters page." [ref=e46] [cursor=pointer]:
              - /url: /advanced
              - text: Explore Filters
          - generic [ref=e49]:
            - navigation [ref=e51]:
              - generic [ref=e53]:
                - link "All" [ref=e54] [cursor=pointer]:
                  - /url: /all
                - link "Tables" [ref=e55] [cursor=pointer]:
                  - /url: /table
                - link "Maps" [ref=e56] [cursor=pointer]:
                  - /url: /map?layer=VT_2022_040_00_PP_D1&loc=43.3751,-113.1138,z2.6270
                - link "Charts" [ref=e57] [cursor=pointer]:
                  - /url: /chart
                - link "Profiles" [ref=e58] [cursor=pointer]:
                  - /url: /profile
                - link "Pages" [ref=e59] [cursor=pointer]:
                  - /url: /webpages
            - generic [ref=e62]:
              - link "Navigates to the Home page." [ref=e64] [cursor=pointer]:
                - /url: /
                - button "Navigates to the Home page." [ref=e65]: data.census.gov
              - link "Navigates to the Apps page." [ref=e66] [cursor=pointer]:
                - /url: /app
                - button "Navigates to the Apps page." [ref=e67]: Apps
              - button "Navigates to the Help page." [ref=e68] [cursor=pointer]: Help
    - generic [ref=e74]:
      - generic [ref=e76]:
        - generic [ref=e81] [cursor=pointer]: Filters
        - generic [ref=e82] [cursor=pointer]:
          - generic [ref=e83]: "6158"
          - generic [ref=e86]: Results
        - generic "Opens the Accessibility panel." [ref=e88] [cursor=pointer]
      - generic [ref=e93]:
        - generic [ref=e95]:
          - heading "0 Filters" [level=2] [ref=e97]
          - button "Open help dialog" [ref=e98] [cursor=pointer]
          - button "close panel" [ref=e101] [cursor=pointer]
        - search [ref=e106]:
          - generic:
            - generic:
              - textbox "This is a type in text search bar." [ref=e108]:
                - /placeholder: Search for a filter
              - generic "Clear Text" [ref=e110] [cursor=pointer]
        - list [ref=e116]:
          - generic [ref=e117]:
            - listitem "expanded." [ref=e118]:
              - generic [ref=e124] [cursor=pointer]: Geographies
              - list [ref=e125]:
                - listitem "collapsed." [ref=e126]:
                  - generic [ref=e131] [cursor=pointer]: Nation
                - listitem "collapsed." [ref=e133]:
                  - generic [ref=e138] [cursor=pointer]: State
                - listitem "collapsed." [ref=e140]:
                  - generic [ref=e145] [cursor=pointer]: County
                - listitem "collapsed." [ref=e147]:
                  - generic [ref=e151] [cursor=pointer]:
                    - text: County
                    - generic [ref=e152]: Subdivision
                - listitem "collapsed." [ref=e154]:
                  - generic [ref=e159] [cursor=pointer]: Place
                - listitem "collapsed." [ref=e161]:
                  - generic [ref=e165] [cursor=pointer]:
                    - text: ZIP Code Tabulation
                    - generic [ref=e166]: Area
                - listitem "collapsed." [ref=e168]:
                  - generic [ref=e172] [cursor=pointer]:
                    - text: Metropolitan/Micropolitan Statistical
                    - generic [ref=e173]: Area
                - listitem "collapsed." [ref=e175]:
                  - generic [ref=e179] [cursor=pointer]:
                    - text: Census
                    - generic [ref=e180]: Tract
                - listitem "collapsed." [ref=e182]:
                  - generic [ref=e187] [cursor=pointer]: Block
                - listitem "collapsed." [ref=e189]:
                  - generic [ref=e193] [cursor=pointer]:
                    - text: Block
                    - generic [ref=e194]: Group
                - listitem "collapsed." [ref=e196]:
                  - generic [ref=e200] [cursor=pointer]:
                    - text: All
                    - generic [ref=e201]: Geographies
            - listitem "expanded." [ref=e203]:
              - generic [ref=e209] [cursor=pointer]: Topics
              - list [ref=e210]:
                - listitem "collapsed." [ref=e211]:
                  - generic [ref=e215] [cursor=pointer]:
                    - text: Business and
                    - generic [ref=e216]: Economy
                - listitem "collapsed." [ref=e218]:
                  - generic [ref=e223] [cursor=pointer]: Education
                - listitem "collapsed." [ref=e225]:
                  - generic [ref=e230] [cursor=pointer]: Employment
                - listitem "collapsed." [ref=e232]:
                  - generic [ref=e236] [cursor=pointer]:
                    - text: Families and Living
                    - generic [ref=e237]: Arrangements
                - listitem "collapsed." [ref=e239]:
                  - generic [ref=e244] [cursor=pointer]: Government
                - listitem "collapsed." [ref=e246]:
                  - generic [ref=e251] [cursor=pointer]: Health
                - listitem "collapsed." [ref=e253]:
                  - generic [ref=e258] [cursor=pointer]: Housing
                - listitem "collapsed." [ref=e260]:
                  - generic [ref=e264] [cursor=pointer]:
                    - text: Income and
                    - generic [ref=e265]: Poverty
                - listitem "collapsed." [ref=e267]:
                  - generic [ref=e271] [cursor=pointer]:
                    - text: Populations and
                    - generic [ref=e272]: People
                - listitem "collapsed." [ref=e274]:
                  - generic [ref=e278] [cursor=pointer]:
                    - text: Race and
                    - generic [ref=e279]: Ethnicity
            - listitem "expanded." [ref=e281]:
              - generic [ref=e287] [cursor=pointer]: Surveys
              - list [ref=e288]:
                - listitem "collapsed." [ref=e289]:
                  - generic [ref=e293] [cursor=pointer]:
                    - text: American Community
                    - generic [ref=e294]: Survey
                - listitem "collapsed." [ref=e296]:
                  - generic [ref=e300] [cursor=pointer]:
                    - text: Community Resilience
                    - generic [ref=e301]: Estimates
                - listitem "collapsed." [ref=e303]:
                  - generic [ref=e307] [cursor=pointer]:
                    - text: Current Population
                    - generic [ref=e308]: Survey
                - listitem "collapsed." [ref=e310]:
                  - generic [ref=e314] [cursor=pointer]:
                    - text: Decennial
                    - generic [ref=e315]: Census
                - listitem "collapsed." [ref=e317]:
                  - generic [ref=e321] [cursor=pointer]:
                    - text: Decennial Census of Island
                    - generic [ref=e322]: Areas
                - listitem "collapsed." [ref=e324]:
                  - generic [ref=e328] [cursor=pointer]:
                    - text: Economic
                    - generic [ref=e329]: Census
                - listitem "collapsed." [ref=e331]:
                  - generic [ref=e335] [cursor=pointer]:
                    - text: Economic Census of Island
                    - generic [ref=e336]: Areas
                - listitem "collapsed." [ref=e338]:
                  - generic [ref=e342] [cursor=pointer]:
                    - text: Economic
                    - generic [ref=e343]: Surveys
                - listitem "collapsed." [ref=e345]:
                  - generic [ref=e350] [cursor=pointer]: Geography
                - listitem "collapsed." [ref=e352]:
                  - generic [ref=e356] [cursor=pointer]:
                    - text: Household Pulse
                    - generic [ref=e357]: Survey
                - listitem "collapsed." [ref=e359]:
                  - generic [ref=e363] [cursor=pointer]:
                    - text: International
                    - generic [ref=e364]: Database
                - listitem "collapsed." [ref=e366]:
                  - generic [ref=e370] [cursor=pointer]:
                    - text: Population
                    - generic [ref=e371]: Estimates
                - listitem "collapsed." [ref=e373]:
                  - generic [ref=e377] [cursor=pointer]:
                    - text: Post-Secondary Employment Outcomes
                    - generic [ref=e378]: (PSEO)
                - listitem "collapsed." [ref=e380]:
                  - generic [ref=e384] [cursor=pointer]:
                    - text: Public
                    - generic [ref=e385]: Sector
                - listitem "collapsed." [ref=e387]:
                  - generic [ref=e391] [cursor=pointer]:
                    - text: Rental Housing Finance
                    - generic [ref=e392]: Survey
                - listitem "collapsed." [ref=e394]:
                  - generic [ref=e398] [cursor=pointer]:
                    - text: Survey of Market
                    - generic [ref=e399]: Absorption
            - listitem "expanded." [ref=e401]:
              - generic [ref=e407] [cursor=pointer]: Years
              - list [ref=e408]:
                - listitem [ref=e409]:
                  - generic [ref=e410] [cursor=pointer]:
                    - checkbox "2100 2100" [ref=e412]:
                      - generic [ref=e414]:
                        - checkbox "2100"
                      - generic:
                        - generic "2100"
                    - generic [ref=e418]: "2100"
                - listitem [ref=e419]:
                  - generic [ref=e420] [cursor=pointer]:
                    - checkbox "2030 2030" [ref=e422]:
                      - generic [ref=e424]:
                        - checkbox "2030"
                      - generic:
                        - generic "2030"
                    - generic [ref=e428]: "2030"
                - listitem [ref=e429]:
                  - generic [ref=e430] [cursor=pointer]:
                    - checkbox "2025 2025" [ref=e432]:
                      - generic [ref=e434]:
                        - checkbox "2025"
                      - generic:
                        - generic "2025"
                    - generic [ref=e438]: "2025"
                - listitem [ref=e439]:
                  - generic [ref=e440] [cursor=pointer]:
                    - checkbox "2024 2024" [ref=e442]:
                      - generic [ref=e444]:
                        - checkbox "2024"
                      - generic:
                        - generic "2024"
                    - generic [ref=e448]: "2024"
                - listitem [ref=e449]:
                  - generic [ref=e450] [cursor=pointer]:
                    - checkbox "2023 2023" [ref=e452]:
                      - generic [ref=e454]:
                        - checkbox "2023"
                      - generic:
                        - generic "2023"
                    - generic [ref=e458]: "2023"
                - listitem [ref=e459]:
                  - generic [ref=e460] [cursor=pointer]:
                    - checkbox "2022 2022" [ref=e462]:
                      - generic [ref=e464]:
                        - checkbox "2022"
                      - generic:
                        - generic "2022"
                    - generic [ref=e468]: "2022"
                - listitem [ref=e469]:
                  - generic [ref=e470] [cursor=pointer]:
                    - checkbox "2021 2021" [ref=e472]:
                      - generic [ref=e474]:
                        - checkbox "2021"
                      - generic:
                        - generic "2021"
                    - generic [ref=e478]: "2021"
                - listitem [ref=e479]:
                  - generic [ref=e480] [cursor=pointer]:
                    - checkbox "2020 2020" [ref=e482]:
                      - generic [ref=e484]:
                        - checkbox "2020"
                      - generic:
                        - generic "2020"
                    - generic [ref=e488]: "2020"
                - listitem [ref=e489]:
                  - generic [ref=e490] [cursor=pointer]:
                    - checkbox "2019 2019" [ref=e492]:
                      - generic [ref=e494]:
                        - checkbox "2019"
                      - generic:
                        - generic "2019"
                    - generic [ref=e498]: "2019"
                - listitem [ref=e499]:
                  - generic [ref=e500] [cursor=pointer]:
                    - checkbox "2018 2018" [ref=e502]:
                      - generic [ref=e504]:
                        - checkbox "2018"
                      - generic:
                        - generic "2018"
                    - generic [ref=e508]: "2018"
                - listitem [ref=e509]:
                  - generic [ref=e510] [cursor=pointer]:
                    - checkbox "2017 2017" [ref=e512]:
                      - generic [ref=e514]:
                        - checkbox "2017"
                      - generic:
                        - generic "2017"
                    - generic [ref=e518]: "2017"
                - listitem [ref=e519]:
                  - generic [ref=e520] [cursor=pointer]:
                    - checkbox "2016 2016" [ref=e522]:
                      - generic [ref=e524]:
                        - checkbox "2016"
                      - generic:
                        - generic "2016"
                    - generic [ref=e528]: "2016"
                - listitem [ref=e529]:
                  - generic [ref=e530] [cursor=pointer]:
                    - checkbox "2015 2015" [ref=e532]:
                      - generic [ref=e534]:
                        - checkbox "2015"
                      - generic:
                        - generic "2015"
                    - generic [ref=e538]: "2015"
                - listitem [ref=e539]:
                  - generic [ref=e540] [cursor=pointer]:
                    - checkbox "2014 2014" [ref=e542]:
                      - generic [ref=e544]:
                        - checkbox "2014"
                      - generic:
                        - generic "2014"
                    - generic [ref=e548]: "2014"
                - listitem [ref=e549]:
                  - generic [ref=e550] [cursor=pointer]:
                    - checkbox "2013 2013" [ref=e552]:
                      - generic [ref=e554]:
                        - checkbox "2013"
                      - generic:
                        - generic "2013"
                    - generic [ref=e558]: "2013"
                - listitem [ref=e559]:
                  - generic [ref=e560] [cursor=pointer]:
                    - checkbox "2012 2012" [ref=e562]:
                      - generic [ref=e564]:
                        - checkbox "2012"
                      - generic:
                        - generic "2012"
                    - generic [ref=e568]: "2012"
                - listitem [ref=e569]:
                  - generic [ref=e570] [cursor=pointer]:
                    - checkbox "2011 2011" [ref=e572]:
                      - generic [ref=e574]:
                        - checkbox "2011"
                      - generic:
                        - generic "2011"
                    - generic [ref=e578]: "2011"
                - listitem [ref=e579]:
                  - generic [ref=e580] [cursor=pointer]:
                    - checkbox "2010 2010" [ref=e582]:
                      - generic [ref=e584]:
                        - checkbox "2010"
                      - generic:
                        - generic "2010"
                    - generic [ref=e588]: "2010"
                - listitem [ref=e589]:
                  - generic [ref=e590] [cursor=pointer]:
                    - checkbox "2000 2000" [ref=e592]:
                      - generic [ref=e594]:
                        - checkbox "2000"
                      - generic:
                        - generic "2000"
                    - generic [ref=e598]: "2000"
            - listitem "expanded." [ref=e599]:
              - generic [ref=e605] [cursor=pointer]: Codes
              - list [ref=e606]:
                - listitem "collapsed." [ref=e607]:
                  - generic [ref=e611] [cursor=pointer]:
                    - text: Industry Codes
                    - generic [ref=e612]: (NAICS)
                - listitem "collapsed." [ref=e614]:
                  - generic [ref=e618] [cursor=pointer]:
                    - text: Product and Service
                    - generic [ref=e619]: Codes
                - listitem "collapsed." [ref=e621]:
                  - generic [ref=e625] [cursor=pointer]:
                    - text: Commodity
                    - generic [ref=e626]: Codes
                - listitem "collapsed." [ref=e628]:
                  - generic [ref=e633] [cursor=pointer]: Material/Fuel
                - listitem "collapsed." [ref=e635]:
                  - generic [ref=e639] [cursor=pointer]:
                    - text: NAPCS
                    - generic [ref=e640]: Collection
                - listitem "collapsed." [ref=e642]:
                  - generic [ref=e646] [cursor=pointer]:
                    - text: EEO Occupation
                    - generic [ref=e647]: Codes
                - listitem "collapsed." [ref=e649]:
                  - generic [ref=e653] [cursor=pointer]:
                    - text: International Trade
                    - generic [ref=e654]: Codes
      - complementary [ref=e658]:
        - generic [ref=e661]:
          - generic [ref=e664]:
            - heading "6158 Results" [level=2] [ref=e666]
            - generic "close panel button" [ref=e667] [cursor=pointer]
          - generic [ref=e670]:
            - generic [ref=e673]:
              - generic [ref=e674]:
                - generic [ref=e675]: "View:"
                - generic [ref=e676]: "10"
                - generic [ref=e677]: "25"
                - generic [ref=e679]: "50"
              - generic "Link to select multiple tables for download." [ref=e681] [cursor=pointer]: Download Table Data
            - generic [ref=e682]:
              - paragraph [ref=e685] [cursor=pointer]: SELECTION MAP
              - generic [ref=e689]:
                - generic "Decennial Census" [ref=e691]
                - button "TOTAL POPULATION - click or press enter to go to P1 in Map" [ref=e694] [cursor=pointer]:
                  - heading "P1 TOTAL POPULATION" [level=3] [ref=e696]:
                    - text: P1
                    - text: TOTAL POPULATION
                - button "View All 18 Products" [ref=e698]:
                  - generic [ref=e700]: View All 18 Products
              - generic [ref=e704]:
                - generic "American Community Survey" [ref=e706]
                - button "Age and Sex - click or press enter to go to S0101 in Map" [ref=e709] [cursor=pointer]:
                  - heading "S0101 Age and Sex" [level=3] [ref=e711]:
                    - text: S0101
                    - text: Age and Sex
                - button "View All 29 Products" [ref=e713]:
                  - generic [ref=e715]: View All 29 Products
              - generic [ref=e719]:
                - generic "American Community Survey" [ref=e721]
                - button "ACS Demographic and Housing Estimates - click or press enter to go to DP05 in Map" [ref=e724] [cursor=pointer]:
                  - heading "DP05 ACS Demographic and Housing Estimates" [level=3] [ref=e726]:
                    - text: DP05
                    - text: ACS Demographic and Housing Estimates
                - button "View All 33 Products" [ref=e728]:
                  - generic [ref=e730]: View All 33 Products
              - generic [ref=e734]:
                - generic "American Community Survey" [ref=e736]
                - button "Income in the Past 12 Months (in 2024 Inflation-Adjusted Dollars) - click or press enter to go to S1901 in Map" [ref=e739] [cursor=pointer]:
                  - heading "S1901 Income in the Past 12 Months (in 2024 Inflation-Adjusted Dollars)" [level=3] [ref=e741]:
                    - text: S1901
                    - text: Income in the Past 12 Months (in 2024 Inflation-Adjusted Dollars)
                - button "View All 29 Products" [ref=e743]:
                  - generic [ref=e745]: View All 29 Products
              - generic [ref=e749]:
                - generic "American Community Survey" [ref=e751]
                - button "Selected Economic Characteristics - click or press enter to go to DP03 in Map" [ref=e754] [cursor=pointer]:
                  - heading "DP03 Selected Economic Characteristics" [level=3] [ref=e756]:
                    - text: DP03
                    - text: Selected Economic Characteristics
                - button "View All 35 Products" [ref=e758]:
                  - generic [ref=e760]: View All 35 Products
              - generic [ref=e764]:
                - generic "Decennial Census" [ref=e766]
                - button "URBAN AND RURAL - click or press enter to go to P2 in Map" [ref=e769] [cursor=pointer]:
                  - heading "P2 URBAN AND RURAL" [level=3] [ref=e771]:
                    - text: P2
                    - text: URBAN AND RURAL
                - button "View All 18 Products" [ref=e773]:
                  - generic [ref=e775]: View All 18 Products
              - generic [ref=e779]:
                - generic "American Community Survey" [ref=e781]
                - button "Selected Social Characteristics in the United States - click or press enter to go to DP02 in Map" [ref=e784] [cursor=pointer]:
                  - heading "DP02 Selected Social Characteristics in the United States" [level=3] [ref=e786]:
                    - text: DP02
                    - text: Selected Social Characteristics in the United States
                - button "View All 35 Products" [ref=e788]:
                  - generic [ref=e790]: View All 35 Products
              - generic [ref=e794]:
                - generic "American Community Survey" [ref=e796]
                - button "Selected Housing Characteristics - click or press enter to go to DP04 in Map" [ref=e799] [cursor=pointer]:
                  - heading "DP04 Selected Housing Characteristics" [level=3] [ref=e801]:
                    - text: DP04
                    - text: Selected Housing Characteristics
                - button "View All 35 Products" [ref=e803]:
                  - generic [ref=e805]: View All 35 Products
              - generic [ref=e809]:
                - generic "American Community Survey" [ref=e811]
                - button "Poverty Status in the Past 12 Months - click or press enter to go to S1701 in Map" [ref=e814] [cursor=pointer]:
                  - heading "S1701 Poverty Status in the Past 12 Months" [level=3] [ref=e816]:
                    - text: S1701
                    - text: Poverty Status in the Past 12 Months
                - button "View All 27 Products" [ref=e818]:
                  - generic [ref=e820]: View All 27 Products
              - generic [ref=e824]:
                - generic "American Community Survey" [ref=e826]
                - button "Educational Attainment - click or press enter to go to S1501 in Map" [ref=e829] [cursor=pointer]:
                  - heading "S1501 Educational Attainment" [level=3] [ref=e831]:
                    - text: S1501
                    - text: Educational Attainment
                - button "View All 29 Products" [ref=e833]:
                  - generic [ref=e835]: View All 29 Products
              - generic [ref=e837]:
                - generic "page 1" [ref=e838]:
                  - generic [ref=e840]: "1"
                - generic "page 2" [ref=e841] [cursor=pointer]:
                  - generic [ref=e843]: "2"
                - generic "page 3" [ref=e844] [cursor=pointer]:
                  - generic [ref=e846]: "3"
                - generic "page 4" [ref=e847] [cursor=pointer]:
                  - generic [ref=e849]: "4"
                - generic "page 5" [ref=e850] [cursor=pointer]:
                  - generic [ref=e852]: "5"
                - generic "page 6" [ref=e853] [cursor=pointer]:
                  - generic [ref=e855]: "6"
                - generic "page 7" [ref=e856] [cursor=pointer]:
                  - generic [ref=e858]: "7"
                - generic "page 8" [ref=e859] [cursor=pointer]:
                  - generic [ref=e861]: "8"
                - generic "page 9" [ref=e862] [cursor=pointer]:
                  - generic [ref=e864]: "9"
                - generic "next page" [ref=e865] [cursor=pointer]
      - main [ref=e869]:
        - generic [ref=e870]:
          - toolbar [ref=e876]:
            - generic [ref=e877]:
              - button "State Geographies TOTAL POPULATION, DECENNIALCD1182020.P1" [ref=e880] [cursor=pointer]:
                - heading "State Geographies TOTAL POPULATION, DECENNIALCD1182020.P1" [level=1] [ref=e883]: State Geographies
              - button "Select" [ref=e887] [cursor=pointer]:
                - generic [ref=e889]: Select
              - button "Layer" [ref=e894] [cursor=pointer]:
                - generic [ref=e896]: Layer
            - button "More Tools" [ref=e900] [cursor=pointer]:
              - generic [ref=e902]: More Tools
            - button "Press enter to collapse the toolbar" [ref=e903] [cursor=pointer]
          - generic [ref=e909]:
            - heading "State Geographies" [level=2] [ref=e912] [cursor=pointer]
            - generic [ref=e917]:
              - region "Map" [ref=e918]
              - generic:
                - generic [ref=e919]:
                  - button "Zoom in" [ref=e920] [cursor=pointer]
                  - button "Zoom out" [ref=e922] [cursor=pointer]
                - generic [ref=e924]: 500 mi
```

# Test source

```ts
  1   | //import { state } from '@angular/animations'
  2   | 
  3   | /*This test suite is for the ALL page(TAB) and to test all elements are accessible 
  4   | and clickable on the ALL page and available*/
  5   | 
  6   | 
  7   | import {test, expect} from '@playwright/test'
  8   | 
  9   | test.beforeEach(async ({page}) => {
  10  |     await page.goto('https://data.census.gov/map');
  11  |    
> 12  |     await expect(page).toHaveTitle("Census Bureau Tables");
      |                        ^ Error: expect(page).toHaveTitle(expected) failed
  13  |     });
  14  | 
  15  |     //Test the Official site banner on Maps page is clickable
  16  | test('Maps Page Official site banner Link', async ({page}) => {
  17  |    await page.getByText(' Here’s how you know ').first().click()
  18  | })
  19  | 
  20  | //Test the US Census Bureau logo from Maps page is clickable
  21  | test('Maps Page Census Bureau Logo', async ({page}) => {
  22  |    await page.getByLabel('Navigates to the census.gov home page.').first().click()
  23  | })
  24  | 
  25  | //Test the data.census.gov homepage link from Maps page is clickable
  26  | test('Maps Page home page link', async ({page}) => {
  27  |    await page.getByLabel('Navigates to the Home page.').first().click()
  28  | })
  29  | 
  30  | //Test the Tables Menu link on Maps page is clickable
  31  | test('Maps Page Tables Menu Link', async ({page}) => {
  32  |    await page.getByRole('link', { name: 'Tables' }).first().click();
  33  | })
  34  | 
  35  | //Test the Maps Menu link on Maps page is clickable
  36  | test('Maps Page Maps Menu Link', async ({page}) => {
  37  |    await page.getByRole('link', { name: 'Maps' }).first().click();
  38  | })
  39  | 
  40  | 
  41  | //Test the Charts Menu link on Maps page is clickable
  42  | test('Maps Page Charts Menu Link', async ({page}) => {
  43  |    await page.getByRole('link', { name: 'Charts' }).first().click();
  44  | })
  45  | 
  46  | //Test the Profiles Menu link on Maps page is clickable
  47  | test('Maps Page Profiles Menu Link', async ({page}) => {
  48  |    await page.getByRole('link', { name: 'Profiles' }).first().click();
  49  | })
  50  | 
  51  | //Test the Pages Menu link on Maps page is clickable
  52  | test('Maps Page Profiles Pages Link', async ({page}) => {
  53  |    await page.getByRole('link', { name: 'Pages' }).first().click();
  54  | })
  55  | 
  56  | //Test the All Menu link on Maps page is clickable
  57  | test('Maps Page Profiles All Link', async ({page}) => {
  58  |    await page.getByRole('link', { name: 'All' }).first().click();
  59  | })
  60  | 
  61  | //Test the Apps Menu link on Maps page is clickable
  62  | test('Maps Page Apps Menu Link', async ({page}) => {
  63  |    await page.getByLabel('Navigates to the Apps page.').first().click()
  64  | })
  65  | 
  66  | //Test the Help dropdown Menu link on Maps page is clickable
  67  | test('Maps Page Help dropdown Link', async ({page}) => {
  68  |    await page.getByLabel('Navigates to the Help page.').first().click()
  69  | })
  70  | 
  71  | //Test the Help dropdown =>Resource Menu link on Maps page is clickable
  72  | test('Maps Page Latest Release dropdown Link', async ({page}) => {
  73  |    await page.getByLabel('Navigates to the Help page.').first().click()
  74  |    await page.getByText('Latest Releases').click() 
  75  | })
  76  | 
  77  | //Test the Help dropdown =>Upcoming Release  Menu link on Maps page is clickable
  78  | test('Maps Page Upcoming Release dropdown Link', async ({page}) => {
  79  |    await page.getByLabel('Navigates to the Help page.').first().click()
  80  |    await page.getByText('Upcoming Releases').click() 
  81  | })
  82  | 
  83  | //Test the Help dropdown =>Site Updates Menu link on Maps page is clickable
  84  | test('Maps Page Site Updates dropdown Link', async ({page}) => {
  85  |    await page.getByLabel('Navigates to the Help page.').first().click()
  86  |    await page.getByText('Site Updates').click() 
  87  | })
  88  | 
  89  | //Test the Help dropdown =>Resource Menu link on Maps page is clickable
  90  | test('Maps Page Resource dropdown Link', async ({page}) => {
  91  |    await page.getByLabel('Navigates to the Help page.').first().click()
  92  |    await page.getByLabel('Navigates to the Resources page.').click() 
  93  | })
  94  | 
  95  | //Test the Help dropdown =>Tutorials Menu link on Maps page is clickable
  96  | test('Maps Page Tutorials dropdown Link', async ({page}) => {
  97  |    await page.getByLabel('Navigates to the Help page.').first().click()
  98  |    await page.getByLabel('Navigates to the Tutorials page.').click() 
  99  | })
  100 | 
  101 | //Test the Help dropdown =>FAQs Menu link on Maps page is clickable
  102 | test('Maps Page FAQs dropdown Link', async ({page}) => {
  103 |    await page.getByLabel('Navigates to the Help page.').first().click()
  104 |    await page.getByLabel('Navigates to the F A Q page.').click() 
  105 | })
  106 | 
  107 | //Test the Help dropdown =>Contact Us Menu link on Maps page is clickable
  108 | test('Maps Page Contact Us dropdown Link', async ({page}) => {
  109 |    await page.getByLabel('Navigates to the Help page.').first().click()
  110 |    await page.getByLabel('Send Us an Email').click() 
  111 | })
  112 | 
```