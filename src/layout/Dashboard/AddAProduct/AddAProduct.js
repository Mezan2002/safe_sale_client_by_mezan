import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddProduct = (data) => {
    const productsInfo = {
      name: data.productName,
      categoryName: data.categoryName,
      productPhoto: data.productPhotoURL,
      originalPrice: data.originalPrice,
      resalePrice: data.resalePrice,
      yearOfUse: data.yearOfUse,
      conditionOfProduct: data.productCondition,
      locationOfSeller: data.sellerLocation,
      sellerName: data.sellerName,
      sellerEmail: user.email,
      sellerPhoneNumber: data.sellerPhone,
      productAddedDate: new Date().toLocaleString(),
      status: "Available",
      isReported: false,
      isAdvertised: false,
    };

    fetch("https://safe-sale-server-by-mezan.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Added Successfully");
          navigate("/dashboard/myProducts");
        }
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-10">Add a Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)} className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Product Name</span>
            </label>
            <input
              type="text"
              {...register("productName", { required: true })}
              placeholder=""
              className="input input-bordered w-full"
            />
            {errors.productName?.type === "required" && (
              <p className="text-red-600" role="alert">
                Product Name is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Product Photo URL</span>
            </label>
            <input
              type="text"
              {...register("productPhotoURL", { required: true })}
              placeholder=""
              className="input input-bordered w-full"
            />
            {errors.productPhotoURL?.type === "required" && (
              <p className="text-red-600" role="alert">
                Product Photo URL is required
              </p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text font-bold">Product Category</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("categoryName")}
            >
              <option selected>IPhone</option>
              <option>Samsung</option>
              <option>RealMe</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Original Price</span>
            </label>
            <input
              type="text"
              {...register("originalPrice", { required: true })}
              placeholder=""
              className="input input-bordered w-full"
            />
            {errors.originalPrice?.type === "required" && (
              <p className="text-red-600" role="alert">
                Original Price is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", { required: true })}
              placeholder=""
              className="input input-bordered w-full"
            />
            {errors.resalePrice?.type === "required" && (
              <p className="text-red-600" role="alert">
                Resale Price is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Year of Use</span>
            </label>
            <input
              type="text"
              {...register("yearOfUse", { required: true })}
              placeholder=""
              className="input input-bordered w-full"
            />
            {errors.yearOfUse?.type === "required" && (
              <p className="text-red-600" role="alert">
                Year of Use is required
              </p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text font-bold">Product Condition</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("productCondition")}
            >
              <option selected>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Seller Name</span>
            </label>
            <input
              type="text"
              {...register("sellerName", { required: true })}
              placeholder=""
              className="input input-bordered w-full"
            />
            {errors.sellerName?.type === "required" && (
              <p className="text-red-600" role="alert">
                Seller Name is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Seller Location</span>
            </label>
            <input
              type="text"
              {...register("sellerLocation", { required: true })}
              placeholder=""
              className="input input-bordered w-full"
            />
            {errors.sellerLocation?.type === "required" && (
              <p className="text-red-600" role="alert">
                Seller Location is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Seller Phone</span>
            </label>
            <input
              type="text"
              {...register("sellerPhone", { required: true })}
              placeholder=""
              className="input input-bordered w-full"
            />
            {errors.sellerPhone?.type === "required" && (
              <p className="text-red-600" role="alert">
                Seller Phone is required
              </p>
            )}
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Add Product"
            className="btn btn-primary mt-10 btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAProduct;
