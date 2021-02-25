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
