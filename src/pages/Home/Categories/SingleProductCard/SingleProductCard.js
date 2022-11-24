import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import BookingModal from "./BookingModal/BookingModal";

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
      <div className="card lg:card-side shadow-xl mb-5 w-8/12 mx-auto">
        <figure>
          <img src={productPhoto} className="h-96" alt="Movie" />
        </figure>
        <div className="card-body ">
          <h2 className="text-4xl font-bold text-center md:text-left">
            {name}
          </h2>
          <h4 className="flex items-center justify-center md:justify-start font-bold mb-7 text-center md:text-left">
            Posted By {sellerName}
            {isSellerVerified ? (
              <span className="ml-2">
                <FaCheckCircle className="text-green-500"></FaCheckCircle>
              </span>
            ) : null}
          </h4>
          <div className="font-semibold mb-5 text-center md:text-left">
            <p>Original Price: {originalPrice} BDT</p>
            <p>Resale Price: {resalePrice} BDT</p>
            <p>Products Status: {status}</p>
            <p>Year of User: {yearOfUse} Years</p>
            <p>Condition of Product: {conditionOfProduct}</p>
            <p>Seller Phone Number: {sellerPhoneNumber}</p>
            <p>Product Recived from: {locationOfSeller}</p>
            <p>Product Added on: {productAddedDate}</p>
          </div>
          <div className=" text-center md:text-left">
            <label htmlFor="bookingModal" className="btn btn-primary">
              Book Now
            </label>
            <BookingModal product={product}></BookingModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
