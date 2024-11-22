import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center">
        <div className="flex flex-col justify-center items-start py-16 xl:py-0 xl:pr-[60px] xl:pl-20 px-6 gap-6">
            <div className="flex flex-col justify-center items-start gap-6">
                <h1 className="font-bold text-[40px]/[48px] xl:text-[56px]/[68px]">Learn new skills online with ease</h1>
                <p className="text-lg">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
            </div>
            <div className="flex justify-start items-center pt-4 gap-4">
                <button className="bg-black text-white py-3 px-6 border border-black rounded-[5px]">Start learning now</button>
                <button className="py-3 px-6 border border-black rounded-[5px]">Explore Courses</button>
            </div>
        </div>
        <img alt="hero" loading="lazy" width="1200px" height="1800px" decoding="async" data-nimg="1" className="object-cover object-top h-[800px] xl:h-auto w-screen xl:w-[50vw]" src="/images/image.svg"/>
    </div>

  )
}

export default Hero
