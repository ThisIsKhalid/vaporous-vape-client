import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import logo from "../../assets/images/electronic-cigarette.png";

const Footer = () => {
  const year = new Date();
    return (
      <footer className="px-5 divide-y bg-MidnightBlue text-gray-200">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          {/* logo */}
          <div className="lg:w-1/3">
            <div className="flex gap-3">
              <img className="lg:w-12 w-10" src={logo} alt="" />
              <div className="border border-LightCoral"></div>
              <div className="tracking-widest uppercase text-LightCoral">
                <h3 className="lg:text-2xl md:text-xl text-base font-semibold">
                  Vaporous Vape
                </h3>
                <h5 className="text-xs font-medium">E-cigarette</h5>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="uppercase text-LightCoral">Main Links</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Register
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-LightCoral">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Vape Device
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    E-liquids & Salt
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-LightCoral">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-LightCoral">Social media</div>
              <div className="flex justify-start space-x-3">
                <FiFacebook className="text-xl" />
                <FiInstagram className="text-xl" />
                <FiLinkedin className="text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-gray-400">
          © {year.getFullYear()} Khalid Hasan All rights reserved.
        </div>
      </footer>
    );
};

export default Footer;