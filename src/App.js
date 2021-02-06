import logo from "./logo.svg";
import "./App.css";
import CakeComponent from "./components/cakeComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeComponent from "./components/HooksCakeComponent";
import HooksIceCreamComponent from "./components/HooksIceCreamComponent";
import HookBuyNoOfCakesComponent from "./components/HookBuyNoOfCakesComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeComponent></HooksCakeComponent>
        <HooksIceCreamComponent></HooksIceCreamComponent> */}
        <HookBuyNoOfCakesComponent></HookBuyNoOfCakesComponent>
      </div>
    </Provider>
  );
}

export default App;
