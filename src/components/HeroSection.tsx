import React from 'react';
import { Landmark, ArrowRight, ShieldCheck, Scale, Award, BookOpen } from 'lucide-react';
import { civicImages } from '../assets/images';

interface HeroSectionProps {
  onStartLearn: (tab: string) => void;
  onOpenReport: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartLearn, onOpenReport }) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Editorial Title & Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed text kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-700 uppercase mb-3">
              <span>Kurikulum Merdeka PPKn</span>
              <span aria-hidden="true">·</span>
              <span>Pendidikan Kewarganegaraan Interaktif</span>
              <span aria-hidden="true">·</span>
              <span>Tingkat Menengah & Umum</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl text-balance">
              Membangun Kesadaran Konstitusi & Kepemimpinan Kewarganegaraan
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Eksplorasi nilai luhur Pancasila, konstitusi UUD NRI 1945, mekanisme saling mengimbangi lembaga negara, dan uji kepekaan nurani melalui simulasi dilema musyawarah warga.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onStartLearn('pancasila')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors shadow-sm whitespace-nowrap"
              >
                <span>Mulai Eksplorasi Pancasila</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onStartLearn('simulasi')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <Scale className="w-4 h-4 text-slate-600" />
                <span>Simulasi Studi Kasus</span>
              </button>

              <button
                onClick={onOpenReport}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>Lihat Sertifikat Rapor</span>
              </button>
            </div>

            {/* Adjacency proof quote */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Materi diselaraskan dengan TAP MPR No. I/MPR/2003, Naskah Komprehensif Perubahan UUD 1945, dan Prinsip Tata Kelola Pemerintahan yang Baik (Good Governance).
              </span>
            </div>
          </div>

          {/* Column 2: Visual Hero Media with Resilient Fallback */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[300px] lg:min-h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-red-950">
              <img
                src={civicImages.heroGaruda}
                alt="Civic Education Garuda Pancasila dan Konstitusi Indonesia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover lg:h-full transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-xs font-semibold tracking-wider text-amber-300 uppercase">
                  Pilar Kebangsaan
                </span>
                <p className="text-sm font-medium text-slate-100 mt-1">
                  Bhinneka Tunggal Ika dalam Naungan Konstitusi Negara Kesatuan Republik Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI strip in full-width row below hero split */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="font-mono text-2xl lg:text-3xl font-bold text-slate-900 tabular-nums">
              5 Sila
            </span>
            <span className="text-xs text-slate-500 mt-1">
              45 Butir Pengamalan TAP MPR & Contoh Konkret
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl lg:text-3xl font-bold text-slate-900 tabular-nums">
              8 Lembaga
            </span>
            <span className="text-xs text-slate-500 mt-1">
              Struktur Checks & Balances Pasca Amandemen
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl lg:text-3xl font-bold text-slate-900 tabular-nums">
              4 Kasus
            </span>
            <span className="text-xs text-slate-500 mt-1">
              Simulasi Interaktif Musyawarah & Etika Warga
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl lg:text-3xl font-bold text-slate-900 tabular-nums">
              30 Soal
            </span>
            <span className="text-xs text-slate-500 mt-1">
              Asesmen Berjenjang dengan Pembahasan Yuridis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
