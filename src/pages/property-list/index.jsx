import React from 'react'
import NavBar from '../../components/Navbar'
import Hero from '../../components/Hero'
import PropertySearchForm from '../../components/Filters'
import Propertytypes from '../../components/Propertytypes'
import PropertyListing from '../../components/PropertyListing'
import AboutSection from '../../components/AboutSection'
import ContactCard from '../../components/ContactCard'
import Footer from '../../components/Footer'

function PropertyList() {
  return (
    <div className='w-full h-full'>
        <NavBar/>
        <Hero/>
        <PropertySearchForm/>
        {/* <Propertytypes/> */}
        <PropertyListing/>
        {/* <AboutSection/> */}
        <ContactCard/>
        <Footer/>
    </div>
  )
}

export default PropertyList