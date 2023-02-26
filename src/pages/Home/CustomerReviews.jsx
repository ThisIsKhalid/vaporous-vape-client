import React from "react";
import { TfiQuoteLeft, TfiQuoteRight } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper";

const CustomerReviews = () => {
  return (
    <section className="px-5 py-16 bg-slate-50">
      <h1 className="text-4xl font-semibold text-LightCoral uppercase text-center">
        What People Saying
      </h1>
      <div className="mt-10">
        <Swiper
          slidesPerView={1}
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col shadow-lg">
              <div className="relative  px-4 py-2 pb-7 rounded-t-lg sm:px-8 md:px-12 bg-gray-200">
                <p className="px-6 py-1 text-lg italic text-center text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias.
                </p>
                <TfiQuoteLeft className="absolute top-1 left-5 text-4xl" />
                <TfiQuoteRight className="absolute bottom-1 right-5 text-4xl" />
              </div>
              <div className="flex flex-col items-center justify-center p-5 rounded-b-lg bg-NavajoWhite text-MidnightBlue">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-14 bg-center bg-cover rounded-full bg-gray-500 z-50"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col shadow-lg">
              <div className="relative  px-4 py-2 pb-7 rounded-t-lg sm:px-8 md:px-12 bg-gray-200">
                <p className="px-6 py-1 text-lg italic text-center text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias.
                </p>
                <TfiQuoteLeft className="absolute top-1 left-5 text-4xl" />
                <TfiQuoteRight className="absolute bottom-1 right-5 text-4xl" />
              </div>
              <div className="flex flex-col items-center justify-center p-5 rounded-b-lg bg-NavajoWhite text-MidnightBlue">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-14 bg-center bg-cover rounded-full bg-gray-500 z-50"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col shadow-lg">
              <div className="relative  px-4 py-2 pb-7 rounded-t-lg sm:px-8 md:px-12 bg-gray-200">
                <p className="px-6 py-1 text-lg italic text-center text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias.
                </p>
                <TfiQuoteLeft className="absolute top-1 left-5 text-4xl" />
                <TfiQuoteRight className="absolute bottom-1 right-5 text-4xl" />
              </div>
              <div className="flex flex-col items-center justify-center p-5 rounded-b-lg bg-NavajoWhite text-MidnightBlue">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-14 bg-center bg-cover rounded-full bg-gray-500 z-50"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col shadow-lg">
              <div className="relative  px-4 py-2 pb-7 rounded-t-lg sm:px-8 md:px-12 bg-gray-200">
                <p className="px-6 py-1 text-lg italic text-center text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias.
                </p>
                <TfiQuoteLeft className="absolute top-1 left-5 text-4xl" />
                <TfiQuoteRight className="absolute bottom-1 right-5 text-4xl" />
              </div>
              <div className="flex flex-col items-center justify-center p-5 rounded-b-lg bg-NavajoWhite text-MidnightBlue">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-14 bg-center bg-cover rounded-full bg-gray-500 z-50"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col shadow-lg">
              <div className="relative  px-4 py-2 pb-7 rounded-t-lg sm:px-8 md:px-12 bg-gray-200">
                <p className="px-6 py-1 text-lg italic text-center text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias.
                </p>
                <TfiQuoteLeft className="absolute top-1 left-5 text-4xl" />
                <TfiQuoteRight className="absolute bottom-1 right-5 text-4xl" />
              </div>
              <div className="flex flex-col items-center justify-center p-5 rounded-b-lg bg-NavajoWhite text-MidnightBlue">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-14 bg-center bg-cover rounded-full bg-gray-500 z-50"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col shadow-lg">
              <div className="relative  px-4 py-2 pb-7 rounded-t-lg sm:px-8 md:px-12 bg-gray-200">
                <p className="px-6 py-1 text-lg italic text-center text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias.
                </p>
                <TfiQuoteLeft className="absolute top-1 left-5 text-4xl" />
                <TfiQuoteRight className="absolute bottom-1 right-5 text-4xl" />
              </div>
              <div className="flex flex-col items-center justify-center p-5 rounded-b-lg bg-NavajoWhite text-MidnightBlue">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-14 bg-center bg-cover rounded-full bg-gray-500 z-50"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col shadow-lg">
              <div className="relative  px-4 py-2 pb-7 rounded-t-lg sm:px-8 md:px-12 bg-gray-200">
                <p className="px-6 py-1 text-lg italic text-center text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias.
                </p>
                <TfiQuoteLeft className="absolute top-1 left-5 text-4xl" />
                <TfiQuoteRight className="absolute bottom-1 right-5 text-4xl" />
              </div>
              <div className="flex flex-col items-center justify-center p-5 rounded-b-lg bg-NavajoWhite text-MidnightBlue">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-14 bg-center bg-cover rounded-full bg-gray-500 z-50"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col shadow-lg">
              <div className="relative  px-4 py-2 pb-7 rounded-t-lg sm:px-8 md:px-12 bg-gray-200">
                <p className="px-6 py-1 text-lg italic text-center text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias.
                </p>
                <TfiQuoteLeft className="absolute top-1 left-5 text-4xl" />
                <TfiQuoteRight className="absolute bottom-1 right-5 text-4xl" />
              </div>
              <div className="flex flex-col items-center justify-center p-5 rounded-b-lg bg-NavajoWhite text-MidnightBlue">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-14 bg-center bg-cover rounded-full bg-gray-500 z-50"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col shadow-lg">
              <div className="relative  px-4 py-2 pb-7 rounded-t-lg sm:px-8 md:px-12 bg-gray-200">
                <p className="px-6 py-1 text-lg italic text-center text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias.
                </p>
                <TfiQuoteLeft className="absolute top-1 left-5 text-4xl" />
                <TfiQuoteRight className="absolute bottom-1 right-5 text-4xl" />
              </div>
              <div className="flex flex-col items-center justify-center p-5 rounded-b-lg bg-NavajoWhite text-MidnightBlue">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-14 bg-center bg-cover rounded-full bg-gray-500 z-50"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReviews;
