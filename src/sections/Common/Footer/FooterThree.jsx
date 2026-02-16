import Link from "next/link";
import { Globe, Mail, MapPin, Phone, PhoneCall } from "lucide-react";

const FooterThree = () => {
  return (
    <footer className="bg-white text-[#347A64]">
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-[1400px] mx-auto px-[30px] py-13">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-15">
          {/* ================= ABOUT ================= */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img
                src="/main-assets/img/hero/Fibron_Logo_Black_New.png"
                alt="MRG Composites"
                className="h-[150px] w-[150px] object-contain"
              />
            </Link>

            <p className="text-base leading-relaxed text-[#347A64]">
              Holisticly underwhelm ethical solutions whereas maintainable
              strategic theme areas. Uniquely optimize quality interface before
              resource.
            </p>

            {/* <div className="mt-4 text-2xl text-[#347A64] font-semibold">
              Since 2000
            </div> */}
          </div>

          {/* ================= USEFUL LINKS ================= */}
          <div>
            <div className="text-[25px] text-[#347A64] font-semibold mb-6">
              Useful Links
            </div>

            <div className="grid grid-cols-1 w-auto text-base">
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/gfrp-rebar"
                    className="hover:underline"
                  >
                    What We Do
                  </a>
                </li>
                <li>
                  <a
                    href="/shop"
                    className="hover:underline"
                  >
                    News & Article
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/achievement"
                    className="hover:underline"
                  >
                    Success Story
                  </a>
                </li> */}
                <li>
                  <a
                    href="/faq"
                    className="hover:underline"
                  >
                    FAQ’s
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ================= ADDRESS ================= */}
          <div>
            <div className="text-[25px] text-[#347A64] font-bold mb-6">
              Rebar-X Composites Industries
            </div>

            <div className="flex w-[300px] md:w-[400px] gap-2 text-base">
              <div className="mt-1">
                <MapPin size={20} />
              </div>

              <div className="">
                Behind Hotel Fern, 8 /A National Highway, Kandla Road,
                Mahendrnagar, Morbi - 363641.
              </div>
            </div>

            <div className="flex items-center md:w-[400px] gap-2 mt-3 text-base">
              <div>
                <PhoneCall size={20} />
              </div>

              <div className="">+91 92748 31310</div>
            </div>

            <div className="flex items-center md:w-[400px] gap-2 mt-3 text-base">
              <div>
                <Mail size={20} />
              </div>

              <div className="">info@fiberonrebar.com</div>
            </div>

            <div className="flex items-center md:w-[400px] gap-2 mt-3 text-base">
              <div>
                <Globe size={20} />
              </div>

              <a href="http://www.fiberonrebar.com">
                <div className="">www.fiberonrebar.com</div>
              </a>
            </div>
          </div>

          {/* ================= NEWSLETTER ================= */}
          {/* <div>
            <div className="text-[25px] font-semibold mb-6">Newsletter</div>
            <p className="text-sm text-[#347A64] mb-5">
              Subscribe for the latest news. Stay updated on the latest trends.
            </p>

            <form className="space-y-4">
              <div className="rounded-md border-2 border-[#347A64]">
                <input
                  type="email"
                  placeholder="Email Address..."
                  required
                  className="w-full px-4 py-3 text-gray-800 "
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#347A64] text-white font-semibold py-3 rounded-md transition"
              >
                SUBMIT NOW
                <span className="text-lg">↗</span>
              </button>
            </form>
          </div> */}
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-[#347A64] py-6">
        <p className="text-center text-sm text-[#347A64]">
          © 2024{" "}
          <a href="#" className="font-semibold hover:underline">
            Construz
          </a>{" "}
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterThree;
