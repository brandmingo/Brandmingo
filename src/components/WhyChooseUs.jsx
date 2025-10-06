import React from "react";

function WhyChooseUs() {
  const ACCENT = "#f59e0b"; // your brand orange

  // Replace these with your own 4 images
  const IMAGES = [
    { src: "/src/assets/images/WhyChooseUs/1.jpg", alt: "Team portrait 1" },
    { src: "/src/assets/images/WhyChooseUs/2.jpg", alt: "Team portrait 1" },
    { src: "/src/assets/images/WhyChooseUs/3.jpg", alt: "Team portrait 1" },
    { src: "/src/assets/images/WhyChooseUs/4.jpg", alt: "Team portrait 1" },
  ];

  return (
    <section id="why-choose-us" className="bg-white text-black">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT — Heading + content + button */}
          <div className="lg:col-span-5">
            <h2 className="leading-[1.05]">
              <span className="block font-semibold text-[36px] sm:text-[48px] md:text-[56px]">
                Why
              </span>
              <span className="block -mt-1 font-semibold text-[36px] sm:text-[48px] md:text-[56px]">
                Choose Us
              </span>
            </h2>

            <p className="mt-7 max-w-[560px] text-[20px] leading-7 text-gray-600">
              Elevating Your Brand in the Digital Landscape.
            </p>

            <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-gray-600">
              In the dynamic realm of the digital landscape, we specialize in
              crafting tailored strategies that not only enhance your brand’s
              visibility but also drive meaningful connections with your
              audience. Our innovative approach, backed by years of experience,
              is dedicated to elevating your brand to new heights in the digital
              arena.
            </p>

            <a
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-black"
              style={{ backgroundColor: ACCENT }}
            >
              READ MORE
              <span className="grid h-10 w-10 place-items-center rounded-full bg-black text-white transition-transform group-hover:translate-x-0.5">
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

            {/* small tagline (optional) */}
            <p className="mt-10 text-[18px] leading-7 text-gray-800">
              We <span className="font-semibold">deliver</span> exceptional{" "}
              <span className="font-semibold">results</span>.
            </p>
          </div>

          {/* RIGHT — 2×2 image grid with subtle geometric background */}
          <div className="relative lg:col-span-7">
            {/* faint grid background like the reference (desktop only) */}
            <div
              className="pointer-events-none absolute -left-10 -top-10 hidden h-[560px] w-[560px] lg:block"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
                backgroundSize: "160px 160px",
              }}
            />

            {/* tiny note top-right (optional) */}
            <span className="absolute -top-5 right-0 hidden text-[12px] text-gray-400 lg:block">
              * Our team at work
            </span>

            {/* images */}
            <div className="relative z-10 grid grid-cols-2 gap-6">
              {/* Top-left (taller) */}
              <img
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                className="h-[260px] w-full object-cover shadow-sm ring-1 ring-black/5 md:h-[300px]"
              />
              {/* Top-right */}
              <img
                src={IMAGES[1].src}
                alt={IMAGES[1].alt}
                className="h-[220px] w-full object-cover shadow-sm ring-1 ring-black/5 md:h-[260px]"
              />
              {/* Bottom-left */}
              <img
                src={IMAGES[2].src}
                alt={IMAGES[2].alt}
                className="h-[220px] w-full object-cover shadow-sm ring-1 ring-black/5 md:h-[260px]"
              />
              {/* Bottom-right (taller) */}
              <img
                src={IMAGES[3].src}
                alt={IMAGES[3].alt}
                className="h-[260px] w-full object-cover shadow-sm ring-1 ring-black/5 md:h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
