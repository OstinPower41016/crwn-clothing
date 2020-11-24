import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPrewiew.scss";

const CollectionPrewiew = ({ title, items: itemsData }) => {
  const items = itemsData
    .filter((item, idx) => idx < 4)
    .map(({ id, ...otherItemProps }) => (
      <CollectionItem key={id} {...otherItemProps} />
    ));

  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">{items}</div>
    </div>
  );
};

export default CollectionPrewiew;
