// import React from "react";

// export default function WhatWeDo() {
//   const ACCENT = "#f59e0b"; // change to your brand color

//   const SERVICES = [
//     {
//       title: "Branding and Identity Design",
//       desc: "Distinctive identity systems, guidelines, and conversion-focused creatives that build recall across touchpoints.",
//       href: "/services/branding",
//     },
//     {
//       title: "Website Design and Development",
//       desc: "Fast, secure, SEO-ready websites and storefronts engineered for performance, accessibility, and real business goals.",
//       href: "/services/web",
//     },
//     {
//       title: "Advertising & Marketing Campaigns",
//       desc: "Search, social, and display with sharp targeting, strong creatives, and rigorous measurement for ROI.",
//       href: "/services/marketing",
//     },
//     {
//       title: "Creative Consulting & Development",
//       desc: "Strategy × design × code to audit, plan, and ship high-impact enhancements across your customer journey.",
//       href: "/services/consulting",
//     },
//   ];

//   return (
//     <section id="what-we-do" className="relative bg-black text-white">
//       <div
//         className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-20"
//         style={{ ["--accent"]: ACCENT }}
//       >
//         {/* Eyebrow with thin border */}
//         <div className="mb-8 flex items-center justify-center gap-6">
//           <div className="rounded-full border border-white/20 px-4 py-1 text-sm text-white/80">
//             Professionals focused on helping your brand grow and move forward.
//           </div>
//           <div className="hidden h-px flex-1 bg-white/15 md:block" />
//         </div>

//         {/* Heading + CTA (CTA scrolls to grid) */}
//         <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
//           <h2 className="font-medium leading-tight text-[34px] sm:text-[46px] md:text-[56px]">
//             <span className="font-semibold">Unique</span> Ideas
//             <span className="block md:inline"> For Your </span>
//             <span className="font-light">Business.</span>
//           </h2>

//           <a
//             href="#what-we-do-grid"
//             className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black"
//           >
//             WHAT WE DO
//             <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white transition-transform group-hover:translate-x-0.5">
//               <svg
//                 viewBox="0 0 24 24"
//                 className="h-5 w-5"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M5 12h14M13 5l7 7-7 7" />
//               </svg>
//             </span>
//           </a>
//         </div>

//         {/* Services Grid (hover to reveal) */}
//         <div
//           id="what-we-do-grid"
//           className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:gap-7 md:grid-cols-2 xl:grid-cols-4"
//         >
//           {SERVICES.map((s, i) => (
//             <div
//               key={i}
//               className="group relative border border-white/10 p-6 transition-colors hover:border-white/20"
//             >
//               {/* top accent line */}
//               <span className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />

//               {/* Title (always visible) */}
//               <h3 className="pr-12 text-lg font-semibold leading-snug sm:text-xl">
//                 {s.title}
//               </h3>

//               {/* Closed state dot */}
//               <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center opacity-100 transition-opacity group-hover:opacity-0">
//                 <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
//               </div>

//               {/* Reveal on hover: description + arrow-only button */}
//               <div className="mt-4 grid gap-4 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//                 <p className="text-sm text-white/70">{s.desc}</p>

//                 {/* Arrow-only button */}
//                 <a
//                   href={s.href}
//                   className="relative inline-grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-all hover:bg-[var(--accent)] hover:text-black"
//                   aria-label={`Explore ${s.title}`}
//                 >
//                   <svg
//                     viewBox="0 0 24 24"
//                     className="h-5 w-5"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M5 12h14M13 5l7 7-7 7" />
//                   </svg>
//                   <span className="sr-only">Explore service</span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* optional decorative corners */}
//       <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 border-white/10 md:h-52 md:w-52" />
//       <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 border-white/10 md:h-52 md:w-52" />
//     </section>
//   );
// }

// import React from "react";

// export default function WhatWeDo() {
//   const ACCENT = "#f4a702"; // brand color

//   const SERVICES = [
//     {
//       title: "360° Marketing",
//       desc: "Build a connected growth engine across every channel. We plan and run SEO, paid ads, social, content, email/automation, and CRO as one strategy—so creative, targeting, and measurement all work together to drive ROI",
//       href: "/services/branding",
//     },
//     {
//       title: "Web Development",
//       desc: "Fast, secure, and SEO-ready websites that convert. From landing pages and corporate sites to headless CMS and eCommerce, we ship responsive UI, clean code, strong performance scores, and accessibility by default",
//       href: "/services/web",
//     },
//     {
//       title: "Market Place Management",
//       desc: "Launch and scale your brand on leading marketplaces. We handle catalog & listing optimisation, A+ content, storefront design, ads (PPC), promotions, inventory hygiene, and review strategy—with dashboards that track sales and share of voice",
//       href: "/services/marketing",
//     },
//     {
//       title: "Graphic Design",
//       desc: "Distinctive visuals that people remember. We craft brand identity, social & campaign creatives, pitch decks, print collateral, packaging, and motion graphics—all consistent with your voice and built to perform across platforms",
//       href: "/services/consulting",
//     },
//   ];

