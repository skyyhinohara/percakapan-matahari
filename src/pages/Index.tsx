
import { Button } from "@/components/ui/button";
import { Globe, WifiHigh, Network, Computer, Check } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
      elem.classList.add('opacity-0');
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-on-scroll">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-on-scroll">
              <WifiHigh className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Internet Rumah</h3>
              <p className="text-gray-600">Paket internet rumah dengan kecepatan tinggi untuk kebutuhan streaming dan gaming.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-on-scroll">
              <Network className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Internet Bisnis</h3>
              <p className="text-gray-600">Solusi koneksi dedicated untuk kebutuhan bisnis dengan SLA terjamin.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-on-scroll">
              <Computer className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Solusi Enterprise</h3>
              <p className="text-gray-600">Layanan korporat dengan dukungan teknis 24/7 dan infrastruktur terdepan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-on-scroll">Paket Internet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Paket Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">Rp 299K</span>
                  <span className="text-gray-500">/bulan</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Kecepatan up to 30 Mbps</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited Kuota</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Support 24/7</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Pilih Paket</Button>
              </div>
            </div>

            {/* Pro Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll border-2 border-blue-600 transform scale-105">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Paket Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">Rp 499K</span>
                  <span className="text-gray-500">/bulan</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Kecepatan up to 50 Mbps</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited Kuota</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Support 24/7 Prioritas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>IP Static</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Pilih Paket</Button>
              </div>
            </div>

            {/* Business Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Paket Business</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">Rp 999K</span>
                  <span className="text-gray-500">/bulan</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Kecepatan up to 100 Mbps</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited Kuota</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Support 24/7 Dedicated</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>IP Static</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>SLA 99.9%</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Pilih Paket</Button>
              </div>
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
