// import React from "react";

// function Partners() {
//   const partners = [
//     {
//       image: "/src/assets/images/Partners/Shopify-agency.png",
//       alt: "Shopify Partner",
//     },
//     {
//       image: "/src/assets/images/Partners/partner3.png",
//       alt: "Meta Business Partner",
//     },
//     {
//       image: "/src/assets/images/Partners/Google-Partner-Logo.png",
//       alt: "Google Partner",
//     },
//   ];

//   return (
//     <div className="relative py-20 px-4 overflow-hidden bg-black">
//       {/* Grid pattern background */}
//       <div className="absolute inset-0 opacity-20">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(120, 120, 120, 0.3) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(120, 120, 120, 0.3) 1px, transparent 1px)
//             `,
//             backgroundSize: "40px 40px",
//           }}
//         ></div>
//       </div>

//       {/* Orange glow (left side) */}
//       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[150px]"></div>

//       {/* Blue glow (right side) */}
//       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]"></div>

//       {/* Center subtle glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main Grid Container */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Title */}
//           <div className="text-left">
//             <h3 className="text-2xl md:text-3xl font-light text-gray-300 mb-3 tracking-wide">
//               Authorized
//             </h3>
//             <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
//               Partners
//             </h2>
//             <p className="mt-6 text-gray-400 text-lg leading-relaxed">
//               Trusted collaborations with industry leaders to deliver
//               exceptional digital experiences.
//             </p>
//           </div>

//           {/* Right Side - Partners Logos */}
//           <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
//             {partners.map((partner, index) => (
//               <div
//                 key={index}
//                 className="group relative flex-1 min-w-[150px] max-w-[250px]"
//               >
//                 {/* Outer glow effect */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-blue-500/0 group-hover:from-orange-500/50 group-hover:via-orange-400/30 group-hover:to-blue-500/50 rounded-2xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

//                 {/* Card Container */}
//                 <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 transition-all duration-500 group-hover:border-orange-500/50 group-hover:shadow-[0_0_40px_rgba(243,146,0,0.15)] cursor-pointer overflow-hidden">
//                   {/* Inner gradient glow */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-blue-500/0 group-hover:from-orange-500/5 group-hover:to-blue-500/5 transition-all duration-700 rounded-2xl"></div>

//                   {/* Logo Image */}
//                   <div className="relative flex items-center justify-center h-16">
//                     <img
//                       src={partner.image}
//                       alt={partner.alt}
//                       className="max-h-full w-auto object-contain filter brightness-0 invert transition-all duration-500 group-hover:scale-110 group-hover:brightness-100 group-hover:invert-0 group-hover:drop-shadow-[0_0_8px_rgba(243,146,0,0.5)]"
//                     />
//                   </div>

//                   {/* Bottom decorative line */}
//                   <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 group-hover:w-full transition-all duration-700"></div>

//                   {/* Corner accent animation */}
//                   <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Partners;

// import React from "react";

// function Partners() {
//   const partners = [
//     {
//       image: "/src/assets/images/Partners/Shopify-agency.png",
//       alt: "Shopify Partner",
//     },
//     {
//       image: "/src/assets/images/Partners/partner3.png",
//       alt: "Meta Business Partner",
//     },
//     {
//       image: "/src/assets/images/Partners/Google-Partner-Logo.png",
//       alt: "Google Partner",
//     },
//   ];

//   return (
//     <div className="relative py-20 px-4 overflow-hidden bg-black">
//       {/* Orange glow (left side) */}
//       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[150px]"></div>

//       {/* Black glow (right side) */}
//       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[150px]"></div>

//       {/* Center subtle glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main Grid Container */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Title */}
//           <div className="text-left">
//             <h3 className="text-2xl md:text-3xl font-light text-gray-300 mb-3 tracking-wide">
//               Authorized
//             </h3>
//             <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
//               Partners
//             </h2>
//             <p className="mt-6 text-gray-400 text-lg leading-relaxed">
//               Trusted collaborations with industry leaders to deliver
//               exceptional digital experiences.
//             </p>
//           </div>

//           {/* Right Side - Partners Logos */}
//           <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
//             {partners.map((partner, index) => (
//               <div
//                 key={index}
//                 className="group relative flex-1 min-w-[150px] max-w-[250px]"
//               >
//                 {/* Outer glow effect */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/50 group-hover:via-orange-400/30 group-hover:to-orange-500/50 rounded-2xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

