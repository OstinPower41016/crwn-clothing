import React from "react";
import cn from "classnames";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  const classesMenuItem = cn("menu-item", {
    large: size,
  });

  return (
    <div className={classesMenuItem}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
