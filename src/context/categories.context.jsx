import { createContext, useState } from "react";
import CATEGORIES from "../data/categories.data.json";

export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories] = useState(CATEGORIES);
  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
