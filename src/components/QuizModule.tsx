import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/civicData';
import { QuizQuestion } from '../types/civic';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Award,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface QuizModuleProps {
  onSaveQuizScore: (packageId: string, score: number, total: number) => void;
}

export const QuizModule: React.FC<QuizModuleProps> = ({ onSaveQuizScore }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Dasar' | 'Menengah' | 'Lanjutan'>('Dasar');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [answersRecord, setAnswersRecord] = useState<{ [qId: string]: { selected: number; isCorrect: boolean } }>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const currentQuestions = QUIZ_QUESTIONS.filter((q) => q.difficulty === selectedDifficulty);
  const currentQ = currentQuestions[currentQuestionIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswerIdx(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswerIdx === null || !currentQ) return;
    const isCorrect = selectedAnswerIdx === currentQ.correctIndex;
    setIsAnswerSubmitted(true);
    setAnswersRecord((prev) => ({
      ...prev,
      [currentQ.id]: {
        selected: selectedAnswerIdx,
        isCorrect
      }
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < currentQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedAnswerIdx(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz finished
      setIsQuizCompleted(true);
      const totalCorrect = Object.values(answersRecord).filter((a) => a.isCorrect).length + (selectedAnswerIdx === currentQ.correctIndex ? 1 : 0);
      onSaveQuizScore(selectedDifficulty, totalCorrect, currentQuestions.length);
    }
  };

  const handleRestartQuiz = (difficulty: 'Dasar' | 'Menengah' | 'Lanjutan' = selectedDifficulty) => {
    setSelectedDifficulty(difficulty);
    setCurrentQuestionIdx(0);
    setSelectedAnswerIdx(null);
    setIsAnswerSubmitted(false);
    setAnswersRecord({});
    setIsQuizCompleted(false);
  };

  // Score calculations
  const totalCorrectCount = Object.values(answersRecord).filter((a) => a.isCorrect).length;
  const percentageScore = currentQuestions.length > 0 ? Math.round((totalCorrectCount / currentQuestions.length) * 100) : 0;

  const getPredicate = (pct: number) => {
    if (pct >= 85) return { grade: 'Amat Baik (A)', desc: 'Penguasaan konsep kewarganegaraan dan konstitusi sangat mumpuni.' };
    if (pct >= 70) return { grade: 'Baik (B)', desc: 'Memahami dasar hukum dan nilai Pancasila dengan baik.' };
    if (pct >= 55) return { grade: 'Cukup (C)', desc: 'Perlu memperdalam studi pasal-pasal dan hubungan antar lembaga negara.' };
    return { grade: 'Perlu Bimbingan (D)', desc: 'Silakan pelajari kembali modul materi sebelum mengulang kuis.' };
  };

  return (
    <div className="space-y-16">
      {/* Module Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-700 uppercase mb-2">
          <span>Modul 04</span>
          <span aria-hidden="true">·</span>
          <span>Evaluasi Pembelajaran</span>
          <span aria-hidden="true">·</span>
          <span>Asesmen Formatif PPKn</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Uji Kompetensi & Asesmen Civic
        </h2>
        <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed text-sm sm:text-base">
          Uji pemahaman Anda mengenai fondasi Pancasila, konstitusi UUD 1945, lembaga negara, dan hak asasi manusia. Setiap butir soal dilengkapi analisis yuridis yang mendalam.
        </p>
      </div>

      {/* Level Selection Tabs */}
      <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-fit">
        {(['Dasar', 'Menengah', 'Lanjutan'] as const).map((diff) => (
          <button
            key={diff}
            onClick={() => handleRestartQuiz(diff)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedDifficulty === diff
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {diff === 'Dasar' && 'Paket 1: Nilai Pancasila (Dasar)'}
            {diff === 'Menengah' && 'Paket 2: Konstitusi & Lembaga (Menengah)'}
            {diff === 'Lanjutan' && 'Paket 3: HAM & Demokrasi (Lanjutan)'}
          </button>
        ))}
      </div>

      {/* Main Quiz Area */}
      {!isQuizCompleted ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Question Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-md">
                Soal {currentQuestionIdx + 1} dari {currentQuestions.length}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Topik: {currentQ?.topic}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="text-slate-500">
                Skor Sementara: <strong className="font-mono text-slate-900 tabular-nums">{totalCorrectCount} Benar</strong>
              </span>
              <button
                onClick={() => handleRestartQuiz()}
                className="text-slate-500 hover:text-slate-900 flex items-center gap-1"
                title="Mulai Ulang Paket Ini"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi</span>
              </button>
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
              {currentQ?.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQ?.options.map((option, idx) => {
              const isSelected = selectedAnswerIdx === idx;
              const isCorrectAnswer = idx === currentQ.correctIndex;

              let btnStyle = 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800';
              if (isSelected) {
                btnStyle = 'border-red-700 bg-red-50/70 text-slate-900 font-semibold ring-1 ring-red-700';
              }
              if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  btnStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-600';
                } else if (isSelected && !isCorrectAnswer) {
                  btnStyle = 'border-red-600 bg-red-50 text-red-950 ring-1 ring-red-600';
                } else {
                  btnStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3.5 ${btnStyle}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-red-700 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-sm sm:text-base leading-relaxed flex-1">
                    {option}
                  </span>
                  {isAnswerSubmitted && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Actions */}
          {isAnswerSubmitted ? (
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <div
                className={`p-4 rounded-xl border ${
                  selectedAnswerIdx === currentQ.correctIndex
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-red-50 border-red-200 text-red-900'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {selectedAnswerIdx === currentQ.correctIndex ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold text-sm block mb-1">
                      {selectedAnswerIdx === currentQ.correctIndex ? 'Jawaban Benar!' : 'Jawaban Belum Tepat.'}
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {currentQ.explanation}
                    </p>
                    <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Rujukan: {currentQ.constitutionalReference}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>
                    {currentQuestionIdx < currentQuestions.length - 1
                      ? 'Soal Berikutnya'
                      : 'Lihat Hasil Akhir'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-end pt-4 border-t border-slate-200">
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswerIdx === null}
                className={`px-6 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedAnswerIdx !== null
                    ? 'bg-red-700 text-white hover:bg-red-800 shadow-sm'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Kirim Jawaban
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Final Score Card */
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-red-50 text-red-700 flex items-center justify-center mx-auto mb-4 border border-red-100">
            <Award className="w-8 h-8" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
            Hasil Asesmen Paket {selectedDifficulty}
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            Evaluasi Kompetensi Selesai!
          </h3>

          <div className="my-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 inline-block w-full">
            <div className="font-mono text-5xl font-extrabold text-slate-900 tabular-nums">
              {percentageScore}%
            </div>
            <span className="text-xs text-slate-500 mt-1 block">
              Menjawab benar {totalCorrectCount} dari {currentQuestions.length} butir pertanyaan
            </span>

            <div className="mt-4 pt-4 border-t border-slate-200">
              <span className="text-xs font-semibold text-red-700 block mb-0.5">
                Predikat: {getPredicate(percentageScore).grade}
              </span>
              <p className="text-xs text-slate-600">
                {getPredicate(percentageScore).desc}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleRestartQuiz()}
              className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              Ulangi Paket Ini
            </button>
            <button
              onClick={() =>
                handleRestartQuiz(
                  selectedDifficulty === 'Dasar'
                    ? 'Menengah'
                    : selectedDifficulty === 'Menengah'
                    ? 'Lanjutan'
                    : 'Dasar'
                )
              }
              className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            >
              Coba Paket Tingkat Lainnya
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
