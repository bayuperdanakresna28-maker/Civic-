import React, { useState } from 'react';
import { UserProgress } from '../types/civic';
import { CIVIC_BADGES } from '../data/civicData';
import {
  X,
  Printer,
  Award,
  Shield,
  BookOpen,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  School,
  UserCheck
} from 'lucide-react';

interface StudentReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onUpdateProfile: (name: string, school: string) => void;
}

export const StudentReportModal: React.FC<StudentReportModalProps> = ({
  isOpen,
  onClose,
  progress,
  onUpdateProfile
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(progress.studentName);
  const [schoolInput, setSchoolInput] = useState(progress.schoolName);

  if (!isOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(nameInput.trim() || 'Pelajar Indonesia', schoolInput.trim() || 'Sekolah Global Mandiri');
    setIsEditing(false);
  };

  const handlePrint = () => {
    window.print();
  };

  // Determine earned badges
  const earnedBadgesList = CIVIC_BADGES.map((b) => {
    const isEarned = progress.earnedBadges.includes(b.id);
    return { ...b, isEarned };
  });

  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header Controls (Hidden during print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-red-700" />
            <span className="font-bold text-sm text-slate-900">
              Rapor Capaian Pembelajaran Civic & Kewarganegaraan
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate / Transcript Body */}
        <div className="p-8 sm:p-10 space-y-8 print:p-6 print:m-0 print:border-none print:shadow-none bg-white">
          {/* Certificate Header Banner */}
          <div className="text-center border-b-2 border-red-700 pb-6 relative">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold text-lg">
                C
              </div>
              <div className="text-left">
                <span className="text-xs font-bold tracking-widest text-red-700 uppercase block">
                  CIVIKA INDONESIA
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Platform Pendidikan Karakter & Konstitusi Kewarganegaraan
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 font-display">
              PIAGAM & RAPOR HASIL BELAJAR PPKn
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Standar Kompetensi Literasi Konstitusi & Nilai Ketatanegaraan
            </p>
          </div>

          {/* Student Profile Info */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            {!isEditing ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-500 block">Nama Peserta Didik:</span>
                  <h2 className="text-lg font-bold text-slate-900">{progress.studentName}</h2>
                  <span className="text-xs text-slate-600 block mt-0.5">
                    Institusi / Sekolah: <strong>{progress.schoolName}</strong>
                  </span>
                </div>

                <div className="no-print flex items-center gap-2">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-xs text-red-700 hover:text-red-800 font-semibold underline"
                  >
                    Ubah Profil
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSaveProfile} className="no-print space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Nama Lengkap:
                    </label>
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full text-xs p-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-red-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Nama Sekolah / Kelas:
                    </label>
                    <input
                      type="text"
                      value={schoolInput}
                      onChange={(e) => setSchoolInput(e.target.value)}
                      className="w-full text-xs p-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-red-700"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-200 rounded-md"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 text-xs bg-red-700 text-white font-semibold rounded-md hover:bg-red-800"
                  >
                    Simpan Profil
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Competency Summary Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <span className="text-xs text-slate-500 block">Praktik Sila</span>
              <span className="font-mono text-xl font-bold text-slate-900 tabular-nums">
                {progress.completedSilaPracticeCount} Kasus
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">Selesai diuji</span>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <span className="text-xs text-slate-500 block">Studi Musyawarah</span>
              <span className="font-mono text-xl font-bold text-slate-900 tabular-nums">
                {progress.completedDilemmas.length} dari 4
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">Dilema tuntas</span>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <span className="text-xs text-slate-500 block">Kuis Terbaik</span>
              <span className="font-mono text-xl font-bold text-red-700 tabular-nums">
                {Object.values(progress.quizScores).length > 0
                  ? `${Math.max(
                      ...Object.values(progress.quizScores).map(
                        (q) => Math.round((q.score / q.total) * 100) || 0
                      )
                    )}%`
                  : '0%'}
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">Skor maksimal</span>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <span className="text-xs text-slate-500 block">Lencana Diraih</span>
              <span className="font-mono text-xl font-bold text-amber-600 tabular-nums">
                {progress.earnedBadges.length} / 4
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">Gelar kehormatan</span>
            </div>
          </div>

          {/* Badges Earned Section */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
              Lencana Kehormatan Kewarganegaraan
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {earnedBadgesList.map((badge) => (
                <div
                  key={badge.id}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 transition-colors ${
                    badge.isEarned
                      ? 'bg-amber-50/70 border-amber-300 text-amber-950'
                      : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      badge.isEarned ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-900 block truncate">
                        {badge.title}
                      </span>
                      {badge.isEarned && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      )}
                    </div>
                    <span className="text-xs text-slate-500 line-clamp-1 block">
                      {badge.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transcript Sign-Off Signature Box (Professional Indonesian Format) */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-8 text-xs text-slate-600">
            <div>
              <span className="block text-slate-400">Verifikasi Sistem:</span>
              <span className="font-mono text-slate-800 font-semibold">
                ID KELULUSAN: CIVIKA-{Math.abs(progress.studentName.split('').reduce((a, b) => a + b.charCodeAt(0), 1000))}
              </span>
              <span className="block text-slate-400 mt-1">
                Diterbitkan secara digital pada {currentDate}
              </span>
            </div>

            <div className="text-right">
              <span className="block text-slate-500">Guru Pembimbing / Instruktur PPKn</span>
              <div className="h-12 flex items-end justify-end">
                <span className="font-serif italic text-slate-800 underline decoration-slate-400">
                  Kresna Bayu Perdana, S.Pd., M.Ed.
                </span>
              </div>
              <span className="text-xs text-slate-400 block mt-0.5">
                NIP. 19890415 201503 1 002
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer (No print) */}
        <div className="no-print px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm"
          >
            Tutup Jendela
          </button>
        </div>
      </div>
    </div>
  );
};
