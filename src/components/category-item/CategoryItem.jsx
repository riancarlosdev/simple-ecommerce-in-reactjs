import "./categoryItem.styles.scss";

import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryItem({ id, imageUrl, title }) {
  const nav = useNavigate();

  return (
    <div onClick={() => nav("/shop")} key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
