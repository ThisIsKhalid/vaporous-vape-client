import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/images/electronic-cigarette.png";

const Footer = () => {
  const year = new Date();

  // footer bg change
  const { pathname } = useLocation();
  let backgroundColor;
  if(pathname === '/home' || pathname === '/' || pathname === '/blogs'){
    backgroundColor = "bg-NavajoWhite/70";
  }
  else {
    backgroundColor = 'bg-white'
  }
  
    return (
      <>
        <footer className={backgroundColor}>
          <svg
            className="hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#35284A"
              fillOpacity="1"
              d="M0,128L40,138.7C80,149,160,171,240,160C320,149,400,107,480,112C560,117,640,171,720,186.7C800,203,880,181,960,154.7C1040,128,1120,96,1200,80C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
          <div className="px-5 divide-y bg-MidnightBlue text-gray-200 lg:-mt-16">
            <div className="container flex flex-col justify-between pt-10 lg:pt-0 pb-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
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
                      <Link to='/home'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to='/blogs'>
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to='/about'>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to='/home'>
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to='/home'>
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="tracking-wide uppercase text-LightCoral">
                    Product
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link to='/home'>
                        Vape Device
                      </Link>
                    </li>
                    <li>
                      <Link to='/home'>
                        E-liquids & Salt
                      </Link>
                    </li>
                    <li>
                      <Link to='/home'>
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to='/home'>
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="tracking-wide uppercase text-LightCoral">
                    Company
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link to='/home'>
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link to='/home'>
                        Terms of Service
                      </Link>
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
          </div>
        </footer>
      </>
    );
};

export default Footer;