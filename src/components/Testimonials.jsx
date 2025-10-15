// import React, { useState, useEffect } from "react";

// function Testimonials() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const testimonials = [
//     {
//       name: "Candy Singh",
//       company: "Magic Mushroom",
//       logo: "/testimonials/magic-mushroom.png",
//       text: "Superb, These guys are just superb when it comes to creating and executing new ideas. Digipanda consulting helped my company in designing and executing some very difficult ideas.",
//     },
//     {
//       name: "Meiying Liang",
//       company: "Phantom Pen",
//       logo: "/testimonials/phantom-pen.png",
//       text: "Digipanda has done a lot of web design and development work for us over the past six years. The design team is very patient they are willing to work with clients by building relationships.",
//     },
//     {
//       name: "John Doe",
//       company: "Tech Solutions",
//       logo: "/testimonials/tech-solutions.png",
//       text: "Working with Digipanda has been an absolute pleasure. Their attention to detail and commitment to delivering quality work is unmatched.",
//     },
//     {
//       name: "Sarah Johnson",
//       company: "Creative Studio",
//       logo: "/testimonials/creative-studio.png",
//       text: "The team at Digipanda exceeded all our expectations. From the initial consultation to the final delivery, everything was handled professionally.",
//     },
//     {
//       name: "Michael Chen",
//       company: "Digital Ventures",
//       logo: "/testimonials/digital-ventures.png",
//       text: "Outstanding service and incredible results. The Digipanda team brought our vision to life beyond what we imagined possible.",
//     },
//     {
//       name: "Emma Wilson",
//       company: "Brand Factory",
//       logo: "/testimonials/brand-factory.png",
//       text: "Professional, creative, and always delivering on time. Working with Digipanda has transformed our digital presence completely.",
//     },
//   ];

//   // Duplicate testimonials for infinite scroll effect
//   const duplicatedTestimonials = [...testimonials, ...testimonials];

//   useEffect(() => {
//     const scrollInterval = setInterval(() => {
//       setScrollPosition((prev) => {
//         const maxScroll = testimonials.length * 400; // 400px per card
//         if (prev >= maxScroll) return 0;
//         return prev + 1;
//       });
//     }, 30);

//     return () => clearInterval(scrollInterval);
//   }, [testimonials.length]);

//   const handlePrev = () => setScrollPosition((prev) => Math.max(0, prev - 400));
//   const handleNext = () => setScrollPosition((prev) => prev + 400);

