import React, { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ product }) => {
  const { name, resalePrice, locationOfSeller, sellerPhoneNumber, sellerName } =
    product;
  const { user } = useContext(AuthContext);
  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold">Booking form of {name}</h3>
          <div className="py-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">User Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">User Email</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={user?.email}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Products Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={name}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">
                  Products Price (BDT){" "}
                </span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={resalePrice}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">
                  Product recevied from
                </span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={locationOfSeller}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Seller Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={sellerName}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">
                  Seller Phone Number
                </span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={sellerPhoneNumber}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <button className="btn btn-primary mt-5 btn-block">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
