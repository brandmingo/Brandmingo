import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/services",
    dropdown: [
      { label: "Web Development", to: "/services/web" },
      { label: "Mobile Apps", to: "/services/mobile" },
      { label: "Digital Marketing", to: "/services/marketing" },
      { label: "SEO Services", to: "/services/seo" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    dropdown: [
      { label: "Product 1", to: "/products/product1" },
      { label: "Product 2", to: "/products/product2" },
      { label: "Product 3", to: "/products/product3" },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Body scroll lock when menu open
  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) {
      root.style.overflow = "hidden";
    } else {
      root.style.overflow = "";
    }
    return () => {
      root.style.overflow = "";
    };
  }, [isOpen]);

  // Change navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/90 shadow-lg" // darker, almost black, no blur
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo (left) - Hidden when mobile menu is open */}
        <Link
          to="/"
          className={`inline-flex items-center gap-2 relative z-50 transition-opacity duration-300 ${
            isOpen
              ? "lg:opacity-100 opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <img
            src="/src/assets/images/BM-WHITE-logo.png"
            alt="Brandmingo"
            className="h-9 w-auto"
          />
        </Link>

        {/* Center Navigation Links - Hidden on Mobile */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.to;
            return (
              <li key={item.to} className="relative group">
                <Link
                  to={item.to}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    active ? "text-[#f4a702]" : "text-gray-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-xl py-2 min-w-[200px]">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.to}
                          to={dropItem.to}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f4a702] hover:text-white transition-colors"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Side - Let's Talk Button (Desktop) */}
        {/* Right Side - Let's Talk Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <button className="relative overflow-hidden text-black font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 group">
            {/* Background (default - white) */}
            <span className="absolute inset-0 bg-white rounded-full transition-all duration-300 group-hover:opacity-0"></span>

            {/* Background (hover - orange gradient) */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] via-[#ff6900] to-[#ff4d00] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
              <span className="text-xl">🔥</span>
              <span>Let's Talk</span>
              <svg
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            {/* Subtle border outline */}
            <span className="absolute inset-0 rounded-full border border-neutral-700 group-hover:border-transparent transition-all duration-300"></span>
          </button>
        </div>

        {/* Hamburger button - Mobile Only - Hidden when menu is open */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="site-menu"
          onClick={() => setIsOpen((v) => !v)}
          className={`lg:hidden relative h-10 w-12 select-none outline-none z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <span
            className={`absolute left-2 top-[11px] block h-[2px] w-8 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-2 top-[19px] block h-[2px] w-6 bg-white transition-all duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-2 top-[27px] block h-[2px] w-8 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Mobile Fullscreen Overlay Menu - Slides from RIGHT */}
        <div
          id="site-menu"
          className={`lg:hidden fixed inset-0 z-40 transform bg-white transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top bar with logo and close */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <img
              src="/src/assets/images/Group-8-1-768x150.png"
              alt="Brandmingo"
              className="h-9 w-auto"
            />
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="px-6 py-6 overflow-y-auto max-h-[calc(100vh-80px)]">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item, i) => {
                const active = location.pathname === item.to;
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const isDropdownOpen = openDropdown === item.label;

                return (
                  <li
                    key={item.to}
                    style={{
                      transitionDelay: `${isOpen ? 40 * i : 0}ms`,
                    }}
                    className={`transform opacity-0 transition-all duration-300 ${
                      isOpen ? "translate-x-0 opacity-100" : "translate-x-4"
                    }`}
                  >
                    {hasDropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium transition-colors ${
                            active
                              ? "bg-[#f4a702] text-white"
                              : "text-gray-900 hover:bg-gray-100"
                          }`}
                        >
                          <span className="text-lg">{item.label}</span>
                          <svg
                            className={`w-5 h-5 transition-transform ${
                              isDropdownOpen ? "rotate-180" : ""
                            } ${active ? "text-white" : "text-[#f4a702]"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Dropdown Items */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isDropdownOpen ? "max-h-96 mt-2" : "max-h-0"
                          }`}
                        >
                          <div className="pl-4 space-y-1">
                            {item.dropdown.map((dropItem) => (
                              <Link
                                key={dropItem.to}
                                to={dropItem.to}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-[#f4a702] hover:bg-orange-50 rounded-lg transition-colors"
                              >
                                {dropItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.to}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                          active
                            ? "bg-[#f4a702] text-white"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-lg">{item.label}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile Let's Talk Button */}
            <div
              className="mt-8 transform opacity-0 transition-all duration-300"
              style={{
                transitionDelay: `${isOpen ? 240 : 0}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(1rem)",
              }}
            >
              <button className="relative w-full overflow-hidden text-white font-semibold text-base px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg">
                {/* Background (default - black) */}
                <span className="absolute inset-0 rounded-full bg-black transition-opacity duration-300 group-hover:opacity-0"></span>

                {/* Background (hover - orange gradient) */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff8c00] via-[#ff6900] to-[#ff4d00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-300">
                  <span className="text-xl">🔥</span>
                  <span>Let's Talk</span>
                  <svg
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                {/* Subtle border outline */}
                <span className="absolute inset-0 rounded-full border border-neutral-800 group-hover:border-transparent transition-colors duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
