import React from "react";
import cn from "classnames";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  const classesButton = cn("custom-button", {
    "google-sign-in": isGoogleSignIn,
  });

  return (
    <button className={classesButton} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
