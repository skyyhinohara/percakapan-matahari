import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

const menuItems = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#pricing", label: "Paket Internet" },
  { href: "#streaming", label: "Streaming" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

const GlowingBorder = () => {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setGlowPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(600px circle at ${glowPos.x}px ${glowPos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    />
  );
};

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerSpring = useSpring({
    from: { background: 'rgba(255, 255, 255, 0)', backdropFilter: 'blur(0px)' },
    to: {
      background: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
      backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
    },
  });

  return (
    <animated.header 
      style={headerSpring}
      className="fixed top-0 w-full z-50 transition-shadow"
    >
      <GlowingBorder />
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between relative">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Globe className="h-6 w-6 text-blue-600" />
              <div className="absolute inset-0 bg-blue-400 blur-lg opacity-30" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PT Paket Switch Bersama
            </span>
          </motion.div>

          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 bg-white/10 backdrop-blur-lg p-2 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-gray-600 hover:text-blue-600 transition-colors py-2"
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-y-0 right-0 w-64 bg-white/80 backdrop-blur-lg shadow-lg md:hidden"
              >
                <div className="flex flex-col p-4 space-y-4">
                  {menuItems.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden md:block"
          >
            <Button 
              onClick={() => {
                const element = document.getElementById('kontak');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Hubungi Kami
            </Button>
          </motion.div>
        </div>
      </div>
    </animated.header>
  );
};
