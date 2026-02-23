import React from "react";

export default function TensileStrength() {

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
    <div>
      {/* ================= Table of Substitution ================= */}
      <section data-aos="fade-up">
        <div className="max-w-6xl py-24 mx-auto px-3 sm:px-4">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-10 md:mb-14">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#347A64] mb-2">
              Table of Substitution
            </div>
            <p className="text-[#347A64] max-w-2xl mx-auto text-md sm:text-md md:text-base">
              Equivalent tensile strength comparison between Metal Rebar and GFRP
              Rebar
            </p>
          </div>

          {/* ================= TABLE WRAPPER ================= */}
          <div className="p-0 sm:p-5 md:p-8 overflow-x-auto">
            <div className="min-w-70 md:min-w-full grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-6">
              {/* ================= METAL TABLE ================= */}
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

              
              {/* ================= CENTER EQUAL ================= */}
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

              {/* ================= FRP TABLE ================= */}
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
      </section>
    </div>
  );
}
