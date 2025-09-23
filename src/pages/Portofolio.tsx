import { useState } from 'react';
import { cn } from '@/lib/utils';

const categories = ['Semua', 'Spanduk', 'Brosur', 'Undangan', 'Stiker', 'Banner', 'Kartu Nama'];

const portfolioItems = [
  { id: 1, category: 'Spanduk', title: 'Spanduk Promosi Toko', image: '/api/placeholder/400/300' },
  { id: 2, category: 'Brosur', title: 'Brosur Company Profile', image: '/api/placeholder/400/300' },
  { id: 3, category: 'Undangan', title: 'Undangan Pernikahan Elegan', image: '/api/placeholder/400/300' },
  { id: 4, category: 'Stiker', title: 'Stiker Branding Produk', image: '/api/placeholder/400/300' },
  { id: 5, category: 'Banner', title: 'Banner Event Musik', image: '/api/placeholder/400/300' },
  { id: 6, category: 'Kartu Nama', title: 'Kartu Nama Profesional', image: '/api/placeholder/400/300' },
  { id: 7, category: 'Spanduk', title: 'Spanduk Grand Opening', image: '/api/placeholder/400/300' },
  { id: 8, category: 'Brosur', title: 'Brosur Menu Restoran', image: '/api/placeholder/400/300' },
  { id: 9, category: 'Undangan', title: 'Undangan Ulang Tahun', image: '/api/placeholder/400/300' },
];

export default function Portofolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = activeCategory === 'Semua' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Portofolio <span className="gradient-text">Hasil Karya</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lihat berbagai hasil cetak berkualitas tinggi yang telah kami hasilkan untuk klien-klien terpercaya
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-xl font-semibold transition-all duration-200",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="card-floating group cursor-pointer">
              <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🖨️</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  {item.category}
                </span>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hasil cetak berkualitas tinggi dengan detail yang sempurna
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-accent to-accent-light rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wujudkan Ide Kreatif Anda
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Konsultasikan desain dan kebutuhan cetak Anda bersama tim ahli kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-accent px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors duration-200">
              Lihat Layanan
            </button>
            <button
              onClick={() => window.open('https://wa.me/628123456789?text=Halo, saya tertarik dengan portofolio Digital Printing', '_blank')}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200"
            >
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}