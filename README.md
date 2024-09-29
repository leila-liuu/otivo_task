# otivo_task
**Test Summary**

Test Case 1: Verifies user details input (age, salary, super balance, etc.).

Test Case 2: Validates the “How we work this out” details and updates user information.

Test Case 3: Adds partner details (age, income, contribution rate, etc.).

Test Case 4: Downloads the retirement report and handles the download event.

**Prerequisites**
Before setting up and running the tests, ensure you have the following installed:

Node.js (v14 or higher) and npm: You can download Node.js from here.
Playwright: This project uses the Playwright framework for browser automation.
To verify if Node.js and npm are installed, run the following commands:

node -v
npm -v


**Project Setup**
_1. Clone or Download the Project_
First, clone the repository or download the code:

git clone <repository_url>
cd <project_directory>

_2. Install Dependencies_
Run the following command to install the required dependencies:


npm install

This will install Playwright and any other dependencies required by the project.

_3. Install Playwright Browsers_
Playwright requires browser binaries for testing. To install these, run the following command:

npx playwright install

This will install the necessary browser binaries (Chromium, Firefox, WebKit) required to run the tests.

_4. Configure TypeScript (Optional)_
If you're working with TypeScript and don't have a tsconfig.json file, you can initialize TypeScript by running:

npx tsc --init

This will create a default tsconfig.json file. Ensure that your tsconfig.json has the proper setup for Playwright.

_6. Run the Tests_
To run the tests, use the following command:

npx playwright test

_7. View Test Report_
After the tests are executed, Playwright generates a detailed report. To view the report:

npx playwright show-report

This will open a browser showing the detailed results of your tests.
