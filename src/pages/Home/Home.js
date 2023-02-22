import React from "react";
import CustomerReviews from "./CustomerReviews";
import ItemCategories from "./ItemCategories";
import PopularCategories from "./PopularCategories";
import TopBanner from "./TopBanner";
import TopSellingProducts from "./TopSellingProducts";

const Home = () => {
  return (
    <>
      <TopBanner />
      <PopularCategories/>
      <ItemCategories />
      <TopSellingProducts />
      <CustomerReviews />
    </>
  );
};

export default Home;
