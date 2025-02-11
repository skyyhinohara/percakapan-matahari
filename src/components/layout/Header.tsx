
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8`}>
            <a href="#beranda" className="block md:inline text-gray-600 hover:text-blue-600">Beranda</a>
            <a href="#layanan" className="block md:inline text-gray-600 hover:text-blue-600">Layanan</a>
            <a href="#pricing" className="block md:inline text-gray-600 hover:text-blue-600">Paket</a>
            <a href="#kontak" className="block md:inline text-gray-600 hover:text-blue-600">Kontak</a>
          </nav>
          <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">Hubungi Kami</Button>
        </div>
      </div>
    </header>
  );
};
