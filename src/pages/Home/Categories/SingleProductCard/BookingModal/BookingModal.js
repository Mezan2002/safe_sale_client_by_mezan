import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ product, setProduct, refetch }) => {
  const { name, resalePrice, locationOfSeller, sellerName, _id, status } =
    product;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const locationOfProduct = form.locationOfProduct.value;
    const sellerName = form.sellerName.value;
    const phoneNumber = form.phoneNumber.value;
    const meetingLocation = form.meetingLocation.value;
    const bookingData = {
      userName,
      userEmail,
      productName,
      productPrice,
      locationOfProduct,
      sellerName,
      phoneNumber,
      meetingLocation,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          fetch(`http://localhost:5000/booked/${_id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount) {
                setProduct(null);
                refetch();
                toast.success("Booking Confirmed");
              }
              console.log(data);
            });
        }
      });
  };

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
            <form onSubmit={handleBooking}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">User Name</span>
                </label>
                <input
                  name="userName"
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
                  name="userEmail"
                  type="text"
                  placeholder=""
                  defaultValue={user?.email}
                  value={user?.email}
                  disabled
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Products Name</span>
                </label>
                <input
                  name="productName"
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
                  name="productPrice"
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
                  name="locationOfProduct"
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
                  name="sellerName"
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
                    Your Phone Number
                  </span>
                </label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Meeting Location</span>
                </label>
                <input
                  name="meetingLocation"
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full"
                />
              </div>
              {status === "Booked" ? (
                <input
                  type="submit"
                  value="Booked"
                  className="btn btn-disabled mt-5 btn-block"
                />
              ) : (
                <input
                  type="submit"
                  value="Book Now"
                  className="btn btn-primary mt-5 btn-block"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