//   return (
//     <section
//       id="what-we-do"
//       className="relative bg-black text-white overflow-hidden"
//     >
//       {/* Animated background elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4a702]/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f4a702]/5 rounded-full blur-3xl"></div>

//       <div
//         className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-20 relative z-10"
//         style={{ ["--accent"]: ACCENT }}
//       >
//         {/* Eyebrow */}
//         <div className="mb-8 flex items-center gap-6">
//           <div className="rounded-full border border-white/20 px-4 py-1 text-sm text-white/80 backdrop-blur-sm bg-white/5">
//             Experts in 360° marketing, web, marketplace, and design that drive
//             growth
//           </div>
//           <div className="hidden h-px flex-1 bg-gradient-to-r from-white/15 to-transparent md:block" />
//         </div>

//         {/* Heading area */}
//         <div className="space-y-2">
//           {/* Row 1: chip + "Services That Power" */}
//           <div className="flex items-center gap-4">
//             <img
//               src="/src/assets/images/2.jpg"
//               alt="Team brainstorming"
//               className="h-12 w-28 rounded-full object-cover ring-2 ring-[#f4a702]/30 shadow-lg shadow-[#f4a702]/20 md:h-14 md:w-36 lg:h-16 lg:w-40"
//             />
//             <h2 className="m-0 p-0 text-left font-medium leading-tight tracking-tight text-[34px] sm:text-[46px] md:text-[56px]">
//               <span className="font-semibold">Services </span>That Power
//             </h2>
//           </div>

//           {/* Row 2: left text + right CTA */}
//           <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[auto_1fr_auto]">
//             <h2 className="m-0 p-0 text-left font-medium leading-tight tracking-tight text-[34px] sm:text-[46px] md:text-[56px]">
//               <span className="font-semibold">Brand </span>{" "}
//               <span className="font-light">Growth.</span>
//             </h2>
//             <div className="hidden md:block" />
//             <a
//               href="#what-we-do-grid"
//               className="justify-self-start md:justify-self-end group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:shadow-[#f4a702]/50 transition-all hover:scale-105"
//               style={{ backgroundColor: ACCENT, color: "#111" }}
//             >
//               Our Services
//               <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1">
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-5 w-5"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M5 12h14M13 5l7 7-7 7" />
//                 </svg>
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* Services Grid */}
//         <div
//           id="what-we-do-grid"
//           className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:gap-7 md:grid-cols-2 xl:grid-cols-4"
//         >
//           {SERVICES.map((s, i) => (
//             <div
//               key={i}
//               className="group relative border border-[#f4a702]/40 bg-white/[0.01] p-6 text-left transition-all duration-500 hover:border-[#f4a702] hover:bg-white/[0.02] backdrop-blur-sm rounded-lg"
//             >
//               {/* Animated top accent line */}
//               <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#f4a702] to-orange-600 transition-all duration-500 group-hover:w-full rounded-t-lg" />

//               {/* Corner glow effect */}
//               <div className="absolute top-0 right-0 w-20 h-20 bg-[#f4a702]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Title */}
//               <h3 className="pr-12 text-lg font-semibold leading-snug sm:text-xl mb-4 group-hover:text-[#f4a702] transition-colors duration-300">
//                 {s.title}
//               </h3>

//               {/* Dot indicator */}
//               <div className="pointer-events-none flex justify-center opacity-100 transition-opacity group-hover:opacity-0 my-4">
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#f4a702]/50 animate-pulse" />
//               </div>

//               {/* Content reveal on hover */}
//               <div className="grid gap-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-96 group-hover:opacity-100">
//                 <p className="text-sm text-white/70 leading-relaxed">
//                   {s.desc}
//                 </p>

