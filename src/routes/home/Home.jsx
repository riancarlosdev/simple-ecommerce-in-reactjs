import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import CategoryItem from "../../components/category-item/CategoryItem";
import {
  CategoriesContext,
  CategoriesProvider,
} from "../../context/categories.context";

function Home() {
  const { categories } = useContext(CategoriesContext);

  return (
    <div>
      <Outlet />
      <div className="categories-container">
        <div className="categories-container">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <CategoriesProvider>
      <Home />
    </CategoriesProvider>
  );
}
