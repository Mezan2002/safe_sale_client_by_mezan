import React from "react";
import AdvertisedProductCard from "./AdvertisedProductCard/AdvertisedProductCard";

const Advertisement = () => {
  return (
    <div>
      <h2 className="my-10 font-bold text-4xl">Advertised Products</h2>
      <div className="">
        <AdvertisedProductCard></AdvertisedProductCard>
      </div>
    </div>
  );
};

export default Advertisement;
