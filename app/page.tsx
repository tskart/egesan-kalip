'use client';
import React from 'react';

export default function DeepNodeCommandCenter() {
  return (
    <main className="min-h-screen bg-[#030303] text-gray-300 font-mono overflow-hidden selection:bg-cyan-900 selection:text-cyan-100">
      
      {/* Özel Animasyonlar için CSS (Kayar Bant) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: 200%;
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* ÜST MENÜ (AÇILIR MENÜ / DROPDOWN ENTEGRELİ) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs tracking-[0.2em]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-500 animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
            <span className="text-white font-bold uppercase">DeepNode AI</span>
          </div>
          
          <div className="hidden md:flex gap-10 items-center text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">HOME</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">ENTERPRISE API</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">LLM ORCHESTRATION</a>
            
            {/* DAHA FAZLASI - DROPDOWN BÖLÜMÜ */}
            <div className="relative group py-6">
              <button className="flex items-center gap-2 hover:text-cyan-400 text-white font-bold transition-colors">
                DAHA FAZLASI
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {/* Açılır Kutu */}
              <div className="absolute top-16 left-0 w-56 bg-[#0a0a0a] border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col shadow-2xl shadow-cyan-900/20">
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-cyan-400 border-b border-white/5 transition-colors">APPLIED ARCHITECTURE</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-cyan-400 border-b border-white/5 transition-colors">SYNERGY HUB</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-cyan-400 border-b border-white/5 transition-colors">ARCHITECTURE INSIGHTS</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-cyan-400 transition-colors">CONTRACT RESEARCH</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-10 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SOL TARAF - OTONOM FATURA İŞLEME MERKEZİ */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="border border-white/10 bg-[#0a0a0a] p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            
            <h1 className="text-2xl text-white font-bold mb-2">OTONOM VERİ ÇIKARIMI (FAIL-CLOSED)</h1>
            <p className="text-gray-500 text-sm mb-6 max-w-xl">
              Sistem şu an güvenli karantina modundadır. Fatura görseli hafızaya alınmış, ancak API anahtarları doğrulanana kadar veri işleme protokolü durdurulmuştur.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Fatura Görseli Alanı (Japonca Fatura vs buraya gelecek) */}
              <div className="w-full md:w-1/2 aspect-[3/4] bg-black border border-red-900/50 relative group flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                 {/* Faturayı public içine atıp ismini buraya yazabilirsin */}
                 <img src="/Japan_formal_receipt.png" alt="Invoice" className="w-full h-full object-contain opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500" onError={(e) => e.currentTarget.style.display = 'none'} />
                 <div className="absolute z-10 text-red-500 text-xs border border-red-500/50 bg-red-900/20 px-2 py-1 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                   [ SYS_ERROR ] API_KEY_MISSING
                 </div>
                 {/* Lazer Tarama Efekti (Beklemede) */}
                 <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 shadow-[0_0_8px_#ef4444] animate-[bounce_4s_infinite] opacity-50"></div>
              </div>
              
              {/* Çıktı Ekranı */}
              <div className="w-full md:w-1/2 bg-black border border-white/5 p-4 font-mono text-xs flex flex-col gap-2 relative">
                <div className="text-cyan-600 mb-2 border-b border-white/5 pb-2">{'// TERMINAL OUTPUT'}</div>
                <div className="text-gray-500">Initializing document scan...</div>
                <div className="text-gray-500">Language detected: <span className="text-gray-300">Japanese / Kanji</span></div>
                <div className="text-red-400 mt-2">FATAL: Orchestration API endpoint unreachable.</div>
                <div className="text-red-400">Initiating digital immunology protocol.</div>
                <div className="text-red-500 mt-4 animate-pulse">STATUS: FAIL-CLOSED SECURE STATE</div>
              </div>
            </div>
          </div>
        </div>

        {/* SAĞ TARAF - BLACKSEA AGRO KAYAR VİTRİN */}
        <div className="lg:col-span-4 flex flex-col gap-4 relative">
          <div className="text-xs text-cyan-500 font-bold tracking-widest border-b border-cyan-900/50 pb-2 mb-2">
            AGRO-CYBERNETICS DATA STREAM
          </div>
          
          {/* Sonsuz Kayan Resim Bandı */}
          <div className="overflow-hidden relative w-full h-[600px] border border-white/5 bg-black/50">
            <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10 pointer-events-none"></div>
            
            <div className="flex flex-col gap-4 animate-scroll" style={{ width: '100%', animation: 'scroll 15s linear infinite', flexDirection: 'column', height: '200%' }}>
              
              {/* Görsellerin Dizilimi (b1.webp, b2.webp vs. public klasörüne atılmalı) */}
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className="w-full h-48 relative overflow-hidden group cursor-crosshair border border-transparent hover:border-cyan-500/50 transition-colors z-20">
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-all z-10 duration-500"></div>
                  
                  {/* Resim ve Dev Zoom Efekti */}
                  <img 
                    src={`/b${item}.webp`} 
                    alt={`Blacksea Data ${item}`} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 origin-center" 
                    onError={(e) => e.currentTarget.style.display = 'none'} 
                  />
                  
                  {/* Hover Anında Çöken Neon Işık */}
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(6,182,212,0)] group-hover:shadow-[inset_0_0_50px_rgba(6,182,212,0.6)] transition-all duration-700 z-20 pointer-events-none"></div>
                  
                  <div className="absolute bottom-2 left-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-black/80 text-cyan-400 text-[10px] px-2 py-1 border border-cyan-900/50">
                      EXTRACTING_DATA_0{item}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </main>
  );
}