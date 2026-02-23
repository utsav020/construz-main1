"use client";

const ProductSpecificationPage = () => {
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
    <section className="w-full max-w-[1400px] mx-auto py-12 xl:mt-[70px] md:py-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 md:mb-14">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#347A64] mb-2">
            Table of Substitution
          </div>
          <p className="text-[#347A64] max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
            Equivalent tensile strength comparison between Metal Rebar and GFRP
            Rebar
          </p>
        </div>

        {/* ================= TABLE WRAPPER ================= */}
        <div className="rounded-2xl p-4 sm:p-5 md:p-8 overflow-x-auto">
          <div className="min-w-[280px] md:min-w-full grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-6">
            {/* ================= METAL TABLE ================= */}
            <div>
              <div className="bg-[#224F3E] p-3 mb-2">
                <h4 className="text-center text-white font-semibold mb-3 tracking-wide text-sm md:text-base">
                  METAL REBAR
                </h4>

                <div className="max-w-[400px] uppercase text-white mb-2 mx-auto flex justify-between text-xs md:text-[16px]">
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
              <div className="h-[48px]" />
              <div className="space-y-2 w-full mt-[114px]">
                {metalRebar.map((_, i) => (
                  <div
                    key={i}
                    className="h-[38px] mt-[14px] flex items-center justify-center bg-[#347A64] text-white font-bold rounded-sm"
                  >
                    =
                  </div>
                ))}
              </div>
            </div>

            {/* ================= FRP TABLE ================= */}
            <div>
              <div className="bg-[#224F3E] p-3 mb-2">
                <h4 className="text-center text-white font-semibold mb-3 tracking-wide text-sm md:text-base">
                  FIBERGLASS REBAR (GFRP)
                </h4>

                <div className="max-w-[400px] uppercase text-white mb-2 mx-auto flex justify-between text-xs md:text-[16px]">
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

        {/* ================= TYPES OF PACKING ================= */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="mb-14 border-2 border-[#347A64] max-w-[600px] rounded-xl p-6 md:p-8 mt-20">
            <div className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
              TYPES OF PACKING
            </div>

            <div className="bg-[#fff] rounded-xl p-4 md:p-6">
              <img
                src="/mnt/data/213bc59b-b6ba-4a41-86b2-f167cabb08e4.png"
                alt="Types of Packing"
                className="w-full rounded-lg object-contain"
              />
            </div>
          </div>

          <div className="mb-14 border-2 border-[#347A64] max-w-[600px] rounded-xl p-6 md:p-8 mt-20">
            <div className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
              TYPES OF PACKING
            </div>

            <div className="bg-[#fff] rounded-xl p-4 md:p-6">
              <img
                src="/mnt/data/213bc59b-b6ba-4a41-86b2-f167cabb08e4.png"
                alt="Types of Packing"
                className="w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#347A64] max-w-full mx-auto sm:h-[70px] md:h-[50px] text-white text-center py-1 px-0 md:px-4 mt-2 md:mt-14">
          <ul className="md:flex md:gap-3 lg:gap-40 justify-center items-center pt-2">
            <li>6 mm to 12 mm - 40 ft Length - Round</li>
            {/* <li className="w-[290px] px-0">6 mm to 12 mm - 40 ft Length - Straight</li> */}
            <li className="w-[276px]">6 mm to 12 mm - 40 ft Length - Straight</li>
          </ul>
        </div>

        <div className="mt-20 flex items-center justify-center text-[#347A64] text-sm md:text-base font-medium">
          <div className="text-white w-[100px] h-[40px] font-semibold flex items-center justify-center bg-[#347A64] text-[20px]">Notes</div>

          <div className="border-[#347A64] border-2 w-[300px] h-[40px] flex items-center justify-center">Also can Supply in customized Length</div>
        </div>

        {/* ================= INFO SECTION ================= */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            [
              "Metal Rebar",
              "Steel reinforcement with higher weight and susceptibility to corrosion in harsh environments.",
            ],
            [
              "Strength Equivalence",
              "Each row shows equivalent tensile strength between metal and FRP rebars.",
            ],
            [
              "FRP Rebar",
              "Lightweight, corrosion-resistant alternative offering long-term durability and reduced dead load.",
            ],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 md:p-6 shadow-md border-t-4 border-[#347A64]"
            >
              <div className="text-[#347A64] text-lg md:text-[22px] font-semibold mb-2">
                {item[0]}
              </div>
              <div className="text-sm md:text-base text-[#347A64] leading-relaxed">
                {item[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSpecificationPage;
