import { motion } from "framer-motion";
import { Shield, Clock, HeartHandshake, Wifi, Infinity } from "lucide-react";

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
    },
    {
      icon: <Infinity className="w-12 h-12 text-blue-500" />,
      title: "Bebas FUP",
      description: "Nikmati internet tanpa batas kuota dan tanpa FUP selamanya"
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
            Nikmati kebebasan berinternet tanpa batasan kuota dan FUP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="p-6 bg-white rounded-xl shadow-md border-2 border-transparent hover:border-blue-500"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="mb-4"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {reason.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
