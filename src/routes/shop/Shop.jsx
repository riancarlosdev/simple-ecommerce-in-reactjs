import React from "react";
import { useContext } from "react";
import ShopItems from "./ShopItems";
import { ProductContext } from "../../context/products.context";
import "./shop.styles.scss";

export default function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container max-layout">
      {products.map((item) => (
        <ShopItems key={item.id} item={item} />
      ))}
    </div>
  );
}
