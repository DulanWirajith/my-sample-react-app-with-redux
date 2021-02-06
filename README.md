# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### steps =>

1.  Make types =>cakeTypes.js
2.  Make actios =>cakeActions.js
3.  Make reducers =>cakeReducer.js
4.  make store =>store.js
5.  add Provider to App.js and give store as a prop to the App Component

6.  subscribe and dispatch the wanted methods
    1.  define mapStateToProps function => cakeComponent.js
    2.  define all action creators (eg. buyCake) in index.js file in redux folder => index.js
    3.  import action creators from index.js file in redux folder => cakeComponent.js
    4.  define mapDispatchToProps function => cakeComponent.js
    5.  connect those two functions with the react component => cakeComponent.js
    6.  access all the things using props => cakeComponent.js

## ==================Redux with Hooks==================

1.  Make types =>cakeTypes.js
2.  Make actios =>cakeActions.js
3.  Make reducers =>cakeReducer.js
4.  make store =>store.js
5.  add Provider to App.js and give store as a prop to the App Component

6.  subscribe and dispatch the wanted methods

    1.  useSelector() => this is equal to mapStateToProps function => HooksCakeComponent.js
    2.  define all action creators (eg. buyCake) in index.js file in redux folder => index.js
    3.  import action creators from index.js file in redux folder => HooksCakeComponent.js
    4.  useDispatch() => using to run action creators. this is equal to mapDispatchToProps function => HooksCakeComponent.js

## Redux with more than one action and reducer

1.  Make types =>cakeTypes.js
2.  Make actios =>cakeActions.js
3.  Make reducers =>cakeReducer.js
4.  Make types =>iceCreamTypes.js
5.  Make actios =>iceCreamActions.js
6.  Make reducers =>iceCreamReducer.js
7.  Make rootReducers for combine all reducers => rootReducer.js
8.  make store =>store.js
9.  add Provider to App.js and give store as a prop to the App Component

10. subscribe and dispatch the wanted methods
    1.  For HooksCakeComponent.
        1.  useSelector() => this is equal to mapStateToProps function => HooksCakeComponent.js
        2.  define all action creators (eg. buyCake) in index.js file in redux folder => index.js
        3.  import action creators from index.js file in redux folder => HooksCakeComponent.js
        4.  useDispatch() => using to run action creators. this is equal to mapDispatchToProps function => HooksCakeComponent.js
    2.  For HooksCakeComponent.
        1.  useSelector() => this is equal to mapStateToProps function => HooksIceCreamComponent.js
        2.  define all action creators (eg. buyCake) in index.js file in redux folder => index.js
        3.  import action creators from index.js file in redux folder => HooksIceCreamComponent.js
        4.  useDispatch() => using to run action creators. this is equal to mapDispatchToProps function => HooksIceCreamComponent.js

## Redux with payload in actions

payload is using for send additional informations to the reducers, from action creator

1.  Make types =>cakeTypes.js
2.  Make actios with payload =>cakeActions.js
3.  Make reducers with payload =>cakeReducer.js
4.  make store =>store.js
5.  add Provider to App.js and give store as a prop to the App Component

6.  subscribe and dispatch the wanted methods

    1.  useSelector() => this is equal to mapStateToProps function => HookBuyNoOfCakesComponent.js
    2.  define all action creators (eg. buyCake) in index.js file in redux folder => index.js
    3.  import action creators from index.js file in redux folder => HookBuyNoOfCakesComponent.js
    4.  useDispatch() => using to run action creators. this is equal to mapDispatchToProps function => HookBuyNoOfCakesComponent.js
