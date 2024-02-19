import React from "react";
import ListCard from "./ListCard";

function PropertyListing() {
  return (
    <div className="grid py-5 mb-5 px-20">
      <div className="w-full flex items-center justify-center py-10">
        <h1 className="flex items-center text-4xl font-bold">
          Property Listing
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <ListCard />
      </div>
    </div>
  );
}

export default PropertyListing;
