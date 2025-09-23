import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat',
    details: ['Jl. Printing Street No. 123', 'Jakarta Selatan 12345', 'Indonesia']
  },
  {
    icon: Phone,
    title: 'Telepon',
    details: ['+62 812-3456-789', '+62 21-1234-5678']
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@digitalprintpro.com', 'order@digitalprintpro.com']
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    details: ['Senin - Jumat: 08:00 - 17:00', 'Sabtu: 08:00 - 15:00', 'Minggu: Tutup']
  },
];

const productTypes = [
  'Spanduk & Banner',
  'Brosur & Flyer', 
  'Undangan',
  'Stiker & Label',
  'Kartu Nama',
  'Lainnya'
];

export default function Kontak() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    productType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Tim kami akan segera merespons dalam 24 jam.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      productType: '',
      message: ''
    });
  };

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hubungi <span className="gradient-text">Kami</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Siap membantu mewujudkan kebutuhan digital printing Anda. Konsultasi gratis dan respons cepat!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-8">Informasi Kontak</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
              <h3 className="font-semibold text-lg mb-2 text-green-800">Chat Langsung via WhatsApp</h3>
              <p className="text-green-700 mb-4">Dapatkan respons lebih cepat melalui WhatsApp kami</p>
              <button
                onClick={() => window.open('https://wa.me/628123456789?text=Halo, saya mau pesan layanan Digital Printing', '_blank')}
                className="w-full bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Chat WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-floating">
              <h2 className="text-2xl font-bold mb-8">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="08123456789"
                    />
                  </div>
                  <div>
                    <label htmlFor="productType" className="block text-sm font-medium mb-2">
                      Jenis Produk *
                    </label>
                    <select
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Pilih jenis produk</option>
                      {productTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan / Detail Kebutuhan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Jelaskan detail kebutuhan printing Anda (ukuran, quantity, deadline, dll)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 px-8 rounded-xl font-semibold hover:shadow-float hover:scale-105 transition-all duration-300"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Lokasi Kami</h2>
          <div className="aspect-[16/9] bg-muted rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741095493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPasar%20Tanah%20Abang!5e0!3m2!1sen!2sid!4v1635724177308!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi DigitalPrint Pro"
            />
          </div>
        </div>
      </div>
    </div>
  );
}