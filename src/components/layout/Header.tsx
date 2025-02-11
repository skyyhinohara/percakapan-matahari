import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#pricing", label: "Paket Internet" },
  { href: "#streaming", label: "Streaming" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

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

const menuItemVariants = {
  closed: { x: 50, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  })
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    const whatsappNumber = "6282177887757";
    const message = encodeURIComponent(
      "Halo, saya ingin bertanya tentang layanan internet.\n\n" +
      "Mohon isi format berikut:\n" +
      "Nama:\nEmail:\nTelepon:\n\nPesan:"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">PT Paket Switch Bersama</span>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg md:hidden"
              >
                <div className="flex flex-col p-4 space-y-4">
                  {menuItems.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      custom={i}
                      variants={menuItemVariants}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Button 
            onClick={handleContactClick}
            className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700"
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </header>
  );
};
