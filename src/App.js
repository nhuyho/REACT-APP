import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Practice Layout/Home";
import Databinding from "./DataBinding/Databinding";
import DataBindingRFC from "./DataBinding/DataBindingRFC";

function App() {
  return (
    <div className="App">
      <Home />

      <Databinding />
      <DataBindingRFC />
    </div>
  );
}

export default App;
