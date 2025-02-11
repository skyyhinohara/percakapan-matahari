
import { motion } from "framer-motion";
import { Wifi, Globe, Zap } from "lucide-react";

export const InternetExplanation = () => {
  const features = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: "Koneksi Nirkabel",
      description: "Internet tanpa kabel yang memungkinkan Anda terhubung dari mana saja"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Jangkauan Global",
      description: "Akses ke jutaan website dan layanan dari seluruh dunia"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Kecepatan Tinggi",
      description: "Transfer data cepat untuk streaming, gaming, dan download"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Memahami Internet</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Internet adalah jaringan global yang menghubungkan miliaran perangkat di seluruh dunia, memungkinkan pertukaran informasi, komunikasi, dan akses ke berbagai layanan digital dengan cepat dan mudah.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-blue-50 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80"
            alt="Internet Technology"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <p className="text-white text-lg max-w-2xl">
              Dengan teknologi fiber optik modern, kami menyediakan koneksi internet yang stabil dan cepat untuk mendukung semua kebutuhan digital Anda.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
