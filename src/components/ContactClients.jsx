// import React, { useState } from "react";

// function ContactClients() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     companyName: "",
//     phone: "",
//     email: "",
//     project: "",
//   });

//   const clients = [
//     { name: "1", logo: "/src/assets/images/ClientLogos/1.png" },
//     { name: "2", logo: "/src/assets/images/ClientLogos/2.png" },
//     { name: "3", logo: "/src/assets/images/ClientLogos/3.png" },
//     { name: "4", logo: "/src/assets/images/ClientLogos/4.png" },
//     { name: "5", logo: "/src/assets/images/ClientLogos/5.png" },
//     { name: "6", logo: "/src/assets/images/ClientLogos/6.png" },
//     { name: "7", logo: "/src/assets/images/ClientLogos/7.png" },
//     { name: "8", logo: "/src/assets/images/ClientLogos/8.png" },
//     { name: "9", logo: "/src/assets/images/ClientLogos/9.png" },
//     { name: "10", logo: "/src/assets/images/ClientLogos/10.png" },
//     { name: "11", logo: "/src/assets/images/ClientLogos/11.png" },
//     { name: "12", logo: "/src/assets/images/ClientLogos/12.png" },
//     { name: "13", logo: "/src/assets/images/ClientLogos/13.png" },
//     { name: "14", logo: "/src/assets/images/ClientLogos/14.png" },
//     { name: "15", logo: "/src/assets/images/ClientLogos/15.png" },
//     { name: "16", logo: "/src/assets/images/ClientLogos/16.png" },
//     { name: "17", logo: "/src/assets/images/ClientLogos/17.png" },
//     { name: "18", logo: "/src/assets/images/ClientLogos/18.png" },
//     { name: "19", logo: "/src/assets/images/ClientLogos/19.png" },
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="relative min-h-screen bg-black py-16 px-4 overflow-hidden">
//       {/* Background gradient effects */}
//       <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#f4a702] rounded-full opacity-5 blur-3xl"></div>
//       <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#f4a702] rounded-full opacity-5 blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
//             Let's Create 🚀
//           </h2>
//           <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
//             Greatness Together!
//           </h3>
//         </div>

//         {/* Main Container - Single Row */}
//         <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Left Side - Contact Form */}
//             <div>
//               <h4 className="text-2xl md:text-3xl font-bold text-white mb-8">
//                 Discuss Your Project With Us
//               </h4>

//               <div className="space-y-5">
//                 {/* Full Name & Company Name */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Full Name *"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className="w-full bg-black border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
//                   />
//                   <input
//                     type="text"
//                     name="companyName"
//                     placeholder="Company Name *"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                     className="w-full bg-black border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
//                   />
//                 </div>

//                 {/* Phone & Email */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="relative">
//                     <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
//                       <span className="text-xl">🇮🇳</span>
//                       <span className="text-gray-400 text-sm">+91</span>
//                     </div>
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder=""
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full bg-black border border-white/20 rounded-full pl-20 pr-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
//                     />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email *"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full bg-black border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
//                   />
//                 </div>

//                 {/* Project Description */}
//                 <textarea
//                   name="project"
//                   placeholder="About Your Project *"
//                   value={formData.project}
//                   onChange={handleChange}
//                   rows={3}
//                   className="w-full bg-black border border-white/20 rounded-3xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300 resize-none"
//                 ></textarea>

//                 {/* Privacy Policy */}
//                 <p className="text-xs text-gray-400 leading-relaxed">
//                   By sending this form, I confirm that I have read & accept the{" "}
//                   <a
//                     href="#"
//                     className="text-white underline hover:text-[#f4a702] transition-colors"
//                   >
//                     privacy policy
//                   </a>
//                   .
//                 </p>