//                 {/* Card Container */}
//                 <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 transition-all duration-500 group-hover:border-orange-500/50 group-hover:shadow-[0_0_40px_rgba(243,146,0,0.15)] cursor-pointer overflow-hidden">
//                   {/* Inner gradient glow */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-black/0 group-hover:from-orange-500/5 group-hover:to-black/5 transition-all duration-700 rounded-2xl"></div>

//                   {/* Logo Image */}
//                   <div className="relative flex items-center justify-center h-16">
//                     <img
//                       src={partner.image}
//                       alt={partner.alt}
//                       className="max-h-full w-auto object-contain filter brightness-0 invert transition-all duration-500 group-hover:scale-110 group-hover:brightness-100 group-hover:invert-0 group-hover:drop-shadow-[0_0_8px_rgba(243,146,0,0.5)]"
//                     />
//                   </div>

//                   {/* Bottom decorative line */}
//                   <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-700"></div>

//                   {/* Corner accent animation */}
//                   <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Partners;

// import React from "react";

// function Partners() {
//   const partners = [
//     {
//       image: "/src/assets/images/Partners/Shopify-agency.png",
//       alt: "Shopify Partner",
//     },
//     {
//       image: "/src/assets/images/Partners/partner3.png",
//       alt: "Meta Business Partner",
//     },
//     {
//       image: "/src/assets/images/Partners/Google-Partner-Logo.png",
//       alt: "Google Partner",
//     },
//   ];

//   return (
//     <div className="relative py-20 px-4 overflow-hidden bg-black">
//       {/* Animated gradient background layers */}
//       <div className="absolute inset-0">
//         {/* Main diagonal gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black opacity-90"></div>

//         {/* Orange glow - top left */}
//         <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-radial from-orange-500/25 via-orange-600/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

//         {/* Orange glow - bottom right */}
//         <div
//           className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-radial from-orange-600/20 via-orange-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow"
//           style={{ animationDelay: "2s" }}
//         ></div>

//         {/* Accent glow - center */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-2xl"></div>

//         {/* Subtle noise texture */}
//         <div
//           className="absolute inset-0 opacity-[0.015]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
//             backgroundSize: "200px 200px",
//           }}
//         ></div>

//         {/* Radial vignette */}
//         <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main Grid Container */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Title */}
//           <div className="text-left space-y-6">
//             <div className="inline-block">
//               <h3 className="text-2xl md:text-3xl font-light text-gray-400 mb-3 tracking-wider uppercase">
//                 Authorized
//               </h3>
//               <div className="h-[2px] w-20 bg-gradient-to-r from-orange-500 to-transparent"></div>
//             </div>

//             <h2 className="text-5xl md:text-7xl font-bold tracking-tight relative">
//               <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
//                 Partners
//               </span>
//               <div className="absolute -bottom-2 left-0 h-1 w-32 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent blur-sm"></div>
//             </h2>

//             <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
//               Trusted collaborations with industry leaders to deliver
//               exceptional digital experiences.
//             </p>

//             {/* Decorative element */}
//             <div className="flex items-center gap-3 pt-4">
//               <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></div>
//               <div className="w-2 h-2 rounded-full bg-orange-500"></div>
//               <div className="h-[1px] w-16 bg-gradient-to-r from-orange-500 to-transparent"></div>
//             </div>
//           </div>

//           {/* Right Side - Partners Logos */}
//           <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
//             {partners.map((partner, index) => (
//               <div
//                 key={index}
//                 className="group relative flex-1 min-w-[150px] max-w-[250px]"
//               >
//                 {/* Animated outer glow ring */}
//                 <div className="absolute -inset-[2px] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-700 group-hover:animate-spin-slow"></div>

//                 {/* Secondary glow */}
//                 <div className="absolute -inset-4 bg-gradient-radial from-orange-500/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>

//                 {/* Card Container */}
//                 <div className="relative bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-950/90 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 transition-all duration-500 group-hover:border-orange-500/70 cursor-pointer overflow-hidden shadow-2xl">
//                   {/* Shine effect on hover */}
//                   <div
//                     className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full"
//                     style={{
//                       transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
//                     }}
//                   ></div>

//                   {/* Inner gradient atmosphere */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/5 transition-all duration-700 rounded-2xl"></div>

//                   {/* Corner accents */}
//                   <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-orange-500/0 group-hover:border-orange-500/50 rounded-tl-2xl transition-all duration-500"></div>
//                   <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-orange-500/0 group-hover:border-orange-500/50 rounded-br-2xl transition-all duration-500"></div>

