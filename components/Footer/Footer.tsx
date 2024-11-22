import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 px-6 xl:p-20 gap-12 xl:gap-20 xl:mt-[50px] xl:mb-[90px]">
      <div className="flex flex-col justify-center items-center gap-12 xl:gap-20 xl:w-full">
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center xl:items-start gap-6 xl:gap-0 w-full">
          <div className="flex flex-col justify-center items-center xl:items-start gap-4 xl:w-full">
            <h2 className="font-semibold text-lg text-center xl:text-left">
              Subscribe to our newsletter
            </h2>
            <p className="text-center xl:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center xl:items-start gap-4 w-full">
            <form className="flex flex-col xl:flex-row justify-center items-center gap-4 w-full">
              <input
                placeholder="Enter your email"
                type="email"
                className="w-full p-3 border border-black rounded-[5px]"
              />
              <button className="w-full px-6 py-3 border border-black rounded-[5px]">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-center">
              By subscribing you agree to with our <u>Privacy Policy</u>
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-start xl:justify-between xl:w-full gap-8 xl:gap-10">
          <div className="flex justify-center items-center gap-[10px]">
          <img
              alt="Unions"
              loading="lazy"
              width="32"
              height="30"
              decoding="async"
              data-nimg="1"
              src="/Frame 1.svg"
            />
            <span className="font-inter font-bold text-2xl">Ddsgnr</span>
          </div>
          <div className="flex flex-col justify-center pl-[30px] items-center gap-4">
            <h3 className="font-semibold text-center">Courses</h3>
            <div>
              <p className="py-2 text-sm text-center">Business</p>
              <p className="py-2 text-sm text-center">Development</p>
              <p className="py-2 text-sm text-center">Technology</p>
              <p className="py-2 text-sm text-center">Design</p>
              <p className="py-2 text-sm text-center">Programming</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-semibold text-center">Resources</h3>
            <div>
              <p className="py-2 text-sm text-center">Career</p>
              <p className="py-2 text-sm text-center">Resume</p>
              <p className="py-2 text-sm text-center">Learning</p>
              <p className="py-2 text-sm text-center">Interview Preparation</p>
              <p className="py-2 text-sm text-center">Jobs</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-semibold text-center">About Us</h3>
            <div>
              <p className="py-2 text-sm text-center">Contact</p>
              <p className="py-2 text-sm text-center">Help/Support</p>
              <p className="py-2 text-sm text-center">FAQ</p>
              <p className="py-2 text-sm text-center">Terms and Conditions</p>
              <p className="py-2 text-sm text-center">Partners</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <hr className="border border-black w-full" />
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-6 xl:w-full">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-6">
              <p className="text-center text-sm">
                2023 Ddsgnr. All right reserved.
              </p>
              <div className="flex items-center gap-6">
                <p className="text-sm text-center">
                  <u>Privacy Policy</u>
                </p>
                <p className="text-sm text-center">
                  <u>Terms Of Services</u>
                </p>
                <p className="text-sm text-center">
                  <u>Cookies Settings</u>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
