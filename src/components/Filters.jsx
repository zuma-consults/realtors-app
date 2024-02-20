import { useState } from "react";

const PropertySearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Handle search logic here
    console.log("Search query:", searchQuery);
    console.log("Property type:", propertyType);
    console.log("Location:", location);
  };

  return (
    <div className=" flex items-center justify-center bg-ra-darkgreen py-10 px-20">
      <form className="grid md:grid-cols-4 gap-3 w-full">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-4 "
        />
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-4"
        >
          <option value="">Select Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-4"
        >
          <option value="">Select Location</option>
          <option value="new-york">New York</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
          <option value="miami">Miami</option>
        </select>
        <button
          type="button"
          onClick={handleSearch}
          className="bg-ra-text hover:bg-black text-white font-bold py-4 px-4 rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default PropertySearchForm;
