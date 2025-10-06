import React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

// Custom Wireframe Shape
function WireframeShape() {
  const meshRef = React.useRef();
  const { viewport } = useThree();

  // Adjust size based on viewport
  const isMobile = viewport.width < 8;
  const scale = isMobile ? 0.8 : 1;

  // Rotation animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <dodecahedronGeometry args={[4, 0]} />
      <meshBasicMaterial wireframe color="#555555" />
    </mesh>
  );
}

// Responsive Wireframe Wrapper
function ResponsiveWireframe() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 8;

  // Position: middle on mobile, right side on desktop
  const position = isMobile ? [0, 0.5, 0] : [6, 1, 0];

  return (
    <group position={position}>
      <WireframeShape />
    </group>
  );
}

function HomePageAnimation() {
  const [scrollRotation, setScrollRotation] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const rotation = window.scrollY * 0.5;
      setScrollRotation(rotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen w-full bg-black relative overflow-hidden">
      {/* Homepage Text - Vertical */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
        <p className="text-gray-500 text-xs md:text-sm tracking-[0.3em] uppercase vertical-text">
          HOMEPAGE
        </p>
      </div>

      {/* Text Overlay */}
      <div className="absolute z-10 md:top-1/2 md:-translate-y-1/2 top-1/3 md:bottom-auto left-6 sm:left-12 md:left-16 lg:left-20 right-6 sm:right-auto text-white max-w-xl px-4 sm:px-0">
        {/* Mobile: Top positioned */}
        <div className="block md:hidden">
          <h1 className="text-3xl font-bold leading-tight mb-4">
            <span className="block">
              We help great <span className="font-light">minds to</span>
            </span>
            <span className="block">
              <span className="font-bold">explore their</span>{" "}
              <span className="font-light">way.</span>
            </span>
          </h1>
          <p className="mt-4 text-xs text-gray-400 leading-relaxed max-w-sm">
            We constantly adapt to the latest trends, technologies, and
            algorithms to ensure our clients maintain a competitive edge in
            their respective industries.
          </p>
        </div>

        {/* Desktop: Original left-aligned layout */}
        <div className="hidden md:block max-w-lg">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            <span className="block">
              We help great <span className="font-light">minds to</span>
            </span>
            <span className="block font-bold">
              explore their <span className="font-light">way.</span>
            </span>
          </h1>
          <p className="mt-6 text-sm lg:text-base text-gray-400 leading-relaxed">
            We constantly adapt to the latest trends, technologies, and
            algorithms to ensure our clients maintain a competitive edge in
            their respective industries.
          </p>
          <div className="mt-10 flex gap-6 items-center">
            <button className="bg-[#f4a702] hover:bg-orange-500 pl-8 pr-3 py-3 rounded-full font-semibold transition-colors flex items-center gap-4 group">
              <span className="text-sm tracking-wide">WHAT WE DO</span>
              <span className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg
                  className="w-5 h-5 text-[#d99000]"
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
            </button>
            <button className="border-2 border-gray-600 hover:border-gray-400 pl-6 pr-3 py-3 rounded-full transition-colors flex items-center gap-3 group bg-transparent">
              <span className="text-sm tracking-wide text-white">
                VIEW WORKS
              </span>
              <span className="w-10 h-10 border-2 border-gray-600 group-hover:border-gray-400 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-all bg-transparent">
                <svg
                  className="w-5 h-5 text-white"
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Buttons - Fixed at Bottom */}
      <div className="absolute bottom-6 left-6 right-6 z-20 md:hidden">
        <div className="flex flex-col gap-3 w-full">
          <button className="w-full bg-[#f4a702] hover:bg-orange-500 px-5 py-3 rounded-full font-semibold transition-all flex items-center justify-between group shadow-lg hover:shadow-orange-500/50">
            <span className="text-xs tracking-widest uppercase font-bold text-white">
              WHAT WE DO
            </span>
            <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
              <svg
                className="w-3.5 h-3.5 text-[#f4a702]"
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
          </button>

          <button className="w-full border-2 border-gray-600 hover:border-gray-400 hover:bg-gray-900 px-5 py-3 rounded-full transition-all flex items-center justify-between group">
            <span className="text-xs tracking-widest text-white uppercase font-bold">
              VIEW WORKS
            </span>
            <span className="w-8 h-8 border-2 border-gray-600 group-hover:border-gray-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-all bg-transparent flex-shrink-0">
              <svg
                className="w-3.5 h-3.5 text-white"
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
          </button>
        </div>
      </div>

      {/* Background Wireframe Animation */}
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 10], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <ResponsiveWireframe />
      </Canvas>

      {/* Scroll Down Indicator - Hidden on Mobile */}
      <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 right-12 sm:right-16 md:right-24 text-center z-20 hidden md:block">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          {/* Rotating Text */}
          <svg
            className="absolute inset-0 transition-transform duration-100"
            viewBox="0 0 140 140"
            style={{ transform: `rotate(${scrollRotation}deg)` }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 70, 70 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
              />
            </defs>
            <text className="text-[8px] fill-gray-500 uppercase tracking-[0.35em] font-light">
              <textPath href="#circlePath" startOffset="0%">
                SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
              </textPath>
            </text>
          </svg>

          {/* Center Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 md:w-20 md:h-20 bg-[#f4a702] hover:bg-orange-500 rounded-full flex items-center justify-center transition-all group shadow-lg hover:shadow-orange-500/50">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}

export default HomePageAnimation;
