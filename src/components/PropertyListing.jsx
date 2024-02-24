import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const cardData = [
  {
    image: "/house1.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house2.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house3.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house4.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house5.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house6.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house1.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house2.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house3.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house4.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house5.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    image: "/house6.jpg",
    title: "Impressive Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
];

function PropertyListing({ isHomePage }) {
  const [showPagination, setShowPagination] = useState(isHomePage); // Initialize showPagination based on whether it's the home page

  useEffect(() => {
    setShowPagination(isHomePage); // Update showPagination when isHomePage changes
  }, [isHomePage]);
  

  return (
    <div className="grid py-5 mb-5 md:px-20 px-5 bg-gray-200">
      <div className="w-full flex items-center justify-between py-10">
        <div className="max-w-[50%]" data-aos="fade-right">
          <h1 className="flex items-center text-4xl font-bold">
            Property Listing
          </h1>{" "}
          <p className="text-lg text-gray-500">
            Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </p>
        </div>
        <div
          className="flex items-center justify-end gap-4"
          data-aos="fade-left"
        >
          <button className="p-3 bg-ra-darkgreen rounded-lg text-white font-semibold">
            Apartments
          </button>
          <button className="p-3 bg-white rounded-lg text-ra-darkgreen border border-ra-darkgreen font-semibold">
            Shortlet
          </button>
          <button className="p-3 bg-white rounded-lg text-ra-darkgreen border border-ra-darkgreen font-semibold">
            Offices
          </button>
          <button className="p-3 bg-white rounded-lg text-ra-darkgreen border border-ra-darkgreen font-semibold">
            Lands
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 p-5 rounded-lg">
        {cardData.map((card, index) => (
          <Link key={index} to={`/property-list/${index + 1}`}>
            <ListCard
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </Link>
        ))}
      </div>

      <div className="w-full flex items-center justify-center py-10">
        {!showPagination ? (
          <Pagination count={10} variant="outlined" color="primary" />
        ) : (
          <Link to="/property-list">
            <Button>See More</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default PropertyListing;
