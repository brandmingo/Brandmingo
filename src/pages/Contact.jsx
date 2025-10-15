import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
} from "react-icons/fa";
import ContactClients from "../components/ContactClients";

// 👇 Import your hero background image (replace path if needed)
import contactHeroBg from "/src/assets/images/Home/bg-home2.png";

function Contact() {
  const contactCards = [
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email Us",
      description: "Got a question? Shoot us an email",
      link: "info@digipanda.co.in",
      href: "mailto:info@digipanda.co.in",
      gradient: "from-[#f4a702] via-orange-500 to-orange-600",
    },
    {
      icon: <FaComments className="w-8 h-8" />,
      title: "Say Hello!",
      description: "Reach out to our expert team",
      link: "info@digipanda.co.in",
      href: "mailto:info@digipanda.co.in",
      gradient: "from-orange-600 via-[#f4a702] to-orange-500",
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Visit Our Office",
      description: "D-111, Sector 63, Noida, 201301",
      link: "Get Directions",
      href: "https://www.google.com/maps/place/Sector+63,+Noida",
      gradient: "from-orange-500 via-orange-600 to-[#f4a702]",
    },
    {
      icon: <FaPhoneAlt className="w-8 h-8" />,
      title: "Call Us",
      description: "Mon-Fri between 9:30 to 6:30",
      link: "+91 9311-156-818",
      href: "tel:+919311156818",
      gradient: "from-[#f4a702] via-orange-600 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* ---------------- HERO SECTION (with background image) ---------------- */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactHeroBg})` }}
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
              <span className="text-gray-400 font-medium">CONTACT</span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Get in touch!
              </span>
            </h1>

            <p className="max-w-2xl text-center text-gray-200 text-sm md:text-base">
              Have a brief, a spark of an idea, or a full roadmap? Tell us where
              you want to go—let's build it together.
            </p>

            {/* Send Message button */}
            <button
              onClick={() =>
                document
                  .getElementById("contact-second")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="mt-2 inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full hover:bg-[#f4a702] hover:text-white transition-all font-semibold border border-gray-300"
            >
              Send Message
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- SECOND SECTION ---------------- */}
      <div id="contact-second" className="relative bg-black">
        {/* Contact Cards Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : "_self"}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="group relative block"
              >
                <div className="relative h-80 rounded-3xl bg-black/90 backdrop-blur-sm border-2 border-[#f4a702]/20 overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#f4a702]/30 hover:border-[#f4a702]/60">
                  {/* Gradient Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`}
                  ></div>

                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#f4a702]/20 via-orange-500/10 to-[#f4a702]/20 blur-xl"></div>
                  </div>

                  <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center">
                    {/* Icon + Title */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 transition-all duration-700 group-hover:translate-y-[-60px] group-hover:mt-8">
                      <div className="w-20 h-20 rounded-3xl bg-[#f4a702]/10 backdrop-blur-md flex items-center justify-center text-[#f4a702] shadow-lg border-2 border-[#f4a702]/30 transition-all duration-700 group-hover:bg-[#f4a702] group-hover:text-black group-hover:scale-110 group-hover:border-[#f4a702]">
                        {card.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg group-hover:text-[#f4a702] transition-colors duration-700">
                        {card.title}
                      </h3>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 space-y-3">
                      <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {card.description}
                      </p>
                      <p className="text-[#f4a702] font-semibold text-lg group-hover:text-white transition-colors duration-300">
                        {card.link}
                      </p>

                      {/* Arrow Icon */}
                      <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-[#f4a702]/20 backdrop-blur-sm flex items-center justify-center border-2 border-[#f4a702]/40 transition-all duration-300 group-hover:bg-[#f4a702] group-hover:border-[#f4a702]">
                        <svg
                          className="w-5 h-5 text-[#f4a702] group-hover:text-black transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M7 17L17 7M17 7H7M17 7V17"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f4a702]/10 via-transparent to-transparent"></div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Clients Logos */}
        <ContactClients />

        {/* Map Section */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[400px] md:h-[500px] border-t border-b border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0364788820243!2d77.36713931508064!3d28.626426082419676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286a734b!2sIthum%20Tower!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Office Location Map"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
