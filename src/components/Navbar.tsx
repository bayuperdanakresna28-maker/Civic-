import React, { useState } from 'react';
import { Award, BookOpen, Menu, X, Landmark, Users, HelpCircle, BookMarked } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenReport: () => void;
  studentName: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenReport,
  studentName
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'pancasila', label: 'Pancasila', icon: Landmark },
    { id: 'konstitusi', label: 'UUD & Lembaga', icon: BookOpen },
    { id: 'simulasi', label: 'Simulasi Kasus', icon: Users },
    { id: 'kuis', label: 'Uji Kompetensi', icon: HelpCircle },
    { id: 'glosarium', label: 'Glosarium', icon: BookMarked },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => handleNavClick('pancasila')}
            className="flex items-center gap-2.5 text-left focus:outline-none group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-red-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-red-700 transition-colors whitespace-nowrap">
                Civika
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 concise single-line text links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                    isActive
                      ? 'border-red-700 text-red-700 font-semibold'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReport}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-red-700 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
              title="Lihat Rapor & Sertifikat Belajar Kewarganegaraan"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Rapor Belajar</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
          <div className="px-3 py-2 mb-2 text-xs text-slate-500 border-b border-slate-100 flex items-center justify-between">
            <span>Pelajar: {studentName}</span>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left font-medium transition-colors ${
                  isActive
                    ? 'bg-red-50 text-red-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
