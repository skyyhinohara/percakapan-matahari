
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">PT Paket Switch Bersama</h4>
            <p className="text-gray-400">Menyediakan layanan internet berkualitas untuk Indonesia yang lebih baik.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Internet Rumah</li>
              <li>Internet Bisnis</li>
              <li>Solusi Enterprise</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tentang Kami</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@paketswitch.id</li>
              <li>WhatsApp: 0821-7788-7757</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PT Paket Switch Bersama. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};
