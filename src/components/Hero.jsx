import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Hero() {
  return (
    <div className=" h-full md:h-[90vh] w-full grid grid-cols-1 md:grid-cols-2">
      <div className="order-2 md:order-1 px-4  py-10 md:px-[150px] h-full flex flex-col items-start justify-center gap-10" data-aos="fade-right">
        <span className="text-4xl font-[900]  text-ra-text">
          Find A <span className="text-ra-darkgreen">Perfect Home</span> To Live
          With Your Family
        </span>
        <p className="text-lg text-gray-500">
          Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd
          rebum ipsum et diam justo clita et kasd rebum sea elitr.
        </p>

        <button className="bg-ra-darkgreen w-[40%] h-[70px] text-white font-bold p-5 flex items-center justify-center rounded shadow">
          Get Started
        </button>
      </div>
      <div className="order-1 md:order-2 h-[50vh] md:h-full w-full relative bg-black" data-aos="fade-left">
        <Carousel
          className="h-full w-full absolute top-0 left-0"
          interval={500}
          autoPlay={true}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
        >
          <div className="w-full">
            <img
              className="w-full object-cover"
              src="/house1.jpg"
              alt="Carousel Image"
            />
          </div>
          <div>
            <img
              className="h-full w-full object-cover"
              src="/house2.jpg"
              alt="Carousel Image"
            />
          </div>
          <div>
            <img
              className="h-full w-full object-cover"
              src="/house3.jpg"
              alt="Carousel Image"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
