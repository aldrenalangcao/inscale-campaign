# Campaigns
## Demo page

Project is deployed using Github Pages here: https://aldrenalangcao.github.io/inscale-campaign/

## Commands Available

A global method `AddCampaigns` is available through the console for you to add campaigns. 

I have added 3 campaigns by default.

### Example:
```
// Input this command on your browser's console
AddCampaigns([
  {
    id: 1,
    name: 'Divavu',
    startDate: '10/25/2019',
    endDate: '10/30/2019',
    Budget: 8837700,
  },
  {
    id: 2,
    name: 'Jaxspan',
    startDate: '10/24/2019',
    endDate: '10/29/2019',
    Budget: 608715,
  },
  {
    id: 3,
    name: 'Miboo',
    startDate: '11/1/2017',
    endDate: '6/20/2020',
    Budget: 239507,
  },
])
```
#
#
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.