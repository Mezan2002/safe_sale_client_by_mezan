import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { image, name } = category;
  return (
    <div>
      <Link to={`/categories/${name}`}>
        <div className="card h-96 shadow-xl image-full">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl mt-64 text-center font-bold ">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
