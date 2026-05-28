"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Hero = () => {
  const [activeHover, setActiveHover] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="pb-50 max-w-350 mx-auto">
        {/* ================= HERO SECTION ================= */}
        <div data-aos="fade-up" className="relative">
          <div className="max-w-350 mx-auto mt-10 md:mt-20 lg:flex items-center justify-between lg:h-125 px-6">
            {/* Left Content */}
            <div className="mx-auto max-w-full w-175 lg:w-full">
              <div className="md:text-[50px] xl:text-[83px] text-[33px] leading-10 md:leading-12 xl:leading-20 w-full font-bold">
                <span className="text-[#347A64]">GFRP REBEAR </span> <br />
                MANUFACTURER
              </div>

              <p className="text-[16px] max-w-120 mt-4 text-gray-600">
                Revolutionize your projects with{" "}
                <span className="text-[#347A63] underline">FIBERON</span> GFRP
                REBER — twice the strength, zero corrosion, and a lighter build
                for enduring performance in any environment.
              </p>

              <Link className="w-45 h-12.5 bg-[#347A64] mt-6 rounded flex items-center justify-center text-white font-semibold hover:bg-[#2f6b58] transition" href="/contact?subject=Download%20Brochure">
                <button>
                  Download Brochure
                </button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="mt-20 mx-auto max-w-100">
              <img src="/main-assets/img/hero/hero_img.png" alt="Building" />
            </div>
          </div>
        </div>

        {/* ================= RIGHT FIXED ICON + SLIDE DETAILS ================= */}
        <div
          className="fixed right-0 hidden top-80 xl:top-1/2 -translate-y-1/2 z-50 lg:flex flex-col gap-3"
          onMouseLeave={() => setActiveHover(null)}
        >
          {/* ===== Email ===== */}
          <div
            onMouseEnter={() => setActiveHover("email")}
            className="relative h-[50px] w-[260px]"
          >
            <div
              className={`absolute right-[50px] top-0 h-full flex items-center bg-white text-[#347A64] shadow-md border-2 border-[#347A64]
              transition-transform duration-500 ease-in-out
              ${
                activeHover === "email"
                  ? "translate-x-0"
                  : "translate-x-[230px]"
              }`}
            >
              <span className="px-4 text-sm whitespace-nowrap">
                info@fiberonrebar.com
              </span>
            </div>

            <div className="absolute right-0 top-0 w-[50px] h-[50px] bg-[#347A64] text-white flex items-center justify-center">
              <Mail size={20} />
            </div>
          </div>

          {/* ===== Phone ===== */}
          <div
            onMouseEnter={() => setActiveHover("phone")}
            className="relative h-[50px] w-[260px]"
          >
            <div
              className={`absolute right-[50px] top-0 h-full flex items-center bg-white text-[#347A64] shadow-md border-2 border-[#347A64]
              transition-transform duration-500 ease-in-out
              ${
                activeHover === "phone"
                  ? "translate-x-0"
                  : "translate-x-[230px]"
              }`}
            >
              <span className="px-4 text-sm whitespace-nowrap">
                +91 92748 31310
              </span>
            </div>

            <div className="absolute right-0 top-0 w-[50px] h-[50px] bg-[#347A64] text-white flex items-center justify-center">
              <Phone size={20} />
            </div>
          </div>

          {/* ===== Location ===== */}
          <div
            onMouseEnter={() => setActiveHover("location")}
            className="relative h-[50px] w-[260px]"
          >
            <div
              className={`absolute right-[50px] top-0 h-full flex items-center bg-white shadow-md text-[#347A64] border-2 border-[#347A64]
              transition-transform duration-500 ease-in-out
              ${
                activeHover === "location"
                  ? "translate-x-0"
                  : "translate-x-[230px]"
              }`}
            >
              <span className="px-4 text-sm whitespace-nowrap">
                Morbi, Gujarat, India
              </span>
            </div>

            <div className="absolute right-0 top-0 w-[50px] h-[50px] bg-[#347A64] text-white flex items-center justify-center">
              <MapPin size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
