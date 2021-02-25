## steps =>

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

## Redux with async actions(api calling)

payload is using for send additional informations to the reducers, from action creator

1.  Install axios and redux-thunk packages
2.  Make types =>userTypes.js
3.  Make sunchronous actios with payload =>userActions.js
4.  Make reducers with payload =>userReducer.js
5.  define ASYNC action creator =>userActions.js
6.  make store =>store.js
7.  add thunk to store as middleware. =>store.js
8.  add Provider to App.js and give store as a prop to the App Component

9.  subscribe and dispatch the wanted methods

    1.  useEffect() => this is a HOOK, equal to componentDidMount() and componentDidUpdate() functions. [meka use kare load weddima data tika ganna oona nisa]
    2.  useSelector() => this is equal to mapStateToProps function => HookUsersComponent.js
    3.  define all action creators (eg. buyCake) in index.js file in redux folder => index.js
    4.  import action creators from index.js file in redux folder => HookUsersComponent.js
    5.  useDispatch() => using to run action creators. this is equal to mapDispatchToProps function => HookUsersComponent.js
