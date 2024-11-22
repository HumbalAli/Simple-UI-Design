import React from "react";

const Achivements = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 xl:py-28 px-6 gap-12 xl:gap-8">
      <div className="flex flex-col justify-center items-center gap-4 xl:gap-6">
        <h2 className="text-center font-bold text-[32px]/[40px] xl:text-5xl">
          Our Achivements
        </h2>
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-6 w-full">
        <div className="flex justify-center items-center py-2 gap-4 xl:gap-6">
          <div className="px-16">
            <h3 className="font-bold text-xl xl:text-[40px]/[48px] text-center">
              +200
            </h3>
            <p className="text-center">Courses</p>
          </div>
          <div className="px-16">
            <h3 className="font-bold text-xl xl:text-[40px]/[48px] text-center">
              50k
            </h3>
            <p className="text-center">Mentors</p>
          </div>
          <div className="flex justify-center items-center py-2 gap-4 xl:gap-6">
          <div className="px-16">
            <h3 className="font-bold text-xl xl:text-[40px]/[48px] text-center">
              370k
            </h3>
            <p className="text-center">Students</p>
          </div>
          <div className="px-16">
            <h3 className="font-bold text-xl xl:text-[40px]/[48px] text-center">
              100+
            </h3>
            <p className="text-center">recognition</p>
          </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Achivements;
