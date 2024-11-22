import Achivements from '@/components/Achivemets/Achivements'
import Page2 from '@/components/Section/section1'
import Courses from '@/components/courses/Courses'
import Explore from '@/components/Explore/Explore'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/HeroSection/Hero'
import Team from '@/components/Team/Team'
import Testimonials from '@/components/Testimonials/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Page2/>
        <Explore/>
        <Achivements/>
        <Courses/>
        <Team/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default page
