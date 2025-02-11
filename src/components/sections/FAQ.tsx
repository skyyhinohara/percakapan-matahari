import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Apa itu FUP dan mengapa layanan kami bebas FUP?",
    answer: "FUP (Fair Usage Policy) adalah kebijakan pembatasan kecepatan internet setelah pengguna mencapai kuota tertentu. Kami memilih untuk tidak menerapkan FUP karena berkomitmen memberikan pengalaman internet tanpa batas. Dengan teknologi jaringan modern dan manajemen bandwidth yang efisien, kami dapat menjamin kecepatan konsisten tanpa pembatasan, sehingga Anda bisa streaming, gaming, atau bekerja tanpa khawatir kecepatan akan menurun."
  },
  {
    question: "Bagaimana proses pemasangan internet di lokasi saya?",
    answer: "Proses pemasangan internet kami sangat terstruktur dan profesional: 1) Survey lokasi gratis untuk mengecek ketersediaan jaringan dan titik pemasangan optimal, 2) Penentuan jadwal pemasangan sesuai kenyamanan Anda, 3) Instalasi oleh teknisi berpengalaman dengan peralatan standar industri, 4) Pemasangan perangkat dan konfigurasi jaringan, 5) Tes kecepatan dan stabilitas koneksi, 6) Edukasi penggunaan dan maintenance kepada pelanggan. Proses ini biasanya memakan waktu 2-4 jam tergantung kondisi lokasi."
  },
  {
    question: "Apa yang membedakan layanan kami dengan provider lain?",
    answer: "Keunggulan utama kami meliputi: 1) Bebas FUP - tidak ada pembatasan kecepatan, 2) Infrastruktur modern dengan teknologi terbaru, 3) Backup link untuk menjamin stabilitas 99.9%, 4) Support teknis 24/7 dengan respons cepat, 5) Paket yang fleksibel sesuai kebutuhan, 6) Tidak ada biaya tersembunyi, 7) Monitoring jaringan real-time, dan 8) Garansi kepuasan dengan masa uji coba. Semua ini didukung oleh tim profesional yang berpengalaman dalam industri telekomunikasi."
  },
  {
    question: "Bagaimana sistem backup link bekerja?",
    answer: "Sistem backup link kami menggunakan teknologi redundansi canggih yang secara otomatis mengalihkan koneksi ke jalur cadangan saat jalur utama mengalami gangguan. Proses switching ini terjadi dalam hitungan milidetik, sehingga aktivitas online Anda tidak terputus. Kami menggunakan multiple upstream provider dan route optimization untuk memastikan performa optimal. Sistem ini dimonitor 24/7 oleh tim NOC (Network Operation Center) kami."
  },
  {
    question: "Apakah ada biaya tersembunyi dalam layanan?",
    answer: "Tidak ada biaya tersembunyi dalam layanan kami. Biaya yang Anda bayar sudah termasuk: 1) Instalasi dan aktivasi, 2) Perangkat utama (router dan peralatan pendukung), 3) Maintenance rutin, 4) Support teknis 24/7, 5) Fitur tambahan seperti IP Static (untuk paket tertentu). Kami berkomitmen pada transparansi harga dan akan menginformasikan setiap komponen biaya sebelum Anda berlangganan."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={false}
      className={`border-b border-gray-200 last:border-b-0 ${
        isOpen ? 'bg-blue-50/30' : 'hover:bg-gray-50'
      } transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl`}
    >
      <button
        className="w-full py-6 px-8 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-900 pr-6">{question}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="ml-4 flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="w-6 h-6 text-blue-500" />
          ) : (
            <Plus className="w-6 h-6 text-blue-500" />
          )}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-8 pr-16">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[40rem] h-[40rem] bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan internet kami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl"
        >
          <div className="divide-y divide-gray-200 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
