import React from "react";
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="max-w-xs overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold uppercase text-white">NIKE AIR</h1>
        <p className="mt-1 text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          quidem sequi illum facere...
        </p>
        <Link to='/product-details'>
          <button className="px-2 py-1 text-xs font-semibold text-gray-100 hover:text-MidnightBlue uppercase transition-colors duration-300 transform rounded-lg border border-gray-100 hover:bg-gray-100 mt-2">
            See More
          </button>
        </Link>
      </div>

      <div className="relative">
        <img
          className="object-cover w-full mt-2 px-[2px]"
          src="https://cdn.shopify.com/s/files/1/0577/2145/4767/products/Berry-Blast-Flavored-FIRE-XL-Disposable-Vape-Device-with-6000-PUffs_6a62fcd8-1891-4074-8029-c631d63dc10f_240x.jpg?v=1675454642"
          alt="NIKE AIR"
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/50 opacity-0 hover:opacity-100">
          <p className="absolute top-3 left-4 text-xl font-medium text-LightSalmon flex items-center justify-center gap-2">
            <FaStar /> 4.5
          </p>
          <p>
            <FaHeart className="absolute top-4 right-4 text-xl text-white" />
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-LightSalmon">$12.90</h1>
        <button className="btn-grad px-5 py-1 uppercase font-semibold text-MidnightBlue rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
