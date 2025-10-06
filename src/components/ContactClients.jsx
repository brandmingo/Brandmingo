import React, { useState } from "react";

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
    <div className="relative min-h-screen bg-black py-16 px-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#f4a702] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#f4a702] rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
            Let's Create 🚀
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Greatness Together!
          </h3>
        </div>

        {/* Main Container - Single Row */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Discuss Your Project With Us
              </h4>

              <div className="space-y-5">
                {/* Full Name & Company Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name *"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <span className="text-xl">🇮🇳</span>
                      <span className="text-gray-400 text-sm">+91</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder=""
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/20 rounded-full pl-20 pr-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Project Description */}
                <textarea
                  name="project"
                  placeholder="About Your Project *"
                  value={formData.project}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-black border border-white/20 rounded-3xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>

                {/* Privacy Policy */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  By sending this form, I confirm that I have read & accept the{" "}
                  <a
                    href="#"
                    className="text-white underline hover:text-[#f4a702] transition-colors"
                  >
                    privacy policy
                  </a>
                  .
                </p>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="group relative bg-white text-black font-semibold px-8 py-3.5 rounded-full flex items-center gap-3 hover:bg-[#f4a702] hover:text-white transition-all duration-300 overflow-hidden"
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

            {/* Right Side - Clients Section with Scrollbar */}
            <div className="flex flex-col">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Driven by Trust, Backed by Results
              </h4>
              <p className="text-gray-400 mb-6 text-sm">
                Our work speaks through the trust placed in us by top names
                across the globe.
              </p>

              {/* Scrollable Clients Grid */}
              <div className="flex-1 overflow-hidden relative max-h-[400px]">
                <div className="absolute inset-0 overflow-y-auto custom-scrollbar pr-2">
                  <div className="grid grid-cols-4 gap-3 pb-4">
                    {clients.map((client, index) => (
                      <div
                        key={index}
                        // bg-black/50
                        className="group relative bg-white backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-[#f4a702]/50 transition-all duration-300 aspect-square flex items-center justify-center cursor-pointer hover:bg-white"
                      >
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#f4a702] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scroll Gradient Overlays */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(244, 167, 2, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f4a702;
        }

        input::placeholder,
        textarea::placeholder {
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}

export default ContactClients;
