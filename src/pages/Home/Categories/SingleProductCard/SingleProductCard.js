import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SingleProductCard = ({ product }) => {
  const {
    productPhoto,
    name,
    originalPrice,
    resalePrice,
    yearOfUse,
    conditionOfProduct,
    locationOfSeller,
    sellerName,
    sellerPhoneNumber,
    productAddedDate,
    status,
    isSellerVerified,
  } = product;
  return (
    <div>
      <div className="card card-side shadow-xl mb-5">
        <figure>
          <img src={productPhoto} className="h-96" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold">{name}</h2>
          <h4 className="flex items-center font-bold mb-7">
            Posted By {sellerName}
            {isSellerVerified ? (
              <span className="ml-2">
                <FaCheckCircle className="text-green-500"></FaCheckCircle>
              </span>
            ) : null}
          </h4>
          <div className="font-semibold mb-5">
            <p>Original Price: {originalPrice} BDT</p>
            <p>Resale Price: {resalePrice} BDT</p>
            <p>Year of User: {yearOfUse} Years</p>
            <p>Condition of Product: {conditionOfProduct}</p>
            <p>Seller Phone Number: {sellerPhoneNumber}</p>
            <p>Product Recived from: {locationOfSeller}</p>
            <p>Product Added on: {productAddedDate}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
