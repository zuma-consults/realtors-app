import React from 'react'
import NavBar from '../../components/Navbar'
import Hero from '../../components/Hero'
import PropertySearchForm from '../../components/Filters'
import Propertytypes from '../../components/Propertytypes'

function Home() {
  return (
    <div className='w-full h-full'>
        <NavBar/>
        <Hero/>
        <PropertySearchForm/>
        <Propertytypes/>
    </div>
  )
}

export default Home