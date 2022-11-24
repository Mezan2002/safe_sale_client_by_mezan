import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Advertisement></Advertisement>
      <Contact></Contact>
    </div>
  );
};

export default Home;
