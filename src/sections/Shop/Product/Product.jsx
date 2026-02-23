"use client";

import Portfolio from "~/sections/Home-2/Portfolio";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const stats = [
  { value: 5000, suffix: "+", label: "Projects Completed" },
  { value: 17, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Metric Tons Sold" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
];

export default function Product() {
  const [activeHover, setActiveHover] = useState(null);
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 120,
    });

    const handleScroll = () => {
      AOS.refreshHard();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    stats.forEach((stat, index) => {
      let start = 0;
      const duration = 2000; // animation time (ms)
      const increment = Math.ceil(stat.value / (duration / 16));

      const counter = setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 16);
    });
  }, [startCount]);

  const metalRebar = [
    ["2.75 kg", "Ø6"],
    ["4.74 kg", "Ø8"],
    ["7.40 kg", "Ø10"],
    ["10.65 kg", "Ø12"],
    ["14.52 kg", "Ø14"],
    ["18.93 kg", "Ø16"],
    ["24.00 kg", "Ø18"],
    ["35.76 kg", "Ø22"],
    ["46.22 kg", "Ø25"],
    ["58.02 kg", "Ø28"],
    ["75.79 kg", "Ø32"],
  ];

  const frpRebar = [
    ["0.46 kg", "Ø4.5"],
    ["0.57 kg", "Ø6"],
    ["0.94 kg", "Ø7"],
    ["1.23 kg", "Ø8"],
    ["1.65 kg", "Ø10"],
    ["2.48 kg", "Ø12"],
    ["3.24 kg", "Ø14"],
    ["4.87 kg", "Ø16"],
    ["6.28 kg", "Ø18"],
    ["8.08 kg", "Ø20"],
    ["9.80 kg", "Ø22"],
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section
        data-aos="fade-up"
        className="max-w-350 mx-auto px-6 md:py-24 py-4 md:flex justify-between items-center"
      >
        <div className="sm:w-full w-75">
          <div className="w-full">
            <div className="text-3xl md:text-5xl xl:text-[80px] font-bold leading-tight">
              <span className="text-[#347A64]">GFRP</span> Rebar
            </div>
            <span className="block text-2xl xl:text-[50px] font-bold text-black">
              Strength You can trust.
            </span>
          </div>

          <p className="mt-6 text-gray-600 max-w-150 w-full text-lg">
            The pioneers of GFRP Rebar manufacturing in India, delivering
            corrosion-free and future-ready construction solutions.
          </p>

          <Link
            className="w-45 h-12.5 bg-[#347A64] mt-6 rounded flex items-center justify-center text-white font-semibold hover:bg-[#2f6b58] transition"
            href="/contact?subject=Download%20Brochure"
          >
            <button>Download Brochure</button>
          </Link>
        </div>

        <div className="max-w-100 h-80 mt-12.5 md:mt-0 rounded-xl">
          <img
            src="/main-assets/img/product/steel-3.webp"
            alt="steel-3"
            className="h-80 rounded-xl"
          />
        </div>
      </section>

      {/* ================= IMAGE SECTION ================= */}
      <div className="mb-20 mt-30">
        <div className="relative max-w-350 mx-auto overflow-hidden">
          {/* ===== Rod Image ===== */}
          <img
            src="/main-assets/img/hero/AllRoads.png"
            alt="Rebar Rod Sizes"
            className="max-w-350 w-full h-auto object-cover"
          />

          {/* ===== Sizes Bar ===== */}
          <div className="absolute hidden xl:block bottom-0 left-0 w-full bg-white/90 backdrop-blur">
            <div className="max-w-350 bg-[#347A63] text-white flex-1 flex gap-19 mx-auto">
              <div className="flex gap-16 ml-7 items-center text-xs sm:text-sm font-medium ">
                {["6 mm", "8 mm", "10 mm"].map((size) => (
                  <div key={size} className="flex w-13 text-center py-2">
                    {size}
                  </div>
                ))}
              </div>

              <div className="flex gap-20 items-center text-xs sm:text-sm font-medium">
                {["12 mm", "14 mm", "16 mm"].map((size) => (
                  <div
                    key={size}
                    className="flex text-center py-2 w-20 items-center justify-center"
                  >
                    {size}
                  </div>
                ))}
              </div>

              <div className="flex gap-28 ml-3 items-center text-xs sm:text-sm font-medium">
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

      {/* ================= STATS SECTION ================= */}
      <section
        data-aos="fade-up"
        ref={sectionRef}
        className="bg-[#347A64] mt-40 max-w-350 mx-auto py-20 text-white"
      >
        <div className="max-w-325 mx-auto px-6 grid grid-cols-2 lg:grid-cols-5 gap-10 items-center text-center">
          {stats.map((item, i) => (
            <div key={i}>
              <div className="text-4xl font-bold">
                {counts[i]}
                {item.suffix}
              </div>
              <p className="mt-2 text-sm opacity-90">{item.label}</p>
            </div>
          ))}

          {/* Image */}
          <div className="w-87.5 ml-auto h-55">
            <img
              src="/main-assets/img/product/Man-Bar.png"
              alt="steel"
              className="md:h-55.75 h-57.5 mx-auto mt-2 md:mt-3 object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= GFRP INFO ================= */}
      <section
        data-aos="fade-up"
        className="max-w-350 mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
      >
        {/* IMAGE BOX */}
        <div className="w-full max-w-115 mx-auto  rounded-xl flex items-center justify-center p-6 sm:p-10">
          <img
            src="/main-assets/img/hero/RightSign.png"
            alt="GFRP Info"
            className="w-40 md:w-100 h-auto object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#347A64] mb-4 sm:mb-6">
            What is GFRP Rebar?
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
            Glass Fibre Reinforced Polymer (GFRP) Rebar is a next-generation
            reinforcement solution. It is corrosion-resistant, lightweight,
            stronger than steel, non-conductive, and highly durable for
            aggressive environments.
          </p>

          <Link
            className="w-45 h-12.5 bg-[#347A64] mt-6 rounded flex items-center justify-center text-white font-semibold hover:bg-[#2f6b58] transition"
            href="/contact?subject=Download%20Brochure"
          >
            <button>Download Brochure</button>
          </Link>
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="max-w-350 mx-auto py-20 px-4">
        {/* Section Title */}
        <div className="text-center text-3xl font-bold text-[#347A64] mb-16">
          REBAR-X GFRP Rebar Advantages
        </div>

        {/* Advantages Grid */}
        <div className="bg-[#347A64] max-w-350 mx-auto py-16 px-6 rounded-2xl">
          <div className="max-w-325 mx-auto px-3 md:px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 text-center">
            {[
              {
                title: "Corrosion Resistant",
                img: "/main-assets/img/product/1-1.png",
              },
              { title: "Stronger", img: "/main-assets/img/product/1-2.png" },
              { title: "Lighter", img: "/main-assets/img/product/3.png" },
              {
                title: "Cost Effective",
                img: "/main-assets/img/product/4.png",
              },
              {
                title: "Zero Maintenance",
                img: "/main-assets/img/product/5-2.png",
              },
              {
                title: "Longer Life Span",
                img: "/main-assets/img/product/6.png",
              },
              { title: "Eco Friendly", img: "/main-assets/img/product/7.png" },
              { title: "Dielectric", img: "/main-assets/img/product/8.png" },
              {
                title: "Easy Transport",
                img: "/main-assets/img/product/9.png",
              },
              {
                title: "Water Resistant",
                img: "/main-assets/img/product/10.png",
              },
              {
                title: "Low Thermal Expansion",
                img: "/main-assets/img/product/11.png",
              },
              {
                title: "Radio Transparent",
                img: "/main-assets/img/product/12-1.png",
              },
              { title: "Durable", img: "/main-assets/img/product/13.png" },
              {
                title: "Overlap Cost Savings",
                img: "/main-assets/img/product/18.png",
              },
              {
                title: "Easy Site Handling",
                img: "/main-assets/img/product/15.png",
              },
              {
                title: "Faster Installation",
                img: "/main-assets/img/product/16.png",
              },
              {
                title: "Reduced Concrete Cover",
                img: "/main-assets/img/product/17-1.png",
              },
              {
                title: "Lower Installation Cost",
                img: "/main-assets/img/product/14.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 50}
                className="flex flex-col -mt-10 items-center gap-4 hover:scale-105 transition-transform duration-300"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                {/* Title */}
                <p className="font-semibold text-sm text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ATTRIBUTES ================= */}
      <section
        data-aos="fade-up"
        className="relative max-w-350 px-6 mx-auto py-24 bg-center rounded-lg mt-12.5 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/main-assets/img/product/steel-1.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative">
          <div className="md:text-4xl text-lg font-semibold text-white max-w-175 w-full mx-auto h-15 bg-[#347A64] mb-16">
            <div className="flex items-center justify-center h-full">
              Attributes of REBAR-X GFRP Rebars
            </div>
          </div>

          <div className="max-w-275 mx-auto px-0 grid md:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <div className="bg-[#347A64] text-white p-6 rounded-2xl shadow-xl">
              <div className="font-bold md:text-2xl text-[20px] mb-6">
                Corrosion-Free Applications
              </div>

              <ol className="list-decimal ml-5 space-y-2 text-md">
                <li>Marine precast walls</li>
                <li>Railway sleepers</li>
                <li>Bridge decks & slabs</li>
                <li>Road infrastructure</li>
                <li>Underwater structures</li>
              </ol>

              <div className="mt-8 space-y-3 text-md">
                <p>• Non-conductive & non-magnetic applications</p>
                <p>• Chemical & industrial resistance</p>
                <p>• Multiple structural use-cases</p>
              </div>
            </div>

            {/* Right Image / Visual */}
            <div className="w-full h-80 rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/main-assets/img/product/steel-2.jpg"
                alt="GFRP Rebar"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATION GRID ================= */}
      {/* <section className="py-24 max-w-350 mx-auto px-6">
        {/* Section Title *
        <div className="text-center text-3xl font-bold text-[#347A64] mb-16">
          GFRP Rebar Applications
        </div>

        {/* Application Grid *
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Parking Areas",
              img: "/main-assets/img/product/parking-area.jpg",
            },
            {
              title: "Concrete Slabs",
              img: "/main-assets/img/product/concrete-slab.jpg",
            },
            {
              title: "Industrial Roofing",
              img: "/main-assets/img/product/industrial-roffting.avif",
            },
            {
              title: "RCC Roads",
              img: "/main-assets/img/product/rcc-roads.avif",
            },
            {
              title: "Drainage Systems",
              img: "/main-assets/img/product/drainage-system.jpg",
            },
            {
              title: "Pavements",
              img: "/main-assets/img/product/pavements.avif",
            },
            {
              title: "Friction Slabs",
              img: "/main-assets/img/product/pavements.avif",
            },
            {
              title: "Foundations",
              img: "/main-assets/img/product/foundations.jpg",
            },
            {
              title: "Precaste Elements",
              img: "/main-assets/img/product/precaste elements.avif",
            },
            {
              title: "Crash Barriers",
              img: "/main-assets/img/product/crash-barriers.jpg",
            },
            {
              title: "Chemical Plants",
              img: "/main-assets/img/product/chemical plants.avif",
            },
            {
              title: "Walls",
              img: "/main-assets/img/product/walls.avif",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group border rounded-2xl overflow-hidden text-center hover:shadow-lg transition duration-300"
            >
              {/* Image *
              <div className="w-full h-51 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title *
              <div className="p-2 border-b-3 border-[#347A64] rounded-2xl">
                <div className="font-semibold text-md text-[#347A64] ">
                  {item.title}
                </div>
              </div>
            </div>
          ))} 
        </div>
      </section> */}

      {/* ================= ATTRIBUTES ================= */}
      {/* <section data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-10 md:mb-14">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#347A64] mb-2">
              Table of Substitution
            </div>
            <p className="text-[#347A64] max-w-2xl mx-auto text-md sm:text-md md:text-base">
              Equivalent tensile strength comparison between Metal Rebar and FRP
              Rebar
            </p>
          </div>

          <div className="p-0 sm:p-5 md:p-8 overflow-x-auto">
            <div className="min-w-70 md:min-w-full grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-6">
              <div>
                <div className="bg-[#224F3E] p-3 mb-2">
                  <h4 className="text-center text-white font-semibold mb-3 tracking-wide text-sm md:text-base">
                    METAL REBAR
                  </h4>

                  <div className="max-w-100 uppercase text-white mb-2 mx-auto flex justify-between text-xs md:text-[16px]">
                    <div className="border w-[48%] py-2 text-center">
                      Weight <br /> (PER 12m BAR)
                    </div>
                    <div className="border w-[48%] flex items-center justify-center py-2">
                      Diameter
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  {metalRebar.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-2 text-center py-2 md:py-3
                    ${i % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#DADADA]"}`}
                    >
                      <div className="font-medium text-sm md:text-lg text-gray-800">
                        {row[0]}
                      </div>
                      <div className="text-gray-700 text-sm md:text-lg">
                        {row[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex flex-col items-center">
                <div className="h-12" />
                <div className="space-y-2 w-full mt-28.5">
                  {metalRebar.map((_, i) => (
                    <div
                      key={i}
                      className="h-9.5 mt-3.5 flex items-center justify-center bg-[#347A64] text-white font-bold rounded-sm"
                    >
                      =
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-[#224F3E] p-3 mb-2">
                  <h5 className="text-center text-white font-semibold mb-3 tracking-wide text-sm md:text-base">
                    FIBERGLASS REBAR (GFRP)
                  </h5>

                  <div className="max-w-100 uppercase text-white mb-2 mx-auto flex justify-between text-xs md:text-[16px]">
                    <div className="border w-[48%] py-2 text-center">
                      Weight <br /> (PER 12m BAR)
                    </div>
                    <div className="border w-[48%] flex items-center justify-center py-2">
                      Diameter
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  {frpRebar.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-2 text-center py-2 md:py-3
                    ${i % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#DADADA]"}`}
                    >
                      <div className="font-medium text-sm md:text-lg text-gray-800">
                        {row[0]}
                      </div>
                      <div className="text-gray-700 text-sm md:text-lg">
                        {row[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div data-aos="fade-up" className="mt-5">
        <Portfolio />
      </div>

      {/* ================= RIGHT FIXED ICON + SLIDE DETAILS ================= */}
      <div
        className="fixed hidden right-0 top-1/2 -translate-y-1/2 z-50 lg:flex flex-col gap-3"
        onMouseLeave={() => setActiveHover(null)}
      >
        {/* ===== Email ===== */}
        <div
          onMouseEnter={() => setActiveHover("email")}
          className="relative h-12.5 w-65"
        >
          {/* Sliding Text */}
          <div
            className={`absolute right-12.5 top-0 h-full flex items-center bg-white text-[#347A64] shadow-md border-2 border-[#347A64]
              transition-transform duration-500 ease-in-out
              ${
                activeHover === "email" ? "translate-x-0" : "translate-x-57.5"
              }`}
          >
            <span className="px-4 text-sm whitespace-nowrap">
              info@fiberonrebar.com
            </span>
          </div>

          {/* Fixed Icon */}
          <div className="absolute right-0 top-0 w-12.5 h-12.5 bg-[#347A64] text-white flex items-center justify-center">
            <div className="">
              <Mail size={20} />
            </div>
          </div>
        </div>

        {/* ===== Phone ===== */}
        <div
          onMouseEnter={() => setActiveHover("phone")}
          className="relative h-12.5 w-65"
        >
          <div
            className={`absolute right-12.5 top-0 h-full flex items-center bg-white text-[#347A64] shadow-md border-2 border-[#347A64]
              transition-transform duration-500 ease-in-out
              ${
                activeHover === "phone" ? "translate-x-0" : "translate-x-57.5"
              }`}
          >
            <span className="px-4 text-sm whitespace-nowrap">
              +91 92748 31310
            </span>
          </div>

          <div className="absolute right-0 top-0 w-12.5 h-12.5 bg-[#347A64] text-white flex items-center justify-center">
            <Phone size={20} />
          </div>
        </div>

        {/* ===== Location ===== */}
        <div
          onMouseEnter={() => setActiveHover("location")}
          className="relative h-12.5 w-65"
        >
          <div
            className={`absolute right-12.5 top-0 h-full flex items-center bg-white shadow-md text-[#347A64] border-2 border-[#347A64]
              transition-transform duration-500 ease-in-out
              ${
                activeHover === "location"
                  ? "translate-x-0"
                  : "translate-x-57.5"
              }`}
          >
            <span className="px-4 text-sm whitespace-nowrap">
              Morbi, Gujrat, India
            </span>
          </div>

          <div className="absolute right-0 top-0 w-12.5 h-12.5 bg-[#347A64] text-white flex items-center justify-center">
            <MapPin size={20} />
          </div>
        </div>
      </div>
    </main>
  );
}
