import React, { useContext } from "react";

import CategoryItem from "../../components/category-item/CategoryItem";
import {
  CategoriesContext,
  CategoriesProvider,
} from "../../context/categories.context";

function Home() {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="max-layout categories-container">
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
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