//                 {/* Submit Button */}
//                 <button
//                   onClick={handleSubmit}
//                   className="group relative bg-white text-black font-semibold px-8 py-3.5 rounded-full flex items-center gap-3 hover:bg-[#f4a702] hover:text-white transition-all duration-300 overflow-hidden"
//                 >
//                   <span className="relative z-10">Send A Message</span>
//                   <svg
//                     className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 7l5 5m0 0l-5 5m5-5H6"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Right Side - Clients Section with Scrollbar */}
//             <div className="flex flex-col">
//               <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
//                 Driven by Trust, Backed by Results
//               </h4>
//               <p className="text-gray-400 mb-6 text-sm">
//                 Our work speaks through the trust placed in us by top names
//                 across the globe.
//               </p>

//               {/* Scrollable Clients Grid */}
//               <div className="flex-1 overflow-hidden relative max-h-[400px]">
//                 <div className="absolute inset-0 overflow-y-auto custom-scrollbar pr-2">
//                   <div className="grid grid-cols-4 gap-3 pb-4">
//                     {clients.map((client, index) => (
//                       <div
//                         key={index}
//                         // bg-black/50
//                         className="group relative bg-white backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-[#f4a702]/50 transition-all duration-300 aspect-square flex items-center justify-center cursor-pointer hover:bg-white"
//                       >
//                         <img
//                           src={client.logo}
//                           alt={client.name}
//                           className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:scale-105"
//                         />
//                         <div className="absolute inset-0 bg-[#f4a702] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Scroll Gradient Overlays */}
//                 <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
//                 <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(244, 167, 2, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #f4a702;
//         }

//         input::placeholder,
//         textarea::placeholder {
//           color: #9ca3af;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ContactClients;

// import React, { useState } from "react";

// function ContactClients() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     companyName: "",
//     phone: "",
//     email: "",
//     project: "",
//   });

//   const clients = [
//     { name: "1", logo: "/src/assets/images/ClientLogos/1.png" },
//     { name: "2", logo: "/src/assets/images/ClientLogos/2.png" },
//     { name: "3", logo: "/src/assets/images/ClientLogos/3.png" },
//     { name: "4", logo: "/src/assets/images/ClientLogos/4.png" },
//     { name: "5", logo: "/src/assets/images/ClientLogos/5.png" },
//     { name: "6", logo: "/src/assets/images/ClientLogos/6.png" },
//     { name: "7", logo: "/src/assets/images/ClientLogos/7.png" },
//     { name: "8", logo: "/src/assets/images/ClientLogos/8.png" },
//     { name: "9", logo: "/src/assets/images/ClientLogos/9.png" },
//     { name: "10", logo: "/src/assets/images/ClientLogos/10.png" },
//     { name: "11", logo: "/src/assets/images/ClientLogos/11.png" },
//     { name: "12", logo: "/src/assets/images/ClientLogos/12.png" },
//     { name: "13", logo: "/src/assets/images/ClientLogos/13.png" },
//     { name: "14", logo: "/src/assets/images/ClientLogos/14.png" },
//     { name: "15", logo: "/src/assets/images/ClientLogos/15.png" },
//     { name: "16", logo: "/src/assets/images/ClientLogos/16.png" },
//     { name: "17", logo: "/src/assets/images/ClientLogos/17.png" },
//     { name: "18", logo: "/src/assets/images/ClientLogos/18.png" },
//     { name: "19", logo: "/src/assets/images/ClientLogos/19.png" },
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="relative min-h-screen bg-black py-16 px-4 overflow-hidden">
//       {/* Background gradient effects */}
//       <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#f4a702] rounded-full opacity-5 blur-3xl"></div>
//       <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#f4a702] rounded-full opacity-5 blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main Heading */}
//         <div className="text-center mb-12">
//           <div className="flex items-start justify-center gap-3 sm:gap-4 md:gap-6 mb-2 flex-wrap">
//             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
//               Let's Create
//             </h2>
//             <span className="inline-block mt-1 sm:mt-2 md:mt-3">
//               <div className="loader-icon"></div>
//             </span>
//           </div>
//           <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
//             Greatness Together!
//           </h3>
//         </div>

