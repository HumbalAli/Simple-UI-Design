import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center gap-8 py-3 w-full max-[1280px]:hidden ">
        <div className="flex justify-center items-center gap-4 bg-[#f7f7f7] border-b-[1px] border-b-black w-full">
          <p className="text-sm">Phone Number: 956 742 455 678</p>
          <div className="border border-black h-8"></div>
          <p className="text-sm">Email:info@ddsgnr.com</p>
          <div className="flex justify-center items-center pl-[500px]  gap-3">
            <img
              alt="facebook"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src="/icons/Vector.svg"
              className="h-[18px] w-[10px]"
            />
            <img
              alt="instagram"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src="/icons/Vector5.svg"
              className="h-[18px] w-[18px]"
            />
            <img
              alt="twitter"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src="/icons/Vector3.svg"
              className="h-[15.3px] w-[18px]"
            />
            <img
              alt="linkedin"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src="/icons/Vector4.svg"
              className="h-[18px] w-[18px]"
            />
          </div>
        </div>
        <div />
      </div>
      
      <div className="border-b border-b-black xl:bg-[#f7f7f7]">
        <div className="flex mx-6 xl:mx-16 my-3 xl:my-[14px] justify-center xl:justify-between items-center gap-8 xl:gap-0">
          <div className="flex flex-grow justify-start items-center gap-2 px-2 xl:py-[29px]">
            <img
              alt="Unions"
              loading="lazy"
              width="32"
              height="30"
              decoding="async"
              data-nimg="1"
              src="/Frame 1.svg"
            />
            <span className="font-inter text-2xl font-bold">Ddsgnr</span>
            <div />

            <div className="hidden xl:flex bg-white gap-8">
              <div className="flex gap-8">
                <button className="border-b border-black p-[10px]">Home</button>
                <button className="p-[10px]">Courses</button>
                <button className="p-[10px]">services</button>
                <button className="p-[10px]">Achivement</button>
                <button className="p-[10px]">About Us</button>
                <button className="p-[10px]">Testemonial</button>
              </div>

              <div className="flex gap-4">
                <button className="py-2 px-5 rounded-[5px] border border-black">
                  Login
                </button>
                <button className="py-2 px-5 rounded-[5px] bg-black text-white border border-black">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;