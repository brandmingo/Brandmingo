import React from "react";
import HomePageAnimation from "../components/HomePageAnimation";
import ClientLogo from "../components/ClientLogo";
import WhatWeDo from "../components/WhatWeDo";
import WhyChooseUs from "../components/WhyChooseUs";
import HappyCustomer from "../components/HappyCustomer";
import OurWorkProcess from "../components/OurWorkProcess";
import Partners from "../components/Partners";
import ContactClients from "../components/ContactClients";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <HomePageAnimation />
      <ClientLogo />
      {/* === ABOUT SECTION (paste inside your HomePage return) === */}
      <section
        id="about"
        className="relative bg-gradient-to-b from-white via-gray-50 to-white text-black overflow-hidden"
      >
        {/* Subtle background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>

        <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8 py-16 lg:py-24">
          {/* 2-column responsive grid */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* LEFT: Heading + copy */}
            <div className="lg:col-span-6">
              {/* Premium About Us Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-orange-500 text-lg font-bold tracking-wide uppercase relative">
                  About Us
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400"></span>
                </span>
              </div>

              {/* Enhanced Heading */}
              <h2 className="leading-[1.08]">
                <span className="block font-bold text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  360° Digital Marketing
                </span>
                <span className="block -mt-[2px] font-bold text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] text-gray-900">
                  for{" "}
                  <span className="relative inline-block font-light">
                    <span className="relative z-10">Memorable Brands</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-200/60 -z-10"></span>
                  </span>
                </span>
              </h2>

              {/* Enhanced Paragraphs */}
              <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-gray-700">
                We are a full-stack digital marketing agency combining strategic
                thinking, creative expertise, and the latest industry insights
                to craft campaigns that resonate with your target market. Our
                focus is on both brand presence and product experience, ensuring
                every touchpoint feels on-brand, discoverable, and
                conversion-ready in today's competitive landscape.
              </p>

              <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-gray-700">
                With a holistic approach across strategy, SEO, content, social,
                performance marketing, UI/UX, and web development, we deliver
                measurable growth and ROI. Backed by deep strengths in
                Experience Design (90%), Business & Marketing (80%), and
                Development (85%), we build cohesive journeys that turn
                attention into lasting loyalty and revenue.
              </p>
            </div>

            {/* RIGHT: Enhanced Image with premium styling */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Premium grid background (desktop only) */}
                <div
                  className="pointer-events-none absolute -left-10 -top-10 hidden h-[520px] w-[520px] lg:block opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, rgba(249,115,22,0.15) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(249,115,22,0.15) 1.5px, transparent 1.5px)",
                    backgroundSize: "160px 160px",
                  }}
                />

                {/* Decorative corner accents */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-orange-500 rounded-tr-2xl opacity-60 hidden lg:block"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-blue-500/70 rounded-bl-2xl opacity-60 hidden lg:block"></div>

                {/* Enhanced image card */}
                <figure className="relative z-10 group">
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

                    <img
                      src="/src/assets/images/About/about-us.jpg"
                      alt="Our studio"
                      className="h-[420px] w-full object-cover md:h-[520px] lg:h-[560px] transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Subtle border glow */}
                    <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none"></div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="text-white">Home</div> */}
      <WhatWeDo />
      <WhyChooseUs />
      <HappyCustomer />
      <Partners />
      <OurWorkProcess />
      <Testimonials />
      <ContactClients />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
