import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/628123456789?text=Halo, saya mau pesan layanan Digital Printing', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}