"use client";

const Portfolio = () => {
  return (
    <main className="min-h-screen max-w-[1400px] mx-auto w-full py-12 md:py-20 xl:py-10">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-7 md:mb-14">
          <span className="inline-block rounded-full bg-[#347A64] text-white px-4 sm:px-6 py-2 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase shadow-lg">
            Comparison
          </span>

          <div className="mt-5 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
            Mechanical Property Comparison
            <br />
            <span className="text-[#347A64] text-[25px] sm:text-2xl md:text-3xl lg:text-4xl">
              GFRP vs Metal Rebars
            </span>
          </div>

          <p className="mt-3 md:mt-4 max-w-3xl mx-auto text-xs sm:text-sm md:text-base px-2 sm:px-0">
            A detailed comparison between conventional steel rebars and modern
            GFRP rebars across mechanical, durability, and environmental
            properties.
          </p>
        </div>

        {/* ================= TABLE CARD ================= */}
        <div className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">

          {/* Table Wrapper (SCROLLBAR HIDDEN) */}
          <div
            className="overflow-x-auto"
            style={{
              scrollbarWidth: "none",        // Firefox
              msOverflowStyle: "none",        // IE / Edge
            }}
          >
            {/* Webkit browsers */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <table className="min-w-[720px] md:min-w-full border-collapse text-xs sm:text-sm md:text-base text-gray-800">

              {/* Table Head */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#347A64] text-white">
                  <th className="px-3 sm:px-4 w-300 md:px-6 py-3 md:py-4 text-center font-semibold whitespace-nowrap">
                    Properties of TMT Bars
                  </th>
                  <th className="px-3 sm:px-4  md:px-6 py-3 md:py-4 text-center font-semibold whitespace-nowrap">
                    Steel Bar
                  </th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold whitespace-nowrap">
                    GFRP (Brownbar)
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {[
                  ["Tensile Strength (MPa / N/mm²)", "500", "1000+"],
                  ["Shear Strength (MPa / N/mm²)", "120", "170"],
                  ["Bond Strength (MPa / N/mm²)", "14*", "12.5"],
                  ["Compression Strength (MPa / N/mm²)", "500", "450"],
                  ["Modulus of Elasticity (GPa)", "160 – 200", "65"],
                  ["Elongation (%)", "25", "4"],
                  [
                    "Durability",
                    "Terms are Prescribed in Special Building Codes",
                    "Not less than 80 years",
                  ],
                  ["Density (ton/m³)", "7.8", "1.9"],
                  [
                    "Corrosion Resistance",
                    "Appearance Of Rust Product",
                    "Stainless Material Preserving Properties Even in Alkaline Concrete Environment",
                  ],
                  [
                    "Ecological Compatibility",
                    "Ecologically friendly Material",
                    "Does not Emit Harmful and Toxic Substances During Storage and Use",
                  ],
                  [
                    "Electrical Conductivity",
                    "Electrically conductive Material",
                    "Dielectric",
                  ],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    } hover:bg-[#347A64]/10`}
                  >
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 font-semibold text-[#347A64] whitespace-nowrap">
                      {row[0]}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-[#347A64] whitespace-nowrap">
                      {row[1]}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-[#347A64] whitespace-nowrap">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
