
import { Button } from "@/components/ui/button";
import { Globe, WifiHigh, Network, Computer } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">PT Paket Switch Bersama</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-600 hover:text-blue-600">Beranda</a>
              <a href="#layanan" className="text-gray-600 hover:text-blue-600">Layanan</a>
              <a href="#tentang" className="text-gray-600 hover:text-blue-600">Tentang Kami</a>
              <a href="#kontak" className="text-gray-600 hover:text-blue-600">Kontak</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Hubungi Kami</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Koneksi Internet Cepat dan Stabil
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Nikmati layanan internet broadband berkualitas tinggi untuk rumah dan bisnis Anda dengan PT Paket Switch Bersama.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Mulai Berlangganan
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Internet Service"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <WifiHigh className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Internet Rumah</h3>
              <p className="text-gray-600">Paket internet rumah dengan kecepatan tinggi untuk kebutuhan streaming dan gaming.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Network className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Internet Bisnis</h3>
              <p className="text-gray-600">Solusi koneksi dedicated untuk kebutuhan bisnis dengan SLA terjamin.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Computer className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Solusi Enterprise</h3>
              <p className="text-gray-600">Layanan korporat dengan dukungan teknis 24/7 dan infrastruktur terdepan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">PT Paket Switch Bersama</h4>
              <p className="text-gray-400">Menyediakan layanan internet berkualitas untuk Indonesia yang lebih baik.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Internet Rumah</li>
                <li>Internet Bisnis</li>
                <li>Solusi Enterprise</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Karir</li>
                <li>Kontak</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@paketswitch.id</li>
                <li>Tel: (021) 1234-5678</li>
                <li>WhatsApp: 0812-3456-7890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT Paket Switch Bersama. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
