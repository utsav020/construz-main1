"use client";
import {
  Feather,
  Droplets,
  PiggyBank,
  Dumbbell,
  Flame,
  Leaf,
  Wrench,
  Layers,
  ZapOff,
  ShieldCheck,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const advantages = [
    {
      title: "Lightweight & Durable",
      desc: "Strong yet easy to handle",
      icon: Feather,
    },
    {
      title: "Corrosion & Water Resistant",
      desc: "No rust, no decay",
      icon: Droplets,
    },
    {
      title: "Cost Effective & Low Maintenance",
      desc: "Saves money for decades",
      icon: PiggyBank,
    },
    {
      title: "High Strength & Flexible",
      desc: "Performs under heavy stress",
      icon: Dumbbell,
    },
    {
      title: "Thermal & Chemical Stable",
      desc: "Withstands heat and chemicals",
      icon: Flame,
    },
  ];

  const advantage = [
    {
      title: "Eco-Friendly & Sustainable",
      desc: "Greener, energy-efficient choice",
      icon: Leaf,
    },
    {
      title: "Easy Handling & Installation",
      desc: "Quick and safe setup",
      icon: Wrench,
    },
    {
      title: "Reduced Concrete Coverage",
      desc: "Saves material and cost",
      icon: Layers,
    },
    {
      title: "Non-Conductive & Radio Safe",
      desc: "Ideal for sensitive sites",
      icon: ZapOff,
    },
    {
      title: "Long Life & Reliable",
      desc: "Built to last generations",
      icon: ShieldCheck,
    },
  ];

  return (
    <section data-aos="fade-up" className="w-full max-w-350 xl:mt-[100px] mx-auto">
      <div className="max-w-8xl mx-auto px-4">
        {/* ================= ADVANTAGES ================= */}
        <div className="mb-0">
          <div className="text-[#347A64] text-[35px] text-center px-4 py-2 text-sm font-semibold tracking-wide mb-10">
            ADVANTAGES
          </div>

          <div className="flex flex-col max-w-[1400px] md:flex-row gap-20">
            <div
              className="grid grid-cols-1 max-w-full w-full mx-auto gap-x-14 gap-y-8"
            >
              {advantages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-2  md:gap-4 bg-[#F5F5F5] p-1.5 border-l-4 border-[#347A64]"
                  >
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
                      <div className="bg-[#347A64] w-10 h-10 rounded-full border border-[#347A64] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white " />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#347A64] md:text-[23px]">
                        {item.title}
                      </div>
                      <div className="text-base text-[#347A64]">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="grid grid-cols-1 max-w-full w-full mx-auto gap-x-14 gap-y-8"
            >
              {advantage.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-2 max-w-full w-full md:gap-4 bg-[#F5F5F5] p-1.5 border-l-4 border-[#347A64]"
                  >
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
                      <div className="bg-[#347A64] w-10 h-10 rounded-full border border-[#347A64] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white " />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#347A64] md:text-[23px]">
                        {item.title}
                      </div>
                      <div className="text-base text-[#347A64]">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= APPLICATION GRID ================= */}
        <section className="pt-16 xl:pt-34 max-w-350 mx-auto">
          {/* Section Title */}
          <div className="text-center text-2xl font-bold text-[#347A64] mb-6 md:mb-16">
            FIBERON in Real-World Projects
          </div>

          {/* Application Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
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
                className="group border rounded-2xl overflow-hidden text-center hover:shadow-lg transition duration-300"
              >
                {/* Image */}
                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <div className="p-2 border-b-3 border-[#347A64] rounded-2xl">
                  <div className="font-semibold text-md text-[#347A64] ">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Process;
