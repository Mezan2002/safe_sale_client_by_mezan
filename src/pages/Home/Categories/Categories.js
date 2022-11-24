import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard/CategoryCard";

const Categories = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category}></CategoryCard>
      ))}
    </div>
  );
};

export default Categories;
