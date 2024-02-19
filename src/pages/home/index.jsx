import React from 'react'
import NavBar from '../../components/Navbar'
import Hero from '../../components/Hero'
import PropertySearchForm from '../../components/Filters'
import Propertytypes from '../../components/Propertytypes'
import PropertyListing from '../../components/PropertyListing'
import AboutSection from '../../components/AboutSection'

function Home() {
  return (
    <div className='w-full h-full'>
        <NavBar/>
        <Hero/>
        <PropertySearchForm/>
        <Propertytypes/>
        <PropertyListing/>
        <AboutSection/>
    </div>
  )
}

export default Home