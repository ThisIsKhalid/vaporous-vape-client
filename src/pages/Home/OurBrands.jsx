import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper";

const OurBrands = () => {
    return (
      <section className="px-5 py-16">
        <h1 className="text-4xl font-semibold text-LightCoral uppercase text-center">
          Our Brands
        </h1>
        <div className="mt-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay]}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='flex items-center justify-center'>
                <img
                  src="https://viper-vape.co.za/wp-content/uploads/2020/09/vandy-vape-logo.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex items-center justify-center'>
                <img
                  src="https://viper-vape.co.za/wp-content/uploads/2020/08/dr-vape-censored.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex items-center justify-center'>
                <img
                  src="https://viper-vape.co.za/wp-content/uploads/2020/08/Pukka-Juice.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex items-center justify-center'>
                <img
                  src="https://viper-vape.co.za/wp-content/uploads/2020/08/Geek-vape.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex items-center justify-center'>
                <img
                  src="https://viper-vape.co.za/wp-content/uploads/2020/09/Fruit_Monster_E-Liquid_1200x1200_c4c06a8d-8b71-4381-91ed-7ca1d0963ef2_1024x1024.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex items-center justify-center'>
                <img
                  src="https://viper-vape.co.za/wp-content/uploads/2020/09/hellvape-logo-500x500-1.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex items-center justify-center'>
                <img
                  src="https://viper-vape.co.za/wp-content/uploads/2020/09/IVG-Logo-min.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex items-center justify-center'>
                <img
                  src="https://viper-vape.co.za/wp-content/uploads/2020/09/loaded.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex items-center justify-center'>
                <img
                  src="https://viper-vape.co.za/wp-content/uploads/2020/09/LOGO-NASTY-SHISHA.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex items-center justify-center'>
                <img
                  src="https://viper-vape.co.za/wp-content/uploads/2020/09/Majestic-vapor.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
};

export default OurBrands;