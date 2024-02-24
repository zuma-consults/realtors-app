// In PropertyList.js

import React, { useEffect } from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import PropertySearchForm from "../../components/Filters";
import PropertyListing from "../../components/PropertyListing";
import ContactCard from "../../components/ContactCard";
import Footer from "../../components/Footer";

function PropertyList() {

  return (
    <div className="w-full h-full">
      <NavBar />
      <Hero />
      <PropertySearchForm />
      <PropertyListing isHomePage={false} />{" "}
      {/* Pass false to indicate it's not the home page */}
      <ContactCard />
      <Footer />
    </div>
  );
}

export default PropertyList;
