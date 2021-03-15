# TPG point to Cash Calculator

A simple Application that recieves input from a user and tells them whether to use cash or points based on the loyalty program. This project is built using React hooks, typescript, Jest and enzyme libraries for testing.

#Getting Started

## Prerequisites(Packages used)

- react-currency-input
- react-select
- es-lint

These are automatically installed running the command `npm install`

#Coding Break-Down
#Steps
- First step was to convert file from csv to JSON and store it in the public directory to be able to mimick calls to an api.This enables the fetch call to be replace with URL for real data.
- Filtered out all the programs that did not have a TPG Valuation, once database (JSON) file is updated with new values, it will automatically display it in the drop-down selection.
- A select component is used that enable the user to be able to select rewards program from a drop down which can be searched, by typing name.
- For ticket price, I used a currencyInput which ensure the data validation and does not allow characters and values less than Zero. Making the assumption that the currency is USD.
- Recommendations are only shown for valid entries.   


#Assumptions
-USD
-Point Usage can automatically be calculated based on the tpg_valuation being less than or greater than 1. 
#Improvements
-more test cases

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests]

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run format`

This command formats the code following specifications in ESlint file. 

