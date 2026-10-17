import React, { useState } from 'react';
import { PEMBUKAAN_UUD_DATA, PASAL_LIST, STATE_INSTITUTIONS } from '../data/civicData';
import { StateInstitution } from '../types/civic';
import { civicImages } from '../assets/images';
import {
  BookOpen,
  Scale,
  Building2,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Landmark,
  FileText,
  Layers,
  Search
} from 'lucide-react';

export const ConstitutionModule: React.FC = () => {
  const [selectedAlinea, setSelectedAlinea] = useState<number>(1);
  const [selectedInstitutionId, setSelectedInstitutionId] = useState<string>('presiden');
  const [pasalCategoryFilter, setPasalCategoryFilter] = useState<string>('Semua');
  const [pasalSearchQuery, setPasalSearchQuery] = useState<string>('');

  const selectedInstitution =
    STATE_INSTITUTIONS.find((i) => i.id === selectedInstitutionId) || STATE_INSTITUTIONS[0];

  const currentAlineaData =
    PEMBUKAAN_UUD_DATA.find((a) => a.alinea === selectedAlinea) || PEMBUKAAN_UUD_DATA[0];

  const categories = [
    'Semua',
    'Hak Asasi Manusia',
    'Kewajiban Warga Negara',
    'Perekonomian & Kesejahteraan',
    'Pendidikan & Kebudayaan',
    'Pertahanan & Keamanan'
  ];

  const filteredPasals = PASAL_LIST.filter((p) => {
    const matchCategory = pasalCategoryFilter === 'Semua' || p.category === pasalCategoryFilter;
    const matchSearch =
      p.number.toLowerCase().includes(pasalSearchQuery.toLowerCase()) ||
      p.title.toLowerCase().includes(pasalSearchQuery.toLowerCase()) ||
      p.ayats.some((a) => a.text.toLowerCase().includes(pasalSearchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-16">
      {/* Module Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-700 uppercase mb-2">
          <span>Modul 02</span>
          <span aria-hidden="true">·</span>
          <span>Hukum Dasar Tertinggi</span>
          <span aria-hidden="true">·</span>
          <span>Struktur Tata Kelola Negara</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Konstitusi UUD NRI 1945 & Sistem Pembagian Kekuasaan
        </h2>
        <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed text-sm sm:text-base">
          Memahami hukum dasar tertulis Republik Indonesia, hak fundamental warga negara, serta mekanisme saling mengawasi dan mengimbangi (checks and balances) antar lembaga tinggi negara.
        </p>
      </div>

      {/* Section 1: Pembukaan UUD 1945 Explorer */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-900">
              <img
                src={civicImages.constitutionMonument}
                alt="Naskah UUD 1945 dan Timbangan Keadilan"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Staatsfundamentalnorm
                </span>
                <p className="text-xs text-slate-200 mt-0.5">
                  Pembukaan UUD 1945 adalah norma fundamental negara yang tidak dapat diubah (kekal).
                </p>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                Pilih Alinea Pembukaan
              </span>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSelectedAlinea(num)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                      selectedAlinea === num
                        ? 'bg-red-700 text-white border-red-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Alinea {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-red-700 uppercase mb-1">
                <span>Alinea Ke-{currentAlineaData.alinea}</span>
                <span aria-hidden="true">·</span>
                <span>Naskah Otentik</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {currentAlineaData.title}
              </h3>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base leading-relaxed italic font-serif">
                "{currentAlineaData.text}"
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                Kajian Makna Filosofis & Yuridis
              </span>
              <p className="text-sm text-slate-700 leading-relaxed bg-amber-50/60 border border-amber-200/50 p-4 rounded-xl">
                {currentAlineaData.meaning}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Lembaga Negara & Checks and Balances */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-700 uppercase mb-1">
            <span>Tata Kelola Trias Politica Indonesia</span>
            <span aria-hidden="true">·</span>
            <span>Mekanisme Checks and Balances</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Struktur Lembaga Tinggi Negara Pasca Amandemen
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Indonesia tidak menganut pemisahan kekuasaan absolut (separation of powers), melainkan pembagian kekuasaan (distribution of power) di mana lembaga negara saling mengimbangi demi kedaulatan rakyat.
          </p>
        </div>

        {/* Institution Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {STATE_INSTITUTIONS.map((inst) => {
            const isSelected = inst.id === selectedInstitutionId;
            return (
              <button
                key={inst.id}
                onClick={() => setSelectedInstitutionId(inst.id)}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                  isSelected
                    ? 'border-red-700 bg-red-700 text-white shadow-sm font-semibold'
                    : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-white hover:border-slate-300'
                }`}
              >
                <span className="text-xs font-mono opacity-80">{inst.branch}</span>
                <span className="text-xs font-bold line-clamp-1">{inst.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Institution Deep Dive */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-red-700">
                <span>Cabang: {selectedInstitution.branch}</span>
                <span aria-hidden="true">·</span>
                <span>Mandat Konstitusional</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {selectedInstitution.fullName} ({selectedInstitution.name})
              </h4>
            </div>

            <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs text-slate-600 max-w-sm">
              <span className="font-semibold text-slate-900 block">Sistem Rekrutmen / Anggota:</span>
              <span>{selectedInstitution.members}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            {/* Roles & Powers */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  Peran Utama dalam Sistem Ketatanegaraan
                </span>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {selectedInstitution.role}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  Tugas Konstitusional Pokok
                </span>
                <ul className="space-y-2">
                  {selectedInstitution.duties.map((duty, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  Wewenang & Hak Konstitusional
                </span>
                <ul className="space-y-2">
                  {selectedInstitution.powers.map((pow, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                      <span>{pow}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Checks and Balances Panel */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Scale className="w-4 h-4 text-red-700" />
                <span>Mekanisme Saling Mengimbangi (Checks & Balances)</span>
              </div>
              <p className="text-xs text-slate-500">
                Bagaimana lembaga ini berinteraksi dan saling mengontrol dengan lembaga negara lainnya:
              </p>

              <div className="space-y-3">
                {selectedInstitution.checksAndBalances.map((cb, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                      <span>Mitra / Sasaran:</span>
                      <span className="font-mono text-red-700">{cb.target}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cb.relationship}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Pusat Pasal Hak & Kewajiban Warga Negara */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-700 uppercase mb-1">
              <span>Eksplorasi Batang Tubuh</span>
              <span aria-hidden="true">·</span>
              <span>Hak & Kewajiban Warga Negara</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Kompilasi Pasal-Pasal Kunci UUD NRI 1945
            </h3>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari pasal, ayat, atau kata kunci..."
              value={pasalSearchQuery}
              onChange={(e) => setPasalSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent bg-slate-50"
            />
          </div>
        </div>

        {/* Category Filters (Segmented interactive buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setPasalCategoryFilter(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                pasalCategoryFilter === cat
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pasal Grid */}
        <div className="space-y-6">
          {filteredPasals.length > 0 ? (
            filteredPasals.map((pasal) => (
              <div
                key={pasal.id}
                className="p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                      {pasal.number}
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      {pasal.title}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Kategori: {pasal.category}
                  </span>
                </div>

                <div className="space-y-3 mt-4">
                  {pasal.ayats.map((ayat) => (
                    <div
                      key={ayat.ayatNumber}
                      className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm"
                    >
                      <p className="font-serif italic text-slate-800 leading-relaxed">
                        "{ayat.text}"
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-start gap-2 text-xs text-slate-600">
                        <span className="font-semibold text-slate-800 shrink-0">
                          Analisis Konstitusional:
                        </span>
                        <span>{ayat.analysis}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 text-sm">
              Tidak ditemukan pasal yang cocok dengan kriteria pencarian "{pasalSearchQuery}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
