import React from "react";
import CustomerReviews from "./CustomerReviews";
import FromBlogs from "./FromBlogs";
import OurBrands from "./OurBrands";
import PopularCategories from "./PopularCategories";
import TopBanner from "./TopBanner";
import TopSellingProducts from "./TopSellingProducts";

const Home = () => {
  return (
    <>
      <TopBanner />
      <PopularCategories />
      <OurBrands />
      <TopSellingProducts />
      <CustomerReviews />
      <FromBlogs />
    </>
  );
};

export default Home;
