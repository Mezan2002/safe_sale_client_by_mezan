import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 mt-20">
        <div className="container flex flex-col mx-auto lg:flex-row items-center">
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <h2 className="text-3xl font-semibold leading-none">
              Be modern Sale buy and sale in a modern way
            </h2>
            <p className="mt-4 mb-8">
              we give you all kinds of phones which is used before in a low
              amount of cost.
            </p>
            <div className="w-48">
              <button className="btn">Get started</button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="rounded-lg"
              src="https://images.squarespace-cdn.com/content/v1/58b8344c59cc684cb6f4f08a/1500626673437-CGN17HAWHDPJVOSQ97ER/Phone.gif"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
