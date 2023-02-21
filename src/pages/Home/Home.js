import React from "react";
import CustomerReviews from "./CustomerReviews";
import ItemCategories from "./ItemCategories";
import TopBanner from "./TopBanner";
import TopSellingProducts from "./TopSellingProducts";

const Home = () => {
  return (
    <>
      <TopBanner />
      <ItemCategories />
      <TopSellingProducts />
      <CustomerReviews />
    </>
  );
};

export default Home;
