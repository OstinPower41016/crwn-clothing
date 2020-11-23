import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";

const HatsPage = (props) => {
  return <h1>Hats Page</h1>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
