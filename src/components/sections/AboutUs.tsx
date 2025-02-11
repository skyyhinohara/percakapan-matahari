
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Siapa Kami?</h2>
            <p className="text-lg text-gray-600 mb-6">
              PT Paket Switch Bersama adalah penyedia layanan internet terpercaya yang telah melayani ribuan pelanggan di seluruh Indonesia. Dengan infrastruktur modern dan tim berpengalaman, kami berkomitmen memberikan koneksi internet stabil dan cepat untuk mendukung kebutuhan digital Anda.
            </p>
            <p className="text-lg text-gray-600">
              Didirikan sejak 2020, kami terus berinovasi dalam teknologi internet untuk memberikan pengalaman terbaik bagi pelanggan kami.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Team Working"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
