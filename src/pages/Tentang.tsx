import { Users, Target, Eye, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Misi Kami',
    description: 'Memberikan layanan digital printing terbaik dengan teknologi terdepan dan pelayanan yang memuaskan untuk membantu kesuksesan bisnis klien.'
  },
  {
    icon: Eye,
    title: 'Visi Kami', 
    description: 'Menjadi penyedia layanan digital printing terdepan di Indonesia yang dikenal karena kualitas, inovasi, dan kepercayaan pelanggan.'
  },
  {
    icon: Award,
    title: 'Komitmen Kami',
    description: 'Berkomitmen untuk selalu mengutamakan kualitas hasil, ketepatan waktu, dan kepuasan pelanggan dalam setiap layanan yang kami berikan.'
  },
];

const team = [
  { name: 'Ahmad Rizki', role: 'Founder & CEO', experience: '10+ tahun' },
  { name: 'Sari Widya', role: 'Creative Director', experience: '8+ tahun' },
  { name: 'Budi Santoso', role: 'Production Manager', experience: '7+ tahun' },
  { name: 'Maya Indira', role: 'Quality Control', experience: '5+ tahun' },
];

const stats = [
  { number: '5000+', label: 'Proyek Selesai' },
  { number: '1200+', label: 'Klien Puas' },
  { number: '8+', label: 'Tahun Pengalaman' },
  { number: '24/7', label: 'Customer Support' },
];

export default function Tentang() {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang <span className="gradient-text">DigitalPrint Pro</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kepercayaan Anda adalah prioritas utama kami dalam memberikan layanan digital printing berkualitas tinggi
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cerita <span className="gradient-text">Perjalanan Kami</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  DigitalPrint Pro didirikan pada tahun 2016 dengan visi sederhana namun kuat: memberikan layanan 
                  digital printing berkualitas tinggi yang dapat diandalkan oleh berbagai kalangan, mulai dari 
                  individual hingga perusahaan besar.
                </p>
                <p>
                  Berawal dari sebuah workshop kecil dengan satu mesin digital printing, kami terus berkembang 
                  dan berinovasi. Kini, kami telah melayani lebih dari 1200 klien dengan berbagai kebutuhan 
                  cetak yang beragam.
                </p>
                <p>
                  Dengan pengalaman lebih dari 8 tahun, tim profesional yang berpengalaman, dan teknologi 
                  printing terdepan, kami siap menjadi partner terpercaya untuk semua kebutuhan digital 
                  printing Anda.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Users className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold text-muted-foreground">Tim Profesional Kami</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Vision Mission Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Visi, Misi & <span className="gradient-text">Komitmen</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-floating text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tim <span className="gradient-text">Profesional</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-floating text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Berkolaborasi dengan Kami?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Mari wujudkan kebutuhan digital printing Anda bersama tim profesional kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">
              Mulai Konsultasi
            </button>
            <button
              onClick={() => window.open('https://wa.me/628123456789?text=Halo, saya ingin mengetahui lebih lanjut tentang DigitalPrint Pro', '_blank')}
              className="btn-secondary"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}