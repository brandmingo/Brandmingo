import React, { useState, useEffect, useRef } from "react";

function HappyCustomer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { value: 100, suffix: "k+", label: "Happy Customer" },
    { value: 450, suffix: "k+", label: "Marketing Expert" },
    { value: 7.5, suffix: "M+", label: "Leads Generated" },
    { value: 3, suffix: "B+", label: "Revenue Driven" },
  ];

  const Counter = ({ end, suffix, duration = 2000, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(end * progress);
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration, isVisible]);

    return (
      <span>
        {count.toFixed(count < 10 ? 1 : 0)}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f4a702]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f4a702]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 delay-${
                index * 100
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Stat value with gradient */}
              <div className="relative inline-block mb-3">
                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f4a702]">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </h3>

                {/* Animated underline */}
                <div className="relative mt-2">
                  <div
                    className={`h-1 bg-[#f4a702] rounded-full transition-all duration-1000 ${
                      isVisible ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Label */}
              <p className="text-gray-600 text-base sm:text-lg font-medium tracking-wide">
                {stat.label}
              </p>

              {/* Vertical divider - hidden on last item and mobile */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Optional: Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-[#f4a702]/20 rounded-full animate-float-${
                i % 3
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-25px) translateX(5px);
          }
        }
        .animate-float-0 {
          animation: float-0 4s ease-in-out infinite;
        }
        .animate-float-1 {
          animation: float-1 5s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default HappyCustomer;
