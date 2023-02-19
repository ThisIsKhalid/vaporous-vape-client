import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/electronic-cigarette.png'
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
      <>
        <section className="px-5 bg-MidnightBlue py-4 flex items-center justify-between">
          {/* logo */}
          <div className="flex gap-3">
            <img className="w-14" src={logo} alt="" />
            <div className="border border-LightCoral"></div>
            <div className="tracking-widest uppercase text-LightCoral">
              <h3 className="text-3xl font-semibold">Vaporous Vape</h3>
              <h5 className="font-medium">E-cigarette</h5>
            </div>
          </div>

          <div className="text-gray-200 text-lg flex items-center gap-5">
            <Link>Register</Link>
            <Link>Login</Link>
            <div className='flex items-center gap-1'>
              <FiShoppingCart className="text-2xl" />
              <p className='bg-gray-200 px-1 font-medium rounded-full text-LightCoral'>0</p>
            </div>
          </div>
        </section>
      </>
    );
};

export default Navbar;