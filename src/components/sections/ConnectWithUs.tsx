import { motion } from "framer-motion";
import { Network, Zap, Layers } from "lucide-react";

const features = [
  {
    icon: <Network className="w-8 h-8 text-blue-400" />,
    title: "Teknologi Terdepan",
    description: "Infrastruktur jaringan modern dengan teknologi fiber optik terkini untuk kecepatan dan stabilitas maksimal"
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: "Koneksi Super Cepat",
    description: "Nikmati kecepatan download dan upload yang konsisten tanpa buffering atau lag"
  },
  {
    icon: <Layers className="w-8 h-8 text-pink-400" />,
    title: "Paket Fleksibel",
    description: "Pilihan paket yang dapat disesuaikan dengan kebutuhan, dari personal hingga bisnis"
  }
];

export const ConnectWithUs = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-900">
      {/* Animated Circuit Board Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-blue-500 to-purple-500"
            style={{
              height: "2px",
              width: `${30 + Math.random() * 70}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Futuristic Circle Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border-2 border-blue-500/30 rounded-full animate-spin-slow" />
                <div className="absolute w-[90%] h-[90%] border-2 border-purple-500/30 rounded-full animate-spin-reverse-slow" />
                <div className="absolute w-[80%] h-[80%] border-2 border-pink-500/30 rounded-full animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h3 className="text-3xl font-bold text-white mb-4">FASTEST</h3>
                  <p className="text-blue-400 font-semibold">UNLIMITED INTERNET</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="text-center lg:text-left">
              <h4 className="text-blue-400 font-semibold mb-2">TERHUBUNG DENGAN KAMI</h4>
              <h2 className="text-4xl font-bold text-white mb-6">
                Jangan Ragu Terhubung Dengan Tim Kami!
              </h2>
              <p className="text-gray-400 mb-8">
                Ingin menikmati koneksi internet yang cepat, handal, dan bebas gangguan? 
                Hubungi kami sekarang untuk konsultasi gratis dan temukan paket internet 
                terbaik sesuai kebutuhan Anda!
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-gray-800 rounded-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Futuristic Border Effects */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
    </section>
  );
};
