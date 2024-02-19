import React from 'react'
import NavBar from '../../components/Navbar'
import Hero from '../../components/Hero'
import PropertySearchForm from '../../components/Filters'

function Home() {
  return (
    <div className='w-full h-full'>
        <NavBar/>
        <Hero/>
        <PropertySearchForm/>
    </div>
  )
}

export default Home