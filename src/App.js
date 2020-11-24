import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInAndSignOut from "./pages/Shop/SignInAndSignOut/SignInAndSignOut";
import { auth } from "./components/firebase/firebase.utils";

export default class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignInAndSignOut} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}
