import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, DollarSign, Truck, Palette } from 'lucide-react';

const products = [
  { name: 'Spanduk & Banner', icon: '🎯', description: 'Promosi outdoor yang menarik' },
  { name: 'Brosur & Flyer', icon: '📄', description: 'Media promosi praktis' },
  { name: 'Undangan', icon: '💌', description: 'Undangan elegan dan berkesan' },
  { name: 'Stiker & Label', icon: '🏷️', description: 'Branding produk yang menarik' },
  { name: 'Banner Indoor', icon: '🖼️', description: 'Dekorasi ruangan profesional' },
  { name: 'Kartu Nama', icon: '🎫', description: 'Identitas bisnis yang memorable' },
];

const advantages = [
  {
    icon: Zap,
    title: 'Proses Cepat',
    description: 'Pengerjaan express dalam 24 jam untuk kebutuhan mendesak'
  },
  {
    icon: DollarSign,
    title: 'Harga Terjangkau',
    description: 'Harga kompetitif dengan kualitas terjamin tanpa kompromi'
  },
  {
    icon: Palette,
    title: 'Desain Gratis',
    description: 'Konsultasi dan revisi desain gratis hingga Anda puas'
  },
  {
    icon: Truck,
    title: 'Pengiriman Nasional',
    description: 'Jangkauan pengiriman ke seluruh Indonesia dengan aman'
  },
];

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Owner Toko Elektronik',
    content: 'Spanduk promosi dari DigitalPrint Pro sangat berkualitas. Warna cerah dan tahan lama!',
    rating: 5
  },
  {
    name: 'Sari Dewi',
    role: 'Event Organizer',
    content: 'Pelayanan cepat dan hasil memuaskan. Tim sangat responsif terhadap kebutuhan kami.',
    rating: 5
  },
  {
    name: 'Ahmad Rizki',
    role: 'Marketing Manager',
    content: 'Sudah langganan 2 tahun. Konsisten dalam kualitas dan selalu tepat waktu.',
    rating: 5
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Solusi Digital Printing<br />
            <span className="text-accent-light">Cepat & Berkualitas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Wujudkan kebutuhan printing Anda dengan teknologi terdepan, 
            kualitas premium, dan pelayanan yang memuaskan
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/layanan" className="btn-hero inline-flex items-center">
              Lihat Layanan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/kontak" className="btn-secondary inline-flex items-center">
              Pesan Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Produk <span className="gradient-text">Populer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Berbagai pilihan produk printing berkualitas untuk kebutuhan bisnis dan personal Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card-floating text-center group">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mengapa Pilih <span className="gradient-text">Kami?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan utama untuk kebutuhan digital printing Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Testimoni <span className="gradient-text">Pelanggan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-floating">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Siap Mewujudkan Proyek Anda?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Konsultasikan kebutuhan printing Anda sekarang dan dapatkan penawaran terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/kontak" className="btn-secondary">
                Mulai Konsultasi
              </Link>
              <button
                onClick={() => window.open('https://wa.me/628123456789?text=Halo, saya mau pesan layanan Digital Printing', '_blank')}
                className="btn-secondary"
              >
                Chat WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
