import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { auth } from "../firebase/firebase.utils";
import "./Header.scss";

const Header = ({ currentUser }) => {
  const authNavLinkView = currentUser ? (
    <div className="option" onClick={() => auth.signOut()}>
      SIGN OUT
    </div>
  ) : (
    <Link className="option" to="/signIn">
      SIGN IN
    </Link>
  );

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {authNavLinkView}
      </div>
    </div>
  );
};

export default Header;
