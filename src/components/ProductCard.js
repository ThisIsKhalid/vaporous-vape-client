import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-xs overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold uppercase text-white">NIKE AIR</h1>
        <p className="mt-1 text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          quidem sequi illum facere recusandae voluptatibus
        </p>
      </div>

      <img
        className="object-cover w-full mt-2 px-[2px]"
        src="https://cdn.shopify.com/s/files/1/0577/2145/4767/products/Berry-Blast-Flavored-FIRE-XL-Disposable-Vape-Device-with-6000-PUffs_6a62fcd8-1891-4074-8029-c631d63dc10f_240x.jpg?v=1675454642"
        alt="NIKE AIR"
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-LightSalmon">$12.90</h1>
        <button className="px-2 py-1 text-xs font-bold text-MidnightBlue uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
