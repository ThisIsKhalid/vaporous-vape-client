import React from 'react';
import vapes from '../../assets/images/vapes.webp'
import liquid from '../../assets/images/liquids.webp'

const ItemCategories = () => {
    return (
      <section className="px-5 py-16 bg-NavajoWhite/30">
        <h1 className="text-4xl font-semibold text-LightCoral uppercase text-center">
          Vape
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <div className="border-2 border-MediumPurple rounded-lg bg-MediumPurple/90">
            <img className="w-full rounded-t-lg" src={vapes} alt="" />
            <div className="my-5 pl-5">
              <p className="text-xl font-medium text-gray-100 mb-2">
                Vape Devices
              </p>
              <button className="btn-grad px-5 py-3 uppercase font-semibold text-MidnightBlue rounded-lg">
                Find Out More
              </button>
            </div>
          </div>
          <div className="border-2 border-MediumPurple rounded-lg bg-MediumPurple/90">
            <img className="w-full rounded-t-lg" src={liquid} alt="" />
            <div className="my-5 pl-5">
              <p className="text-xl font-medium text-gray-100 mb-2">
                E-liquids & Salt
              </p>
              <button className="btn-grad px-5 py-3 uppercase font-semibold text-MidnightBlue rounded-lg">
                Find Out More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ItemCategories;