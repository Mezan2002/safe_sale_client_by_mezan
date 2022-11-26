import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../shared/Loading/Loading";
import BookingModal from "../Categories/SingleProductCard/BookingModal/BookingModal";
import AdvertisedProductCard from "./AdvertisedProductCard/AdvertisedProductCard";

const Advertisement = () => {
  const [product, setProduct] = useState(null);
  // const [advertised, setAdvertised] = useState([]);
  /* useEffect(() => {
    fetch("http://localhost:5000/products/advertised")
      .then((res) => res.json())
      .then((data) => {
        setAdvertised(data);
      });
  }, []); */
  const {
    data: advertised = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products/advertised");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {advertised.length > 0 ? (
        <div>
          <h2 className="my-10 font-bold text-4xl">Advertised Products</h2>
          <div className="">
            {advertised.map((product) => (
              <AdvertisedProductCard
                key={product._id}
                product={product}
                setProduct={setProduct}
              ></AdvertisedProductCard>
            ))}
            {product && (
              <BookingModal
                product={product}
                setProduct={setProduct}
                refetch={refetch}
              ></BookingModal>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Advertisement;
