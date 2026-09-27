'use client';
import React from 'react';

export default function EgesanKalip() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-orange-500 selection:text-white">
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

      {/* ANA VİTRİN (HERO) - AĞIR SANAYİ MESAJI */}
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
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all border border-orange-500 uppercase tracking-widest">
            Üretimi İncele
          </button>
          <button className="px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/20 transition-all uppercase tracking-widest">
            Makina Parkuru
          </button>
        </div>
      </section>

      {/* VİDEO ALANI - CNC VE İŞÇİLİK ŞOVU */}
      <section className="relative w-full max-w-5xl mx-auto px-6 mb-24">
        <div className="relative aspect-video bg-[#111] border border-white/10 p-2 rounded-sm shadow-2xl shadow-orange-900/10">
          {/* Çerçeve İçi Tasarım */}
          <div className="absolute inset-0 z-10 pointer-events-none border border-orange-500/20 m-2"></div>
          
          {/* VİDEO KODU (İsmini public klasöründeki video adına göre değiştirebilirsin) */}
          <video 
            className="w-full h-full object-cover opacity-90"
            autoPlay 
            loop 
            muted 
            playsInline
            src="/WATCH_FACTORY_TOUR_V1.mp4" 
          >
          </video>
          
          {/* Video Üstü Teknik Detay HUD */}
          <div className="absolute top-6 left-6 z-20 font-mono text-[10px] text-orange-500 tracking-widest flex flex-col gap-1 bg-black/60 p-2 rounded">
            <span>REC // CNC_MILLING_01</span>
            <span>TOLERANCE: ±0.001mm</span>
          </div>
        </div>
      </section>

      {/* İHRACAT VİZYONU */}
      <section className="border-t border-white/10 bg-[#0a0a0a] py-24 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Gaziantep'ten Dünyaya</h2>
        <h3 className="text-xl md:text-2xl text-gray-500 font-light mb-8">Küresel Standartlarda Üretim</h3>
        <p className="max-w-3xl mx-auto text-gray-400 font-mono text-sm border border-white/10 p-6 bg-black/50 leading-loose">
          Yüksek hassasiyetli CNC işleme, endüstriyel kalıp tasarımı ve uluslararası normlara uygun sıfır kayıp üretim orkestrasyonu.
        </p>
      </section>

      {/* ALT BİLGİ (FOOTER) - İLETİŞİM */}
      <footer className="border-t border-white/10 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-mono text-xs text-gray-500">
          
          {/* İletişim Bilgileri */}
          <div className="flex flex-col gap-1 text-left border-l-2 border-orange-500 pl-4">
            <span className="text-white font-bold text-sm mb-2">EGSEN KALIP MÜHENDİSLİK</span>
            <span className="text-orange-400 font-bold text-sm">EYÜP AYTAÇ</span>
            <span className="text-gray-300 text-sm">0537 254 1947</span>
          </div>

          {/* Adres */}
          <div className="text-left md:text-right">
            <p className="mb-1">BUSEM SANAYİ SİTESİ, TAŞLICA E 90 27660</p>
            <p>H BLOK NO:8 ŞEHİTKAMİL / GAZİANTEP</p>
          </div>

        </div>
      </footer>
    </main>
  );
}