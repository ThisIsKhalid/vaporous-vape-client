import React from "react";
import ProductCard from "../../components/ProductCard";

const TopSellingProducts = () => {
  return (
    <section className="px-5 py-16 bg-NavajoWhite/70">
      <h1 className="text-4xl font-semibold text-LightCoral uppercase text-center">
        Top Selling Products
      </h1>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default TopSellingProducts;
