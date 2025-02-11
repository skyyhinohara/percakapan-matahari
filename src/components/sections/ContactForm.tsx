import { Button } from "@/components/ui/button";
import { useState, FormEvent, useEffect } from "react";
import { locations } from "./InternetPackages";
import { formatWhatsAppMessage, openWhatsAppChat, extractSpeed } from "@/utils/helpers";
import { usePackageStore } from "@/store/packageStore";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  location: string;
  package: string;
}

export const ContactForm = () => {
  const { selectedLocation, selectedPackage } = usePackageStore();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    location: "",
    package: "",
  });

  // Mendapatkan paket berdasarkan lokasi yang dipilih dan mengurutkan berdasarkan kecepatan
  const getPackagesForLocation = () => {
    if (!formData.location) return [];
    const selectedLocation = locations.find(loc => loc.name === formData.location);
    if (!selectedLocation) return [];
    
    return [...selectedLocation.packages].sort((a, b) => 
      extractSpeed(a.speed) - extractSpeed(b.speed)
    );
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.message &&
      formData.location &&
      formData.package
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      // Reset paket jika lokasi berubah
      if (name === 'location') {
        return { ...prev, [name]: value, package: '' };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      const selectedPackage = getPackagesForLocation().find(p => p.name === formData.package);
      const messageData = {
        ...formData,
        package: selectedPackage ? `${selectedPackage.name} (${selectedPackage.speed} - ${selectedPackage.price}/bulan)` : formData.package
      };
      const message = formatWhatsAppMessage(messageData);
      openWhatsAppChat(message);
    }
  };

  // Update form ketika selectedLocation atau selectedPackage berubah
  useEffect(() => {
    if (selectedLocation || selectedPackage) {
      setFormData(prev => ({
        ...prev,
        location: selectedLocation,
        package: selectedPackage
      }));
    }
  }, [selectedLocation, selectedPackage]);

  const availablePackages = getPackagesForLocation();

  return (
    <section id="kontak" className="py-16 bg-gradient-to-tr from-blue-50 via-white to-purple-50/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Hubungi Kami</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor HP <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan nomor telepon"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lokasi <span className="text-red-500">*</span>
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Pilih Lokasi</option>
                {locations.map((location, index) => (
                  <option key={index} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
            {formData.location && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Paket Internet <span className="text-red-500">*</span>
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Pilih Paket</option>
                  {availablePackages.map((pkg, index) => (
                    <option key={index} value={pkg.name}>
                      {pkg.name} - {pkg.speed} - {pkg.price}/bulan
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pesan <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="Tulis pesan Anda"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Hubungi via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
