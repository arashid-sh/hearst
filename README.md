# Hearst Automation Framework

This project is the main repository for functional UI and API tests Hearst client server app

## Dependencies

- vscode or any other IDE of your choice
- NodeJS
- Playwright

## How To Run Locally

#### Setup For Local Web Testing

Assumptions: Mac with VSCode installed

- [Install NodeJS](https://nodejs.org/en/download) or type `brew install node` in terminal if you have homebrew installed
  - To check if node and npm is installed run `node -v` and
    `npm -v` in your terminal
- Clone this repo to your local machine and navigate to the root of the folder
- Type `npx playwright install` to install playwright browsers
- Type `npm install` to install dependencies
- Type `npm run test` to run the tests. NOTE: This will run ALL test on all browsers installed above.

## Reports

To view a HTML report run `npm run reports` after the tests have completed.

## Helpful tools/plugins

[Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright). Take a look at this [video](https://www.youtube.com/watch?v=ECkMUATC1aA) to get a quick intro on how to use this tool to troubleshoot, record, run, select selectors, and debug your tests from within VSCode.
