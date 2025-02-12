import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const streamingServices = [
  {
    name: "Netflix",
    logo: "/streaming/netflix.jpg",
  },
  {
    name: "Prime Video",
    logo: "/streaming/prime.jpg",
  },
  {
    name: "YouTube",
    logo: "/streaming/youtube.jpg",
  },
  {
    name: "HBO Max",
    logo: "/streaming/hbo.jpg",
  },
  {
    name: "Apple TV",
    logo: "/streaming/apple-tv.jpg",
  },
  {
    name: "Disney+",
    logo: "/streaming/disney.jpg",
  },
];

const FloatingParticle = ({ delay = 0 }) => {
  const props = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: { duration: 2000 },
    delay,
  });

  return (
    <animated.div
      style={props}
      className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-50"
    />
  );
};

const GlowingCard = ({ children }: { children: React.ReactNode }) => {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setGlowPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg"
      whileHover={{ scale: 1.05 }}
      style={{
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(200px circle at ${glowPos.x}px ${glowPos.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

export const StreamingServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      id="streaming"
      className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 py-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{ perspective: '1000px' }}>
          {[...Array(50)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 100} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-white"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Nikmati Streaming Tanpa Batas
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Streaming film, serial TV, dan konten favorit Anda dengan kualitas Ultra HD tanpa buffering. 
              Didukung oleh jaringan fiber optik berkecepatan tinggi dan teknologi terdepan.
            </p>
            <div className="flex items-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <button 
                  onClick={() => {
                    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-hover-effect inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300">
                  Pilih Paket
                </button>
              </motion.div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                <span className="text-gray-300 font-medium">Jaringan Aktif</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Streaming Services Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {streamingServices.map((service, index) => (
                <div
                  key={service.name}
                  className="group relative overflow-hidden rounded-lg bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  <div className="flex aspect-video items-center justify-center">
                    <img
                      src={service.logo}
                      alt={service.name}
                      className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
