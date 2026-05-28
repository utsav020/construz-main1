"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full max-w-350 lg:mt-12.5 xl:mt-0 sm:mt-[30px] mt-[15px] mx-auto pt-20">
      <div className="max-w-350 mx-auto px-4 md:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          
          <div className="text-3xl md:text-[45px] font-bold text-[#347A64]">
            FIBERON GFRP REBARS
          </div>
          <p className="text-xl text-[#347A64] font-semibold tracking-wide uppercase mb-2">
            Available in Various Sizes
          </p>
        </div>

        {/* ================= IMAGE SECTION ================= */}
        <div className="mb-20">
          <div className="relative max-w-350 overflow-hidden">
            {/* ===== Rod Image ===== */}
            <img
              src="/main-assets/img/hero/AllRoads.png"
              alt="Rebar Rod Sizes"
              className="max-w-350 w-full h-auto object-cover"
            />

            {/* ===== Sizes Bar ===== */}
            <div className="absolute hidden xl:block bottom-0 left-0 w-full bg-white/90 backdrop-blur">
              <div className="max-w-350 bg-[#347A63] text-white flex-1 flex gap-19 mx-auto">
                <div className="flex gap-15 ml-[18px] items-center text-xs sm:text-sm font-medium ">
                  {["6 mm", "8 mm", "10 mm"].map((size) => (
                    <div key={size} className="flex w-13 text-center py-2">
                      {size}
                    </div>
                  ))}
                </div>

                <div className="flex gap-18 items-center text-xs sm:text-sm font-medium">
                  {["12 mm", "14 mm", "16 mm"].map((size) => (
                    <div
                      key={size}
                      className="flex text-center py-2 w-20 items-center justify-center"
                    >
                      {size}
                    </div>
                  ))}
                </div>

                <div className="flex gap-27 ml-3 items-center text-xs sm:text-sm font-medium">
                  {["18 mm", "20 mm", "22 mm"].map((size) => (
                    <div
                      key={size}
                      className="flex text-center py-2 w-22 items-center justify-center"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CTA SECTION ================= */}
        <div className="mt-20 bg-[#347A64] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between text-white">
          <div>
            <div className="text-2xl font-bold">Inquiry Now</div>
            <p className="text-white/70">Get in touch with us today!</p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
              <Phone />
            </div>
            <div>
              <Link
                href="tel:+123551579209"
                className="font-semibold text-white text-lg block"
              >
                +91 9274831310
              </Link>
              <span className="text-sm text-white/80">
                Mon - Sat : 10am - 07pm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
