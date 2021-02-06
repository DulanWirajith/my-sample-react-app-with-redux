import logo from "./logo.svg";
import "./App.css";
import CakeComponent from "./components/cakeComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent></CakeComponent>
      </div>
    </Provider>
  );
}

export default App;
