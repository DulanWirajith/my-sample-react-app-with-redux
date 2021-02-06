import logo from "./logo.svg";
import "./App.css";
import CakeComponent from "./components/cakeComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeComponent from "./components/HooksCakeComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeComponent></HooksCakeComponent>
      </div>
    </Provider>
  );
}

export default App;
