import { WifiHigh, Network, Computer } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      icon: <WifiHigh className="h-12 w-12 text-blue-500" />,
      title: "Internet Rumah",
      description: "Paket internet rumah dengan kecepatan tinggi untuk kebutuhan streaming dan gaming."
    },
    {
      icon: <Network className="h-12 w-12 text-blue-500" />,
      title: "Internet Bisnis",
      description: "Solusi koneksi dedicated untuk kebutuhan bisnis dengan SLA terjamin."
    },
    {
      icon: <Computer className="h-12 w-12 text-blue-500" />,
      title: "Solusi Enterprise",
      description: "Layanan korporat dengan dukungan teknis 24/7 dan infrastruktur terdepan."
    }
  ];

  return (
    <section id="layanan" className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Layanan Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pilih layanan yang sesuai dengan kebutuhan Anda, mulai dari paket rumahan hingga solusi enterprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 
                         bg-gradient-to-br from-white to-blue-50/30
                         border border-blue-100/20"
            >
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