//                 {/* See Portfolio button with text */}
//                 <a
//                   href={s.href}
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-[#f4a702] hover:text-white group/btn transition-colors"
//                   aria-label={`See ${s.title} Portfolio`}
//                 >
//                   <span>See Portfolio</span>
//                   <span className="grid h-8 w-8 place-items-center rounded-full border border-[#f4a702]/30 transition-all group-hover/btn:bg-[#f4a702] group-hover/btn:border-[#f4a702] group-hover/btn:text-black">
//                     <svg
//                       viewBox="0 0 24 24"
//                       className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M5 12h14M13 5l7 7-7 7" />
//                     </svg>
//                   </span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Decorative corner accents */}
//       <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 border-l border-t border-white/5 rounded-tl-3xl md:h-52 md:w-52" />
//       <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 border-r border-t border-white/5 rounded-tr-3xl md:h-52 md:w-52" />
//     </section>
//   );
// }

import React from "react";

export default function WhatWeDo() {
  const ACCENT = "#f4a702"; // brand color

  const SERVICES = [
    {
      title: "360° Marketing",
      desc: "Build a connected growth engine across every channel. We plan and run SEO, paid ads, social, content, email/automation, and CRO as one strategy—so creative, targeting, and measurement all work together to drive ROI",
      href: "/services/branding",
    },
    {
      title: "Web Development",
      desc: "Fast, secure, and SEO-ready websites that convert. From landing pages and corporate sites to headless CMS and eCommerce, we ship responsive UI, clean code, strong performance scores, and accessibility by default",
      href: "/services/web",
    },
    {
      title: "Market Place Management",
      desc: "Launch and scale your brand on leading marketplaces. We handle catalog & listing optimisation, A+ content, storefront design, ads (PPC), promotions, inventory hygiene, and review strategy—with dashboards that track sales and share of voice",
      href: "/services/marketing",
    },
    {
      title: "Graphic Design",
      desc: "Distinctive visuals that people remember. We craft brand identity, social & campaign creatives, pitch decks, print collateral, packaging, and motion graphics—all consistent with your voice and built to perform across platforms",
      href: "/services/consulting",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4a702]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f4a702]/5 rounded-full blur-3xl"></div>

      <div
        className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-20 relative z-10"
        style={{ ["--accent"]: ACCENT }}
      >
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-6">
          <div className="rounded-full border border-white/20 px-4 py-1 text-sm text-white/80 backdrop-blur-sm bg-white/5">
            Experts in 360° marketing, web, marketplace, and design that drive
            growth
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-white/15 to-transparent md:block" />
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/images/2.jpg"
              alt="Team brainstorming"
              className="h-12 w-28 rounded-full object-cover ring-2 ring-[#f4a702]/30 shadow-lg shadow-[#f4a702]/20 md:h-14 md:w-36 lg:h-16 lg:w-40"
            />
            <h2 className="m-0 p-0 text-left font-medium leading-tight tracking-tight text-[34px] sm:text-[46px] md:text-[56px]">
              <span className="font-semibold">Services </span>That Power
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[auto_1fr_auto]">
            <h2 className="m-0 p-0 text-left font-medium leading-tight tracking-tight text-[34px] sm:text-[46px] md:text-[56px]">
              <span className="font-semibold">Brand </span>{" "}
              <span className="font-light">Growth.</span>
            </h2>
            <div className="hidden md:block" />
            <a
              href="#what-we-do-grid"
              className="justify-self-start md:justify-self-end group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:shadow-[#f4a702]/50 transition-all hover:scale-105"
              style={{ backgroundColor: ACCENT, color: "#111" }}
            >
              Our Services
              <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div
          id="what-we-do-grid"
          className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:gap-7 md:grid-cols-2 xl:grid-cols-4"
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="relative border border-white/30 hover:border-[#f4a702] bg-white/[0.02] p-6 text-left transition-all duration-500 backdrop-blur-sm rounded-lg"
            >
              {/* Top accent line */}
              <span className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-white/40 to-white/5 group-hover:from-[#f4a702] group-hover:to-orange-600 rounded-t-lg transition-colors duration-500" />

              {/* Title */}
              <h3 className="pr-12 text-lg font-semibold leading-snug sm:text-xl mb-4 text-[#f4a702]">
                {s.title}
              </h3>

              {/* Content (always visible) */}
              <div className="grid gap-4">
                <p className="text-sm text-white/70 leading-relaxed">
                  {s.desc}
                </p>

                <a
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#f4a702] hover:text-white transition-colors"
                >
                  <span>See Portfolio</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30 hover:border-[#f4a702] transition-all hover:bg-[#f4a702] hover:text-black">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corners */}
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 border-l border-t border-white/5 rounded-tl-3xl md:h-52 md:w-52" />
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 border-r border-t border-white/5 rounded-tr-3xl md:h-52 md:w-52" />
    </section>
  );
}
