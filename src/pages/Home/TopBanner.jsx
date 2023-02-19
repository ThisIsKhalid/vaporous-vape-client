import React from 'react';

const TopBanner = () => {
    return (
      <section className="h-[80vh] border border-LightSalmon ">

        <div className="h-full flex flex-col gap-2 items-center justify-center text-center">
          <div>
            <h1 className="text-5xl text-LightCoral font-semibold">
              Find Your Favourite
            </h1>
            <h1 className="text-5xl text-LightCoral font-semibold">
              Electric Ciggarete & Liquid
            </h1>
          </div>
        </div>
      </section>
    );
};

export default TopBanner;