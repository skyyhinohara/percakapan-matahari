
import { motion } from "framer-motion";
import { Shield, Clock, HeartHandshake, Wifi } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Koneksi Stabil",
      description: "Stabilitas jaringan 99.9% dengan backup link"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Support 24/7",
      description: "Tim teknis siap membantu Anda 24 jam sehari"
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-blue-500" />,
      title: "Layanan Prima",
      description: "Kepuasan pelanggan adalah prioritas utama kami"
    },
    {
      icon: <Wifi className="w-12 h-12 text-blue-500" />,
      title: "Teknologi Terkini",
      description: "Menggunakan perangkat dan teknologi terbaru"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Mengapa Memilih Kami?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen memberikan layanan internet terbaik dengan dukungan infrastruktur modern dan tim profesional yang berpengalaman.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
