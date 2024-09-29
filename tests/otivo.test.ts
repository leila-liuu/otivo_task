import { test, expect } from '@playwright/test';

// Base URL
const baseUrl = 'https://www.otivo.com/cfs/retirementCalculator';

test.describe('Otivo Retirement Calculator - Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the calculator page before each test
    await page.goto(baseUrl);
  });

  // Test Case 1: Insert User Details
  test('Verify current age and retirement age validation', async ({ page }) => {
    await page.locator('[id="Retirement\\ Calculator\\ Age"]').click(); //Click Current Age box
    await page.locator('[id="Retirement\\ Calculator\\ Age"]').fill('27'); //Fill in the current age
    await page.locator('[id="Retirement\\ Calculator\\ Income"]').click(); //Click Current Salary box
    await page.locator('[id="Retirement\\ Calculator\\ Income"]').fill('$7,5000'); //Fill in the current salary
    await page.locator('[data-test="userIncomeFrequency"] [data-test="selected"]').click(); //Drop down the selection of current salary, "Yearly","Monthly","Fortnightly","Weekly"
    await page.locator('[data-test="userIncomeFrequency"] [data-test="items"] div').filter({ hasText: 'Yearly' }).nth(1).click(); //Select the "Yearly"
    await page.locator('[id="Retirement\\ Calculator\\ Super\\ Balance"]').click(); //Click current super balance box
    await page.locator('[id="Retirement\\ Calculator\\ Super\\ Balance"]').fill('$1,1000'); //Fill in the current super balance
    await page.getByPlaceholder('%').click(); //Click the Employer contribution rate
    await page.getByPlaceholder('%').fill('11.9'); //Fill in the Employer contribution rate
    await page.locator('[id="Retirement\\ Calculator\\ Retirement\\ Income"]').click(); //Click the Target annual retirement income (in today dollars)
    await page.locator('[id="Retirement\\ Calculator\\ Retirement\\ Income"]').fill('$3,8000'); //Fill in the Target annual retirement income (in today dollars)
    await page.locator('[id="Retirement\\ Calculator\\ Retirement\\ Age"]').click(); // Click the Retirement age
    await page.locator('[id="Retirement\\ Calculator\\ Retirement\\ Age"]').fill('65');// Fill in the Retirement age
    await page.locator('[data-test="ownsHome"] [data-test="selected"]').click(); //Drop down the selection of Do you own your home
    await page.locator('[data-test="ownsHome"] [data-test="items"] div').filter({ hasText: 'No' }).nth(1).click(); //Select "No"
    await page.locator('[data-test="nextBtn"]').click(); //Click "Next" button
  });


  // Test Case 2: Enter "How we work this out" and update informations"
  test('Enter "How we work this out" and update informations"', async ({ page }) => {
    await page.locator('[id="Retirement\\ Calculator\\ Age"]').click(); 
    await page.locator('[id="Retirement\\ Calculator\\ Age"]').fill('27'); 
    await page.locator('[id="Retirement\\ Calculator\\ Income"]').click(); 
    await page.locator('[id="Retirement\\ Calculator\\ Income"]').fill('$7,5000'); 
    await page.locator('[data-test="userIncomeFrequency"] [data-test="selected"]').click(); 
    await page.locator('[data-test="userIncomeFrequency"] [data-test="items"] div').filter({ hasText: 'Yearly' }).nth(1).click(); 
    await page.locator('[id="Retirement\\ Calculator\\ Super\\ Balance"]').click(); 
    await page.locator('[id="Retirement\\ Calculator\\ Super\\ Balance"]').fill('$1,1000'); 
    await page.getByPlaceholder('%').click(); 
    await page.getByPlaceholder('%').fill('11.9'); 
    await page.locator('[id="Retirement\\ Calculator\\ Retirement\\ Income"]').click(); 
    await page.locator('[id="Retirement\\ Calculator\\ Retirement\\ Income"]').fill('$3,8000'); 
    await page.locator('[id="Retirement\\ Calculator\\ Retirement\\ Age"]').click(); 
    await page.locator('[id="Retirement\\ Calculator\\ Retirement\\ Age"]').fill('65');
    await page.locator('[data-test="ownsHome"] [data-test="selected"]').click(); 
    await page.locator('[data-test="ownsHome"] [data-test="items"] div').filter({ hasText: 'No' }).nth(1).click(); 
    await page.locator('[data-test="nextBtn"]').click(); 

    //After saved user details and enter the retirement flow chart page
    await page.getByText('How we worked this out').click(); //Enetr "How we wroked this out" and enter details
    await page.getByLabel('Inflation rate').click(); //Click Inflation Rate box
    await page.getByLabel('Inflation rate').fill('7.0%'); //Enetr Inflarion Rate
    await page.getByLabel('Wage growth').click(); //Click Wage growth box
    await page.getByLabel('Wage growth').fill('02'); //Enetr Wage growth
    await page.locator('[id="Investment\\ return"]').first().click(); //Click Investment Return
    await page.locator('[id="Investment\\ return"]').first().fill('11.5'); //Fill in Investment Return rate
    await page.locator('#superFunds-tax-earnings-0').click();//Click SuperFunds Tax Earning
    await page.locator('#superFunds-tax-earnings-0').fill('2'); //Fill in SuperFunds Tax Earning
    await page.locator('#superFunds-admin-fee-0').click(); //Click SuperFunds Admin Fee
    await page.locator('#superFunds-admin-fee-0').fill('3');//Fill in SuperFunds Admin Fee
    await page.locator('div:nth-child(5) > div:nth-child(2) > .flex > [id="Investment\\ return"]').click(); //Click the Investment Property
    await page.locator('div:nth-child(5) > div:nth-child(2) > .flex > [id="Investment\\ return"]').fill('1.3');//Fill in the Investment 
    await page.locator('div:nth-child(6) > div:nth-child(2) > .flex > [id="Investment\\ return"]').click();//Click the Shares
    await page.locator('div:nth-child(6) > div:nth-child(2) > .flex > [id="Investment\\ return"]').fill('11.2');//Fill in the Shares
    await page.locator('div:nth-child(7) > div:nth-child(2) > .flex > [id="Investment\\ return"]').click();//Click the Cash
    await page.locator('div:nth-child(7) > div:nth-child(2) > .flex > [id="Investment\\ return"]').fill('100');//Fill in the Cash
    await page.locator('div:nth-child(8) > div:nth-child(2) > .flex > [id="Investment\\ return"]').click();//Click the Other
    await page.locator('div:nth-child(8) > div:nth-child(2) > .flex > [id="Investment\\ return"]').fill('02');//Fill in the Other
    await page.getByLabel('Annual Insurance Premium').click(); //Click the Annual Insurance Premium
    await page.getByLabel('Annual Insurance Premium').fill('$1200'); //Fill in the Annual Insurance Premium
    await page.getByLabel('Annual Admin Fees').click(); //Annual Admin Fees
    await page.getByLabel('Annual Admin Fees').fill('$230'); //Fill in the Annual Admin Fees
    await page.getByRole('button', { name: 'Save' }).click(); //Click the "Save" Button
  });

  // Test Case 3: Add Partner details
  test('Add Partner details', async ({ page }) => {
    await page.locator('[data-test="showPartnerDetails"] label').first().click(); //Tick the Partner selection 
    await page.locator('[id="Retirement\\ Calculator\\ Partner\\ Age"]').click();
    await page.locator('[id="Retirement\\ Calculator\\ Partner\\ Age"]').fill('30');
    await page.locator('[data-test="partnerIncome"]').nth(1).click();
    await page.locator('[data-test="partnerIncome"]').nth(1).fill('$1,3000');
    await page.locator('[data-test="partnerIncomeFrequency"] [data-test="selected"]').click();
    await page.locator('[data-test="partnerIncomeFrequency"] [data-test="items"] div').filter({ hasText: 'Yearly' }).nth(1).click();
    await page.locator('[id="Retirement\\ Calculator\\ Partner\\ Super\\ Balance"]').click();
    await page.locator('[id="Retirement\\ Calculator\\ Partner\\ Super\\ Balance"]').fill('$3,9000');
    await page.locator('[data-test="partnerContributionRate"]').getByPlaceholder('%').click();
    await page.locator('[data-test="partnerContributionRate"]').getByPlaceholder('%').fill('13.00');
    await page.locator('[data-test="partnerContributionRate"]').getByPlaceholder('%').press('Enter');
    await page.locator('[id="Retirement\\ Calculator\\ Retirement\\ Income"]').click();
    await page.locator('[id="Retirement\\ Calculator\\ Partner\\ Retirement\\ Age"]').click();
    await page.locator('[id="Retirement\\ Calculator\\ Partner\\ Retirement\\ Age"]').fill('69');
    await page.locator('[data-test="ownsHome"] [data-test="selected"]').click();
    await page.locator('[data-test="ownsHome"] [data-test="items"] div').filter({ hasText: 'Yes' }).nth(1).click();
    await page.locator('[data-test="nextBtn"]').click();
});

//Test Case 4: Download Retirement Report
test('Download Retirement Report', async ({ page }) => {
    const downloadPromise = page.waitForEvent('download');// Start listening for a 'download' event and store the promise
     // Find and click the button that triggers the download (button with the label 'Download')
    await page.getByRole('button', { name: 'Download' }).click();//Click the Download button
    // Await the download promise to resolve and capture the download event
    const download = await downloadPromise;//Awiting the download Promise 
});
});
