import React from "react";
import DoneIcon from "@mui/icons-material/Done";

function AboutSection() {
  return (
    <div className="w-full h-[100vh] md:h-[90vh] grid md:grid-cols-2 md:p-10 p-5 gap-3 text-gray-500 font-normal">
      <div className="h-full w-full relative" data-aos="fade-right">
        <div className="image h-full w-full bg-ra-darkgreen"></div>
        <img
          src="/house6.jpg"
          alt=""
          className="absolute md:top-10 md:left-10 top-5 left-5 h-[90%] md:h-[85%] w-[90%] md:w-full"
        />
      </div>
      <div className=" h-full flex flex-col items-start md:justify-center mt-10 md:mt-0 gap-5 md:pl-20 w-[80%] " data-aos="fade-left">
        <h1 className="font-bold text-3xl text-ra-text">
          #1 Place To Find The Perfect Property
        </h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="grid gap-2">
          <div className="flex items-center justify-start gap-2">
            <DoneIcon className="text-ra-darkgreen" />
            <span >Tempor erat elitr rebum at clita</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <DoneIcon className="text-ra-darkgreen" />
            <span >Tempor erat elitr rebum at clita</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <DoneIcon className="text-ra-darkgreen" />
            <span >Tempor erat elitr rebum at clita</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <DoneIcon className="text-ra-darkgreen" />
            <span >Tempor erat elitr rebum at clita</span>
          </div>
        </div>
        <button className="bg-ra-darkgreen w-[40%] h-[70px] text-white font-bold p-5 flex items-center justify-center rounded shadow">
          Read More
        </button>
      </div>
    </div>
  );
}

export default AboutSection;
