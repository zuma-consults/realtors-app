import React from "react";
import TypeCard from "./TypeCard";
import HouseIcon from "@mui/icons-material/House";
import BusinessIcon from "@mui/icons-material/Business";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import VillaIcon from "@mui/icons-material/Villa";

function Propertytypes() {
  return (
    <div className="grid py-5 mb-5 px-20">
      <div className="w-full flex items-center justify-center py-10">
        <h1 className="flex items-center text-4xl font-bold">Property Types</h1>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <TypeCard icon={HouseIcon} title="Apartment" total={30} />
        <TypeCard icon={BusinessIcon} title="Office" total={30} />
        <TypeCard icon={HomeWorkIcon} title="Shortlet" total={30} />
        <TypeCard icon={VillaIcon} title="Land" total={30} />
      </div>
    </div>
  );
}

export default Propertytypes;
