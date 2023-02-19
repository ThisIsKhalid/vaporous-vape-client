import React from 'react';
// import topbannerPhoto from '../../assets/images/vape-women.jpg'

const TopBanner = () => {
    return (
      <section className="h-[600px] bg-topBanner bg-cover bg-center bg-no-repeat bg-blend-overlay relative">
        <div className="bg-MidnightBlue/70 absolute h-full w-full"></div>
        <div className="h-full flex flex-col gap-3 items-center justify-center text-center">
          <div className="z-50 text-LightCoral">
            <h1 className="text-6xl font-semibold lg:border-b-2 border-LightCoral lg:inline-block mb-4">
              Find Your Favourite
            </h1>
            <h1 className="text-6xl font-semibold lg:border-b-2 border-LightCoral lg:inline-block">
              Electric Ciggarete & Liquid
            </h1>
          </div>
        </div>
      </section>
    );
};

export default TopBanner;