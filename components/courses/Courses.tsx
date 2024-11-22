import React from "react";

const Courses = () => {
  return (
    <div className="flex flex-col justify-center items-start py-12 xl:py-28 px-6 xl:px-16 gap-12">
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <h2 className="font-bold text-center text-[32px]/[40px] xl:text-5xl">
          Courses
        </h2>
        <p className="text-center">Your Ultimate Guide to learning</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-16">
        <div className="flex justify-center items-center">
          <button className="py-2 px-4 text-center border-b border-black">
            Popular
          </button>
          <button className="py-2 px-4 text-center">Recommended</button>
          <button className="py-2 px-4 text-center">Best Price</button>
        </div>
        <div className="xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-16">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[rgb(247,247,247)]">
              <img
                alt="image-1"
                loading="lazy"
                width="400"
                height="300"
                decoding="async"
                data-nimg="1"
                className="w-full"
                src="/Placeholder/image.svg"
              />
              <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex justify-end items-start w-full">
                    <span className="flex-grow text-sm font-semibold">
                      Design
                    </span>
                    <div className="flex gap-1 justify-center items-center">
                      <img
                        alt="star"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        src="/Placeholder/Star 1.svg"
                      />
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl">UX/UI Design 201</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex w-full gap-4">
                  <button className="py-2 px-5 rounded-[5px] border border-black">
                    Enroll Now
                  </button>
                  <button className="py-2 px-5 rounded-[5px]font-medium">
                    $400
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[rgb(247,247,247)]">
              <img
                alt="course-2"
                loading="lazy"
                width="400"
                height="300"
                decoding="async"
                data-nimg="1"
                className="w-full"
                src="/Placeholder/image2.svg"
              />
              <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex justify-end items-start w-full">
                    <span className="flex-grow text-sm font-semibold">
                      Progrmming
                    </span>
                    <div className="flex gap-1 justify-center items-center">
                      <img
                        alt="star"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        src="/Placeholder/Star 1.svg"
                      />
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl">Introduction to Python</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex w-full gap-4">
                  <button className="py-2 px-5 rounded-[5px] border border-black">
                    Enroll Now
                  </button>
                  <button className="py-2 px-5 rounded-[5px]font-medium">
                    $400
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[rgb(247,247,247)]">
              <img
                alt="course-3"
                loading="lazy"
                width="400"
                height="300"
                decoding="async"
                data-nimg="1"
                className="w-full"
                src="/Placeholder/image3.svg"
              />
              <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex justify-end items-start w-full">
                    <span className="flex-grow text-sm font-semibold">
                      Business
                    </span>
                    <div className="flex gap-1 justify-center items-center">
                      <img
                        alt="star"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        src="/Placeholder/Star 1.svg"
                      />
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl">Data Analysis for Beginners</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex w-full gap-4">
                  <button className="py-2 px-5 rounded-[5px] border border-black">
                    Enroll Now
                  </button>
                  <button className="py-2 px-5 rounded-[5px]font-medium">
                    $400
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[rgb(247,247,247)]">
              <img
                alt="course-4"
                loading="lazy"
                width="400"
                height="300"
                decoding="async"
                data-nimg="1"
                className="w-full"
                src="/Placeholder/image4.svg"
              />
              <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex justify-end items-start w-full">
                    <span className="flex-grow text-sm font-semibold">
                      Art
                    </span>
                    <div className="flex gap-1 justify-center items-center">
                      <img
                        alt="star"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        src="/Placeholder/Star 1.svg"
                      />
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl">Art Specialization</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex w-full gap-4">
                  <button className="py-2 px-5 rounded-[5px] border border-black">
                    Enroll Now
                  </button>
                  <button className="py-2 px-5 rounded-[5px]font-medium">
                    $400
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[rgb(247,247,247)]">
              <img
                alt="course-5"
                loading="lazy"
                width="400"
                height="300"
                decoding="async"
                data-nimg="1"
                className="w-full"
                src="/Placeholder/image5.svg"
              />
              <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex justify-end items-start w-full">
                    <span className="flex-grow text-sm font-semibold">
                      Law
                    </span>
                    <div className="flex gap-1 justify-center items-center">
                      <img
                        alt="star"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        src="/Placeholder/Star 1.svg"
                      />
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl">Rule of Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex w-full gap-4">
                  <button className="py-2 px-5 rounded-[5px] border border-black">
                    Enroll Now
                  </button>
                  <button className="py-2 px-5 rounded-[5px]font-medium">
                    $400
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[rgb(247,247,247)]">
              <img
                alt="course-6"
                loading="lazy"
                width="400"
                height="300"
                decoding="async"
                data-nimg="1"
                className="w-full"
                src="/Placeholder/image6.svg"
              />
              <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex justify-end items-start w-full">
                    <span className="flex-grow text-sm font-semibold">
                     Tech
                    </span>
                    <div className="flex gap-1 justify-center items-center">
                      <img
                        alt="star"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        src="/Placeholder/Star 1.svg"
                      />
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl">Introduction to Webflow</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex w-full gap-4">
                  <button className="py-2 px-5 rounded-[5px] border border-black">
                    Enroll Now
                  </button>
                  <button className="py-2 px-5 rounded-[5px]font-medium">
                    $400
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="py-2 px-4 border border-black rounded-[5px]">View All Courses</button>
      </div>
    </div>
  );
};

export default Courses;
