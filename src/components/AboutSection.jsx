import React from "react";

function AboutSection() {
  return (
    <div className="w-full h-[90vh] grid grid-cols-2 p-10">
      <div className="h-full w-full relative">
        <div className="image h-full w-full bg-ra-darkgreen"></div>
        <img
          src="/house1.jpg"
          alt=""
          className="absolute top-10 left-10 h-[85%] w-[90%]"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-3 p-10 w-[80%]">
        <h1 className="font-bold text-3xl">
          #1 Place To Find The Perfect Property
        </h1>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
      </div>
    </div>
  );
}

export default AboutSection;
