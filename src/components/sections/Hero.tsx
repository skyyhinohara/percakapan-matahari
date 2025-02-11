
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Koneksi Internet Cepat dan Stabil
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Nikmati layanan internet broadband berkualitas tinggi untuk rumah dan bisnis Anda dengan PT Paket Switch Bersama.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              Mulai Berlangganan
            </Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
              alt="Internet Service"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
