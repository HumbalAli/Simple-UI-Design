import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center xl:bg-[#f7f7f7] xl:items-start py-12 xl:py-28 px-6 xl:px-16 gap-12 xl:gap-20">
      <div className="flex flex-col justify-center items-center xl:items-start gap-6">
      <h2 className="xl:hidden font-bold text-[32px]/[40px] text-center">What Our Student Say</h2>
        <h2 className="hidden xl:block font-bold text-5xl">
          Customer testimonials
        </h2>
        <p className="text-center xl:text-start text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          <div className="xl:flex justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-start gap-6 p-8 border border-black w-full">
              <img
                alt="star"
                loading="lazy"
                width="116"
                height="19"
                decoding="async"
                data-nimg="1"
                src="/Placeholder/stars.svg"
              />
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>
                <div className="flex justify-start items-center gap-5">
                  <img
                    alt="student-1"
                    loading="lazy"
                    width="56"
                    height="56"
                    decoding="async"
                    data-nimg="1"
                    src="/Placeholder2/image3.svg"
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">James nuduku</h3>
                    <p className="hidden xl:block">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-[1280px]:hidden flex flex-col justify-center items-start gap-6 p-8 border border-black w-full">
              <img
                alt="star"
                loading="lazy"
                width="116"
                height="19"
                decoding="async"
                data-nimg="1"
                src="/Placeholder/stars.svg"
              />
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>
                <div className="flex justify-start items-center gap-5">
                  <img
                    alt="student-1"
                    loading="lazy"
                    width="56"
                    height="56"
                    decoding="async"
                    data-nimg="1"
                    src="/Placeholder2/image.svg"
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">Erick Kipkemboi</h3>
                    <p className="hidden xl:block">Scrum Master</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-[1280px]:hidden flex flex-col justify-center items-start gap-6 p-8 border border-black w-full">
              <img
                alt="stars"
                loading="lazy"
                width="116"
                height="19"
                decoding="async"
                data-nimg="1"
                src="/Placeholder/stars.svg"
              />
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>
                <div className="flex justify-start items-center gap-5">
                  <img
                    alt="student-1"
                    loading="lazy"
                    width="56"
                    height="56"
                    decoding="async"
                    data-nimg="1"
                    src="/Placeholder2/image6.svg"
/>
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">Stephen Kerubo</h3>
                    <p className="hidden xl:block">UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <img alt="dots" loading="lazy" width="72" height="8" decoding="async" data-nimg="1" src="/Placeholder/Slider Dots.svg"/>
            <div className="flex justify-center items-center gap-[15px]">
                <button className="p-3 border border-black rounded-[50px] xl:hidden">
                  <img alt="previous" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/Placeholder/Button.svg"/>
                  </button>
                <button className="p-3 border border-black rounded-[50px] xl:hidden">
                    <img alt="next" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/Placeholder/Button2.svg"/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
