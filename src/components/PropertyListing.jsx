import React from "react";
import ListCard from "./ListCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PropertyListing() {
  return (
    <div className="grid py-5 mb-5 px-20 bg-ra-lightgreen">
      <div className="w-full flex items-center justify-center py-10">
        <h1 className="flex items-center text-4xl font-bold">
          Property Listing
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-5 p-5 rounded-lg">
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
