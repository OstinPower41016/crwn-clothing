import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/ShopPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
