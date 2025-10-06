import React from "react";

export default function ClientLogo() {
  // ----- EDIT your logos here -----
  const items = [
    { src: "/src/assets/images/ClientLogos/1.png", alt: "ag-logo" },
    { src: "/src/assets/images/ClientLogos/2.png", alt: "ar-logo" },
    { src: "/src/assets/images/ClientLogos/3.png", alt: "c-logo" },
    { src: "/src/assets/images/ClientLogos/4.png", alt: "cx-logo" },
    { src: "/src/assets/images/ClientLogos/5.png", alt: "g20-logo" },
    { src: "/src/assets/images/ClientLogos/6.png", alt: "lul-logo" },
    { src: "/src/assets/images/ClientLogos/7.png", alt: "mm-logo" },
    { src: "/src/assets/images/ClientLogos/8.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/9.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/10.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/11.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/12.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/13.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/14.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/15.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/16.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/17.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/18.png", alt: "rd-logo" },
    { src: "/src/assets/images/ClientLogos/19.png", alt: "rd-logo" },
  ];

  // speed & size controls
  const duration = 45; // slower speed (increase number = slower)
  const rowHeight = 90; // increased from 64 to 90

  // duplicate to make seamless
  const track = [...items, ...items, ...items];

  return (
    <section
      aria-label="Client logos"
      className="client-logos"
      style={{ background: "#f2f2f2", padding: "28px 0" }}
    >
      <div
        className="client-logos__container"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          overflow: "hidden",
          padding: "0 16px",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="marquee"
          style={{
            "--marquee-duration": `${duration}s`,
            "--gap": "clamp(48px, 8vw, 120px)",
            "--h": `${rowHeight}px`,
          }}
        >
          <ul className="marquee__track">
            {track.map((logo, i) => (
              <li key={i} className="marquee__item">
                <img
                  src={logo.src}
                  alt={logo.alt || "Client logo"}
                  className="marquee__img"
                  loading="lazy"
                  height={rowHeight}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Component-scoped CSS */}
      <style>{`
        .marquee {
          position: relative;
          width: 100%;
        }

        .marquee__track {
          display: flex;
          align-items: center;
          gap: var(--gap);
          width: max-content;
          animation: marquee-x var(--marquee-duration) linear infinite;
          will-change: transform;
        }

        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }

        .marquee__item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marquee__img {
          height: var(--h);
          width: auto;
          object-fit: contain;
          filter: grayscale(100%) contrast(90%) opacity(.85);
          transition: filter .2s ease, transform .2s ease;
        }

        .marquee__img:hover {
          filter: grayscale(0%) contrast(100%) opacity(1);
          transform: translateY(-1px);
        }

        /* Mobile: 2-3 logos visible */
        @media (max-width: 639px) {
          .marquee__img {
            height: calc(var(--h) * 1.1);
          }
        }

        /* Tablet: 4 logos visible */
        @media (min-width: 640px) and (max-width: 1023px) {
          .marquee__img {
            height: calc(var(--h) * 1.4);
          }
        }

        /* Desktop: 6 logos visible */
        @media (min-width: 1024px) {
          .marquee__img {
            height: calc(var(--h) * 1.7);
          }
          .marquee {
            --gap: clamp(80px, 10vw, 140px);
          }
        }

        /* Large Desktop: 6 logos visible with more space */
        @media (min-width: 1440px) {
          .marquee__img {
            height: calc(var(--h) * 2.0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee__track {
            animation: none;
          }
        }

        @keyframes marquee-x {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
