import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInAndSignOut from "./pages/Shop/SignInAndSignOut/SignInAndSignOut";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={SignInAndSignOut} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
