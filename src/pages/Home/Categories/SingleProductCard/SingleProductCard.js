import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaBookmark, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import Loading from "../../../shared/Loading/Loading";
import toast from "react-hot-toast";

const SingleProductCard = ({ product, setProduct }) => {
  const {
    productPhoto,
    name,
    originalPrice,
    resalePrice,
    yearOfUse,
    conditionOfProduct,
    locationOfSeller,
    sellerName,
    sellerEmail,
    sellerPhoneNumber,
    productAddedDate,
    status,
    _id,
  } = product;

  const { data: user = [], isLoading } = useQuery({
    queryKey: ["users", sellerEmail],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${sellerEmail}`);
      const data = await res.json();
      return data;
    },
  });

  const handleReport = (id) => {
    const proceed = window.confirm(
      "Are you really want to report this product?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/products/reported/${id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
            toast.success("Product Reported Successfully");
          }
          console.log(data);
        });
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="card lg:card-side shadow-xl md:w-8/12 mx-auto mb-20">
        <img src={productPhoto} className="h-96 mt-7 ml-5" alt="" />
        <div className="card-body">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl font-bold text-left">{name}</h2>
              <h4 className="flex items-center md:justify-start font-bold mb-7 md:text-left">
                Posted By {sellerName}
                {user[0]?.isVerified === true ? (
                  <span className="ml-2">
                    <FaCheckCircle className="text-green-500"></FaCheckCircle>
                  </span>
                ) : null}
              </h4>
            </div>
            <div className="flex items-center">
              <button>
                <FaBookmark
                  className="text-2xl mr-2 mt-4"
                  title="Save Product"
                ></FaBookmark>
              </button>
              <button>
                <FaExclamationCircle
                  onClick={() => handleReport(_id)}
                  className="text-2xl mt-4"
                  title="Report Product"
                ></FaExclamationCircle>
              </button>
            </div>
          </div>
          <div className="font-semibold mb-5 md:text-left">
            <p>Original Price: {originalPrice} BDT</p>
            <p>Resale Price: {resalePrice} BDT</p>
            <p>Products Status: {status}</p>
            <p>Year of User: {yearOfUse} Years</p>
            <p>Condition of Product: {conditionOfProduct}</p>
            <p>Seller Phone Number: {sellerPhoneNumber}</p>
            <p>Product Recived from: {locationOfSeller}</p>
            <p>Product Added on: {productAddedDate}</p>
          </div>
          <div className=" md:text-left">
            {status === "Booked" ? (
              <label htmlFor="bookingModal" className="btn btn-disabled">
                Booked
              </label>
            ) : (
              <label
                onClick={() => setProduct(product)}
                htmlFor="bookingModal"
                className="btn btn-primary"
              >
                Book Now
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
