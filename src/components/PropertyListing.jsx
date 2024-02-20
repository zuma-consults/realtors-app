import React from "react";
import ListCard from "./ListCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PropertyListing() {
  return (
    <div className="grid py-5 mb-5 md:px-20 px-5 bg-gray-200">
      <div className="w-full flex items-center justify-between py-10">
        <div className="max-w-[50%]"  data-aos="fade-right">
          <h1 className="flex items-center text-4xl font-bold">
            Property Listing
          </h1>{" "}
          <p className="text-lg text-gray-500">
            Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </p>
        </div>
        <div className="flex items-center justify-end gap-4"  data-aos="fade-left">
          <button className="p-3 bg-ra-darkgreen rounded-lg text-white font-semibold">Apartments</button>
          <button className="p-3 bg-white rounded-lg text-ra-darkgreen border border-ra-darkgreen font-semibold">Shortlet</button>
          <button className="p-3 bg-white rounded-lg text-ra-darkgreen border border-ra-darkgreen font-semibold">Offices</button>
          <button className="p-3 bg-white rounded-lg text-ra-darkgreen border border-ra-darkgreen font-semibold">Lands</button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 p-5 rounded-lg">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </div>

      <div className="w-full flex items-center justify-center py-10">
        <Pagination count={10} variant="outlined" color="primary" />
      </div>
    </div>
  );
}

export default PropertyListing;
