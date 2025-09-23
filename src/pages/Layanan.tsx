import { Link } from 'react-router-dom';
import { Printer, Zap, Palette, Shield } from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: 'Digital Printing',
    description: 'Cetak digital berkualitas tinggi untuk berbagai kebutuhan bisnis dan personal.',
    features: ['Resolusi tinggi', 'Hasil tajam', 'Warna akurat', 'Cepat selesai'],
    price: 'Mulai dari Rp 500/lembar'
  },
  {
    icon: Zap,
    title: 'Offset Printing',
    description: 'Solusi cetak massal dengan kualitas konsisten dan harga ekonomis.',
    features: ['Volume besar', 'Harga ekonomis', 'Kualitas konsisten', 'Berbagai ukuran'],
    price: 'Mulai dari Rp 300/lembar'
  },
  {
    icon: Palette,
    title: 'Sablon',
    description: 'Layanan sablon untuk kaos, tas, dan berbagai material tekstil.',
    features: ['Tahan lama', 'Warna cerah', 'Berbagai material', 'Custom design'],
    price: 'Mulai dari Rp 15.000/pcs'
  },
  {
    icon: Shield,
    title: 'UV Printing',
    description: 'Teknologi cetak UV tahan lama untuk material khusus dan outdoor.',
    features: ['Tahan cuaca', 'Anti UV', 'Material keras', 'Hasil premium'],
    price: 'Mulai dari Rp 25.000/m²'
  },
];

export default function Layanan() {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Layanan <span className="gradient-text">Digital Printing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Berbagai layanan cetak profesional dengan teknologi terdepan dan kualitas terjamin
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-floating">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-accent font-medium">{service.price}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/kontak"
                className="inline-block w-full text-center bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors duration-200"
              >
                Pesan Sekarang
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Konsultasi Layanan?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tim ahli kami siap membantu menentukan layanan terbaik untuk kebutuhan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontak"
              className="btn-secondary"
            >
              Konsultasi Gratis
            </Link>
            <button
              onClick={() => window.open('https://wa.me/628123456789?text=Halo, saya mau konsultasi layanan Digital Printing', '_blank')}
              className="btn-secondary"
            >
              Chat WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}