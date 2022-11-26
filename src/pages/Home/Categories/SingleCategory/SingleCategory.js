import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../SingleProductCard/BookingModal/BookingModal";
import SingleProductCard from "../SingleProductCard/SingleProductCard";

const SingleCategory = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState(null);
  console.log(product);
  return (
    <div>
      <div className="">
        {products.map((product) => (
          <SingleProductCard
            key={product._id}
            product={product}
            setProduct={setProduct}
          ></SingleProductCard>
        ))}
        {product && <BookingModal product={product}></BookingModal>}
      </div>
    </div>
  );
};

export default SingleCategory;
