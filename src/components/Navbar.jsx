import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/** Staggered nav items */
const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "AboutUs", to: "/aboutUs" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-black/100 px-6 py-4">
      {/* Logo (left) */}
      <Link to="/" className="inline-flex items-center gap-2">
        <img
          src="/src/assets/images/BM-WHITE-logo.png"
          alt="Brandmingo"
          className="h-9 w-auto"
        />
      </Link>

      {/* Hamburger button (animated to X) */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="site-menu"
        onClick={() => setIsOpen((v) => !v)}
        className="relative h-10 w-12 select-none outline-none"
      >
        {/* 3 lines -> X animation */}
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

      {/* ===== Fullscreen Overlay Menu (slides from LEFT) ===== */}
      <div
        id="site-menu"
        className={`fixed inset-0 z-40 transform bg-black transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top bar inside overlay */}
        <div className="flex items-center justify-between px-8 pt-6">
          {/* Left logo inside overlay */}
          <div className="flex items-center">
            <img
              src="/src/assets/images/BM-WHITE-logo.png"
              alt="Brandmingo"
              className="h-10 w-auto"
            />
          </div>

          {/* Close (same animated button for consistency) */}
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="relative h-10 w-12"
          >
            <span className="absolute left-2 top-[11px] block h-[2px] w-8 -rotate-45 bg-white" />
            <span className="absolute left-2 top-[27px] block h-[2px] w-8 rotate-45 bg-white" />
          </button>
        </div>

        {/* Menu links – left aligned, big type, staggered entrance */}
        <div className="px-8 pt-6 md:px-16">
          <ul className="space-y-6 md:space-y-8">
            {NAV_ITEMS.map((item, i) => {
              const active = location.pathname === item.to;
              return (
                <li
                  key={item.to}
                  style={{
                    transitionDelay: `${isOpen ? 60 * i : 0}ms`,
                  }}
                  className={`transform opacity-0 transition-all duration-500 ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-6"
                  }`}
                >
                  <Link
                    to={item.to}
                    className={`block text-1xl font-medium md:text-2xl ${
                      active
                        ? "text-[#f4a702]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
