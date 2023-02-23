import React from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";

const PopularCategories = () => {
  return (
    <section className="px-5 py-16 bg-slate-50">
      <h1 className="text-4xl font-semibold text-LightCoral uppercase text-center">
        Popular Categories
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {/* --------kits category-------- */}
        <div className="bg-populerCat1 bg-cover bg-no-repeat lg:h-[650px] h-[550px] w-full relative">
          <div className="hover:bg-MidnightBlue/40 absolute top-0 left-0 h-full w-full ease-in-out delay-75 duration-300 opacity-0 hover:opacity-100 transition">
            <div className="absolute top-[45%] left-[25%]">
              <h2 className="text-5xl text-LightCoral font-medium uppercase mb-2">
                Kits
              </h2>
              <button className="btn-grad px-5 py-3 uppercase font-semibold text-MidnightBlue rounded-lg flex items-center gap-2">
                Shop Now <TfiAngleDoubleRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-populerCat2 bg-cover bg-center bg-no-repeat lg:h-1/2 h-[400px] w-full relative">
            <div className="hover:bg-MidnightBlue/40 absolute top-0 left-0 h-full w-full transition ease-in-out delay-75 duration-300 opacity-0 hover:opacity-100">
              <div className=" absolute top-[45%] left-[25%] z-50">
                <h2 className="text-4xl text-LightCoral font-medium uppercase mb-2">
                  Accessories
                </h2>
                <button className="btn-grad px-5 py-3 uppercase font-semibold text-MidnightBlue rounded-lg flex items-center gap-2">
                  Shop Now <TfiAngleDoubleRight />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-populerCat3 bg-cover bg-no-repeat lg:h-1/2 h-[400px] w-full relative">
            <div className="hover:bg-MidnightBlue/40 absolute top-0 left-0 h-full w-full transition ease-in-out delay-75 duration-300 opacity-0 hover:opacity-100">
              <div className=" absolute top-[45%] left-[25%] z-50">
                <h2 className="text-4xl text-LightCoral font-medium uppercase mb-2">
                  E-Liquids
                </h2>
                <button className="btn-grad px-5 py-3 uppercase font-semibold text-MidnightBlue rounded-lg flex items-center gap-2">
                  Shop Now <TfiAngleDoubleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
