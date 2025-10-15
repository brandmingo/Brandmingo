import React from "react";
import { Target, Eye, Users } from "lucide-react";

// 👇 Import your hero background image (use same as contact or another one)
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";

function About() {
  const cards = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Mission",
      description:
        "At digiPanda, our mission is simple: to empower businesses worldwide to reach new heights. We're all about turning ideas into reality, crafting campaigns that captivate, and delivering results that make your competition green with envy. Our goal? To make your brand the talk of the town!",
      gradient: "from-[#f4a702] via-orange-500 to-orange-600",
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Vision",
      description:
        "Our vision is a vibrant digital world where every business, big or small, has the opportunity to thrive and shine. We dream of a future where innovative marketing strategies are at everyone's fingertips, helping brands break barriers and make a mark on the global stage. Together, let's paint the world with success!",
      gradient: "from-orange-600 via-[#f4a702] to-orange-500",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Cultural Values",
      description:
        "At digiPanda, our culture thrives on collaboration, innovation, and integrity. We believe in passion for our craft and keep the vibe fun because a happy team leads to happy clients! Join us in this exciting adventure where creativity knows no bounds!",
      gradient: "from-orange-500 via-orange-600 to-[#f4a702]",
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* ---------------- HERO SECTION (with background image) ---------------- */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutHeroBg})` }}
      >
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
          {/* Breadcrumb */}
          <div className="border-t border-[#f4a702]/30 pt-8 mb-0">
            <div className="flex items-center justify-center gap-1 text-sm">
              <a
                href="/"
                className="hover:text-[#f4a702] transition-colors font-medium text-gray-300"
              >
                HOME
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400 font-medium">ABOUT US</span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                About Us
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-sm md:text-base">
              Our team of skilled professionals combines strategic thinking,
              creative expertise, and the latest industry insights to develop
              effective digital marketing strategies that resonate with your
              target market.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- WHO ARE WE SECTION ---------------- */}
      <div className="relative bg-black">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/5 via-black to-orange-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Who Are We?
              </span>
            </h2>
            <p className="max-w-4xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
              Welcome to digiPanda, your ultimate growth sidekick! We're not
              just a digital agency; we're your partners in unleashing the full
              potential of your brand. With over a decade of Experience and a
              team of 50+ digital wizards, we're here to sprinkle some serious
              magic on your marketing strategies!
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div key={index} className="group relative">
                {/* Card Container */}
                <div className="relative h-full min-h-[400px] rounded-3xl bg-gradient-to-br from-gray-900 to-black border-2 border-[#f4a702]/20 overflow-hidden transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#f4a702]/30 hover:border-[#f4a702]/60">
                  {/* Gradient Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`}
                  ></div>

                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#f4a702]/30 via-orange-500/20 to-[#f4a702]/30 blur-2xl"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-[#f4a702]/10 backdrop-blur-md flex items-center justify-center text-[#f4a702] shadow-lg border-2 border-[#f4a702]/30 transition-all duration-700 group-hover:bg-[#f4a702] group-hover:text-black group-hover:scale-110 group-hover:rotate-6 group-hover:border-[#f4a702]">
                        {card.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#f4a702] transition-colors duration-500">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors duration-500">
                      {card.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="mt-auto pt-6">
                      <div className="w-12 h-1 bg-gradient-to-r from-[#f4a702] to-orange-500 rounded-full opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f4a702]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
