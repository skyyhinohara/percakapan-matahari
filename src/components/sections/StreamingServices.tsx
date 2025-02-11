import { motion } from "framer-motion";

const streamingServices = [
  {
    name: "Netflix",
    logo: "/streaming/netflix.png",
  },
  {
    name: "Prime Video",
    logo: "/streaming/prime.png",
  },
  {
    name: "YouTube",
    logo: "/streaming/youtube.png",
  },
  {
    name: "HBO Max",
    logo: "/streaming/hbo.png",
  },
  {
    name: "Apple TV",
    logo: "/streaming/apple-tv.png",
  },
  {
    name: "Disney+",
    logo: "/streaming/disney.png",
  },
];

export const StreamingServices = () => {
  return (
    <section id="streaming"className="relative py-20 overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/10 w-2 h-2 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nikmati Streaming Tanpa Batas
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Streaming film, serial TV, dan konten favorit Anda dengan kualitas Ultra HD tanpa buffering. 
              Didukung oleh jaringan fiber optik berkecepatan tinggi dan teknologi terdepan.
            </p>
            <div className="flex items-center space-x-4">
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold cursor-pointer shadow-lg shadow-blue-500/25"
              >
                Pilih Paket
              </motion.a>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-300">Jaringan Aktif</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Streaming Services Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {streamingServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="aspect-video relative flex items-center justify-center">
                  <img
                    src={service.logo}
                    alt={service.name}
                    className="w-auto h-12 object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Futuristic Line Decorations */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
    </section>
  );
};
