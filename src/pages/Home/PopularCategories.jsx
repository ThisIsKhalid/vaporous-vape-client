import React from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";

const PopularCategories = () => {
  return (
    <section className="px-5 py-16">
      <h1 className="text-4xl font-semibold text-LightCoral uppercase text-center">
        Popular Categories
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-10">
        {/* --------kits category-------- */}
        <div className="h-[650px] w-full bg-blend-overlay relative">
          <div className="bg-populerCat1 bg-cover bg-no-repeat h-full w-full"></div>
          <div className="hover:bg-MidnightBlue/40 absolute top-0 left-0 h-full w-full"></div>
          <div className=" absolute top-[25%] left-[25%]">
            <h2 className="text-5xl text-LightCoral font-medium uppercase mb-2">
              Kits
            </h2>
            <button className="btn-grad px-5 py-3 uppercase font-semibold text-MidnightBlue rounded-lg flex items-center gap-2">
              Shop Now <TfiAngleDoubleRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-populerCat2 bg-cover bg-center bg-no-repeat h-1/2 w-full"></div>
          <div className="bg-populerCat3 bg-cover bg-no-repeat h-1/2 w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
