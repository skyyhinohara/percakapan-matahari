// Format pesan WhatsApp
export const formatWhatsAppMessage = (data: {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  package?: string;
  message?: string;
}) => {
  const { name, email, phone, location, package: pkg, message } = data;
  let formattedMessage = "Halo, saya ingin berlangganan internet:\n\n";

  if (name) formattedMessage += `Nama: ${name}\n`;
  if (email) formattedMessage += `Email: ${email}\n`;
  if (phone) formattedMessage += `No. HP: ${phone}\n`;
  if (location) formattedMessage += `Lokasi: ${location}\n`;
  if (pkg) formattedMessage += `Paket: ${pkg}\n`;
  if (message) formattedMessage += `Pesan:\n${message}`;

  return encodeURIComponent(formattedMessage);
};

// Nomor WhatsApp customer service
export const WHATSAPP_NUMBER = "6282177887757";

// Fungsi untuk membuka chat WhatsApp
export const openWhatsAppChat = (message: string) => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
};

// Mengekstrak angka dari string kecepatan (misal: "20 Mbps" -> 20)
export const extractSpeed = (speed: string): number => {
  const match = speed.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};
