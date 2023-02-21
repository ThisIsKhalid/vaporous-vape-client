import React from "react";
import CustomerReviews from "./CustomerReviews";
import ItemCategories from "./ItemCategories";
import TopBanner from "./TopBanner";

const Home = () => {
  return (
    <>
      <TopBanner />
      <ItemCategories />
      <CustomerReviews />
    </>
  );
};

export default Home;
