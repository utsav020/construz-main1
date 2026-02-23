// "use client";

// import { useState, useEffect } from "react";

// const ScrollTopButton = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const updateScrollProgress = () => {
//     if (typeof window !== undefined) {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight;
//       const clientHeight = window.innerHeight;
//       const totalHeight = scrollHeight - clientHeight;
//       const progress = (scrollTop / totalHeight) * 100;

//       setScrollProgress(progress);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", updateScrollProgress);
//     return () => {
//       window.removeEventListener("scroll", updateScrollProgress);
//     };
//   }, []);

//   const scrollToTop = () => {
//     if (typeof window !== undefined) {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//   };

//   const strokeDashoffset = (307.919 * (100 - scrollProgress)) / 100;

//   return (
//     typeof window !== undefined && (
//       <a
//         href="#"
//         className={`fixed bottom-6 right-6 z-9999 h-14 w-14 rounded-[999px] flex items-center justify-center transition-all duration-300 ease-out invisible   ${scrollProgress > 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
//         onClick={(e) => {
//           e.preventDefault();
//           scrollToTop();
//         }}
//       >
//         <svg
//           className="stroke-[20px] stroke-[#347A63] box-border duration-[400ms]"
//           width="100%"
//           height="100%"
//           viewBox="-1 -1 102 102"
//         >
//           <path
//             d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
//             style={{
//               transition: "stroke-dashoffset 10ms linear",
//               strokeDasharray: "307.919, 307.919",
//               strokeDashoffset: strokeDashoffset,
//             }}
//           ></path>
//         </svg>
//       </a>
//     )
//   );
// };

// export default ScrollTopButton;

"use client";

import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const height =
          document.documentElement.scrollHeight - window.innerHeight;

        if (height > 0) {
          setProgress((scrollTop / height) * 100);
          setShow(scrollTop > 120);
        }

        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-10000
        h-14 w-14 rounded-full border-2 border-[#347A63]
        flex items-center justify-center
        transition-all duration-300 ease-out
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      {/* Circular Progress */}
      <svg width="52" height="52" className="absolute">
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke="#347A63"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-100 ease-linear"
          transform="rotate(-90 26 26)"
        />
      </svg>

      {/* Arrow */}
      <svg
        className="relative z-10 h-5 w-5 text-[#347A63]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
