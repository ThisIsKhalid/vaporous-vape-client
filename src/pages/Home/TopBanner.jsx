import React from "react";
// import topbannerPhoto from '../../assets/images/vape-women.jpg'

const TopBanner = () => {
  return (
    <section className="h-[100vh] min-h-[550px] bg-topBanner bg-cover bg-center bg-no-repeat bg-blend-overlay relative">
      <div className="bg-MidnightBlue/70 absolute h-full w-full"></div>
      <div className="h-full w-full flex flex-col items-center justify-center gap-20">
        <div className="z-50 text-LightCoral px-5 text-center">
          <h1 className="lg:text-6xl text-5xl font-semibold lg:border-b-2 border-LightCoral lg:inline-block mb-4">
            Get Your Favourite
          </h1>
          <h1 className="lg:text-6xl text-5xl font-semibold lg:border-b-2 border-LightCoral lg:inline-block">
            Electric Ciggarete & Liquid
          </h1>
        </div>

        <div className="z-50 w-full flex flex-col gap-5 items-center justify-center px-5">
          <input
            className="bg-gray-200 md:w-1/2 w-full py-3 px-5 rounded-lg focus:outline-none md:text-lg"
            required
            type="email"
            name=""
            id=""
            placeholder="your email"
          />
          <button className="px-5 py-3 md:w-1/2 w-full md:text-xl uppercase font-semibold text-MidnightBlue rounded-lg btn-grad">
            Sign up now to get an instant discount
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
