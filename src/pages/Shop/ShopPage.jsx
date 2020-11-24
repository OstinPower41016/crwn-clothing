import React, { Component } from "react";
import CollectionPrewiew from "../../components/CollectionPreview/CollectionPrewiew";
import SHOP_DATA from "./ShopData";

export default class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;

    const collectionsPreview = collections.map(({ id, ...otherCollProps }) => (
      <CollectionPrewiew key={id} {...otherCollProps} />
    ));

    return <div className="shop-page">{collectionsPreview}</div>;
  }
}
