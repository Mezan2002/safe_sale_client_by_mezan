import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../SingleProductCard/SingleProductCard";

const SingleCategory = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <SingleProductCard
            key={product._id}
            product={product}
          ></SingleProductCard>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
