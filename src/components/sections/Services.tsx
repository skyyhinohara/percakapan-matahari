
import { WifiHigh, Network, Computer } from "lucide-react";

export const Services = () => {
  return (
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
  );
};
