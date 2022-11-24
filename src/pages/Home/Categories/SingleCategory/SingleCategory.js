import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../SingleProductCard/SingleProductCard";

const SingleCategory = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <div>
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
