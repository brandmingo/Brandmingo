import React from "react";
import {
  FaComments,
  FaClipboardCheck,
  FaShieldAlt,
  FaTrophy,
} from "react-icons/fa";

function OurWorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Consultations",
      icon: FaComments,
      description:
        "Welcome to our consultation services, where expertise meets your unique needs.",
      color: "from-[#f4a702] to-orange-600",
    },
    {
      number: "02",
      title: "Choose Package",
      icon: FaClipboardCheck,
      description:
        "Recognizing your unique needs, we provide diverse packages tailored to your specific requirements.",
      color: "from-[#f4a702] to-orange-600",
    },
    {
      number: "03",
      title: "Check Quality",
      icon: FaShieldAlt,
      description:
        "We take immense pride in delivering unparalleled services to our valued clients.",
      color: "from-[#f4a702] to-orange-600",
    },
    {
      number: "04",
      title: "Finish",
      icon: FaTrophy,
      description:
        "Seeing our clients' vision materialize into a successful reality is the ultimate reward.",
      color: "from-[#f4a702] to-orange-600",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4a702]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f4a702]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-[#f4a702]/10 text-[#f4a702] rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            OUR WORK PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-3xl mx-auto">
            Connecting customers with your brand.
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Step number badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-600 text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </span>
                </div>

                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f4a702]/10 to-orange-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="text-4xl text-[#f4a702]" />
                  </div>
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-[#f4a702]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#f4a702] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Learn more button */}
                <button className="inline-flex items-center gap-2 text-[#f4a702] font-semibold group-hover:gap-3 transition-all">
                  Learn more
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                {/* Decorative corner gradient */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#f4a702]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Connection dot for desktop */}
              <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#f4a702] rounded-full border-4 border-white shadow-lg z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Ready to transform your brand?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#f4a702] to-orange-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#f4a702]/50 transition-all duration-300 hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurWorkProcess;
