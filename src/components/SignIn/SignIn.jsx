import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  changeFieldsInputHandler = (e) => {
    const { name, value } = e.target;
    console.log(e);
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.submitHandler}>
          <FormInput
            type="email"
            value={email}
            name="email"
            label="email"
            required
            hangleChange={this.changeFieldsInputHandler}
          />

          <FormInput
            type="password"
            value={password}
            name="password"
            label="password"
            required
            hangleChange={this.changeFieldsInputHandler}
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
