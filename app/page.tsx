'use client';
import React from 'react';

export default function EgsenKalip() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-orange-500 selection:text-white scroll-smooth">
      {/* ÜST MENÜ (NAVBAR) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs font-mono tracking-widest">
          <div className="flex items-center gap-3">
            <span className="bg-orange-600 text-white px-2 py-1 font-bold">EK</span>
            <span className="text-white font-bold tracking-[0.2em]">EGSEN.KALIP</span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-400">
            <a href="#hakkimizda" className="hover:text-orange-500 transition-colors">HAKKIMIZDA</a>
            <a href="#makina" className="hover:text-orange-500 transition-colors">MAKİNA PARKURU</a>
            <a href="#uretim" className="hover:text-orange-500 transition-colors">ÜRETİM</a>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-500 uppercase">Üretim Aktif</span>
          </div>
        </div>
      </nav>

      {/* ANA VİTRİN (HERO) */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center">
        <div className="inline-block border border-orange-500/30 bg-orange-500/10 px-4 py-1 rounded text-orange-500 font-mono text-xs tracking-widest mb-8 uppercase">
          [ Egsen Kalıp Mühendislik ]
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Kusursuz Üretim. <br />
          <span className="text-orange-500">Mutlak Hassasiyet.</span>
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          Gaziantep'ten dünyaya açılan ağır sanayi gücü. İleri mühendislik standartları ve yüksek teknolojiyle donatılmış, sıfır hata toleranslı CNC ve kalıp operasyonları.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
          <a href="#uretim" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all border border-orange-500 uppercase tracking-widest text-center">
            Üretimi İncele
          </a>
          <a href="#makina" className="px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/20 transition-all uppercase tracking-widest text-center">
            Makina Parkuru
          </a>
        </div>
      </section>

      {/* VİDEO ALANI */}
      <section className="relative w-full max-w-5xl mx-auto px-6 mb-24">
        <div className="relative aspect-video bg-[#111] border border-white/10 p-2 rounded-sm shadow-2xl shadow-orange-900/10 overflow-hidden">
          <div className="absolute inset-0 z-10 pointer-events-none border border-orange-500/20 m-2"></div>
          
          {/* Arka planda senin public klasöründeki kalip.mp4 çalışıyor */}
          <video 
            className="w-full h-full object-cover opacity-90"
            autoPlay 
            loop 
            muted 
            playsInline
            src="/kalip.mp4" 
          >
          </video>
          
          {/* Ekrandaki karizmatik yazılar (Senin istediğin o teknik hava) */}
          <div className="absolute top-6 left-6 z-20 font-mono text-[10px] text-orange-500 tracking-widest flex flex-col gap-1 bg-black/60 p-2 rounded border border-orange-500/30">
            <span className="text-white font-bold">FILE: WATCH_FACTORY_TOUR_V1</span>
            <span>REC // CNC_MILLING_01</span>
            <span>TOLERANCE: ±0.001mm</span>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA BÖLÜMÜ */}
      <section id="hakkimizda" className="border-t border-white/10 bg-[#050505] py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="font-mono text-orange-500 text-sm tracking-widest mb-4">[ HAKKIMIZDA ]</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Çeliğe Şekil Veren<br/>Mühendislik Zekası.</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Egsen Kalıp Mühendislik olarak, Gaziantep'in sarsılmaz sanayi altyapısını, modern CNC teknolojisinin ulaştığı en uç sınırlarla birleştiriyoruz. Yılların getirdiği tecrübe ve "sıfır hata" prensibimizle, otomotivden ambalaja kadar birçok kritik sektöre kalıp çözümleri sunuyoruz.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Amacımız sadece kalıp üretmek değil; iş ortaklarımızın üretim hatlarında kesintisiz ve kusursuz bir performans sergileyecek endüstriyel şaheserler yaratmaktır. Kalite, bizim için varılacak bir hedef değil, başlangıç noktasıdır.
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-square relative border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all z-10"></div>
            <div className="w-full h-full bg-[#111] flex items-center justify-center font-mono text-xs text-gray-600 relative">
               <img src="/hakkimizda-vitrin.jpg" alt="Egsen Kalıp Vitrin" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" onError={(e) => e.currentTarget.style.display = 'none'} />
               <span className="absolute z-20 mix-blend-difference text-white">AI_GÖRSEL_BEKLENİYOR: hakkimizda-vitrin.jpg</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAKİNA PARKURU BÖLÜMÜ */}
      <section id="makina" className="border-t border-white/10 bg-[#0a0a0a] py-24 px-6">
         <div className="max-w-5xl mx-auto text-center">
            <div className="font-mono text-orange-500 text-sm tracking-widest mb-4">[ MAKİNA PARKURU ]</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Yüksek Teknoloji CNC Hattı</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="aspect-square relative border border-white/10 overflow-hidden group cursor-crosshair">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                   
                   <div className="w-full h-full bg-[#151515] flex items-center justify-center font-mono text-[10px] text-gray-700 relative">
                      <img src={`/cnc-modul-${item}.jpg`} alt={`CNC Modül ${item}`} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" onError={(e) => e.currentTarget.style.display = 'none'} />
                      <span className="absolute z-20 top-1/2 text-center w-full mix-blend-difference text-white">cnc-modul-{item}.jpg</span>
                   </div>

                   <div className="absolute bottom-4 left-4 z-20 text-left">
                      <div className="font-mono text-orange-500 text-sm mb-1 font-bold">MODÜL 0{item}</div>
                      <div className="text-white text-xs font-mono">5-AXIS PRECISION</div>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* ÜRETİM BÖLÜMÜ */}
      <section id="uretim" className="border-t border-white/10 bg-[#050505] py-24 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
         <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="font-mono text-orange-500 text-sm tracking-widest mb-4">[ ÜRETİM SÜREÇLERİ ]</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Sıfır Tolerans, Kusursuz Kalıp</h2>
            <div className="w-full h-64 border border-dashed border-gray-700 bg-black/60 flex flex-col items-center justify-center p-8 relative">
               <div className="animate-pulse w-3 h-3 bg-orange-500 rounded-full mb-6 shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
               <h3 className="text-xl text-gray-300 font-bold mb-2">OTONOM ÜRETİM BANDI AKTİF</h3>
               <p className="text-gray-500 font-mono text-sm max-w-lg">
                 Tasarım aşamasından kalite kontrole kadar tüm süreçler uluslararası normlara uygun olarak dijital ortamda takip edilmektedir.
               </p>
            </div>
         </div>
      </section>

      {/* İHRACAT VİZYONU */}
      <section className="border-t border-white/10 bg-[#0a0a0a] py-24 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Gaziantep'ten Dünyaya</h2>
        <h3 className="text-xl md:text-2xl text-gray-500 font-light mb-8">Küresel Standartlarda Üretim</h3>
      </section>

      {/* ALT BİLGİ (FOOTER) */}
      <footer className="border-t border-white/10 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-mono text-xs text-gray-500">
          <div className="flex flex-col gap-1 text-left border-l-2 border-orange-500 pl-4">
            <span className="text-white font-bold text-sm mb-2">EGSEN KALIP MÜHENDİSLİK</span>
            <span className="text-orange-400 font-bold text-sm">EYÜP AYTAÇ</span>
            <span className="text-gray-300 text-sm">0537 254 1947</span>
          </div>
          <div className="text-left md:text-right">
            <p className="mb-1">BUSEM SANAYİ SİTESİ, TAŞLICA E 90 27660</p>
            <p>H BLOK NO:8 ŞEHİTKAMİL / GAZİANTEP</p>
          </div>
        </div>
      </footer>
    </main>
  );
}