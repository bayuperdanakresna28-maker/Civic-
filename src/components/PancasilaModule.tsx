import React, { useState } from 'react';
import { SILA_LIST, PRACTICE_MATCH_ITEMS, TIMELINE_EVENTS } from '../data/civicData';
import { SilaItem } from '../types/civic';
import {
  Star,
  Link as LinkIcon,
  TreePine,
  Shield,
  Wheat,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Calendar,
  Home,
  GraduationCap,
  Users,
  Flag,
  RotateCcw
} from 'lucide-react';

interface PancasilaModuleProps {
  onUpdatePracticeProgress: () => void;
}

export const PancasilaModule: React.FC<PancasilaModuleProps> = ({ onUpdatePracticeProgress }) => {
  const [selectedSilaNumber, setSelectedSilaNumber] = useState<number>(1);
  const [activeTabPractice, setActiveTabPractice] = useState<'family' | 'school' | 'community' | 'nation'>('school');

  // Mini-Game state
  const [currentMatchIndex, setCurrentMatchIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [matchScore, setMatchScore] = useState<number>(0);
  const [completedMatches, setCompletedMatches] = useState<number>(0);

  const selectedSila = SILA_LIST.find((s) => s.number === selectedSilaNumber) || SILA_LIST[0];

  const getSilaIcon = (num: number, className = 'w-6 h-6') => {
    switch (num) {
      case 1:
        return <Star className={`${className} text-amber-500 fill-amber-400`} />;
      case 2:
        return <LinkIcon className={`${className} text-amber-600`} />;
      case 3:
        return <TreePine className={`${className} text-emerald-600`} />;
      case 4:
        return <Shield className={`${className} text-red-600`} />;
      case 5:
        return <Wheat className={`${className} text-amber-600`} />;
      default:
        return <Star className={className} />;
    }
  };

  const currentMatch = PRACTICE_MATCH_ITEMS[currentMatchIndex];

  const handleAnswerSelect = (silaNum: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(silaNum);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === currentMatch.correctSila) {
      setMatchScore((prev) => prev + 10);
      onUpdatePracticeProgress();
    }
    setCompletedMatches((prev) => prev + 1);
  };

  const handleNextMatch = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    if (currentMatchIndex < PRACTICE_MATCH_ITEMS.length - 1) {
      setCurrentMatchIndex((prev) => prev + 1);
    } else {
      // Loop or restart
      setCurrentMatchIndex(0);
    }
  };

  const handleResetGame = () => {
    setCurrentMatchIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setMatchScore(0);
    setCompletedMatches(0);
  };

  return (
    <div className="space-y-16">
      {/* Module Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-700 uppercase mb-2">
          <span>Modul 01</span>
          <span aria-hidden="true">·</span>
          <span>Dasar & Falsafah Negara</span>
          <span aria-hidden="true">·</span>
          <span>Ideologi Terbuka</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Pancasila: Falsafah, Butir Pengamalan, & Praksis Nyata
        </h2>
        <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed text-sm sm:text-base">
          Pancasila bukan sekadar hafalan teks kenegaraan, melainkan panduan hidup (way of life) bangsa Indonesia dalam mewujudkan persaudaraan, keadilan sosial, dan kedaulatan rakyat.
        </p>
      </div>

      {/* Sila Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {SILA_LIST.map((sila) => {
          const isSelected = sila.number === selectedSilaNumber;
          return (
            <button
              key={sila.id}
              onClick={() => setSelectedSilaNumber(sila.number)}
              className={`p-4 rounded-xl border text-left transition-all relative ${
                isSelected
                  ? 'border-red-700 bg-red-50/60 shadow-sm ring-1 ring-red-700'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-slate-500">
                  SILA 0{sila.number}
                </span>
                {getSilaIcon(sila.number, 'w-5 h-5')}
              </div>
              <h3 className="font-semibold text-sm text-slate-900 line-clamp-1">
                {sila.title}
              </h3>
              <span className="text-xs text-slate-500 mt-1 block">
                {sila.symbol}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sila Detail Explorer */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sila Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                {getSilaIcon(selectedSila.number, 'w-8 h-8')}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-red-700">
                  Sila Ke-{selectedSila.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedSila.title}
                </h3>
                <span className="text-xs text-slate-500 mt-1 block font-medium">
                  Lambang: {selectedSila.symbol}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Makna Lambang Perisai
              </span>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                {selectedSila.symbolDesc}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Intisari Falsafah Kenegaraan
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedSila.philosophicalMeaning}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                Butir-Butir Ketetapan MPR RI No. I/MPR/2003
              </span>
              <ul className="space-y-2">
                {selectedSila.values.map((val, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="font-mono text-red-700 font-bold mt-0.5 shrink-0">
                      {(idx + 1).toString().padStart(2, '0')}.
                    </span>
                    <span className="leading-relaxed">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Practice in 4 Environments Column */}
          <div className="lg:col-span-7 flex flex-col border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8 pt-6 lg:pt-0">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Praktik Baik dalam Kehidupan Sehari-hari
                </span>
                <span className="text-xs text-slate-500">Pilih Lingkungan</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Penerapan Konkret Sila {selectedSila.number}
              </h4>
            </div>

            {/* Environment tabs (interactive segmented control) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4 p-1 bg-slate-100 rounded-xl">
              <button
                onClick={() => setActiveTabPractice('school')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTabPractice === 'school'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Sekolah</span>
              </button>

              <button
                onClick={() => setActiveTabPractice('family')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTabPractice === 'family'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Keluarga</span>
              </button>

              <button
                onClick={() => setActiveTabPractice('community')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTabPractice === 'community'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Masyarakat</span>
              </button>

              <button
                onClick={() => setActiveTabPractice('nation')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTabPractice === 'nation'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>Bernegara</span>
              </button>
            </div>

            {/* List of practices */}
            <div className="space-y-3 flex-1">
              {selectedSila.practices[activeTabPractice].map((practice, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3 hover:border-slate-300 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-sm text-slate-800 leading-relaxed font-medium">
                      {practice}
                    </p>
                    <span className="text-xs text-slate-500 mt-1 block">
                      Refleksi aksi karakter Profil Pelajar Pancasila
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-center gap-3 text-xs text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                Pengamalan Pancasila bersifat organik dan saling bertaut erat antar sila; Sila ke-1 menjiwai Sila ke-2 hingga ke-5.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mini-Game: Uji Aplikatif Pengamalan Sila */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-700">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-1">
              <span>Laboratorium Interaktif</span>
              <span aria-hidden="true">·</span>
              <span>Uji Kasus Nyata</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Tantangan Praksis: Cocokkan Skenario ke Sila yang Tepat
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Poin Prestasi</span>
              <span className="font-mono text-xl font-bold text-amber-400 tabular-nums">
                {matchScore} XP
              </span>
            </div>
            <button
              onClick={handleResetGame}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Reset Tantangan"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Current Challenge Card */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 sm:p-6 mb-6">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
            <span>
              Kasus #{currentMatchIndex + 1} dari {PRACTICE_MATCH_ITEMS.length}
            </span>
            <span>Konteks: {currentMatch.category}</span>
          </div>

          <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
            "{currentMatch.actionText}"
          </p>
        </div>

        {/* 5 Sila Choice Options */}
        <div className="space-y-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            Pilih Sila yang Paling Mendasari Tindakan di Atas:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {SILA_LIST.map((sila) => {
              const isSelected = selectedAnswer === sila.number;
              const isCorrect = currentMatch.correctSila === sila.number;

              let btnClass = 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-slate-600';
              if (isSelected) {
                btnClass = 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md';
              }
              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnClass = 'bg-emerald-600 text-white border-emerald-500 font-bold';
                } else if (isSelected && !isCorrect) {
                  btnClass = 'bg-red-600 text-white border-red-500';
                } else {
                  btnClass = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={sila.id}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleAnswerSelect(sila.number)}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${btnClass}`}
                >
                  <span className="font-mono text-xs opacity-75">Sila {sila.number}</span>
                  <span className="text-xs font-semibold line-clamp-1">{sila.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action button & Feedback */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-700">
          {!isAnswerSubmitted ? (
            <button
              onClick={handleCheckAnswer}
              disabled={selectedAnswer === null}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                selectedAnswer !== null
                  ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-sm'
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
            >
              Periksa Jawaban
            </button>
          ) : (
            <div className="w-full space-y-4">
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 ${
                  selectedAnswer === currentMatch.correctSila
                    ? 'bg-emerald-950/50 border-emerald-700 text-emerald-200'
                    : 'bg-red-950/50 border-red-700 text-red-200'
                }`}
              >
                {selectedAnswer === currentMatch.correctSila ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                )}
                <div className="text-xs sm:text-sm leading-relaxed">
                  <span className="font-bold block mb-1">
                    {selectedAnswer === currentMatch.correctSila
                      ? 'Tepat Sekali! (+10 XP)'
                      : `Jawaban Kurang Tepat. Yang benar adalah Sila ke-${currentMatch.correctSila}.`}
                  </span>
                  <span>{currentMatch.explanation}</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNextMatch}
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
                >
                  {currentMatchIndex < PRACTICE_MATCH_ITEMS.length - 1
                    ? 'Kasus Berikutnya →'
                    : 'Mulai Ulang Siklus'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Historical Timeline of Pancasila */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-700 uppercase mb-2">
            <span>Sejarah Konstitusional</span>
            <span aria-hidden="true">·</span>
            <span>Sidang BPUPKI & PPKI 1945</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Kronologi Perumusan dan Penetapan Dasar Negara
          </h3>
          <p className="mt-1 text-slate-600 text-sm leading-relaxed">
            Perjalanan dialektika intelektual para pendiri bangsa (Founding Fathers) dalam merumuskan konsensus kebangsaan.
          </p>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 md:before:left-4 before:w-0.5 before:bg-slate-200">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div key={idx} className="relative flex items-start gap-4 md:gap-6">
              <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white z-10 shadow-sm">
                {idx + 1}
              </div>

              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-red-700">
                    {event.date}
                  </span>
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Tahun {event.year}</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {event.title}
                </h4>

                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  {event.summary}
                </p>

                <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="text-slate-500">
                    <span className="font-medium text-slate-700">Tokoh Pengusung: </span>
                    <span>{event.actors.join(', ')}</span>
                  </div>
                  <span className="text-red-700 font-medium">
                    {event.historicalImpact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