//         {/* Main Container - Single Row */}
//         <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//             {/* Left Side - Contact Form */}
//             <div>
//               <h4 className="text-2xl md:text-3xl font-bold text-white mb-8">
//                 Discuss Your Project With Us
//               </h4>

//               <div className="space-y-5">
//                 {/* Full Name & Company Name */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Full Name *"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className="w-full bg-black border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
//                   />
//                   <input
//                     type="text"
//                     name="companyName"
//                     placeholder="Company Name *"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                     className="w-full bg-black border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
//                   />
//                 </div>

//                 {/* Phone & Email */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="relative">
//                     <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
//                       <span className="text-xl">🇮🇳</span>
//                       <span className="text-gray-400 text-sm">+91</span>
//                     </div>
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder=""
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full bg-black border border-white/20 rounded-full pl-20 pr-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
//                     />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email *"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full bg-black border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
//                   />
//                 </div>

//                 {/* Project Description */}
//                 <textarea
//                   name="project"
//                   placeholder="About Your Project *"
//                   value={formData.project}
//                   onChange={handleChange}
//                   rows={3}
//                   className="w-full bg-black border border-white/20 rounded-3xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300 resize-none"
//                 ></textarea>

//                 {/* Privacy Policy */}
//                 <p className="text-xs text-gray-400 leading-relaxed">
//                   By sending this form, I confirm that I have read & accept the{" "}
//                   <a
//                     href="#"
//                     className="text-white underline hover:text-[#f4a702] transition-colors"
//                   >
//                     privacy policy
//                   </a>
//                   .
//                 </p>

//                 {/* Submit Button */}
//                 <button
//                   onClick={handleSubmit}
//                   className="group relative bg-white text-black font-semibold px-8 py-3.5 rounded-full flex items-center gap-3 hover:bg-[#f4a702] hover:text-white transition-all duration-300 overflow-hidden"
//                 >
//                   <span className="relative z-10">Send A Message</span>
//                   <svg
//                     className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 7l5 5m0 0l-5 5m5-5H6"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Right Side - Clients Section with Scrollbar */}
//             <div className="flex flex-col mt-8 lg:mt-0">
//               <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
//                 Driven by Trust, Backed by Results
//               </h4>
//               <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm">
//                 Our work speaks through the trust placed in us by top names
//                 across the globe.
//               </p>

//               {/* Scrollable Clients Grid */}
//               <div className="overflow-y-auto custom-scrollbar max-h-[350px] sm:max-h-[400px] md:max-h-[450px] pr-2">
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
//                   {clients.map((client, index) => (
//                     <div
//                       key={index}
//                       className="group relative bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-[#f4a702]/50 transition-all duration-300 aspect-square flex items-center justify-center cursor-pointer hover:bg-white"
//                     >
//                       <img
//                         src={client.logo}
//                         alt={client.name}
//                         className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-[#f4a702] opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300"></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(244, 167, 2, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #f4a702;
//         }

//         input::placeholder,
//         textarea::placeholder {
//           color: #9ca3af;
//         }

//         .loader-icon {
//           width: 32px;
//           height: 32px;
//           position: relative;
//           display: inline-block;
//           vertical-align: middle;
//         }
//         @media (min-width: 640px) {
//           .loader-icon {
//             width: 40px;
//             height: 40px;
//           }
//         }
//         @media (min-width: 768px) {
//           .loader-icon {
//             width: 48px;
//             height: 48px;
//           }
//         }
//         @media (min-width: 1024px) {
//           .loader-icon {
//             width: 56px;
//             height: 56px;
//           }
//         }
//         .loader-icon:before {
//           content: '';
//           width: 100%;
//           height: 5px;
//           background: #f4a702;
//           position: absolute;
//           top: 125%;
//           left: 0;
//           border-radius: 50%;
//           animation: shadow324 0.5s linear infinite;
//         }
//         .loader-icon:after {
//           content: '';
//           width: 100%;
//           height: 100%;
//           background: #f4a702;
//           position: absolute;
//           top: 0;
//           left: 0;
//           border-radius: 50%;
//           animation: jump7456 0.5s linear infinite;
//         }
//         @keyframes jump7456 {
//           15% {
//             border-bottom-right-radius: 50%;
//           }
//           25% {
//             transform: translateY(9px) rotate(22.5deg);
//           }
//           50% {
//             transform: translateY(18px) scale(1, .9) rotate(45deg);
//             border-bottom-right-radius: 40px;
//           }
//           75% {
//             transform: translateY(9px) rotate(67.5deg);
//           }
//           100% {
//             transform: translateY(0) rotate(90deg);
//           }
//         }
//         @keyframes shadow324 {
//           0%,
//           100% {
//             transform: scale(1, 1);
//           }
//           50% {
//             transform: scale(1.2, 1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ContactClients;
import React, { useState } from "react";
import gradientBg from "/src/assets/images/Home/bg-home2.png";

