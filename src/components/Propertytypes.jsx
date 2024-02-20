import React from "react";
import TypeCard from "./TypeCard";
import HouseIcon from "@mui/icons-material/House";
import BusinessIcon from "@mui/icons-material/Business";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import VillaIcon from "@mui/icons-material/Villa";

function Propertytypes() {
  return (
    <div className="grid py-10 mb-10 md:px-20 px-10">
      <div className="w-full flex items-center justify-center flex-col gap-3 py-10">
        <h1 className="flex items-center text-4xl font-bold">Property Types</h1>
        <p className="text-lg text-gray-500">
          Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd
          rebum ipsum et diam justo clita et kasd rebum sea elitr.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-3" 
          data-aos="fade-right">
        <TypeCard
          icon={HouseIcon}
          title="Apartment"
          total={30}
        />
        <TypeCard
          icon={BusinessIcon}
          title="Office"
          total={30}
        />
        <TypeCard
          icon={HomeWorkIcon}
          title="Shortlet"
          total={30}
        />
        <TypeCard
          icon={VillaIcon}
          title="Land"
          total={30}
        />
      </div>
    </div>
  );
}

export default Propertytypes;
