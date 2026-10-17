import React, { useState } from 'react';
import { CIVIC_DILEMMAS } from '../data/civicData';
import { CivicDilemma, DilemmaChoice } from '../types/civic';
import { civicImages } from '../assets/images';
import {
  Users,
  Scale,
  Shield,
  Vote,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  BookOpen
} from 'lucide-react';

interface DilemmaSimulatorModuleProps {
  onCompleteDilemma: (dilemmaId: string) => void;
  completedDilemmas: string[];
}

export const DilemmaSimulatorModule: React.FC<DilemmaSimulatorModuleProps> = ({
  onCompleteDilemma,
  completedDilemmas
}) => {
  const [activeDilemmaIndex, setActiveDilemmaIndex] = useState<number>(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

  const currentDilemma = CIVIC_DILEMMAS[activeDilemmaIndex];
  const selectedChoice = currentDilemma.choices.find((c) => c.id === selectedChoiceId) || null;

  const handleSelectChoice = (choice: DilemmaChoice) => {
    setSelectedChoiceId(choice.id);
    onCompleteDilemma(currentDilemma.id);
  };

  const handleNextDilemma = () => {
    setSelectedChoiceId(null);
    if (activeDilemmaIndex < CIVIC_DILEMMAS.length - 1) {
      setActiveDilemmaIndex((prev) => prev + 1);
    } else {
      setActiveDilemmaIndex(0);
    }
  };

  const handleResetCurrent = () => {
    setSelectedChoiceId(null);
  };

  return (
    <div className="space-y-16">
      {/* Module Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-700 uppercase mb-2">
          <span>Modul 03</span>
          <span aria-hidden="true">·</span>
          <span>Laboratorium Musyawarah</span>
          <span aria-hidden="true">·</span>
          <span>Studi Kasus Dilema Kewarganegaraan</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Simulasi Musyawarah & Keputusan Etika Publik
        </h2>
        <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed text-sm sm:text-base">
          Sebagai warga negara aktif atau pemimpin komunitas, Anda dihadapkan pada situasi dilema nyata di mana hak, kepentingan, dan regulasi saling bersinggungan. Uji kebijaksanaan Anda dalam merawat keadilan dan persatuan.
        </p>
      </div>

      {/* Dilemma Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {CIVIC_DILEMMAS.map((dilemma, idx) => {
          const isSelected = idx === activeDilemmaIndex;
          const isCompleted = completedDilemmas.includes(dilemma.id);
          return (
            <button
              key={dilemma.id}
              onClick={() => {
                setActiveDilemmaIndex(idx);
                setSelectedChoiceId(null);
              }}
              className={`flex items-center gap-2 py-2 px-3 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 border ${
                isSelected
                  ? 'bg-red-700 text-white border-red-700 font-semibold shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>Kasus 0{idx + 1}</span>
              {isCompleted && (
                <CheckCircle2
                  className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-600'}`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Two-Zone Sandbox Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Zone: Interactive Stage (Case Context & Illustration) */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[16/10] bg-slate-900">
            <img
              src={civicImages.parliamentDeliberation}
              alt="Forum Musyawarah dan Dialog Kewarganegaraan"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Forum Musyawarah Mufakat
              </span>
              <p className="text-xs text-slate-200 mt-0.5">
                Mengutamakan musyawarah untuk mencapai mufakat dalam semangat kekeluargaan.
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-semibold text-red-700">Lokasi: {currentDilemma.location}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-slate-700">Peran Anda: {currentDilemma.role}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              {currentDilemma.title}
            </h3>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Duduk Perkara & Latar Belakang
            </span>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {currentDilemma.context}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/60">
            <span className="text-xs font-bold text-red-800 uppercase tracking-wider block mb-1">
              Pertanyaan Kunci Pengambil Kebijakan:
            </span>
            <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
              {currentDilemma.problemStatement}
            </p>
          </div>
        </div>

        {/* Right Zone: Control Deck & Civic Impact Meters */}
        <div className="lg:col-span-6 space-y-6">
          {/* Choices Deck */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Opsi Keputusan Kewarganegaraan
              </span>
              {selectedChoice && (
                <button
                  onClick={handleResetCurrent}
                  className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ubah Pilihan</span>
                </button>
              )}
            </div>

            <div className="space-y-3">
              {currentDilemma.choices.map((choice, idx) => {
                const isSelected = selectedChoiceId === choice.id;
                return (
                  <button
                    key={choice.id}
                    onClick={() => handleSelectChoice(choice)}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-red-700 bg-red-50/70 shadow-sm ring-1 ring-red-700'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-red-700 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {choice.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {choice.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Civic Impact Matrix & Constitutional Feedback */}
          {selectedChoice ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  Analisis Dampak 4 Indikator Kewarganegaraan
                </span>
                <h4 className="text-lg font-bold text-slate-900">
                  Efek Keputusan terhadap Ruang Publik
                </h4>
              </div>

              {/* 4 Score Progress Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Metric 1: Unity */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      <span>Persatuan & Toleransi</span>
                    </span>
                    <span className="font-mono font-bold tabular-nums">
                      {selectedChoice.scores.unity > 0 ? `+${selectedChoice.scores.unity}` : selectedChoice.scores.unity}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        selectedChoice.scores.unity >= 5
                          ? 'bg-emerald-600'
                          : selectedChoice.scores.unity >= 0
                          ? 'bg-blue-600'
                          : 'bg-red-600'
                      }`}
                      style={{
                        width: `${Math.min(100, Math.max(10, (selectedChoice.scores.unity + 10) * 5))}%`
                      }}
                    />
                  </div>
                </div>

                {/* Metric 2: Justice */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-amber-600" />
                      <span>Keadilan Sosial</span>
                    </span>
                    <span className="font-mono font-bold tabular-nums">
                      {selectedChoice.scores.justice > 0 ? `+${selectedChoice.scores.justice}` : selectedChoice.scores.justice}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        selectedChoice.scores.justice >= 5
                          ? 'bg-emerald-600'
                          : selectedChoice.scores.justice >= 0
                          ? 'bg-amber-600'
                          : 'bg-red-600'
                      }`}
                      style={{
                        width: `${Math.min(100, Math.max(10, (selectedChoice.scores.justice + 10) * 5))}%`
                      }}
                    />
                  </div>
                </div>

                {/* Metric 3: Legal */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-red-600" />
                      <span>Kepastian Hukum</span>
                    </span>
                    <span className="font-mono font-bold tabular-nums">
                      {selectedChoice.scores.legal > 0 ? `+${selectedChoice.scores.legal}` : selectedChoice.scores.legal}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        selectedChoice.scores.legal >= 5
                          ? 'bg-emerald-600'
                          : selectedChoice.scores.legal >= 0
                          ? 'bg-slate-700'
                          : 'bg-red-600'
                      }`}
                      style={{
                        width: `${Math.min(100, Math.max(10, (selectedChoice.scores.legal + 10) * 5))}%`
                      }}
                    />
                  </div>
                </div>

                {/* Metric 4: Democracy */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Vote className="w-3.5 h-3.5 text-purple-600" />
                      <span>Partisipasi Musyawarah</span>
                    </span>
                    <span className="font-mono font-bold tabular-nums">
                      {selectedChoice.scores.democracy > 0 ? `+${selectedChoice.scores.democracy}` : selectedChoice.scores.democracy}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        selectedChoice.scores.democracy >= 5
                          ? 'bg-emerald-600'
                          : selectedChoice.scores.democracy >= 0
                          ? 'bg-purple-600'
                          : 'bg-red-600'
                      }`}
                      style={{
                        width: `${Math.min(100, Math.max(10, (selectedChoice.scores.democracy + 10) * 5))}%`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Feedback text */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Ulasan Edukasi Kewarganegaraan
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {selectedChoice.civicFeedback}
                </p>
                <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-xs text-red-700 font-semibold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Rujukan Konstitusi: {selectedChoice.constitutionalBasis}</span>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextDilemma}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
                >
                  <span>
                    {activeDilemmaIndex < CIVIC_DILEMMAS.length - 1
                      ? 'Lanjut ke Kasus Berikutnya'
                      : 'Selesaikan Seluruh Kasus'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-8 text-center text-slate-500 text-sm">
              <Sparkles className="w-6 h-6 text-slate-400 mx-auto mb-2" />
              <span>Silakan pilih salah satu opsi di atas untuk menguji dampak keputusan Anda.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