function ContactClients() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    project: "",
  });

  const clients = [
    { name: "1", logo: "/src/assets/images/ClientLogos/1.png" },
    { name: "2", logo: "/src/assets/images/ClientLogos/2.png" },
    { name: "3", logo: "/src/assets/images/ClientLogos/3.png" },
    { name: "4", logo: "/src/assets/images/ClientLogos/4.png" },
    { name: "5", logo: "/src/assets/images/ClientLogos/5.png" },
    { name: "6", logo: "/src/assets/images/ClientLogos/6.png" },
    { name: "7", logo: "/src/assets/images/ClientLogos/7.png" },
    { name: "8", logo: "/src/assets/images/ClientLogos/8.png" },
    { name: "9", logo: "/src/assets/images/ClientLogos/9.png" },
    { name: "10", logo: "/src/assets/images/ClientLogos/10.png" },
    { name: "11", logo: "/src/assets/images/ClientLogos/11.png" },
    { name: "12", logo: "/src/assets/images/ClientLogos/12.png" },
    { name: "13", logo: "/src/assets/images/ClientLogos/13.png" },
    { name: "14", logo: "/src/assets/images/ClientLogos/14.png" },
    { name: "15", logo: "/src/assets/images/ClientLogos/15.png" },
    { name: "16", logo: "/src/assets/images/ClientLogos/16.png" },
    { name: "17", logo: "/src/assets/images/ClientLogos/17.png" },
    { name: "18", logo: "/src/assets/images/ClientLogos/18.png" },
    { name: "19", logo: "/src/assets/images/ClientLogos/19.png" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="relative min-h-screen py-16 px-4 overflow-hidden bg-center bg-cover bg-no-repeat pb-24 -mb-24"
      style={{
        backgroundImage: `url(${gradientBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔳 Multi-layer black transparent overlays for depth */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

      {/* 🟠 Decorative glow orbs - slightly more visible */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-[#f4a702] rounded-full opacity-[0.15] blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] bg-[#f4a702] rounded-full opacity-[0.15] blur-3xl animate-pulse-slow-delayed"></div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading with enhanced shadow */}
        <div className="text-center mb-12">
          <div className="flex items-start justify-center gap-4 mb-2 flex-wrap">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Let's Create
            </h2>
            <span className="inline-block mt-1 sm:mt-2 md:mt-3">
              <div className="loader-icon"></div>
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Greatness Together!
          </h3>
        </div>

        {/* Form + Clients Section - Enhanced glass effect */}
        <div className="bg-black/60 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT - Form */}
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-8 drop-shadow-lg">
                Discuss Your Project With Us
              </h4>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-black/80 border border-white/30 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none focus:ring-2 focus:ring-[#f4a702]/30 transition-all duration-300 shadow-lg"
                  />
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name *"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-black/80 border border-white/30 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none focus:ring-2 focus:ring-[#f4a702]/30 transition-all duration-300 shadow-lg"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-10">
                      <span className="text-xl">🇮🇳</span>
                      <span className="text-gray-300 text-sm font-medium">
                        +91
                      </span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/80 border border-white/30 rounded-full pl-20 pr-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none focus:ring-2 focus:ring-[#f4a702]/30 transition-all duration-300 shadow-lg"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/80 border border-white/30 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none focus:ring-2 focus:ring-[#f4a702]/30 transition-all duration-300 shadow-lg"
                  />
                </div>

                {/* Project */}
                <textarea
                  name="project"
                  placeholder="About Your Project *"
                  value={formData.project}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-black/80 border border-white/30 rounded-3xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none focus:ring-2 focus:ring-[#f4a702]/30 transition-all duration-300 resize-none shadow-lg"
                ></textarea>

                {/* Privacy + Submit */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  By sending this form, I confirm that I have read & accept the{" "}
                  <a
                    href="#"
                    className="text-white underline hover:text-[#f4a702] transition-colors font-medium"
                  >
                    privacy policy
                  </a>
                  .
                </p>

                <button
                  onClick={handleSubmit}
                  className="group relative bg-white text-black font-semibold px-8 py-3.5 rounded-full flex items-center gap-3 hover:bg-[#f4a702] hover:text-white transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#f4a702]/60 hover:scale-105"
                >
                  <span className="relative z-10">Send A Message</span>
                  <svg
                    className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT - Client Logos */}
            <div className="flex flex-col mt-8 lg:mt-0">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                Driven by Trust, Backed by Results
              </h4>
              <p className="text-white/95 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                Our work speaks through the trust placed in us by top names
                across the globe.
              </p>

              <div className="overflow-y-auto custom-scrollbar max-h-[400px] pr-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {clients.map((client, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-[#f4a702]/60 transition-all duration-300 aspect-square flex items-center justify-center cursor-pointer hover:bg-white shadow-lg hover:shadow-xl hover:shadow-[#f4a702]/30 hover:scale-105"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/0 to-[#f4a702]/0 group-hover:from-[#f4a702]/10 group-hover:to-transparent rounded-xl transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ⬇️ Enhanced fade band to merge into next section */}
      <div className="pointer-events-none absolute left-0 right-0 -bottom-16 h-24 bg-gradient-to-b from-transparent via-black/60 to-black z-20"></div>

      {/* Style block */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.08); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(244,167,2,0.5); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f4a702; }

        .loader-icon { width: 32px; height: 32px; position: relative; display: inline-block; vertical-align: middle; }
        @media (min-width:640px){.loader-icon{width:40px;height:40px;}}
        @media (min-width:768px){.loader-icon{width:48px;height:48px;}}
        @media (min-width:1024px){.loader-icon{width:56px;height:56px;}}
        .loader-icon:before{content:'';width:100%;height:5px;background:#f4a702;position:absolute;top:125%;left:0;border-radius:50%;animation:shadow324 0.5s linear infinite;filter:drop-shadow(0 0 8px #f4a702);}
        .loader-icon:after{content:'';width:100%;height:100%;background:#f4a702;position:absolute;top:0;left:0;border-radius:50%;animation:jump7456 0.5s linear infinite;filter:drop-shadow(0 0 12px #f4a702);}
        @keyframes jump7456{15%{border-bottom-right-radius:50%;}25%{transform:translateY(9px)rotate(22.5deg);}50%{transform:translateY(18px)scale(1,.9)rotate(45deg);border-bottom-right-radius:40px;}75%{transform:translateY(9px)rotate(67.5deg);}100%{transform:translateY(0)rotate(90deg);}}
        @keyframes shadow324{0%,100%{transform:scale(1,1);}50%{transform:scale(1.2,1);}}

        @keyframes pulse-slow{0%,100%{opacity:0.15;}50%{opacity:0.25;}}
        @keyframes pulse-slow-delayed{0%,100%{opacity:0.15;}50%{opacity:0.25;}}
        .animate-pulse-slow{animation:pulse-slow 4s ease-in-out infinite;}
        .animate-pulse-slow-delayed{animation:pulse-slow-delayed 4s ease-in-out infinite 2s;}
      `}</style>
    </div>
  );
}

export default ContactClients;