//                   {/* Logo Image */}
//                   <div className="relative flex items-center justify-center h-16">
//                     <img
//                       src={partner.image}
//                       alt={partner.alt}
//                       className="max-h-full w-auto object-contain filter brightness-0 invert opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_20px_rgba(243,146,0,0.6)]"
//                     />
//                   </div>

//                   {/* Bottom animated line */}
//                   <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 group-hover:w-full transition-all duration-1000 shadow-[0_0_10px_rgba(243,146,0,0.8)]"></div>

//                   {/* Particle effect */}
//                   <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse-slow {
//           0%, 100% {
//             opacity: 0.25;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.15;
//             transform: scale(1.05);
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 6s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }

//         .bg-gradient-radial {
//           background: radial-gradient(circle, var(--tw-gradient-stops));
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Partners;

// import React from "react";

// function Partners() {
//   const partners = [
//     {
//       image: "/src/assets/images/Partners/Shopify-agency.png",
//       alt: "Shopify Partner",
//     },
//     {
//       image: "/src/assets/images/Partners/partner3.png",
//       alt: "Meta Business Partner",
//     },
//     {
//       image: "/src/assets/images/Partners/Google-Partner-Logo.png",
//       alt: "Google Partner",
//     },
//   ];

//   return (
//     <div className="relative bg-black py-20 px-4 overflow-hidden">
//       {/* Background gradient effects */}
//       {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl"></div> */}

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main Grid Container */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Title */}
//           <div className="text-left">
//             <h3 className="text-2xl md:text-3xl font-light text-gray-300 mb-3 tracking-wide">
//               Authorized
//             </h3>
//             <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
//               Partners
//             </h2>
//             <p className="mt-6 text-gray-400 text-lg leading-relaxed">
//               Trusted collaborations with industry leaders to deliver
//               exceptional digital experiences.
//             </p>
//           </div>

//           {/* Right Side - Partners Logos (Horizontal in one line) */}
//           <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
//             {partners.map((partner, index) => (
//               <div
//                 key={index}
//                 className="group relative flex-1 min-w-[150px] max-w-[250px]"
//               >
//                 {/* Card Container */}
//                 <div className="relative bg-zinc-900 rounded-2xl p-6 border-2 border-zinc-800 transition-all duration-500 hover:border-orange-500 cursor-pointer overflow-hidden">
//                   {/* Orange glow effect on hover */}
//                   <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>

//                   {/* Animated orange border glow */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
//                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
//                   </div>

//                   {/* Logo Image */}
//                   <div className="relative flex items-center justify-center h-16">
//                     <img
//                       src={partner.image}
//                       alt={partner.alt}
//                       className="max-h-full w-auto object-contain filter brightness-0 invert transition-all duration-500 group-hover:scale-110 group-hover:brightness-100 group-hover:invert-0"
//                     />

//                     {/* Orange overlay on image hover */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   </div>

//                   {/* Bottom decorative line */}
//                   <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-700"></div>

//                   {/* Corner accent animation */}
//                   <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Partners;

import React from "react";
import gradientBg from "/src/assets/images/Home/home-5.png";

function Partners() {
  const partners = [
    {
      image: "/src/assets/images/Partners/Shopify-agency.png",
      alt: "Shopify Partner",
    },
    {
      image: "/src/assets/images/Partners/partner3.png",
      alt: "Meta Business Partner",
    },
    {
      image: "/src/assets/images/Partners/Google-Partner-Logo.png",
      alt: "Google Partner",
    },
  ];

  return (
    <div
      className="relative py-20 px-4 overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${gradientBg})` }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-wide">
              Authorized
            </h3>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Partners
            </h2>
            <p className="mt-6 text-white text-lg leading-relaxed">
              Trusted collaborations with industry leaders to deliver
              exceptional digital experiences.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative flex-1 min-w-[150px] max-w-[250px]"
              >
                <div className="relative bg-zinc-900 rounded-2xl p-6 border-2 border-zinc-800 transition-all duration-500 hover:border-orange-500 cursor-pointer overflow-hidden">
                  {/* REMOVED orange bg glow overlay */}
                  {/* REMOVED orange image overlay */}

                  {/* Logo */}
                  <div className="relative flex items-center justify-center h-16">
                    <img
                      src={partner.image}
                      alt={partner.alt}
                      className="max-h-full w-auto object-contain filter brightness-0 invert transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Keep subtle decorations if you like */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-700"></div>
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
