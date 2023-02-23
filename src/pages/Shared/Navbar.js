import React, { useState } from "react";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/electronic-cigarette.png";
// drawer
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <section className="px-5 bg-MidnightBlue py-4 flex items-center justify-between">
        {/* logo */}
        <div className="flex gap-3">
          <img className="lg:w-14 w-12" src={logo} alt="" />
          <div className="border border-LightCoral"></div>
          <div className="tracking-widest uppercase text-LightCoral">
            <h3 className="lg:text-3xl md:text-2xl text-lg font-semibold">
              Vaporous Vape
            </h3>
            <h5 className="text-xs md:text-sm font-medium">E-cigarette</h5>
          </div>
        </div>

        <div className="text-gray-200 text-base md:flex items-center gap-3 hidden">
          <Link>Home</Link>
          <Link>Blogs</Link>
          <Link>Register</Link>
          <Link>Login</Link>

          <div className="cursor-pointer relative">
            <FiSearch
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-2xl"
            />
            {searchOpen && (
              <input
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setSearchOpen(!searchOpen);
                  }
                }}
                className="bg-gray-200 py-2 text-gray-900 px-5 rounded focus:outline-none text-base absolute -bottom-12 -left-64 z-50 transition ease-in-out delay-150 duration-300"
                type="text"
                name=""
                id=""
                placeholder="search your item, product"
              />
            )}
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <FiShoppingCart className="text-2xl" />
            <p className="bg-gray-200 px-1 font-medium rounded-full text-LightCoral">
              0
            </p>
          </div>
        </div>

        <div
          onClick={toggleDrawer}
          className="md:hidden inline-block"
        >
          <FiMenu className="text-2xl text-gray-200" />
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            size="50%"
            className="bla bla bla"
          >
            <div className="h-full w-full bg-MidnightBlue/80">Hello World</div>
          </Drawer>
        </div>
      </section>
    </>
  );
};

export default Navbar;
