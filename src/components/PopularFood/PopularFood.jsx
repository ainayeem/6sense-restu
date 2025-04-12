import leftArrow from "../../assets/icons/left arrow.png";
import rightArrow from "../../assets/icons/right arrow.png";
import burger from "../../assets/images/burger.png";
import pizza from "../../assets/images/pizza.png";
import capsicum from "../../assets/images/capsicum.png";
import frenchFry from "../../assets/images/french-fries.png";
import shrimp from "../../assets/images/fried-shrimp-prawn-cake-white-plate.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PopularFood = () => {
  return (
    <div className="bg-custom-offwhite xl:pb-28 relative">
      <div className="xl:absolute xl:left-0 top-60 hidden xl:block">
        <img className="" src={capsicum} alt="" />
      </div>
      <div className="max-w-screen-xl xl:mx-auto mx-8">
        {/* first part */}
        <div className="">
          <div className="xl:pt-[120px] pt-8 xl:pb-[60px] xl:flex justify-between items-center">
            <div>
              <p className="text-[#BD1F17] xl:font-bold roboto mb-3">
                &#9642; Crispy, Every Bite Taste
              </p>
              <h1 className="uppercase text-5xl mb-4">popular food items</h1>
            </div>
            <div className="hidden xl:flex ">
              <div className="h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full shadow-md mr-8 custom-swiper-prev cursor-pointer">
                <img src={leftArrow} alt="" />
              </div>
              <div className="h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full shadow-md custom-swiper-next cursor-pointer">
                <img src={rightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* 2nd part */}
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          //   centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="card bg-white  rounded-none   flex justify-center items-center">
              <figure className=" pt-8 w-full h-64">
                <img className="h-full" src={burger} alt="" />
              </figure>
              <div className="h-1 w-14 bg-[#BD1F17] mx-auto"></div>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-2xl">
                  vegetables burger
                </h2>
                <p>Barbecue italian cuisine burger</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-white  rounded-none  flex justify-center items-center">
              <figure className=" pt-8 w-full h-64">
                <img className="h-full" src={pizza} alt="" />
              </figure>
              <div className="h-1 w-14 bg-[#BD1F17] mx-auto"></div>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-2xl">special pizza</h2>
                <p>Barbecue italian cuisine pizza</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-white  rounded-none  flex justify-center items-center">
              <figure className=" pt-8 w-full h-64">
                <img className="h-full" src={shrimp} alt="" />
              </figure>
              <div className="h-1 w-14 bg-[#BD1F17] mx-auto"></div>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-2xl">
                  vegetables shrimp
                </h2>
                <p>Barbecue italian cuisine shrimp</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-white  rounded-none  flex justify-center items-center">
              <figure className=" pt-8 w-full h-64">
                <img className="h-full" src={frenchFry} alt="" />
              </figure>
              <div className="h-1 w-14 bg-[#BD1F17] mx-auto"></div>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-2xl">
                  special french fry
                </h2>
                <p>Barbecue italian cuisine french fry</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-white  rounded-none  flex justify-center items-center">
              <figure className=" pt-8 w-full h-64">
                <img className="h-full" src={shrimp} alt="" />
              </figure>
              <div className="h-1 w-14 bg-[#BD1F17] mx-auto"></div>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-2xl">
                  special shrimp
                </h2>
                <p>Barbecue italian cuisine shrimp</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/*  */}

        {/* ================================================================== */}
        <div className="xl:flex  xl:justify-between  xl:[120px]">
          {/*  */}
          <div className="flex justify-center mt-8 pb-8 xl:hidden">
            <div className="h-[40px] w-[40px] bg-white flex items-center justify-center rounded-full shadow-md mr-8 custom-swiper-prev cursor-pointer">
              <img src={leftArrow} alt="" />
            </div>
            <div className="h-[40px] w-[40px] bg-white flex items-center justify-center rounded-full shadow-md custom-swiper-next cursor-pointer">
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularFood;
