import React from "react";
import CustomerReviews from "./CustomerReviews";
import PopularCategories from "./PopularCategories";
import TopBanner from "./TopBanner";
import TopSellingProducts from "./TopSellingProducts";

const Home = () => {
  return (
    <>
      <TopBanner />
      <PopularCategories />
      <TopSellingProducts />
      <CustomerReviews />
    </>
  );
};

export default Home;