//   return (
//     <div className="relative bg-black py-16 px-4 overflow-hidden">
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f4a702]/10 via-transparent to-[#f4a702]/5"></div>
//         <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#f4a702] rounded-full opacity-10 blur-3xl animate-pulse"></div>
//         <div
//           className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </div>

//       {/* Geometric Network Pattern Overlay */}
//       <div className="absolute inset-0 opacity-5">
//         <svg width="100%" height="100%" className="absolute inset-0">
//           <defs>
//             <pattern
//               id="grid"
//               width="100"
//               height="100"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M 100 0 L 0 0 0 100"
//                 fill="none"
//                 stroke="#f4a702"
//                 strokeWidth="0.5"
//               />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Top Section - Heading & Navigation */}
//         <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
//           <div className="max-w-2xl">
//             <p className="text-[#f4a702] text-xs uppercase tracking-widest mb-3 font-semibold">
//               TESTIMONIALS
//             </p>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
//               Panda Love Praise!
//             </h2>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               We're not just about getting results; we're about making our
//               clients feel like rockstars. Don't take our word for it—hear from
//               the legends who've joined the{" "}
//               <span className="text-white font-semibold">Panda revolution</span>
//               .
//             </p>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={handlePrev}
//               className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-[#f4a702] hover:border-[#f4a702] transition-all duration-300 group"
//             >
//               <svg
//                 className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>
//             <button
//               onClick={handleNext}
//               className="w-11 h-11 rounded-full bg-[#f4a702] flex items-center justify-center hover:bg-[#d89002] transition-all duration-300 shadow-lg shadow-[#f4a702]/20"
//             >
//               <svg
//                 className="w-4 h-4 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Scrolling Testimonials Section */}
//         {/* Allow vertical overflow so the badge can pop outside without getting cut */}
//         <div className="relative overflow-x-hidden pt-8">
//           <div
//             className="flex gap-6 transition-transform duration-300 ease-linear"
//             style={{ transform: `translateX(-${scrollPosition}px)` }}
//           >
//             {duplicatedTestimonials.map((testimonial, index) => (
//               <div key={index} className="flex-shrink-0 w-[380px] group">
//                 <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-6 border border-zinc-800 hover:border-[#f4a702]/50 transition-all duration-300 h-[280px] flex flex-col">
//                   {/* Logo Badge — full circle, never clipped */}
//                   <div className="absolute -top-4 -right-4 z-20">
//                     <div className="w-20 h-20 rounded-full bg-white border-4 border-black shadow-xl overflow-hidden grid place-items-center transition-transform duration-300 group-hover:scale-110">
//                       <img
//                         src={testimonial.logo}
//                         alt={testimonial.company}
//                         className="w-full h-full rounded-full object-contain p-2"
//                         /* For photo avatars use: object-cover p-0 */
//                       />
//                     </div>
//                   </div>

//                   {/* Quote Icon */}
//                   <div className="mb-4">
//                     <svg
//                       className="w-8 h-8 text-[#f4a702] opacity-50"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
//                     </svg>
//                   </div>

//                   {/* Testimonial Text */}
//                   <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-6">
//                     {testimonial.text}
//                   </p>

//                   {/* Author Info */}
//                   <div className="pt-4 border-t border-zinc-800">
//                     <h3 className="text-white font-semibold text-base mb-0.5">
//                       {testimonial.name}
//                     </h3>
//                     <p className="text-gray-500 text-xs">
//                       {testimonial.company}
//                     </p>
//                   </div>

//                   {/* Hover Glow Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/0 to-[#f4a702]/0 group-hover:from-[#f4a702]/5 group-hover:to-transparent rounded-2xl transition-all duration-300 pointer-events-none"></div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Gradient Overlays for Smooth Edges */}
//           <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
//           <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
//         </div>

//         {/* Bottom Decorative Line */}
//         <div className="mt-12 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
//       </div>

//       <style>{`
//         .line-clamp-6 {
//           display: -webkit-box;
//           -webkit-line-clamp: 6;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Testimonials;

import React, { useState, useEffect } from "react";

function Testimonials() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const testimonials = [
    {
      name: "Candy Singh",
      company: "Magic Mushroom",
      logo: "/testimonials/magic-mushroom.png",
      text: "Superb, These guys are just superb when it comes to creating and executing new ideas. Digipanda consulting helped my company in designing and executing some very difficult ideas.",
    },
    {
      name: "Meiying Liang",
      company: "Phantom Pen",
      logo: "/testimonials/phantom-pen.png",
      text: "Digipanda has done a lot of web design and development work for us over the past six years. The design team is very patient they are willing to work with clients by building relationships.",
    },
    {
      name: "John Doe",
      company: "Tech Solutions",
      logo: "/testimonials/tech-solutions.png",
      text: "Working with Digipanda has been an absolute pleasure. Their attention to detail and commitment to delivering quality work is unmatched.",
    },
    {
      name: "Sarah Johnson",
      company: "Creative Studio",
      logo: "/testimonials/creative-studio.png",
      text: "The team at Digipanda exceeded all our expectations. From the initial consultation to the final delivery, everything was handled professionally.",
    },
    {
      name: "Michael Chen",
      company: "Digital Ventures",
      logo: "/testimonials/digital-ventures.png",
      text: "Outstanding service and incredible results. The Digipanda team brought our vision to life beyond what we imagined possible.",
    },
    {
      name: "Emma Wilson",
      company: "Brand Factory",
      logo: "/testimonials/brand-factory.png",
      text: "Professional, creative, and always delivering on time. Working with Digipanda has transformed our digital presence completely.",
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        // Responsive card width
        const cardWidth =
          window.innerWidth < 640 ? 320 : window.innerWidth < 1024 ? 350 : 400;
        const maxScroll = testimonials.length * cardWidth;
        if (prev >= maxScroll) return 0;
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [testimonials.length]);

  const handlePrev = () => {
    const cardWidth =
      window.innerWidth < 640 ? 320 : window.innerWidth < 1024 ? 350 : 400;
    setScrollPosition((prev) => Math.max(0, prev - cardWidth));
  };

  const handleNext = () => {
    const cardWidth =
      window.innerWidth < 640 ? 320 : window.innerWidth < 1024 ? 350 : 400;
    setScrollPosition((prev) => prev + cardWidth);
  };

  return (
    <div className="relative bg-black py-12 sm:py-16 px-4 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f4a702]/10 via-transparent to-[#f4a702]/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#f4a702] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Geometric Network Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="#f4a702"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section - Heading & Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 px-2 sm:px-0">
          <div className="max-w-2xl">
            <p className="text-[#f4a702] text-xs uppercase tracking-widest mb-2 sm:mb-3 font-semibold">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Brandmingo Love Praise!
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We're not just about getting results; we're about making our
              clients feel like rockstars. Don't take our word for it—hear from
              the legends who've joined the{" "}
              <span className="text-white font-semibold">
                Brandmingo revolution
              </span>
              .
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-[#f4a702] hover:border-[#f4a702] transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f4a702] flex items-center justify-center hover:bg-[#d89002] transition-all duration-300 shadow-lg shadow-[#f4a702]/20"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrolling Testimonials Section */}
        <div className="relative overflow-x-hidden pt-6 sm:pt-8">
          <div
            className="flex gap-4 sm:gap-5 lg:gap-6 transition-transform duration-300 ease-linear"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] sm:w-[330px] lg:w-[380px] group"
              >
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-5 sm:p-6 border border-zinc-800 hover:border-[#f4a702]/50 transition-all duration-300 h-[260px] sm:h-[280px] flex flex-col">
                  {/* Logo Badge */}
                  <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 z-20">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-4 border-black shadow-xl overflow-hidden grid place-items-center transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="w-full h-full rounded-full object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="mb-3 sm:mb-4">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-[#f4a702] opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-6">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="pt-3 sm:pt-4 border-t border-zinc-800">
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-0.5">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/0 to-[#f4a702]/0 group-hover:from-[#f4a702]/5 group-hover:to-transparent rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-8 sm:mt-12 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      </div>

      <style>{`
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;
