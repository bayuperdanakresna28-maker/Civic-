import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/civicData';
import { Search, BookMarked, Sparkles } from 'lucide-react';

export const GlossaryModule: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Konstitusi', 'Demokrasi', 'HAM', 'Tata Negara', 'Kebangsaan'];

  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchSearch =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.example.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-16">
      {/* Module Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-700 uppercase mb-2">
          <span>Modul 05</span>
          <span aria-hidden="true">·</span>
          <span>Kamus Tata Negara</span>
          <span aria-hidden="true">·</span>
          <span>Terminologi Kewarganegaraan</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Glosarium & Indeks Istilah Tata Kelola Publik
        </h2>
        <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed text-sm sm:text-base">
          Kamus referensi ringkas istilah-istilah ketatanegaraan, instrumen hukum, dan teori kewarganegaraan yang sering digunakan dalam perdebatan hukum dan diskursus publik di Indonesia.
        </p>
      </div>

      {/* Search & Filter Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari istilah, definisi, atau contoh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent bg-slate-50"
            />
          </div>

          <div className="text-xs text-slate-500 font-mono">
            Menampilkan <strong className="text-slate-900">{filteredTerms.length}</strong> istilah
          </div>
        </div>

        {/* Filter categories as segmented buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-red-700 text-white font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Glossary Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-red-700 font-mono">
                      {item.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Terminologi Resmi</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.term}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    {item.definition}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-1">
                    Contoh dalam Kehidupan Bernegara:
                  </span>
                  <span className="text-slate-600 leading-relaxed">
                    {item.example}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 text-slate-500 text-sm">
              Tidak ada istilah glosarium yang cocok dengan pencarian "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
