import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-cyan-500/30 flex flex-col justify-between">
      
      <div>
        {/* ÜST MENÜ (NAVBAR) - SİBER TARZ */}
        <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 bg-black/50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-700 rounded-sm flex items-center justify-center font-bold text-xs tracking-tighter text-white">
              EK
            </div>
            <div className="text-2xl font-extrabold tracking-widest text-slate-100">
              EGSEN<span className="text-cyan-500">.KALIP</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-cyan-400 transition">Hakkımızda</Link>
            <Link href="#" className="hover:text-cyan-400 transition">Makina Parkuru</Link>
            <Link href="#" className="hover:text-cyan-400 transition">Üretim</Link>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-green-500 tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            SİSTEM AKTİF
          </div>
        </nav>

        {/* ANA VİTRİN (HERO SECTION) */}
        <main className="max-w-6xl mx-auto px-8 py-20 flex flex-col items-center text-center gap-8 mt-4">
          
          {/* Üst Etiket */}
          <div className="inline-block px-4 py-1.5 border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 font-bold text-xs tracking-[0.3em] uppercase rounded-sm">
            [ EGSEN KALIP MÜHENDİSLİK ]
          </div>
          
          {/* Ana Başlık */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-lg">
            Kusursuz Üretim. <br/>
            <span className="text-cyan-500">Mutlak Hassasiyet.</span>
          </h1>
          
          <p className="text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed tracking-wide">
            Gaziantep'ten dünyaya açılan ağır sanayi gücü. Alman disiplini ve Japon teknolojisiyle donatılmış, sıfır hata toleranslı CNC ve kalıp operasyonları.
          </p>

          {/* YANIP SÖNEN GLOW BUTONLAR */}
          <div className="flex gap-6 mt-4">
            <button className="px-8 py-4 bg-cyan-950/40 border border-cyan-500 text-cyan-400 font-bold text-sm tracking-widest uppercase hover:bg-cyan-900/60 transition shadow-[0_0_15px_rgba(6,182,212,0.4)] animate-pulse">
              ÜRETİMİ İNCELE
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-bold text-sm tracking-widest uppercase hover:bg-slate-800 transition">
              MAKİNA PARKURU
            </button>
          </div>

          {/* VİDEO ALANI (DeepNode Tarzı) */}
          <div className="w-full max-w-4xl mt-16 aspect-video bg-[#0a0a0a] border border-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center group shadow-2xl shadow-cyan-900/20">
             
             {/* Hafif Karartma Efekti */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black/40 to-black opacity-80 z-10 pointer-events-none"></div>
             
             {/* Play Butonu */}
             <div className="w-20 h-20 bg-cyan-500/20 border border-cyan-500 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition duration-300 cursor-pointer shadow-[0_0_30px_rgba(6,182,212,0.3)] z-20">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-cyan-400 border-b-8 border-b-transparent ml-1"></div>
             </div>
             
             {/* Sol Alt Yazı */}
             <div className="absolute bottom-4 left-4 text-xs font-mono text-cyan-500/50 tracking-widest z-20">
               WATCH_FACTORY_TOUR_V1.mp4
             </div>

             {/* EFSANE KALIP VİDEOSU */}
             <video 
               src="/kalip.mp4" 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen"
             ></video>
          </div>
        </main>
      </div>

      {/* SİBER ADRES ALANI (FOOTER) */}
      <footer className="w-full border-t border-white/10 mt-24 py-8 px-8 bg-[#020202]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono tracking-widest text-slate-500">
          <div className="text-cyan-500 font-bold text-sm">
            EGSEN KALIP MÜHENDİSLİK
          </div>
          <div className="text-center md:text-right leading-relaxed uppercase">
            Busem Sanayi Sitesi, Taşlıca E 90 27660<br/>
            H Blok No:8 Şehitkamil / GAZİANTEP
          </div>
        </div>
      </footer>
      
    </div>
  );
}