
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-on-scroll">Hubungi Kami</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6 animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan nomor telepon"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="Tulis pesan Anda"
              ></textarea>
            </div>
            <div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Kirim Pesan</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
